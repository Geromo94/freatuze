(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "0G2K":
            /*!******************************************************!*\
              !*** ./src/v2Components/game-beta-access/index.styl ***!
              \******************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "2X85":
            /*!********************************************************!*\
              !*** ./src/v2Components/connected-accounts/index.styl ***!
              \********************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "3ZJE":
            /*!***************************************************************!*\
              !*** ./src/v2Components/communication-preferences/index.styl ***!
              \***************************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "4ISH":
            /*!****************************!*\
              !*** ./src/utils/hooks.ts ***!
              \****************************/
            /*! exports provided: useWindowSize, useXgpMobileAppCookie */
            /*! exports used: useWindowSize, useXgpMobileAppCookie */
            function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return c
                })), n.d(t, "b", (function() {
                    return o
                }));
                var a = n( /*! react */ "ERkP"),
                    r = n( /*! js-cookie */ "fYnN"),
                    i = n( /*! @riotgames/a12l-types */ "OMMC"),
                    c = function() {
                        var e = Object(a.useState)({
                                width: void 0,
                                height: void 0
                            }),
                            t = e[0],
                            n = e[1];
                        return Object(a.useEffect)((function() {
                            function e() {
                                n({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            }
                            return window.addEventListener("resize", e), e(),
                                function() {
                                    return window.removeEventListener("resize", e)
                                }
                        }), []), t
                    },
                    o = function() {
                        var e = Object(a.useState)(!1),
                            t = e[0],
                            n = e[1];
                        return Object(a.useEffect)((function() {
                            r.get(i.XGP_APP_MOBILE_COOKIE_NAME) && n(!0)
                        }), []), t
                    }
            },
        "52Zb":
            /*!************************************************************!*\
              !*** ./src/providers/xboxGamePassProvider.tsx + 1 modules ***!
              \************************************************************/
            /*! exports provided: useXboxGamePassProvider, XboxGamePassProvider */
            /*! exports used: XboxGamePassProvider, useXboxGamePassProvider */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/react/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/lib/api.ts */
            function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return s
                })), n.d(t, "a", (function() {
                    return l
                }));
                var a = n("ERkP"),
                    r = n("/wep"),
                    i = function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function c(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function o(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(c, o)
                            }
                            s((a = a.apply(e, t || [])).next())
                        }))
                    },
                    c = function(e, t) {
                        var n, a, r, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function o(i) {
                            return function(o) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c;) try {
                                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return c.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                c.label++, a = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = c.ops.pop(), c.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = c.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    c = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    c.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && c.label < r[1]) {
                                                    c.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && c.label < r[2]) {
                                                    c.label = r[2], c.ops.push(i);
                                                    break
                                                }
                                                r[2] && c.ops.pop(), c.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, c)
                                    } catch (e) {
                                        i = [6, e], a = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, o])
                            }
                        }
                    },
                    o = a.createContext({}),
                    s = function() {
                        return a.useContext(o)
                    },
                    l = function(e) {
                        var t = e.children,
                            n = a.useState(null),
                            s = n[0],
                            l = n[1],
                            u = a.useState(null),
                            d = u[0],
                            m = u[1],
                            f = a.useState(null),
                            E = f[0],
                            b = f[1],
                            p = a.useState(!1),
                            g = p[0],
                            _ = p[1],
                            v = a.useState(!1),
                            N = v[0],
                            M = v[1],
                            O = a.useState(null),
                            S = O[0],
                            y = O[1],
                            A = a.useState(null),
                            h = A[0],
                            I = A[1],
                            C = a.useState(null),
                            j = C[0],
                            T = C[1];
                        a.useEffect((function() {
                            var e = new URLSearchParams(window.location.search),
                                t = e.get("method"),
                                n = e.get("result");
                            "xbox" === t && "already_linked" === n && b(!0)
                        }), []);
                        var w, D, L, k = a.useCallback((function() {
                                return i(void 0, void 0, void 0, (function() {
                                    var e;
                                    return c(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, r.getUser()];
                                            case 1:
                                                return e = t.sent(), l(e), [2, e]
                                        }
                                    }))
                                }))
                            }), []),
                            P = a.useCallback((function() {
                                return i(void 0, void 0, void 0, (function() {
                                    var e, t, n, a, i;
                                    return c(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                return c.trys.push([0, 2, , 3]), M(!0), [4, r.getGamePassSubscriptionState()];
                                            case 1:
                                                return e = c.sent(), n = (t = e || {}).status, a = t.remaining, i = t.delay, y(n), I(a), T(i), _(!1), a <= 0 && M(!1), [2, e];
                                            case 2:
                                                return c.sent(), M(!1), y(null), I(null), T(null), m(!0), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }), []),
                            x = a.useCallback((function() {
                                _(!0)
                            }), []);
                        return w = P, D = h > 0 && !g ? null != j ? j : 1e3 : null, L = a.useRef(null), a.useEffect((function() {
                            L.current = w
                        }), [w]), a.useEffect((function() {
                            if (null !== D) {
                                var e = setInterval((function() {
                                    return L.current()
                                }), D);
                                return function() {
                                    return clearInterval(e)
                                }
                            }
                        }), [D]), a.createElement(o.Provider, {
                            value: {
                                user: s,
                                gamePassStatus: S,
                                gamePassStatusError: d,
                                gamePassLinkingError: E,
                                getUser: k,
                                getGamePassStatus: P,
                                skipGamePassStatus: x,
                                gamePassStatusLoading: N
                            }
                        }, t)
                    }
            },
        "5BPB":
            /*!******************************************************!*\
              !*** ./src/v2Components/login-management/index.styl ***!
              \******************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "7Ic6":
            /*!**********************************************!*\
              !*** ./src/v2Components/mfa-card/index.styl ***!
              \**********************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "9j71":
            /*!****************************************!*\
              !*** ./src/plugins/account/lib/api.ts ***!
              \****************************************/
            /*! exports provided: updateUserPassword, verifyUserEmail, getEmailVerificationStatus, resendVerificationEmail, verifyEmail, verifyMfa, deleteAccount, queryBalances, getSecurityOption, updateSecurityOption, queryRecentLoginLogs, validateNormalAccount, checkInvites */
            /*! exports used: checkInvites, deleteAccount, getEmailVerificationStatus, getSecurityOption, queryBalances, queryRecentLoginLogs, resendVerificationEmail, updateSecurityOption, updateUserPassword, validateNormalAccount, verifyEmail, verifyMfa, verifyUserEmail */
            function(e, t, n) {
                "use strict";
                n.d(t, "i", (function() {
                    return i
                })), n.d(t, "m", (function() {
                    return c
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "g", (function() {
                    return s
                })), n.d(t, "k", (function() {
                    return l
                })), n.d(t, "l", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return d
                })), n.d(t, "e", (function() {
                    return m
                })), n.d(t, "d", (function() {
                    return f
                })), n.d(t, "h", (function() {
                    return E
                })), n.d(t, "f", (function() {
                    return b
                })), n.d(t, "j", (function() {
                    return p
                })), n.d(t, "a", (function() {
                    return g
                }));
                var a = n( /*! ../../../lib/api */ "/wep"),
                    r = "/api/account/v1/user";
                function i(e, t) {
                    return Object(a.request)(r + "/password", {
                        method: "PUT",
                        body: {
                            password: e,
                            currentPassword: t
                        },
                        json: !0
                    })
                }
                function c(e) {
                    return Object(a.request)(r + "/email", {
                        method: "POST",
                        body: {
                            email: e
                        },
                        json: !0
                    })
                }
                function o() {
                    return Object(a.request)(r + "/email", {
                        method: "GET"
                    })
                }
                function s() {
                    return Object(a.request)(r + "/email/resend", {
                        method: "POST"
                    })
                }
                function l(e) {
                    return Object(a.request)("/email-verification", {
                        method: "PUT",
                        body: {
                            token: e
                        },
                        json: !0
                    })
                }
                function u(e, t) {
                    return Object(a.request)("/mfa-verification", {
                        method: "PUT",
                        body: {
                            token: e,
                            locale: t
                        },
                        json: !0
                    })
                }
                function d(e) {
                    return Object(a.request)(r + "/delete", {
                        method: "POST",
                        body: {
                            identityToken: e
                        },
                        json: !0
                    })
                }
                function m(e) {
                    return Object(a.request)(r + "/delete/" + e, {
                        method: "GET",
                        json: !0
                    })
                }
                function f() {
                    return Object(a.request)(r + "/security", {
                        method: "GET",
                        json: !0
                    })
                }
                function E(e, t, n) {
                    return Object(a.request)(r + "/security", {
                        method: "PUT",
                        body: {
                            notify: e,
                            kick: t,
                            lock: n
                        },
                        json: !0
                    })
                }
                function b() {
                    return Object(a.request)(r + "/security/logs", {
                        method: "GET",
                        json: !0
                    })
                }
                function p() {
                    return Object(a.request)(r + "/recovery", {
                        method: "GET",
                        json: !0
                    })
                }
                function g() {
                    return Object(a.request)(r + "/beta-access/invites", {
                        method: "GET",
                        json: !0
                    })
                }
            },
        "9pUx":
            /*!****************************************************************!*\
              !*** ./src/v2Components/connected-accounts/tooltip/index.styl ***!
              \****************************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        IjFT:
            /*!******************************************************!*\
              !*** ./src/v2Components/main/index.tsx + 25 modules ***!
              \******************************************************/
            /*! exports provided: MODAL_ZINDEX, default */
            /*! all exports used */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/a12l-types/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/accounts-react-components/lib/DesignSystem/index.js */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/accounts-react-components/lib/Theme/index.js */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/accounts-react-components/lib/index.js */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/accounts-react-components/lib/v2.js */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/password-validation/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/rioti18n/lib/rioti18n.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/username-validation/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/@riotgames/ux-react-components/dist/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/lodash/lodash.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/react-redux/es/index.js */
            /*! ModuleConcatenation bailout: Cannot concat with /home/jenkins/workspace/RSO/build-release/node_modules/react/index.js (<- Module is not an ECMAScript module) */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/actions/user.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/lib/api.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/lib/i18n.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/account/actions/index.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/account/reducer/index.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/error/actions/index.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/links/actions/index.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/links/lib/api.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/riot-id/actions/change.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/riot-id/actions/eligibility.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/riot-id/actions/generate.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/riot-id/lib/utils.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/riot-id/reducer/change.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/plugins/subscriptions/actions/index.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/providers/xboxGamePassProvider.tsx */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/store/constants.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/store/selectors.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/google-analytics-helper.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/utils/hooks.ts */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/v2Components/email-verification-banner/index.tsx */
            /*! ModuleConcatenation bailout: Cannot concat with ./src/v2Components/mfa-banner/index.tsx */
            /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-i18next/dist/es/Trans.js */
            /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-i18next/dist/es/useTranslation.js */
            function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "MODAL_ZINDEX", (function() {
                    return et
                })), n.d(t, "default", (function() {
                    return tt
                }));
                var a = n("ERkP"),
                    r = n("O94r"),
                    i = n.n(r),
                    c = Object.prototype;
                var o = Object.prototype.hasOwnProperty;
                function s(e) {
                    if (!e) return !0;
                    if (function(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || c)
                        }(e)) return !Object.keys(e).length;
                    for (var t in e)
                        if (o.call(e, t)) return !1;
                    return !0
                }
                var l, u = n("lysJ"),
                    d = n("O4nq"),
                    m = n("9Koi"),
                    f = a.createContext({
                        theme: d.f.riot,
                        color: d.a.dark,
                        display: d.b.page
                    }),
                    E = n("kYLl"),
                    b = n("wrv0"),
                    p = n("bgs+"),
                    g = (n("qR4Z"), n("x5YZ")),
                    _ = n("zAOS"),
                    v = n("0D4W"),
                    N = n("jIc5"),
                    M = n("uDfI"),
                    O = n("qFAn"),
                    S = n("Uqwf"),
                    y = n("p+NC");
                ! function(e) {
                    e.affirm = "affirm", e.locked = "locked", e.error = "error", e.loading = "loading"
                }(l || (l = {}));
                var A, h = function(e, t) {
                        return void 0 === t && (t = 18), e.length > t
                    },
                    I = function() {
                        var e, t, n = Object(m.a)(),
                            r = n.t,
                            c = n.i18n,
                            o = Object(M.b)(),
                            s = Object(M.c)(N.a),
                            d = Object(M.c)(N.g),
                            f = Object(M.c)(N.n),
                            A = Object(M.c)(N.l),
                            I = Object(M.c)(N.d),
                            C = Object(M.c)(N.e),
                            j = Object(M.c)(N.c),
                            T = Object(M.c)(N.j),
                            w = s.game_name,
                            D = void 0 === w ? "" : w,
                            L = s.tag_line,
                            k = void 0 === L ? "" : L,
                            P = a.useState(D),
                            x = P[0],
                            R = P[1],
                            z = a.useState(k),
                            U = z[0],
                            G = z[1],
                            B = a.useState(!1),
                            Y = B[0],
                            F = B[1],
                            H = a.useState(!1),
                            Q = H[0],
                            V = H[1],
                            K = a.useState(!1),
                            W = K[0],
                            q = K[1],
                            Z = a.useState(!1),
                            X = Z[0],
                            J = Z[1],
                            $ = a.useState(!1),
                            ee = $[0],
                            te = $[1];
                        a.useEffect((function() {
                            o(Object(O.a)())
                        }), []), a.useEffect((function() {
                            d && G(d)
                        }), [d]);
                        var ne = j === S.a.SAVING,
                            ae = A && !ne ? l.loading : f || !I ? l.locked : j === S.a.FINISHED ? l.affirm : null;
                        ne ? ae = l.locked : T && (ae = l.error);
                        var re = !ne && ae !== l.affirm && ae !== l.loading && (x !== D || U !== k),
                            ie = r("riot-id-next-change-date");
                        if (C) {
                            var ce = new Intl.DateTimeFormat(p.posixToBCP47(c.language)).format(new Date(C));
                            ie = r("riot-id-next-change-date", {
                                DATE: ce,
                                interpolation: {
                                    escapeValue: !1
                                }
                            })
                        }
                        var oe = i()(((e = {})["riot-id__textLengthButton"] = h(r("save-changes")), e)),
                            se = x !== D || U !== k,
                            le = ae === l.locked || !I,
                            ue = x !== D && x.length < 3,
                            de = U !== k && U.length < 3,
                            me = ue || de,
                            fe = x.length > 0 && U.length > 0,
                            Ee = a.createElement("div", {
                                className: "riot-id__description"
                            }, a.createElement("div", null, a.createElement("p", null, r("riot-id-description")), !D && !k && a.createElement("p", {
                                className: "riot-id__setupYourId"
                            }, r("setup-your-riot-id"))), re && a.createElement("div", {
                                className: "riot-id__message"
                            }, r("riot-eligibility-time")), !I && a.createElement("div", {
                                className: "riot-id__message"
                            }, ie)),
                            be = i()(((t = {})["riot-id__textLengthSection"] = h(r("save-changes")), t), "riot-id__buttonSection", re && "riot-id__editMode"),
                            pe = a.createElement("h1", {
                                className: "riot-id__title"
                            }, r("riot-id-title"));
                        return a.createElement(E.m, {
                            className: "riot-id__splitCard",
                            header: pe,
                            description: Ee
                        }, ae === l.loading ? a.createElement("div", {
                            className: "riot-id__loaderContainer"
                        }, a.createElement(E.l, null)) : a.createElement("div", {
                            className: "riot-id__bodySection"
                        }, a.createElement("div", null, a.createElement("div", {
                            className: "riot-id__infoSection"
                        }, a.createElement(u.l, {
                            className: "riot-id__riotId",
                            "data-testid": "riot-id__riotId",
                            label: r("riot-id-label"),
                            value: x,
                            onValueChange: function(e) {
                                R(e), Object(y.c)(Q, V, "A12L.RiotId", "Has begun typing Riot id field")
                            },
                            disabled: le,
                            readOnly: ae === l.affirm,
                            maxLength: 16,
                            minLength: 3,
                            lengthCountdown: !0,
                            error: ue,
                            status: u.e[ae]
                        }), a.createElement(u.k, {
                            className: "riot-id__tagline",
                            "data-testid": "riot-id__tagline",
                            label: r("tagline-label"),
                            value: U,
                            onValueChange: function(e) {
                                G(e), Object(y.c)(W, q, "A12L.RiotIdTagLine", "Has begun typing Tagline field")
                            },
                            disabled: le,
                            readOnly: ae === l.affirm,
                            maxLength: 5,
                            minLength: 3,
                            lengthCountdown: !0,
                            onRefresh: function() {
                                x && (te(!0), o(Object(_.a)(x)))
                            },
                            error: de,
                            status: u.e[ae]
                        }))), a.createElement("div", {
                            className: be
                        }, re && a.createElement(u.a, {
                            buttonType: u.c.secondary,
                            buttonSize: u.b.S,
                            className: oe,
                            "data-testid": "riot-id__cancel-btn",
                            label: r("cancel"),
                            onClick: function() {
                                Object(y.c)(X, J, "A12L.RiotIdCancel", "Cancelled editing RiotId"), R(D), G(k)
                            }
                        }), ae === l.affirm ? a.createElement(u.a, {
                            "data-testid": "riot-id__affirm-btn",
                            label: r("save-changes"),
                            buttonType: u.c.primary,
                            buttonSize: u.b.S,
                            className: oe,
                            checked: !0
                        }) : a.createElement(u.a, {
                            buttonType: u.c.primary,
                            buttonSize: u.b.S,
                            className: oe,
                            "data-testid": "riot-id__save-btn",
                            label: r("save-changes"),
                            onClick: function() {
                                Object(y.c)(Y, F, "A12L.RiotIdSave", "Attempted RiotId save"), te(!0), o(Object(g.a)({
                                    game_name: x,
                                    tag_line: U
                                }, {
                                    email_locale: c.language
                                }))
                            },
                            disabled: le || !re || !se || me || !fe,
                            isLoading: ne
                        })), T && ee && a.createElement("div", {
                            className: "riot-id__toast"
                        }, a.createElement(b.m, {
                            "data-testid": "toast",
                            state: "error",
                            dismissAction: a.createElement(b.n, {
                                label: "Dismiss",
                                onClick: function() {
                                    te(!1)
                                }
                            })
                        }, function(e) {
                            var t = "";
                            return e ? (t = Object(v.a)(e) || Object(v.c)(e) || Object(v.d)(e) ? r("riot-id-unavailable-error") : r("server_error"), Object(y.d)(t), t) : t
                        }(T)))))
                    },
                    C = (n("/uFU"), n("OMMC")),
                    j = (n("v+3+"), function(e, t) {
                        return void 0 === t && (t = 18), e.length > t
                    }),
                    T = function(e) {
                        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
                    },
                    w = n("US7Q"),
                    D = function() {
                        var e, t, n = Object(m.a)().t,
                            r = Object(M.b)(),
                            c = a.useState(!1),
                            o = c[0],
                            s = c[1],
                            l = a.useState(!1),
                            u = l[0],
                            d = l[1],
                            f = a.useState(!1),
                            p = f[0],
                            g = f[1],
                            _ = a.useState(!1),
                            v = _[0],
                            N = _[1],
                            O = a.useState(!1),
                            S = O[0],
                            A = O[1],
                            h = a.useState(!1),
                            I = h[0],
                            D = h[1],
                            L = a.useState(!1),
                            k = L[0],
                            P = L[1],
                            x = a.useState(""),
                            R = x[0],
                            z = x[1],
                            U = a.useState(!1),
                            G = U[0],
                            B = U[1],
                            Y = a.useState(!1),
                            F = Y[0],
                            H = Y[1],
                            Q = a.useState(!1),
                            V = Q[0],
                            K = Q[1],
                            W = Object(M.c)((function(e) {
                                return e.user
                            })),
                            q = Object(M.c)((function(e) {
                                var t;
                                return (null === (t = e.account) || void 0 === t ? void 0 : t.emailVerification) || {}
                            })),
                            Z = W.email,
                            X = W.email_status === C.EmailStatus.NOT_VALIDATED,
                            J = q && (q.mode === C.EmailTokenMode.VERIFY || q.mode === C.EmailTokenMode.UPDATE) && X,
                            $ = q.isLoading;
                        a.useEffect((function() {
                            r(Object(w.e)())
                        }), []), a.useEffect((function() {
                            V && q.responseOk && !q.isLoading && (z(q.email), K(!1))
                        }), [q]);
                        var ee, te, ne = n("personal-information-title"),
                            ae = n("personal-information-privacy-first-section"),
                            re = n("personal-information-privacy-second-section"),
                            ie = n("riot-privacy-notice"),
                            ce = n("learn-more-information"),
                            oe = n("resend-verification"),
                            se = n("verify-email"),
                            le = n("email-address-capitalized"),
                            ue = n("home-country"),
                            de = n("date-of-birth"),
                            me = n("cancel-cta"),
                            fe = n("save-and-verify"),
                            Ee = n("email-unverified"),
                            be = n("email-invalid"),
                            pe = n("day"),
                            ge = n("month"),
                            _e = n("year"),
                            ve = (ee = W.birth_date || "01-01-1970", te = ee.split("-"), {
                                day: 1,
                                month: 1,
                                year: parseInt(te[0], 10)
                            }),
                            Ne = a.useState(Z),
                            Me = Ne[0],
                            Oe = Ne[1],
                            Se = a.useState(!1),
                            ye = Se[0],
                            Ae = Se[1],
                            he = a.useState(Ee),
                            Ie = he[0],
                            Ce = he[1],
                            je = a.useState(!1),
                            Te = je[0],
                            we = je[1];
                        a.useEffect((function() {
                            Ae(X)
                        }), [X]);
                        var De = a.createElement("h1", {
                                className: "personal-information-card__title"
                            }, ne),
                            Le = a.createElement("div", null, a.createElement("p", {
                                className: "personal-information-card__description"
                            }, ae, "В ", a.createElement("a", {
                                href: n("privacy-notice-link"),
                                target: "_blank",
                                onClick: function() {
                                    return Object(y.c)(I, D, "A12L.PrivacyNoticeClick", "Clicked on Personal Info privacy notice."), !0
                                },
                                rel: "noreferrer"
                            }, ie), "В ", re)),
                            ke = i()(((e = {})["personal-information-card__textLengthSection"] = j(fe), e), "personal-information-card__buttonSection"),
                            Pe = i()(((t = {})["personal-information-card__textLengthButton"] = j(fe), t)),
                            xe = a.createElement(b.a, {
                                buttonType: b.c.secondary,
                                buttonSize: b.b.S,
                                className: Pe,
                                "data-testid": "personal-information-card__cancel-btn",
                                label: me,
                                onClick: function() {
                                    H(!1), Oe(R || Z), B(!1), Ae(X), Ce(Ee), Object(y.c)(k, P, "A12L.PersonalInfoCancel", "Cancelled editing email in Personal Info card.")
                                }
                            }),
                            Re = a.createElement(b.a, {
                                buttonType: b.c.primary,
                                buttonSize: b.b.S,
                                disabled: !G || !T(Me) || $,
                                isLoading: $,
                                className: Pe,
                                "data-testid": "personal-information-card__saveChanges-btn",
                                label: fe,
                                onClick: function() {
                                    Object(y.c)(u, d, "A12L.SaveEmailEdit", "Attempted saving email change."), r(Object(w.a)(Me)), we(!0), H(!1), B(!1), K(!0)
                                }
                            }),
                            ze = a.createElement(b.a, {
                                isLoading: $,
                                buttonType: b.c.primaryAlt,
                                buttonSize: b.b.S,
                                className: Pe,
                                "data-testid": "personal-information-card" + (J ? "__resendEmail-btn" : "__verifyEmail-btn"),
                                label: J ? oe : se,
                                onClick: J ? function() {
                                    Object(y.c)(p, g, "A12L.ResendEmail", "Clicked email resend button."), r(Object(w.i)()), we(!0), H(!1), K(!0)
                                } : function() {
                                    Object(y.c)(o, s, "A12L.VerifyEmail", 'Clicked "Verify Email" button.'), r(Object(w.a)()), we(!0)
                                }
                            });
                        return a.createElement(E.m, {
                            header: De,
                            description: Le
                        }, a.createElement("div", {
                            className: "personal-information-card__bodySection"
                        }, a.createElement("div", {
                            className: "personal-information-card__userInfoAddressSection"
                        }, a.createElement(b.l, {
                            error: ye,
                            "data-testid": "personal-information-card__emailAddress",
                            className: i()("personal-information-card__userField", "personal-information-card__emailAddress"),
                            label: le,
                            value: Me,
                            onFocus: function() {
                                F || Oe(""), B(!0)
                            },
                            onValueChange: function(e) {
                                Oe(e), T(e) ? (Ae(X), Ce(Ee)) : (Ae(!0), Ce(be)), Object(y.c)(v, N, "A12L.BeginEmailAddressEdit", "Began editing email address in Personal Info card."), H(!0)
                            },
                            onBlur: function() {
                                "" === Me ? (Oe(R || Z), H(!1), Ae(X), Ce(Ee)) : T(Me) ? X && (Ae(X), Ce(Ee)) : (Ae(!0), Ce(be))
                            }
                        }), ye && a.createElement("div", {
                            className: i()("personal-information-card__userField", "personal-information-card__helpPanelSection")
                        }, a.createElement(b.h, {
                            className: i()("personal-information-card__userField", "personal-information-card__userHelpSection"),
                            items: [{
                                type: b.g.error,
                                text: Ie
                            }]
                        }), a.createElement("a", {
                            href: n("email-verification-faq-link"),
                            target: "_blank",
                            onClick: function() {
                                return Object(y.c)(S, A, "A12L.LearnMoreClick", "Clicked on Personal Info learn more."), !0
                            },
                            className: i()("personal-information-card__learnMoreSection"),
                            rel: "noreferrer"
                        }, ce))), a.createElement("div", {
                            className: "personal-information-card__userInfoSection"
                        }, a.createElement(b.l, {
                            className: i()("personal-information-card__userInfoField", "personal-information-card__countryRegion"),
                            disabled: !0,
                            label: ue,
                            value: "nan" === W.country ? "N/A" : W.country
                        }), a.createElement(b.e, {
                            className: "personal-information-card__userDateField",
                            value: ve,
                            label: de,
                            disabled: !0,
                            masked: !0,
                            dayLabel: pe,
                            monthLabel: ge,
                            yearLabel: _e,
                            dateFormat: "usa" === W.country ? b.d.mmddyyyy : b.d.ddmmyyyy,
                            onDateChange: function() {},
                            error: !1
                        })), a.createElement("div", {
                            className: ke
                        }, F && !$ && xe, (G || !X) && Re, X && !G && ze), a.createElement("div", {
                            className: "personal-information-card__toast"
                        }, Te && !$ && a.createElement(b.m, {
                            "data-testid": "toast",
                            state: q.responseOk ? "affirmative" : "error",
                            dismissAction: a.createElement(b.n, {
                                label: "Dismiss",
                                onClick: function() {
                                    we(!1)
                                }
                            })
                        }, q.responseOk ? n("email-sent-to") + ": " + R : n("server_error")))))
                    },
                    L = (n("wnmW"), n("NOcv")),
                    k = n("Xgdr"),
                    P = (n("nsO7"), n("1OLf")),
                    x = function(e, t) {
                        return "username_length" === e ? t("username_length", {
                            minLength: k.USERNAME_MIN_LENGTH,
                            maxLength: k.USERNAME_MAX_LENGTH
                        }) : t("username_invalid" === e ? "set-username-illegal-characters-error" : "set-username-duplicated-error")
                    },
                    R = n("GYan"),
                    z = function(e) {
                        var t, n, r = e.editMode,
                            c = e.disabled,
                            o = e.checked,
                            s = e.isSaving,
                            l = e.onCancelHandler,
                            u = e.onSubmitHandler,
                            d = Object(m.a)().t,
                            f = "password-card",
                            E = d("save-changes-title").length > 18,
                            p = i()(((t = {})[f + "__textLengthSection"] = E, t), f + "__submit"),
                            g = i()(((n = {})[f + "__textLengthButton"] = E, n), f + "__btn");
                        return a.createElement("div", {
                            className: p
                        }, r && !s && a.createElement(b.a, {
                            buttonType: b.c.secondary,
                            buttonSize: b.b.S,
                            className: g,
                            "data-testid": f + "__cancel-btn",
                            label: d("cancel-cta"),
                            onClick: l
                        }), a.createElement(b.a, {
                            "data-testid": f + "__submit-btn",
                            className: g,
                            buttonType: b.c.primary,
                            buttonSize: b.b.S,
                            label: d("save-changes-title"),
                            disabled: c || s,
                            tabIndex: 4,
                            onClick: u,
                            checked: o,
                            isLoading: s
                        }))
                    },
                    U = function(e) {
                        var t = e.usernameEditable,
                            n = e.username,
                            r = e.status,
                            c = e.error,
                            o = e.invalidUsername,
                            s = e.onValueChange,
                            l = Object(m.a)().t;
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: i()("password-card__username")
                        }, a.createElement(b.l, {
                            "data-testid": "password-card__username",
                            disabled: !t,
                            value: n,
                            label: l("create-username"),
                            status: r,
                            onValueChange: s,
                            animate: !1,
                            animationDelay: 0,
                            tabIndex: 1,
                            tabIndexOnEnter: !0,
                            maxLength: k.USERNAME_MAX_LENGTH,
                            minLength: k.USERNAME_MIN_LENGTH
                        })), t && o && a.createElement(b.h, {
                            "data-testid": "password-card__userNameInvalidError",
                            className: i()("password-card__usernameHelpSection"),
                            items: [{
                                type: b.g.error,
                                text: x(c, l)
                            }]
                        }))
                    },
                    G = function(e) {
                        var t = e.usernameEditable,
                            n = e.invalidPassword,
                            r = e.passwordVisible,
                            c = e.passwordToggleVisible,
                            o = e.passwordHintsEnabled,
                            s = e.confirmPasswordFocus,
                            l = e.newPasswordFocus,
                            u = e.confirmPasswordDirty,
                            d = e.showConfirmPasswordError,
                            f = e.currentPassword,
                            E = e.currentPasswordStatus,
                            p = e.newPasswordStrength,
                            g = e.newPasswordStatus,
                            _ = e.newPassword,
                            v = e.confirmPassword,
                            N = e.confirmPasswordStatus,
                            M = e.helpPanelItems,
                            O = e.onPasswordToogle,
                            S = e.currentPasswordOnValueChange,
                            y = e.newPasswordOnValueChange,
                            A = e.newPasswordOnFocusChange,
                            h = e.newPasswordOnFocus,
                            I = e.newPasswordOnBlur,
                            C = e.confirmPasswordOnValueChange,
                            j = e.confirmPasswordOnFocusChange,
                            T = e.confirmPasswordOnFocus,
                            w = e.confirmPasswordOnBlur,
                            D = Object(m.a)().t,
                            k = "password-card";
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: i()(k + "__password")
                        }, !t && a.createElement("div", null, a.createElement("p", {
                            className: i()(k + "__title")
                        }, D("riot-account-sign-in-subtitle")), a.createElement(b.j, {
                            "data-testid": k + "__currentPassword",
                            value: f,
                            label: D("current-password"),
                            status: E,
                            onValueChange: S,
                            passwordVisible: r,
                            onPasswordToggle: O,
                            animate: !1,
                            animationDelay: .1,
                            tabIndex: 1,
                            tabIndexOnEnter: !0
                        })), !t && n && a.createElement(b.h, {
                            "data-testid": k + "__passwordInvalidError",
                            className: i()(k + "__userHelpSection"),
                            items: [{
                                type: b.g.error,
                                text: D("password-invalid")
                            }]
                        }), a.createElement(b.j, {
                            "data-testid": k + "__newPassword",
                            strength: p,
                            status: g,
                            value: _,
                            label: D("new-password"),
                            onValueChange: y,
                            onFocusChange: A,
                            onFocus: h,
                            onBlur: I,
                            onPasswordToggle: O,
                            passwordVisible: r,
                            passwordToggleVisible: c,
                            maxLength: L.PASSWORD_MAX_LENGTH,
                            strengthTooWeakLabel: "",
                            strengthOkayLabel: "",
                            strengthGreatLabel: "",
                            animate: !1,
                            animationDelay: .2,
                            tabIndex: 2,
                            tabIndexOnEnter: !0
                        }), o && M ? a.createElement(b.h, {
                            items: M
                        }) : null, a.createElement(b.j, {
                            "data-testid": k + "__confirmNewPassword",
                            error: d,
                            status: N,
                            onFocusChange: j,
                            onFocus: T,
                            onBlur: w,
                            value: v,
                            label: D("confirm-new-password"),
                            onValueChange: C,
                            passwordVisible: r,
                            onPasswordToggle: O,
                            animate: !1,
                            animationDelay: .2,
                            tabIndex: 3,
                            tabIndexOnEnter: !0
                        }), (s || l) && u && _ !== v ? a.createElement(b.h, {
                            "data-testid": k + "__passwordDoNotMatchError",
                            className: i()(k + "__userHelpSection"),
                            items: [{
                                type: b.g.error,
                                text: D("password-do-not-match")
                            }]
                        }) : null))
                    },
                    B = function() {
                        return (B = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    Y = function() {
                        var e, t = Object(m.a)().t,
                            n = Object(M.b)(),
                            r = a.useState(""),
                            c = r[0],
                            o = r[1],
                            s = a.useState(""),
                            l = s[0],
                            u = s[1],
                            d = a.useState(""),
                            f = d[0],
                            p = d[1],
                            g = a.useState(""),
                            _ = g[0],
                            v = g[1],
                            N = a.useState(!1),
                            O = N[0],
                            S = N[1],
                            A = a.useState(!1),
                            h = A[0],
                            I = A[1],
                            C = a.useState(!1),
                            j = C[0],
                            T = C[1],
                            D = a.useState(!1),
                            k = D[0],
                            x = D[1],
                            Y = a.useState(!1),
                            F = Y[0],
                            H = Y[1],
                            Q = a.useState(!1),
                            V = Q[0],
                            K = Q[1],
                            W = a.useState(!1),
                            q = W[0],
                            Z = W[1],
                            X = a.useState(!1),
                            J = X[0],
                            $ = X[1],
                            ee = a.useState(!1),
                            te = ee[0],
                            ne = ee[1],
                            ae = a.useState(!1),
                            re = ae[0],
                            ie = ae[1],
                            ce = Object(M.c)((function(e) {
                                return e.user
                            })).username,
                            oe = "password-card",
                            se = ((e = {})[E.k.tooWeak] = b.f.error, e[E.k.okay] = b.f.notice, e[E.k.great] = b.f.affirm, e),
                            le = Object(M.c)((function(e) {
                                var t;
                                return (null === (t = e.account) || void 0 === t ? void 0 : t.passwordUpdate) || {}
                            })),
                            ue = le.invalidUsername,
                            de = le.invalidPassword,
                            me = le.updateSuccess,
                            fe = le.error,
                            Ee = le.state,
                            be = Ee === R.f.POLLING;
                        a.useEffect((function() {
                            ce && o(ce)
                        }), [ce]);
                        var pe = !ce,
                            ge = [l, f, _];
                        pe && ge.push(c);
                        var _e = ge.some((function(e) {
                            return "" !== e
                        }));
                        a.useEffect((function() {
                            if (me) {
                                var e = ce ? "Player changed password" : "Player created riot account sign in";
                                Object(y.c)(h, I, "A12L.RiotAccountSignInSave", e), u(""), p(""), v(""), n(Object(w.j)())
                            }
                        }), [me]), a.useEffect((function() {
                            var e;
                            (c && !ce || l || f || _) && (e = ce ? "Has start editing username/password" : "Has start editing username/password for the first time", Object(y.c)(O, S, "A12L.RiotAccountSignInCreds", e))
                        }), [c, l, f, _]);
                        var ve = function(e) {
                                return Ee === R.f.FEEDBACK ? b.f.affirm : e && de ? b.f.error : b.f.default
                            },
                            Ne = Object(L.validatePassword)(f),
                            Me = Array.isArray(Ne) ? E.k.tooWeak : function(e) {
                                if (e.length < L.PASSWORD_MIN_LENGTH) return E.k.tooWeak;
                                var t = Math.max(1, P(e.substring(0, 64)).score);
                                return t < 2 ? E.k.tooWeak : t < 4 ? E.k.okay : E.k.great
                            }(f),
                            Oe = Array.isArray(Ne) && [L.ERROR_MISSING_LETTER, L.ERROR_MISSING_NUMBER, L.ERROR_MISSING_NON_ASCII, L.ERROR_MISSING_SYMBOL].some((function(e) {
                                return Ne.includes(e)
                            })),
                            Se = !!ce && !ce || Me === E.k.tooWeak || 0 === f.length || 0 === _.length || !!ce && 0 === l.length || f !== _,
                            ye = function() {
                                Object(y.c)(j, T, "A12L.RiotAccountSignInCancel", "Cancelled editing Creds"), ce || o(""), u(""), p(""), v(""), n(Object(w.j)())
                            },
                            Ae = [{
                                type: Me === E.k.tooWeak ? b.g.unsatisfied : b.g.satisfied,
                                text: t("password-strength-v2")
                            }, {
                                type: Array.isArray(Ne) && Ne.includes(L.ERROR_TOO_SHORT) ? b.g.unsatisfied : b.g.satisfied,
                                text: t("password-length-v2", {
                                    minLength: L.PASSWORD_MIN_LENGTH
                                })
                            }, {
                                type: Oe ? b.g.unsatisfied : b.g.satisfied,
                                text: t("password-valid-characters-v2")
                            }],
                            he = _.length <= f.length && f.substring(0, _.length) === _,
                            Ie = {
                                usernameEditable: pe,
                                invalidUsername: ue,
                                error: fe,
                                username: c,
                                status: ce ? b.f.default : ve(),
                                onValueChange: o
                            },
                            Ce = {
                                editMode: _e,
                                disabled: (!_e || Se) && !(Ee === R.f.FEEDBACK),
                                checked: Ee === R.f.FEEDBACK,
                                isSaving: be,
                                onCancelHandler: function() {
                                    H(!1), ye()
                                },
                                onSubmitHandler: function() {
                                    Ee !== R.f.FEEDBACK && (H(!1), ie(!0), n(ce ? Object(w.l)(f, l) : Object(w.b)(c, f)))
                                }
                            },
                            je = {
                                usernameEditable: pe,
                                invalidPassword: de,
                                passwordVisible: k,
                                passwordToggleVisible: q,
                                passwordHintsEnabled: F,
                                showConfirmPasswordError: (te || V) && J && (te ? !he : f !== _),
                                confirmPasswordFocus: te,
                                newPasswordFocus: V,
                                confirmPasswordDirty: J,
                                currentPassword: l,
                                helpPanelItems: Ae,
                                currentPasswordStatus: ve(!0),
                                newPasswordStrength: F && f.length ? Me : void 0,
                                newPasswordStatus: ve() ? ve() : V ? f.length && se[Me] : null,
                                newPassword: f,
                                confirmPassword: _,
                                confirmPasswordStatus: ve() ? ve() : te && J && f.length && f === _ ? b.f.affirm : null,
                                username: c,
                                onPasswordToogle: x,
                                currentPasswordOnValueChange: function(e) {
                                    u(e)
                                },
                                newPasswordOnValueChange: function(e) {
                                    p(e)
                                },
                                newPasswordOnFocusChange: function(e) {
                                    K(e)
                                },
                                newPasswordOnFocus: function() {
                                    H(!0), Z(!0)
                                },
                                newPasswordOnBlur: function() {
                                    Z(!1), H(!1)
                                },
                                confirmPasswordOnValueChange: v,
                                confirmPasswordOnFocusChange: function(e) {
                                    ne(e), K(e)
                                },
                                confirmPasswordOnFocus: function() {
                                    $(!0), Z(!0)
                                },
                                confirmPasswordOnBlur: function() {
                                    Z(!1), H(!1), $(!0)
                                }
                            };
                        return a.createElement(E.m, {
                            "data-testid": "" + oe,
                            displayType: E.n.primary,
                            className: i()(oe),
                            header: a.createElement("h2", {
                                className: i()(oe + "__header")
                            }, t("riot-account-sign-in-title")),
                            description: a.createElement("p", {
                                className: i()(oe + "__description", b.p.BODY2)
                            }, t("riot-account-sign-in-description"))
                        }, a.createElement("div", {
                            className: i()(oe + "__inputs")
                        }, a.createElement(U, B({}, Ie)), a.createElement(G, B({}, je)), a.createElement(z, B({}, Ce)), fe && re && !de && a.createElement("div", {
                            className: oe + "__toast"
                        }, a.createElement(b.m, {
                            "data-testid": "toast",
                            state: "error",
                            dismissAction: a.createElement(b.n, {
                                label: "Dismiss",
                                onClick: function() {
                                    ie(!1)
                                }
                            })
                        }, t("server_error")))))
                    },
                    F = (n("hUE8"), n("9pUx"), function(e) {
                        var t = e.tooltipButtonLink,
                            n = e.tooltipButtonText,
                            r = e.tooltipText,
                            i = "Mobile" === function() {
                                var e = Object(a.useState)(""),
                                    t = e[0],
                                    n = e[1],
                                    r = window.innerHeight,
                                    i = window.innerWidth;
                                return Object(a.useEffect)((function() {
                                    var e = !1;
                                    if ("maxTouchPoints" in navigator) e = navigator.maxTouchPoints > 0;
                                    else {
                                        var t = window.matchMedia && matchMedia("(pointer:coarse)");
                                        if (t && "(pointer:coarse)" === t.media) e = !!t.matches;
                                        else if ("orientation" in window) e = !0;
                                        else {
                                            var a = navigator.userAgent;
                                            e = /\b(Android|Bada|BlackBerry|iPhone|IEMobile|Windows Phone|iPad|iPod|Samsung|webOS)\b/i.test(a)
                                        }
                                    }
                                    n(e ? "Mobile" : "Desktop")
                                }), [r, i]), t
                            }() || !1,
                            c = a.useState(!1),
                            o = c[0],
                            s = c[1],
                            l = Object(m.a)().t;
                        return a.createElement("span", {
                            className: "social-card__text tooltip tooltip-container",
                            onMouseEnter: function() {
                                return s(!0)
                            },
                            onMouseLeave: function() {
                                return s(!1)
                            }
                        }, a.createElement(b.o, {
                            position: b.k.Bottom,
                            open: !i && o,
                            fixedWidth: !0,
                            content: a.createElement(a.Fragment, null, a.createElement("div", {
                                className: "tooltip-insert"
                            }), a.createElement("p", null, r), a.createElement("a", {
                                className: "tooltip-learnmore",
                                href: t,
                                target: "_blank",
                                rel: "noreferrer"
                            }, a.createElement("span", null, n), a.createElement("img", {
                                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDkgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjAyNjY3IDAuNjI1SDEuNDY0MTdDMS4yMjI1NSAwLjYyNSAxLjAyNjY3IDAuODIwODc1IDEuMDI2NjcgMS4wNjI1VjEuOTM3NUMxLjAyNjY3IDIuMTc5MTIgMS4yMjI1NSAyLjM3NSAxLjQ2NDE3IDIuMzc1SDUuODYwNUwwLjI4Mjk0NCA3Ljc0NzVWNy43NTAwNEMwLjIwMTkzNCA3LjgyOTQ1IDAuMTUxNjcyIDcuOTQwMSAwLjE1MTY3MiA4LjA2MjVDMC4xNTE2NzIgOC4yMDU3MyAwLjIyMDUwMSA4LjMzMjg5IDAuMzI2ODg4IDguNDEyNjlMMS4xMTM5OCA5LjE5OTc4QzEuMTkzNzkgOS4zMDYxNyAxLjMyMDk0IDkuMzc1IDEuNDY0MTcgOS4zNzVDMS41ODY1NiA5LjM3NSAxLjY5NzIxIDkuMzI0NzUgMS43NzY2MSA5LjI0Mzc1SDEuNzc5MTlMNy4xNTE2NyAzLjY2NjIxVjguMDYyNUM3LjE1MTY3IDguMzA0MTIgNy4zNDc1NSA4LjUgNy41ODkxNyA4LjVIOC40NjQxN0M4LjcwNTggOC41IDguOTAxNjcgOC4zMDQxMiA4LjkwMTY3IDguMDYyNVYxLjVDOC45MDE2NyAxLjAxNjc1IDguNTA5OTIgMC42MjUgOC4wMjY2NyAwLjYyNVoiCiAgICBmaWxsPSIjRjBGMEYwIgogIC8+Cjwvc3ZnPgo="
                            })))
                        }, a.createElement("div", {
                            className: "xbox-badge"
                        }, l("GAMEPASS_MEMBER"))))
                    }),
                    H = function() {
                        return (H = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    Q = function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    };
                ! function(e) {
                    e.facebook = "Facebook", e.google = "Google", e.apple = "Apple", e.youtube = "YouTube", e.instagram = "Instagram", e.twitter = "Twitter", e.twitch = "Twitch", e.xbox = "Xbox", e.discord = "Discord", e.twitchprime = "Prime", e.nintendo = "Nintendo", e.playstation = "PSN"
                }(A || (A = {}));
                var V, K, W = function(e) {
                        var t = e.name,
                            n = e.alt,
                            i = void 0 === n ? null : n,
                            c = e.className;
                        return a.createElement("span", {
                            className: r("ds-icon", c),
                            role: "presentation",
                            "aria-label": i,
                            "data-icon": t
                        })
                    },
                    q = function(e) {
                        var t = e.buttonType,
                            n = e.className,
                            i = (e.children, e.connected),
                            c = e.gamePassStatus,
                            o = e.scopeList,
                            s = void 0 === o ? [] : o,
                            l = e.confirmMessage,
                            u = e.warnMessage,
                            d = e.onConnect,
                            f = e.onRemove,
                            E = e.onRemoveConfirm,
                            b = e.onRemoveCancel,
                            p = e.requiresRiotAccount,
                            g = e.name,
                            _ = Q(e, ["buttonType", "className", "children", "connected", "gamePassStatus", "scopeList", "confirmMessage", "warnMessage", "onConnect", "onRemove", "onRemoveConfirm", "onRemoveCancel", "requiresRiotAccount", "name"]),
                            v = Object(m.a)().t,
                            N = a.useState(!1),
                            M = N[0],
                            O = N[1],
                            S = A[t] ? t : "default";
                        return i ? a.createElement("div", {
                            "data-testid": "login-button-" + t,
                            className: r("social-card", n, "social-card__" + S, M && "social-card__active")
                        }, a.createElement("div", {
                            className: "social-card__icon"
                        }), a.createElement("div", {
                            className: "social-card__content"
                        }, M ? a.createElement("span", {
                            className: "social-card__info"
                        }, p ? u : l) : a.createElement("div", null, a.createElement("div", null, A[t] || g || t), a.createElement("div", {
                            className: "social-card__info"
                        }, s.map((function(e, t) {
                            return a.createElement("span", {
                                className: "social-card__text",
                                key: t
                            }, e)
                        })), t === C.AuthenticationMethod.XBOX && c === C.GamePassStatus.ACTIVE && a.createElement(F, {
                            tooltipText: v("GAMEPASS_MEMBER_MICROCOPY"),
                            tooltipButtonLink: v("GAMEPASS_RIOT_BENEFITS"),
                            tooltipButtonText: v("GAMEPASS_LEARNMORE_PUBLISHING_CTA")
                        })))), a.createElement("div", {
                            className: "social-card__actions"
                        }, M ? a.createElement(a.Fragment, null, a.createElement("button", {
                            "data-testid": "login-button-close",
                            onClick: function() {
                                b && b(t), O(!1)
                            }
                        }, a.createElement(W, {
                            name: "close",
                            className: "social-card__close"
                        })), !p && a.createElement("button", {
                            "data-testid": "login-button-confirm",
                            onClick: function() {
                                E && E(t, p), O(!1)
                            }
                        }, a.createElement(W, {
                            name: "check",
                            className: "social-card__confirm"
                        }))) : a.createElement("button", {
                            "data-testid": "login-button-remove",
                            onClick: function() {
                                f && f(t), O(!0)
                            }
                        }, a.createElement(W, {
                            name: "remove",
                            className: "social-card__remove"
                        })))) : a.createElement("button", H({
                            className: r("social-button", n, "social-button__" + S),
                            "data-testid": "login-button-" + t
                        }, _, {
                            onClick: function() {
                                d && d(t)
                            }
                        }), A[t] || t, a.createElement(W, {
                            name: "add",
                            className: "social-button__add"
                        }))
                    },
                    Z = function() {
                        return (Z = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    X = function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    J = {},
                    $ = function(e) {
                        var t = e.open,
                            n = X(e, ["open"]);
                        return a.useEffect((function() {
                            var e;
                            return t ? (J[n.className] = !0, document.getElementsByTagName("body")[0].classList.add("modal-open")) : (delete J[n.className], e = setTimeout((function() {
                                    Object.keys(J).length || document.getElementsByTagName("body")[0].classList.remove("modal-open")
                                }), 100)),
                                function() {
                                    return clearTimeout(e)
                                }
                        }), [t]), a.createElement(b.i, Z({
                            open: t
                        }, n))
                    },
                    ee = (n("2X85"), n("fkUN")),
                    te = n("yL9k"),
                    ne = n("OoIN"),
                    ae = n("tiIk");
                function re(e) {
                    return e.split("-")[0]
                }
                function ie(e, t, n, a) {
                    if (e) {
                        if (e.localized[t]) return e.localized[t];
                        var r = Object.keys(e.localized).find((function(e) {
                            return e.toLowerCase() === t.toLowerCase()
                        }));
                        if (r) return e.localized[r];
                        var i = Object.keys(e.localized).find((function(e) {
                            return re(e) === re(t)
                        }));
                        return i ? e.localized[i] : e.default
                    }
                    return n[a]
                }! function(e) {
                    e.EMAIL = "email", e.PROFILE = "profile", e.NAME = "name"
                }(K || (K = {}));
                (V = {})[K.EMAIL] = "links_permission_email", V[K.PROFILE] = "links_permission_profile", V[K.NAME] = "links_permission_name";
                var ce, oe = n("Z6VV"),
                    se = (n("vjCw"), n("6d0m")),
                    le = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjY2NjggNS4zMzMxN0MyNi42NjY4IDMuODY2NSAyNS40NjY4IDIuNjY2NSAyNC4wMDAyIDIuNjY2NUgxOC42NjY4QzE4LjMwNjggMi42NjY1IDE4LjAxMzUgMi45MDY1IDE3LjkyMDIgMy4yMzk4NEMxNy42NjY4IDQuMDY2NSAxNi45MDY4IDQuNjY2NSAxNi4wMDAyIDQuNjY2NUMxNS4wOTM1IDQuNjY2NSAxNC4zMzM1IDQuMDY2NSAxNC4wODAyIDMuMjM5ODRDMTMuOTg2OCAyLjkwNjUgMTMuNjkzNSAyLjY2NjUgMTMuMzMzNSAyLjY2NjVIOC4wMDAxNkM2LjUzMzUgMi42NjY1IDUuMzMzNSAzLjg2NjUgNS4zMzM1IDUuMzMzMTdWMjIuNjY2NUM1LjMzMzUgMjQuMTMzMiA2LjUzMzUgMjUuMzMzMiA4LjAwMDE2IDI1LjMzMzJDMTMuMTA2OCAyNS4zMzMyIDI2LjY2NjggMTcuMzMzMiAyNi42NjY4IDEzLjMzMzJWNS4zMzMxN1pNMjAuMzA2OCAxNS4wNTMyVjE1LjA3OThMMTQuMzA2OCAxOC40MTMySDE0LjI4MDJDMTQuMDAwMiAxOC41NzMyIDEzLjY4MDIgMTguNjUzMiAxMy4zMzM1IDE4LjY1MzJDMTIuMjI2OCAxOC42NTMyIDExLjMzMzUgMTcuNzU5OCAxMS4zMzM1IDE2LjY1MzJWOS45ODY1QzExLjMzMzUgOC44OTMxNyAxMi4yMjY4IDcuOTg2NSAxMy4zMzM1IDcuOTg2NUMxMy42ODAyIDcuOTg2NSAxNC4wMTM1IDguMDc5ODQgMTQuMjkzNSA4LjI1MzE3SDE0LjMwNjhMMjAuMzA2OCAxMS41NzMyQzIwLjkyMDIgMTEuOTE5OCAyMS4zMzM1IDEyLjU3MzIgMjEuMzMzNSAxMy4zMTk4QzIxLjMzMzUgMTQuMDY2NSAyMC45MjAyIDE0LjczMzIgMjAuMzA2OCAxNS4wNTMyWiIgZmlsbD0iI0Q1MzIzNSIvPgo8cGF0aCBkPSJNMjkuMzE5OCAxNi4wMDAxQzI5LjE0NjUgMjMuNjAwMSAyMC4zMzMyIDMwLjQ1MzQgMTIuMzE5OCAzMC43MDY3QzEyLjIxMzIgMzAuNzIwMSAxMi4xMTk4IDMwLjY0MDEgMTIuMDkzMiAzMC41MjAxQzEyLjA3OTggMzAuNDEzNCAxMi4xNDY1IDMwLjMyMDEgMTIuMjUzMiAzMC4yODAxQzE1Ljk1OTggMjguOTA2NyAyMS4wNzk4IDI3LjE0NjcgMjMuOTk5OCAyMi42NjY3QzIzLjk5OTggMjIuNjY2NyAxOS45OTk4IDI1LjMzMzQgMTUuOTk5OCAyNy4xNDY3QzExLjU3MzIgMjkuMTYwMSAyLjY2NjUgMzIuMDgwMSAyLjY2NjUgMjguMTMzNEMyLjY2NjUgMjcuMjgwMSAzLjExOTg0IDI2LjI5MzQgMy43ODY1IDI1LjM4NjdDMy44Mzk4NCAyNS4zMjAxIDMuOTMzMTcgMjUuMjkzNCAzLjk5OTg0IDI1LjMzMzRDNC4wNjY1IDI1LjM3MzQgNC4xMDY1IDI1LjQ1MzQgNC4wNzk4NCAyNS41MzM0QzMuNzg2NSAyNi4zNDY3IDQuMDUzMTcgMjYuOTg2NyA0LjkzMzE3IDI3LjI2NjdDNi43NDY1IDI3Ljg1MzQgMTEuMDEzMiAyNi44NDAxIDE1Ljk5OTggMjQuNDgwMUMyMi4zNTk4IDIxLjQ2NjcgMjcuNTg2NSAxNy4yODAxIDI3Ljk4NjUgMTUuMDY2N0MyOC4wMTMyIDE0Ljk0NjcgMjguMDc5OCAxNC44NDAxIDI4LjE4NjUgMTQuNzg2N0MyOC4yOTMyIDE0LjczMzQgMjguNDI2NSAxNC43MjAxIDI4LjUzMzIgMTQuNzYwMUMyOS4zMzMyIDE1LjA1MzQgMjkuMzE5OCAxNi4wMDAxIDI5LjMxOTggMTYuMDAwMVoiIGZpbGw9IiNENTMyMzUiLz4KPC9zdmc+Cg==",
                    ue = n("52Zb"),
                    de = {
                        "success-unknown": "GAMEPASS_ACCTMGMT_CONNECTEDACCTS",
                        success: "GAMEPASS_ACCTMGMT_CONNECTEDACCTS",
                        "success-gp": "",
                        loading: "GAMEPASS_RSO_CHECK_MEMBERSHIP_BODY"
                    },
                    me = {
                        "success-unknown": "GAMEPASS_ACCTMGMT_SUCCESS_NONMEMBER_HEADER",
                        success: "GAMEPASS_ACCTMGMT_SUCCESS_NONMEMBER_HEADER",
                        "success-gp": "GAMEPASS_ACCTMGMT_SUCCESS_MEMBER_HEADER",
                        loading: "GAMEPASS_RSO_CHECK_MEMBERSHIP_HEADER"
                    },
                    fe = function(e) {
                        var t = e.open,
                            n = e.onClose,
                            r = Object(m.a)().t,
                            c = Object(ue.b)(),
                            o = c.gamePassStatus,
                            s = c.gamePassStatusLoading,
                            l = c.gamePassStatusError,
                            d = c.skipGamePassStatus,
                            f = a.useState(!1),
                            E = f[0],
                            b = f[1],
                            p = function(e, t, n, a) {
                                return a ? "success-unknown" : t ? "loading" : n ? "success-unknown" : e === C.GamePassStatus.ACTIVE ? "success-gp" : e === C.GamePassStatus.PENDING ? "success-unknown" : "success"
                            }(o, s, !!l, E);
                        return a.createElement($, {
                            className: "xbox-modal",
                            open: t,
                            buttonLabel: r(s && !E ? "RSO_CHECK_MEMBERSHIP_SKIP" : "GAMEPASS_ACCTMGMT_SUCCESS_CTA"),
                            onClose: function(e) {
                                s && !E ? (b(!0), d()) : n(e)
                            },
                            zIndex: et,
                            title: r(me[p]),
                            description: r(de[p])
                        }, function(e, t) {
                            switch (e) {
                                case "loading":
                                    return a.createElement("div", {
                                        className: "xbox-modal__loading"
                                    }, a.createElement(se.Spinner, {
                                        size: "default"
                                    }));
                                case "success-gp":
                                    return a.createElement("div", {
                                        className: "xbox-modal__success-gp"
                                    }, a.createElement("div", {
                                        className: "xbox-modal__gamepass-item"
                                    }, a.createElement("div", null, a.createElement("img", {
                                        src: le,
                                        alt: "game pass logo"
                                    })), a.createElement("div", {
                                        className: "xbox-modal__gamepass-item-content"
                                    }, a.createElement("div", {
                                        className: u.m.BODY1
                                    }, t("GAMEPASS_BENEFIT_XP_HEADER")), a.createElement("p", {
                                        className: u.m.BODY2
                                    }, t("GAMEPASS_BENEFIT_XP_BODY")))), a.createElement("div", {
                                        className: "xbox-modal__gamepass-item"
                                    }, a.createElement("div", null, a.createElement("img", {
                                        src: le,
                                        alt: "game pass logo"
                                    })), a.createElement("div", {
                                        className: "xbox-modal__gamepass-item-content"
                                    }, a.createElement("div", {
                                        className: u.m.BODY1
                                    }, t("GAMEPASS_BENEFIT_CONTENT_HEADER")), a.createElement("p", {
                                        className: u.m.BODY2
                                    }, t("GAMEPASS_BENEFIT_CONTENT_BODY")))), a.createElement("p", {
                                        className: i()(u.m.CAPTION, "xbox-modal__privacy")
                                    }, t("GAMEPASS_DATASHARE_HEADER") + ": " + t("GAMEPASS_DATASHARE_CONFIRM_MEMBER")));
                                case "success":
                                    return a.createElement("div", {
                                        className: "xbox-modal__success"
                                    }, a.createElement("p", {
                                        className: u.m.BODY1
                                    }, t("GAMEPASS_RSO_SUCCESS_NONMEMBER_BODY")), a.createElement("p", {
                                        className: i()(u.m.CAPTION, "xbox-modal__privacy")
                                    }, t("GAMEPASS_DATASHARE_HEADER") + ": " + t("GAMEPASS_DATASHARE_CONFIRM_NONMEMBER")));
                                case "success-unknown":
                                    return a.createElement("div", {
                                        className: "xbox-modal__success"
                                    }, a.createElement("p", {
                                        className: u.m.BODY1
                                    }, t("GAMEPASS_RSO_CHECK_MEMBERSHIP_UNKNOWN")), a.createElement("p", {
                                        className: i()(u.m.CAPTION, "xbox-modal__privacy")
                                    }, t("GAMEPASS_DATASHARE_HEADER") + ": " + t("GAMEPASS_DATASHARE_CTA_BODY")))
                            }
                        }(p, r))
                    },
                    Ee = function() {
                        return (Ee = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    be = function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function c(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function o(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(c, o)
                            }
                            s((a = a.apply(e, t || [])).next())
                        }))
                    },
                    pe = function(e, t) {
                        var n, a, r, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function o(i) {
                            return function(o) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c;) try {
                                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return c.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                c.label++, a = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = c.ops.pop(), c.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = c.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    c = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    c.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && c.label < r[1]) {
                                                    c.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && c.label < r[2]) {
                                                    c.label = r[2], c.ops.push(i);
                                                    break
                                                }
                                                r[2] && c.ops.pop(), c.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, c)
                                    } catch (e) {
                                        i = [6, e], a = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, o])
                            }
                        }
                    },
                    ge = function(e, t) {
                        var n = {};
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
                        }
                        return n
                    },
                    _e = function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var a, r = 0, i = t.length; r < i; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
                        return e.concat(a || Array.prototype.slice.call(t))
                    };
                ! function(e) {
                    e.social = "social", e.authApp = "authApp"
                }(ce || (ce = {}));
                var ve = function(e) {
                        var t = e.loading,
                            n = void 0 === t || t,
                            r = Object(m.a)().t,
                            i = Object(M.c)(N.k),
                            c = i.federated_identities,
                            o = void 0 === c ? [] : c,
                            s = i.username,
                            l = Object(M.c)(N.h),
                            u = l.links,
                            d = void 0 === u ? [] : u,
                            f = l.methods,
                            p = l.errorCode,
                            g = Object(M.c)((function(e) {
                                return e.config
                            })).xboxGamePassEnabled,
                            _ = Object(ue.b)(),
                            v = _.gamePassStatus,
                            O = _.getGamePassStatus,
                            S = _.gamePassStatusError,
                            A = a.useState(n),
                            h = A[0],
                            I = A[1],
                            j = a.useState(!1),
                            T = j[0],
                            w = j[1],
                            D = a.useState(!1),
                            L = D[0],
                            k = D[1],
                            P = a.useState(!1),
                            x = P[0],
                            R = P[1],
                            z = a.useState(!1),
                            U = z[0],
                            G = z[1],
                            B = a.useState(!1),
                            Y = B[0],
                            F = B[1],
                            H = a.useState(!1),
                            Q = H[0],
                            V = H[1],
                            K = a.useState(!1),
                            W = K[0],
                            Z = K[1],
                            X = a.useState(!1),
                            J = X[0],
                            re = X[1],
                            se = a.useState("error"),
                            le = se[0],
                            de = se[1],
                            me = a.useState(""),
                            ve = me[0],
                            Ne = me[1],
                            Me = a.useState(!1),
                            Oe = Me[0],
                            Se = Me[1],
                            ye = a.useState(!1),
                            Ae = ye[0],
                            he = ye[1],
                            Ie = Object(M.b)(),
                            Ce = function(e) {
                                switch (e.code) {
                                    case C.ACCOUNT_LINKING_APPLE_CONFLICT:
                                        e.title = r("apple_account_already_connected_title"), e.description = r("account_already_connected_message");
                                        break;
                                    case C.ACCOUNT_LINKING_GOOGLE_CONFLICT:
                                        e.title = r("google_account_already_connected_title"), e.description = r("account_already_connected_message");
                                        break;
                                    case C.ACCOUNT_LINKING_FACEBOOK_CONFLICT:
                                        e.title = r("facebook_account_already_connected_title"), e.description = r("account_already_connected_message");
                                        break;
                                    case C.ACCOUNT_LINKING_XBOX_CONFLICT:
                                        e.title = r("GAMEPASS_RC_MISMATCH_ERROR_HEADER"), e.description = r("GAMEPASS_RC_MISMATCH_ERROR_BODY");
                                        break;
                                    case C.RATE_LIMITED:
                                        e.title = r("global_rate_limiting_title"), e.description = r("global_rate_limiting_message");
                                        break;
                                    default:
                                        e.title = r("account_linking_generic_error_title"), e.description = r("account_linking_generic_error_message")
                                }
                                Ie(Object(te.d)(e))
                            },
                            je = a.useRef(!1);
                        a.useEffect((function() {
                            return je.current = !0, be(void 0, void 0, void 0, (function() {
                                    var e, t, n, a;
                                    return pe(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), e = new URLSearchParams(window.location.search), (t = e.get("code")) && "string" == typeof t ? [4, Object(ae.c)(t)] : [2];
                                            case 1:
                                                return i.sent(), window.history.pushState({}, r("site-name", {
                                                    defaultValue: "Riot Account Management"
                                                }), "/"), Ie(Object(ee.a)()), Object(y.c)(x, R, "A12L.SocialAccountConnectedSuccess", "Social app connected successfully"), [3, 3];
                                            case 2:
                                                return n = i.sent(), a = {
                                                    code: n.errorCode
                                                }, Ce(a), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                })), Ie(Object(ne.f)()), Ie(Object(ne.g)()), je.current && I(!1),
                                function() {
                                    return je.current = !1
                                }
                        }), []), a.useEffect((function() {
                            var e = new URLSearchParams(window.location.search),
                                t = e.get("result"),
                                n = e.get("method");
                            null !== n && null !== t && function(e, t) {
                                if (g && "xbox" === t && "success" === e) return window.history.replaceState({}, document.title, "/"), void Se(!0);
                                if ("already_linked" !== e);
                                else {
                                    var n = {
                                        code: {
                                            apple: C.ACCOUNT_LINKING_APPLE_CONFLICT,
                                            google: C.ACCOUNT_LINKING_GOOGLE_CONFLICT,
                                            facebook: C.ACCOUNT_LINKING_FACEBOOK_CONFLICT,
                                            xbox: C.ACCOUNT_LINKING_XBOX_CONFLICT
                                        } [t],
                                        buttonLabel: r("GAMEPASS_CTA_CONTINUE_WITHOUT_LINKING")
                                    };
                                    Ce(n)
                                }
                            }(t, n)
                        }), [window.location.search, g]), a.useEffect((function() {
                            p === ne.b && (re(!0), de("error"), Ne(r("connected-accounts-link-error"))), p === ne.a && (re(!0), de("error"), Ne(r("connected-accounts-social-error")))
                        }), [p]), a.useEffect((function() {
                            S && (re(!0), de("error"), Ne(r("GAMEPASS_ACCTMGMT_CHECK_MEMBERSHIP_ERROR")))
                        }), [S]), a.useEffect((function() {
                            T && (Object(y.c)(Y, F, "A12L.SocialAccountDisconnectedSuccess", "Social app disconnected successfully"), I(!1), w(!1))
                        }), [o, f, d]);
                        var Te = o.some((function(e) {
                            return "xbox" === e
                        }));
                        a.useEffect((function() {
                            g && Te && O()
                        }), [Te, g]);
                        var we = a.useCallback((function() {
                                Se(!1)
                            }), []),
                            De = function() {
                                Object(y.c)(Q, V, "A12L.SocialAccountDisconnect", "Attempted disconnect social account")
                            },
                            Le = function() {
                                Object(y.c)(W, Z, "A12L.SocialAccountDisconnectCancelled", "Gave up on disconnecting a social account")
                            },
                            ke = function(e) {
                                return be(void 0, void 0, void 0, (function() {
                                    var t, n, a, i;
                                    return pe(this, (function(c) {
                                        switch (c.label) {
                                            case 0:
                                                I(!0), w(!0), t = o.find((function(t) {
                                                    return t === e
                                                })), c.label = 1;
                                            case 1:
                                                return c.trys.push([1, 6, , 7]), t ? [4, Ie(Object(ne.e)(e))] : [3, 3];
                                            case 2:
                                                return c.sent(), [3, 5];
                                            case 3:
                                                return n = {
                                                    clientId: e
                                                }, [4, Ie(Object(ne.h)(n))];
                                            case 4:
                                                c.sent(), c.label = 5;
                                            case 5:
                                                return [3, 7];
                                            case 6:
                                                return a = c.sent(), I(!1), i = {
                                                    code: a.errorCode,
                                                    title: r("link-unable-to-remove-client")
                                                }, Ie(Object(te.d)(i)), [3, 7];
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            Pe = function(e) {
                                return be(void 0, void 0, void 0, (function() {
                                    return pe(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return Object(y.c)(U, G, "A12L.SocialAccountDisconnectRequest", "Requested disconnection of a social account"), "xbox" !== e || v !== C.GamePassStatus.ACTIVE ? [3, 1] : (he(!0), [3, 3]);
                                            case 1:
                                                return [4, ke(e)];
                                            case 2:
                                                t.sent(), t.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            xe = function(e) {
                                Object(y.c)(L, k, "A12L.SocialAccountConnect", "Attempted connect social account"), window.location.href = "/api/links/v1/redirects/" + e
                            },
                            Re = function(e, t, n, a) {
                                return void 0 === e && (e = []), void 0 === t && (t = []), _e(_e([], e.filter((function(e) {
                                    var t = e.status,
                                        n = e.method;
                                    return "enabled" === t && "riot_identity" !== n
                                })).map((function(e) {
                                    var t = e.method;
                                    return {
                                        type: t,
                                        scopeList: e.scopes,
                                        connected: n.includes(t),
                                        category: ce.social,
                                        requiresRiotAccount: !a && n.length <= 1
                                    }
                                })), !0), t.map((function(e) {
                                    return {
                                        type: e.clientId,
                                        name: ie(e.localizedClientName, oe.a.language, e, "clientName"),
                                        scopeList: e.scopes,
                                        connected: !0,
                                        category: ce.authApp
                                    }
                                })), !0)
                            }(f || [], d || [], o, s),
                            ze = a.createElement("h1", {
                                className: "connected-accounts__title"
                            }, r("connected-accounts-title")),
                            Ue = a.createElement("div", {
                                className: "connected-accounts__description"
                            }, a.createElement("p", null, r("connected-accounts-description"))),
                            Ge = Re.filter((function(e) {
                                return e.connected
                            })),
                            Be = Re.filter((function(e) {
                                return !e.connected && e.category === ce.social
                            }));
                        return a.createElement(a.Fragment, null, a.createElement(E.m, {
                            className: "connected-accounts__splitCard",
                            header: ze,
                            description: Ue
                        }, h ? a.createElement("div", {
                            className: "connected-accounts__loaderContainer"
                        }, a.createElement(E.l, null)) : a.createElement("div", {
                            "data-testid": "connected-accounts__bodySection",
                            className: "connected-accounts__bodySection"
                        }, a.createElement("div", null, Ge.length > 0 && a.createElement("div", {
                            "data-testid": "connected-accounts__connected-section",
                            className: "connected-accounts__connectedSection"
                        }, a.createElement("h3", null, r("connected-accounts-connectedLabel")), Ge.map((function(e) {
                            var t = e.type,
                                n = ge(e, ["type"]);
                            return a.createElement(q, Ee({
                                key: t,
                                buttonType: t
                            }, n, {
                                warnMessage: r("connected-accounts-warnMessage"),
                                confirmMessage: r("connected-accounts-confirmMessage"),
                                gamePassStatus: v,
                                onRemove: De,
                                onRemoveConfirm: Pe,
                                onRemoveCancel: Le
                            }))
                        }))), Be.length > 0 && a.createElement("div", {
                            "data-testid": "connected-accounts__social-section",
                            className: "connected-accounts__socialSignin"
                        }, a.createElement("h4", null, r("connected-accounts-socialSigninLabel")), a.createElement("div", {
                            className: "connected-accounts__button-list"
                        }, Be.map((function(e) {
                            var t = e.type,
                                n = ge(e, ["type"]);
                            return a.createElement(q, Ee({
                                key: t,
                                buttonType: t
                            }, n, {
                                onConnect: xe
                            }))
                        })))), J && a.createElement("div", {
                            className: "connected-accounts__toast"
                        }, a.createElement(b.m, {
                            "data-testid": "connected-accounts__toast",
                            state: le,
                            dismissAction: a.createElement(b.n, {
                                label: r("dismiss"),
                                onClick: function() {
                                    return re(!1)
                                }
                            })
                        }, ve))))), g && a.createElement(a.Fragment, null, a.createElement(fe, {
                            open: Oe,
                            onClose: we
                        }), a.createElement($, {
                            open: Ae,
                            title: r("GAMEPASS_DISCONNECT_BENEFITS_MODAL_HEADER"),
                            description: r("GAMEPASS_DISCONNECT_BENEFITS_LOSS"),
                            className: "xbox-game-pass-modal",
                            buttonLabel: r("CTA_DISCONNECT"),
                            secondaryButtonLabel: r("CTA_NEVERMIND"),
                            onClose: function(e) {
                                return be(void 0, void 0, void 0, (function() {
                                    return pe(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return he(!1), "primary" !== e ? [3, 2] : [4, ke("xbox")];
                                            case 1:
                                                t.sent(), t.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            zIndex: et
                        })))
                    },
                    Ne = n("bGxK"),
                    Me = (n("3ZJE"), n("ntq0")),
                    Oe = function() {
                        var e = Object(m.a)().t,
                            t = Object(M.b)(),
                            n = Object(M.c)(N.i).subscribed,
                            r = a.useState(!1),
                            c = r[0],
                            o = r[1];
                        a.useEffect((function() {
                            t(Object(Me.b)())
                        }), []);
                        var s = a.createElement("h1", {
                            className: "communication-preferences__title"
                        }, e("communication-preferences"));
                        return a.createElement("div", {
                            className: i()("communication-preferences")
                        }, a.createElement(E.m, {
                            header: s
                        }, a.createElement("div", {
                            className: "communication-preferences__checkboxSection"
                        }, a.createElement(u.d, {
                            checked: n,
                            "data-testid": "communication-preferences__checkbox",
                            onCheckedChange: function(e) {
                                Object(y.c)(c, o, "A12L.CommunicationPreferences", (e ? "Checked" : "Uncheck") + " Email Preference option."), t(Object(Me.c)(e))
                            },
                            labelComponent: e("email-preference-title")
                        }), a.createElement("div", {
                            className: i()("communication-preferences__text")
                        }, a.createElement("span", null, e("notification-preference-body"))))))
                    },
                    Se = n("/wep"),
                    ye = (n("5BPB"), function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function c(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function o(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(c, o)
                            }
                            s((a = a.apply(e, t || [])).next())
                        }))
                    }),
                    Ae = function(e, t) {
                        var n, a, r, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function o(i) {
                            return function(o) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c;) try {
                                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return c.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                c.label++, a = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = c.ops.pop(), c.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = c.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    c = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    c.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && c.label < r[1]) {
                                                    c.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && c.label < r[2]) {
                                                    c.label = r[2], c.ops.push(i);
                                                    break
                                                }
                                                r[2] && c.ops.pop(), c.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, c)
                                    } catch (e) {
                                        i = [6, e], a = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, o])
                            }
                        }
                    },
                    he = function() {
                        var e = Object(m.a)().t,
                            t = a.useState(null),
                            n = t[0],
                            r = t[1],
                            c = a.useState(!1),
                            o = c[0],
                            s = c[1],
                            l = a.useState(!1),
                            d = l[0],
                            f = l[1],
                            b = function() {
                                f(!0)
                            },
                            p = a.useCallback((function(t) {
                                return ye(void 0, void 0, void 0, (function() {
                                    var n;
                                    return Ae(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if ("primary" !== t) return [3, 5];
                                                r(null), s(!0), a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 3, , 4]), f(!1), [4, Se.purgeAndSignout()];
                                            case 2:
                                                return n = a.sent().redirectTo, r({
                                                    state: "affirmative",
                                                    message: e("log-out-everywhere-success")
                                                }), window.location.href = n, [3, 4];
                                            case 3:
                                                return a.sent(), f(!1), r({
                                                    state: "error",
                                                    message: e("server_error")
                                                }), [3, 4];
                                            case 4:
                                                return s(!1), [3, 6];
                                            case 5:
                                                f(!1), a.label = 6;
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }), [Se]),
                            g = a.createElement("h1", {
                                className: "login-management-card__title"
                            }, e("login-management")),
                            _ = a.createElement("div", {
                                className: "login-management-card__description"
                            }, a.createElement("p", null, e("login-management-description")));
                        return a.createElement(a.Fragment, null, a.createElement(E.m, {
                            className: i()("login-management-card"),
                            header: g,
                            description: _
                        }, o ? a.createElement("div", {
                            className: "login-management-card__loaderContainer"
                        }, a.createElement(E.l, null)) : a.createElement(a.Fragment, null, a.createElement(u.a, {
                            buttonType: u.c.primaryAlt,
                            buttonSize: u.b.S,
                            label: e("log-out-everywhere"),
                            onClick: b,
                            "data-testid": "log-out-everywhere-button"
                        }), n && a.createElement(E.o, {
                            state: n.state,
                            dismissAction: a.createElement(E.p, {
                                label: e("dismiss"),
                                onClick: function() {
                                    return r(null)
                                }
                            }),
                            "data-testid": "toast"
                        }, n.message))), a.createElement($, {
                            open: d,
                            title: e("log-out-everywhere-modal-title"),
                            description: e("log-out-everywhere-modal-description"),
                            buttonLabel: e("confirm"),
                            secondaryButtonLabel: e("cancel"),
                            onClose: p,
                            zIndex: et
                        }))
                    },
                    Ie = (n("0G2K"), function() {
                        var e, t, n, r, c = Object(m.a)().t,
                            o = Object(M.c)((function(e) {
                                var t;
                                return (null === (t = e.account) || void 0 === t ? void 0 : t.gameBetaAccess) || {}
                            })),
                            s = o.invitesLeft,
                            l = void 0 === s ? 0 : s,
                            d = o.invitationLink,
                            f = void 0 === d ? "" : d,
                            b = o.invitesLimit,
                            p = void 0 === b ? 5 : b,
                            g = (n = c("game-beta-access-button-title"), void 0 === r && (r = 18), n.length > r),
                            _ = a.useMemo((function() {
                                for (var e = p - l, t = [], n = 0; n < e; n++) t.push(a.createElement(u.g, {
                                    key: n + "_redeemed",
                                    name: "check",
                                    presentational: !0,
                                    className: "game-beta-access__checkIcon"
                                }));
                                for (n = 0; n < l; n++) t.push(a.createElement(u.g, {
                                    key: n + "_inviteLeft",
                                    name: "perm_identity",
                                    presentational: !0,
                                    className: "game-beta-access__profileIcon"
                                }));
                                return t
                            }), [l]),
                            v = a.createElement("div", {
                                className: "game-beta-access__splitCardHeader"
                            }, a.createElement("h1", {
                                className: "game-beta-access__title"
                            }, c("game-beta-access-title")), a.createElement("p", {
                                className: "game-beta-access__description"
                            }, c("game-beta-access-description", {
                                invites: p
                            }))),
                            N = a.createElement("div", {
                                className: "game-beta-access__inviteSection"
                            }, a.createElement("p", {
                                className: "game-beta-access__redemptionTitle"
                            }, c("game-beta-access-redemption-title", {
                                invites: l
                            })), a.createElement("div", {
                                className: "game-beta-access__redemptions"
                            }, _)),
                            O = a.createElement("div", {
                                className: "game-beta-access__splitCard"
                            }, v, N),
                            S = function() {
                                navigator.clipboard.writeText(f)
                            };
                        return a.createElement(E.m, {
                            header: O
                        }, a.createElement("div", {
                            className: "game-beta-access__bodySection"
                        }, a.createElement("div", {
                            className: "game-beta-access__inputLinkSection"
                        }, a.createElement(u.l, {
                            readOnly: !0,
                            "data-testid": "game-beta-access__inputLink",
                            className: i()("game-beta-access__inputLink"),
                            label: "",
                            value: f
                        }, a.createElement("span", {
                            "data-testid": "game-beta-access__iconCopyClipboard",
                            "data-icon": "link",
                            className: i()("ds-icon", "game-beta-access__linkIcon"),
                            onClick: S
                        }))), a.createElement("div", {
                            className: i()((e = {}, e["game-beta-access__textLengthButton"] = g, e), "game-beta-access__copyClipboardSection")
                        }, a.createElement(u.a, {
                            buttonType: u.c.primaryAlt,
                            buttonSize: u.b.S,
                            className: i()((t = {}, t["game-beta-access__textLengthButton"] = g, t), "game-beta-access__copyClipboard"),
                            "data-testid": "game-beta-access__copyClipboard",
                            label: c("game-beta-access-button-title"),
                            onClick: S
                        }))))
                    }),
                    Ce = n("3k8n"),
                    je = (n("7Ic6"), n("2tUC")),
                    Te = function() {
                        return (Te = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    we = function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function c(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function o(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(c, o)
                            }
                            s((a = a.apply(e, t || [])).next())
                        }))
                    },
                    De = function(e, t) {
                        var n, a, r, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function o(i) {
                            return function(o) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c;) try {
                                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return c.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                c.label++, a = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = c.ops.pop(), c.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = c.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    c = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    c.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && c.label < r[1]) {
                                                    c.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && c.label < r[2]) {
                                                    c.label = r[2], c.ops.push(i);
                                                    break
                                                }
                                                r[2] && c.ops.pop(), c.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, c)
                                    } catch (e) {
                                        i = [6, e], a = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, o])
                            }
                        }
                    },
                    Le = function() {
                        return function(e) {
                            return we(void 0, void 0, void 0, (function() {
                                var t;
                                return De(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e(Re(!0)), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Se.getMfaFactors()];
                                        case 2:
                                            return t = n.sent(), e(Pe(t)), [3, 4];
                                        case 3:
                                            return n.sent(), e(ze(!0)), [3, 4];
                                        case 4:
                                            return e(Re(!1)), [2]
                                    }
                                }))
                            }))
                        }
                    },
                    ke = function(e, t) {
                        return void 0 === t && (t = !1),
                            function(n, a) {
                                return we(void 0, void 0, void 0, (function() {
                                    var r, i, c;
                                    return De(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                r = a().mfaCard, i = r.factors.find((function(t) {
                                                    return t.factor === e
                                                })), n(xe(Te(Te({}, i), {
                                                    loading: !0
                                                }))), o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, Se.enableMfa(e, t)];
                                            case 2:
                                                return o.sent(), n(xe(Te(Te({}, i), {
                                                    requested: !0,
                                                    loading: !1,
                                                    responseCode: 200
                                                }))), [3, 4];
                                            case 3:
                                                return c = o.sent(), n(xe(Te(Te({}, i), {
                                                    loading: !1,
                                                    responseCode: c.httpStatus || -1
                                                }))), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                    },
                    Pe = function(e) {
                        return {
                            type: je.g,
                            factors: e
                        }
                    },
                    xe = function(e) {
                        return {
                            type: je.k,
                            mfaDetail: e
                        }
                    },
                    Re = function(e) {
                        return {
                            type: je.c,
                            loading: e
                        }
                    },
                    ze = function(e) {
                        return {
                            type: je.f,
                            error: e
                        }
                    },
                    Ue = function(e, t, n, a) {
                        return new(n || (n = Promise))((function(r, i) {
                            function c(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function o(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }
                            function s(e) {
                                var t;
                                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(c, o)
                            }
                            s((a = a.apply(e, t || [])).next())
                        }))
                    },
                    Ge = function(e, t) {
                        var n, a, r, i, c = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: o(0),
                            throw: o(1),
                            return: o(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function o(i) {
                            return function(o) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c;) try {
                                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return c.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                c.label++, a = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = c.ops.pop(), c.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = c.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    c = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    c.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && c.label < r[1]) {
                                                    c.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && c.label < r[2]) {
                                                    c.label = r[2], c.ops.push(i);
                                                    break
                                                }
                                                r[2] && c.ops.pop(), c.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, c)
                                    } catch (e) {
                                        i = [6, e], a = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, o])
                            }
                        }
                    },
                    Be = function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var a, r = 0, i = t.length; r < i; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
                        return e.concat(a || Array.prototype.slice.call(t))
                    },
                    Ye = function(e) {
                        return e >= 200 && e < 300
                    };
                var Fe = function(e, t) {
                        return Ye(e) ? "disabled" === t ? "mfa-response-disabled-success" : "mfa-response-success" : 429 === e ? "mfa-response-rate-limit" : 409 === e ? "mfa-response-already-enabled" : "server_error"
                    },
                    He = function(e, t, n) {
                        return t && !Ye(t) ? "try-again" : n ? "resend" : "disabled" === e || "action_required" === e ? "enable" : "issue" === e ? "add-email" : "disable"
                    },
                    Qe = function(e) {
                        var t = e.detail,
                            n = e.email,
                            r = e.onDisable,
                            i = t.factor,
                            c = t.status,
                            o = t.loading,
                            s = t.responseCode,
                            l = t.requested,
                            d = Object(m.a)().t,
                            f = Object(M.b)(),
                            b = a.useState(!0),
                            p = b[0],
                            g = b[1],
                            _ = a.useState("disabled"),
                            v = _[0],
                            N = _[1],
                            O = 429 === s || 409 === s,
                            S = Ye(s) ? "affirmative" : O ? "notice" : "error",
                            y = a.createElement(u.a, {
                                label: d(He(c, s, l)),
                                buttonType: u.c.primaryAlt,
                                buttonSize: u.b.S,
                                onClick: function() {
                                    return Ue(void 0, void 0, void 0, (function() {
                                        return Ge(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    switch (g(!1), c) {
                                                        case "disabled":
                                                        case "action_required":
                                                            return [3, 1];
                                                        case "enabled":
                                                            return [3, 3];
                                                        case "issue":
                                                            return [3, 4]
                                                    }
                                                    return [3, 5];
                                                case 1:
                                                    return N("enabled"), [4, f(ke(i, l))];
                                                case 2:
                                                    return e.sent(), g(!0), [3, 5];
                                                case 3:
                                                    return N("disabled"), r(i), g(!0), [3, 5];
                                                case 4:
                                                    return document.location.href = "#personal-information", [3, 5];
                                                case 5:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                },
                                disabled: O,
                                isLoading: o
                            });
                        return ["email", "sms", "riot_app"].includes(i) ? a.createElement(u.h, {
                            key: i,
                            serviceName: d("mfa-factor-name-" + i),
                            statusDescription: d("mfa-status-" + c),
                            status: c,
                            factor: i,
                            actionButton: y,
                            toast: !!s && !!p && a.createElement(E.o, {
                                state: S,
                                dismissAction: a.createElement(E.p, {
                                    label: d("dismiss"),
                                    onClick: function() {
                                        return g(!1)
                                    }
                                })
                            }, d(Fe(s, v), {
                                email: n
                            }))
                        }) : a.createElement("div", null, a.createElement("p", null, d("mfa-factor-not-supported", {
                            factor: i
                        })))
                    },
                    Ve = function() {
                        var e = Object(m.a)().t,
                            t = Object(M.b)();
                        return a.createElement("div", {
                            className: "mfa-card__error"
                        }, a.createElement("p", {
                            className: "mfa-card__error-message"
                        }, e("server_error")), a.createElement("div", null, a.createElement(u.a, {
                            className: "mfa-card__try-again",
                            buttonSize: u.b.XS,
                            buttonType: u.c.primaryAlt,
                            label: e("try-again"),
                            onClick: function() {
                                t(Le())
                            }
                        })), a.createElement("a", {
                            className: "mfa-card__need-help",
                            rel: "noreferrer",
                            target: "_blank",
                            href: e("support-link")
                        }, e("need-help")))
                    },
                    Ke = function() {
                        var e = Object(m.a)().t,
                            t = Object(M.b)(),
                            n = Object(M.c)((function(e) {
                                return e.mfaCard
                            })),
                            r = n.loading,
                            c = n.factors,
                            o = n.error,
                            s = Object(M.c)((function(e) {
                                var t;
                                return null === (t = e.user) || void 0 === t ? void 0 : t.email
                            })),
                            l = a.useState(""),
                            u = l[0],
                            d = l[1],
                            f = a.useState(!1),
                            b = f[0],
                            p = f[1];
                        a.useEffect((function() {
                            t(Le())
                        }), []);
                        var g = a.useCallback((function(e) {
                                var n;
                                "primary" === e && t((n = u, function(e, t) {
                                    return we(void 0, void 0, void 0, (function() {
                                        var a, r, i;
                                        return De(this, (function(c) {
                                            switch (c.label) {
                                                case 0:
                                                    a = t().mfaCard, r = a.factors.find((function(e) {
                                                        return e.factor === n
                                                    })), e(xe(Te(Te({}, r), {
                                                        loading: !0
                                                    }))), c.label = 1;
                                                case 1:
                                                    return c.trys.push([1, 3, , 4]), [4, Se.disableMfa(n)];
                                                case 2:
                                                    return c.sent(), e(xe(Te(Te({}, r), {
                                                        requested: !1,
                                                        status: "disabled",
                                                        loading: !1,
                                                        responseCode: 200
                                                    }))), [3, 4];
                                                case 3:
                                                    return i = c.sent(), e(xe(Te(Te({}, r), {
                                                        loading: !1,
                                                        responseCode: i.httpStatus || -1
                                                    }))), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                })), p(!1)
                            }), [u]),
                            _ = function(e) {
                                p(!0), d(e)
                            },
                            v = a.createElement("h1", {
                                className: "mfa-card__title"
                            }, e("2fa-title")),
                            N = a.createElement("div", {
                                className: "mfa-card__description"
                            }, a.createElement("p", null, e("2fa-description1")), a.createElement("p", null, a.createElement(Ce.a, {
                                i18nKey: "2fa-description2"
                            }, "Have questions? Learn more about", a.createElement("a", {
                                href: e("2fa-support-link"),
                                target: "_blank",
                                rel: "noreferrer"
                            }, "two-factor authentication"), "."))),
                            O = a.useMemo((function() {
                                return c.reduce((function(e, t) {
                                    var n = t.status === C.MfaStatus.ENABLED;
                                    return {
                                        enabled: n ? Be(Be([], e.enabled, !0), [t], !1) : e.enabled,
                                        others: n ? e.others : Be(Be([], e.others, !0), [t], !1)
                                    }
                                }), {
                                    enabled: [],
                                    others: []
                                })
                            }), [c]),
                            S = O.enabled,
                            y = O.others;
                        return a.createElement(a.Fragment, null, a.createElement(E.m, {
                            className: i()("mfa-card", (r || o) && "mfa-card--centralized"),
                            header: v,
                            description: N
                        }, r ? a.createElement("div", {
                            className: "mfa-card__loaderContainer"
                        }, a.createElement(E.l, null)) : o ? a.createElement(Ve, null) : a.createElement(a.Fragment, null, S.length > 0 && a.createElement("div", null, c.length > 1 && a.createElement("h3", {
                            className: "mfa-card__enabled-title"
                        }, "Enabled"), S.map((function(e) {
                            return a.createElement(Qe, {
                                key: e.factor,
                                detail: e,
                                email: s,
                                onDisable: _
                            })
                        }))), y.length > 0 && a.createElement("div", null, c.length > 1 && a.createElement("h4", {
                            className: "mfa-card__others-title"
                        }, "Others"), y && y.map((function(e) {
                            return a.createElement(Qe, {
                                key: e.factor,
                                detail: e,
                                email: s,
                                onDisable: _
                            })
                        }))))), a.createElement($, {
                            open: b,
                            title: e("mfa-confirmation-modal-title"),
                            description: e("mfa-confirmation-modal-description"),
                            buttonLabel: e("confirm"),
                            secondaryButtonLabel: e("cancel"),
                            onClose: g,
                            zIndex: et
                        }))
                    },
                    We = n("jKam"),
                    qe = n("4ISH"),
                    Ze = function() {
                        return (Ze = Object.assign || function(e) {
                            for (var t, n = 1, a = arguments.length; n < a; n++)
                                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }).apply(this, arguments)
                    },
                    Xe = function(e) {
                        return e.id ? e.id : Xe(e.parentElement)
                    },
                    Je = function(e) {
                        var t, n = e.navItems,
                            r = Object(m.a)().t,
                            c = a.useState(""),
                            o = c[0],
                            s = c[1],
                            l = Object(M.c)(N.b),
                            d = Object(M.c)((function(e) {
                                return e.config
                            })),
                            f = Object(qe.a)().height,
                            b = void 0 === f ? 600 : f,
                            p = a.useMemo((function() {
                                return n.reduce((function(e, t) {
                                    return t.id !== C.NavigationItem.GAME_BETA_ACCESS || l ? t.id === C.NavigationItem.TWO_FACTOR_AUTHENTICATION ? e : t.id !== C.NavigationItem.LOGIN_MANAGEMENT || d.logoutEverywhereEnabled ? (t.text = r(t.text), e.push(Ze({
                                        onClick: function() {
                                            return setTimeout((function() {
                                                return s(t.id)
                                            }), 50)
                                        },
                                        href: "#" + t.id
                                    }, t)), e) : e : e
                                }), [])
                            }), [n]),
                            g = {
                                title: r("account-management"),
                                items: p,
                                currentItem: o,
                                closeText: "CLOSE"
                            };
                        return a.useEffect((function() {
                            var e, t;
                            if (document.location.hash) document.location.href = document.location.hash, null === (e = p.find((function(e) {
                                return document.location.hash.includes(e.id)
                            }))) || void 0 === e || e.onClick();
                            else if (document.location.search) {
                                var n = new URL(document.location.href).searchParams.get("anchor_link");
                                Object.values(C.NavigationItem).includes(n) && (document.location.href = "/#" + n, null === (t = p.find((function(e) {
                                    return document.location.hash.includes(e.id)
                                }))) || void 0 === t || t.onClick())
                            }
                        }), []), a.useEffect((function() {
                            var e = .65 * b;
                            return t && t.disconnect(), t = new IntersectionObserver((function(e) {
                                    e.forEach((function(e) {
                                        if (e.isIntersecting && e.boundingClientRect.y > 0) {
                                            var t = Xe(e.target.parentElement);
                                            s(t)
                                        }
                                    }))
                                }), {
                                    rootMargin: "100px 0px -" + e + "px 0px",
                                    threshold: [0, .25, .5, .75, 1]
                                }), p.forEach((function(e) {
                                    var n = document.querySelector("#" + e.id + " .split-card");
                                    n && (t.unobserve(n), t.observe(n))
                                })),
                                function() {
                                    t.disconnect()
                                }
                        }), [p.length, b]), a.createElement("div", {
                            className: i()(u.f.cols(47), u.f.Wide.cols(11), u.f.Wide.GUTTER)
                        }, a.createElement(E.i, Ze({}, g)))
                    },
                    $e = function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var a, r = 0, i = t.length; r < i; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
                        return e.concat(a || Array.prototype.slice.call(t))
                    },
                    et = 3e4;
                function tt(e) {
                    var t, n = e.children,
                        r = e.externalItems,
                        c = e.additionalBanners,
                        o = Object(m.a)().t,
                        l = Object(M.b)(),
                        E = a.useContext(f),
                        b = (Object(M.c)((function(e) {
                            var t;
                            return (null === (t = e.account) || void 0 === t ? void 0 : t.emailVerification) || {}
                        })), Object(M.c)(N.f)),
                        p = Object(M.c)(N.b),
                        g = Object(M.c)((function(e) {
                            return e.config
                        }));
                    a.useEffect((function() {
                        l(Object(w.g)(g.valMobileCampaignId, g.valMobileBetaBuddiesUrl))
                    }), []);
                    var _, v = [{
                        id: C.NavigationItem.RIOT_ID,
                        icon: "face",
                        text: "riot-id"
                    }, {
                        id: C.NavigationItem.PERSONAL_INFORMATION,
                        icon: "contacts",
                        text: "personal-information"
                    }, {
                        id: C.NavigationItem.RIOT_ACCOUNT_SIGN_IN,
                        icon: "vpn_key",
                        text: "riot-account-sign-in"
                    }, {
                        id: C.NavigationItem.CONNECTED_ACCOUNTS,
                        icon: "layers",
                        text: "links"
                    }, {
                        id: C.NavigationItem.TWO_FACTOR_AUTHENTICATION,
                        icon: "verified_user",
                        text: "2fa-title"
                    }, {
                        id: C.NavigationItem.LOGIN_MANAGEMENT,
                        icon: "lock",
                        text: "login-management"
                    }, {
                        id: C.NavigationItem.COMMUNICATION_PREFERENCES,
                        icon: "question_answer",
                        text: "communication-preference-title"
                    }, {
                        id: C.NavigationItem.GAME_BETA_ACCESS,
                        icon: "videogame_asset",
                        text: "game-beta-access"
                    }];
                    return v = $e($e([], v, !0), r || [], !0), a.createElement("div", {
                        className: i()("content-wrapper", u.f.cols(47))
                    }, a.createElement(Je, {
                        navItems: v
                    }), a.createElement(ue.a, null, a.createElement("div", {
                        className: i()("faux-content", u.f.cols(47), u.f.Wide.cols(35))
                    }, a.createElement("div", {
                        className: i()("information-card", (_ = Object(d.g)(E), _.map((function(e) {
                            return e.includes("color-dark") ? "theme__color-light" : e
                        }))))
                    }, a.createElement(Ne.a, null), a.createElement(We.a, null)), c, a.createElement("div", {
                        className: i()(Object(d.g)(E))
                    }, a.createElement("div", {
                        id: C.NavigationItem.RIOT_ID,
                        className: i()("card-wrapper")
                    }, a.createElement(I, null)), a.createElement("div", {
                        id: C.NavigationItem.PERSONAL_INFORMATION,
                        className: i()("card-wrapper")
                    }, a.createElement(D, null)), a.createElement("div", {
                        id: C.NavigationItem.RIOT_ACCOUNT_SIGN_IN,
                        className: i()("card-wrapper")
                    }, a.createElement(Y, null)), a.createElement("div", {
                        id: C.NavigationItem.CONNECTED_ACCOUNTS,
                        className: i()("card-wrapper")
                    }, a.createElement(ve, null)), a.createElement("div", {
                        id: C.NavigationItem.TWO_FACTOR_AUTHENTICATION,
                        className: i()("card-wrapper")
                    }, a.createElement(Ke, null)), g.logoutEverywhereEnabled && a.createElement("div", {
                        id: C.NavigationItem.LOGIN_MANAGEMENT,
                        className: i()("card-wrapper")
                    }, a.createElement(he, null)), a.createElement("div", {
                        id: C.NavigationItem.COMMUNICATION_PREFERENCES,
                        className: i()("card-wrapper")
                    }, a.createElement(Oe, null)), n, p && a.createElement("div", {
                        id: C.NavigationItem.GAME_BETA_ACCESS,
                        className: i()("card-wrapper")
                    }, a.createElement(Ie, null))))), a.createElement($, {
                        open: !s(b),
                        title: b.title,
                        description: b.description,
                        buttonLabel: null !== (t = b.buttonLabel) && void 0 !== t ? t : o("okay"),
                        onClose: function() {
                            window.history.pushState({}, o("site-name", {
                                defaultValue: "Riot Account Management"
                            }), "/"), l(Object(te.c)())
                        },
                        zIndex: et
                    }))
                }
            },
        US7Q:
            /*!**********************************************!*\
              !*** ./src/plugins/account/actions/index.ts ***!
              \**********************************************/
            /*! exports provided: PASSWORD_UPDATED, PASSWORD_UPDATE_ERROR, EMAIL_CHANGE_POLL_INTERVAL, REQUEST_SUCCESS_FEEDBACK_TIMER, emailVerificationRequest, emailVerificationRequestApiStatus, emailVerificationRequestError, emailVerificationComplete, createEmailVerificationRequest, resendEmailVerification, emailVerificationStatus, updateUserPassword, updateUserPasswordV2, createSignIn, resetUpdatePasswordRequest, deleteAccountRequest, deleteAccountBalances, getAccountSecurityOption, updateAccountSecurityOption, queryAccountLoginLogs, getInviteList */
            /*! exports used: createEmailVerificationRequest, createSignIn, deleteAccountBalances, deleteAccountRequest, emailVerificationStatus, getAccountSecurityOption, getInviteList, queryAccountLoginLogs, resendEmailVerification, resetUpdatePasswordRequest, updateAccountSecurityOption, updateUserPasswordV2 */
            function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return E
                })), n.d(t, "i", (function() {
                    return b
                })), n.d(t, "e", (function() {
                    return p
                })), n.d(t, "l", (function() {
                    return g
                })), n.d(t, "b", (function() {
                    return _
                })), n.d(t, "j", (function() {
                    return v
                })), n.d(t, "d", (function() {
                    return N
                })), n.d(t, "c", (function() {
                    return M
                })), n.d(t, "f", (function() {
                    return O
                })), n.d(t, "k", (function() {
                    return S
                })), n.d(t, "h", (function() {
                    return y
                })), n.d(t, "g", (function() {
                    return A
                }));
                var a = n( /*! ../lib/api */ "9j71"),
                    r = n( /*! ../../links/lib/api */ "tiIk"),
                    i = n( /*! ../../../actions/user */ "fkUN"),
                    c = n( /*! @riotgames/a12l-types */ "OMMC"),
                    o = n( /*! ../reducer */ "GYan"),
                    s = n( /*! @riotgames/username-validation */ "Xgdr"),
                    l = n( /*! ../reducer/game-beta-access */ "42EM"),
                    u = n( /*! http-codes */ "i9bY");
                function d(e, t) {
                    return function(n) {
                        setTimeout((function() {
                            return n(p(!0))
                        }), 5e3), n({
                            type: o.c.REQUEST_PENDING,
                            email: t,
                            mode: e
                        })
                    }
                }
                function m(e) {
                    return function(t) {
                        t({
                            type: e
                        })
                    }
                }
                function f() {
                    return function(e) {
                        e({
                            type: o.c.REQUEST_API_ERROR
                        })
                    }
                }
                function E(e) {
                    return function(t) {
                        return t(m(o.c.REQUEST_API_PENDING)), Object(a.m)(e).then((function(e) {
                            t(d(e.mode, e.email)), t(m(o.c.REQUEST_API_COMPLETE))
                        })).catch((function(e) {
                            t(f())
                        }))
                    }
                }
                function b() {
                    return function(e) {
                        return e(m(o.c.REQUEST_API_PENDING)), Object(a.g)().then((function(t) {
                            var n = t.email,
                                a = t.mode;
                            e({
                                type: o.c.REQUEST_PENDING,
                                email: n,
                                mode: a
                            }), e(m(o.c.REQUEST_API_COMPLETE))
                        })).catch((function(t) {
                            e(f())
                        }))
                    }
                }
                function p(e) {
                    return void 0 === e && (e = !1),
                        function(t, n) {
                            var r = n().account.emailVerification.state;
                            if (e || r !== o.b.POLLING && r !== o.b.COMPLETE) return t({
                                type: o.c.REQUEST_START
                            }), Object(a.c)().then((function(e) {
                                return t(d(e.mode, e.email))
                            })).catch((function(e) {
                                if (e.httpStatus !== u.NOT_FOUND) throw e;
                                t((function(e, t) {
                                    var n = t(),
                                        a = n.user,
                                        r = n.account.emailVerification.email;
                                    r && (a.email = r, a.email_status = c.EmailStatus.VALIDATED, e(Object(i.b)(a))), e({
                                        type: o.c.REQUEST_COMPLETE
                                    })
                                }))
                            }))
                        }
                }
                function g(e, t) {
                    return function(n) {
                        return n({
                            type: o.e.REQUEST_START
                        }), Object(a.i)(e, t).then((function() {
                            n({
                                type: o.e.REQUEST_COMPLETE_FEEDBACK
                            }), setTimeout((function() {
                                n({
                                    type: o.e.REQUEST_COMPLETE
                                }), n({
                                    type: "passwordUpdated",
                                    password: e,
                                    currentPassword: t
                                })
                            }), 2e3)
                        })).catch((function(e) {
                            e.httpStatus === u.UNPROCESSABLE_ENTITY ? n({
                                type: o.e.PASSWORD_UPDATE_NOT_MATCH_ERROR,
                                error: e.errorCode
                            }) : n({
                                type: o.e.PASSWORD_UPDATE_ERROR,
                                error: e.message
                            })
                        }))
                    }
                }
                function _(e, t) {
                    return function(n, a) {
                        if (e.length > s.USERNAME_MAX_LENGTH || e.length < s.USERNAME_MIN_LENGTH) n({
                            type: o.e.USERNAME_CREATE_ERROR,
                            error: "username_length"
                        });
                        else {
                            if (s.USERNAME_ALLOWED_CHARACTERS.test(e)) return n({
                                type: o.e.REQUEST_START
                            }), Object(r.a)(e, t).then((function() {
                                n({
                                    type: o.e.REQUEST_COMPLETE_FEEDBACK
                                }), setTimeout((function() {
                                    n(Object(i.a)()), n({
                                        type: o.e.REQUEST_COMPLETE
                                    })
                                }), 2e3)
                            })).catch((function(e) {
                                n({
                                    type: o.e.USERNAME_CREATE_ERROR,
                                    error: e.errorCode
                                })
                            }));
                            n({
                                type: o.e.USERNAME_CREATE_ERROR,
                                error: "username_invalid"
                            })
                        }
                    }
                }
                function v() {
                    return function(e) {
                        e({
                            type: o.e.PASSWORD_REQUEST_RESET
                        })
                    }
                }
                function N(e) {
                    return function(t) {
                        return Object(a.b)(e).then((function() {
                            t({
                                type: o.a.ACCOUNT_DELETED
                            })
                        })).catch((function(e) {
                            return t({
                                type: o.a.ACCOUNT_DELETION_ERROR,
                                error: e
                            })
                        }))
                    }
                }
                function M(e) {
                    return function(t) {
                        return Object(a.e)(e).then((function(e) {
                            t({
                                type: o.a.BALANCE_RESPONDED,
                                balances: e
                            })
                        })).catch((function(e) {
                            t({
                                type: o.a.BALANCE_ERROR,
                                error: e
                            })
                        }))
                    }
                }
                function O() {
                    return function(e) {
                        return Object(a.d)().then((function(t) {
                            return e({
                                type: o.g.QUERY_RESPONDED,
                                option: t
                            })
                        }))
                    }
                }
                function S(e, t, n) {
                    return function(r) {
                        return Object(a.h)(e, t, n).then((function() {
                            return r({
                                type: o.g.UPDATE_COMPLETED,
                                option: {
                                    notify: e,
                                    kick: t,
                                    lock: n
                                }
                            })
                        }))
                    }
                }
                function y() {
                    return function(e) {
                        return Object(a.f)().then((function(t) {
                            var n = t.sort((function(e, t) {
                                    var n = e.timestamp;
                                    return t.timestamp - n
                                })).map((function(e) {
                                    var t = e.timestamp,
                                        n = e.username,
                                        a = e.country,
                                        r = e.source,
                                        i = e.clientIp;
                                    return {
                                        when: new Date(t),
                                        username: n,
                                        country: a,
                                        source: r,
                                        clientIp: i
                                    }
                                })),
                                a = t.filter((function(e) {
                                    return "KR" !== e.country
                                })).length;
                            return e({
                                type: o.d.QUERY_RESPONDED,
                                logs: n,
                                foreignCount: a
                            })
                        }))
                    }
                }
                function A(e, t) {
                    return function(n) {
                        return Object(a.a)().then((function(a) {
                            var r = a.invites,
                                i = (void 0 === r ? [] : r).find((function(t) {
                                    return t.campaign.id === e
                                }));
                            if (i) {
                                var c = i.invite_limit,
                                    o = i.redeemed_invites,
                                    s = i.invite_code,
                                    u = c - o,
                                    d = t + "?inviteCode=" + s;
                                n({
                                    type: l.a.GAME_BETA_ACCESS_COMPLETED,
                                    campaignAvailable: !0,
                                    invitesLeft: u,
                                    invitesLimit: c,
                                    invitationLink: d
                                })
                            } else n({
                                type: l.a.GAME_BETA_ACCESS_COMPLETED,
                                campaignAvailable: !1
                            })
                        })).catch((function(e) {
                            console.error(e)
                        }))
                    }
                }
            },
        bGxK:
            /*!**************************************************************!*\
              !*** ./src/v2Components/email-verification-banner/index.tsx ***!
              \**************************************************************/
            /*! exports provided: SHOW_EMAIL_BANNER_KEY, EmailVerificationBanner */
            /*! exports used: EmailVerificationBanner, SHOW_EMAIL_BANNER_KEY */
            function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return u
                })), n.d(t, "a", (function() {
                    return d
                }));
                var a = n( /*! react */ "ERkP"),
                    r = n( /*! react-i18next */ "9Koi"),
                    i = n( /*! @riotgames/accounts-react-components/lib/DesignSystem */ "lysJ"),
                    c = n( /*! @riotgames/accounts-react-components/lib/v2 */ "wrv0"),
                    o = n( /*! react-redux */ "uDfI"),
                    s = n( /*! @riotgames/a12l-types */ "OMMC"),
                    l = n( /*! ../../plugins/account/actions */ "US7Q"),
                    u = "show_email_verification_banner",
                    d = function() {
                        var e, t = Object(r.a)().t,
                            n = Object(o.b)(),
                            d = Object(o.c)((function(e) {
                                return e.account.emailVerification
                            })),
                            m = d.isLoading,
                            f = d.mode,
                            E = d.responseOk,
                            b = d.email,
                            p = Object(o.c)((function(e) {
                                return e.user.email_status === s.EmailStatus.VALIDATED
                            })),
                            g = (f === s.EmailTokenMode.VERIFY || f === s.EmailTokenMode.UPDATE) && !p,
                            _ = a.useState(!1),
                            v = _[0],
                            N = _[1],
                            M = {
                                notificationState: (e = p) ? "affirmative" : "error",
                                header: e ? "verified-email-title" : "unverified-email-title",
                                description: e ? "verified-email-description" : "unverified-email-description"
                            },
                            O = M.header,
                            S = M.description,
                            y = M.notificationState,
                            A = t(!1 === E ? "try-again" : g ? "resend-email" : "verify-email"),
                            h = a.useState("true" === localStorage.getItem(u)),
                            I = h[0],
                            C = h[1];
                        return a.useEffect((function() {
                            p || (localStorage.removeItem(u), C(!0))
                        }), [p]), p && !I ? null : a.createElement(i.i, {
                            state: y,
                            header: t(O),
                            description: t(S),
                            dismissAction: p && a.createElement(i.j, {
                                label: "Dismiss",
                                onClick: function() {
                                    localStorage.removeItem(u), C(!1)
                                },
                                "data-testid": "dismiss-btn"
                            }),
                            primaryAction: p ? a.createElement(i.a, {
                                buttonType: i.c.primaryAlt,
                                buttonSize: i.b.S,
                                label: t("enable-2fa"),
                                onClick: function() {
                                    document.location.href = "#" + s.NavigationItem.TWO_FACTOR_AUTHENTICATION
                                },
                                "data-testid": "enable-2fa"
                            }) : a.createElement(i.a, {
                                buttonType: i.c.primaryAlt,
                                buttonSize: i.b.S,
                                label: A,
                                isLoading: m,
                                onClick: function() {
                                    n(g ? Object(l.i)() : Object(l.a)()), N(!0)
                                },
                                "data-testid": "resend-btn"
                            }),
                            secondaryAction: a.createElement(i.a, {
                                buttonType: i.c.secondary,
                                buttonSize: i.b.S,
                                label: t("learn-more-information"),
                                onClick: function() {
                                    var e = t("email-verification-faq-link"),
                                        n = t("2fa-support-link");
                                    p ? window.open(n, "_blank") : window.open(e, "_blank")
                                },
                                "data-testid": "learn-more-btn"
                            }),
                            toast: !p && v && !m && a.createElement(c.m, {
                                "data-testid": "toast",
                                state: E ? "affirmative" : "error",
                                dismissAction: a.createElement(c.n, {
                                    label: "Dismiss",
                                    onClick: function() {
                                        N(!1)
                                    }
                                })
                            }, E ? t("email-sent-to") + ": " + b : t("server_error"))
                        })
                    }
            },
        hUE8:
            /*!*********************************************************************!*\
              !*** ./src/v2Components/connected-accounts/socialButton/index.styl ***!
              \*********************************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        jIc5:
            /*!********************************!*\
              !*** ./src/store/selectors.ts ***!
              \********************************/
            /*! exports provided: getAlias, getGeneratedTagline, isGeneratingTagline, isEligibilityLoading, getEligibility, getEligibilityDate, getChangeStatus, getRiotIdErrors, getError, getConfig, getUser, getLinks, getPrivacySubscription, getInvitesLeft, getInvitationLink, getInvitesLimit, getCampaignAvailable, isFactorEnabled, getFactorDetails */
            /*! exports used: getAlias, getCampaignAvailable, getChangeStatus, getEligibility, getEligibilityDate, getError, getGeneratedTagline, getLinks, getPrivacySubscription, getRiotIdErrors, getUser, isEligibilityLoading, isFactorEnabled, isGeneratingTagline */
            function(e, t, n) {
                "use strict";
                n.d(t, "a", (function() {
                    return a
                })), n.d(t, "g", (function() {
                    return r
                })), n.d(t, "n", (function() {
                    return i
                })), n.d(t, "l", (function() {
                    return c
                })), n.d(t, "d", (function() {
                    return o
                })), n.d(t, "e", (function() {
                    return s
                })), n.d(t, "c", (function() {
                    return l
                })), n.d(t, "j", (function() {
                    return u
                })), n.d(t, "f", (function() {
                    return d
                })), n.d(t, "k", (function() {
                    return m
                })), n.d(t, "h", (function() {
                    return f
                })), n.d(t, "i", (function() {
                    return E
                })), n.d(t, "b", (function() {
                    return b
                })), n.d(t, "m", (function() {
                    return p
                }));
                var a = function(e) {
                        var t;
                        return (null === (t = e.user) || void 0 === t ? void 0 : t.alias) || {}
                    },
                    r = function(e) {
                        var t, n;
                        return null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.generate) || void 0 === n ? void 0 : n.tagLine
                    },
                    i = function(e) {
                        var t, n;
                        return null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.generate) || void 0 === n ? void 0 : n.loading
                    },
                    c = function(e) {
                        var t, n;
                        return null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.eligibility) || void 0 === n ? void 0 : n.loading
                    },
                    o = function(e) {
                        var t, n, a;
                        return null === (a = null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.eligibility) || void 0 === n ? void 0 : n.data) || void 0 === a ? void 0 : a.eligible
                    },
                    s = function(e) {
                        var t, n, a;
                        return null === (a = null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.eligibility) || void 0 === n ? void 0 : n.data) || void 0 === a ? void 0 : a.eligibleAfter
                    },
                    l = function(e) {
                        var t, n;
                        return null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.change) || void 0 === n ? void 0 : n.status
                    },
                    u = function(e) {
                        var t, n, a, r, i, c;
                        return (null === (n = null === (t = e.riotId) || void 0 === t ? void 0 : t.change) || void 0 === n ? void 0 : n.err) || (null === (r = null === (a = e.riotId) || void 0 === a ? void 0 : a.eligibility) || void 0 === r ? void 0 : r.err) || (null === (c = null === (i = e.riotId) || void 0 === i ? void 0 : i.generate) || void 0 === c ? void 0 : c.err)
                    },
                    d = function(e) {
                        return e.error
                    },
                    m = function(e) {
                        return e.user
                    },
                    f = function(e) {
                        return e.links || {}
                    },
                    E = function(e) {
                        var t;
                        return (null === (t = e.subscriptions) || void 0 === t ? void 0 : t.privacy) || {}
                    },
                    b = function(e) {
                        var t;
                        return null === (t = e.account) || void 0 === t ? void 0 : t.gameBetaAccess.campaignAvailable
                    },
                    p = function(e) {
                        return function(t) {
                            var n = t.mfaCard.factors.find((function(t) {
                                return t.factor === e
                            }));
                            return n && "enabled" === n.status
                        }
                    }
            },
        jKam:
            /*!***********************************************!*\
              !*** ./src/v2Components/mfa-banner/index.tsx ***!
              \***********************************************/
            /*! exports provided: HIDE_MFA_BANNER_KEY, MFA_STATUS_KEY, MFABanner */
            /*! exports used: MFABanner, MFA_STATUS_KEY */
            function(e, t, n) {
                "use strict";
                n.d(t, "b", (function() {
                    return u
                })), n.d(t, "a", (function() {
                    return E
                }));
                var a = n( /*! react */ "ERkP"),
                    r = n( /*! react-i18next */ "9Koi"),
                    i = n( /*! @riotgames/accounts-react-components/lib/DesignSystem */ "lysJ"),
                    c = n( /*! react-redux */ "uDfI"),
                    o = n( /*! @riotgames/a12l-types */ "OMMC"),
                    s = n( /*! ../../store/selectors */ "jIc5"),
                    l = n( /*! ../email-verification-banner */ "bGxK"),
                    u = "mfa_status",
                    d = function(e) {
                        var t = e.handleClose,
                            n = e.handleLearnMore,
                            c = e.handleEnable2fa,
                            o = Object(r.a)().t,
                            s = a.createElement(i.j, {
                                label: o("dismiss"),
                                onClick: t,
                                "data-testid": "dismiss-btn"
                            }),
                            l = a.createElement(i.a, {
                                buttonType: i.c.primaryAlt,
                                buttonSize: i.b.S,
                                label: o("enable-2fa"),
                                onClick: c,
                                "data-testid": "enable-2fa"
                            }),
                            u = a.createElement(i.a, {
                                buttonType: i.c.secondary,
                                buttonSize: i.b.S,
                                label: o("learn-more-information"),
                                onClick: n,
                                "data-testid": "learn-more-btn"
                            });
                        return a.createElement(i.i, {
                            state: "notice",
                            header: o("mfa-banner-title-notice"),
                            description: o("mfa-banner-description-notice"),
                            dismissAction: s,
                            primaryAction: l,
                            secondaryAction: u
                        })
                    },
                    m = function(e) {
                        var t = e.handleClose,
                            n = Object(r.a)().t,
                            c = a.createElement(i.j, {
                                label: n("dismiss"),
                                onClick: t,
                                "data-testid": "dismiss-btn"
                            });
                        return a.createElement(i.i, {
                            state: "affirmative",
                            header: n("mfa-banner-title-affirmative"),
                            description: n("mfa-banner-description-affirmative"),
                            dismissAction: c
                        })
                    },
                    f = function(e) {
                        var t = e.handleLearnMore,
                            n = e.handleTryAgain,
                            c = Object(r.a)().t,
                            o = a.createElement(i.a, {
                                buttonType: i.c.primaryAlt,
                                buttonSize: i.b.S,
                                label: c("try-again"),
                                onClick: n,
                                "data-testid": "try-again"
                            }),
                            s = a.createElement(i.a, {
                                buttonType: i.c.secondary,
                                buttonSize: i.b.S,
                                label: c("learn-more-information"),
                                onClick: t,
                                "data-testid": "learn-more-btn"
                            });
                        return a.createElement(i.i, {
                            state: "error",
                            header: c("mfa-banner-title-error"),
                            description: c("mfa-banner-description-error"),
                            primaryAction: o,
                            secondaryAction: s
                        })
                    },
                    E = function() {
                        var e = Object(r.a)().t,
                            t = Object(c.c)((function(e) {
                                return e.user.email_status === o.EmailStatus.VALIDATED
                            })),
                            n = Object(c.c)(Object(s.m)("email")),
                            i = Object(c.c)((function(e) {
                                return e.mfaCard.loading
                            })),
                            E = a.useState("true" !== localStorage.getItem("hide_mfa_banner")),
                            b = E[0],
                            p = E[1],
                            g = localStorage.getItem(u),
                            _ = "true" === localStorage.getItem(l.b),
                            v = function() {
                                var t = e("2fa-support-link");
                                window.open(t, "_blank")
                            },
                            N = function() {
                                document.location.href = "#" + o.NavigationItem.TWO_FACTOR_AUTHENTICATION
                            },
                            M = function() {
                                localStorage.setItem("hide_mfa_banner", "true"), p(!1)
                            };
                        return a.useEffect((function() {
                            t || (localStorage.removeItem("hide_mfa_banner"), p(!0))
                        }), [t]), i || !t || !b || _ ? null : n ? "success" === g ? a.createElement(m, {
                            handleClose: M
                        }) : null : "error" === g ? a.createElement(f, {
                            handleLearnMore: v,
                            handleTryAgain: N
                        }) : a.createElement(d, {
                            handleClose: M,
                            handleEnable2fa: N,
                            handleLearnMore: v
                        })
                    }
            },
        qR4Z:
            /*!*********************************************!*\
              !*** ./src/v2Components/riot-id/index.styl ***!
              \*********************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        "v+3+":
            /*!**********************************************************!*\
              !*** ./src/v2Components/personal-information/index.styl ***!
              \**********************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        vjCw:
            /*!****************************************************************!*\
              !*** ./src/v2Components/xbox-pending-success-modal/index.styl ***!
              \****************************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {},
        wnmW:
            /*!**********************************************************!*\
              !*** ./src/v2Components/riot-account-sign-in/index.styl ***!
              \**********************************************************/
            /*! no static exports found */
            /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
            function(e, t, n) {}
    }
]);