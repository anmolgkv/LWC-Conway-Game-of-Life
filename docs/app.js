!(function (t) {
    function e(e) {
        for (
            var a, n, o = e[0], i = e[1], d = e[2], u = 0, h = [];
            u < o.length;
            u++
        )
            (n = o[u]),
                Object.prototype.hasOwnProperty.call(l, n) &&
                    l[n] &&
                    h.push(l[n][0]),
                (l[n] = 0);
        for (a in i)
            Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
        for (c && c(e); h.length; ) h.shift()();
        return r.push.apply(r, d || []), s();
    }
    function s() {
        for (var t, e = 0; e < r.length; e++) {
            for (var s = r[e], a = !0, o = 1; o < s.length; o++) {
                var i = s[o];
                0 !== l[i] && (a = !1);
            }
            a && (r.splice(e--, 1), (t = n((n.s = s[0]))));
        }
        return t;
    }
    var a = {},
        l = { 1: 0 },
        r = [];
    function n(e) {
        if (a[e]) return a[e].exports;
        var s = (a[e] = { i: e, l: !1, exports: {} });
        return t[e].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = t),
        (n.c = a),
        (n.d = function (t, e, s) {
            n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: s });
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (
                (n.r(s),
                Object.defineProperty(s, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & e && 'string' != typeof t)
            )
                for (var a in t)
                    n.d(
                        s,
                        a,
                        function (e) {
                            return t[e];
                        }.bind(null, a)
                    );
            return s;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, 'a', e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = './');
    var o = (window.webpackJsonp = window.webpackJsonp || []),
        i = o.push.bind(o);
    (o.push = e), (o = o.slice());
    for (var d = 0; d < o.length; d++) e(o[d]);
    var c = i;
    r.push([2, 0]), s();
})([
    ,
    function (t, e, s) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = void 0);
    },
    function (t, e, s) {
        t.exports = s(4);
    },
    function (t, e) {
        var s;
        s = (function () {
            return this;
        })();
        try {
            s = s || new Function('return this')();
        } catch (t) {
            'object' == typeof window && (s = window);
        }
        t.exports = s;
    },
    function (t, e, s) {
        'use strict';
        s.r(e);
        var a = s(0);
        var l = [
            function (t, e, s) {
                return [
                    '.cell',
                    e,
                    '{outline:1px solid #c7c2c2;width:30px;height:30px}'
                ].join('');
            }
        ];
        function r(t, e, s, a) {
            const { t: l, h: r, b: n, k: o, i: i, gid: d } = t,
                {
                    _m0: c,
                    _m1: u,
                    _m2: h,
                    _m3: p,
                    _m4: m,
                    _m5: y,
                    _m6: g,
                    _m7: f,
                    _m8: b
                } = a;
            return [
                r('div', { classMap: { 'slds-card': !0 }, key: 30 }, [
                    r(
                        'div',
                        {
                            classMap: {
                                'slds-card__header': !0,
                                'slds-grid': !0
                            },
                            key: 8
                        },
                        [
                            r(
                                'header',
                                {
                                    classMap: {
                                        'slds-media': !0,
                                        'slds-media_center': !0,
                                        'slds-has-flexi-truncate': !0
                                    },
                                    key: 7
                                },
                                [
                                    r(
                                        'div',
                                        {
                                            classMap: {
                                                'slds-media__body': !0
                                            },
                                            key: 1
                                        },
                                        [
                                            r(
                                                'h2',
                                                {
                                                    classMap: {
                                                        'slds-card__header-title': !0
                                                    },
                                                    key: 0
                                                },
                                                [l("Conway's game of life")]
                                            )
                                        ]
                                    ),
                                    r(
                                        'div',
                                        {
                                            classMap: { 'slds-no-flex': !0 },
                                            key: 6
                                        },
                                        [
                                            r(
                                                'button',
                                                {
                                                    classMap: {
                                                        'slds-button': !0,
                                                        'slds-button_neutral': !0
                                                    },
                                                    key: 2,
                                                    on: {
                                                        click:
                                                            c ||
                                                            (a._m0 = n(e.next))
                                                    }
                                                },
                                                [l('Next')]
                                            ),
                                            r(
                                                'button',
                                                {
                                                    classMap: {
                                                        'slds-button': !0,
                                                        'slds-button_neutral': !0
                                                    },
                                                    key: 3,
                                                    on: {
                                                        click:
                                                            u ||
                                                            (a._m1 = n(e.reset))
                                                    }
                                                },
                                                [l('Reset')]
                                            ),
                                            e.isAutoPlay
                                                ? null
                                                : r(
                                                      'button',
                                                      {
                                                          classMap: {
                                                              'slds-button': !0,
                                                              'slds-button_neutral': !0
                                                          },
                                                          key: 4,
                                                          on: {
                                                              click:
                                                                  h ||
                                                                  (a._m2 = n(
                                                                      e.play
                                                                  ))
                                                          }
                                                      },
                                                      [l('Play')]
                                                  ),
                                            e.isAutoPlay
                                                ? r(
                                                      'button',
                                                      {
                                                          classMap: {
                                                              'slds-button': !0,
                                                              'slds-button_neutral': !0
                                                          },
                                                          key: 5,
                                                          on: {
                                                              click:
                                                                  p ||
                                                                  (a._m3 = n(
                                                                      e.stop
                                                                  ))
                                                          }
                                                      },
                                                      [l('Stop')]
                                                  )
                                                : null
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    r(
                        'div',
                        {
                            classMap: {
                                'slds-card__body': !0,
                                'slds-card__body_inner': !0
                            },
                            key: 29
                        },
                        [
                            r(
                                'div',
                                { classMap: { 'slds-grid': !0 }, key: 28 },
                                [
                                    r(
                                        'div',
                                        {
                                            classMap: {
                                                'slds-col': !0,
                                                'slds-size_10-of-12': !0
                                            },
                                            key: 12
                                        },
                                        [
                                            r(
                                                'table',
                                                { key: 11 },
                                                i(e.board, function (t, s) {
                                                    return r(
                                                        'tr',
                                                        { key: o(10, t.id) },
                                                        i(t.cells, function (
                                                            t,
                                                            l
                                                        ) {
                                                            return r(
                                                                'td',
                                                                {
                                                                    classMap: {
                                                                        cell: !0
                                                                    },
                                                                    style:
                                                                        t.style,
                                                                    attrs: {
                                                                        'data-row-index': s,
                                                                        'data-column-index': l
                                                                    },
                                                                    key: o(
                                                                        9,
                                                                        t.id
                                                                    ),
                                                                    on: {
                                                                        click:
                                                                            m ||
                                                                            (a._m4 = n(
                                                                                e.toggelState
                                                                            ))
                                                                    }
                                                                },
                                                                []
                                                            );
                                                        })
                                                    );
                                                })
                                            )
                                        ]
                                    ),
                                    r(
                                        'div',
                                        {
                                            classMap: {
                                                'slds-col': !0,
                                                'slds-size_2-of-12': !0
                                            },
                                            key: 27
                                        },
                                        [
                                            r(
                                                'div',
                                                {
                                                    classMap: {
                                                        'slds-form-element': !0,
                                                        'slds-p-around_small': !0
                                                    },
                                                    key: 26
                                                },
                                                [
                                                    r(
                                                        'label',
                                                        {
                                                            classMap: {
                                                                'slds-form-element__label': !0
                                                            },
                                                            attrs: {
                                                                for:
                                                                    '' +
                                                                    d(
                                                                        'text-input-id-1'
                                                                    )
                                                            },
                                                            key: 13
                                                        },
                                                        [l('Size')]
                                                    ),
                                                    r(
                                                        'div',
                                                        {
                                                            classMap: {
                                                                'slds-grid': !0
                                                            },
                                                            key: 19
                                                        },
                                                        [
                                                            r(
                                                                'div',
                                                                {
                                                                    classMap: {
                                                                        'slds-form-element__control': !0,
                                                                        'slds-col': !0
                                                                    },
                                                                    key: 15
                                                                },
                                                                [
                                                                    r(
                                                                        'input',
                                                                        {
                                                                            classMap: {
                                                                                'slds-input': !0
                                                                            },
                                                                            attrs: {
                                                                                type:
                                                                                    'number',
                                                                                placeholder:
                                                                                    'Enter height of board'
                                                                            },
                                                                            props: {
                                                                                value:
                                                                                    e.height
                                                                            },
                                                                            key: 14,
                                                                            on: {
                                                                                change:
                                                                                    y ||
                                                                                    (a._m5 = n(
                                                                                        e.heightChangeHandler
                                                                                    ))
                                                                            }
                                                                        },
                                                                        []
                                                                    )
                                                                ]
                                                            ),
                                                            r(
                                                                'div',
                                                                {
                                                                    classMap: {
                                                                        'slds-col': !0,
                                                                        'slds-p-top_x-small': !0
                                                                    },
                                                                    key: 16
                                                                },
                                                                [l('X')]
                                                            ),
                                                            r(
                                                                'div',
                                                                {
                                                                    classMap: {
                                                                        'slds-form-element__control': !0,
                                                                        'slds-col': !0
                                                                    },
                                                                    key: 18
                                                                },
                                                                [
                                                                    r(
                                                                        'input',
                                                                        {
                                                                            classMap: {
                                                                                'slds-input': !0
                                                                            },
                                                                            attrs: {
                                                                                type:
                                                                                    'number',
                                                                                placeholder:
                                                                                    'Enter width of board'
                                                                            },
                                                                            props: {
                                                                                value:
                                                                                    e.width
                                                                            },
                                                                            key: 17,
                                                                            on: {
                                                                                change:
                                                                                    g ||
                                                                                    (a._m6 = n(
                                                                                        e.widthChangeHandler
                                                                                    ))
                                                                            }
                                                                        },
                                                                        []
                                                                    )
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    r(
                                                        'label',
                                                        {
                                                            classMap: {
                                                                'slds-form-element__label': !0
                                                            },
                                                            attrs: {
                                                                for:
                                                                    '' +
                                                                    d(
                                                                        'text-input-id-1'
                                                                    )
                                                            },
                                                            key: 20
                                                        },
                                                        [l('Alive Cell')]
                                                    ),
                                                    r(
                                                        'div',
                                                        {
                                                            classMap: {
                                                                'slds-form-element__control': !0
                                                            },
                                                            key: 22
                                                        },
                                                        [
                                                            r(
                                                                'input',
                                                                {
                                                                    classMap: {
                                                                        'slds-input': !0
                                                                    },
                                                                    attrs: {
                                                                        type:
                                                                            'color'
                                                                    },
                                                                    props: {
                                                                        value:
                                                                            e.aliveColor
                                                                    },
                                                                    key: 21,
                                                                    on: {
                                                                        change:
                                                                            f ||
                                                                            (a._m7 = n(
                                                                                e.aliveColorChangeHandler
                                                                            ))
                                                                    }
                                                                },
                                                                []
                                                            )
                                                        ]
                                                    ),
                                                    r(
                                                        'label',
                                                        {
                                                            classMap: {
                                                                'slds-form-element__label': !0
                                                            },
                                                            attrs: {
                                                                for:
                                                                    '' +
                                                                    d(
                                                                        'text-input-id-1'
                                                                    )
                                                            },
                                                            key: 23
                                                        },
                                                        [l('Dead Cell')]
                                                    ),
                                                    r(
                                                        'div',
                                                        {
                                                            classMap: {
                                                                'slds-form-element__control': !0
                                                            },
                                                            key: 25
                                                        },
                                                        [
                                                            r(
                                                                'input',
                                                                {
                                                                    classMap: {
                                                                        'slds-input': !0
                                                                    },
                                                                    attrs: {
                                                                        type:
                                                                            'color'
                                                                    },
                                                                    props: {
                                                                        value:
                                                                            e.deadColor
                                                                    },
                                                                    key: 24,
                                                                    on: {
                                                                        change:
                                                                            b ||
                                                                            (a._m8 = n(
                                                                                e.deadColorChangeHandler
                                                                            ))
                                                                    }
                                                                },
                                                                []
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                ])
            ];
        }
        var n = Object(a.registerTemplate)(r);
        (r.stylesheets = []),
            l && r.stylesheets.push.apply(r.stylesheets, l),
            (r.stylesheetTokens = {
                hostAttribute: 'my-app-_app-host',
                shadowAttribute: 'my-app-_app'
            });
        var o = s(1),
            i = s.n(o),
            d = { ALIVE: 1, DEAD: 0 };
        var c = Object(a.registerComponent)(
            class {
                constructor(t) {
                    if (!Object.values(d).includes(t))
                        throw new Error('Invalid state');
                    this.state = t;
                }
                nextState(t) {
                    let e;
                    return (
                        (e =
                            this.state !== d.ALIVE || (2 !== t && 3 !== t)
                                ? this.state === d.DEAD && 3 === t
                                    ? d.ALIVE
                                    : d.DEAD
                                : this.state),
                        e
                    );
                }
            },
            { tmpl: i.a }
        );
        var u = Object(a.registerComponent)(
            class {
                constructor(t) {
                    (this.numRows = t.length),
                        (this.numCols = t[0].length),
                        (this.state = t.map((t) => t.map((t) => new c(t))));
                }
                getState(t, e) {
                    return this.state[t][e];
                }
                getAliveNeigbhours(t, e) {
                    const s = { [d.ALIVE]: 1, [d.DEAD]: 0 };
                    let a = 0;
                    const l = t - 1 < 0 ? 0 : t - 1,
                        r = t + 1 >= this.numRows ? this.numRows - 1 : t + 1,
                        n = e - 1 < 0 ? 0 : e - 1,
                        o = e + 1 >= this.numCols ? this.numCols - 1 : e + 1;
                    for (let i = l; i <= r; i++)
                        for (let l = n; l <= o; l++)
                            (i === t && l === e) ||
                                (a += s[this.state[i][l].state]);
                    return a;
                }
                nextState() {
                    return this.state.map((t, e) =>
                        t.map(
                            (t, s) =>
                                new c(
                                    t.nextState(this.getAliveNeigbhours(e, s))
                                )
                        )
                    );
                }
            },
            { tmpl: i.a }
        );
        const { DEAD: h, ALIVE: p } = d;
        class m extends a.LightningElement {
            get isAutoPlay() {
                return !!this.timer;
            }
            constructor() {
                super(),
                    (this.timer = void 0),
                    (this.board = void 0),
                    (this.width = 18),
                    (this.height = 18),
                    (this.deadColor = '#F6EEEE'),
                    (this.aliveColor = '#f15fd9'),
                    this.loadSlds();
            }
            connectedCallback() {
                this.newGame();
            }
            heightChangeHandler(t) {
                (this.height = Number(t.target.value)), this.newGame();
            }
            widthChangeHandler(t) {
                (this.width = Number(t.target.value)), this.newGame();
            }
            deadColorChangeHandler(t) {
                this.deadColor = t.target.value;
            }
            aliveColorChangeHandler(t) {
                this.aliveColor = t.target.value;
            }
            play() {
                this.timer = setInterval(() => this.next(), 1e3);
            }
            reset() {
                this.stop(), this.newGame();
            }
            stop() {
                clearInterval(this.timer), (this.timer = null);
            }
            next() {
                (this.game.state = this.game.nextState()),
                    (this.board = this.toBoard(this.game.state));
            }
            toBoard(t) {
                return t.map((t, e) => ({
                    id: e,
                    cells: t.map((t, s) => ({
                        id: `${e}:${s}`,
                        style:
                            t.state === p
                                ? `background-color: ${this.aliveColor};`
                                : `background-color: ${this.deadColor};`
                    }))
                }));
            }
            toggelState(t) {
                const { rowIndex: e, columnIndex: s } = t.target.dataset;
                (this.game.state[e][s].state = !this.game.state[e][s].state),
                    (this.board = this.toBoard(this.game.state));
            }
            newGame() {
                const t = Array.from({ length: this.height }, () =>
                    Array.from({ length: this.width }, () =>
                        Math.random() > 0.5 ? p : h
                    )
                );
                (this.game = new u(t)),
                    (this.board = this.toBoard(this.game.state));
            }
            loadSlds() {
                const t = document.createElement('link');
                (t.href =
                    './resources/salesforce-lightning-design-system.min.css'),
                    (t.rel = 'stylesheet'),
                    this.template.appendChild(t);
            }
        }
        Object(a.registerDecorators)(m, {
            fields: [
                'timer',
                'board',
                'width',
                'height',
                'deadColor',
                'aliveColor'
            ]
        });
        var y = Object(a.registerComponent)(m, { tmpl: n });
        const g = Object(a.createElement)('my-app', { is: y });
        document.querySelector('#main').appendChild(g);
    }
]);
