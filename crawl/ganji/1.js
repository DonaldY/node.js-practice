let loader; // 定义全局变量
!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        loader = o; // 赋予加载器变量
        return t[n].call(o.exports, o, o.exports, i),
            o.l = !0,
            o.exports
    }
    i.m = t,
        i.c = e,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function(t, e) {
            if (1 & e && (t = i(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
            2 & e && "string" != typeof t)
                for (var o in t)
                    i.d(n, o, function(e) {
                        return t[e]
                    }
                        .bind(null, o));
            return n
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
            ;
            return i.d(e, "a", e),
                e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 0)
}([function(t, e, i) {
    var n = i(1);
    window.ScrollMath = n
}
    , function(t, e, i) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
            )(t)
        }
        function o(t, e) {
            var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!i) {
                if (Array.isArray(t) || (i = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return r(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return r(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0
                        , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0, l = !1;
            return {
                s: function() {
                    i = i.call(t)
                },
                n: function() {
                    var t = i.next();
                    return s = t.done,
                        t
                },
                e: function(t) {
                    l = !0,
                        a = t
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (l)
                            throw a
                    }
                }
            }
        }
        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        function a(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                ))),
                    i.push.apply(i, n)
            }
            return i
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(i), !0).forEach((function(e) {
                        c(t, e, i[e])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }
                ))
            }
            return t
        }
        function l(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value"in n && (n.writable = !0),
                    Object.defineProperty(t, h(n.key), n)
            }
        }
        function c(t, e, i) {
            return (e = h(e))in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
                t
        }
        function h(t) {
            var e = function(t, e) {
                if ("object" !== n(t) || null === t)
                    return t;
                var i = t[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(t, e || "default");
                    if ("object" !== n(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" === n(e) ? e : String(e)
        }
        var d = i(2)
            , f = i(3).hex_md5
            , p = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            , g = i(4)
            , m = g.isString
            , y = g.isFunction
            , v = g.isBoolean
            , b = g.getPlatform
            , w = g.getSecretKey
            , S = g.dispatchEvent
            , x = g.debounce
            , T = g.ajaxPost
            , k = g.deleteEvent
            , _ = g.formatParams
            , L = g.sendBeacon
            , C = function() {
            function t() {
                var e = this
                    , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                l(this, t),
                    c(this, "beforeUnload", (function(t) {
                            e.closeTimer = setTimeout((function() {
                                    t({
                                        msg: "请求超时"
                                    })
                                }
                            ), 2e3),
                                e.requestSuccess = function(i) {
                                    clearTimeout(e.closeTimer),
                                        t(i)
                                }
                                ,
                                e.handleExposureTime(!0)
                        }
                    )),
                window.____traceLog4fe || (window.____traceLog4fe = {});
                var o = m(i.domList) ? document.getElementsByClassName(i.domList) : i.domList;
                this.initialization = !1,
                    this.traceLog = n,
                    this.domList = o || [],
                    this.parentNode = i.parentNode || null,
                    this.fixedPositionNode = i.fixedPositionNode || null,
                    this.defaultAction = i.defaultAction || "stay",
                    this.dataString = i.dataString || "",
                    this.extraDataString = i.extraDataString || [],
                    this.ignoreX = i.ignoreX || !1,
                    this.allowCustomRequest = i.allowCustomRequest || !1,
                    this.customMakeDataCallback = i.customMakeDataCallback || null,
                    this.withCredentials = !v(i.withCredentials) || i.withCredentials,
                    this.pid = n.pid || window.____traceLog4fe.pid || "0",
                    this.openState = n.openState || window.____traceLog4fe.openState || 1,
                    this.requestIntervalTime = n.time || window.____traceLog4fe.time || 3e3,
                    this.pageType = n.pagetype || window.____traceLog4fe.pagetype || "other",
                    this.targetUrl = n.targeturl || window.____traceLog4fe.targeturl || "https://zpcollect.58.com/logs/app/ganji",
                    this.closeCollection = "{}" === JSON.stringify(n) && !window.____traceLog4fe || 1 != this.openState,
                    this.platform = b(this.targetUrl),
                    this.secretKey = w(this.platform),
                    this.submitList = [],
                    this.snapshotData = [],
                    this.exposureList = [],
                    this.domChangeTimer = null,
                    this.requestMaxLength = 50,
                    this.stopImmediateFlag = !1,
                    this.isBeforeUnload = !1,
                    this.checkDomTimer = null,
                    this.requestSuccess = null,
                    this.realTop = i.realTop || 0
            }
            var e, i, n;
            return e = t,
                n = [{
                    key: "directives",
                    value: function() {
                        var t = this
                            , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                            , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                            , n = arguments.length > 2 ? arguments[2] : void 0
                            , o = null
                            , r = {
                            num: 0,
                            md5: ""
                        };
                        function a() {
                            if (!o)
                                return i();
                            var t = o.beforeUnload || null;
                            t && "function" == typeof t ? t((function() {
                                    i()
                                }
                            )) : i()
                        }
                        var s = function(t) {
                            window.WBAPP && (window.WBAPP.invoke("toggle_gesture", {
                                cmd: "on",
                                edge_paning: !1,
                                webview_paning: "off"
                            }, (function() {
                                    t()
                                }
                            )),
                                window.WBAPP.invoke("device_event", {
                                    type: "goback"
                                }, (function() {
                                        t()
                                    }
                                )))
                        };
                        s(a);
                        var l = function(i, r) {
                            o && (o.destory(),
                                o = null);
                            var a = i.getElementsByClassName(e.domList) || [];
                            o = new t({
                                defaultAction: e.defaultAction || "stay",
                                ignoreX: e.ignoreX || !0,
                                domList: a,
                                dataString: e.dataString || "dataString",
                                extraDataString: e.extraDataString || [],
                                fixedPositionNode: e.fixedPositionNode || null,
                                allowCustomRequest: e.allowCustomRequest || !1,
                                customMakeDataCallback: e.customMakeDataCallback || null,
                                parentNode: i,
                                withCredentials: e.withCredentials || !1
                            },r.value || {}),
                            n && (n.prototype.$smh = o),
                            a.length > 0 && o.init()
                        }
                            , u = function(t, i, n, a) {
                            o && i.value && o.setTraceLog(i.value),
                                setTimeout((function() {
                                        var n = t.getElementsByClassName(e.domList) || [];
                                        if (n.length > 0) {
                                            var a = n[0].getAttribute(o.dataString)
                                                , s = f(a + o.getExtraDataString(n[0], !0));
                                            o.initialization ? (r.num !== n.length || r.num == n.length && r.md5 !== s) && (o.forceUpdate(),
                                                r.num = n.length,
                                                r.md5 = s) : (r.num = n.length,
                                                r.md5 = s,
                                                o.init(i.value))
                                        }
                                    }
                                ))
                        }
                            , c = function() {
                            o && (o.destory(),
                                o = null)
                        };
                        return {
                            bind: l,
                            componentUpdated: u,
                            unbind: c
                        }
                    }
                }],
            (i = [{
                key: "setTraceLog",
                value: function(t) {
                    this.traceLog = t || this.traceLog,
                        this.pid = t.pid || this.pid || window.____traceLog4fe.pid || "0",
                        this.openState = t.openState || this.openState || window.____traceLog4fe.openState || 1,
                        this.requestIntervalTime = t.time || this.requestIntervalTime || window.____traceLog4fe.time || 3e3,
                        this.pageType = t.pagetype || this.pageType || window.____traceLog4fe.pagetype || "other",
                        this.targetUrl = t.targeturl || this.targetUrl || window.____traceLog4fe.targeturl || "https://zpcollect.58.com/logs/app/ganji",
                        this.closeCollection = "{}" === JSON.stringify(t) && !window.____traceLog4fe || 1 != this.openState
                }
            }, {
                key: "init",
                value: function(t) {
                    t && this.setTraceLog(t),
                        this.initialization = !0,
                    this.closeCollection || (this.domIntoInstance(),
                        this.handleExposureMonitor(),
                        this.addScrollEvent(),
                        this.addVisibilityChange(),
                        this.addBeforeUnload(),
                        p && y(p) ? this.createMutationObserver() : this.handleDomChange())
                }
            }, {
                key: "domIntoInstance",
                value: function() {
                    var t, e;
                    if (this.exposureList = [],
                    this.domList && 0 !== this.domList.length)
                        if (this.dataString)
                            for (var i = (null === (t = this.fixedPositionNode) || void 0 === t ? void 0 : t.clientHeight) || 0, n = (null === (e = this.fixedPositionNode) || void 0 === e ? void 0 : e.getBoundingClientRect().top) || 0, o = 0; o < this.domList.length; o++) {
                                var r = this.domList[o];
                                if (!this.isDisabled(r)) {
                                    var a = new d({
                                        element: r,
                                        index: o,
                                        ignoreX: this.ignoreX,
                                        realTop: this.realTop,
                                        fixedBoxTop: n,
                                        fixedBoxHeight: i,
                                        id: r.getAttribute(this.dataString) || "",
                                        extraDataString: this.getExtraDataString(r)
                                    });
                                    this.exposureList.push(a),
                                        this.addEventClick(r, a)
                                }
                            }
                        else
                            console.log("dataString不能为空");
                    else
                        console.log("domList 不合法")
                }
            }, {
                key: "getExtraDataString",
                value: function(t, e) {
                    if (!t || "string" != typeof this.extraDataString && !Array.isArray(this.extraDataString))
                        return console.log("extraDataString 不合法"),
                            {};
                    var i = {}
                        , n = "";
                    return Array.isArray(this.extraDataString) ? this.extraDataString.forEach((function(e) {
                            i[e] = t.getAttribute(e) || "",
                                n += t.getAttribute(e) || ""
                        }
                    )) : (i[this.extraDataString] = t.getAttribute(this.extraDataString) || "",
                        n = t.getAttribute(this.extraDataString) || ""),
                        e ? n : i
                }
            }, {
                key: "addEventClick",
                value: function(t, e) {
                    var i = this;
                    t && t.dataset && !Boolean(t.dataset.clickEventBound) && (t.dataset.clickEventBound = !0,
                        S(t, "click", x((function() {
                                var t = i.handleSubmitItemData(e, "click");
                                i.submitList.push(t)
                            }
                        ))))
                }
            }, {
                key: "addScrollEvent",
                value: function() {
                    var t = this;
                    this.handleScrollDebounce = x((function() {
                            t.handleScroll()
                        }
                    ), 200),
                        S(this.fixedPositionNode || window, "scroll", this.handleScrollDebounce)
                }
            }, {
                key: "addVisibilityChange",
                value: function() {
                    this.handleVisibilityChange = this.handleVisibilityChange.bind(this),
                        S(document, "visibilitychange", this.handleVisibilityChange)
                }
            }, {
                key: "addBeforeUnload",
                value: function() {
                    this.handleBeforeUnload = this.handleBeforeUnload.bind(this),
                        S(window, "beforeunload", this.handleBeforeUnload),
                        S(window, "pagehide", this.handleBeforeUnload),
                        S(window, "unload", this.handleBeforeUnload)
                }
            }, {
                key: "filterOutViewport",
                value: function(t) {
                    for (var e = [], i = 0; i < t.length; i++)
                        t[i].isInViewport && e.push(this.handleSubmitItemData(t[i], this.defaultAction));
                    return e
                }
            }, {
                key: "handleExposureMonitor",
                value: function() {
                    if (this.submitList = [],
                        !(this.exposureList.length < 1)) {
                        for (var t = 0; t < this.exposureList.length; t++)
                            this.exposureList[t].dispatchExposureCheck();
                        this.submitList = this.filterOutViewport(this.exposureList)
                    }
                }
            }, {
                key: "handleDomChange",
                value: function() {
                    var t = this;
                    this.checkDomTimer = setInterval((function() {
                            t.domListIsChanged() && t.domIntoInstance()
                        }
                    ), 500)
                }
            }, {
                key: "handleSubmitItemData",
                value: function(t, e) {
                    return {
                        pagetype: this.pageType,
                        pid: this.pid,
                        body: s({
                            infoid: t.id,
                            action: e,
                            index: t.index,
                            data: 1
                        }, t.extraDataString),
                        origin: t
                    }
                }
            }, {
                key: "handleScroll",
                value: function() {
                    this.handleExposureTime()
                }
            }, {
                key: "handleRequestSubmitList",
                value: function() {
                    var t = this
                        , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                        , i = null
                        , n = e;
                    if (!(n.length < 1 || this.stopImmediateFlag) && this.targetUrl) {
                        this.allowCustomRequest && y(this.customMakeDataCallback) && (n = this.customMakeDataCallback(n)),
                            i = JSON.stringify(n);
                        var o = _({
                            content: i,
                            sign: f(this.secretKey + this.platform + i).toUpperCase()
                        });
                        this.isBeforeUnload ? L(this.targetUrl, o, this.withCredentials) : T(this.targetUrl, o, (function(e, i) {
                                e || t.clearAllStatus(),
                                y(t.requestSuccess) && t.requestSuccess(i)
                            }
                        ), this.withCredentials)
                    }
                }
            }, {
                key: "handleExposureTime",
                value: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = [], n = o(this.submitList);
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = t.value;
                            r.origin && (this.isNeedStayTime(r.body.action) ? (r.body.data = r.origin.getStayTime(e),
                            r.body.data && 1 !== r.body.data && (delete r.origin,
                                i.push(r))) : (delete r.origin,
                                i.push(r)))
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    this.handleExposureMonitor(),
                        i.length > 0 ? this.handleRequestSubmitList(i) : y(this.requestSuccess) && this.requestSuccess({
                            msg: "目前曝光的数据为空"
                        })
                }
            }, {
                key: "handleVisibilityChange",
                value: function() {
                    "visible" === document.visibilityState ? this.handleExposureVisibility(!0) : this.handleExposureVisibility()
                }
            }, {
                key: "handleExposureVisibility",
                value: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = o(this.exposureList);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var n = t.value;
                            n.visibilityChange(e)
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "handleBeforeUnload",
                value: function() {
                    this.isBeforeUnload || (this.isBeforeUnload = !0,
                        this.handleExposureTime(!0))
                }
            }, {
                key: "createMutationObserver",
                value: function() {
                    var t = this
                        , e = this.parentNode;
                    e ? new p((function(e) {
                            var i, n = o(e);
                            try {
                                for (n.s(); !(i = n.n()).done; ) {
                                    var r = i.value;
                                    "childList" === r.type && t.domList[0] && r.target === t.domList[0].parentNode && t.domIntoInstance()
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    )).observe(e, {
                        childList: !0
                    }) : setTimeout(this.createMutationObserver, 500)
                }
            }, {
                key: "domListIsChanged",
                value: function() {
                    if (this.domList.length !== this.exposureList.length)
                        return !0;
                    for (var t = 0; t < this.domList.length; t++)
                        if (this.domList[t].getAttribute(this.dataString) !== this.exposureList[t].id)
                            return !0;
                    return !1
                }
            }, {
                key: "isDisabled",
                value: function(t) {
                    return window.getComputedStyle ? "none" === window.getComputedStyle(t).display : "none" === t.currentStyle.display
                }
            }, {
                key: "isNeedStayTime",
                value: function(t) {
                    return !!t && ("stay" === t || "view" === t)
                }
            }, {
                key: "stopImmediate",
                value: function() {
                    this.stopImmediateFlag = !0
                }
            }, {
                key: "startImmediate",
                value: function() {
                    this.stopImmediateFlag = !1
                }
            }, {
                key: "forceUpdate",
                value: function() {
                    this.handleExposureTime(!0),
                        this.startImmediate(),
                        this.domIntoInstance(),
                        this.handleExposureMonitor()
                }
            }, {
                key: "clearAllStatus",
                value: function() {
                    var t, e = o(this.exposureList);
                    try {
                        for (e.s(); !(t = e.n()).done; )
                            t.value.clear()
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.startImmediate(),
                        this.handleExposureTime(!0),
                        this.exposureList = [],
                    this.checkDomTimer && clearInterval(this.checkDomTimer),
                        k(this.fixedPositionNode || window, "scroll", this.handleScrollDebounce),
                        k(document, "visibilitychange", this.handleVisibilityChange),
                        k(window, "beforeunload", this.handleBeforeUnload),
                        k(window, "pagehide", this.handleBeforeUnload),
                        k(window, "unload", this.handleBeforeUnload)
                }
            }, {
                key: "destory",
                value: function() {
                    this.destroy()
                }
            }]) && u(e.prototype, i),
            n && u(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
        }();
        t.exports = C
    }
    , function(t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
            )(t)
        }
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                "value"in o && (o.writable = !0),
                    Object.defineProperty(t, (r = o.key,
                        a = void 0,
                        a = function(t, e) {
                            if ("object" !== i(t) || null === t)
                                return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var o = n.call(t, e || "default");
                                if ("object" !== i(o))
                                    return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(r, "string"),
                        "symbol" === i(a) ? a : String(a)), o)
            }
            var r, a
        }
        var o = "BackCompat" == document.compatMode ? document.body.clientHeight : document.documentElement.clientHeight
            , r = "BackCompat" == document.compatMode ? document.body.clientWidth : document.documentElement.clientWidth
            , a = function() {
            function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    this.id = e.id,
                    this.extraDataString = e.extraDataString,
                    this.index = e.index,
                    this.element = e.element,
                    this.ignoreX = e.ignoreX || !1,
                    this.fixedBoxHeight = e.fixedBoxHeight || null,
                    this.fixedBoxTop = e.realTop || e.fixedBoxTop || null,
                    this.offsetWidth = this.element.offsetWidth,
                    this.offsetHeight = this.element.offsetHeight,
                    this.exposureStartTime = 0,
                    this.exposureTime = 0,
                    this.isInViewport = !1,
                    this.hiddenStartTime = 0
            }
            var e, i, a;
            return e = t,
            (i = [{
                key: "getIsInViewport",
                value: function() {
                    var t = this.element.getBoundingClientRect()
                        , e = parseInt(t.width, 10)
                        , i = parseInt(t.height, 10);
                    if (0 === e && 0 === i)
                        return !1;
                    var n = !1
                        , a = parseInt(t.left, 10)
                        , s = parseInt(t.top, 10);
                    return n = null !== this.fixedBoxHeight && null !== this.fixedBoxTop ? this.fixedBoxTop <= s && s + this.offsetHeight <= this.fixedBoxTop + this.fixedBoxHeight : s >= 0 && s + this.offsetHeight <= o,
                        !(!(this.ignoreX || a >= 0 && a + this.offsetWidth <= r) || !n)
                }
            }, {
                key: "dispatchExposureCheck",
                value: function() {
                    this.getIsInViewport() ? this.isInViewport || (this.isInViewport = !0,
                        this.exposureStartTime = this.getTime()) : this.isInViewport = !1
                }
            }, {
                key: "getStayTime",
                value: function(t) {
                    return !(this.getIsInViewport() && !t) && (this.exposureStartTime && (this.exposureTime = this.getTime() - this.exposureStartTime,
                        this.exposureStartTime = 0),
                        this.exposureTime)
                }
            }, {
                key: "visibilityChange",
                value: function(t) {
                    if (this.getIsInViewport())
                        if (t) {
                            if (!this.hiddenStartTime)
                                return;
                            var e = this.getTime() - +this.hiddenStartTime;
                            this.exposureStartTime = this.exposureStartTime + e
                        } else
                            this.hiddenStartTime = this.getTime()
                }
            }, {
                key: "getTime",
                value: function() {
                    return (new Date).getTime()
                }
            }, {
                key: "clear",
                value: function() {
                    this.exposureTime = 0
                }
            }]) && n(e.prototype, i),
            a && n(e, a),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t
        }();
        t.exports = a
    }
    , function(t, e) {
        function i(t) {
            return h(n(c(t), 8 * t.length))
        }
        function n(t, e) {
            t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var i = 1732584193, n = -271733879, o = -1732584194, c = 271733878, h = 0; h < t.length; h += 16) {
                var d = i
                    , f = n
                    , p = o
                    , g = c;
                i = r(i, n, o, c, t[h + 0], 7, -680876936),
                    c = r(c, i, n, o, t[h + 1], 12, -389564586),
                    o = r(o, c, i, n, t[h + 2], 17, 606105819),
                    n = r(n, o, c, i, t[h + 3], 22, -1044525330),
                    i = r(i, n, o, c, t[h + 4], 7, -176418897),
                    c = r(c, i, n, o, t[h + 5], 12, 1200080426),
                    o = r(o, c, i, n, t[h + 6], 17, -1473231341),
                    n = r(n, o, c, i, t[h + 7], 22, -45705983),
                    i = r(i, n, o, c, t[h + 8], 7, 1770035416),
                    c = r(c, i, n, o, t[h + 9], 12, -1958414417),
                    o = r(o, c, i, n, t[h + 10], 17, -42063),
                    n = r(n, o, c, i, t[h + 11], 22, -1990404162),
                    i = r(i, n, o, c, t[h + 12], 7, 1804603682),
                    c = r(c, i, n, o, t[h + 13], 12, -40341101),
                    o = r(o, c, i, n, t[h + 14], 17, -1502002290),
                    i = a(i, n = r(n, o, c, i, t[h + 15], 22, 1236535329), o, c, t[h + 1], 5, -165796510),
                    c = a(c, i, n, o, t[h + 6], 9, -1069501632),
                    o = a(o, c, i, n, t[h + 11], 14, 643717713),
                    n = a(n, o, c, i, t[h + 0], 20, -373897302),
                    i = a(i, n, o, c, t[h + 5], 5, -701558691),
                    c = a(c, i, n, o, t[h + 10], 9, 38016083),
                    o = a(o, c, i, n, t[h + 15], 14, -660478335),
                    n = a(n, o, c, i, t[h + 4], 20, -405537848),
                    i = a(i, n, o, c, t[h + 9], 5, 568446438),
                    c = a(c, i, n, o, t[h + 14], 9, -1019803690),
                    o = a(o, c, i, n, t[h + 3], 14, -187363961),
                    n = a(n, o, c, i, t[h + 8], 20, 1163531501),
                    i = a(i, n, o, c, t[h + 13], 5, -1444681467),
                    c = a(c, i, n, o, t[h + 2], 9, -51403784),
                    o = a(o, c, i, n, t[h + 7], 14, 1735328473),
                    i = s(i, n = a(n, o, c, i, t[h + 12], 20, -1926607734), o, c, t[h + 5], 4, -378558),
                    c = s(c, i, n, o, t[h + 8], 11, -2022574463),
                    o = s(o, c, i, n, t[h + 11], 16, 1839030562),
                    n = s(n, o, c, i, t[h + 14], 23, -35309556),
                    i = s(i, n, o, c, t[h + 1], 4, -1530992060),
                    c = s(c, i, n, o, t[h + 4], 11, 1272893353),
                    o = s(o, c, i, n, t[h + 7], 16, -155497632),
                    n = s(n, o, c, i, t[h + 10], 23, -1094730640),
                    i = s(i, n, o, c, t[h + 13], 4, 681279174),
                    c = s(c, i, n, o, t[h + 0], 11, -358537222),
                    o = s(o, c, i, n, t[h + 3], 16, -722521979),
                    n = s(n, o, c, i, t[h + 6], 23, 76029189),
                    i = s(i, n, o, c, t[h + 9], 4, -640364487),
                    c = s(c, i, n, o, t[h + 12], 11, -421815835),
                    o = s(o, c, i, n, t[h + 15], 16, 530742520),
                    i = l(i, n = s(n, o, c, i, t[h + 2], 23, -995338651), o, c, t[h + 0], 6, -198630844),
                    c = l(c, i, n, o, t[h + 7], 10, 1126891415),
                    o = l(o, c, i, n, t[h + 14], 15, -1416354905),
                    n = l(n, o, c, i, t[h + 5], 21, -57434055),
                    i = l(i, n, o, c, t[h + 12], 6, 1700485571),
                    c = l(c, i, n, o, t[h + 3], 10, -1894986606),
                    o = l(o, c, i, n, t[h + 10], 15, -1051523),
                    n = l(n, o, c, i, t[h + 1], 21, -2054922799),
                    i = l(i, n, o, c, t[h + 8], 6, 1873313359),
                    c = l(c, i, n, o, t[h + 15], 10, -30611744),
                    o = l(o, c, i, n, t[h + 6], 15, -1560198380),
                    n = l(n, o, c, i, t[h + 13], 21, 1309151649),
                    i = l(i, n, o, c, t[h + 4], 6, -145523070),
                    c = l(c, i, n, o, t[h + 11], 10, -1120210379),
                    o = l(o, c, i, n, t[h + 2], 15, 718787259),
                    n = l(n, o, c, i, t[h + 9], 21, -343485551),
                    i = u(i, d),
                    n = u(n, f),
                    o = u(o, p),
                    c = u(c, g)
            }
            return Array(i, n, o, c)
        }
        function o(t, e, i, n, o, r) {
            return u((a = u(u(e, t), u(n, r))) << (s = o) | a >>> 32 - s, i);
            var a, s
        }
        function r(t, e, i, n, r, a, s) {
            return o(e & i | ~e & n, t, e, r, a, s)
        }
        function a(t, e, i, n, r, a, s) {
            return o(e & n | i & ~n, t, e, r, a, s)
        }
        function s(t, e, i, n, r, a, s) {
            return o(e ^ i ^ n, t, e, r, a, s)
        }
        function l(t, e, i, n, r, a, s) {
            return o(i ^ (e | ~n), t, e, r, a, s)
        }
        function u(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function c(t) {
            for (var e = Array(), i = 0; i < 8 * t.length; i += 8)
                e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
            return e
        }
        function h(t) {
            for (var e = "0123456789abcdef", i = "", n = 0; n < 4 * t.length; n++)
                i += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
            return i
        }
        t.exports = {
            hex_md5: i
        }
    }
    , function(t, e) {
        var i = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
            , n = function(t, e, n) {
            var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                , r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                , a = null;
            (a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).withCredentials = o,
                a.onreadystatechange = function() {
                    if (4 === a.readyState) {
                        if (!n || !i(n))
                            return;
                        a.status >= 200 && a.status < 300 || 304 === a.status ? n(null, JSON.parse(a.responseText)) : n(new Error("没有找到请求的文件"), void 0)
                    }
                }
                ,
                a.open("POST", t, r),
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                a.send(e)
        };
        t.exports = {
            isString: function(t) {
                return "[object String]" === Object.prototype.toString.call(t)
            },
            isFunction: i,
            isBoolean: function(t) {
                return "[object Boolean]" === Object.prototype.toString.call(t)
            },
            getPlatform: function(t) {
                var e = t.indexOf("logs")
                    , i = t.substr(e + 4, t.length);
                return i.indexOf("pc") > -1 ? "pc" : i.indexOf("app") > -1 ? "app" : "m"
            },
            getSecretKey: function(t) {
                return t.indexOf("pc") > -1 ? "GuMt2UId4pkC2iz1" : t.indexOf("app") > -1 ? "cjJG8NoPbR28+mxX" : "zHZSgRxGe2NKq/tV"
            },
            formatParams: function(t) {
                var e = [];
                for (var i in t)
                    e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                return e.push(("v=" + Math.random()).replace(".", "")),
                    e.join("&")
            },
            ajaxPost: n,
            dispatchEvent: function(t, e, i) {
                t.attachEvent ? t.attachEvent("on" + e, (function() {
                        i.call(t)
                    }
                )) : t.addEventListener(e, i, !1)
            },
            deleteEvent: function(t, e, i) {
                t.detachEvent ? t.detachEvent("on" + e, (function() {
                        i.call(t)
                    }
                )) : t.removeEventListener(e, i, !1)
            },
            debounce: function(t, e, i) {
                var n;
                return function() {
                    var o = this
                        , r = arguments
                        , a = function() {
                        n = null,
                        i || t.apply(o, r)
                    }
                        , s = !n && i;
                    clearTimeout(n),
                        n = setTimeout(a, e),
                    s && t.apply(o, r)
                }
            },
            sendBeacon: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                i(window.fetch) ? fetch(t, {
                    method: "POST"/**/,
                    body: e,
                    credentials: o ? "include" : "omit",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    keepalive: !0
                }) : n(t, e, null, o, !1)
            }
        }
    }
]);

console.log(loader(1).pid);