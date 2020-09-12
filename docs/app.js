!(function (t) {
    function e(e) {
        for (
            var r, a, i = e[0], l = e[1], c = e[2], p = 0, h = [];
            p < i.length;
            p++
        )
            (a = i[p]),
                Object.prototype.hasOwnProperty.call(s, a) &&
                    s[a] &&
                    h.push(s[a][0]),
                (s[a] = 0);
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
        for (u && u(e); h.length; ) h.shift()();
        return o.push.apply(o, c || []), n();
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, i = 1; i < n.length; i++) {
                var l = n[i];
                0 !== s[l] && (r = !1);
            }
            r && (o.splice(e--, 1), (t = a((a.s = n[0]))));
        }
        return t;
    }
    var r = {},
        s = { 1: 0 },
        o = [];
    function a(e) {
        if (r[e]) return r[e].exports;
        var n = (r[e] = { i: e, l: !1, exports: {} });
        return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
    }
    (a.m = t),
        (a.c = r),
        (a.d = function (t, e, n) {
            a.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (a.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (a.t = function (t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (a.r(n),
                Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & e && 'string' != typeof t)
            )
                for (var r in t)
                    a.d(
                        n,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return n;
        }),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, 'a', e), e;
        }),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = './');
    var i = (window.webpackJsonp = window.webpackJsonp || []),
        l = i.push.bind(i);
    (i.push = e), (i = i.slice());
    for (var c = 0; c < i.length; c++) e(i[c]);
    var u = l;
    o.push([2, 0]), n();
})([
    ,
    function (t, e, n) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = void 0);
    },
    function (t, e, n) {
        t.exports = n(4);
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function('return this')();
        } catch (t) {
            'object' == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        'use strict';
        n.r(e);
        var r = n(0);
        var s = [
            function (t, e, n) {
                return [
                    '.center',
                    e,
                    '{text-align:center}.container',
                    e,
                    '{margin-top:30px;display:flex;flex-direction:column;justify-content:center;align-items:center}table',
                    e,
                    '{width:80%}.cell',
                    e,
                    '{outline:1px solid #000;width:30px;height:30px}.alive',
                    e,
                    '{background-color:#000}.dead',
                    e,
                    '{background-color:#f0f8ff}'
                ].join('');
            }
        ];
        function o(t, e, n, r) {
            const { t: s, h: o, k: a, b: i, i: l } = t,
                { _m0: c, _m1: u } = r;
            return [
                o('div', { classMap: { container: !0, center: !0 }, key: 5 }, [
                    o('h1', { key: 0 }, [s("Conway's game of life")]),
                    o(
                        'table',
                        { key: 3 },
                        l(e.board, function (t, n) {
                            return o(
                                'tr',
                                { key: a(2, t.id) },
                                l(t.cells, function (t, s) {
                                    return o(
                                        'td',
                                        {
                                            className: t.className,
                                            attrs: {
                                                'data-row-index': n,
                                                'data-column-index': s
                                            },
                                            key: a(1, t.id),
                                            on: {
                                                click:
                                                    c ||
                                                    (r._m0 = i(e.toggelState))
                                            }
                                        },
                                        []
                                    );
                                })
                            );
                        })
                    ),
                    o(
                        'button',
                        {
                            attrs: { label: 'next' },
                            key: 4,
                            on: { click: u || (r._m1 = i(e.next)) }
                        },
                        [s('Next')]
                    )
                ])
            ];
        }
        var a = Object(r.registerTemplate)(o);
        (o.stylesheets = []),
            s && o.stylesheets.push.apply(o.stylesheets, s),
            (o.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        var i = n(1),
            l = n.n(i),
            c = { ALIVE: 1, DEAD: 0 };
        var u = Object(r.registerComponent)(
            class {
                constructor(t) {
                    if (!Object.values(c).includes(t))
                        throw new Error('Invalid state');
                    this.state = t;
                }
                nextState(t) {
                    let e;
                    return (
                        (e =
                            this.state !== c.ALIVE || (2 !== t && 3 !== t)
                                ? this.state === c.DEAD && 3 === t
                                    ? c.ALIVE
                                    : c.DEAD
                                : this.state),
                        e
                    );
                }
            },
            { tmpl: l.a }
        );
        var p = Object(r.registerComponent)(
            class {
                constructor(t) {
                    (this.numRows = t.length),
                        (this.numCols = t[0].length),
                        (this.state = t.map((t) => t.map((t) => new u(t))));
                }
                getState(t, e) {
                    return this.state[t][e];
                }
                getAliveNeigbhours(t, e) {
                    const n = { [c.ALIVE]: 1, [c.DEAD]: 0 };
                    let r = 0;
                    const s = t - 1 < 0 ? 0 : t - 1,
                        o = t + 1 >= this.numRows ? this.numRows - 1 : t + 1,
                        a = e - 1 < 0 ? 0 : e - 1,
                        i = e + 1 >= this.numCols ? this.numCols - 1 : e + 1;
                    for (let l = s; l <= o; l++)
                        for (let s = a; s <= i; s++)
                            (l === t && s === e) ||
                                (r += n[this.state[l][s].state]);
                    return r;
                }
                nextState() {
                    return this.state.map((t, e) =>
                        t.map(
                            (t, n) =>
                                new u(
                                    t.nextState(this.getAliveNeigbhours(e, n))
                                )
                        )
                    );
                }
            },
            { tmpl: l.a }
        );
        const { DEAD: h, ALIVE: d } = c;
        class f extends r.LightningElement {
            constructor(...t) {
                super(...t), (this.board = void 0), (this.size = 15);
            }
            connectedCallback() {
                (this.game = this.newGame()),
                    (this.board = this.toBoard(this.game.state));
            }
            next() {
                (this.game.state = this.game.nextState()),
                    (this.board = this.toBoard(this.game.state));
            }
            toBoard(t) {
                return t.map((t, e) => ({
                    id: e,
                    cells: t.map((t, n) => ({
                        className: t.state === d ? 'cell alive' : 'cell dead',
                        id: `${e}:${n}`
                    }))
                }));
            }
            toggelState(t) {
                const { rowIndex: e, columnIndex: n } = t.target.dataset;
                (this.game.state[e][n].state =
                    this.game.state[e][n].state === d ? h : d),
                    (this.board = this.toBoard(this.game.state));
            }
            newGame() {
                const t = new Array(this.size).fill(
                    new Array(this.size).fill(h)
                );
                return new p(t);
            }
        }
        Object(r.registerDecorators)(f, {
            publicProps: { size: { config: 0 } },
            fields: ['board']
        });
        var m = Object(r.registerComponent)(f, { tmpl: a });
        const b = Object(r.createElement)('my-app', { is: m });
        document.querySelector('#main').appendChild(b);
    }
]);
