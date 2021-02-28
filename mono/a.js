/*! For license information please see 265a765f89f8a344.js.LICENSE */
!(function (n, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.main = e()) : (n.main = e());
})(window, function () {
    return (function (n) {
        function e(e) {
            for (var o, a, c = e[0], u = e[1], f = e[2], s = 0, d = []; s < c.length; s++) (a = c[s]), Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), (r[a] = 0);
            for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (n[o] = u[o]);
            for (l && l(e); d.length; ) d.shift()();
            return i.push.apply(i, f || []), t();
        }
        function t() {
            for (var n, e = 0; e < i.length; e++) {
                for (var t = i[e], o = !0, c = 1; c < t.length; c++) {
                    var u = t[c];
                    0 !== r[u] && (o = !1);
                }
                o && (i.splice(e--, 1), (n = a((a.s = t[0]))));
            }
            return n;
        }
        var o = {},
            r = { 0: 0 },
            i = [];
        function a(e) {
            if (o[e]) return o[e].exports;
            var t = (o[e] = { i: e, l: !1, exports: {} });
            return n[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
        }
        (a.m = n),
            (a.c = o),
            (a.d = function (n, e, t) {
                a.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
            }),
            (a.r = function (n) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
            }),
            (a.t = function (n, e) {
                if ((1 & e && (n = a(n)), 8 & e)) return n;
                if (4 & e && "object" == typeof n && n && n.__esModule) return n;
                var t = Object.create(null);
                if ((a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
                    for (var o in n)
                        a.d(
                            t,
                            o,
                            function (e) {
                                return n[e];
                            }.bind(null, o)
                        );
                return t;
            }),
            (a.n = function (n) {
                var e =
                    n && n.__esModule
                        ? function () {
                              return n.default;
                          }
                        : function () {
                              return n;
                          };
                return a.d(e, "a", e), e;
            }),
            (a.o = function (n, e) {
                return Object.prototype.hasOwnProperty.call(n, e);
            }),
            (a.p = "https://monokai.nl/");
        var c = (window.webpackJsonp_name_ = window.webpackJsonp_name_ || []),
            u = c.push.bind(c);
        (c.push = e), (c = c.slice());
        for (var f = 0; f < c.length; f++) e(c[f]);
        var l = u;
        return i.push([59, 1]), t();
    })({
        108: function (n, e, t) {
            "use strict";
            t.r(e);
            t(61),
                t(73),
                t(49),
                t(51),
                t(90),
                t(57),
                (function () {
                    for (var n = 0, e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t)
                        (window.requestAnimationFrame = window["".concat(e[t], "'RequestAnimationFrame")]),
                            (window.cancelAnimationFrame = window["".concat(e[t], "'CancelAnimationFrame")] || window["".concat(e[t], "CancelRequestAnimationFrame")]);
                    window.requestAnimationFrame ||
                        (window.requestAnimationFrame = function (e) {
                            var t = new Date().getTime(),
                                o = Math.max(0, 16 - (t - n)),
                                r = window.setTimeout(function () {
                                    e(t + o);
                                }, o);
                            return (n = t + o), r;
                        }),
                        window.cancelAnimationFrame ||
                            (window.cancelAnimationFrame = function (n) {
                                clearTimeout(n);
                            });
                })(),
                t(97);
            function o(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE;
                return n < e ? e : n > t ? t : n;
            }
            function r(n) {
                for (var e, t = n.length; t; ) {
                    var o = [n[(e = (Math.random() * t--) >>> 0)], n[t]];
                    (n[t] = o[0]), (n[e] = o[1]);
                }
                return n;
            }
            t(106);
            var i = ["Px437_IBM_VGA8"],
                a = t(58),
                c = t.n(a);
            function u(n, e, t, o, r, i, a) {
                try {
                    var c = n[i](a),
                        u = c.value;
                } catch (n) {
                    return void t(n);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, r);
            }
            function f(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o);
                }
            }
            var l,
                s = new ((function () {
                    function n() {
                        !(function (n, e) {
                            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, n);
                    }
                    var e, t, o, r, a;
                    return (
                        (e = n),
                        (t = [
                            {
                                key: "load",
                                value:
                                    ((r = regeneratorRuntime.mark(function n() {
                                        return regeneratorRuntime.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        return n.abrupt(
                                                            "return",
                                                            new Promise(function (n, e) {
                                                                try {
                                                                    c.a.load({
                                                                        custom: { families: i },
                                                                        active: function () {
                                                                            n();
                                                                        },
                                                                        inactive: function () {
                                                                            window.setTimeout(function () {
                                                                                n();
                                                                            }, 3e3);
                                                                        },
                                                                        fontloading: function (n, e) {},
                                                                        fontactive: function (n, e) {},
                                                                        fontinactive: function (n, e) {},
                                                                        classes: !1,
                                                                    });
                                                                } catch (n) {
                                                                    e();
                                                                }
                                                            })
                                                        );
                                                    case 1:
                                                    case "end":
                                                        return n.stop();
                                                }
                                        }, n);
                                    })),
                                    (a = function () {
                                        var n = this,
                                            e = arguments;
                                        return new Promise(function (t, o) {
                                            var i = r.apply(n, e);
                                            function a(n) {
                                                u(i, t, o, a, c, "next", n);
                                            }
                                            function c(n) {
                                                u(i, t, o, a, c, "throw", n);
                                            }
                                            a(void 0);
                                        });
                                    }),
                                    function () {
                                        return a.apply(this, arguments);
                                    }),
                            },
                        ]) && f(e.prototype, t),
                        o && f(e, o),
                        n
                    );
                })())();
            function d(n, e, t, o, r, i, a) {
                try {
                    var c = n[i](a),
                        u = c.value;
                } catch (n) {
                    return void t(n);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, r);
            }
            t(92),
                t(93),
                t(95),
                ((l = regeneratorRuntime.mark(function n() {
                    var e, t, i, a, c, u, f, l, d, w, p, v, h, m, g, y, b, x, O, M, _, A, j, P, k, F;
                    return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (
                                        (F = function () {
                                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                            (y.style.transform = "skewY(-3deg) translate3d(0, ".concat(-n, "px, 0)")),
                                                A(n, l),
                                                A(n, d, !0),
                                                window.innerHeight !== m && ((m = window.innerHeight), (d.style.top = "".concat((Math.ceil(window.innerHeight / (h / e) - i) * h) / e, "px")));
                                        }),
                                        (k = function (n) {
                                            for (var e = new Array(n), t = 0; t < n; t++) e[t] = t;
                                            return e;
                                        }),
                                        (P = function () {
                                            (y.style.margin = "0 auto"), (y.style.position = "relative");
                                            var n = y.offsetHeight;
                                            (g.style.height = "".concat(n, "px")), (y.style.position = "fixed");
                                            var e = c("p.measure")[0],
                                                t = e.getBoundingClientRect().width,
                                                o = e.offsetHeight;
                                            j(t, o),
                                                (p === (p = Math.floor(y.offsetWidth / t)) && w) ||
                                                    (w = k(i).map(function () {
                                                        return r(k(p));
                                                    }));
                                            var a = Math.floor((g.offsetWidth - y.offsetWidth) / 2);
                                            [l, d].forEach(function (n) {
                                                (n.width = p * v), (n.height = i * h), (n.style.width = "".concat(Math.floor(p * t), "px")), (n.style.height = "".concat(Math.floor(i * o), "px")), (n.style.left = "".concat(a, "px"));
                                            }),
                                                (y.style.margin = "0 ".concat(a, "px")),
                                                F(window.scrollY || window.pageYOffset);
                                        }),
                                        (j = function (n, o) {
                                            (f = []), (v = n * e), (h = o * e);
                                            var r = [
                                                [2, 8],
                                                [5, 10],
                                                [13, 7],
                                                [0, 0],
                                            ];
                                            f = r.map(function (i, a) {
                                                var c = document.createElement("canvas");
                                                (c.width = n * e), (c.height = o * e);
                                                var u = c.getContext("2d");
                                                if (((u.fillStyle = t), a === r.length - 1)) u.fillRect(0, 0, c.width, c.height);
                                                else for (var f = (n / 8) * e, l = 0; l < c.height / f; l++) for (var s = 0; s < c.width / f; s++) i[l % 2] & (1 << s % 4) && u.fillRect(s * f, l * f, f, f);
                                                return c;
                                            });
                                        }),
                                        (A = function (n, t) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                a = Math.floor((n * e) / h);
                                            a < 0 && (a = 0);
                                            var c = t.getContext("2d");
                                            c.clearRect(0, 0, p * v, i * h);
                                            for (var u = r ? Math.floor(a / i + 1) * i - a : a, l = r ? -1 : 1, s = r ? 0 : 1, d = 8, m = 3, g = (n * e) % h, y = 0; y < i; y++)
                                                for (var b = (-m + y + s) / (i - m) - (g / h / (i - m)) * l, x = r ? (i - y) * h - g : y * h - g, O = 0; O < p; O++) {
                                                    var M = w[(y + u) % i][O];
                                                    if (M / p > b) {
                                                        var _ = M / p - b,
                                                            A = o(Math.floor(4 * _ * d), 0, 3);
                                                        c.drawImage(f[A], Math.round(O * v), Math.round(x));
                                                    }
                                                }
                                        }),
                                        (_ = function () {
                                            var n = (b - x) * u;
                                            Math.abs(n) < a ? (O = !1) : (F((x += n)), window.requestAnimationFrame(_));
                                        }),
                                        (M = function () {
                                            window.addEventListener("resize", P, !1),
                                                (g = c(".container")[0]),
                                                (y = c(".content")[0]),
                                                (l = c("canvas.top")[0]),
                                                (d = c("canvas.bottom")[0]),
                                                P(),
                                                (b = x = window.scrollY || window.pageYOffset),
                                                (g.style.opacity = 1),
                                                window.addEventListener("touchstart", function () {
                                                    u = 1;
                                                }),
                                                window.addEventListener("scroll", function () {
                                                    (b = window.scrollY || window.pageYOffset), O || ((O = !0), _());
                                                }),
                                                _();
                                        }),
                                        (e = window.devicePixelRatio || 1),
                                        (t = "#2d2a2e"),
                                        (i = 6),
                                        (a = 0.01),
                                        (c = document.querySelectorAll.bind(document)),
                                        (u = 0.25),
                                        (f = null),
                                        (l = null),
                                        (d = null),
                                        (w = null),
                                        (p = 0),
                                        (v = 0),
                                        (h = 0),
                                        (m = 0),
                                        (g = null),
                                        (y = null),
                                        (b = 0),
                                        (x = 0),
                                        (O = !1),
                                        (n.next = 28),
                                        s.load()
                                    );
                                case 28:
                                    M();
                                case 29:
                                case "end":
                                    return n.stop();
                            }
                    }, n);
                })),
                function () {
                    var n = this,
                        e = arguments;
                    return new Promise(function (t, o) {
                        var r = l.apply(n, e);
                        function i(n) {
                            d(r, t, o, i, a, "next", n);
                        }
                        function a(n) {
                            d(r, t, o, i, a, "throw", n);
                        }
                        i(void 0);
                    });
                })();
        },
        59: function (n, e, t) {
            t(60), (n.exports = t(108));
        },
        60: function (n, e, t) {},
        92: function (n, e) {
            function t(n) {
                var e = new Error("Cannot find module '" + n + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            (t.keys = function () {
                return [];
            }),
                (t.resolve = t),
                (n.exports = t),
                (t.id = 92);
        },
        93: function (n, e, t) {
            var o = { "./images/share-image.png": 94 };
            function r(n) {
                var e = i(n);
                return t(e);
            }
            function i(n) {
                if (!t.o(o, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                }
                return o[n];
            }
            (r.keys = function () {
                return Object.keys(o);
            }),
                (r.resolve = i),
                (n.exports = r),
                (r.id = 93);
        },
        94: function (n, e, t) {
            n.exports = t.p + "images/share-image.png";
        },
        95: function (n, e, t) {
            var o = { "./images/favicon.png": 96 };
            function r(n) {
                var e = i(n);
                return t(e);
            }
            function i(n) {
                if (!t.o(o, n)) {
                    var e = new Error("Cannot find module '" + n + "'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                }
                return o[n];
            }
            (r.keys = function () {
                return Object.keys(o);
            }),
                (r.resolve = i),
                (n.exports = r),
                (r.id = 95);
        },
        96: function (n, e, t) {
            n.exports = t.p + "images/favicon.png";
        },
    });
});
