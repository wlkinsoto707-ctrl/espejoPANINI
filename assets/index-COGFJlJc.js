function kS(e, t) {
    for (var r = 0; r < t.length; r++) {
        const i = t[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in e)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(e, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
}
)();
function sv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ju = {
    exports: {}
}
  , uo = {}
  , ed = {
    exports: {}
}
  , Be = {};
var Am;
function ES() {
    if (Am)
        return Be;
    Am = 1;
    var e = Symbol.for("react.element")
      , t = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , w = Symbol.iterator;
    function S(R) {
        return R === null || typeof R != "object" ? null : (R = w && R[w] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , j = Object.assign
      , b = {};
    function C(R, $, Ne) {
        this.props = R,
        this.context = $,
        this.refs = b,
        this.updater = Ne || k
    }
    C.prototype.isReactComponent = {},
    C.prototype.setState = function(R, $) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, $, "setState")
    }
    ,
    C.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function T() {}
    T.prototype = C.prototype;
    function N(R, $, Ne) {
        this.props = R,
        this.context = $,
        this.refs = b,
        this.updater = Ne || k
    }
    var O = N.prototype = new T;
    O.constructor = N,
    j(O, C.prototype),
    O.isPureReactComponent = !0;
    var L = Array.isArray
      , V = Object.prototype.hasOwnProperty
      , Z = {
        current: null
    }
      , U = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function le(R, $, Ne) {
        var Pe, Oe = {}, Ie = null, se = null;
        if ($ != null)
            for (Pe in $.ref !== void 0 && (se = $.ref),
            $.key !== void 0 && (Ie = "" + $.key),
            $)
                V.call($, Pe) && !U.hasOwnProperty(Pe) && (Oe[Pe] = $[Pe]);
        var Ce = arguments.length - 2;
        if (Ce === 1)
            Oe.children = Ne;
        else if (1 < Ce) {
            for (var Ae = Array(Ce), Me = 0; Me < Ce; Me++)
                Ae[Me] = arguments[Me + 2];
            Oe.children = Ae
        }
        if (R && R.defaultProps)
            for (Pe in Ce = R.defaultProps,
            Ce)
                Oe[Pe] === void 0 && (Oe[Pe] = Ce[Pe]);
        return {
            $$typeof: e,
            type: R,
            key: Ie,
            ref: se,
            props: Oe,
            _owner: Z.current
        }
    }
    function he(R, $) {
        return {
            $$typeof: e,
            type: R.type,
            key: $,
            ref: R.ref,
            props: R.props,
            _owner: R._owner
        }
    }
    function ye(R) {
        return typeof R == "object" && R !== null && R.$$typeof === e
    }
    function Se(R) {
        var $ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(Ne) {
            return $[Ne]
        })
    }
    var K = /\/+/g;
    function ne(R, $) {
        return typeof R == "object" && R !== null && R.key != null ? Se("" + R.key) : $.toString(36)
    }
    function q(R, $, Ne, Pe, Oe) {
        var Ie = typeof R;
        (Ie === "undefined" || Ie === "boolean") && (R = null);
        var se = !1;
        if (R === null)
            se = !0;
        else
            switch (Ie) {
            case "string":
            case "number":
                se = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case e:
                case t:
                    se = !0
                }
            }
        if (se)
            return se = R,
            Oe = Oe(se),
            R = Pe === "" ? "." + ne(se, 0) : Pe,
            L(Oe) ? (Ne = "",
            R != null && (Ne = R.replace(K, "$&/") + "/"),
            q(Oe, $, Ne, "", function(Me) {
                return Me
            })) : Oe != null && (ye(Oe) && (Oe = he(Oe, Ne + (!Oe.key || se && se.key === Oe.key ? "" : ("" + Oe.key).replace(K, "$&/") + "/") + R)),
            $.push(Oe)),
            1;
        if (se = 0,
        Pe = Pe === "" ? "." : Pe + ":",
        L(R))
            for (var Ce = 0; Ce < R.length; Ce++) {
                Ie = R[Ce];
                var Ae = Pe + ne(Ie, Ce);
                se += q(Ie, $, Ne, Ae, Oe)
            }
        else if (Ae = S(R),
        typeof Ae == "function")
            for (R = Ae.call(R),
            Ce = 0; !(Ie = R.next()).done; )
                Ie = Ie.value,
                Ae = Pe + ne(Ie, Ce++),
                se += q(Ie, $, Ne, Ae, Oe);
        else if (Ie === "object")
            throw $ = String(R),
            Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
        return se
    }
    function xe(R, $, Ne) {
        if (R == null)
            return R;
        var Pe = []
          , Oe = 0;
        return q(R, Pe, "", "", function(Ie) {
            return $.call(Ne, Ie, Oe++)
        }),
        Pe
    }
    function ie(R) {
        if (R._status === -1) {
            var $ = R._result;
            $ = $(),
            $.then(function(Ne) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = Ne)
            }, function(Ne) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = Ne)
            }),
            R._status === -1 && (R._status = 0,
            R._result = $)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var ce = {
        current: null
    }
      , z = {
        transition: null
    }
      , Y = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: z,
        ReactCurrentOwner: Z
    };
    function J() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Be.Children = {
        map: xe,
        forEach: function(R, $, Ne) {
            xe(R, function() {
                $.apply(this, arguments)
            }, Ne)
        },
        count: function(R) {
            var $ = 0;
            return xe(R, function() {
                $++
            }),
            $
        },
        toArray: function(R) {
            return xe(R, function($) {
                return $
            }) || []
        },
        only: function(R) {
            if (!ye(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    },
    Be.Component = C,
    Be.Fragment = r,
    Be.Profiler = a,
    Be.PureComponent = N,
    Be.StrictMode = i,
    Be.Suspense = m,
    Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y,
    Be.act = J,
    Be.cloneElement = function(R, $, Ne) {
        if (R == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var Pe = j({}, R.props)
          , Oe = R.key
          , Ie = R.ref
          , se = R._owner;
        if ($ != null) {
            if ($.ref !== void 0 && (Ie = $.ref,
            se = Z.current),
            $.key !== void 0 && (Oe = "" + $.key),
            R.type && R.type.defaultProps)
                var Ce = R.type.defaultProps;
            for (Ae in $)
                V.call($, Ae) && !U.hasOwnProperty(Ae) && (Pe[Ae] = $[Ae] === void 0 && Ce !== void 0 ? Ce[Ae] : $[Ae])
        }
        var Ae = arguments.length - 2;
        if (Ae === 1)
            Pe.children = Ne;
        else if (1 < Ae) {
            Ce = Array(Ae);
            for (var Me = 0; Me < Ae; Me++)
                Ce[Me] = arguments[Me + 2];
            Pe.children = Ce
        }
        return {
            $$typeof: e,
            type: R.type,
            key: Oe,
            ref: Ie,
            props: Pe,
            _owner: se
        }
    }
    ,
    Be.createContext = function(R) {
        return R = {
            $$typeof: u,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        R.Provider = {
            $$typeof: l,
            _context: R
        },
        R.Consumer = R
    }
    ,
    Be.createElement = le,
    Be.createFactory = function(R) {
        var $ = le.bind(null, R);
        return $.type = R,
        $
    }
    ,
    Be.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Be.forwardRef = function(R) {
        return {
            $$typeof: p,
            render: R
        }
    }
    ,
    Be.isValidElement = ye,
    Be.lazy = function(R) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: ie
        }
    }
    ,
    Be.memo = function(R, $) {
        return {
            $$typeof: g,
            type: R,
            compare: $ === void 0 ? null : $
        }
    }
    ,
    Be.startTransition = function(R) {
        var $ = z.transition;
        z.transition = {};
        try {
            R()
        } finally {
            z.transition = $
        }
    }
    ,
    Be.unstable_act = J,
    Be.useCallback = function(R, $) {
        return ce.current.useCallback(R, $)
    }
    ,
    Be.useContext = function(R) {
        return ce.current.useContext(R)
    }
    ,
    Be.useDebugValue = function() {}
    ,
    Be.useDeferredValue = function(R) {
        return ce.current.useDeferredValue(R)
    }
    ,
    Be.useEffect = function(R, $) {
        return ce.current.useEffect(R, $)
    }
    ,
    Be.useId = function() {
        return ce.current.useId()
    }
    ,
    Be.useImperativeHandle = function(R, $, Ne) {
        return ce.current.useImperativeHandle(R, $, Ne)
    }
    ,
    Be.useInsertionEffect = function(R, $) {
        return ce.current.useInsertionEffect(R, $)
    }
    ,
    Be.useLayoutEffect = function(R, $) {
        return ce.current.useLayoutEffect(R, $)
    }
    ,
    Be.useMemo = function(R, $) {
        return ce.current.useMemo(R, $)
    }
    ,
    Be.useReducer = function(R, $, Ne) {
        return ce.current.useReducer(R, $, Ne)
    }
    ,
    Be.useRef = function(R) {
        return ce.current.useRef(R)
    }
    ,
    Be.useState = function(R) {
        return ce.current.useState(R)
    }
    ,
    Be.useSyncExternalStore = function(R, $, Ne) {
        return ce.current.useSyncExternalStore(R, $, Ne)
    }
    ,
    Be.useTransition = function() {
        return ce.current.useTransition()
    }
    ,
    Be.version = "18.3.1",
    Be
}
var Om;
function Bl() {
    return Om || (Om = 1,
    ed.exports = ES()),
    ed.exports
}
var Im;
function PS() {
    if (Im)
        return uo;
    Im = 1;
    var e = Bl()
      , t = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(p, m, g) {
        var v, w = {}, S = null, k = null;
        g !== void 0 && (S = "" + g),
        m.key !== void 0 && (S = "" + m.key),
        m.ref !== void 0 && (k = m.ref);
        for (v in m)
            i.call(m, v) && !l.hasOwnProperty(v) && (w[v] = m[v]);
        if (p && p.defaultProps)
            for (v in m = p.defaultProps,
            m)
                w[v] === void 0 && (w[v] = m[v]);
        return {
            $$typeof: t,
            type: p,
            key: S,
            ref: k,
            props: w,
            _owner: a.current
        }
    }
    return uo.Fragment = r,
    uo.jsx = u,
    uo.jsxs = u,
    uo
}
var Mm;
function TS() {
    return Mm || (Mm = 1,
    Ju.exports = PS()),
    Ju.exports
}
var f = TS()
  , sl = {}
  , td = {
    exports: {}
}
  , Xt = {}
  , nd = {
    exports: {}
}
  , rd = {};
var Dm;
function jS() {
    return Dm || (Dm = 1,
    (function(e) {
        function t(z, Y) {
            var J = z.length;
            z.push(Y);
            e: for (; 0 < J; ) {
                var R = J - 1 >>> 1
                  , $ = z[R];
                if (0 < a($, Y))
                    z[R] = Y,
                    z[J] = $,
                    J = R;
                else
                    break e
            }
        }
        function r(z) {
            return z.length === 0 ? null : z[0]
        }
        function i(z) {
            if (z.length === 0)
                return null;
            var Y = z[0]
              , J = z.pop();
            if (J !== Y) {
                z[0] = J;
                e: for (var R = 0, $ = z.length, Ne = $ >>> 1; R < Ne; ) {
                    var Pe = 2 * (R + 1) - 1
                      , Oe = z[Pe]
                      , Ie = Pe + 1
                      , se = z[Ie];
                    if (0 > a(Oe, J))
                        Ie < $ && 0 > a(se, Oe) ? (z[R] = se,
                        z[Ie] = J,
                        R = Ie) : (z[R] = Oe,
                        z[Pe] = J,
                        R = Pe);
                    else if (Ie < $ && 0 > a(se, J))
                        z[R] = se,
                        z[Ie] = J,
                        R = Ie;
                    else
                        break e
                }
            }
            return Y
        }
        function a(z, Y) {
            var J = z.sortIndex - Y.sortIndex;
            return J !== 0 ? J : z.id - Y.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            e.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , p = u.now();
            e.unstable_now = function() {
                return u.now() - p
            }
        }
        var m = []
          , g = []
          , v = 1
          , w = null
          , S = 3
          , k = !1
          , j = !1
          , b = !1
          , C = typeof setTimeout == "function" ? setTimeout : null
          , T = typeof clearTimeout == "function" ? clearTimeout : null
          , N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O(z) {
            for (var Y = r(g); Y !== null; ) {
                if (Y.callback === null)
                    i(g);
                else if (Y.startTime <= z)
                    i(g),
                    Y.sortIndex = Y.expirationTime,
                    t(m, Y);
                else
                    break;
                Y = r(g)
            }
        }
        function L(z) {
            if (b = !1,
            O(z),
            !j)
                if (r(m) !== null)
                    j = !0,
                    ie(V);
                else {
                    var Y = r(g);
                    Y !== null && ce(L, Y.startTime - z)
                }
        }
        function V(z, Y) {
            j = !1,
            b && (b = !1,
            T(le),
            le = -1),
            k = !0;
            var J = S;
            try {
                for (O(Y),
                w = r(m); w !== null && (!(w.expirationTime > Y) || z && !Se()); ) {
                    var R = w.callback;
                    if (typeof R == "function") {
                        w.callback = null,
                        S = w.priorityLevel;
                        var $ = R(w.expirationTime <= Y);
                        Y = e.unstable_now(),
                        typeof $ == "function" ? w.callback = $ : w === r(m) && i(m),
                        O(Y)
                    } else
                        i(m);
                    w = r(m)
                }
                if (w !== null)
                    var Ne = !0;
                else {
                    var Pe = r(g);
                    Pe !== null && ce(L, Pe.startTime - Y),
                    Ne = !1
                }
                return Ne
            } finally {
                w = null,
                S = J,
                k = !1
            }
        }
        var Z = !1
          , U = null
          , le = -1
          , he = 5
          , ye = -1;
        function Se() {
            return !(e.unstable_now() - ye < he)
        }
        function K() {
            if (U !== null) {
                var z = e.unstable_now();
                ye = z;
                var Y = !0;
                try {
                    Y = U(!0, z)
                } finally {
                    Y ? ne() : (Z = !1,
                    U = null)
                }
            } else
                Z = !1
        }
        var ne;
        if (typeof N == "function")
            ne = function() {
                N(K)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var q = new MessageChannel
              , xe = q.port2;
            q.port1.onmessage = K,
            ne = function() {
                xe.postMessage(null)
            }
        } else
            ne = function() {
                C(K, 0)
            }
            ;
        function ie(z) {
            U = z,
            Z || (Z = !0,
            ne())
        }
        function ce(z, Y) {
            le = C(function() {
                z(e.unstable_now())
            }, Y)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        e.unstable_continueExecution = function() {
            j || k || (j = !0,
            ie(V))
        }
        ,
        e.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        e.unstable_getFirstCallbackNode = function() {
            return r(m)
        }
        ,
        e.unstable_next = function(z) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var Y = 3;
                break;
            default:
                Y = S
            }
            var J = S;
            S = Y;
            try {
                return z()
            } finally {
                S = J
            }
        }
        ,
        e.unstable_pauseExecution = function() {}
        ,
        e.unstable_requestPaint = function() {}
        ,
        e.unstable_runWithPriority = function(z, Y) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var J = S;
            S = z;
            try {
                return Y()
            } finally {
                S = J
            }
        }
        ,
        e.unstable_scheduleCallback = function(z, Y, J) {
            var R = e.unstable_now();
            switch (typeof J == "object" && J !== null ? (J = J.delay,
            J = typeof J == "number" && 0 < J ? R + J : R) : J = R,
            z) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
            }
            return $ = J + $,
            z = {
                id: v++,
                callback: Y,
                priorityLevel: z,
                startTime: J,
                expirationTime: $,
                sortIndex: -1
            },
            J > R ? (z.sortIndex = J,
            t(g, z),
            r(m) === null && z === r(g) && (b ? (T(le),
            le = -1) : b = !0,
            ce(L, J - R))) : (z.sortIndex = $,
            t(m, z),
            j || k || (j = !0,
            ie(V))),
            z
        }
        ,
        e.unstable_shouldYield = Se,
        e.unstable_wrapCallback = function(z) {
            var Y = S;
            return function() {
                var J = S;
                S = Y;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = J
                }
            }
        }
    }
    )(rd)),
    rd
}
var Lm;
function RS() {
    return Lm || (Lm = 1,
    nd.exports = jS()),
    nd.exports
}
var Fm;
function AS() {
    if (Fm)
        return Xt;
    Fm = 1;
    var e = Bl()
      , t = RS();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function l(n, s) {
        u(n, s),
        u(n + "Capture", s)
    }
    function u(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , m = Object.prototype.hasOwnProperty
      , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , v = {}
      , w = {};
    function S(n) {
        return m.call(w, n) ? !0 : m.call(v, n) ? !1 : g.test(n) ? w[n] = !0 : (v[n] = !0,
        !1)
    }
    function k(n, s, o, c) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function j(n, s, o, c) {
        if (s === null || typeof s > "u" || k(n, s, o, c))
            return !0;
        if (c)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function b(n, s, o, c, d, h, x) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = c,
        this.attributeNamespace = d,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = h,
        this.removeEmptyString = x
    }
    var C = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        C[n] = new b(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        C[s] = new b(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        C[n] = new b(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        C[n] = new b(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        C[n] = new b(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        C[n] = new b(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        C[n] = new b(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        C[n] = new b(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        C[n] = new b(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var T = /[\-:]([a-z])/g;
    function N(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(T, N);
        C[s] = new b(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(T, N);
        C[s] = new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(T, N);
        C[s] = new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        C[n] = new b(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    C.xlinkHref = new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        C[n] = new b(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function O(n, s, o, c) {
        var d = C.hasOwnProperty(s) ? C[s] : null;
        (d !== null ? d.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (j(s, o, d, c) && (o = null),
        c || d === null ? S(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName,
        c = d.attributeNamespace,
        o === null ? n.removeAttribute(s) : (d = d.type,
        o = d === 3 || d === 4 && o === !0 ? "" : "" + o,
        c ? n.setAttributeNS(c, s, o) : n.setAttribute(s, o))))
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , V = Symbol.for("react.element")
      , Z = Symbol.for("react.portal")
      , U = Symbol.for("react.fragment")
      , le = Symbol.for("react.strict_mode")
      , he = Symbol.for("react.profiler")
      , ye = Symbol.for("react.provider")
      , Se = Symbol.for("react.context")
      , K = Symbol.for("react.forward_ref")
      , ne = Symbol.for("react.suspense")
      , q = Symbol.for("react.suspense_list")
      , xe = Symbol.for("react.memo")
      , ie = Symbol.for("react.lazy")
      , ce = Symbol.for("react.offscreen")
      , z = Symbol.iterator;
    function Y(n) {
        return n === null || typeof n != "object" ? null : (n = z && n[z] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var J = Object.assign, R;
    function $(n) {
        if (R === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                R = s && s[1] || ""
            }
        return `
` + R + n
    }
    var Ne = !1;
    function Pe(n, s) {
        if (!n || Ne)
            return "";
        Ne = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (F) {
                        var c = F
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (F) {
                        c = F
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (F) {
                    c = F
                }
                n()
            }
        } catch (F) {
            if (F && c && typeof F.stack == "string") {
                for (var d = F.stack.split(`
`), h = c.stack.split(`
`), x = d.length - 1, _ = h.length - 1; 1 <= x && 0 <= _ && d[x] !== h[_]; )
                    _--;
                for (; 1 <= x && 0 <= _; x--,
                _--)
                    if (d[x] !== h[_]) {
                        if (x !== 1 || _ !== 1)
                            do
                                if (x--,
                                _--,
                                0 > _ || d[x] !== h[_]) {
                                    var P = `
` + d[x].replace(" at new ", " at ");
                                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)),
                                    P
                                }
                            while (1 <= x && 0 <= _);
                        break
                    }
            }
        } finally {
            Ne = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? $(n) : ""
    }
    function Oe(n) {
        switch (n.tag) {
        case 5:
            return $(n.type);
        case 16:
            return $("Lazy");
        case 13:
            return $("Suspense");
        case 19:
            return $("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = Pe(n.type, !1),
            n;
        case 11:
            return n = Pe(n.type.render, !1),
            n;
        case 1:
            return n = Pe(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function Ie(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case U:
            return "Fragment";
        case Z:
            return "Portal";
        case he:
            return "Profiler";
        case le:
            return "StrictMode";
        case ne:
            return "Suspense";
        case q:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case Se:
                return (n.displayName || "Context") + ".Consumer";
            case ye:
                return (n._context.displayName || "Context") + ".Provider";
            case K:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case xe:
                return s = n.displayName || null,
                s !== null ? s : Ie(n.type) || "Memo";
            case ie:
                s = n._payload,
                n = n._init;
                try {
                    return Ie(n(s))
                } catch {}
            }
        return null
    }
    function se(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ie(s);
        case 8:
            return s === le ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function Ce(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function Ae(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function Me(n) {
        var s = Ae(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , c = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get
              , h = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(x) {
                    c = "" + x,
                    h.call(this, x)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(x) {
                    c = "" + x
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function We(n) {
        n._valueTracker || (n._valueTracker = Me(n))
    }
    function Je(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , c = "";
        return n && (c = Ae(n) ? n.checked ? "true" : "false" : n.value),
        n = c,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function St(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function Ht(n, s) {
        var o = s.checked;
        return J({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function hr(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , c = s.checked != null ? s.checked : s.defaultChecked;
        o = Ce(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: c,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function Zn(n, s) {
        s = s.checked,
        s != null && O(n, "checked", s, !1)
    }
    function In(n, s) {
        Zn(n, s);
        var o = Ce(s.value)
          , c = s.type;
        if (o != null)
            c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (c === "submit" || c === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? ki(n, s.type, o) : s.hasOwnProperty("defaultValue") && ki(n, s.type, Ce(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function Go(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function ki(n, s, o) {
        (s !== "number" || St(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var Cs = Array.isArray;
    function Kn(n, s, o, c) {
        if (n = n.options,
        s) {
            s = {};
            for (var d = 0; d < o.length; d++)
                s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++)
                d = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== d && (n[o].selected = d),
                d && c && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Ce(o),
            s = null,
            d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0,
                    c && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }
    function E(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return J({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function D(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (Cs(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: Ce(o)
        }
    }
    function B(n, s) {
        var o = Ce(s.value)
          , c = Ce(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        c != null && (n.defaultValue = "" + c)
    }
    function ue(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function re(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function ee(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? re(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var pe, qe = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, c, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, c, d)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (pe = pe || document.createElement("div"),
            pe.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = pe.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function et(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var dt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , fc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(dt).forEach(function(n) {
        fc.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            dt[s] = dt[n]
        })
    });
    function _s(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || dt.hasOwnProperty(n) && dt[n] ? ("" + s).trim() : s + "px"
    }
    function Ns(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var c = o.indexOf("--") === 0
                  , d = _s(o, s[o], c);
                o === "float" && (o = "cssFloat"),
                c ? n.setProperty(o, d) : n[o] = d
            }
    }
    var pc = J({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function ks(n, s) {
        if (s) {
            if (pc[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function Ei(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Es = null;
    function hc(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var mc = null
      , Ps = null
      , Ts = null;
    function Kf(n) {
        if (n = Ki(n)) {
            if (typeof mc != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = xa(s),
            mc(n.stateNode, n.type, s))
        }
    }
    function Gf(n) {
        Ps ? Ts ? Ts.push(n) : Ts = [n] : Ps = n
    }
    function Xf() {
        if (Ps) {
            var n = Ps
              , s = Ts;
            if (Ts = Ps = null,
            Kf(n),
            s)
                for (n = 0; n < s.length; n++)
                    Kf(s[n])
        }
    }
    function Yf(n, s) {
        return n(s)
    }
    function Jf() {}
    var gc = !1;
    function ep(n, s, o) {
        if (gc)
            return n(s, o);
        gc = !0;
        try {
            return Yf(n, s, o)
        } finally {
            gc = !1,
            (Ps !== null || Ts !== null) && (Jf(),
            Xf())
        }
    }
    function Pi(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var c = xa(o);
        if (c === null)
            return null;
        o = c[s];
        e: switch (s) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (c = !c.disabled) || (n = n.type,
            c = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !c;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var vc = !1;
    if (p)
        try {
            var Ti = {};
            Object.defineProperty(Ti, "passive", {
                get: function() {
                    vc = !0
                }
            }),
            window.addEventListener("test", Ti, Ti),
            window.removeEventListener("test", Ti, Ti)
        } catch {
            vc = !1
        }
    function Aw(n, s, o, c, d, h, x, _, P) {
        var F = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, F)
        } catch (Q) {
            this.onError(Q)
        }
    }
    var ji = !1
      , Xo = null
      , Yo = !1
      , yc = null
      , Ow = {
        onError: function(n) {
            ji = !0,
            Xo = n
        }
    };
    function Iw(n, s, o, c, d, h, x, _, P) {
        ji = !1,
        Xo = null,
        Aw.apply(Ow, arguments)
    }
    function Mw(n, s, o, c, d, h, x, _, P) {
        if (Iw.apply(this, arguments),
        ji) {
            if (ji) {
                var F = Xo;
                ji = !1,
                Xo = null
            } else
                throw Error(r(198));
            Yo || (Yo = !0,
            yc = F)
        }
    }
    function Kr(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function tp(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function np(n) {
        if (Kr(n) !== n)
            throw Error(r(188))
    }
    function Dw(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Kr(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, c = s; ; ) {
            var d = o.return;
            if (d === null)
                break;
            var h = d.alternate;
            if (h === null) {
                if (c = d.return,
                c !== null) {
                    o = c;
                    continue
                }
                break
            }
            if (d.child === h.child) {
                for (h = d.child; h; ) {
                    if (h === o)
                        return np(d),
                        n;
                    if (h === c)
                        return np(d),
                        s;
                    h = h.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== c.return)
                o = d,
                c = h;
            else {
                for (var x = !1, _ = d.child; _; ) {
                    if (_ === o) {
                        x = !0,
                        o = d,
                        c = h;
                        break
                    }
                    if (_ === c) {
                        x = !0,
                        c = d,
                        o = h;
                        break
                    }
                    _ = _.sibling
                }
                if (!x) {
                    for (_ = h.child; _; ) {
                        if (_ === o) {
                            x = !0,
                            o = h,
                            c = d;
                            break
                        }
                        if (_ === c) {
                            x = !0,
                            c = h,
                            o = d;
                            break
                        }
                        _ = _.sibling
                    }
                    if (!x)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== c)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function rp(n) {
        return n = Dw(n),
        n !== null ? sp(n) : null
    }
    function sp(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = sp(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var ip = t.unstable_scheduleCallback
      , op = t.unstable_cancelCallback
      , Lw = t.unstable_shouldYield
      , Fw = t.unstable_requestPaint
      , ht = t.unstable_now
      , zw = t.unstable_getCurrentPriorityLevel
      , xc = t.unstable_ImmediatePriority
      , ap = t.unstable_UserBlockingPriority
      , Jo = t.unstable_NormalPriority
      , Vw = t.unstable_LowPriority
      , lp = t.unstable_IdlePriority
      , ea = null
      , Mn = null;
    function Bw(n) {
        if (Mn && typeof Mn.onCommitFiberRoot == "function")
            try {
                Mn.onCommitFiberRoot(ea, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var vn = Math.clz32 ? Math.clz32 : qw
      , Uw = Math.log
      , $w = Math.LN2;
    function qw(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (Uw(n) / $w | 0) | 0
    }
    var ta = 64
      , na = 4194304;
    function Ri(n) {
        switch (n & -n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return n & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return n
        }
    }
    function ra(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var c = 0
          , d = n.suspendedLanes
          , h = n.pingedLanes
          , x = o & 268435455;
        if (x !== 0) {
            var _ = x & ~d;
            _ !== 0 ? c = Ri(_) : (h &= x,
            h !== 0 && (c = Ri(h)))
        } else
            x = o & ~d,
            x !== 0 ? c = Ri(x) : h !== 0 && (c = Ri(h));
        if (c === 0)
            return 0;
        if (s !== 0 && s !== c && (s & d) === 0 && (d = c & -c,
        h = s & -s,
        d >= h || d === 16 && (h & 4194240) !== 0))
            return s;
        if ((c & 4) !== 0 && (c |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= c; 0 < s; )
                o = 31 - vn(s),
                d = 1 << o,
                c |= n[o],
                s &= ~d;
        return c
    }
    function Hw(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Ww(n, s) {
        for (var o = n.suspendedLanes, c = n.pingedLanes, d = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
            var x = 31 - vn(h)
              , _ = 1 << x
              , P = d[x];
            P === -1 ? ((_ & o) === 0 || (_ & c) !== 0) && (d[x] = Hw(_, s)) : P <= s && (n.expiredLanes |= _),
            h &= ~_
        }
    }
    function wc(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function cp() {
        var n = ta;
        return ta <<= 1,
        (ta & 4194240) === 0 && (ta = 64),
        n
    }
    function bc(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function Ai(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - vn(s),
        n[s] = o
    }
    function Qw(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var c = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var d = 31 - vn(o)
              , h = 1 << d;
            s[d] = 0,
            c[d] = -1,
            n[d] = -1,
            o &= ~h
        }
    }
    function Sc(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var c = 31 - vn(o)
              , d = 1 << c;
            d & s | n[c] & s && (n[c] |= s),
            o &= ~d
        }
    }
    var Ye = 0;
    function up(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var dp, Cc, fp, pp, hp, _c = !1, sa = [], mr = null, gr = null, vr = null, Oi = new Map, Ii = new Map, yr = [], Zw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function mp(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            mr = null;
            break;
        case "dragenter":
        case "dragleave":
            gr = null;
            break;
        case "mouseover":
        case "mouseout":
            vr = null;
            break;
        case "pointerover":
        case "pointerout":
            Oi.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ii.delete(s.pointerId)
        }
    }
    function Mi(n, s, o, c, d, h) {
        return n === null || n.nativeEvent !== h ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: c,
            nativeEvent: h,
            targetContainers: [d]
        },
        s !== null && (s = Ki(s),
        s !== null && Cc(s)),
        n) : (n.eventSystemFlags |= c,
        s = n.targetContainers,
        d !== null && s.indexOf(d) === -1 && s.push(d),
        n)
    }
    function Kw(n, s, o, c, d) {
        switch (s) {
        case "focusin":
            return mr = Mi(mr, n, s, o, c, d),
            !0;
        case "dragenter":
            return gr = Mi(gr, n, s, o, c, d),
            !0;
        case "mouseover":
            return vr = Mi(vr, n, s, o, c, d),
            !0;
        case "pointerover":
            var h = d.pointerId;
            return Oi.set(h, Mi(Oi.get(h) || null, n, s, o, c, d)),
            !0;
        case "gotpointercapture":
            return h = d.pointerId,
            Ii.set(h, Mi(Ii.get(h) || null, n, s, o, c, d)),
            !0
        }
        return !1
    }
    function gp(n) {
        var s = Gr(n.target);
        if (s !== null) {
            var o = Kr(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = tp(o),
                    s !== null) {
                        n.blockedOn = s,
                        hp(n.priority, function() {
                            fp(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function ia(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = kc(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var c = new o.constructor(o.type,o);
                Es = c,
                o.target.dispatchEvent(c),
                Es = null
            } else
                return s = Ki(o),
                s !== null && Cc(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function vp(n, s, o) {
        ia(n) && o.delete(s)
    }
    function Gw() {
        _c = !1,
        mr !== null && ia(mr) && (mr = null),
        gr !== null && ia(gr) && (gr = null),
        vr !== null && ia(vr) && (vr = null),
        Oi.forEach(vp),
        Ii.forEach(vp)
    }
    function Di(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        _c || (_c = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Gw)))
    }
    function Li(n) {
        function s(d) {
            return Di(d, n)
        }
        if (0 < sa.length) {
            Di(sa[0], n);
            for (var o = 1; o < sa.length; o++) {
                var c = sa[o];
                c.blockedOn === n && (c.blockedOn = null)
            }
        }
        for (mr !== null && Di(mr, n),
        gr !== null && Di(gr, n),
        vr !== null && Di(vr, n),
        Oi.forEach(s),
        Ii.forEach(s),
        o = 0; o < yr.length; o++)
            c = yr[o],
            c.blockedOn === n && (c.blockedOn = null);
        for (; 0 < yr.length && (o = yr[0],
        o.blockedOn === null); )
            gp(o),
            o.blockedOn === null && yr.shift()
    }
    var js = L.ReactCurrentBatchConfig
      , oa = !0;
    function Xw(n, s, o, c) {
        var d = Ye
          , h = js.transition;
        js.transition = null;
        try {
            Ye = 1,
            Nc(n, s, o, c)
        } finally {
            Ye = d,
            js.transition = h
        }
    }
    function Yw(n, s, o, c) {
        var d = Ye
          , h = js.transition;
        js.transition = null;
        try {
            Ye = 4,
            Nc(n, s, o, c)
        } finally {
            Ye = d,
            js.transition = h
        }
    }
    function Nc(n, s, o, c) {
        if (oa) {
            var d = kc(n, s, o, c);
            if (d === null)
                $c(n, s, c, aa, o),
                mp(n, c);
            else if (Kw(d, n, s, o, c))
                c.stopPropagation();
            else if (mp(n, c),
            s & 4 && -1 < Zw.indexOf(n)) {
                for (; d !== null; ) {
                    var h = Ki(d);
                    if (h !== null && dp(h),
                    h = kc(n, s, o, c),
                    h === null && $c(n, s, c, aa, o),
                    h === d)
                        break;
                    d = h
                }
                d !== null && c.stopPropagation()
            } else
                $c(n, s, c, null, o)
        }
    }
    var aa = null;
    function kc(n, s, o, c) {
        if (aa = null,
        n = hc(c),
        n = Gr(n),
        n !== null)
            if (s = Kr(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = tp(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return aa = n,
        null
    }
    function yp(n) {
        switch (n) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (zw()) {
            case xc:
                return 1;
            case ap:
                return 4;
            case Jo:
            case Vw:
                return 16;
            case lp:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var xr = null
      , Ec = null
      , la = null;
    function xp() {
        if (la)
            return la;
        var n, s = Ec, o = s.length, c, d = "value"in xr ? xr.value : xr.textContent, h = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++)
            ;
        var x = o - n;
        for (c = 1; c <= x && s[o - c] === d[h - c]; c++)
            ;
        return la = d.slice(n, 1 < c ? 1 - c : void 0)
    }
    function ca(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function ua() {
        return !0
    }
    function wp() {
        return !1
    }
    function Jt(n) {
        function s(o, c, d, h, x) {
            this._reactName = o,
            this._targetInst = d,
            this.type = c,
            this.nativeEvent = h,
            this.target = x,
            this.currentTarget = null;
            for (var _ in n)
                n.hasOwnProperty(_) && (o = n[_],
                this[_] = o ? o(h) : h[_]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ua : wp,
            this.isPropagationStopped = wp,
            this
        }
        return J(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = ua)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = ua)
            },
            persist: function() {},
            isPersistent: ua
        }),
        s
    }
    var Rs = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Pc = Jt(Rs), Fi = J({}, Rs, {
        view: 0,
        detail: 0
    }), Jw = Jt(Fi), Tc, jc, zi, da = J({}, Fi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ac,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== zi && (zi && n.type === "mousemove" ? (Tc = n.screenX - zi.screenX,
            jc = n.screenY - zi.screenY) : jc = Tc = 0,
            zi = n),
            Tc)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : jc
        }
    }), bp = Jt(da), eb = J({}, da, {
        dataTransfer: 0
    }), tb = Jt(eb), nb = J({}, Fi, {
        relatedTarget: 0
    }), Rc = Jt(nb), rb = J({}, Rs, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), sb = Jt(rb), ib = J({}, Rs, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), ob = Jt(ib), ab = J({}, Rs, {
        data: 0
    }), Sp = Jt(ab), lb = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, cb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ub = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function db(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = ub[n]) ? !!s[n] : !1
    }
    function Ac() {
        return db
    }
    var fb = J({}, Fi, {
        key: function(n) {
            if (n.key) {
                var s = lb[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = ca(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? cb[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ac,
        charCode: function(n) {
            return n.type === "keypress" ? ca(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? ca(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , pb = Jt(fb)
      , hb = J({}, da, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Cp = Jt(hb)
      , mb = J({}, Fi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ac
    })
      , gb = Jt(mb)
      , vb = J({}, Rs, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , yb = Jt(vb)
      , xb = J({}, da, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , wb = Jt(xb)
      , bb = [9, 13, 27, 32]
      , Oc = p && "CompositionEvent"in window
      , Vi = null;
    p && "documentMode"in document && (Vi = document.documentMode);
    var Sb = p && "TextEvent"in window && !Vi
      , _p = p && (!Oc || Vi && 8 < Vi && 11 >= Vi)
      , Np = " "
      , kp = !1;
    function Ep(n, s) {
        switch (n) {
        case "keyup":
            return bb.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Pp(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var As = !1;
    function Cb(n, s) {
        switch (n) {
        case "compositionend":
            return Pp(s);
        case "keypress":
            return s.which !== 32 ? null : (kp = !0,
            Np);
        case "textInput":
            return n = s.data,
            n === Np && kp ? null : n;
        default:
            return null
        }
    }
    function _b(n, s) {
        if (As)
            return n === "compositionend" || !Oc && Ep(n, s) ? (n = xp(),
            la = Ec = xr = null,
            As = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return _p && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var Nb = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Tp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!Nb[n.type] : s === "textarea"
    }
    function jp(n, s, o, c) {
        Gf(c),
        s = ga(s, "onChange"),
        0 < s.length && (o = new Pc("onChange","change",null,o,c),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Bi = null
      , Ui = null;
    function kb(n) {
        Zp(n, 0)
    }
    function fa(n) {
        var s = Ls(n);
        if (Je(s))
            return n
    }
    function Eb(n, s) {
        if (n === "change")
            return s
    }
    var Rp = !1;
    if (p) {
        var Ic;
        if (p) {
            var Mc = "oninput"in document;
            if (!Mc) {
                var Ap = document.createElement("div");
                Ap.setAttribute("oninput", "return;"),
                Mc = typeof Ap.oninput == "function"
            }
            Ic = Mc
        } else
            Ic = !1;
        Rp = Ic && (!document.documentMode || 9 < document.documentMode)
    }
    function Op() {
        Bi && (Bi.detachEvent("onpropertychange", Ip),
        Ui = Bi = null)
    }
    function Ip(n) {
        if (n.propertyName === "value" && fa(Ui)) {
            var s = [];
            jp(s, Ui, n, hc(n)),
            ep(kb, s)
        }
    }
    function Pb(n, s, o) {
        n === "focusin" ? (Op(),
        Bi = s,
        Ui = o,
        Bi.attachEvent("onpropertychange", Ip)) : n === "focusout" && Op()
    }
    function Tb(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return fa(Ui)
    }
    function jb(n, s) {
        if (n === "click")
            return fa(s)
    }
    function Rb(n, s) {
        if (n === "input" || n === "change")
            return fa(s)
    }
    function Ab(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var yn = typeof Object.is == "function" ? Object.is : Ab;
    function $i(n, s) {
        if (yn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , c = Object.keys(s);
        if (o.length !== c.length)
            return !1;
        for (c = 0; c < o.length; c++) {
            var d = o[c];
            if (!m.call(s, d) || !yn(n[d], s[d]))
                return !1
        }
        return !0
    }
    function Mp(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function Dp(n, s) {
        var o = Mp(n);
        n = 0;
        for (var c; o; ) {
            if (o.nodeType === 3) {
                if (c = n + o.textContent.length,
                n <= s && c >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = c
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = Mp(o)
        }
    }
    function Lp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Lp(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function Fp() {
        for (var n = window, s = St(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = St(n.document)
        }
        return s
    }
    function Dc(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function Ob(n) {
        var s = Fp()
          , o = n.focusedElem
          , c = n.selectionRange;
        if (s !== o && o && o.ownerDocument && Lp(o.ownerDocument.documentElement, o)) {
            if (c !== null && Dc(o)) {
                if (s = c.start,
                n = c.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length
                      , h = Math.min(c.start, d);
                    c = c.end === void 0 ? h : Math.min(c.end, d),
                    !n.extend && h > c && (d = c,
                    c = h,
                    h = d),
                    d = Dp(o, h);
                    var x = Dp(o, c);
                    d && x && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (s = s.createRange(),
                    s.setStart(d.node, d.offset),
                    n.removeAllRanges(),
                    h > c ? (n.addRange(s),
                    n.extend(x.node, x.offset)) : (s.setEnd(x.node, x.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var Ib = p && "documentMode"in document && 11 >= document.documentMode
      , Os = null
      , Lc = null
      , qi = null
      , Fc = !1;
    function zp(n, s, o) {
        var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Fc || Os == null || Os !== St(c) || (c = Os,
        "selectionStart"in c && Dc(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        qi && $i(qi, c) || (qi = c,
        c = ga(Lc, "onSelect"),
        0 < c.length && (s = new Pc("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: c
        }),
        s.target = Os)))
    }
    function pa(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var Is = {
        animationend: pa("Animation", "AnimationEnd"),
        animationiteration: pa("Animation", "AnimationIteration"),
        animationstart: pa("Animation", "AnimationStart"),
        transitionend: pa("Transition", "TransitionEnd")
    }
      , zc = {}
      , Vp = {};
    p && (Vp = document.createElement("div").style,
    "AnimationEvent"in window || (delete Is.animationend.animation,
    delete Is.animationiteration.animation,
    delete Is.animationstart.animation),
    "TransitionEvent"in window || delete Is.transitionend.transition);
    function ha(n) {
        if (zc[n])
            return zc[n];
        if (!Is[n])
            return n;
        var s = Is[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in Vp)
                return zc[n] = s[o];
        return n
    }
    var Bp = ha("animationend")
      , Up = ha("animationiteration")
      , $p = ha("animationstart")
      , qp = ha("transitionend")
      , Hp = new Map
      , Wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function wr(n, s) {
        Hp.set(n, s),
        l(s, [n])
    }
    for (var Vc = 0; Vc < Wp.length; Vc++) {
        var Bc = Wp[Vc]
          , Mb = Bc.toLowerCase()
          , Db = Bc[0].toUpperCase() + Bc.slice(1);
        wr(Mb, "on" + Db)
    }
    wr(Bp, "onAnimationEnd"),
    wr(Up, "onAnimationIteration"),
    wr($p, "onAnimationStart"),
    wr("dblclick", "onDoubleClick"),
    wr("focusin", "onFocus"),
    wr("focusout", "onBlur"),
    wr(qp, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Lb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));
    function Qp(n, s, o) {
        var c = n.type || "unknown-event";
        n.currentTarget = o,
        Mw(c, s, void 0, n),
        n.currentTarget = null
    }
    function Zp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var c = n[o]
              , d = c.event;
            c = c.listeners;
            e: {
                var h = void 0;
                if (s)
                    for (var x = c.length - 1; 0 <= x; x--) {
                        var _ = c[x]
                          , P = _.instance
                          , F = _.currentTarget;
                        if (_ = _.listener,
                        P !== h && d.isPropagationStopped())
                            break e;
                        Qp(d, _, F),
                        h = P
                    }
                else
                    for (x = 0; x < c.length; x++) {
                        if (_ = c[x],
                        P = _.instance,
                        F = _.currentTarget,
                        _ = _.listener,
                        P !== h && d.isPropagationStopped())
                            break e;
                        Qp(d, _, F),
                        h = P
                    }
            }
        }
        if (Yo)
            throw n = yc,
            Yo = !1,
            yc = null,
            n
    }
    function nt(n, s) {
        var o = s[Kc];
        o === void 0 && (o = s[Kc] = new Set);
        var c = n + "__bubble";
        o.has(c) || (Kp(s, n, 2, !1),
        o.add(c))
    }
    function Uc(n, s, o) {
        var c = 0;
        s && (c |= 4),
        Kp(o, n, c, s)
    }
    var ma = "_reactListening" + Math.random().toString(36).slice(2);
    function Wi(n) {
        if (!n[ma]) {
            n[ma] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (Lb.has(o) || Uc(o, !1, n),
                Uc(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[ma] || (s[ma] = !0,
            Uc("selectionchange", !1, s))
        }
    }
    function Kp(n, s, o, c) {
        switch (yp(s)) {
        case 1:
            var d = Xw;
            break;
        case 4:
            d = Yw;
            break;
        default:
            d = Nc
        }
        o = d.bind(null, s, o, n),
        d = void 0,
        !vc || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0),
        c ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }
    function $c(n, s, o, c, d) {
        var h = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var x = c.tag;
                if (x === 3 || x === 4) {
                    var _ = c.stateNode.containerInfo;
                    if (_ === d || _.nodeType === 8 && _.parentNode === d)
                        break;
                    if (x === 4)
                        for (x = c.return; x !== null; ) {
                            var P = x.tag;
                            if ((P === 3 || P === 4) && (P = x.stateNode.containerInfo,
                            P === d || P.nodeType === 8 && P.parentNode === d))
                                return;
                            x = x.return
                        }
                    for (; _ !== null; ) {
                        if (x = Gr(_),
                        x === null)
                            return;
                        if (P = x.tag,
                        P === 5 || P === 6) {
                            c = h = x;
                            continue e
                        }
                        _ = _.parentNode
                    }
                }
                c = c.return
            }
        ep(function() {
            var F = h
              , Q = hc(o)
              , G = [];
            e: {
                var H = Hp.get(n);
                if (H !== void 0) {
                    var de = Pc
                      , ge = n;
                    switch (n) {
                    case "keypress":
                        if (ca(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        de = pb;
                        break;
                    case "focusin":
                        ge = "focus",
                        de = Rc;
                        break;
                    case "focusout":
                        ge = "blur",
                        de = Rc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        de = Rc;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        de = bp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        de = tb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        de = gb;
                        break;
                    case Bp:
                    case Up:
                    case $p:
                        de = sb;
                        break;
                    case qp:
                        de = yb;
                        break;
                    case "scroll":
                        de = Jw;
                        break;
                    case "wheel":
                        de = wb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        de = ob;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        de = Cp
                    }
                    var ve = (s & 4) !== 0
                      , mt = !ve && n === "scroll"
                      , I = ve ? H !== null ? H + "Capture" : null : H;
                    ve = [];
                    for (var A = F, M; A !== null; ) {
                        M = A;
                        var te = M.stateNode;
                        if (M.tag === 5 && te !== null && (M = te,
                        I !== null && (te = Pi(A, I),
                        te != null && ve.push(Qi(A, te, M)))),
                        mt)
                            break;
                        A = A.return
                    }
                    0 < ve.length && (H = new de(H,ge,null,o,Q),
                    G.push({
                        event: H,
                        listeners: ve
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if (H = n === "mouseover" || n === "pointerover",
                    de = n === "mouseout" || n === "pointerout",
                    H && o !== Es && (ge = o.relatedTarget || o.fromElement) && (Gr(ge) || ge[Gn]))
                        break e;
                    if ((de || H) && (H = Q.window === Q ? Q : (H = Q.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    de ? (ge = o.relatedTarget || o.toElement,
                    de = F,
                    ge = ge ? Gr(ge) : null,
                    ge !== null && (mt = Kr(ge),
                    ge !== mt || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (de = null,
                    ge = F),
                    de !== ge)) {
                        if (ve = bp,
                        te = "onMouseLeave",
                        I = "onMouseEnter",
                        A = "mouse",
                        (n === "pointerout" || n === "pointerover") && (ve = Cp,
                        te = "onPointerLeave",
                        I = "onPointerEnter",
                        A = "pointer"),
                        mt = de == null ? H : Ls(de),
                        M = ge == null ? H : Ls(ge),
                        H = new ve(te,A + "leave",de,o,Q),
                        H.target = mt,
                        H.relatedTarget = M,
                        te = null,
                        Gr(Q) === F && (ve = new ve(I,A + "enter",ge,o,Q),
                        ve.target = M,
                        ve.relatedTarget = mt,
                        te = ve),
                        mt = te,
                        de && ge)
                            t: {
                                for (ve = de,
                                I = ge,
                                A = 0,
                                M = ve; M; M = Ms(M))
                                    A++;
                                for (M = 0,
                                te = I; te; te = Ms(te))
                                    M++;
                                for (; 0 < A - M; )
                                    ve = Ms(ve),
                                    A--;
                                for (; 0 < M - A; )
                                    I = Ms(I),
                                    M--;
                                for (; A--; ) {
                                    if (ve === I || I !== null && ve === I.alternate)
                                        break t;
                                    ve = Ms(ve),
                                    I = Ms(I)
                                }
                                ve = null
                            }
                        else
                            ve = null;
                        de !== null && Gp(G, H, de, ve, !1),
                        ge !== null && mt !== null && Gp(G, mt, ge, ve, !0)
                    }
                }
                e: {
                    if (H = F ? Ls(F) : window,
                    de = H.nodeName && H.nodeName.toLowerCase(),
                    de === "select" || de === "input" && H.type === "file")
                        var we = Eb;
                    else if (Tp(H))
                        if (Rp)
                            we = Rb;
                        else {
                            we = Tb;
                            var ke = Pb
                        }
                    else
                        (de = H.nodeName) && de.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (we = jb);
                    if (we && (we = we(n, F))) {
                        jp(G, we, o, Q);
                        break e
                    }
                    ke && ke(n, H, F),
                    n === "focusout" && (ke = H._wrapperState) && ke.controlled && H.type === "number" && ki(H, "number", H.value)
                }
                switch (ke = F ? Ls(F) : window,
                n) {
                case "focusin":
                    (Tp(ke) || ke.contentEditable === "true") && (Os = ke,
                    Lc = F,
                    qi = null);
                    break;
                case "focusout":
                    qi = Lc = Os = null;
                    break;
                case "mousedown":
                    Fc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Fc = !1,
                    zp(G, o, Q);
                    break;
                case "selectionchange":
                    if (Ib)
                        break;
                case "keydown":
                case "keyup":
                    zp(G, o, Q)
                }
                var Ee;
                if (Oc)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var Re = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Re = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Re = "onCompositionUpdate";
                            break e
                        }
                        Re = void 0
                    }
                else
                    As ? Ep(n, o) && (Re = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Re = "onCompositionStart");
                Re && (_p && o.locale !== "ko" && (As || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && As && (Ee = xp()) : (xr = Q,
                Ec = "value"in xr ? xr.value : xr.textContent,
                As = !0)),
                ke = ga(F, Re),
                0 < ke.length && (Re = new Sp(Re,n,null,o,Q),
                G.push({
                    event: Re,
                    listeners: ke
                }),
                Ee ? Re.data = Ee : (Ee = Pp(o),
                Ee !== null && (Re.data = Ee)))),
                (Ee = Sb ? Cb(n, o) : _b(n, o)) && (F = ga(F, "onBeforeInput"),
                0 < F.length && (Q = new Sp("onBeforeInput","beforeinput",null,o,Q),
                G.push({
                    event: Q,
                    listeners: F
                }),
                Q.data = Ee))
            }
            Zp(G, s)
        })
    }
    function Qi(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function ga(n, s) {
        for (var o = s + "Capture", c = []; n !== null; ) {
            var d = n
              , h = d.stateNode;
            d.tag === 5 && h !== null && (d = h,
            h = Pi(n, o),
            h != null && c.unshift(Qi(n, h, d)),
            h = Pi(n, s),
            h != null && c.push(Qi(n, h, d))),
            n = n.return
        }
        return c
    }
    function Ms(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function Gp(n, s, o, c, d) {
        for (var h = s._reactName, x = []; o !== null && o !== c; ) {
            var _ = o
              , P = _.alternate
              , F = _.stateNode;
            if (P !== null && P === c)
                break;
            _.tag === 5 && F !== null && (_ = F,
            d ? (P = Pi(o, h),
            P != null && x.unshift(Qi(o, P, _))) : d || (P = Pi(o, h),
            P != null && x.push(Qi(o, P, _)))),
            o = o.return
        }
        x.length !== 0 && n.push({
            event: s,
            listeners: x
        })
    }
    var Fb = /\r\n?/g
      , zb = /\u0000|\uFFFD/g;
    function Xp(n) {
        return (typeof n == "string" ? n : "" + n).replace(Fb, `
`).replace(zb, "")
    }
    function va(n, s, o) {
        if (s = Xp(s),
        Xp(n) !== s && o)
            throw Error(r(425))
    }
    function ya() {}
    var qc = null
      , Hc = null;
    function Wc(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Qc = typeof setTimeout == "function" ? setTimeout : void 0
      , Vb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Yp = typeof Promise == "function" ? Promise : void 0
      , Bb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yp < "u" ? function(n) {
        return Yp.resolve(null).then(n).catch(Ub)
    }
    : Qc;
    function Ub(n) {
        setTimeout(function() {
            throw n
        })
    }
    function Zc(n, s) {
        var o = s
          , c = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o),
            d && d.nodeType === 8)
                if (o = d.data,
                o === "/$") {
                    if (c === 0) {
                        n.removeChild(d),
                        Li(s);
                        return
                    }
                    c--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || c++;
            o = d
        } while (o);
        Li(s)
    }
    function br(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function Jp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var Ds = Math.random().toString(36).slice(2)
      , Dn = "__reactFiber$" + Ds
      , Zi = "__reactProps$" + Ds
      , Gn = "__reactContainer$" + Ds
      , Kc = "__reactEvents$" + Ds
      , $b = "__reactListeners$" + Ds
      , qb = "__reactHandles$" + Ds;
    function Gr(n) {
        var s = n[Dn];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[Gn] || o[Dn]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = Jp(n); n !== null; ) {
                        if (o = n[Dn])
                            return o;
                        n = Jp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function Ki(n) {
        return n = n[Dn] || n[Gn],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function Ls(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function xa(n) {
        return n[Zi] || null
    }
    var Gc = []
      , Fs = -1;
    function Sr(n) {
        return {
            current: n
        }
    }
    function rt(n) {
        0 > Fs || (n.current = Gc[Fs],
        Gc[Fs] = null,
        Fs--)
    }
    function tt(n, s) {
        Fs++,
        Gc[Fs] = n.current,
        n.current = s
    }
    var Cr = {}
      , Mt = Sr(Cr)
      , Wt = Sr(!1)
      , Xr = Cr;
    function zs(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return Cr;
        var c = n.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s)
            return c.__reactInternalMemoizedMaskedChildContext;
        var d = {}, h;
        for (h in o)
            d[h] = s[h];
        return c && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = d),
        d
    }
    function Qt(n) {
        return n = n.childContextTypes,
        n != null
    }
    function wa() {
        rt(Wt),
        rt(Mt)
    }
    function eh(n, s, o) {
        if (Mt.current !== Cr)
            throw Error(r(168));
        tt(Mt, s),
        tt(Wt, o)
    }
    function th(n, s, o) {
        var c = n.stateNode;
        if (s = s.childContextTypes,
        typeof c.getChildContext != "function")
            return o;
        c = c.getChildContext();
        for (var d in c)
            if (!(d in s))
                throw Error(r(108, se(n) || "Unknown", d));
        return J({}, o, c)
    }
    function ba(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr,
        Xr = Mt.current,
        tt(Mt, n),
        tt(Wt, Wt.current),
        !0
    }
    function nh(n, s, o) {
        var c = n.stateNode;
        if (!c)
            throw Error(r(169));
        o ? (n = th(n, s, Xr),
        c.__reactInternalMemoizedMergedChildContext = n,
        rt(Wt),
        rt(Mt),
        tt(Mt, n)) : rt(Wt),
        tt(Wt, o)
    }
    var Xn = null
      , Sa = !1
      , Xc = !1;
    function rh(n) {
        Xn === null ? Xn = [n] : Xn.push(n)
    }
    function Hb(n) {
        Sa = !0,
        rh(n)
    }
    function _r() {
        if (!Xc && Xn !== null) {
            Xc = !0;
            var n = 0
              , s = Ye;
            try {
                var o = Xn;
                for (Ye = 1; n < o.length; n++) {
                    var c = o[n];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                Xn = null,
                Sa = !1
            } catch (d) {
                throw Xn !== null && (Xn = Xn.slice(n + 1)),
                ip(xc, _r),
                d
            } finally {
                Ye = s,
                Xc = !1
            }
        }
        return null
    }
    var Vs = []
      , Bs = 0
      , Ca = null
      , _a = 0
      , un = []
      , dn = 0
      , Yr = null
      , Yn = 1
      , Jn = "";
    function Jr(n, s) {
        Vs[Bs++] = _a,
        Vs[Bs++] = Ca,
        Ca = n,
        _a = s
    }
    function sh(n, s, o) {
        un[dn++] = Yn,
        un[dn++] = Jn,
        un[dn++] = Yr,
        Yr = n;
        var c = Yn;
        n = Jn;
        var d = 32 - vn(c) - 1;
        c &= ~(1 << d),
        o += 1;
        var h = 32 - vn(s) + d;
        if (30 < h) {
            var x = d - d % 5;
            h = (c & (1 << x) - 1).toString(32),
            c >>= x,
            d -= x,
            Yn = 1 << 32 - vn(s) + d | o << d | c,
            Jn = h + n
        } else
            Yn = 1 << h | o << d | c,
            Jn = n
    }
    function Yc(n) {
        n.return !== null && (Jr(n, 1),
        sh(n, 1, 0))
    }
    function Jc(n) {
        for (; n === Ca; )
            Ca = Vs[--Bs],
            Vs[Bs] = null,
            _a = Vs[--Bs],
            Vs[Bs] = null;
        for (; n === Yr; )
            Yr = un[--dn],
            un[dn] = null,
            Jn = un[--dn],
            un[dn] = null,
            Yn = un[--dn],
            un[dn] = null
    }
    var en = null
      , tn = null
      , ot = !1
      , xn = null;
    function ih(n, s) {
        var o = mn(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function oh(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            en = n,
            tn = br(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            en = n,
            tn = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = Yr !== null ? {
                id: Yn,
                overflow: Jn
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = mn(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            en = n,
            tn = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function eu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function tu(n) {
        if (ot) {
            var s = tn;
            if (s) {
                var o = s;
                if (!oh(n, s)) {
                    if (eu(n))
                        throw Error(r(418));
                    s = br(o.nextSibling);
                    var c = en;
                    s && oh(n, s) ? ih(c, o) : (n.flags = n.flags & -4097 | 2,
                    ot = !1,
                    en = n)
                }
            } else {
                if (eu(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                ot = !1,
                en = n
            }
        }
    }
    function ah(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        en = n
    }
    function Na(n) {
        if (n !== en)
            return !1;
        if (!ot)
            return ah(n),
            ot = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !Wc(n.type, n.memoizedProps)),
        s && (s = tn)) {
            if (eu(n))
                throw lh(),
                Error(r(418));
            for (; s; )
                ih(n, s),
                s = br(s.nextSibling)
        }
        if (ah(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                tn = br(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                tn = null
            }
        } else
            tn = en ? br(n.stateNode.nextSibling) : null;
        return !0
    }
    function lh() {
        for (var n = tn; n; )
            n = br(n.nextSibling)
    }
    function Us() {
        tn = en = null,
        ot = !1
    }
    function nu(n) {
        xn === null ? xn = [n] : xn.push(n)
    }
    var Wb = L.ReactCurrentBatchConfig;
    function Gi(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var c = o.stateNode
                }
                if (!c)
                    throw Error(r(147, n));
                var d = c
                  , h = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === h ? s.ref : (s = function(x) {
                    var _ = d.refs;
                    x === null ? delete _[h] : _[h] = x
                }
                ,
                s._stringRef = h,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function ka(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function ch(n) {
        var s = n._init;
        return s(n._payload)
    }
    function uh(n) {
        function s(I, A) {
            if (n) {
                var M = I.deletions;
                M === null ? (I.deletions = [A],
                I.flags |= 16) : M.push(A)
            }
        }
        function o(I, A) {
            if (!n)
                return null;
            for (; A !== null; )
                s(I, A),
                A = A.sibling;
            return null
        }
        function c(I, A) {
            for (I = new Map; A !== null; )
                A.key !== null ? I.set(A.key, A) : I.set(A.index, A),
                A = A.sibling;
            return I
        }
        function d(I, A) {
            return I = Ar(I, A),
            I.index = 0,
            I.sibling = null,
            I
        }
        function h(I, A, M) {
            return I.index = M,
            n ? (M = I.alternate,
            M !== null ? (M = M.index,
            M < A ? (I.flags |= 2,
            A) : M) : (I.flags |= 2,
            A)) : (I.flags |= 1048576,
            A)
        }
        function x(I) {
            return n && I.alternate === null && (I.flags |= 2),
            I
        }
        function _(I, A, M, te) {
            return A === null || A.tag !== 6 ? (A = Qu(M, I.mode, te),
            A.return = I,
            A) : (A = d(A, M),
            A.return = I,
            A)
        }
        function P(I, A, M, te) {
            var we = M.type;
            return we === U ? Q(I, A, M.props.children, te, M.key) : A !== null && (A.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ie && ch(we) === A.type) ? (te = d(A, M.props),
            te.ref = Gi(I, A, M),
            te.return = I,
            te) : (te = Ga(M.type, M.key, M.props, null, I.mode, te),
            te.ref = Gi(I, A, M),
            te.return = I,
            te)
        }
        function F(I, A, M, te) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = Zu(M, I.mode, te),
            A.return = I,
            A) : (A = d(A, M.children || []),
            A.return = I,
            A)
        }
        function Q(I, A, M, te, we) {
            return A === null || A.tag !== 7 ? (A = as(M, I.mode, te, we),
            A.return = I,
            A) : (A = d(A, M),
            A.return = I,
            A)
        }
        function G(I, A, M) {
            if (typeof A == "string" && A !== "" || typeof A == "number")
                return A = Qu("" + A, I.mode, M),
                A.return = I,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case V:
                    return M = Ga(A.type, A.key, A.props, null, I.mode, M),
                    M.ref = Gi(I, null, A),
                    M.return = I,
                    M;
                case Z:
                    return A = Zu(A, I.mode, M),
                    A.return = I,
                    A;
                case ie:
                    var te = A._init;
                    return G(I, te(A._payload), M)
                }
                if (Cs(A) || Y(A))
                    return A = as(A, I.mode, M, null),
                    A.return = I,
                    A;
                ka(I, A)
            }
            return null
        }
        function H(I, A, M, te) {
            var we = A !== null ? A.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return we !== null ? null : _(I, A, "" + M, te);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case V:
                    return M.key === we ? P(I, A, M, te) : null;
                case Z:
                    return M.key === we ? F(I, A, M, te) : null;
                case ie:
                    return we = M._init,
                    H(I, A, we(M._payload), te)
                }
                if (Cs(M) || Y(M))
                    return we !== null ? null : Q(I, A, M, te, null);
                ka(I, M)
            }
            return null
        }
        function de(I, A, M, te, we) {
            if (typeof te == "string" && te !== "" || typeof te == "number")
                return I = I.get(M) || null,
                _(A, I, "" + te, we);
            if (typeof te == "object" && te !== null) {
                switch (te.$$typeof) {
                case V:
                    return I = I.get(te.key === null ? M : te.key) || null,
                    P(A, I, te, we);
                case Z:
                    return I = I.get(te.key === null ? M : te.key) || null,
                    F(A, I, te, we);
                case ie:
                    var ke = te._init;
                    return de(I, A, M, ke(te._payload), we)
                }
                if (Cs(te) || Y(te))
                    return I = I.get(M) || null,
                    Q(A, I, te, we, null);
                ka(A, te)
            }
            return null
        }
        function ge(I, A, M, te) {
            for (var we = null, ke = null, Ee = A, Re = A = 0, Tt = null; Ee !== null && Re < M.length; Re++) {
                Ee.index > Re ? (Tt = Ee,
                Ee = null) : Tt = Ee.sibling;
                var Ke = H(I, Ee, M[Re], te);
                if (Ke === null) {
                    Ee === null && (Ee = Tt);
                    break
                }
                n && Ee && Ke.alternate === null && s(I, Ee),
                A = h(Ke, A, Re),
                ke === null ? we = Ke : ke.sibling = Ke,
                ke = Ke,
                Ee = Tt
            }
            if (Re === M.length)
                return o(I, Ee),
                ot && Jr(I, Re),
                we;
            if (Ee === null) {
                for (; Re < M.length; Re++)
                    Ee = G(I, M[Re], te),
                    Ee !== null && (A = h(Ee, A, Re),
                    ke === null ? we = Ee : ke.sibling = Ee,
                    ke = Ee);
                return ot && Jr(I, Re),
                we
            }
            for (Ee = c(I, Ee); Re < M.length; Re++)
                Tt = de(Ee, I, Re, M[Re], te),
                Tt !== null && (n && Tt.alternate !== null && Ee.delete(Tt.key === null ? Re : Tt.key),
                A = h(Tt, A, Re),
                ke === null ? we = Tt : ke.sibling = Tt,
                ke = Tt);
            return n && Ee.forEach(function(Or) {
                return s(I, Or)
            }),
            ot && Jr(I, Re),
            we
        }
        function ve(I, A, M, te) {
            var we = Y(M);
            if (typeof we != "function")
                throw Error(r(150));
            if (M = we.call(M),
            M == null)
                throw Error(r(151));
            for (var ke = we = null, Ee = A, Re = A = 0, Tt = null, Ke = M.next(); Ee !== null && !Ke.done; Re++,
            Ke = M.next()) {
                Ee.index > Re ? (Tt = Ee,
                Ee = null) : Tt = Ee.sibling;
                var Or = H(I, Ee, Ke.value, te);
                if (Or === null) {
                    Ee === null && (Ee = Tt);
                    break
                }
                n && Ee && Or.alternate === null && s(I, Ee),
                A = h(Or, A, Re),
                ke === null ? we = Or : ke.sibling = Or,
                ke = Or,
                Ee = Tt
            }
            if (Ke.done)
                return o(I, Ee),
                ot && Jr(I, Re),
                we;
            if (Ee === null) {
                for (; !Ke.done; Re++,
                Ke = M.next())
                    Ke = G(I, Ke.value, te),
                    Ke !== null && (A = h(Ke, A, Re),
                    ke === null ? we = Ke : ke.sibling = Ke,
                    ke = Ke);
                return ot && Jr(I, Re),
                we
            }
            for (Ee = c(I, Ee); !Ke.done; Re++,
            Ke = M.next())
                Ke = de(Ee, I, Re, Ke.value, te),
                Ke !== null && (n && Ke.alternate !== null && Ee.delete(Ke.key === null ? Re : Ke.key),
                A = h(Ke, A, Re),
                ke === null ? we = Ke : ke.sibling = Ke,
                ke = Ke);
            return n && Ee.forEach(function(NS) {
                return s(I, NS)
            }),
            ot && Jr(I, Re),
            we
        }
        function mt(I, A, M, te) {
            if (typeof M == "object" && M !== null && M.type === U && M.key === null && (M = M.props.children),
            typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case V:
                    e: {
                        for (var we = M.key, ke = A; ke !== null; ) {
                            if (ke.key === we) {
                                if (we = M.type,
                                we === U) {
                                    if (ke.tag === 7) {
                                        o(I, ke.sibling),
                                        A = d(ke, M.props.children),
                                        A.return = I,
                                        I = A;
                                        break e
                                    }
                                } else if (ke.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ie && ch(we) === ke.type) {
                                    o(I, ke.sibling),
                                    A = d(ke, M.props),
                                    A.ref = Gi(I, ke, M),
                                    A.return = I,
                                    I = A;
                                    break e
                                }
                                o(I, ke);
                                break
                            } else
                                s(I, ke);
                            ke = ke.sibling
                        }
                        M.type === U ? (A = as(M.props.children, I.mode, te, M.key),
                        A.return = I,
                        I = A) : (te = Ga(M.type, M.key, M.props, null, I.mode, te),
                        te.ref = Gi(I, A, M),
                        te.return = I,
                        I = te)
                    }
                    return x(I);
                case Z:
                    e: {
                        for (ke = M.key; A !== null; ) {
                            if (A.key === ke)
                                if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                                    o(I, A.sibling),
                                    A = d(A, M.children || []),
                                    A.return = I,
                                    I = A;
                                    break e
                                } else {
                                    o(I, A);
                                    break
                                }
                            else
                                s(I, A);
                            A = A.sibling
                        }
                        A = Zu(M, I.mode, te),
                        A.return = I,
                        I = A
                    }
                    return x(I);
                case ie:
                    return ke = M._init,
                    mt(I, A, ke(M._payload), te)
                }
                if (Cs(M))
                    return ge(I, A, M, te);
                if (Y(M))
                    return ve(I, A, M, te);
                ka(I, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M,
            A !== null && A.tag === 6 ? (o(I, A.sibling),
            A = d(A, M),
            A.return = I,
            I = A) : (o(I, A),
            A = Qu(M, I.mode, te),
            A.return = I,
            I = A),
            x(I)) : o(I, A)
        }
        return mt
    }
    var $s = uh(!0)
      , dh = uh(!1)
      , Ea = Sr(null)
      , Pa = null
      , qs = null
      , ru = null;
    function su() {
        ru = qs = Pa = null
    }
    function iu(n) {
        var s = Ea.current;
        rt(Ea),
        n._currentValue = s
    }
    function ou(n, s, o) {
        for (; n !== null; ) {
            var c = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Hs(n, s) {
        Pa = n,
        ru = qs = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Zt = !0),
        n.firstContext = null)
    }
    function fn(n) {
        var s = n._currentValue;
        if (ru !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            qs === null) {
                if (Pa === null)
                    throw Error(r(308));
                qs = n,
                Pa.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                qs = qs.next = n;
        return s
    }
    var es = null;
    function au(n) {
        es === null ? es = [n] : es.push(n)
    }
    function fh(n, s, o, c) {
        var d = s.interleaved;
        return d === null ? (o.next = o,
        au(s)) : (o.next = d.next,
        d.next = o),
        s.interleaved = o,
        er(n, c)
    }
    function er(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var Nr = !1;
    function lu(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function ph(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function tr(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function kr(n, s, o) {
        var c = n.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        (Qe & 2) !== 0) {
            var d = c.pending;
            return d === null ? s.next = s : (s.next = d.next,
            d.next = s),
            c.pending = s,
            er(n, o)
        }
        return d = c.interleaved,
        d === null ? (s.next = s,
        au(c)) : (s.next = d.next,
        d.next = s),
        c.interleaved = s,
        er(n, o)
    }
    function Ta(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var c = s.lanes;
            c &= n.pendingLanes,
            o |= c,
            s.lanes = o,
            Sc(n, o)
        }
    }
    function hh(n, s) {
        var o = n.updateQueue
          , c = n.alternate;
        if (c !== null && (c = c.updateQueue,
        o === c)) {
            var d = null
              , h = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var x = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    h === null ? d = h = x : h = h.next = x,
                    o = o.next
                } while (o !== null);
                h === null ? d = h = s : h = h.next = s
            } else
                d = h = s;
            o = {
                baseState: c.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: h,
                shared: c.shared,
                effects: c.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function ja(n, s, o, c) {
        var d = n.updateQueue;
        Nr = !1;
        var h = d.firstBaseUpdate
          , x = d.lastBaseUpdate
          , _ = d.shared.pending;
        if (_ !== null) {
            d.shared.pending = null;
            var P = _
              , F = P.next;
            P.next = null,
            x === null ? h = F : x.next = F,
            x = P;
            var Q = n.alternate;
            Q !== null && (Q = Q.updateQueue,
            _ = Q.lastBaseUpdate,
            _ !== x && (_ === null ? Q.firstBaseUpdate = F : _.next = F,
            Q.lastBaseUpdate = P))
        }
        if (h !== null) {
            var G = d.baseState;
            x = 0,
            Q = F = P = null,
            _ = h;
            do {
                var H = _.lane
                  , de = _.eventTime;
                if ((c & H) === H) {
                    Q !== null && (Q = Q.next = {
                        eventTime: de,
                        lane: 0,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    });
                    e: {
                        var ge = n
                          , ve = _;
                        switch (H = s,
                        de = o,
                        ve.tag) {
                        case 1:
                            if (ge = ve.payload,
                            typeof ge == "function") {
                                G = ge.call(de, G, H);
                                break e
                            }
                            G = ge;
                            break e;
                        case 3:
                            ge.flags = ge.flags & -65537 | 128;
                        case 0:
                            if (ge = ve.payload,
                            H = typeof ge == "function" ? ge.call(de, G, H) : ge,
                            H == null)
                                break e;
                            G = J({}, G, H);
                            break e;
                        case 2:
                            Nr = !0
                        }
                    }
                    _.callback !== null && _.lane !== 0 && (n.flags |= 64,
                    H = d.effects,
                    H === null ? d.effects = [_] : H.push(_))
                } else
                    de = {
                        eventTime: de,
                        lane: H,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    },
                    Q === null ? (F = Q = de,
                    P = G) : Q = Q.next = de,
                    x |= H;
                if (_ = _.next,
                _ === null) {
                    if (_ = d.shared.pending,
                    _ === null)
                        break;
                    H = _,
                    _ = H.next,
                    H.next = null,
                    d.lastBaseUpdate = H,
                    d.shared.pending = null
                }
            } while (!0);
            if (Q === null && (P = G),
            d.baseState = P,
            d.firstBaseUpdate = F,
            d.lastBaseUpdate = Q,
            s = d.shared.interleaved,
            s !== null) {
                d = s;
                do
                    x |= d.lane,
                    d = d.next;
                while (d !== s)
            } else
                h === null && (d.shared.lanes = 0);
            rs |= x,
            n.lanes = x,
            n.memoizedState = G
        }
    }
    function mh(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var c = n[s]
                  , d = c.callback;
                if (d !== null) {
                    if (c.callback = null,
                    c = o,
                    typeof d != "function")
                        throw Error(r(191, d));
                    d.call(c)
                }
            }
    }
    var Xi = {}
      , Ln = Sr(Xi)
      , Yi = Sr(Xi)
      , Ji = Sr(Xi);
    function ts(n) {
        if (n === Xi)
            throw Error(r(174));
        return n
    }
    function cu(n, s) {
        switch (tt(Ji, s),
        tt(Yi, n),
        tt(Ln, Xi),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : ee(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = ee(s, n)
        }
        rt(Ln),
        tt(Ln, s)
    }
    function Ws() {
        rt(Ln),
        rt(Yi),
        rt(Ji)
    }
    function gh(n) {
        ts(Ji.current);
        var s = ts(Ln.current)
          , o = ee(s, n.type);
        s !== o && (tt(Yi, n),
        tt(Ln, o))
    }
    function uu(n) {
        Yi.current === n && (rt(Ln),
        rt(Yi))
    }
    var at = Sr(0);
    function Ra(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var du = [];
    function fu() {
        for (var n = 0; n < du.length; n++)
            du[n]._workInProgressVersionPrimary = null;
        du.length = 0
    }
    var Aa = L.ReactCurrentDispatcher
      , pu = L.ReactCurrentBatchConfig
      , ns = 0
      , lt = null
      , Ct = null
      , Et = null
      , Oa = !1
      , eo = !1
      , to = 0
      , Qb = 0;
    function Dt() {
        throw Error(r(321))
    }
    function hu(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!yn(n[o], s[o]))
                return !1;
        return !0
    }
    function mu(n, s, o, c, d, h) {
        if (ns = h,
        lt = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Aa.current = n === null || n.memoizedState === null ? Xb : Yb,
        n = o(c, d),
        eo) {
            h = 0;
            do {
                if (eo = !1,
                to = 0,
                25 <= h)
                    throw Error(r(301));
                h += 1,
                Et = Ct = null,
                s.updateQueue = null,
                Aa.current = Jb,
                n = o(c, d)
            } while (eo)
        }
        if (Aa.current = Da,
        s = Ct !== null && Ct.next !== null,
        ns = 0,
        Et = Ct = lt = null,
        Oa = !1,
        s)
            throw Error(r(300));
        return n
    }
    function gu() {
        var n = to !== 0;
        return to = 0,
        n
    }
    function Fn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Et === null ? lt.memoizedState = Et = n : Et = Et.next = n,
        Et
    }
    function pn() {
        if (Ct === null) {
            var n = lt.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = Ct.next;
        var s = Et === null ? lt.memoizedState : Et.next;
        if (s !== null)
            Et = s,
            Ct = n;
        else {
            if (n === null)
                throw Error(r(310));
            Ct = n,
            n = {
                memoizedState: Ct.memoizedState,
                baseState: Ct.baseState,
                baseQueue: Ct.baseQueue,
                queue: Ct.queue,
                next: null
            },
            Et === null ? lt.memoizedState = Et = n : Et = Et.next = n
        }
        return Et
    }
    function no(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function vu(n) {
        var s = pn()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = Ct
          , d = c.baseQueue
          , h = o.pending;
        if (h !== null) {
            if (d !== null) {
                var x = d.next;
                d.next = h.next,
                h.next = x
            }
            c.baseQueue = d = h,
            o.pending = null
        }
        if (d !== null) {
            h = d.next,
            c = c.baseState;
            var _ = x = null
              , P = null
              , F = h;
            do {
                var Q = F.lane;
                if ((ns & Q) === Q)
                    P !== null && (P = P.next = {
                        lane: 0,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    }),
                    c = F.hasEagerState ? F.eagerState : n(c, F.action);
                else {
                    var G = {
                        lane: Q,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    };
                    P === null ? (_ = P = G,
                    x = c) : P = P.next = G,
                    lt.lanes |= Q,
                    rs |= Q
                }
                F = F.next
            } while (F !== null && F !== h);
            P === null ? x = c : P.next = _,
            yn(c, s.memoizedState) || (Zt = !0),
            s.memoizedState = c,
            s.baseState = x,
            s.baseQueue = P,
            o.lastRenderedState = c
        }
        if (n = o.interleaved,
        n !== null) {
            d = n;
            do
                h = d.lane,
                lt.lanes |= h,
                rs |= h,
                d = d.next;
            while (d !== n)
        } else
            d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function yu(n) {
        var s = pn()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = o.dispatch
          , d = o.pending
          , h = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var x = d = d.next;
            do
                h = n(h, x.action),
                x = x.next;
            while (x !== d);
            yn(h, s.memoizedState) || (Zt = !0),
            s.memoizedState = h,
            s.baseQueue === null && (s.baseState = h),
            o.lastRenderedState = h
        }
        return [h, c]
    }
    function vh() {}
    function yh(n, s) {
        var o = lt
          , c = pn()
          , d = s()
          , h = !yn(c.memoizedState, d);
        if (h && (c.memoizedState = d,
        Zt = !0),
        c = c.queue,
        xu(bh.bind(null, o, c, n), [n]),
        c.getSnapshot !== s || h || Et !== null && Et.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            ro(9, wh.bind(null, o, c, d, s), void 0, null),
            Pt === null)
                throw Error(r(349));
            (ns & 30) !== 0 || xh(o, s, d)
        }
        return d
    }
    function xh(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = lt.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        lt.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function wh(n, s, o, c) {
        s.value = o,
        s.getSnapshot = c,
        Sh(s) && Ch(n)
    }
    function bh(n, s, o) {
        return o(function() {
            Sh(s) && Ch(n)
        })
    }
    function Sh(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !yn(n, o)
        } catch {
            return !0
        }
    }
    function Ch(n) {
        var s = er(n, 1);
        s !== null && Cn(s, n, 1, -1)
    }
    function _h(n) {
        var s = Fn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: no,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = Gb.bind(null, lt, n),
        [s.memoizedState, n]
    }
    function ro(n, s, o, c) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: c,
            next: null
        },
        s = lt.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        lt.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (c = o.next,
        o.next = n,
        n.next = c,
        s.lastEffect = n)),
        n
    }
    function Nh() {
        return pn().memoizedState
    }
    function Ia(n, s, o, c) {
        var d = Fn();
        lt.flags |= n,
        d.memoizedState = ro(1 | s, o, void 0, c === void 0 ? null : c)
    }
    function Ma(n, s, o, c) {
        var d = pn();
        c = c === void 0 ? null : c;
        var h = void 0;
        if (Ct !== null) {
            var x = Ct.memoizedState;
            if (h = x.destroy,
            c !== null && hu(c, x.deps)) {
                d.memoizedState = ro(s, o, h, c);
                return
            }
        }
        lt.flags |= n,
        d.memoizedState = ro(1 | s, o, h, c)
    }
    function kh(n, s) {
        return Ia(8390656, 8, n, s)
    }
    function xu(n, s) {
        return Ma(2048, 8, n, s)
    }
    function Eh(n, s) {
        return Ma(4, 2, n, s)
    }
    function Ph(n, s) {
        return Ma(4, 4, n, s)
    }
    function Th(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function jh(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        Ma(4, 4, Th.bind(null, s, n), o)
    }
    function wu() {}
    function Rh(n, s) {
        var o = pn();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && hu(s, c[1]) ? c[0] : (o.memoizedState = [n, s],
        n)
    }
    function Ah(n, s) {
        var o = pn();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && hu(s, c[1]) ? c[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function Oh(n, s, o) {
        return (ns & 21) === 0 ? (n.baseState && (n.baseState = !1,
        Zt = !0),
        n.memoizedState = o) : (yn(o, s) || (o = cp(),
        lt.lanes |= o,
        rs |= o,
        n.baseState = !0),
        s)
    }
    function Zb(n, s) {
        var o = Ye;
        Ye = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var c = pu.transition;
        pu.transition = {};
        try {
            n(!1),
            s()
        } finally {
            Ye = o,
            pu.transition = c
        }
    }
    function Ih() {
        return pn().memoizedState
    }
    function Kb(n, s, o) {
        var c = jr(n);
        if (o = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Mh(n))
            Dh(s, o);
        else if (o = fh(n, s, o, c),
        o !== null) {
            var d = Bt();
            Cn(o, n, c, d),
            Lh(o, s, c)
        }
    }
    function Gb(n, s, o) {
        var c = jr(n)
          , d = {
            lane: c,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Mh(n))
            Dh(s, d);
        else {
            var h = n.alternate;
            if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = s.lastRenderedReducer,
            h !== null))
                try {
                    var x = s.lastRenderedState
                      , _ = h(x, o);
                    if (d.hasEagerState = !0,
                    d.eagerState = _,
                    yn(_, x)) {
                        var P = s.interleaved;
                        P === null ? (d.next = d,
                        au(s)) : (d.next = P.next,
                        P.next = d),
                        s.interleaved = d;
                        return
                    }
                } catch {}
            o = fh(n, s, d, c),
            o !== null && (d = Bt(),
            Cn(o, n, c, d),
            Lh(o, s, c))
        }
    }
    function Mh(n) {
        var s = n.alternate;
        return n === lt || s !== null && s === lt
    }
    function Dh(n, s) {
        eo = Oa = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function Lh(n, s, o) {
        if ((o & 4194240) !== 0) {
            var c = s.lanes;
            c &= n.pendingLanes,
            o |= c,
            s.lanes = o,
            Sc(n, o)
        }
    }
    var Da = {
        readContext: fn,
        useCallback: Dt,
        useContext: Dt,
        useEffect: Dt,
        useImperativeHandle: Dt,
        useInsertionEffect: Dt,
        useLayoutEffect: Dt,
        useMemo: Dt,
        useReducer: Dt,
        useRef: Dt,
        useState: Dt,
        useDebugValue: Dt,
        useDeferredValue: Dt,
        useTransition: Dt,
        useMutableSource: Dt,
        useSyncExternalStore: Dt,
        useId: Dt,
        unstable_isNewReconciler: !1
    }
      , Xb = {
        readContext: fn,
        useCallback: function(n, s) {
            return Fn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: fn,
        useEffect: kh,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            Ia(4194308, 4, Th.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return Ia(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return Ia(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = Fn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var c = Fn();
            return s = o !== void 0 ? o(s) : s,
            c.memoizedState = c.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            c.queue = n,
            n = n.dispatch = Kb.bind(null, lt, n),
            [c.memoizedState, n]
        },
        useRef: function(n) {
            var s = Fn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: _h,
        useDebugValue: wu,
        useDeferredValue: function(n) {
            return Fn().memoizedState = n
        },
        useTransition: function() {
            var n = _h(!1)
              , s = n[0];
            return n = Zb.bind(null, n[1]),
            Fn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var c = lt
              , d = Fn();
            if (ot) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                Pt === null)
                    throw Error(r(349));
                (ns & 30) !== 0 || xh(c, s, o)
            }
            d.memoizedState = o;
            var h = {
                value: o,
                getSnapshot: s
            };
            return d.queue = h,
            kh(bh.bind(null, c, h, n), [n]),
            c.flags |= 2048,
            ro(9, wh.bind(null, c, h, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = Fn()
              , s = Pt.identifierPrefix;
            if (ot) {
                var o = Jn
                  , c = Yn;
                o = (c & ~(1 << 32 - vn(c) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = to++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = Qb++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , Yb = {
        readContext: fn,
        useCallback: Rh,
        useContext: fn,
        useEffect: xu,
        useImperativeHandle: jh,
        useInsertionEffect: Eh,
        useLayoutEffect: Ph,
        useMemo: Ah,
        useReducer: vu,
        useRef: Nh,
        useState: function() {
            return vu(no)
        },
        useDebugValue: wu,
        useDeferredValue: function(n) {
            var s = pn();
            return Oh(s, Ct.memoizedState, n)
        },
        useTransition: function() {
            var n = vu(no)[0]
              , s = pn().memoizedState;
            return [n, s]
        },
        useMutableSource: vh,
        useSyncExternalStore: yh,
        useId: Ih,
        unstable_isNewReconciler: !1
    }
      , Jb = {
        readContext: fn,
        useCallback: Rh,
        useContext: fn,
        useEffect: xu,
        useImperativeHandle: jh,
        useInsertionEffect: Eh,
        useLayoutEffect: Ph,
        useMemo: Ah,
        useReducer: yu,
        useRef: Nh,
        useState: function() {
            return yu(no)
        },
        useDebugValue: wu,
        useDeferredValue: function(n) {
            var s = pn();
            return Ct === null ? s.memoizedState = n : Oh(s, Ct.memoizedState, n)
        },
        useTransition: function() {
            var n = yu(no)[0]
              , s = pn().memoizedState;
            return [n, s]
        },
        useMutableSource: vh,
        useSyncExternalStore: yh,
        useId: Ih,
        unstable_isNewReconciler: !1
    };
    function wn(n, s) {
        if (n && n.defaultProps) {
            s = J({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function bu(n, s, o, c) {
        s = n.memoizedState,
        o = o(c, s),
        o = o == null ? s : J({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var La = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Kr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var c = Bt()
              , d = jr(n)
              , h = tr(c, d);
            h.payload = s,
            o != null && (h.callback = o),
            s = kr(n, h, d),
            s !== null && (Cn(s, n, d, c),
            Ta(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var c = Bt()
              , d = jr(n)
              , h = tr(c, d);
            h.tag = 1,
            h.payload = s,
            o != null && (h.callback = o),
            s = kr(n, h, d),
            s !== null && (Cn(s, n, d, c),
            Ta(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = Bt()
              , c = jr(n)
              , d = tr(o, c);
            d.tag = 2,
            s != null && (d.callback = s),
            s = kr(n, d, c),
            s !== null && (Cn(s, n, c, o),
            Ta(s, n, c))
        }
    };
    function Fh(n, s, o, c, d, h, x) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, h, x) : s.prototype && s.prototype.isPureReactComponent ? !$i(o, c) || !$i(d, h) : !0
    }
    function zh(n, s, o) {
        var c = !1
          , d = Cr
          , h = s.contextType;
        return typeof h == "object" && h !== null ? h = fn(h) : (d = Qt(s) ? Xr : Mt.current,
        c = s.contextTypes,
        h = (c = c != null) ? zs(n, d) : Cr),
        s = new s(o,h),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = La,
        n.stateNode = s,
        s._reactInternals = n,
        c && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = d,
        n.__reactInternalMemoizedMaskedChildContext = h),
        s
    }
    function Vh(n, s, o, c) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, c),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, c),
        s.state !== n && La.enqueueReplaceState(s, s.state, null)
    }
    function Su(n, s, o, c) {
        var d = n.stateNode;
        d.props = o,
        d.state = n.memoizedState,
        d.refs = {},
        lu(n);
        var h = s.contextType;
        typeof h == "object" && h !== null ? d.context = fn(h) : (h = Qt(s) ? Xr : Mt.current,
        d.context = zs(n, h)),
        d.state = n.memoizedState,
        h = s.getDerivedStateFromProps,
        typeof h == "function" && (bu(n, s, h, o),
        d.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state,
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
        s !== d.state && La.enqueueReplaceState(d, d.state, null),
        ja(n, o, d, c),
        d.state = n.memoizedState),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function Qs(n, s) {
        try {
            var o = ""
              , c = s;
            do
                o += Oe(c),
                c = c.return;
            while (c);
            var d = o
        } catch (h) {
            d = `
Error generating stack: ` + h.message + `
` + h.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }
    function Cu(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function _u(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var eS = typeof WeakMap == "function" ? WeakMap : Map;
    function Bh(n, s, o) {
        o = tr(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var c = s.value;
        return o.callback = function() {
            qa || (qa = !0,
            zu = c),
            _u(n, s)
        }
        ,
        o
    }
    function Uh(n, s, o) {
        o = tr(-1, o),
        o.tag = 3;
        var c = n.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var d = s.value;
            o.payload = function() {
                return c(d)
            }
            ,
            o.callback = function() {
                _u(n, s)
            }
        }
        var h = n.stateNode;
        return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
            _u(n, s),
            typeof c != "function" && (Pr === null ? Pr = new Set([this]) : Pr.add(this));
            var x = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: x !== null ? x : ""
            })
        }
        ),
        o
    }
    function $h(n, s, o) {
        var c = n.pingCache;
        if (c === null) {
            c = n.pingCache = new eS;
            var d = new Set;
            c.set(s, d)
        } else
            d = c.get(s),
            d === void 0 && (d = new Set,
            c.set(s, d));
        d.has(o) || (d.add(o),
        n = hS.bind(null, n, s, o),
        s.then(n, n))
    }
    function qh(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function Hh(n, s, o, c, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = tr(-1, 1),
        s.tag = 2,
        kr(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = d,
        n)
    }
    var tS = L.ReactCurrentOwner
      , Zt = !1;
    function Vt(n, s, o, c) {
        s.child = n === null ? dh(s, null, o, c) : $s(s, n.child, o, c)
    }
    function Wh(n, s, o, c, d) {
        o = o.render;
        var h = s.ref;
        return Hs(s, d),
        c = mu(n, s, o, c, h, d),
        o = gu(),
        n !== null && !Zt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        nr(n, s, d)) : (ot && o && Yc(s),
        s.flags |= 1,
        Vt(n, s, c, d),
        s.child)
    }
    function Qh(n, s, o, c, d) {
        if (n === null) {
            var h = o.type;
            return typeof h == "function" && !Wu(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = h,
            Zh(n, s, h, c, d)) : (n = Ga(o.type, null, c, s, s.mode, d),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (h = n.child,
        (n.lanes & d) === 0) {
            var x = h.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : $i,
            o(x, c) && n.ref === s.ref)
                return nr(n, s, d)
        }
        return s.flags |= 1,
        n = Ar(h, c),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function Zh(n, s, o, c, d) {
        if (n !== null) {
            var h = n.memoizedProps;
            if ($i(h, c) && n.ref === s.ref)
                if (Zt = !1,
                s.pendingProps = c = h,
                (n.lanes & d) !== 0)
                    (n.flags & 131072) !== 0 && (Zt = !0);
                else
                    return s.lanes = n.lanes,
                    nr(n, s, d)
        }
        return Nu(n, s, o, c, d)
    }
    function Kh(n, s, o) {
        var c = s.pendingProps
          , d = c.children
          , h = n !== null ? n.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                tt(Ks, nn),
                nn |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = h !== null ? h.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    tt(Ks, nn),
                    nn |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = h !== null ? h.baseLanes : o,
                tt(Ks, nn),
                nn |= c
            }
        else
            h !== null ? (c = h.baseLanes | o,
            s.memoizedState = null) : c = o,
            tt(Ks, nn),
            nn |= c;
        return Vt(n, s, d, o),
        s.child
    }
    function Gh(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function Nu(n, s, o, c, d) {
        var h = Qt(o) ? Xr : Mt.current;
        return h = zs(s, h),
        Hs(s, d),
        o = mu(n, s, o, c, h, d),
        c = gu(),
        n !== null && !Zt ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        nr(n, s, d)) : (ot && c && Yc(s),
        s.flags |= 1,
        Vt(n, s, o, d),
        s.child)
    }
    function Xh(n, s, o, c, d) {
        if (Qt(o)) {
            var h = !0;
            ba(s)
        } else
            h = !1;
        if (Hs(s, d),
        s.stateNode === null)
            za(n, s),
            zh(s, o, c),
            Su(s, o, c, d),
            c = !0;
        else if (n === null) {
            var x = s.stateNode
              , _ = s.memoizedProps;
            x.props = _;
            var P = x.context
              , F = o.contextType;
            typeof F == "object" && F !== null ? F = fn(F) : (F = Qt(o) ? Xr : Mt.current,
            F = zs(s, F));
            var Q = o.getDerivedStateFromProps
              , G = typeof Q == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            G || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (_ !== c || P !== F) && Vh(s, x, c, F),
            Nr = !1;
            var H = s.memoizedState;
            x.state = H,
            ja(s, c, x, d),
            P = s.memoizedState,
            _ !== c || H !== P || Wt.current || Nr ? (typeof Q == "function" && (bu(s, o, Q, c),
            P = s.memoizedState),
            (_ = Nr || Fh(s, o, _, c, H, P, F)) ? (G || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(),
            typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()),
            typeof x.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = c,
            s.memoizedState = P),
            x.props = c,
            x.state = P,
            x.context = F,
            c = _) : (typeof x.componentDidMount == "function" && (s.flags |= 4194308),
            c = !1)
        } else {
            x = s.stateNode,
            ph(n, s),
            _ = s.memoizedProps,
            F = s.type === s.elementType ? _ : wn(s.type, _),
            x.props = F,
            G = s.pendingProps,
            H = x.context,
            P = o.contextType,
            typeof P == "object" && P !== null ? P = fn(P) : (P = Qt(o) ? Xr : Mt.current,
            P = zs(s, P));
            var de = o.getDerivedStateFromProps;
            (Q = typeof de == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (_ !== G || H !== P) && Vh(s, x, c, P),
            Nr = !1,
            H = s.memoizedState,
            x.state = H,
            ja(s, c, x, d);
            var ge = s.memoizedState;
            _ !== G || H !== ge || Wt.current || Nr ? (typeof de == "function" && (bu(s, o, de, c),
            ge = s.memoizedState),
            (F = Nr || Fh(s, o, F, c, H, ge, P) || !1) ? (Q || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, ge, P),
            typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, ge, P)),
            typeof x.componentDidUpdate == "function" && (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || _ === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = c,
            s.memoizedState = ge),
            x.props = c,
            x.state = ge,
            x.context = P,
            c = F) : (typeof x.componentDidUpdate != "function" || _ === n.memoizedProps && H === n.memoizedState || (s.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && H === n.memoizedState || (s.flags |= 1024),
            c = !1)
        }
        return ku(n, s, o, c, h, d)
    }
    function ku(n, s, o, c, d, h) {
        Gh(n, s);
        var x = (s.flags & 128) !== 0;
        if (!c && !x)
            return d && nh(s, o, !1),
            nr(n, s, h);
        c = s.stateNode,
        tS.current = s;
        var _ = x && typeof o.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1,
        n !== null && x ? (s.child = $s(s, n.child, null, h),
        s.child = $s(s, null, _, h)) : Vt(n, s, _, h),
        s.memoizedState = c.state,
        d && nh(s, o, !0),
        s.child
    }
    function Yh(n) {
        var s = n.stateNode;
        s.pendingContext ? eh(n, s.pendingContext, s.pendingContext !== s.context) : s.context && eh(n, s.context, !1),
        cu(n, s.containerInfo)
    }
    function Jh(n, s, o, c, d) {
        return Us(),
        nu(d),
        s.flags |= 256,
        Vt(n, s, o, c),
        s.child
    }
    var Eu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Pu(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function em(n, s, o) {
        var c = s.pendingProps, d = at.current, h = !1, x = (s.flags & 128) !== 0, _;
        if ((_ = x) || (_ = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0),
        _ ? (h = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1),
        tt(at, d & 1),
        n === null)
            return tu(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (x = c.children,
            n = c.fallback,
            h ? (c = s.mode,
            h = s.child,
            x = {
                mode: "hidden",
                children: x
            },
            (c & 1) === 0 && h !== null ? (h.childLanes = 0,
            h.pendingProps = x) : h = Xa(x, c, 0, null),
            n = as(n, c, o, null),
            h.return = s,
            n.return = s,
            h.sibling = n,
            s.child = h,
            s.child.memoizedState = Pu(o),
            s.memoizedState = Eu,
            n) : Tu(s, x));
        if (d = n.memoizedState,
        d !== null && (_ = d.dehydrated,
        _ !== null))
            return nS(n, s, x, c, _, d, o);
        if (h) {
            h = c.fallback,
            x = s.mode,
            d = n.child,
            _ = d.sibling;
            var P = {
                mode: "hidden",
                children: c.children
            };
            return (x & 1) === 0 && s.child !== d ? (c = s.child,
            c.childLanes = 0,
            c.pendingProps = P,
            s.deletions = null) : (c = Ar(d, P),
            c.subtreeFlags = d.subtreeFlags & 14680064),
            _ !== null ? h = Ar(_, h) : (h = as(h, x, o, null),
            h.flags |= 2),
            h.return = s,
            c.return = s,
            c.sibling = h,
            s.child = c,
            c = h,
            h = s.child,
            x = n.child.memoizedState,
            x = x === null ? Pu(o) : {
                baseLanes: x.baseLanes | o,
                cachePool: null,
                transitions: x.transitions
            },
            h.memoizedState = x,
            h.childLanes = n.childLanes & ~o,
            s.memoizedState = Eu,
            c
        }
        return h = n.child,
        n = h.sibling,
        c = Ar(h, {
            mode: "visible",
            children: c.children
        }),
        (s.mode & 1) === 0 && (c.lanes = o),
        c.return = s,
        c.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = c,
        s.memoizedState = null,
        c
    }
    function Tu(n, s) {
        return s = Xa({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function Fa(n, s, o, c) {
        return c !== null && nu(c),
        $s(s, n.child, null, o),
        n = Tu(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function nS(n, s, o, c, d, h, x) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            c = Cu(Error(r(422))),
            Fa(n, s, x, c)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (h = c.fallback,
            d = s.mode,
            c = Xa({
                mode: "visible",
                children: c.children
            }, d, 0, null),
            h = as(h, d, x, null),
            h.flags |= 2,
            c.return = s,
            h.return = s,
            c.sibling = h,
            s.child = c,
            (s.mode & 1) !== 0 && $s(s, n.child, null, x),
            s.child.memoizedState = Pu(x),
            s.memoizedState = Eu,
            h);
        if ((s.mode & 1) === 0)
            return Fa(n, s, x, null);
        if (d.data === "$!") {
            if (c = d.nextSibling && d.nextSibling.dataset,
            c)
                var _ = c.dgst;
            return c = _,
            h = Error(r(419)),
            c = Cu(h, c, void 0),
            Fa(n, s, x, c)
        }
        if (_ = (x & n.childLanes) !== 0,
        Zt || _) {
            if (c = Pt,
            c !== null) {
                switch (x & -x) {
                case 4:
                    d = 2;
                    break;
                case 16:
                    d = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    d = 32;
                    break;
                case 536870912:
                    d = 268435456;
                    break;
                default:
                    d = 0
                }
                d = (d & (c.suspendedLanes | x)) !== 0 ? 0 : d,
                d !== 0 && d !== h.retryLane && (h.retryLane = d,
                er(n, d),
                Cn(c, n, d, -1))
            }
            return Hu(),
            c = Cu(Error(r(421))),
            Fa(n, s, x, c)
        }
        return d.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = mS.bind(null, n),
        d._reactRetry = s,
        null) : (n = h.treeContext,
        tn = br(d.nextSibling),
        en = s,
        ot = !0,
        xn = null,
        n !== null && (un[dn++] = Yn,
        un[dn++] = Jn,
        un[dn++] = Yr,
        Yn = n.id,
        Jn = n.overflow,
        Yr = s),
        s = Tu(s, c.children),
        s.flags |= 4096,
        s)
    }
    function tm(n, s, o) {
        n.lanes |= s;
        var c = n.alternate;
        c !== null && (c.lanes |= s),
        ou(n.return, s, o)
    }
    function ju(n, s, o, c, d) {
        var h = n.memoizedState;
        h === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: o,
            tailMode: d
        } : (h.isBackwards = s,
        h.rendering = null,
        h.renderingStartTime = 0,
        h.last = c,
        h.tail = o,
        h.tailMode = d)
    }
    function nm(n, s, o) {
        var c = s.pendingProps
          , d = c.revealOrder
          , h = c.tail;
        if (Vt(n, s, c.children, o),
        c = at.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && tm(n, o, s);
                    else if (n.tag === 19)
                        tm(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            c &= 1
        }
        if (tt(at, c),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (d) {
            case "forwards":
                for (o = s.child,
                d = null; o !== null; )
                    n = o.alternate,
                    n !== null && Ra(n) === null && (d = o),
                    o = o.sibling;
                o = d,
                o === null ? (d = s.child,
                s.child = null) : (d = o.sibling,
                o.sibling = null),
                ju(s, !1, d, o, h);
                break;
            case "backwards":
                for (o = null,
                d = s.child,
                s.child = null; d !== null; ) {
                    if (n = d.alternate,
                    n !== null && Ra(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling,
                    d.sibling = o,
                    o = d,
                    d = n
                }
                ju(s, !0, o, null, h);
                break;
            case "together":
                ju(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function za(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function nr(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        rs |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = Ar(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = Ar(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function rS(n, s, o) {
        switch (s.tag) {
        case 3:
            Yh(s),
            Us();
            break;
        case 5:
            gh(s);
            break;
        case 1:
            Qt(s.type) && ba(s);
            break;
        case 4:
            cu(s, s.stateNode.containerInfo);
            break;
        case 10:
            var c = s.type._context
              , d = s.memoizedProps.value;
            tt(Ea, c._currentValue),
            c._currentValue = d;
            break;
        case 13:
            if (c = s.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (tt(at, at.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? em(n, s, o) : (tt(at, at.current & 1),
                n = nr(n, s, o),
                n !== null ? n.sibling : null);
            tt(at, at.current & 1);
            break;
        case 19:
            if (c = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (c)
                    return nm(n, s, o);
                s.flags |= 128
            }
            if (d = s.memoizedState,
            d !== null && (d.rendering = null,
            d.tail = null,
            d.lastEffect = null),
            tt(at, at.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            Kh(n, s, o)
        }
        return nr(n, s, o)
    }
    var rm, Ru, sm, im;
    rm = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    Ru = function() {}
    ,
    sm = function(n, s, o, c) {
        var d = n.memoizedProps;
        if (d !== c) {
            n = s.stateNode,
            ts(Ln.current);
            var h = null;
            switch (o) {
            case "input":
                d = Ht(n, d),
                c = Ht(n, c),
                h = [];
                break;
            case "select":
                d = J({}, d, {
                    value: void 0
                }),
                c = J({}, c, {
                    value: void 0
                }),
                h = [];
                break;
            case "textarea":
                d = E(n, d),
                c = E(n, c),
                h = [];
                break;
            default:
                typeof d.onClick != "function" && typeof c.onClick == "function" && (n.onclick = ya)
            }
            ks(o, c);
            var x;
            o = null;
            for (F in d)
                if (!c.hasOwnProperty(F) && d.hasOwnProperty(F) && d[F] != null)
                    if (F === "style") {
                        var _ = d[F];
                        for (x in _)
                            _.hasOwnProperty(x) && (o || (o = {}),
                            o[x] = "")
                    } else
                        F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? h || (h = []) : (h = h || []).push(F, null));
            for (F in c) {
                var P = c[F];
                if (_ = d?.[F],
                c.hasOwnProperty(F) && P !== _ && (P != null || _ != null))
                    if (F === "style")
                        if (_) {
                            for (x in _)
                                !_.hasOwnProperty(x) || P && P.hasOwnProperty(x) || (o || (o = {}),
                                o[x] = "");
                            for (x in P)
                                P.hasOwnProperty(x) && _[x] !== P[x] && (o || (o = {}),
                                o[x] = P[x])
                        } else
                            o || (h || (h = []),
                            h.push(F, o)),
                            o = P;
                    else
                        F === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                        _ = _ ? _.__html : void 0,
                        P != null && _ !== P && (h = h || []).push(F, P)) : F === "children" ? typeof P != "string" && typeof P != "number" || (h = h || []).push(F, "" + P) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (P != null && F === "onScroll" && nt("scroll", n),
                        h || _ === P || (h = [])) : (h = h || []).push(F, P))
            }
            o && (h = h || []).push("style", o);
            var F = h;
            (s.updateQueue = F) && (s.flags |= 4)
        }
    }
    ,
    im = function(n, s, o, c) {
        o !== c && (s.flags |= 4)
    }
    ;
    function so(n, s) {
        if (!ot)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var c = null; o !== null; )
                    o.alternate !== null && (c = o),
                    o = o.sibling;
                c === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null
            }
    }
    function Lt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , c = 0;
        if (s)
            for (var d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                c |= d.subtreeFlags & 14680064,
                c |= d.flags & 14680064,
                d.return = n,
                d = d.sibling;
        else
            for (d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                c |= d.subtreeFlags,
                c |= d.flags,
                d.return = n,
                d = d.sibling;
        return n.subtreeFlags |= c,
        n.childLanes = o,
        s
    }
    function sS(n, s, o) {
        var c = s.pendingProps;
        switch (Jc(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Lt(s),
            null;
        case 1:
            return Qt(s.type) && wa(),
            Lt(s),
            null;
        case 3:
            return c = s.stateNode,
            Ws(),
            rt(Wt),
            rt(Mt),
            fu(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (n === null || n.child === null) && (Na(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            xn !== null && (Uu(xn),
            xn = null))),
            Ru(n, s),
            Lt(s),
            null;
        case 5:
            uu(s);
            var d = ts(Ji.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                sm(n, s, o, c, d),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!c) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return Lt(s),
                    null
                }
                if (n = ts(Ln.current),
                Na(s)) {
                    c = s.stateNode,
                    o = s.type;
                    var h = s.memoizedProps;
                    switch (c[Dn] = s,
                    c[Zi] = h,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        nt("cancel", c),
                        nt("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        nt("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (d = 0; d < Hi.length; d++)
                            nt(Hi[d], c);
                        break;
                    case "source":
                        nt("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        nt("error", c),
                        nt("load", c);
                        break;
                    case "details":
                        nt("toggle", c);
                        break;
                    case "input":
                        hr(c, h),
                        nt("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!h.multiple
                        },
                        nt("invalid", c);
                        break;
                    case "textarea":
                        D(c, h),
                        nt("invalid", c)
                    }
                    ks(o, h),
                    d = null;
                    for (var x in h)
                        if (h.hasOwnProperty(x)) {
                            var _ = h[x];
                            x === "children" ? typeof _ == "string" ? c.textContent !== _ && (h.suppressHydrationWarning !== !0 && va(c.textContent, _, n),
                            d = ["children", _]) : typeof _ == "number" && c.textContent !== "" + _ && (h.suppressHydrationWarning !== !0 && va(c.textContent, _, n),
                            d = ["children", "" + _]) : a.hasOwnProperty(x) && _ != null && x === "onScroll" && nt("scroll", c)
                        }
                    switch (o) {
                    case "input":
                        We(c),
                        Go(c, h, !0);
                        break;
                    case "textarea":
                        We(c),
                        ue(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof h.onClick == "function" && (c.onclick = ya)
                    }
                    c = d,
                    s.updateQueue = c,
                    c !== null && (s.flags |= 4)
                } else {
                    x = d.nodeType === 9 ? d : d.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = re(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = x.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = x.createElement(o, {
                        is: c.is
                    }) : (n = x.createElement(o),
                    o === "select" && (x = n,
                    c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : n = x.createElementNS(n, o),
                    n[Dn] = s,
                    n[Zi] = c,
                    rm(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (x = Ei(o, c),
                        o) {
                        case "dialog":
                            nt("cancel", n),
                            nt("close", n),
                            d = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            nt("load", n),
                            d = c;
                            break;
                        case "video":
                        case "audio":
                            for (d = 0; d < Hi.length; d++)
                                nt(Hi[d], n);
                            d = c;
                            break;
                        case "source":
                            nt("error", n),
                            d = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            nt("error", n),
                            nt("load", n),
                            d = c;
                            break;
                        case "details":
                            nt("toggle", n),
                            d = c;
                            break;
                        case "input":
                            hr(n, c),
                            d = Ht(n, c),
                            nt("invalid", n);
                            break;
                        case "option":
                            d = c;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            d = J({}, c, {
                                value: void 0
                            }),
                            nt("invalid", n);
                            break;
                        case "textarea":
                            D(n, c),
                            d = E(n, c),
                            nt("invalid", n);
                            break;
                        default:
                            d = c
                        }
                        ks(o, d),
                        _ = d;
                        for (h in _)
                            if (_.hasOwnProperty(h)) {
                                var P = _[h];
                                h === "style" ? Ns(n, P) : h === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                                P != null && qe(n, P)) : h === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && et(n, P) : typeof P == "number" && et(n, "" + P) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (a.hasOwnProperty(h) ? P != null && h === "onScroll" && nt("scroll", n) : P != null && O(n, h, P, x))
                            }
                        switch (o) {
                        case "input":
                            We(n),
                            Go(n, c, !1);
                            break;
                        case "textarea":
                            We(n),
                            ue(n);
                            break;
                        case "option":
                            c.value != null && n.setAttribute("value", "" + Ce(c.value));
                            break;
                        case "select":
                            n.multiple = !!c.multiple,
                            h = c.value,
                            h != null ? Kn(n, !!c.multiple, h, !1) : c.defaultValue != null && Kn(n, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof d.onClick == "function" && (n.onclick = ya)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return Lt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                im(n, s, n.memoizedProps, c);
            else {
                if (typeof c != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = ts(Ji.current),
                ts(Ln.current),
                Na(s)) {
                    if (c = s.stateNode,
                    o = s.memoizedProps,
                    c[Dn] = s,
                    (h = c.nodeValue !== o) && (n = en,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            va(c.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && va(c.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    h && (s.flags |= 4)
                } else
                    c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c),
                    c[Dn] = s,
                    s.stateNode = c
            }
            return Lt(s),
            null;
        case 13:
            if (rt(at),
            c = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if (ot && tn !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    lh(),
                    Us(),
                    s.flags |= 98560,
                    h = !1;
                else if (h = Na(s),
                c !== null && c.dehydrated !== null) {
                    if (n === null) {
                        if (!h)
                            throw Error(r(318));
                        if (h = s.memoizedState,
                        h = h !== null ? h.dehydrated : null,
                        !h)
                            throw Error(r(317));
                        h[Dn] = s
                    } else
                        Us(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    Lt(s),
                    h = !1
                } else
                    xn !== null && (Uu(xn),
                    xn = null),
                    h = !0;
                if (!h)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (c = c !== null,
            c !== (n !== null && n.memoizedState !== null) && c && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || (at.current & 1) !== 0 ? _t === 0 && (_t = 3) : Hu())),
            s.updateQueue !== null && (s.flags |= 4),
            Lt(s),
            null);
        case 4:
            return Ws(),
            Ru(n, s),
            n === null && Wi(s.stateNode.containerInfo),
            Lt(s),
            null;
        case 10:
            return iu(s.type._context),
            Lt(s),
            null;
        case 17:
            return Qt(s.type) && wa(),
            Lt(s),
            null;
        case 19:
            if (rt(at),
            h = s.memoizedState,
            h === null)
                return Lt(s),
                null;
            if (c = (s.flags & 128) !== 0,
            x = h.rendering,
            x === null)
                if (c)
                    so(h, !1);
                else {
                    if (_t !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (x = Ra(n),
                            x !== null) {
                                for (s.flags |= 128,
                                so(h, !1),
                                c = x.updateQueue,
                                c !== null && (s.updateQueue = c,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                c = o,
                                o = s.child; o !== null; )
                                    h = o,
                                    n = c,
                                    h.flags &= 14680066,
                                    x = h.alternate,
                                    x === null ? (h.childLanes = 0,
                                    h.lanes = n,
                                    h.child = null,
                                    h.subtreeFlags = 0,
                                    h.memoizedProps = null,
                                    h.memoizedState = null,
                                    h.updateQueue = null,
                                    h.dependencies = null,
                                    h.stateNode = null) : (h.childLanes = x.childLanes,
                                    h.lanes = x.lanes,
                                    h.child = x.child,
                                    h.subtreeFlags = 0,
                                    h.deletions = null,
                                    h.memoizedProps = x.memoizedProps,
                                    h.memoizedState = x.memoizedState,
                                    h.updateQueue = x.updateQueue,
                                    h.type = x.type,
                                    n = x.dependencies,
                                    h.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return tt(at, at.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    h.tail !== null && ht() > Gs && (s.flags |= 128,
                    c = !0,
                    so(h, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!c)
                    if (n = Ra(x),
                    n !== null) {
                        if (s.flags |= 128,
                        c = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        so(h, !0),
                        h.tail === null && h.tailMode === "hidden" && !x.alternate && !ot)
                            return Lt(s),
                            null
                    } else
                        2 * ht() - h.renderingStartTime > Gs && o !== 1073741824 && (s.flags |= 128,
                        c = !0,
                        so(h, !1),
                        s.lanes = 4194304);
                h.isBackwards ? (x.sibling = s.child,
                s.child = x) : (o = h.last,
                o !== null ? o.sibling = x : s.child = x,
                h.last = x)
            }
            return h.tail !== null ? (s = h.tail,
            h.rendering = s,
            h.tail = s.sibling,
            h.renderingStartTime = ht(),
            s.sibling = null,
            o = at.current,
            tt(at, c ? o & 1 | 2 : o & 1),
            s) : (Lt(s),
            null);
        case 22:
        case 23:
            return qu(),
            c = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== c && (s.flags |= 8192),
            c && (s.mode & 1) !== 0 ? (nn & 1073741824) !== 0 && (Lt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : Lt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function iS(n, s) {
        switch (Jc(s),
        s.tag) {
        case 1:
            return Qt(s.type) && wa(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return Ws(),
            rt(Wt),
            rt(Mt),
            fu(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return uu(s),
            null;
        case 13:
            if (rt(at),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                Us()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return rt(at),
            null;
        case 4:
            return Ws(),
            null;
        case 10:
            return iu(s.type._context),
            null;
        case 22:
        case 23:
            return qu(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Va = !1
      , Ft = !1
      , oS = typeof WeakSet == "function" ? WeakSet : Set
      , me = null;
    function Zs(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (c) {
                    ft(n, s, c)
                }
            else
                o.current = null
    }
    function Au(n, s, o) {
        try {
            o()
        } catch (c) {
            ft(n, s, c)
        }
    }
    var om = !1;
    function aS(n, s) {
        if (qc = oa,
        n = Fp(),
        Dc(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var c = o.getSelection && o.getSelection();
                    if (c && c.rangeCount !== 0) {
                        o = c.anchorNode;
                        var d = c.anchorOffset
                          , h = c.focusNode;
                        c = c.focusOffset;
                        try {
                            o.nodeType,
                            h.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var x = 0
                          , _ = -1
                          , P = -1
                          , F = 0
                          , Q = 0
                          , G = n
                          , H = null;
                        t: for (; ; ) {
                            for (var de; G !== o || d !== 0 && G.nodeType !== 3 || (_ = x + d),
                            G !== h || c !== 0 && G.nodeType !== 3 || (P = x + c),
                            G.nodeType === 3 && (x += G.nodeValue.length),
                            (de = G.firstChild) !== null; )
                                H = G,
                                G = de;
                            for (; ; ) {
                                if (G === n)
                                    break t;
                                if (H === o && ++F === d && (_ = x),
                                H === h && ++Q === c && (P = x),
                                (de = G.nextSibling) !== null)
                                    break;
                                G = H,
                                H = G.parentNode
                            }
                            G = de
                        }
                        o = _ === -1 || P === -1 ? null : {
                            start: _,
                            end: P
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Hc = {
            focusedElem: n,
            selectionRange: o
        },
        oa = !1,
        me = s; me !== null; )
            if (s = me,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                me = n;
            else
                for (; me !== null; ) {
                    s = me;
                    try {
                        var ge = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ge !== null) {
                                    var ve = ge.memoizedProps
                                      , mt = ge.memoizedState
                                      , I = s.stateNode
                                      , A = I.getSnapshotBeforeUpdate(s.elementType === s.type ? ve : wn(s.type, ve), mt);
                                    I.__reactInternalSnapshotBeforeUpdate = A
                                }
                                break;
                            case 3:
                                var M = s.stateNode.containerInfo;
                                M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (te) {
                        ft(s, s.return, te)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        me = n;
                        break
                    }
                    me = s.return
                }
        return ge = om,
        om = !1,
        ge
    }
    function io(n, s, o) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var d = c = c.next;
            do {
                if ((d.tag & n) === n) {
                    var h = d.destroy;
                    d.destroy = void 0,
                    h !== void 0 && Au(s, o, h)
                }
                d = d.next
            } while (d !== c)
        }
    }
    function Ba(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var c = o.create;
                    o.destroy = c()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function Ou(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            n.tag,
            n = o,
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function am(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        am(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[Dn],
        delete s[Zi],
        delete s[Kc],
        delete s[$b],
        delete s[qb])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function lm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function cm(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || lm(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function Iu(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = ya));
        else if (c !== 4 && (n = n.child,
        n !== null))
            for (Iu(n, s, o),
            n = n.sibling; n !== null; )
                Iu(n, s, o),
                n = n.sibling
    }
    function Mu(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (c !== 4 && (n = n.child,
        n !== null))
            for (Mu(n, s, o),
            n = n.sibling; n !== null; )
                Mu(n, s, o),
                n = n.sibling
    }
    var Rt = null
      , bn = !1;
    function Er(n, s, o) {
        for (o = o.child; o !== null; )
            um(n, s, o),
            o = o.sibling
    }
    function um(n, s, o) {
        if (Mn && typeof Mn.onCommitFiberUnmount == "function")
            try {
                Mn.onCommitFiberUnmount(ea, o)
            } catch {}
        switch (o.tag) {
        case 5:
            Ft || Zs(o, s);
        case 6:
            var c = Rt
              , d = bn;
            Rt = null,
            Er(n, s, o),
            Rt = c,
            bn = d,
            Rt !== null && (bn ? (n = Rt,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Rt.removeChild(o.stateNode));
            break;
        case 18:
            Rt !== null && (bn ? (n = Rt,
            o = o.stateNode,
            n.nodeType === 8 ? Zc(n.parentNode, o) : n.nodeType === 1 && Zc(n, o),
            Li(n)) : Zc(Rt, o.stateNode));
            break;
        case 4:
            c = Rt,
            d = bn,
            Rt = o.stateNode.containerInfo,
            bn = !0,
            Er(n, s, o),
            Rt = c,
            bn = d;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ft && (c = o.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                d = c = c.next;
                do {
                    var h = d
                      , x = h.destroy;
                    h = h.tag,
                    x !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && Au(o, s, x),
                    d = d.next
                } while (d !== c)
            }
            Er(n, s, o);
            break;
        case 1:
            if (!Ft && (Zs(o, s),
            c = o.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = o.memoizedProps,
                    c.state = o.memoizedState,
                    c.componentWillUnmount()
                } catch (_) {
                    ft(o, s, _)
                }
            Er(n, s, o);
            break;
        case 21:
            Er(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (Ft = (c = Ft) || o.memoizedState !== null,
            Er(n, s, o),
            Ft = c) : Er(n, s, o);
            break;
        default:
            Er(n, s, o)
        }
    }
    function dm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new oS),
            s.forEach(function(c) {
                var d = gS.bind(null, n, c);
                o.has(c) || (o.add(c),
                c.then(d, d))
            })
        }
    }
    function Sn(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var c = 0; c < o.length; c++) {
                var d = o[c];
                try {
                    var h = n
                      , x = s
                      , _ = x;
                    e: for (; _ !== null; ) {
                        switch (_.tag) {
                        case 5:
                            Rt = _.stateNode,
                            bn = !1;
                            break e;
                        case 3:
                            Rt = _.stateNode.containerInfo,
                            bn = !0;
                            break e;
                        case 4:
                            Rt = _.stateNode.containerInfo,
                            bn = !0;
                            break e
                        }
                        _ = _.return
                    }
                    if (Rt === null)
                        throw Error(r(160));
                    um(h, x, d),
                    Rt = null,
                    bn = !1;
                    var P = d.alternate;
                    P !== null && (P.return = null),
                    d.return = null
                } catch (F) {
                    ft(d, s, F)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                fm(s, n),
                s = s.sibling
    }
    function fm(n, s) {
        var o = n.alternate
          , c = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Sn(s, n),
            zn(n),
            c & 4) {
                try {
                    io(3, n, n.return),
                    Ba(3, n)
                } catch (ve) {
                    ft(n, n.return, ve)
                }
                try {
                    io(5, n, n.return)
                } catch (ve) {
                    ft(n, n.return, ve)
                }
            }
            break;
        case 1:
            Sn(s, n),
            zn(n),
            c & 512 && o !== null && Zs(o, o.return);
            break;
        case 5:
            if (Sn(s, n),
            zn(n),
            c & 512 && o !== null && Zs(o, o.return),
            n.flags & 32) {
                var d = n.stateNode;
                try {
                    et(d, "")
                } catch (ve) {
                    ft(n, n.return, ve)
                }
            }
            if (c & 4 && (d = n.stateNode,
            d != null)) {
                var h = n.memoizedProps
                  , x = o !== null ? o.memoizedProps : h
                  , _ = n.type
                  , P = n.updateQueue;
                if (n.updateQueue = null,
                P !== null)
                    try {
                        _ === "input" && h.type === "radio" && h.name != null && Zn(d, h),
                        Ei(_, x);
                        var F = Ei(_, h);
                        for (x = 0; x < P.length; x += 2) {
                            var Q = P[x]
                              , G = P[x + 1];
                            Q === "style" ? Ns(d, G) : Q === "dangerouslySetInnerHTML" ? qe(d, G) : Q === "children" ? et(d, G) : O(d, Q, G, F)
                        }
                        switch (_) {
                        case "input":
                            In(d, h);
                            break;
                        case "textarea":
                            B(d, h);
                            break;
                        case "select":
                            var H = d._wrapperState.wasMultiple;
                            d._wrapperState.wasMultiple = !!h.multiple;
                            var de = h.value;
                            de != null ? Kn(d, !!h.multiple, de, !1) : H !== !!h.multiple && (h.defaultValue != null ? Kn(d, !!h.multiple, h.defaultValue, !0) : Kn(d, !!h.multiple, h.multiple ? [] : "", !1))
                        }
                        d[Zi] = h
                    } catch (ve) {
                        ft(n, n.return, ve)
                    }
            }
            break;
        case 6:
            if (Sn(s, n),
            zn(n),
            c & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                d = n.stateNode,
                h = n.memoizedProps;
                try {
                    d.nodeValue = h
                } catch (ve) {
                    ft(n, n.return, ve)
                }
            }
            break;
        case 3:
            if (Sn(s, n),
            zn(n),
            c & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Li(s.containerInfo)
                } catch (ve) {
                    ft(n, n.return, ve)
                }
            break;
        case 4:
            Sn(s, n),
            zn(n);
            break;
        case 13:
            Sn(s, n),
            zn(n),
            d = n.child,
            d.flags & 8192 && (h = d.memoizedState !== null,
            d.stateNode.isHidden = h,
            !h || d.alternate !== null && d.alternate.memoizedState !== null || (Fu = ht())),
            c & 4 && dm(n);
            break;
        case 22:
            if (Q = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (Ft = (F = Ft) || Q,
            Sn(s, n),
            Ft = F) : Sn(s, n),
            zn(n),
            c & 8192) {
                if (F = n.memoizedState !== null,
                (n.stateNode.isHidden = F) && !Q && (n.mode & 1) !== 0)
                    for (me = n,
                    Q = n.child; Q !== null; ) {
                        for (G = me = Q; me !== null; ) {
                            switch (H = me,
                            de = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                io(4, H, H.return);
                                break;
                            case 1:
                                Zs(H, H.return);
                                var ge = H.stateNode;
                                if (typeof ge.componentWillUnmount == "function") {
                                    c = H,
                                    o = H.return;
                                    try {
                                        s = c,
                                        ge.props = s.memoizedProps,
                                        ge.state = s.memoizedState,
                                        ge.componentWillUnmount()
                                    } catch (ve) {
                                        ft(c, o, ve)
                                    }
                                }
                                break;
                            case 5:
                                Zs(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    mm(G);
                                    continue
                                }
                            }
                            de !== null ? (de.return = H,
                            me = de) : mm(G)
                        }
                        Q = Q.sibling
                    }
                e: for (Q = null,
                G = n; ; ) {
                    if (G.tag === 5) {
                        if (Q === null) {
                            Q = G;
                            try {
                                d = G.stateNode,
                                F ? (h = d.style,
                                typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (_ = G.stateNode,
                                P = G.memoizedProps.style,
                                x = P != null && P.hasOwnProperty("display") ? P.display : null,
                                _.style.display = _s("display", x))
                            } catch (ve) {
                                ft(n, n.return, ve)
                            }
                        }
                    } else if (G.tag === 6) {
                        if (Q === null)
                            try {
                                G.stateNode.nodeValue = F ? "" : G.memoizedProps
                            } catch (ve) {
                                ft(n, n.return, ve)
                            }
                    } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
                        G.child.return = G,
                        G = G.child;
                        continue
                    }
                    if (G === n)
                        break e;
                    for (; G.sibling === null; ) {
                        if (G.return === null || G.return === n)
                            break e;
                        Q === G && (Q = null),
                        G = G.return
                    }
                    Q === G && (Q = null),
                    G.sibling.return = G.return,
                    G = G.sibling
                }
            }
            break;
        case 19:
            Sn(s, n),
            zn(n),
            c & 4 && dm(n);
            break;
        case 21:
            break;
        default:
            Sn(s, n),
            zn(n)
        }
    }
    function zn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if (lm(o)) {
                            var c = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (c.tag) {
                case 5:
                    var d = c.stateNode;
                    c.flags & 32 && (et(d, ""),
                    c.flags &= -33);
                    var h = cm(n);
                    Mu(n, h, d);
                    break;
                case 3:
                case 4:
                    var x = c.stateNode.containerInfo
                      , _ = cm(n);
                    Iu(n, _, x);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (P) {
                ft(n, n.return, P)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function lS(n, s, o) {
        me = n,
        pm(n)
    }
    function pm(n, s, o) {
        for (var c = (n.mode & 1) !== 0; me !== null; ) {
            var d = me
              , h = d.child;
            if (d.tag === 22 && c) {
                var x = d.memoizedState !== null || Va;
                if (!x) {
                    var _ = d.alternate
                      , P = _ !== null && _.memoizedState !== null || Ft;
                    _ = Va;
                    var F = Ft;
                    if (Va = x,
                    (Ft = P) && !F)
                        for (me = d; me !== null; )
                            x = me,
                            P = x.child,
                            x.tag === 22 && x.memoizedState !== null ? gm(d) : P !== null ? (P.return = x,
                            me = P) : gm(d);
                    for (; h !== null; )
                        me = h,
                        pm(h),
                        h = h.sibling;
                    me = d,
                    Va = _,
                    Ft = F
                }
                hm(n)
            } else
                (d.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = d,
                me = h) : hm(n)
        }
    }
    function hm(n) {
        for (; me !== null; ) {
            var s = me;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ft || Ba(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !Ft)
                                if (o === null)
                                    c.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : wn(s.type, o.memoizedProps);
                                    c.componentDidUpdate(d, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var h = s.updateQueue;
                            h !== null && mh(s, h, c);
                            break;
                        case 3:
                            var x = s.updateQueue;
                            if (x !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                mh(s, x, o)
                            }
                            break;
                        case 5:
                            var _ = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = _;
                                var P = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    P.autoFocus && o.focus();
                                    break;
                                case "img":
                                    P.src && (o.src = P.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var F = s.alternate;
                                if (F !== null) {
                                    var Q = F.memoizedState;
                                    if (Q !== null) {
                                        var G = Q.dehydrated;
                                        G !== null && Li(G)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    Ft || s.flags & 512 && Ou(s)
                } catch (H) {
                    ft(s, s.return, H)
                }
            }
            if (s === n) {
                me = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                me = o;
                break
            }
            me = s.return
        }
    }
    function mm(n) {
        for (; me !== null; ) {
            var s = me;
            if (s === n) {
                me = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                me = o;
                break
            }
            me = s.return
        }
    }
    function gm(n) {
        for (; me !== null; ) {
            var s = me;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        Ba(4, s)
                    } catch (P) {
                        ft(s, o, P)
                    }
                    break;
                case 1:
                    var c = s.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var d = s.return;
                        try {
                            c.componentDidMount()
                        } catch (P) {
                            ft(s, d, P)
                        }
                    }
                    var h = s.return;
                    try {
                        Ou(s)
                    } catch (P) {
                        ft(s, h, P)
                    }
                    break;
                case 5:
                    var x = s.return;
                    try {
                        Ou(s)
                    } catch (P) {
                        ft(s, x, P)
                    }
                }
            } catch (P) {
                ft(s, s.return, P)
            }
            if (s === n) {
                me = null;
                break
            }
            var _ = s.sibling;
            if (_ !== null) {
                _.return = s.return,
                me = _;
                break
            }
            me = s.return
        }
    }
    var cS = Math.ceil
      , Ua = L.ReactCurrentDispatcher
      , Du = L.ReactCurrentOwner
      , hn = L.ReactCurrentBatchConfig
      , Qe = 0
      , Pt = null
      , xt = null
      , At = 0
      , nn = 0
      , Ks = Sr(0)
      , _t = 0
      , oo = null
      , rs = 0
      , $a = 0
      , Lu = 0
      , ao = null
      , Kt = null
      , Fu = 0
      , Gs = 1 / 0
      , rr = null
      , qa = !1
      , zu = null
      , Pr = null
      , Ha = !1
      , Tr = null
      , Wa = 0
      , lo = 0
      , Vu = null
      , Qa = -1
      , Za = 0;
    function Bt() {
        return (Qe & 6) !== 0 ? ht() : Qa !== -1 ? Qa : Qa = ht()
    }
    function jr(n) {
        return (n.mode & 1) === 0 ? 1 : (Qe & 2) !== 0 && At !== 0 ? At & -At : Wb.transition !== null ? (Za === 0 && (Za = cp()),
        Za) : (n = Ye,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : yp(n.type)),
        n)
    }
    function Cn(n, s, o, c) {
        if (50 < lo)
            throw lo = 0,
            Vu = null,
            Error(r(185));
        Ai(n, o, c),
        ((Qe & 2) === 0 || n !== Pt) && (n === Pt && ((Qe & 2) === 0 && ($a |= o),
        _t === 4 && Rr(n, At)),
        Gt(n, c),
        o === 1 && Qe === 0 && (s.mode & 1) === 0 && (Gs = ht() + 500,
        Sa && _r()))
    }
    function Gt(n, s) {
        var o = n.callbackNode;
        Ww(n, s);
        var c = ra(n, n === Pt ? At : 0);
        if (c === 0)
            o !== null && op(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = c & -c,
        n.callbackPriority !== s) {
            if (o != null && op(o),
            s === 1)
                n.tag === 0 ? Hb(ym.bind(null, n)) : rh(ym.bind(null, n)),
                Bb(function() {
                    (Qe & 6) === 0 && _r()
                }),
                o = null;
            else {
                switch (up(c)) {
                case 1:
                    o = xc;
                    break;
                case 4:
                    o = ap;
                    break;
                case 16:
                    o = Jo;
                    break;
                case 536870912:
                    o = lp;
                    break;
                default:
                    o = Jo
                }
                o = km(o, vm.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function vm(n, s) {
        if (Qa = -1,
        Za = 0,
        (Qe & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (Xs() && n.callbackNode !== o)
            return null;
        var c = ra(n, n === Pt ? At : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || s)
            s = Ka(n, c);
        else {
            s = c;
            var d = Qe;
            Qe |= 2;
            var h = wm();
            (Pt !== n || At !== s) && (rr = null,
            Gs = ht() + 500,
            is(n, s));
            do
                try {
                    fS();
                    break
                } catch (_) {
                    xm(n, _)
                }
            while (!0);
            su(),
            Ua.current = h,
            Qe = d,
            xt !== null ? s = 0 : (Pt = null,
            At = 0,
            s = _t)
        }
        if (s !== 0) {
            if (s === 2 && (d = wc(n),
            d !== 0 && (c = d,
            s = Bu(n, d))),
            s === 1)
                throw o = oo,
                is(n, 0),
                Rr(n, c),
                Gt(n, ht()),
                o;
            if (s === 6)
                Rr(n, c);
            else {
                if (d = n.current.alternate,
                (c & 30) === 0 && !uS(d) && (s = Ka(n, c),
                s === 2 && (h = wc(n),
                h !== 0 && (c = h,
                s = Bu(n, h))),
                s === 1))
                    throw o = oo,
                    is(n, 0),
                    Rr(n, c),
                    Gt(n, ht()),
                    o;
                switch (n.finishedWork = d,
                n.finishedLanes = c,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    os(n, Kt, rr);
                    break;
                case 3:
                    if (Rr(n, c),
                    (c & 130023424) === c && (s = Fu + 500 - ht(),
                    10 < s)) {
                        if (ra(n, 0) !== 0)
                            break;
                        if (d = n.suspendedLanes,
                        (d & c) !== c) {
                            Bt(),
                            n.pingedLanes |= n.suspendedLanes & d;
                            break
                        }
                        n.timeoutHandle = Qc(os.bind(null, n, Kt, rr), s);
                        break
                    }
                    os(n, Kt, rr);
                    break;
                case 4:
                    if (Rr(n, c),
                    (c & 4194240) === c)
                        break;
                    for (s = n.eventTimes,
                    d = -1; 0 < c; ) {
                        var x = 31 - vn(c);
                        h = 1 << x,
                        x = s[x],
                        x > d && (d = x),
                        c &= ~h
                    }
                    if (c = d,
                    c = ht() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * cS(c / 1960)) - c,
                    10 < c) {
                        n.timeoutHandle = Qc(os.bind(null, n, Kt, rr), c);
                        break
                    }
                    os(n, Kt, rr);
                    break;
                case 5:
                    os(n, Kt, rr);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return Gt(n, ht()),
        n.callbackNode === o ? vm.bind(null, n) : null
    }
    function Bu(n, s) {
        var o = ao;
        return n.current.memoizedState.isDehydrated && (is(n, s).flags |= 256),
        n = Ka(n, s),
        n !== 2 && (s = Kt,
        Kt = o,
        s !== null && Uu(s)),
        n
    }
    function Uu(n) {
        Kt === null ? Kt = n : Kt.push.apply(Kt, n)
    }
    function uS(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var c = 0; c < o.length; c++) {
                        var d = o[c]
                          , h = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!yn(h(), d))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function Rr(n, s) {
        for (s &= ~Lu,
        s &= ~$a,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - vn(s)
              , c = 1 << o;
            n[o] = -1,
            s &= ~c
        }
    }
    function ym(n) {
        if ((Qe & 6) !== 0)
            throw Error(r(327));
        Xs();
        var s = ra(n, 0);
        if ((s & 1) === 0)
            return Gt(n, ht()),
            null;
        var o = Ka(n, s);
        if (n.tag !== 0 && o === 2) {
            var c = wc(n);
            c !== 0 && (s = c,
            o = Bu(n, c))
        }
        if (o === 1)
            throw o = oo,
            is(n, 0),
            Rr(n, s),
            Gt(n, ht()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        os(n, Kt, rr),
        Gt(n, ht()),
        null
    }
    function $u(n, s) {
        var o = Qe;
        Qe |= 1;
        try {
            return n(s)
        } finally {
            Qe = o,
            Qe === 0 && (Gs = ht() + 500,
            Sa && _r())
        }
    }
    function ss(n) {
        Tr !== null && Tr.tag === 0 && (Qe & 6) === 0 && Xs();
        var s = Qe;
        Qe |= 1;
        var o = hn.transition
          , c = Ye;
        try {
            if (hn.transition = null,
            Ye = 1,
            n)
                return n()
        } finally {
            Ye = c,
            hn.transition = o,
            Qe = s,
            (Qe & 6) === 0 && _r()
        }
    }
    function qu() {
        nn = Ks.current,
        rt(Ks)
    }
    function is(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        Vb(o)),
        xt !== null)
            for (o = xt.return; o !== null; ) {
                var c = o;
                switch (Jc(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && wa();
                    break;
                case 3:
                    Ws(),
                    rt(Wt),
                    rt(Mt),
                    fu();
                    break;
                case 5:
                    uu(c);
                    break;
                case 4:
                    Ws();
                    break;
                case 13:
                    rt(at);
                    break;
                case 19:
                    rt(at);
                    break;
                case 10:
                    iu(c.type._context);
                    break;
                case 22:
                case 23:
                    qu()
                }
                o = o.return
            }
        if (Pt = n,
        xt = n = Ar(n.current, null),
        At = nn = s,
        _t = 0,
        oo = null,
        Lu = $a = rs = 0,
        Kt = ao = null,
        es !== null) {
            for (s = 0; s < es.length; s++)
                if (o = es[s],
                c = o.interleaved,
                c !== null) {
                    o.interleaved = null;
                    var d = c.next
                      , h = o.pending;
                    if (h !== null) {
                        var x = h.next;
                        h.next = d,
                        c.next = x
                    }
                    o.pending = c
                }
            es = null
        }
        return n
    }
    function xm(n, s) {
        do {
            var o = xt;
            try {
                if (su(),
                Aa.current = Da,
                Oa) {
                    for (var c = lt.memoizedState; c !== null; ) {
                        var d = c.queue;
                        d !== null && (d.pending = null),
                        c = c.next
                    }
                    Oa = !1
                }
                if (ns = 0,
                Et = Ct = lt = null,
                eo = !1,
                to = 0,
                Du.current = null,
                o === null || o.return === null) {
                    _t = 1,
                    oo = s,
                    xt = null;
                    break
                }
                e: {
                    var h = n
                      , x = o.return
                      , _ = o
                      , P = s;
                    if (s = At,
                    _.flags |= 32768,
                    P !== null && typeof P == "object" && typeof P.then == "function") {
                        var F = P
                          , Q = _
                          , G = Q.tag;
                        if ((Q.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
                            var H = Q.alternate;
                            H ? (Q.updateQueue = H.updateQueue,
                            Q.memoizedState = H.memoizedState,
                            Q.lanes = H.lanes) : (Q.updateQueue = null,
                            Q.memoizedState = null)
                        }
                        var de = qh(x);
                        if (de !== null) {
                            de.flags &= -257,
                            Hh(de, x, _, h, s),
                            de.mode & 1 && $h(h, F, s),
                            s = de,
                            P = F;
                            var ge = s.updateQueue;
                            if (ge === null) {
                                var ve = new Set;
                                ve.add(P),
                                s.updateQueue = ve
                            } else
                                ge.add(P);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                $h(h, F, s),
                                Hu();
                                break e
                            }
                            P = Error(r(426))
                        }
                    } else if (ot && _.mode & 1) {
                        var mt = qh(x);
                        if (mt !== null) {
                            (mt.flags & 65536) === 0 && (mt.flags |= 256),
                            Hh(mt, x, _, h, s),
                            nu(Qs(P, _));
                            break e
                        }
                    }
                    h = P = Qs(P, _),
                    _t !== 4 && (_t = 2),
                    ao === null ? ao = [h] : ao.push(h),
                    h = x;
                    do {
                        switch (h.tag) {
                        case 3:
                            h.flags |= 65536,
                            s &= -s,
                            h.lanes |= s;
                            var I = Bh(h, P, s);
                            hh(h, I);
                            break e;
                        case 1:
                            _ = P;
                            var A = h.type
                              , M = h.stateNode;
                            if ((h.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Pr === null || !Pr.has(M)))) {
                                h.flags |= 65536,
                                s &= -s,
                                h.lanes |= s;
                                var te = Uh(h, _, s);
                                hh(h, te);
                                break e
                            }
                        }
                        h = h.return
                    } while (h !== null)
                }
                Sm(o)
            } catch (we) {
                s = we,
                xt === o && o !== null && (xt = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function wm() {
        var n = Ua.current;
        return Ua.current = Da,
        n === null ? Da : n
    }
    function Hu() {
        (_t === 0 || _t === 3 || _t === 2) && (_t = 4),
        Pt === null || (rs & 268435455) === 0 && ($a & 268435455) === 0 || Rr(Pt, At)
    }
    function Ka(n, s) {
        var o = Qe;
        Qe |= 2;
        var c = wm();
        (Pt !== n || At !== s) && (rr = null,
        is(n, s));
        do
            try {
                dS();
                break
            } catch (d) {
                xm(n, d)
            }
        while (!0);
        if (su(),
        Qe = o,
        Ua.current = c,
        xt !== null)
            throw Error(r(261));
        return Pt = null,
        At = 0,
        _t
    }
    function dS() {
        for (; xt !== null; )
            bm(xt)
    }
    function fS() {
        for (; xt !== null && !Lw(); )
            bm(xt)
    }
    function bm(n) {
        var s = Nm(n.alternate, n, nn);
        n.memoizedProps = n.pendingProps,
        s === null ? Sm(n) : xt = s,
        Du.current = null
    }
    function Sm(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = sS(o, s, nn),
                o !== null) {
                    xt = o;
                    return
                }
            } else {
                if (o = iS(o, s),
                o !== null) {
                    o.flags &= 32767,
                    xt = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    _t = 6,
                    xt = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                xt = s;
                return
            }
            xt = s = n
        } while (s !== null);
        _t === 0 && (_t = 5)
    }
    function os(n, s, o) {
        var c = Ye
          , d = hn.transition;
        try {
            hn.transition = null,
            Ye = 1,
            pS(n, s, o, c)
        } finally {
            hn.transition = d,
            Ye = c
        }
        return null
    }
    function pS(n, s, o, c) {
        do
            Xs();
        while (Tr !== null);
        if ((Qe & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var h = o.lanes | o.childLanes;
        if (Qw(n, h),
        n === Pt && (xt = Pt = null,
        At = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ha || (Ha = !0,
        km(Jo, function() {
            return Xs(),
            null
        })),
        h = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || h) {
            h = hn.transition,
            hn.transition = null;
            var x = Ye;
            Ye = 1;
            var _ = Qe;
            Qe |= 4,
            Du.current = null,
            aS(n, o),
            fm(o, n),
            Ob(Hc),
            oa = !!qc,
            Hc = qc = null,
            n.current = o,
            lS(o),
            Fw(),
            Qe = _,
            Ye = x,
            hn.transition = h
        } else
            n.current = o;
        if (Ha && (Ha = !1,
        Tr = n,
        Wa = d),
        h = n.pendingLanes,
        h === 0 && (Pr = null),
        Bw(o.stateNode),
        Gt(n, ht()),
        s !== null)
            for (c = n.onRecoverableError,
            o = 0; o < s.length; o++)
                d = s[o],
                c(d.value, {
                    componentStack: d.stack,
                    digest: d.digest
                });
        if (qa)
            throw qa = !1,
            n = zu,
            zu = null,
            n;
        return (Wa & 1) !== 0 && n.tag !== 0 && Xs(),
        h = n.pendingLanes,
        (h & 1) !== 0 ? n === Vu ? lo++ : (lo = 0,
        Vu = n) : lo = 0,
        _r(),
        null
    }
    function Xs() {
        if (Tr !== null) {
            var n = up(Wa)
              , s = hn.transition
              , o = Ye;
            try {
                if (hn.transition = null,
                Ye = 16 > n ? 16 : n,
                Tr === null)
                    var c = !1;
                else {
                    if (n = Tr,
                    Tr = null,
                    Wa = 0,
                    (Qe & 6) !== 0)
                        throw Error(r(331));
                    var d = Qe;
                    for (Qe |= 4,
                    me = n.current; me !== null; ) {
                        var h = me
                          , x = h.child;
                        if ((me.flags & 16) !== 0) {
                            var _ = h.deletions;
                            if (_ !== null) {
                                for (var P = 0; P < _.length; P++) {
                                    var F = _[P];
                                    for (me = F; me !== null; ) {
                                        var Q = me;
                                        switch (Q.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            io(8, Q, h)
                                        }
                                        var G = Q.child;
                                        if (G !== null)
                                            G.return = Q,
                                            me = G;
                                        else
                                            for (; me !== null; ) {
                                                Q = me;
                                                var H = Q.sibling
                                                  , de = Q.return;
                                                if (am(Q),
                                                Q === F) {
                                                    me = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = de,
                                                    me = H;
                                                    break
                                                }
                                                me = de
                                            }
                                    }
                                }
                                var ge = h.alternate;
                                if (ge !== null) {
                                    var ve = ge.child;
                                    if (ve !== null) {
                                        ge.child = null;
                                        do {
                                            var mt = ve.sibling;
                                            ve.sibling = null,
                                            ve = mt
                                        } while (ve !== null)
                                    }
                                }
                                me = h
                            }
                        }
                        if ((h.subtreeFlags & 2064) !== 0 && x !== null)
                            x.return = h,
                            me = x;
                        else
                            e: for (; me !== null; ) {
                                if (h = me,
                                (h.flags & 2048) !== 0)
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        io(9, h, h.return)
                                    }
                                var I = h.sibling;
                                if (I !== null) {
                                    I.return = h.return,
                                    me = I;
                                    break e
                                }
                                me = h.return
                            }
                    }
                    var A = n.current;
                    for (me = A; me !== null; ) {
                        x = me;
                        var M = x.child;
                        if ((x.subtreeFlags & 2064) !== 0 && M !== null)
                            M.return = x,
                            me = M;
                        else
                            e: for (x = A; me !== null; ) {
                                if (_ = me,
                                (_.flags & 2048) !== 0)
                                    try {
                                        switch (_.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ba(9, _)
                                        }
                                    } catch (we) {
                                        ft(_, _.return, we)
                                    }
                                if (_ === x) {
                                    me = null;
                                    break e
                                }
                                var te = _.sibling;
                                if (te !== null) {
                                    te.return = _.return,
                                    me = te;
                                    break e
                                }
                                me = _.return
                            }
                    }
                    if (Qe = d,
                    _r(),
                    Mn && typeof Mn.onPostCommitFiberRoot == "function")
                        try {
                            Mn.onPostCommitFiberRoot(ea, n)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                Ye = o,
                hn.transition = s
            }
        }
        return !1
    }
    function Cm(n, s, o) {
        s = Qs(o, s),
        s = Bh(n, s, 1),
        n = kr(n, s, 1),
        s = Bt(),
        n !== null && (Ai(n, 1, s),
        Gt(n, s))
    }
    function ft(n, s, o) {
        if (n.tag === 3)
            Cm(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    Cm(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Pr === null || !Pr.has(c))) {
                        n = Qs(o, n),
                        n = Uh(s, n, 1),
                        s = kr(s, n, 1),
                        n = Bt(),
                        s !== null && (Ai(s, 1, n),
                        Gt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function hS(n, s, o) {
        var c = n.pingCache;
        c !== null && c.delete(s),
        s = Bt(),
        n.pingedLanes |= n.suspendedLanes & o,
        Pt === n && (At & o) === o && (_t === 4 || _t === 3 && (At & 130023424) === At && 500 > ht() - Fu ? is(n, 0) : Lu |= o),
        Gt(n, s)
    }
    function _m(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = na,
        na <<= 1,
        (na & 130023424) === 0 && (na = 4194304)));
        var o = Bt();
        n = er(n, s),
        n !== null && (Ai(n, s, o),
        Gt(n, o))
    }
    function mS(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        _m(n, o)
    }
    function gS(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var c = n.stateNode
              , d = n.memoizedState;
            d !== null && (o = d.retryLane);
            break;
        case 19:
            c = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        c !== null && c.delete(s),
        _m(n, o)
    }
    var Nm;
    Nm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Wt.current)
                Zt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return Zt = !1,
                    rS(n, s, o);
                Zt = (n.flags & 131072) !== 0
            }
        else
            Zt = !1,
            ot && (s.flags & 1048576) !== 0 && sh(s, _a, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var c = s.type;
            za(n, s),
            n = s.pendingProps;
            var d = zs(s, Mt.current);
            Hs(s, o),
            d = mu(null, s, c, n, d, o);
            var h = gu();
            return s.flags |= 1,
            typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Qt(c) ? (h = !0,
            ba(s)) : h = !1,
            s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            lu(s),
            d.updater = La,
            s.stateNode = d,
            d._reactInternals = s,
            Su(s, c, n, o),
            s = ku(null, s, c, !0, h, o)) : (s.tag = 0,
            ot && h && Yc(s),
            Vt(null, s, d, o),
            s = s.child),
            s;
        case 16:
            c = s.elementType;
            e: {
                switch (za(n, s),
                n = s.pendingProps,
                d = c._init,
                c = d(c._payload),
                s.type = c,
                d = s.tag = yS(c),
                n = wn(c, n),
                d) {
                case 0:
                    s = Nu(null, s, c, n, o);
                    break e;
                case 1:
                    s = Xh(null, s, c, n, o);
                    break e;
                case 11:
                    s = Wh(null, s, c, n, o);
                    break e;
                case 14:
                    s = Qh(null, s, c, wn(c.type, n), o);
                    break e
                }
                throw Error(r(306, c, ""))
            }
            return s;
        case 0:
            return c = s.type,
            d = s.pendingProps,
            d = s.elementType === c ? d : wn(c, d),
            Nu(n, s, c, d, o);
        case 1:
            return c = s.type,
            d = s.pendingProps,
            d = s.elementType === c ? d : wn(c, d),
            Xh(n, s, c, d, o);
        case 3:
            e: {
                if (Yh(s),
                n === null)
                    throw Error(r(387));
                c = s.pendingProps,
                h = s.memoizedState,
                d = h.element,
                ph(n, s),
                ja(s, c, null, o);
                var x = s.memoizedState;
                if (c = x.element,
                h.isDehydrated)
                    if (h = {
                        element: c,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                    },
                    s.updateQueue.baseState = h,
                    s.memoizedState = h,
                    s.flags & 256) {
                        d = Qs(Error(r(423)), s),
                        s = Jh(n, s, c, o, d);
                        break e
                    } else if (c !== d) {
                        d = Qs(Error(r(424)), s),
                        s = Jh(n, s, c, o, d);
                        break e
                    } else
                        for (tn = br(s.stateNode.containerInfo.firstChild),
                        en = s,
                        ot = !0,
                        xn = null,
                        o = dh(s, null, c, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Us(),
                    c === d) {
                        s = nr(n, s, o);
                        break e
                    }
                    Vt(n, s, c, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return gh(s),
            n === null && tu(s),
            c = s.type,
            d = s.pendingProps,
            h = n !== null ? n.memoizedProps : null,
            x = d.children,
            Wc(c, d) ? x = null : h !== null && Wc(c, h) && (s.flags |= 32),
            Gh(n, s),
            Vt(n, s, x, o),
            s.child;
        case 6:
            return n === null && tu(s),
            null;
        case 13:
            return em(n, s, o);
        case 4:
            return cu(s, s.stateNode.containerInfo),
            c = s.pendingProps,
            n === null ? s.child = $s(s, null, c, o) : Vt(n, s, c, o),
            s.child;
        case 11:
            return c = s.type,
            d = s.pendingProps,
            d = s.elementType === c ? d : wn(c, d),
            Wh(n, s, c, d, o);
        case 7:
            return Vt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return Vt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return Vt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (c = s.type._context,
                d = s.pendingProps,
                h = s.memoizedProps,
                x = d.value,
                tt(Ea, c._currentValue),
                c._currentValue = x,
                h !== null)
                    if (yn(h.value, x)) {
                        if (h.children === d.children && !Wt.current) {
                            s = nr(n, s, o);
                            break e
                        }
                    } else
                        for (h = s.child,
                        h !== null && (h.return = s); h !== null; ) {
                            var _ = h.dependencies;
                            if (_ !== null) {
                                x = h.child;
                                for (var P = _.firstContext; P !== null; ) {
                                    if (P.context === c) {
                                        if (h.tag === 1) {
                                            P = tr(-1, o & -o),
                                            P.tag = 2;
                                            var F = h.updateQueue;
                                            if (F !== null) {
                                                F = F.shared;
                                                var Q = F.pending;
                                                Q === null ? P.next = P : (P.next = Q.next,
                                                Q.next = P),
                                                F.pending = P
                                            }
                                        }
                                        h.lanes |= o,
                                        P = h.alternate,
                                        P !== null && (P.lanes |= o),
                                        ou(h.return, o, s),
                                        _.lanes |= o;
                                        break
                                    }
                                    P = P.next
                                }
                            } else if (h.tag === 10)
                                x = h.type === s.type ? null : h.child;
                            else if (h.tag === 18) {
                                if (x = h.return,
                                x === null)
                                    throw Error(r(341));
                                x.lanes |= o,
                                _ = x.alternate,
                                _ !== null && (_.lanes |= o),
                                ou(x, o, s),
                                x = h.sibling
                            } else
                                x = h.child;
                            if (x !== null)
                                x.return = h;
                            else
                                for (x = h; x !== null; ) {
                                    if (x === s) {
                                        x = null;
                                        break
                                    }
                                    if (h = x.sibling,
                                    h !== null) {
                                        h.return = x.return,
                                        x = h;
                                        break
                                    }
                                    x = x.return
                                }
                            h = x
                        }
                Vt(n, s, d.children, o),
                s = s.child
            }
            return s;
        case 9:
            return d = s.type,
            c = s.pendingProps.children,
            Hs(s, o),
            d = fn(d),
            c = c(d),
            s.flags |= 1,
            Vt(n, s, c, o),
            s.child;
        case 14:
            return c = s.type,
            d = wn(c, s.pendingProps),
            d = wn(c.type, d),
            Qh(n, s, c, d, o);
        case 15:
            return Zh(n, s, s.type, s.pendingProps, o);
        case 17:
            return c = s.type,
            d = s.pendingProps,
            d = s.elementType === c ? d : wn(c, d),
            za(n, s),
            s.tag = 1,
            Qt(c) ? (n = !0,
            ba(s)) : n = !1,
            Hs(s, o),
            zh(s, c, d),
            Su(s, c, d, o),
            ku(null, s, c, !0, n, o);
        case 19:
            return nm(n, s, o);
        case 22:
            return Kh(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function km(n, s) {
        return ip(n, s)
    }
    function vS(n, s, o, c) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function mn(n, s, o, c) {
        return new vS(n,s,o,c)
    }
    function Wu(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function yS(n) {
        if (typeof n == "function")
            return Wu(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === K)
                return 11;
            if (n === xe)
                return 14
        }
        return 2
    }
    function Ar(n, s) {
        var o = n.alternate;
        return o === null ? (o = mn(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function Ga(n, s, o, c, d, h) {
        var x = 2;
        if (c = n,
        typeof n == "function")
            Wu(n) && (x = 1);
        else if (typeof n == "string")
            x = 5;
        else
            e: switch (n) {
            case U:
                return as(o.children, d, h, s);
            case le:
                x = 8,
                d |= 8;
                break;
            case he:
                return n = mn(12, o, s, d | 2),
                n.elementType = he,
                n.lanes = h,
                n;
            case ne:
                return n = mn(13, o, s, d),
                n.elementType = ne,
                n.lanes = h,
                n;
            case q:
                return n = mn(19, o, s, d),
                n.elementType = q,
                n.lanes = h,
                n;
            case ce:
                return Xa(o, d, h, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case ye:
                        x = 10;
                        break e;
                    case Se:
                        x = 9;
                        break e;
                    case K:
                        x = 11;
                        break e;
                    case xe:
                        x = 14;
                        break e;
                    case ie:
                        x = 16,
                        c = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = mn(x, o, s, d),
        s.elementType = n,
        s.type = c,
        s.lanes = h,
        s
    }
    function as(n, s, o, c) {
        return n = mn(7, n, c, s),
        n.lanes = o,
        n
    }
    function Xa(n, s, o, c) {
        return n = mn(22, n, c, s),
        n.elementType = ce,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function Qu(n, s, o) {
        return n = mn(6, n, null, s),
        n.lanes = o,
        n
    }
    function Zu(n, s, o) {
        return s = mn(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function xS(n, s, o, c, d) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = bc(0),
        this.expirationTimes = bc(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = bc(0),
        this.identifierPrefix = c,
        this.onRecoverableError = d,
        this.mutableSourceEagerHydrationData = null
    }
    function Ku(n, s, o, c, d, h, x, _, P) {
        return n = new xS(n,s,o,_,P),
        s === 1 ? (s = 1,
        h === !0 && (s |= 8)) : s = 0,
        h = mn(3, null, null, s),
        n.current = h,
        h.stateNode = n,
        h.memoizedState = {
            element: c,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        lu(h),
        n
    }
    function wS(n, s, o) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Z,
            key: c == null ? null : "" + c,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function Em(n) {
        if (!n)
            return Cr;
        n = n._reactInternals;
        e: {
            if (Kr(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Qt(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Qt(o))
                return th(n, o, s)
        }
        return s
    }
    function Pm(n, s, o, c, d, h, x, _, P) {
        return n = Ku(o, c, !0, n, d, h, x, _, P),
        n.context = Em(null),
        o = n.current,
        c = Bt(),
        d = jr(o),
        h = tr(c, d),
        h.callback = s ?? null,
        kr(o, h, d),
        n.current.lanes = d,
        Ai(n, d, c),
        Gt(n, c),
        n
    }
    function Ya(n, s, o, c) {
        var d = s.current
          , h = Bt()
          , x = jr(d);
        return o = Em(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = tr(h, x),
        s.payload = {
            element: n
        },
        c = c === void 0 ? null : c,
        c !== null && (s.callback = c),
        n = kr(d, s, x),
        n !== null && (Cn(n, d, x, h),
        Ta(n, d, x)),
        x
    }
    function Ja(n) {
        return n = n.current,
        n.child ? (n.child.tag === 5,
        n.child.stateNode) : null
    }
    function Tm(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Gu(n, s) {
        Tm(n, s),
        (n = n.alternate) && Tm(n, s)
    }
    function bS() {
        return null
    }
    var jm = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function Xu(n) {
        this._internalRoot = n
    }
    el.prototype.render = Xu.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        Ya(n, s, null, null)
    }
    ,
    el.prototype.unmount = Xu.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            ss(function() {
                Ya(null, n, null, null)
            }),
            s[Gn] = null
        }
    }
    ;
    function el(n) {
        this._internalRoot = n
    }
    el.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = pp();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < yr.length && s !== 0 && s < yr[o].priority; o++)
                ;
            yr.splice(o, 0, n),
            o === 0 && gp(n)
        }
    }
    ;
    function Yu(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function tl(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function Rm() {}
    function SS(n, s, o, c, d) {
        if (d) {
            if (typeof c == "function") {
                var h = c;
                c = function() {
                    var F = Ja(x);
                    h.call(F)
                }
            }
            var x = Pm(s, c, n, 0, null, !1, !1, "", Rm);
            return n._reactRootContainer = x,
            n[Gn] = x.current,
            Wi(n.nodeType === 8 ? n.parentNode : n),
            ss(),
            x
        }
        for (; d = n.lastChild; )
            n.removeChild(d);
        if (typeof c == "function") {
            var _ = c;
            c = function() {
                var F = Ja(P);
                _.call(F)
            }
        }
        var P = Ku(n, 0, !1, null, null, !1, !1, "", Rm);
        return n._reactRootContainer = P,
        n[Gn] = P.current,
        Wi(n.nodeType === 8 ? n.parentNode : n),
        ss(function() {
            Ya(s, P, o, c)
        }),
        P
    }
    function nl(n, s, o, c, d) {
        var h = o._reactRootContainer;
        if (h) {
            var x = h;
            if (typeof d == "function") {
                var _ = d;
                d = function() {
                    var P = Ja(x);
                    _.call(P)
                }
            }
            Ya(s, x, n, d)
        } else
            x = SS(o, s, n, d, c);
        return Ja(x)
    }
    dp = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = Ri(s.pendingLanes);
                o !== 0 && (Sc(s, o | 1),
                Gt(s, ht()),
                (Qe & 6) === 0 && (Gs = ht() + 500,
                _r()))
            }
            break;
        case 13:
            ss(function() {
                var c = er(n, 1);
                if (c !== null) {
                    var d = Bt();
                    Cn(c, n, 1, d)
                }
            }),
            Gu(n, 1)
        }
    }
    ,
    Cc = function(n) {
        if (n.tag === 13) {
            var s = er(n, 134217728);
            if (s !== null) {
                var o = Bt();
                Cn(s, n, 134217728, o)
            }
            Gu(n, 134217728)
        }
    }
    ,
    fp = function(n) {
        if (n.tag === 13) {
            var s = jr(n)
              , o = er(n, s);
            if (o !== null) {
                var c = Bt();
                Cn(o, n, s, c)
            }
            Gu(n, s)
        }
    }
    ,
    pp = function() {
        return Ye
    }
    ,
    hp = function(n, s) {
        var o = Ye;
        try {
            return Ye = n,
            s()
        } finally {
            Ye = o
        }
    }
    ,
    mc = function(n, s, o) {
        switch (s) {
        case "input":
            if (In(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var c = o[s];
                    if (c !== n && c.form === n.form) {
                        var d = xa(c);
                        if (!d)
                            throw Error(r(90));
                        Je(c),
                        In(c, d)
                    }
                }
            }
            break;
        case "textarea":
            B(n, o);
            break;
        case "select":
            s = o.value,
            s != null && Kn(n, !!o.multiple, s, !1)
        }
    }
    ,
    Yf = $u,
    Jf = ss;
    var CS = {
        usingClientEntryPoint: !1,
        Events: [Ki, Ls, xa, Gf, Xf, $u]
    }
      , co = {
        findFiberByHostInstance: Gr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , _S = {
        bundleType: co.bundleType,
        version: co.version,
        rendererPackageName: co.rendererPackageName,
        rendererConfig: co.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: L.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = rp(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: co.findFiberByHostInstance || bS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!rl.isDisabled && rl.supportsFiber)
            try {
                ea = rl.inject(_S),
                Mn = rl
            } catch {}
    }
    return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = CS,
    Xt.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Yu(s))
            throw Error(r(200));
        return wS(n, s, null, o)
    }
    ,
    Xt.createRoot = function(n, s) {
        if (!Yu(n))
            throw Error(r(299));
        var o = !1
          , c = ""
          , d = jm;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
        s = Ku(n, 1, !1, null, null, o, !1, c, d),
        n[Gn] = s.current,
        Wi(n.nodeType === 8 ? n.parentNode : n),
        new Xu(s)
    }
    ,
    Xt.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = rp(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    Xt.flushSync = function(n) {
        return ss(n)
    }
    ,
    Xt.hydrate = function(n, s, o) {
        if (!tl(s))
            throw Error(r(200));
        return nl(null, n, s, !0, o)
    }
    ,
    Xt.hydrateRoot = function(n, s, o) {
        if (!Yu(n))
            throw Error(r(405));
        var c = o != null && o.hydratedSources || null
          , d = !1
          , h = ""
          , x = jm;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0),
        o.identifierPrefix !== void 0 && (h = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (x = o.onRecoverableError)),
        s = Pm(s, null, n, 1, o ?? null, d, !1, h, x),
        n[Gn] = s.current,
        Wi(n),
        c)
            for (n = 0; n < c.length; n++)
                o = c[n],
                d = o._getVersion,
                d = d(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new el(s)
    }
    ,
    Xt.render = function(n, s, o) {
        if (!tl(s))
            throw Error(r(200));
        return nl(null, n, s, !1, o)
    }
    ,
    Xt.unmountComponentAtNode = function(n) {
        if (!tl(n))
            throw Error(r(40));
        return n._reactRootContainer ? (ss(function() {
            nl(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[Gn] = null
            })
        }),
        !0) : !1
    }
    ,
    Xt.unstable_batchedUpdates = $u,
    Xt.unstable_renderSubtreeIntoContainer = function(n, s, o, c) {
        if (!tl(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return nl(n, s, o, !1, c)
    }
    ,
    Xt.version = "18.3.1-next-f1338f8080-20240426",
    Xt
}
var zm;
function iv() {
    if (zm)
        return td.exports;
    zm = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
                console.error(t)
            }
    }
    return e(),
    td.exports = AS(),
    td.exports
}
var Vm;
function OS() {
    if (Vm)
        return sl;
    Vm = 1;
    var e = iv();
    return sl.createRoot = e.createRoot,
    sl.hydrateRoot = e.hydrateRoot,
    sl
}
var IS = OS();
function MS(e, t) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var r, i, a, l, u = [], p = "", m = e.split("/");
    for (m[0] || m.shift(); a = m.shift(); )
        r = a[0],
        r === "*" ? (u.push(r),
        p += a[1] === "?" ? "(?:/(.*))?" : "/(.*)") : r === ":" ? (i = a.indexOf("?", 1),
        l = a.indexOf(".", 1),
        u.push(a.substring(1, ~i ? i : ~l ? l : a.length)),
        p += ~i && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~l && (p += (~i ? "?" : "") + "\\" + a.substring(l))) : p += "/" + a;
    return {
        keys: u,
        pattern: new RegExp("^" + p + (t ? "(?=$|/)" : "/?$"),"i")
    }
}
var y = Bl();
const _e = sv(y)
  , ov = kS({
    __proto__: null,
    default: _e
}, [y]);
var sd = {
    exports: {}
}
  , id = {};
var Bm;
function DS() {
    if (Bm)
        return id;
    Bm = 1;
    var e = Bl();
    function t(w, S) {
        return w === S && (w !== 0 || 1 / w === 1 / S) || w !== w && S !== S
    }
    var r = typeof Object.is == "function" ? Object.is : t
      , i = e.useState
      , a = e.useEffect
      , l = e.useLayoutEffect
      , u = e.useDebugValue;
    function p(w, S) {
        var k = S()
          , j = i({
            inst: {
                value: k,
                getSnapshot: S
            }
        })
          , b = j[0].inst
          , C = j[1];
        return l(function() {
            b.value = k,
            b.getSnapshot = S,
            m(b) && C({
                inst: b
            })
        }, [w, k, S]),
        a(function() {
            return m(b) && C({
                inst: b
            }),
            w(function() {
                m(b) && C({
                    inst: b
                })
            })
        }, [w]),
        u(k),
        k
    }
    function m(w) {
        var S = w.getSnapshot;
        w = w.value;
        try {
            var k = S();
            return !r(w, k)
        } catch {
            return !0
        }
    }
    function g(w, S) {
        return S()
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : p;
    return id.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v,
    id
}
var Um;
function LS() {
    return Um || (Um = 1,
    sd.exports = DS()),
    sd.exports
}
var FS = LS();
const zS = ov.useInsertionEffect
  , VS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , BS = VS ? y.useLayoutEffect : y.useEffect
  , US = zS || BS
  , av = e => {
    const t = y.useRef([e, (...r) => t[0](...r)]).current;
    return US( () => {
        t[0] = e
    }
    ),
    t[1]
}
  , $S = "popstate"
  , of = "pushState"
  , af = "replaceState"
  , qS = "hashchange"
  , $m = [$S, of, af, qS]
  , HS = e => {
    for (const t of $m)
        addEventListener(t, e);
    return () => {
        for (const t of $m)
            removeEventListener(t, e)
    }
}
  , lv = (e, t) => FS.useSyncExternalStore(HS, e, t)
  , WS = () => location.search
  , QS = ({ssrSearch: e=""}={}) => lv(WS, () => e)
  , qm = () => location.pathname
  , ZS = ({ssrPath: e}={}) => lv(qm, e ? () => e : qm)
  , KS = (e, {replace: t=!1, state: r=null}={}) => history[t ? af : of](r, "", e)
  , GS = (e={}) => [ZS(e), KS]
  , Hm = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Hm] > "u") {
    for (const e of [of, af]) {
        const t = history[e];
        history[e] = function() {
            const r = t.apply(this, arguments)
              , i = new Event(e);
            return i.arguments = arguments,
            dispatchEvent(i),
            r
        }
    }
    Object.defineProperty(window, Hm, {
        value: !0
    })
}
const XS = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
  , cv = (e="") => e === "/" ? "" : e
  , YS = (e, t) => e[0] === "~" ? e.slice(1) : cv(t) + e
  , JS = (e="", t) => XS(Wm(cv(e)), Wm(t))
  , Wm = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , uv = {
    hook: GS,
    searchHook: QS,
    parser: MS,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
}
  , dv = y.createContext(uv)
  , Ul = () => y.useContext(dv)
  , fv = {}
  , pv = y.createContext(fv)
  , e1 = () => y.useContext(pv)
  , lf = e => {
    const [t,r] = e.hook(e);
    return [JS(e.base, t), av( (i, a) => r(YS(i, e.base), a))]
}
  , hv = (e, t, r, i) => {
    const {pattern: a, keys: l} = t instanceof RegExp ? {
        keys: !1,
        pattern: t
    } : e(t || "*", i)
      , u = a.exec(r) || []
      , [p,...m] = u;
    return p !== void 0 ? [!0, ( () => {
        const g = l !== !1 ? Object.fromEntries(l.map( (w, S) => [w, m[S]])) : u.groups;
        let v = {
            ...m
        };
        return g && Object.assign(v, g),
        v
    }
    )(), ...i ? [p] : []] : [!1, null]
}
  , t1 = ({children: e, ...t}) => {
    const r = Ul()
      , i = t.hook ? uv : r;
    let a = i;
    const [l,u] = t.ssrPath?.split("?") ?? [];
    u && (t.ssrSearch = u,
    t.ssrPath = l),
    t.hrefs = t.hrefs ?? t.hook?.hrefs;
    let p = y.useRef({})
      , m = p.current
      , g = m;
    for (let v in i) {
        const w = v === "base" ? i[v] + (t[v] || "") : t[v] || i[v];
        m === g && w !== g[v] && (p.current = g = {
            ...g
        }),
        g[v] = w,
        w !== i[v] && (a = g)
    }
    return y.createElement(dv.Provider, {
        value: a,
        children: e
    })
}
  , Qm = ({children: e, component: t}, r) => t ? y.createElement(t, {
    params: r
}) : typeof e == "function" ? e(r) : e
  , n1 = e => {
    let t = y.useRef(fv)
      , r = t.current;
    for (const i in e)
        e[i] !== r[i] && (r = e);
    return Object.keys(e).length === 0 && (r = e),
    t.current = r
}
  , fo = ({path: e, nest: t, match: r, ...i}) => {
    const a = Ul()
      , [l] = lf(a)
      , [u,p,m] = r ?? hv(a.parser, e, l, t)
      , g = n1({
        ...e1(),
        ...p
    });
    if (!u)
        return null;
    const v = m ? y.createElement(t1, {
        base: m
    }, Qm(i, g)) : Qm(i, g);
    return y.createElement(pv.Provider, {
        value: g,
        children: v
    })
}
  , wo = y.forwardRef( (e, t) => {
    const r = Ul()
      , [i,a] = lf(r)
      , {to: l="", href: u=l, onClick: p, asChild: m, children: g, className: v, replace: w, state: S, ...k} = e
      , j = av(C => {
        C.ctrlKey || C.metaKey || C.altKey || C.shiftKey || C.button !== 0 || (p?.(C),
        C.defaultPrevented || (C.preventDefault(),
        a(u, e)))
    }
    )
      , b = r.hrefs(u[0] === "~" ? u.slice(1) : r.base + u, r);
    return m && y.isValidElement(g) ? y.cloneElement(g, {
        onClick: j,
        href: b
    }) : y.createElement("a", {
        ...k,
        onClick: j,
        href: b,
        className: v?.call ? v(i === u) : v,
        children: g,
        ref: t
    })
}
)
  , mv = e => Array.isArray(e) ? e.flatMap(t => mv(t && t.type === y.Fragment ? t.props.children : t)) : [e]
  , r1 = ({children: e, location: t}) => {
    const r = Ul()
      , [i] = lf(r);
    for (const a of mv(e)) {
        let l = 0;
        if (y.isValidElement(a) && (l = hv(r.parser, a.props.path, t || i, a.props.nest))[0])
            return y.cloneElement(a, {
                match: l
            })
    }
    return null
}
;
var wi = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , hs = typeof window > "u" || "Deno"in globalThis;
function gn() {}
function s1(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Nd(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function gv(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function ai(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Zm(e, t) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: l, queryKey: u, stale: p} = e;
    if (u) {
        if (i) {
            if (t.queryHash !== cf(u, t.options))
                return !1
        } else if (!_o(t.queryKey, u))
            return !1
    }
    if (r !== "all") {
        const m = t.isActive();
        if (r === "active" && !m || r === "inactive" && m)
            return !1
    }
    return !(typeof p == "boolean" && t.isStale() !== p || a && a !== t.state.fetchStatus || l && !l(t))
}
function Km(e, t) {
    const {exact: r, status: i, predicate: a, mutationKey: l} = e;
    if (l) {
        if (!t.options.mutationKey)
            return !1;
        if (r) {
            if (ms(t.options.mutationKey) !== ms(l))
                return !1
        } else if (!_o(t.options.mutationKey, l))
            return !1
    }
    return !(i && t.state.status !== i || a && !a(t))
}
function cf(e, t) {
    return (t?.queryKeyHashFn || ms)(e)
}
function ms(e) {
    return JSON.stringify(e, (t, r) => kd(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function _o(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(r => !_o(e[r], t[r])) : !1
}
function vv(e, t) {
    if (e === t)
        return e;
    const r = Gm(e) && Gm(t);
    if (r || kd(e) && kd(t)) {
        const i = r ? e : Object.keys(e)
          , a = i.length
          , l = r ? t : Object.keys(t)
          , u = l.length
          , p = r ? [] : {};
        let m = 0;
        for (let g = 0; g < u; g++) {
            const v = r ? g : l[g];
            (!r && i.includes(v) || r) && e[v] === void 0 && t[v] === void 0 ? (p[v] = void 0,
            m++) : (p[v] = vv(e[v], t[v]),
            p[v] === e[v] && e[v] !== void 0 && m++)
        }
        return a === u && m === a ? e : p
    }
    return t
}
function xl(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const r in e)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function Gm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function kd(e) {
    if (!Xm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const r = t.prototype;
    return !(!Xm(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Xm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function i1(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Ed(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? vv(e, t) : t
}
function o1(e, t, r=0) {
    const i = [...e, t];
    return r && i.length > r ? i.slice(1) : i
}
function a1(e, t, r=0) {
    const i = [t, ...e];
    return r && i.length > r ? i.slice(0, -1) : i
}
var uf = Symbol();
function yv(e, t) {
    return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === uf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var l1 = class extends wi {
    #e;
    #t;
    #r;
    constructor() {
        super(),
        this.#r = e => {
            if (!hs && window.addEventListener) {
                const t = () => e();
                return window.addEventListener("visibilitychange", t, !1),
                () => {
                    window.removeEventListener("visibilitychange", t)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#r = e,
        this.#t?.(),
        this.#t = e(t => {
            typeof t == "boolean" ? this.setFocused(t) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e,
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(t => {
            t(e)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , df = new l1
  , c1 = class extends wi {
    #e = !0;
    #t;
    #r;
    constructor() {
        super(),
        this.#r = e => {
            if (!hs && window.addEventListener) {
                const t = () => e(!0)
                  , r = () => e(!1);
                return window.addEventListener("online", t, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", t),
                    window.removeEventListener("offline", r)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#r)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#r = e,
        this.#t?.(),
        this.#t = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e,
        this.listeners.forEach(r => {
            r(e)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , wl = new c1;
function Pd() {
    let e, t;
    const r = new Promise( (a, l) => {
        e = a,
        t = l
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        e(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        t(a)
    }
    ,
    r
}
function u1(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function xv(e) {
    return (e ?? "online") === "online" ? wl.isOnline() : !0
}
var wv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function od(e) {
    return e instanceof wv
}
function bv(e) {
    let t = !1, r = 0, i = !1, a;
    const l = Pd()
      , u = b => {
        i || (S(new wv(b)),
        e.abort?.())
    }
      , p = () => {
        t = !0
    }
      , m = () => {
        t = !1
    }
      , g = () => df.isFocused() && (e.networkMode === "always" || wl.isOnline()) && e.canRun()
      , v = () => xv(e.networkMode) && e.canRun()
      , w = b => {
        i || (i = !0,
        e.onSuccess?.(b),
        a?.(),
        l.resolve(b))
    }
      , S = b => {
        i || (i = !0,
        e.onError?.(b),
        a?.(),
        l.reject(b))
    }
      , k = () => new Promise(b => {
        a = C => {
            (i || g()) && b(C)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        a = void 0,
        i || e.onContinue?.()
    }
    )
      , j = () => {
        if (i)
            return;
        let b;
        const C = r === 0 ? e.initialPromise : void 0;
        try {
            b = C ?? e.fn()
        } catch (T) {
            b = Promise.reject(T)
        }
        Promise.resolve(b).then(w).catch(T => {
            if (i)
                return;
            const N = e.retry ?? (hs ? 0 : 3)
              , O = e.retryDelay ?? u1
              , L = typeof O == "function" ? O(r, T) : O
              , V = N === !0 || typeof N == "number" && r < N || typeof N == "function" && N(r, T);
            if (t || !V) {
                S(T);
                return
            }
            r++,
            e.onFail?.(r, T),
            i1(L).then( () => g() ? void 0 : k()).then( () => {
                t ? S(T) : j()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        cancel: u,
        continue: () => (a?.(),
        l),
        cancelRetry: p,
        continueRetry: m,
        canStart: v,
        start: () => (v() ? j() : k().then(j),
        l)
    }
}
function d1() {
    let e = []
      , t = 0
      , r = p => {
        p()
    }
      , i = p => {
        p()
    }
      , a = p => setTimeout(p, 0);
    const l = p => {
        t ? e.push(p) : a( () => {
            r(p)
        }
        )
    }
      , u = () => {
        const p = e;
        e = [],
        p.length && a( () => {
            i( () => {
                p.forEach(m => {
                    r(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: p => {
            let m;
            t++;
            try {
                m = p()
            } finally {
                t--,
                t || u()
            }
            return m
        }
        ,
        batchCalls: p => (...m) => {
            l( () => {
                p(...m)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: p => {
            r = p
        }
        ,
        setBatchNotifyFunction: p => {
            i = p
        }
        ,
        setScheduler: p => {
            a = p
        }
    }
}
var kt = d1()
  , Sv = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Nd(this.gcTime) && (this.#e = setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (hs ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , f1 = class extends Sv {
    #e;
    #t;
    #r;
    #n;
    #o;
    #i;
    constructor(e) {
        super(),
        this.#i = !1,
        this.#o = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#r = e.cache,
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#e = p1(this.options),
        this.state = e.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#n?.promise
    }
    setOptions(e) {
        this.options = {
            ...this.#o,
            ...e
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this)
    }
    setData(e, t) {
        const r = Ed(this.state.data, e, this.options);
        return this.#s({
            data: r,
            type: "success",
            dataUpdatedAt: t?.updatedAt,
            manual: t?.manual
        }),
        r
    }
    setState(e, t) {
        this.#s({
            type: "setState",
            state: e,
            setStateOptions: t
        })
    }
    cancel(e) {
        const t = this.#n?.promise;
        return this.#n?.cancel(e),
        t ? t.then(gn).catch(gn) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(e => kn(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(e=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !gv(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(t => t.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#n?.continue()
    }
    onOnline() {
        this.observers.find(t => t.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#n?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#r.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e),
        this.observers.length || (this.#n && (this.#i ? this.#n.cancel({
            revert: !0
        }) : this.#n.cancelRetry()),
        this.scheduleGc()),
        this.#r.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    fetch(e, t) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && t?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#n)
                return this.#n.continueRetry(),
                this.#n.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const p = this.observers.find(m => m.options.queryFn);
            p && this.setOptions(p.options)
        }
        const r = new AbortController
          , i = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (this.#i = !0,
                r.signal)
            })
        }
          , a = () => {
            const p = yv(this.options, t)
              , m = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return i(m),
            this.#i = !1,
            this.options.persister ? this.options.persister(p, m, this) : p(m)
        }
          , l = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: a
        };
        i(l),
        this.options.behavior?.onFetch(l, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== l.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: l.fetchOptions?.meta
        });
        const u = p => {
            od(p) && p.silent || this.#s({
                type: "error",
                error: p
            }),
            od(p) || (this.#r.config.onError?.(p, this),
            this.#r.config.onSettled?.(this.state.data, p, this)),
            this.scheduleGc()
        }
        ;
        return this.#n = bv({
            initialPromise: t?.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: p => {
                if (p === void 0) {
                    u(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(p)
                } catch (m) {
                    u(m);
                    return
                }
                this.#r.config.onSuccess?.(p, this),
                this.#r.config.onSettled?.(p, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: u,
            onFail: (p, m) => {
                this.#s({
                    type: "failed",
                    failureCount: p,
                    error: m
                })
            }
            ,
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        }),
        this.#n.start()
    }
    #s(e) {
        const t = r => {
            switch (e.type) {
            case "failed":
                return {
                    ...r,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case "pause":
                return {
                    ...r,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...r,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...r,
                    ...Cv(r.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case "success":
                return {
                    ...r,
                    data: e.data,
                    dataUpdateCount: r.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!e.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const i = e.error;
                return od(i) && i.revert && this.#t ? {
                    ...this.#t,
                    fetchStatus: "idle"
                } : {
                    ...r,
                    error: i,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: i,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...r,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...r,
                    ...e.state
                }
            }
        }
        ;
        this.state = t(this.state),
        kt.batch( () => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }
            ),
            this.#r.notify({
                query: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function Cv(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: xv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function p1(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , r = t !== void 0
      , i = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var h1 = class extends wi {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map
    }
    #e;
    build(e, t, r) {
        const i = t.queryKey
          , a = t.queryHash ?? cf(i, t);
        let l = this.get(a);
        return l || (l = new f1({
            cache: this,
            queryKey: i,
            queryHash: a,
            options: e.defaultQueryOptions(t),
            state: r,
            defaultOptions: e.getQueryDefaults(i)
        }),
        this.add(l)),
        l
    }
    add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const t = this.#e.get(e.queryHash);
        t && (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        kt.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.#e.get(e)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(r => Zm(t, r))
    }
    findAll(e={}) {
        const t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter(r => Zm(e, r)) : t
    }
    notify(e) {
        kt.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    onFocus() {
        kt.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        kt.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
  , m1 = class extends Sv {
    #e;
    #t;
    #r;
    constructor(e) {
        super(),
        this.mutationId = e.mutationId,
        this.#t = e.mutationCache,
        this.#e = [],
        this.state = e.state || _v(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#e.includes(e) || (this.#e.push(e),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#e = this.#e.filter(t => t !== e),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#r?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        this.#r = bv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (i, a) => {
                this.#n({
                    type: "failed",
                    failureCount: i,
                    error: a
                })
            }
            ,
            onPause: () => {
                this.#n({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#n({
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const t = this.state.status === "pending"
          , r = !this.#r.canStart();
        try {
            if (!t) {
                this.#n({
                    type: "pending",
                    variables: e,
                    isPaused: r
                }),
                await this.#t.config.onMutate?.(e, this);
                const a = await this.options.onMutate?.(e);
                a !== this.state.context && this.#n({
                    type: "pending",
                    context: a,
                    variables: e,
                    isPaused: r
                })
            }
            const i = await this.#r.start();
            return await this.#t.config.onSuccess?.(i, e, this.state.context, this),
            await this.options.onSuccess?.(i, e, this.state.context),
            await this.#t.config.onSettled?.(i, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(i, null, e, this.state.context),
            this.#n({
                type: "success",
                data: i
            }),
            i
        } catch (i) {
            try {
                throw await this.#t.config.onError?.(i, e, this.state.context, this),
                await this.options.onError?.(i, e, this.state.context),
                await this.#t.config.onSettled?.(void 0, i, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, i, e, this.state.context),
                i
            } finally {
                this.#n({
                    type: "error",
                    error: i
                })
            }
        } finally {
            this.#t.runNext(this)
        }
    }
    #n(e) {
        const t = r => {
            switch (e.type) {
            case "failed":
                return {
                    ...r,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return {
                    ...r,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...r,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...r,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...r,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...r,
                    data: void 0,
                    error: e.error,
                    failureCount: r.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = t(this.state),
        kt.batch( () => {
            this.#e.forEach(r => {
                r.onMutationUpdate(e)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function _v() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var g1 = class extends wi {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map,
        this.#t = Date.now()
    }
    #e;
    #t;
    build(e, t, r) {
        const i = new m1({
            mutationCache: this,
            mutationId: ++this.#t,
            options: e.defaultMutationOptions(t),
            state: r
        });
        return this.add(i),
        i
    }
    add(e) {
        const t = il(e)
          , r = this.#e.get(t) ?? [];
        r.push(e),
        this.#e.set(t, r),
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        const t = il(e);
        if (this.#e.has(t)) {
            const r = this.#e.get(t)?.filter(i => i !== e);
            r && (r.length === 0 ? this.#e.delete(t) : this.#e.set(t, r))
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const t = this.#e.get(il(e))?.find(r => r.state.status === "pending");
        return !t || t === e
    }
    runNext(e) {
        return this.#e.get(il(e))?.find(r => r !== e && r.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        kt.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(e) {
        const t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(r => Km(t, r))
    }
    findAll(e={}) {
        return this.getAll().filter(t => Km(e, t))
    }
    notify(e) {
        kt.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(t => t.state.isPaused);
        return kt.batch( () => Promise.all(e.map(t => t.continue().catch(gn))))
    }
}
;
function il(e) {
    return e.options.scope?.id ?? String(e.mutationId)
}
function Ym(e) {
    return {
        onFetch: (t, r) => {
            const i = t.options
              , a = t.fetchOptions?.meta?.fetchMore?.direction
              , l = t.state.data?.pages || []
              , u = t.state.data?.pageParams || [];
            let p = {
                pages: [],
                pageParams: []
            }
              , m = 0;
            const g = async () => {
                let v = !1;
                const w = j => {
                    Object.defineProperty(j, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , S = yv(t.options, t.fetchOptions)
                  , k = async (j, b, C) => {
                    if (v)
                        return Promise.reject();
                    if (b == null && j.pages.length)
                        return Promise.resolve(j);
                    const T = {
                        queryKey: t.queryKey,
                        pageParam: b,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(T);
                    const N = await S(T)
                      , {maxPages: O} = t.options
                      , L = C ? a1 : o1;
                    return {
                        pages: L(j.pages, N, O),
                        pageParams: L(j.pageParams, b, O)
                    }
                }
                ;
                if (a && l.length) {
                    const j = a === "backward"
                      , b = j ? v1 : Jm
                      , C = {
                        pages: l,
                        pageParams: u
                    }
                      , T = b(i, C);
                    p = await k(C, T, j)
                } else {
                    const j = e ?? l.length;
                    do {
                        const b = m === 0 ? u[0] ?? i.initialPageParam : Jm(i, p);
                        if (m > 0 && b == null)
                            break;
                        p = await k(p, b),
                        m++
                    } while (m < j)
                }
                return p
            }
            ;
            t.options.persister ? t.fetchFn = () => t.options.persister?.(g, {
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, r) : t.fetchFn = g
        }
    }
}
function Jm(e, {pages: t, pageParams: r}) {
    const i = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[i], t, r[i], r) : void 0
}
function v1(e, {pages: t, pageParams: r}) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0
}
var y1 = class {
    #e;
    #t;
    #r;
    #n;
    #o;
    #i;
    #s;
    #a;
    constructor(e={}) {
        this.#e = e.queryCache || new h1,
        this.#t = e.mutationCache || new g1,
        this.#r = e.defaultOptions || {},
        this.#n = new Map,
        this.#o = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#s = df.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#a = wl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(e) {
        return this.#e.findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return this.#t.findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const r = this.defaultQueryOptions(e)
              , i = this.#e.build(this, r);
            return e.revalidateIfStale && i.isStaleByTime(ai(r.staleTime, i)) && this.prefetchQuery(r),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return this.#e.findAll(e).map( ({queryKey: t, state: r}) => {
            const i = r.data;
            return [t, i]
        }
        )
    }
    setQueryData(e, t, r) {
        const i = this.defaultQueryOptions({
            queryKey: e
        })
          , l = this.#e.get(i.queryHash)?.state.data
          , u = s1(t, l);
        if (u !== void 0)
            return this.#e.build(this, i).setData(u, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(e, t, r) {
        return kt.batch( () => this.#e.findAll(e).map( ({queryKey: i}) => [i, this.setQueryData(i, t, r)]))
    }
    getQueryState(e) {
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state
    }
    removeQueries(e) {
        const t = this.#e;
        kt.batch( () => {
            t.findAll(e).forEach(r => {
                t.remove(r)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const r = this.#e
          , i = {
            type: "active",
            ...e
        };
        return kt.batch( () => (r.findAll(e).forEach(a => {
            a.reset()
        }
        ),
        this.refetchQueries(i, t)))
    }
    cancelQueries(e={}, t={}) {
        const r = {
            revert: !0,
            ...t
        }
          , i = kt.batch( () => this.#e.findAll(e).map(a => a.cancel(r)));
        return Promise.all(i).then(gn).catch(gn)
    }
    invalidateQueries(e={}, t={}) {
        return kt.batch( () => {
            if (this.#e.findAll(e).forEach(i => {
                i.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const r = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(r, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const r = {
            ...t,
            cancelRefetch: t?.cancelRefetch ?? !0
        }
          , i = kt.batch( () => this.#e.findAll(e).filter(a => !a.isDisabled()).map(a => {
            let l = a.fetch(void 0, r);
            return r.throwOnError || (l = l.catch(gn)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(i).then(gn)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = this.#e.build(this, t);
        return r.isStaleByTime(ai(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(gn).catch(gn)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Ym(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(gn).catch(gn)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Ym(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return wl.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#r
    }
    setDefaultOptions(e) {
        this.#r = e
    }
    setQueryDefaults(e, t) {
        this.#n.set(ms(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...this.#n.values()];
        let r = {};
        return t.forEach(i => {
            _o(e, i.queryKey) && (r = {
                ...r,
                ...i.defaultOptions
            })
        }
        ),
        r
    }
    setMutationDefaults(e, t) {
        this.#o.set(ms(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...this.#o.values()];
        let r = {};
        return t.forEach(i => {
            _o(e, i.mutationKey) && (r = {
                ...r,
                ...i.defaultOptions
            })
        }
        ),
        r
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...this.#r.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = cf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === uf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#r.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , x1 = class extends wi {
    constructor(e, t) {
        super(),
        this.options = t,
        this.#e = e,
        this.#a = null,
        this.#s = Pd(),
        this.options.experimental_prefetchInRender || this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(t)
    }
    #e;
    #t = void 0;
    #r = void 0;
    #n = void 0;
    #o;
    #i;
    #s;
    #a;
    #m;
    #f;
    #p;
    #c;
    #u;
    #l;
    #h = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        eg(this.#t, this.options) ? this.#d() : this.updateResult(),
        this.#x())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Td(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Td(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#w(),
        this.#b(),
        this.#t.removeObserver(this)
    }
    setOptions(e, t) {
        const r = this.options
          , i = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof kn(this.options.enabled, this.#t) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#S(),
        this.#t.setOptions(this.options),
        r._defaulted && !xl(this.options, r) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const a = this.hasListeners();
        a && tg(this.#t, i, this.options, r) && this.#d(),
        this.updateResult(t),
        a && (this.#t !== i || kn(this.options.enabled, this.#t) !== kn(r.enabled, this.#t) || ai(this.options.staleTime, this.#t) !== ai(r.staleTime, this.#t)) && this.#g();
        const l = this.#v();
        a && (this.#t !== i || kn(this.options.enabled, this.#t) !== kn(r.enabled, this.#t) || l !== this.#l) && this.#y(l)
    }
    getOptimisticResult(e) {
        const t = this.#e.getQueryCache().build(this.#e, e)
          , r = this.createResult(t, e);
        return b1(this, r) && (this.#n = r,
        this.#i = this.options,
        this.#o = this.#t.state),
        r
    }
    getCurrentResult() {
        return this.#n
    }
    trackResult(e, t) {
        const r = {};
        return Object.keys(e).forEach(i => {
            Object.defineProperty(r, i, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(i),
                t?.(i),
                e[i])
            })
        }
        ),
        r
    }
    trackProp(e) {
        this.#h.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const t = this.#e.defaultQueryOptions(e)
          , r = this.#e.getQueryCache().build(this.#e, t);
        return r.fetch().then( () => this.createResult(r, t))
    }
    fetch(e) {
        return this.#d({
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#n))
    }
    #d(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(gn)),
        t
    }
    #g() {
        this.#w();
        const e = ai(this.options.staleTime, this.#t);
        if (hs || this.#n.isStale || !Nd(e))
            return;
        const r = gv(this.#n.dataUpdatedAt, e) + 1;
        this.#c = setTimeout( () => {
            this.#n.isStale || this.updateResult()
        }
        , r)
    }
    #v() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #y(e) {
        this.#b(),
        this.#l = e,
        !(hs || kn(this.options.enabled, this.#t) === !1 || !Nd(this.#l) || this.#l === 0) && (this.#u = setInterval( () => {
            (this.options.refetchIntervalInBackground || df.isFocused()) && this.#d()
        }
        , this.#l))
    }
    #x() {
        this.#g(),
        this.#y(this.#v())
    }
    #w() {
        this.#c && (clearTimeout(this.#c),
        this.#c = void 0)
    }
    #b() {
        this.#u && (clearInterval(this.#u),
        this.#u = void 0)
    }
    createResult(e, t) {
        const r = this.#t
          , i = this.options
          , a = this.#n
          , l = this.#o
          , u = this.#i
          , m = e !== r ? e.state : this.#r
          , {state: g} = e;
        let v = {
            ...g
        }, w = !1, S;
        if (t._optimisticResults) {
            const U = this.hasListeners()
              , le = !U && eg(e, t)
              , he = U && tg(e, r, t, i);
            (le || he) && (v = {
                ...v,
                ...Cv(g.data, e.options)
            }),
            t._optimisticResults === "isRestoring" && (v.fetchStatus = "idle")
        }
        let {error: k, errorUpdatedAt: j, status: b} = v;
        if (t.select && v.data !== void 0)
            if (a && v.data === l?.data && t.select === this.#m)
                S = this.#f;
            else
                try {
                    this.#m = t.select,
                    S = t.select(v.data),
                    S = Ed(a?.data, S, t),
                    this.#f = S,
                    this.#a = null
                } catch (U) {
                    this.#a = U
                }
        else
            S = v.data;
        if (t.placeholderData !== void 0 && S === void 0 && b === "pending") {
            let U;
            if (a?.isPlaceholderData && t.placeholderData === u?.placeholderData)
                U = a.data;
            else if (U = typeof t.placeholderData == "function" ? t.placeholderData(this.#p?.state.data, this.#p) : t.placeholderData,
            t.select && U !== void 0)
                try {
                    U = t.select(U),
                    this.#a = null
                } catch (le) {
                    this.#a = le
                }
            U !== void 0 && (b = "success",
            S = Ed(a?.data, U, t),
            w = !0)
        }
        this.#a && (k = this.#a,
        S = this.#f,
        j = Date.now(),
        b = "error");
        const C = v.fetchStatus === "fetching"
          , T = b === "pending"
          , N = b === "error"
          , O = T && C
          , L = S !== void 0
          , Z = {
            status: b,
            fetchStatus: v.fetchStatus,
            isPending: T,
            isSuccess: b === "success",
            isError: N,
            isInitialLoading: O,
            isLoading: O,
            data: S,
            dataUpdatedAt: v.dataUpdatedAt,
            error: k,
            errorUpdatedAt: j,
            failureCount: v.fetchFailureCount,
            failureReason: v.fetchFailureReason,
            errorUpdateCount: v.errorUpdateCount,
            isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
            isFetchedAfterMount: v.dataUpdateCount > m.dataUpdateCount || v.errorUpdateCount > m.errorUpdateCount,
            isFetching: C,
            isRefetching: C && !T,
            isLoadingError: N && !L,
            isPaused: v.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: N && L,
            isStale: ff(e, t),
            refetch: this.refetch,
            promise: this.#s
        };
        if (this.options.experimental_prefetchInRender) {
            const U = ye => {
                Z.status === "error" ? ye.reject(Z.error) : Z.data !== void 0 && ye.resolve(Z.data)
            }
              , le = () => {
                const ye = this.#s = Z.promise = Pd();
                U(ye)
            }
              , he = this.#s;
            switch (he.status) {
            case "pending":
                e.queryHash === r.queryHash && U(he);
                break;
            case "fulfilled":
                (Z.status === "error" || Z.data !== he.value) && le();
                break;
            case "rejected":
                (Z.status !== "error" || Z.error !== he.reason) && le();
                break
            }
        }
        return Z
    }
    updateResult(e) {
        const t = this.#n
          , r = this.createResult(this.#t, this.options);
        if (this.#o = this.#t.state,
        this.#i = this.options,
        this.#o.data !== void 0 && (this.#p = this.#t),
        xl(r, t))
            return;
        this.#n = r;
        const i = {}
          , a = () => {
            if (!t)
                return !0;
            const {notifyOnChangeProps: l} = this.options
              , u = typeof l == "function" ? l() : l;
            if (u === "all" || !u && !this.#h.size)
                return !0;
            const p = new Set(u ?? this.#h);
            return this.options.throwOnError && p.add("error"),
            Object.keys(this.#n).some(m => {
                const g = m;
                return this.#n[g] !== t[g] && p.has(g)
            }
            )
        }
        ;
        e?.listeners !== !1 && a() && (i.listeners = !0),
        this.#C({
            ...i,
            ...e
        })
    }
    #S() {
        const e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t)
            return;
        const t = this.#t;
        this.#t = e,
        this.#r = e.state,
        this.hasListeners() && (t?.removeObserver(this),
        e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#x()
    }
    #C(e) {
        kt.batch( () => {
            e.listeners && this.listeners.forEach(t => {
                t(this.#n)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
;
function w1(e, t) {
    return kn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}
function eg(e, t) {
    return w1(e, t) || e.state.data !== void 0 && Td(e, t, t.refetchOnMount)
}
function Td(e, t, r) {
    if (kn(t.enabled, e) !== !1) {
        const i = typeof r == "function" ? r(e) : r;
        return i === "always" || i !== !1 && ff(e, t)
    }
    return !1
}
function tg(e, t, r, i) {
    return (e !== t || kn(i.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && ff(e, r)
}
function ff(e, t) {
    return kn(t.enabled, e) !== !1 && e.isStaleByTime(ai(t.staleTime, e))
}
function b1(e, t) {
    return !xl(e.getCurrentResult(), t)
}
var S1 = class extends wi {
    #e;
    #t = void 0;
    #r;
    #n;
    constructor(t, r) {
        super(),
        this.#e = t,
        this.setOptions(r),
        this.bindMethods(),
        this.#o()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(t) {
        const r = this.options;
        this.options = this.#e.defaultMutationOptions(t),
        xl(this.options, r) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#r,
            observer: this
        }),
        r?.mutationKey && this.options.mutationKey && ms(r.mutationKey) !== ms(this.options.mutationKey) ? this.reset() : this.#r?.state.status === "pending" && this.#r.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#r?.removeObserver(this)
    }
    onMutationUpdate(t) {
        this.#o(),
        this.#i(t)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#r?.removeObserver(this),
        this.#r = void 0,
        this.#o(),
        this.#i()
    }
    mutate(t, r) {
        return this.#n = r,
        this.#r?.removeObserver(this),
        this.#r = this.#e.getMutationCache().build(this.#e, this.options),
        this.#r.addObserver(this),
        this.#r.execute(t)
    }
    #o() {
        const t = this.#r?.state ?? _v();
        this.#t = {
            ...t,
            isPending: t.status === "pending",
            isSuccess: t.status === "success",
            isError: t.status === "error",
            isIdle: t.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #i(t) {
        kt.batch( () => {
            if (this.#n && this.hasListeners()) {
                const r = this.#t.variables
                  , i = this.#t.context;
                t?.type === "success" ? (this.#n.onSuccess?.(t.data, r, i),
                this.#n.onSettled?.(t.data, null, r, i)) : t?.type === "error" && (this.#n.onError?.(t.error, r, i),
                this.#n.onSettled?.(void 0, t.error, r, i))
            }
            this.listeners.forEach(r => {
                r(this.#t)
            }
            )
        }
        )
    }
}
  , Nv = y.createContext(void 0)
  , kv = e => {
    const t = y.useContext(Nv);
    if (!t)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t
}
  , C1 = ({client: e, children: t}) => (y.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
f.jsx(Nv.Provider, {
    value: e,
    children: t
}))
  , Ev = y.createContext(!1)
  , _1 = () => y.useContext(Ev);
Ev.Provider;
function N1() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var k1 = y.createContext(N1())
  , E1 = () => y.useContext(k1);
function Pv(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
function jd() {}
var P1 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1))
}
  , T1 = e => {
    y.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , j1 = ({result: e, errorResetBoundary: t, throwOnError: r, query: i}) => e.isError && !t.isReset() && !e.isFetching && i && Pv(r, [e.error, i])
  , R1 = e => {
    e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3),
    typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)))
}
  , A1 = (e, t) => e.isLoading && e.isFetching && !t
  , O1 = (e, t) => e?.suspense && t.isPending
  , ng = (e, t, r) => t.fetchOptimistic(e).catch( () => {
    r.clearReset()
}
);
function I1(e, t, r) {
    const i = kv()
      , a = _1()
      , l = E1()
      , u = i.defaultQueryOptions(e);
    i.getDefaultOptions().queries?._experimental_beforeQuery?.(u),
    u._optimisticResults = a ? "isRestoring" : "optimistic",
    R1(u),
    P1(u, l),
    T1(l);
    const p = !i.getQueryCache().get(u.queryHash)
      , [m] = y.useState( () => new t(i,u))
      , g = m.getOptimisticResult(u);
    if (y.useSyncExternalStore(y.useCallback(v => {
        const w = a ? jd : m.subscribe(kt.batchCalls(v));
        return m.updateResult(),
        w
    }
    , [m, a]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    y.useEffect( () => {
        m.setOptions(u, {
            listeners: !1
        })
    }
    , [u, m]),
    O1(u, g))
        throw ng(u, m, l);
    if (j1({
        result: g,
        errorResetBoundary: l,
        throwOnError: u.throwOnError,
        query: i.getQueryCache().get(u.queryHash)
    }))
        throw g.error;
    return i.getDefaultOptions().queries?._experimental_afterQuery?.(u, g),
    u.experimental_prefetchInRender && !hs && A1(g, a) && (p ? ng(u, m, l) : i.getQueryCache().get(u.queryHash)?.promise)?.catch(jd).finally( () => {
        m.updateResult()
    }
    ),
    u.notifyOnChangeProps ? g : m.trackResult(g)
}
function Tv(e, t) {
    return I1(e, x1)
}
function jv(e, t) {
    const r = kv()
      , [i] = y.useState( () => new S1(r,e));
    y.useEffect( () => {
        i.setOptions(e)
    }
    , [i, e]);
    const a = y.useSyncExternalStore(y.useCallback(u => i.subscribe(kt.batchCalls(u)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult())
      , l = y.useCallback( (u, p) => {
        i.mutate(u, p).catch(jd)
    }
    , [i]);
    if (a.error && Pv(i.options.throwOnError, [a.error]))
        throw a.error;
    return {
        ...a,
        mutate: l,
        mutateAsync: a.mutate
    }
}
async function Rv(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
async function Av(e, t, r) {
    const i = await fetch(t, {
        method: e,
        headers: r ? {
            "Content-Type": "application/json"
        } : {},
        body: r ? JSON.stringify(r) : void 0,
        credentials: "include"
    });
    return await Rv(i),
    i
}
const M1 = ({on401: e}) => async ({queryKey: t}) => {
    const r = await fetch(t.join("/"), {
        credentials: "include"
    });
    return await Rv(r),
    await r.json()
}
  , Ov = new y1({
    defaultOptions: {
        queries: {
            queryFn: M1({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , D1 = 1
  , L1 = 1e6;
let ad = 0;
function F1() {
    return ad = (ad + 1) % Number.MAX_SAFE_INTEGER,
    ad.toString()
}
const ld = new Map
  , rg = e => {
    if (ld.has(e))
        return;
    const t = setTimeout( () => {
        ld.delete(e),
        bo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , L1);
    ld.set(e, t)
}
  , z1 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, D1)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(r => r.id === t.toast.id ? {
                ...r,
                ...t.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = t;
            return r ? rg(r) : e.toasts.forEach(i => {
                rg(i.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(r => r.id !== t.toastId)
        }
    }
}
  , pl = [];
let hl = {
    toasts: []
};
function bo(e) {
    hl = z1(hl, e),
    pl.forEach(t => {
        t(hl)
    }
    )
}
function V1({...e}) {
    const t = F1()
      , r = a => bo({
        type: "UPDATE_TOAST",
        toast: {
            ...a,
            id: t
        }
    })
      , i = () => bo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return bo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: t,
        dismiss: i,
        update: r
    }
}
function pf() {
    const [e,t] = y.useState(hl);
    return y.useEffect( () => (pl.push(t),
    () => {
        const r = pl.indexOf(t);
        r > -1 && pl.splice(r, 1)
    }
    ), [e]),
    {
        ...e,
        toast: V1,
        dismiss: r => bo({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
var bi = iv();
const B1 = sv(bi);
function Ve(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(a) {
        if (e?.(a),
        r === !1 || !a.defaultPrevented)
            return t?.(a)
    }
}
function sg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Iv(...e) {
    return t => {
        let r = !1;
        const i = e.map(a => {
            const l = sg(a, t);
            return !r && typeof l == "function" && (r = !0),
            l
        }
        );
        if (r)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const l = i[a];
                    typeof l == "function" ? l() : sg(e[a], null)
                }
            }
    }
}
function it(...e) {
    return y.useCallback(Iv(...e), e)
}
function fr(e, t=[]) {
    let r = [];
    function i(l, u) {
        const p = y.createContext(u)
          , m = r.length;
        r = [...r, u];
        const g = w => {
            const {scope: S, children: k, ...j} = w
              , b = S?.[e]?.[m] || p
              , C = y.useMemo( () => j, Object.values(j));
            return f.jsx(b.Provider, {
                value: C,
                children: k
            })
        }
        ;
        g.displayName = l + "Provider";
        function v(w, S) {
            const k = S?.[e]?.[m] || p
              , j = y.useContext(k);
            if (j)
                return j;
            if (u !== void 0)
                return u;
            throw new Error(`\`${w}\` must be used within \`${l}\``)
        }
        return [g, v]
    }
    const a = () => {
        const l = r.map(u => y.createContext(u));
        return function(p) {
            const m = p?.[e] || l;
            return y.useMemo( () => ({
                [`__scope${e}`]: {
                    ...p,
                    [e]: m
                }
            }), [p, m])
        }
    }
    ;
    return a.scopeName = e,
    [i, U1(a, ...t)]
}
function U1(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const i = e.map(a => ({
            useScope: a(),
            scopeName: a.scopeName
        }));
        return function(l) {
            const u = i.reduce( (p, {useScope: m, scopeName: g}) => {
                const w = m(l)[`__scope${g}`];
                return {
                    ...p,
                    ...w
                }
            }
            , {});
            return y.useMemo( () => ({
                [`__scope${t.scopeName}`]: u
            }), [u])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
function No(e) {
    const t = $1(e)
      , r = y.forwardRef( (i, a) => {
        const {children: l, ...u} = i
          , p = y.Children.toArray(l)
          , m = p.find(H1);
        if (m) {
            const g = m.props.children
              , v = p.map(w => w === m ? y.Children.count(g) > 1 ? y.Children.only(null) : y.isValidElement(g) ? g.props.children : null : w);
            return f.jsx(t, {
                ...u,
                ref: a,
                children: y.isValidElement(g) ? y.cloneElement(g, void 0, v) : null
            })
        }
        return f.jsx(t, {
            ...u,
            ref: a,
            children: l
        })
    }
    );
    return r.displayName = `${e}.Slot`,
    r
}
var Mv = No("Slot");
function $1(e) {
    const t = y.forwardRef( (r, i) => {
        const {children: a, ...l} = r;
        if (y.isValidElement(a)) {
            const u = Q1(a)
              , p = W1(l, a.props);
            return a.type !== y.Fragment && (p.ref = i ? Iv(i, u) : u),
            y.cloneElement(a, p)
        }
        return y.Children.count(a) > 1 ? y.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Dv = Symbol("radix.slottable");
function q1(e) {
    const t = ({children: r}) => f.jsx(f.Fragment, {
        children: r
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Dv,
    t
}
function H1(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Dv
}
function W1(e, t) {
    const r = {
        ...t
    };
    for (const i in t) {
        const a = e[i]
          , l = t[i];
        /^on[A-Z]/.test(i) ? a && l ? r[i] = (...p) => {
            l(...p),
            a(...p)
        }
        : a && (r[i] = a) : i === "style" ? r[i] = {
            ...a,
            ...l
        } : i === "className" && (r[i] = [a, l].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
function Q1(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function hf(e) {
    const t = e + "CollectionProvider"
      , [r,i] = fr(t)
      , [a,l] = r(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , u = b => {
        const {scope: C, children: T} = b
          , N = _e.useRef(null)
          , O = _e.useRef(new Map).current;
        return f.jsx(a, {
            scope: C,
            itemMap: O,
            collectionRef: N,
            children: T
        })
    }
    ;
    u.displayName = t;
    const p = e + "CollectionSlot"
      , m = No(p)
      , g = _e.forwardRef( (b, C) => {
        const {scope: T, children: N} = b
          , O = l(p, T)
          , L = it(C, O.collectionRef);
        return f.jsx(m, {
            ref: L,
            children: N
        })
    }
    );
    g.displayName = p;
    const v = e + "CollectionItemSlot"
      , w = "data-radix-collection-item"
      , S = No(v)
      , k = _e.forwardRef( (b, C) => {
        const {scope: T, children: N, ...O} = b
          , L = _e.useRef(null)
          , V = it(C, L)
          , Z = l(v, T);
        return _e.useEffect( () => (Z.itemMap.set(L, {
            ref: L,
            ...O
        }),
        () => {
            Z.itemMap.delete(L)
        }
        )),
        f.jsx(S, {
            [w]: "",
            ref: V,
            children: N
        })
    }
    );
    k.displayName = v;
    function j(b) {
        const C = l(e + "CollectionConsumer", b);
        return _e.useCallback( () => {
            const N = C.collectionRef.current;
            if (!N)
                return [];
            const O = Array.from(N.querySelectorAll(`[${w}]`));
            return Array.from(C.itemMap.values()).sort( (Z, U) => O.indexOf(Z.ref.current) - O.indexOf(U.ref.current))
        }
        , [C.collectionRef, C.itemMap])
    }
    return [{
        Provider: u,
        Slot: g,
        ItemSlot: k
    }, j, i]
}
var Z1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Ue = Z1.reduce( (e, t) => {
    const r = No(`Primitive.${t}`)
      , i = y.forwardRef( (a, l) => {
        const {asChild: u, ...p} = a
          , m = u ? r : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        f.jsx(m, {
            ...p,
            ref: l
        })
    }
    );
    return i.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: i
    }
}
, {});
function Lv(e, t) {
    e && bi.flushSync( () => e.dispatchEvent(t))
}
function Yt(e) {
    const t = y.useRef(e);
    return y.useEffect( () => {
        t.current = e
    }
    ),
    y.useMemo( () => (...r) => t.current?.(...r), [])
}
function K1(e, t=globalThis?.document) {
    const r = Yt(e);
    y.useEffect( () => {
        const i = a => {
            a.key === "Escape" && r(a)
        }
        ;
        return t.addEventListener("keydown", i, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [r, t])
}
var G1 = "DismissableLayer", Rd = "dismissableLayer.update", X1 = "dismissableLayer.pointerDownOutside", Y1 = "dismissableLayer.focusOutside", ig, Fv = y.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), $l = y.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: l, onInteractOutside: u, onDismiss: p, ...m} = e
      , g = y.useContext(Fv)
      , [v,w] = y.useState(null)
      , S = v?.ownerDocument ?? globalThis?.document
      , [,k] = y.useState({})
      , j = it(t, U => w(U))
      , b = Array.from(g.layers)
      , [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1)
      , T = b.indexOf(C)
      , N = v ? b.indexOf(v) : -1
      , O = g.layersWithOutsidePointerEventsDisabled.size > 0
      , L = N >= T
      , V = eC(U => {
        const le = U.target
          , he = [...g.branches].some(ye => ye.contains(le));
        !L || he || (a?.(U),
        u?.(U),
        U.defaultPrevented || p?.())
    }
    , S)
      , Z = tC(U => {
        const le = U.target;
        [...g.branches].some(ye => ye.contains(le)) || (l?.(U),
        u?.(U),
        U.defaultPrevented || p?.())
    }
    , S);
    return K1(U => {
        N === g.layers.size - 1 && (i?.(U),
        !U.defaultPrevented && p && (U.preventDefault(),
        p()))
    }
    , S),
    y.useEffect( () => {
        if (v)
            return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (ig = S.body.style.pointerEvents,
            S.body.style.pointerEvents = "none"),
            g.layersWithOutsidePointerEventsDisabled.add(v)),
            g.layers.add(v),
            og(),
            () => {
                r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = ig)
            }
    }
    , [v, S, r, g]),
    y.useEffect( () => () => {
        v && (g.layers.delete(v),
        g.layersWithOutsidePointerEventsDisabled.delete(v),
        og())
    }
    , [v, g]),
    y.useEffect( () => {
        const U = () => k({});
        return document.addEventListener(Rd, U),
        () => document.removeEventListener(Rd, U)
    }
    , []),
    f.jsx(Ue.div, {
        ...m,
        ref: j,
        style: {
            pointerEvents: O ? L ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Ve(e.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Ve(e.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Ve(e.onPointerDownCapture, V.onPointerDownCapture)
    })
}
);
$l.displayName = G1;
var J1 = "DismissableLayerBranch"
  , zv = y.forwardRef( (e, t) => {
    const r = y.useContext(Fv)
      , i = y.useRef(null)
      , a = it(t, i);
    return y.useEffect( () => {
        const l = i.current;
        if (l)
            return r.branches.add(l),
            () => {
                r.branches.delete(l)
            }
    }
    , [r.branches]),
    f.jsx(Ue.div, {
        ...e,
        ref: a
    })
}
);
zv.displayName = J1;
function eC(e, t=globalThis?.document) {
    const r = Yt(e)
      , i = y.useRef(!1)
      , a = y.useRef( () => {}
    );
    return y.useEffect( () => {
        const l = p => {
            if (p.target && !i.current) {
                let m = function() {
                    Vv(X1, r, g, {
                        discrete: !0
                    })
                };
                const g = {
                    originalEvent: p
                };
                p.pointerType === "touch" ? (t.removeEventListener("click", a.current),
                a.current = m,
                t.addEventListener("click", a.current, {
                    once: !0
                })) : m()
            } else
                t.removeEventListener("click", a.current);
            i.current = !1
        }
          , u = window.setTimeout( () => {
            t.addEventListener("pointerdown", l)
        }
        , 0);
        return () => {
            window.clearTimeout(u),
            t.removeEventListener("pointerdown", l),
            t.removeEventListener("click", a.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => i.current = !0
    }
}
function tC(e, t=globalThis?.document) {
    const r = Yt(e)
      , i = y.useRef(!1);
    return y.useEffect( () => {
        const a = l => {
            l.target && !i.current && Vv(Y1, r, {
                originalEvent: l
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", a),
        () => t.removeEventListener("focusin", a)
    }
    , [t, r]),
    {
        onFocusCapture: () => i.current = !0,
        onBlurCapture: () => i.current = !1
    }
}
function og() {
    const e = new CustomEvent(Rd);
    document.dispatchEvent(e)
}
function Vv(e, t, r, {discrete: i}) {
    const a = r.originalEvent.target
      , l = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && a.addEventListener(e, t, {
        once: !0
    }),
    i ? Lv(a, l) : a.dispatchEvent(l)
}
var nC = $l
  , rC = zv
  , bt = globalThis?.document ? y.useLayoutEffect : () => {}
  , sC = "Portal"
  , mf = y.forwardRef( (e, t) => {
    const {container: r, ...i} = e
      , [a,l] = y.useState(!1);
    bt( () => l(!0), []);
    const u = r || a && globalThis?.document?.body;
    return u ? B1.createPortal(f.jsx(Ue.div, {
        ...i,
        ref: t
    }), u) : null
}
);
mf.displayName = sC;
function iC(e, t) {
    return y.useReducer( (r, i) => t[r][i] ?? r, e)
}
var ql = e => {
    const {present: t, children: r} = e
      , i = oC(t)
      , a = typeof r == "function" ? r({
        present: i.isPresent
    }) : y.Children.only(r)
      , l = it(i.ref, aC(a));
    return typeof r == "function" || i.isPresent ? y.cloneElement(a, {
        ref: l
    }) : null
}
;
ql.displayName = "Presence";
function oC(e) {
    const [t,r] = y.useState()
      , i = y.useRef({})
      , a = y.useRef(e)
      , l = y.useRef("none")
      , u = e ? "mounted" : "unmounted"
      , [p,m] = iC(u, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return y.useEffect( () => {
        const g = ol(i.current);
        l.current = p === "mounted" ? g : "none"
    }
    , [p]),
    bt( () => {
        const g = i.current
          , v = a.current;
        if (v !== e) {
            const S = l.current
              , k = ol(g);
            e ? m("MOUNT") : k === "none" || g?.display === "none" ? m("UNMOUNT") : m(v && S !== k ? "ANIMATION_OUT" : "UNMOUNT"),
            a.current = e
        }
    }
    , [e, m]),
    bt( () => {
        if (t) {
            let g;
            const v = t.ownerDocument.defaultView ?? window
              , w = k => {
                const b = ol(i.current).includes(k.animationName);
                if (k.target === t && b && (m("ANIMATION_END"),
                !a.current)) {
                    const C = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    g = v.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C)
                    }
                    )
                }
            }
              , S = k => {
                k.target === t && (l.current = ol(i.current))
            }
            ;
            return t.addEventListener("animationstart", S),
            t.addEventListener("animationcancel", w),
            t.addEventListener("animationend", w),
            () => {
                v.clearTimeout(g),
                t.removeEventListener("animationstart", S),
                t.removeEventListener("animationcancel", w),
                t.removeEventListener("animationend", w)
            }
        } else
            m("ANIMATION_END")
    }
    , [t, m]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(p),
        ref: y.useCallback(g => {
            g && (i.current = getComputedStyle(g)),
            r(g)
        }
        , [])
    }
}
function ol(e) {
    return e?.animationName || "none"
}
function aC(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function gs({prop: e, defaultProp: t, onChange: r= () => {}
}) {
    const [i,a] = lC({
        defaultProp: t,
        onChange: r
    })
      , l = e !== void 0
      , u = l ? e : i
      , p = Yt(r)
      , m = y.useCallback(g => {
        if (l) {
            const w = typeof g == "function" ? g(e) : g;
            w !== e && p(w)
        } else
            a(g)
    }
    , [l, e, a, p]);
    return [u, m]
}
function lC({defaultProp: e, onChange: t}) {
    const r = y.useState(e)
      , [i] = r
      , a = y.useRef(i)
      , l = Yt(t);
    return y.useEffect( () => {
        a.current !== i && (l(i),
        a.current = i)
    }
    , [i, a, l]),
    r
}
var cC = "VisuallyHidden"
  , $o = y.forwardRef( (e, t) => f.jsx(Ue.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
$o.displayName = cC;
var uC = $o
  , gf = "ToastProvider"
  , [vf,dC,fC] = hf("Toast")
  , [Bv] = fr("Toast", [fC])
  , [pC,Hl] = Bv(gf)
  , Uv = e => {
    const {__scopeToast: t, label: r="Notification", duration: i=5e3, swipeDirection: a="right", swipeThreshold: l=50, children: u} = e
      , [p,m] = y.useState(null)
      , [g,v] = y.useState(0)
      , w = y.useRef(!1)
      , S = y.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${gf}\`. Expected non-empty \`string\`.`),
    f.jsx(vf.Provider, {
        scope: t,
        children: f.jsx(pC, {
            scope: t,
            label: r,
            duration: i,
            swipeDirection: a,
            swipeThreshold: l,
            toastCount: g,
            viewport: p,
            onViewportChange: m,
            onToastAdd: y.useCallback( () => v(k => k + 1), []),
            onToastRemove: y.useCallback( () => v(k => k - 1), []),
            isFocusedToastEscapeKeyDownRef: w,
            isClosePausedRef: S,
            children: u
        })
    })
}
;
Uv.displayName = gf;
var $v = "ToastViewport"
  , hC = ["F8"]
  , Ad = "toast.viewportPause"
  , Od = "toast.viewportResume"
  , qv = y.forwardRef( (e, t) => {
    const {__scopeToast: r, hotkey: i=hC, label: a="Notifications ({hotkey})", ...l} = e
      , u = Hl($v, r)
      , p = dC(r)
      , m = y.useRef(null)
      , g = y.useRef(null)
      , v = y.useRef(null)
      , w = y.useRef(null)
      , S = it(t, w, u.onViewportChange)
      , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , j = u.toastCount > 0;
    y.useEffect( () => {
        const C = T => {
            i.length !== 0 && i.every(O => T[O] || T.code === O) && w.current?.focus()
        }
        ;
        return document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
    }
    , [i]),
    y.useEffect( () => {
        const C = m.current
          , T = w.current;
        if (j && C && T) {
            const N = () => {
                if (!u.isClosePausedRef.current) {
                    const Z = new CustomEvent(Ad);
                    T.dispatchEvent(Z),
                    u.isClosePausedRef.current = !0
                }
            }
              , O = () => {
                if (u.isClosePausedRef.current) {
                    const Z = new CustomEvent(Od);
                    T.dispatchEvent(Z),
                    u.isClosePausedRef.current = !1
                }
            }
              , L = Z => {
                !C.contains(Z.relatedTarget) && O()
            }
              , V = () => {
                C.contains(document.activeElement) || O()
            }
            ;
            return C.addEventListener("focusin", N),
            C.addEventListener("focusout", L),
            C.addEventListener("pointermove", N),
            C.addEventListener("pointerleave", V),
            window.addEventListener("blur", N),
            window.addEventListener("focus", O),
            () => {
                C.removeEventListener("focusin", N),
                C.removeEventListener("focusout", L),
                C.removeEventListener("pointermove", N),
                C.removeEventListener("pointerleave", V),
                window.removeEventListener("blur", N),
                window.removeEventListener("focus", O)
            }
        }
    }
    , [j, u.isClosePausedRef]);
    const b = y.useCallback( ({tabbingDirection: C}) => {
        const N = p().map(O => {
            const L = O.ref.current
              , V = [L, ...EC(L)];
            return C === "forwards" ? V : V.reverse()
        }
        );
        return (C === "forwards" ? N.reverse() : N).flat()
    }
    , [p]);
    return y.useEffect( () => {
        const C = w.current;
        if (C) {
            const T = N => {
                const O = N.altKey || N.ctrlKey || N.metaKey;
                if (N.key === "Tab" && !O) {
                    const V = document.activeElement
                      , Z = N.shiftKey;
                    if (N.target === C && Z) {
                        g.current?.focus();
                        return
                    }
                    const he = b({
                        tabbingDirection: Z ? "backwards" : "forwards"
                    })
                      , ye = he.findIndex(Se => Se === V);
                    cd(he.slice(ye + 1)) ? N.preventDefault() : Z ? g.current?.focus() : v.current?.focus()
                }
            }
            ;
            return C.addEventListener("keydown", T),
            () => C.removeEventListener("keydown", T)
        }
    }
    , [p, b]),
    f.jsxs(rC, {
        ref: m,
        role: "region",
        "aria-label": a.replace("{hotkey}", k),
        tabIndex: -1,
        style: {
            pointerEvents: j ? void 0 : "none"
        },
        children: [j && f.jsx(Id, {
            ref: g,
            onFocusFromOutsideViewport: () => {
                const C = b({
                    tabbingDirection: "forwards"
                });
                cd(C)
            }
        }), f.jsx(vf.Slot, {
            scope: r,
            children: f.jsx(Ue.ol, {
                tabIndex: -1,
                ...l,
                ref: S
            })
        }), j && f.jsx(Id, {
            ref: v,
            onFocusFromOutsideViewport: () => {
                const C = b({
                    tabbingDirection: "backwards"
                });
                cd(C)
            }
        })]
    })
}
);
qv.displayName = $v;
var Hv = "ToastFocusProxy"
  , Id = y.forwardRef( (e, t) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: i, ...a} = e
      , l = Hl(Hv, r);
    return f.jsx($o, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: u => {
            const p = u.relatedTarget;
            !l.viewport?.contains(p) && i()
        }
    })
}
);
Id.displayName = Hv;
var Wl = "Toast"
  , mC = "toast.swipeStart"
  , gC = "toast.swipeMove"
  , vC = "toast.swipeCancel"
  , yC = "toast.swipeEnd"
  , Wv = y.forwardRef( (e, t) => {
    const {forceMount: r, open: i, defaultOpen: a, onOpenChange: l, ...u} = e
      , [p=!0,m] = gs({
        prop: i,
        defaultProp: a,
        onChange: l
    });
    return f.jsx(ql, {
        present: r || p,
        children: f.jsx(bC, {
            open: p,
            ...u,
            ref: t,
            onClose: () => m(!1),
            onPause: Yt(e.onPause),
            onResume: Yt(e.onResume),
            onSwipeStart: Ve(e.onSwipeStart, g => {
                g.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Ve(e.onSwipeMove, g => {
                const {x: v, y: w} = g.detail.delta;
                g.currentTarget.setAttribute("data-swipe", "move"),
                g.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${v}px`),
                g.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w}px`)
            }
            ),
            onSwipeCancel: Ve(e.onSwipeCancel, g => {
                g.currentTarget.setAttribute("data-swipe", "cancel"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Ve(e.onSwipeEnd, g => {
                const {x: v, y: w} = g.detail.delta;
                g.currentTarget.setAttribute("data-swipe", "end"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                g.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${v}px`),
                g.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w}px`),
                m(!1)
            }
            )
        })
    })
}
);
Wv.displayName = Wl;
var [xC,wC] = Bv(Wl, {
    onClose() {}
})
  , bC = y.forwardRef( (e, t) => {
    const {__scopeToast: r, type: i="foreground", duration: a, open: l, onClose: u, onEscapeKeyDown: p, onPause: m, onResume: g, onSwipeStart: v, onSwipeMove: w, onSwipeCancel: S, onSwipeEnd: k, ...j} = e
      , b = Hl(Wl, r)
      , [C,T] = y.useState(null)
      , N = it(t, q => T(q))
      , O = y.useRef(null)
      , L = y.useRef(null)
      , V = a || b.duration
      , Z = y.useRef(0)
      , U = y.useRef(V)
      , le = y.useRef(0)
      , {onToastAdd: he, onToastRemove: ye} = b
      , Se = Yt( () => {
        C?.contains(document.activeElement) && b.viewport?.focus(),
        u()
    }
    )
      , K = y.useCallback(q => {
        !q || q === 1 / 0 || (window.clearTimeout(le.current),
        Z.current = new Date().getTime(),
        le.current = window.setTimeout(Se, q))
    }
    , [Se]);
    y.useEffect( () => {
        const q = b.viewport;
        if (q) {
            const xe = () => {
                K(U.current),
                g?.()
            }
              , ie = () => {
                const ce = new Date().getTime() - Z.current;
                U.current = U.current - ce,
                window.clearTimeout(le.current),
                m?.()
            }
            ;
            return q.addEventListener(Ad, ie),
            q.addEventListener(Od, xe),
            () => {
                q.removeEventListener(Ad, ie),
                q.removeEventListener(Od, xe)
            }
        }
    }
    , [b.viewport, V, m, g, K]),
    y.useEffect( () => {
        l && !b.isClosePausedRef.current && K(V)
    }
    , [l, V, b.isClosePausedRef, K]),
    y.useEffect( () => (he(),
    () => ye()), [he, ye]);
    const ne = y.useMemo( () => C ? Jv(C) : null, [C]);
    return b.viewport ? f.jsxs(f.Fragment, {
        children: [ne && f.jsx(SC, {
            __scopeToast: r,
            role: "status",
            "aria-live": i === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: ne
        }), f.jsx(xC, {
            scope: r,
            onClose: Se,
            children: bi.createPortal(f.jsx(vf.ItemSlot, {
                scope: r,
                children: f.jsx(nC, {
                    asChild: !0,
                    onEscapeKeyDown: Ve(p, () => {
                        b.isFocusedToastEscapeKeyDownRef.current || Se(),
                        b.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: f.jsx(Ue.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": l ? "open" : "closed",
                        "data-swipe-direction": b.swipeDirection,
                        ...j,
                        ref: N,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Ve(e.onKeyDown, q => {
                            q.key === "Escape" && (p?.(q.nativeEvent),
                            q.nativeEvent.defaultPrevented || (b.isFocusedToastEscapeKeyDownRef.current = !0,
                            Se()))
                        }
                        ),
                        onPointerDown: Ve(e.onPointerDown, q => {
                            q.button === 0 && (O.current = {
                                x: q.clientX,
                                y: q.clientY
                            })
                        }
                        ),
                        onPointerMove: Ve(e.onPointerMove, q => {
                            if (!O.current)
                                return;
                            const xe = q.clientX - O.current.x
                              , ie = q.clientY - O.current.y
                              , ce = !!L.current
                              , z = ["left", "right"].includes(b.swipeDirection)
                              , Y = ["left", "up"].includes(b.swipeDirection) ? Math.min : Math.max
                              , J = z ? Y(0, xe) : 0
                              , R = z ? 0 : Y(0, ie)
                              , $ = q.pointerType === "touch" ? 10 : 2
                              , Ne = {
                                x: J,
                                y: R
                            }
                              , Pe = {
                                originalEvent: q,
                                delta: Ne
                            };
                            ce ? (L.current = Ne,
                            al(gC, w, Pe, {
                                discrete: !1
                            })) : ag(Ne, b.swipeDirection, $) ? (L.current = Ne,
                            al(mC, v, Pe, {
                                discrete: !1
                            }),
                            q.target.setPointerCapture(q.pointerId)) : (Math.abs(xe) > $ || Math.abs(ie) > $) && (O.current = null)
                        }
                        ),
                        onPointerUp: Ve(e.onPointerUp, q => {
                            const xe = L.current
                              , ie = q.target;
                            if (ie.hasPointerCapture(q.pointerId) && ie.releasePointerCapture(q.pointerId),
                            L.current = null,
                            O.current = null,
                            xe) {
                                const ce = q.currentTarget
                                  , z = {
                                    originalEvent: q,
                                    delta: xe
                                };
                                ag(xe, b.swipeDirection, b.swipeThreshold) ? al(yC, k, z, {
                                    discrete: !0
                                }) : al(vC, S, z, {
                                    discrete: !0
                                }),
                                ce.addEventListener("click", Y => Y.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), b.viewport)
        })]
    }) : null
}
)
  , SC = e => {
    const {__scopeToast: t, children: r, ...i} = e
      , a = Hl(Wl, t)
      , [l,u] = y.useState(!1)
      , [p,m] = y.useState(!1);
    return NC( () => u(!0)),
    y.useEffect( () => {
        const g = window.setTimeout( () => m(!0), 1e3);
        return () => window.clearTimeout(g)
    }
    , []),
    p ? null : f.jsx(mf, {
        asChild: !0,
        children: f.jsx($o, {
            ...i,
            children: l && f.jsxs(f.Fragment, {
                children: [a.label, " ", r]
            })
        })
    })
}
  , CC = "ToastTitle"
  , Qv = y.forwardRef( (e, t) => {
    const {__scopeToast: r, ...i} = e;
    return f.jsx(Ue.div, {
        ...i,
        ref: t
    })
}
);
Qv.displayName = CC;
var _C = "ToastDescription"
  , Zv = y.forwardRef( (e, t) => {
    const {__scopeToast: r, ...i} = e;
    return f.jsx(Ue.div, {
        ...i,
        ref: t
    })
}
);
Zv.displayName = _C;
var Kv = "ToastAction"
  , Gv = y.forwardRef( (e, t) => {
    const {altText: r, ...i} = e;
    return r.trim() ? f.jsx(Yv, {
        altText: r,
        asChild: !0,
        children: f.jsx(yf, {
            ...i,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Kv}\`. Expected non-empty \`string\`.`),
    null)
}
);
Gv.displayName = Kv;
var Xv = "ToastClose"
  , yf = y.forwardRef( (e, t) => {
    const {__scopeToast: r, ...i} = e
      , a = wC(Xv, r);
    return f.jsx(Yv, {
        asChild: !0,
        children: f.jsx(Ue.button, {
            type: "button",
            ...i,
            ref: t,
            onClick: Ve(e.onClick, a.onClose)
        })
    })
}
);
yf.displayName = Xv;
var Yv = y.forwardRef( (e, t) => {
    const {__scopeToast: r, altText: i, ...a} = e;
    return f.jsx(Ue.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...a,
        ref: t
    })
}
);
function Jv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(i => {
        if (i.nodeType === i.TEXT_NODE && i.textContent && t.push(i.textContent),
        kC(i)) {
            const a = i.ariaHidden || i.hidden || i.style.display === "none"
              , l = i.dataset.radixToastAnnounceExclude === "";
            if (!a)
                if (l) {
                    const u = i.dataset.radixToastAnnounceAlt;
                    u && t.push(u)
                } else
                    t.push(...Jv(i))
        }
    }
    ),
    t
}
function al(e, t, r, {discrete: i}) {
    const a = r.originalEvent.currentTarget
      , l = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    t && a.addEventListener(e, t, {
        once: !0
    }),
    i ? Lv(a, l) : a.dispatchEvent(l)
}
var ag = (e, t, r=0) => {
    const i = Math.abs(e.x)
      , a = Math.abs(e.y)
      , l = i > a;
    return t === "left" || t === "right" ? l && i > r : !l && a > r
}
;
function NC(e= () => {}
) {
    const t = Yt(e);
    bt( () => {
        let r = 0
          , i = 0;
        return r = window.requestAnimationFrame( () => i = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(i)
        }
    }
    , [t])
}
function kC(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function EC(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const a = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function cd(e) {
    const t = document.activeElement;
    return e.some(r => r === t ? !0 : (r.focus(),
    document.activeElement !== t))
}
var PC = Uv
  , ey = qv
  , ty = Wv
  , ny = Qv
  , ry = Zv
  , sy = Gv
  , iy = yf;
function oy(e) {
    var t, r, i = "";
    if (typeof e == "string" || typeof e == "number")
        i += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++)
                e[t] && (r = oy(e[t])) && (i && (i += " "),
                i += r)
        } else
            for (r in e)
                e[r] && (i && (i += " "),
                i += r);
    return i
}
function ay() {
    for (var e, t, r = 0, i = "", a = arguments.length; r < a; r++)
        (e = arguments[r]) && (t = oy(e)) && (i && (i += " "),
        i += t);
    return i
}
const lg = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , cg = ay
  , Ql = (e, t) => r => {
    var i;
    if (t?.variants == null)
        return cg(e, r?.class, r?.className);
    const {variants: a, defaultVariants: l} = t
      , u = Object.keys(a).map(g => {
        const v = r?.[g]
          , w = l?.[g];
        if (v === null)
            return null;
        const S = lg(v) || lg(w);
        return a[g][S]
    }
    )
      , p = r && Object.entries(r).reduce( (g, v) => {
        let[w,S] = v;
        return S === void 0 || (g[w] = S),
        g
    }
    , {})
      , m = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (g, v) => {
        let {class: w, className: S, ...k} = v;
        return Object.entries(k).every(j => {
            let[b,C] = j;
            return Array.isArray(C) ? C.includes({
                ...l,
                ...p
            }[b]) : {
                ...l,
                ...p
            }[b] === C
        }
        ) ? [...g, w, S] : g
    }
    , []);
    return cg(e, u, m, r?.class, r?.className)
}
;
const TC = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ly = (...e) => e.filter( (t, r, i) => !!t && i.indexOf(t) === r).join(" ");
var jC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const RC = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: l, iconNode: u, ...p}, m) => y.createElement("svg", {
    ref: m,
    ...jC,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: i ? Number(r) * 24 / Number(t) : r,
    className: ly("lucide", a),
    ...p
}, [...u.map( ([g,v]) => y.createElement(g, v)), ...Array.isArray(l) ? l : [l]]));
const Ge = (e, t) => {
    const r = y.forwardRef( ({className: i, ...a}, l) => y.createElement(RC, {
        ref: l,
        iconNode: t,
        className: ly(`lucide-${TC(e)}`, i),
        ...a
    }));
    return r.displayName = `${e}`,
    r
}
;
const xf = Ge("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
const AC = Ge("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
const OC = Ge("Bike", [["circle", {
    cx: "18.5",
    cy: "17.5",
    r: "3.5",
    key: "15x4ox"
}], ["circle", {
    cx: "5.5",
    cy: "17.5",
    r: "3.5",
    key: "1noe27"
}], ["circle", {
    cx: "15",
    cy: "5",
    r: "1",
    key: "19l28e"
}], ["path", {
    d: "M12 17.5V14l-3-3 4-3 2 3h2",
    key: "1npguv"
}]]);
const IC = Ge("Car", [["path", {
    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
    key: "5owen"
}], ["circle", {
    cx: "7",
    cy: "17",
    r: "2",
    key: "u2ysq9"
}], ["path", {
    d: "M9 17h6",
    key: "r8uit2"
}], ["circle", {
    cx: "17",
    cy: "17",
    r: "2",
    key: "axvx0g"
}]]);
const cy = Ge("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
const wf = Ge("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
const MC = Ge("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
const DC = Ge("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
const Ys = Ge("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
const uy = Ge("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
const LC = Ge("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
const dy = Ge("Cookie", [["path", {
    d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
    key: "laymnq"
}], ["path", {
    d: "M8.5 8.5v.01",
    key: "ue8clq"
}], ["path", {
    d: "M16 15.5v.01",
    key: "14dtrp"
}], ["path", {
    d: "M12 12v.01",
    key: "u5ubse"
}], ["path", {
    d: "M11 17v.01",
    key: "1hyl5a"
}], ["path", {
    d: "M7 14v.01",
    key: "uct60s"
}]]);
const fy = Ge("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
const FC = Ge("FileCheck", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m9 15 2 2 4-4",
    key: "1grp1n"
}]]);
const zC = Ge("FileSearch", [["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
    key: "ms7g94"
}], ["path", {
    d: "m9 18-1.5-1.5",
    key: "1j6qii"
}], ["circle", {
    cx: "5",
    cy: "14",
    r: "3",
    key: "ufru5t"
}]]);
const VC = Ge("HeartPulse", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}], ["path", {
    d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
    key: "1uw2ng"
}]]);
const BC = Ge("Link", [["path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    key: "1cjeqo"
}], ["path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    key: "19qd67"
}]]);
const UC = Ge("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
const py = Ge("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
const $C = Ge("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
const qC = Ge("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
const HC = Ge("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
const bl = Ge("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
const WC = Ge("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
const QC = Ge("Save", [["path", {
    d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    key: "1c8476"
}], ["path", {
    d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
    key: "1ydtos"
}], ["path", {
    d: "M7 3v4a1 1 0 0 0 1 1h7",
    key: "t51u73"
}]]);
const ZC = Ge("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
const Ss = Ge("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
const Md = Ge("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
const KC = Ge("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
const hy = Ge("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
const GC = Ge("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
const my = Ge("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , bf = "-"
  , XC = e => {
    const t = JC(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = e;
    return {
        getClassGroupId: u => {
            const p = u.split(bf);
            return p[0] === "" && p.length !== 1 && p.shift(),
            gy(p, t) || YC(u)
        }
        ,
        getConflictingClassGroupIds: (u, p) => {
            const m = r[u] || [];
            return p && i[u] ? [...m, ...i[u]] : m
        }
    }
}
  , gy = (e, t) => {
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , i = t.nextPart.get(r)
      , a = i ? gy(e.slice(1), i) : void 0;
    if (a)
        return a;
    if (t.validators.length === 0)
        return;
    const l = e.join(bf);
    return t.validators.find( ({validator: u}) => u(l))?.classGroupId
}
  , ug = /^\[(.+)\]$/
  , YC = e => {
    if (ug.test(e)) {
        const t = ug.exec(e)[1]
          , r = t?.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , JC = e => {
    const {theme: t, prefix: r} = e
      , i = {
        nextPart: new Map,
        validators: []
    };
    return t_(Object.entries(e.classGroups), r).forEach( ([l,u]) => {
        Dd(u, i, l, t)
    }
    ),
    i
}
  , Dd = (e, t, r, i) => {
    e.forEach(a => {
        if (typeof a == "string") {
            const l = a === "" ? t : dg(t, a);
            l.classGroupId = r;
            return
        }
        if (typeof a == "function") {
            if (e_(a)) {
                Dd(a(i), t, r, i);
                return
            }
            t.validators.push({
                validator: a,
                classGroupId: r
            });
            return
        }
        Object.entries(a).forEach( ([l,u]) => {
            Dd(u, dg(t, l), r, i)
        }
        )
    }
    )
}
  , dg = (e, t) => {
    let r = e;
    return t.split(bf).forEach(i => {
        r.nextPart.has(i) || r.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(i)
    }
    ),
    r
}
  , e_ = e => e.isThemeGetter
  , t_ = (e, t) => t ? e.map( ([r,i]) => {
    const a = i.map(l => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map( ([u,p]) => [t + u, p])) : l);
    return [r, a]
}
) : e
  , n_ = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , i = new Map;
    const a = (l, u) => {
        r.set(l, u),
        t++,
        t > e && (t = 0,
        i = r,
        r = new Map)
    }
    ;
    return {
        get(l) {
            let u = r.get(l);
            if (u !== void 0)
                return u;
            if ((u = i.get(l)) !== void 0)
                return a(l, u),
                u
        },
        set(l, u) {
            r.has(l) ? r.set(l, u) : a(l, u)
        }
    }
}
  , vy = "!"
  , r_ = e => {
    const {separator: t, experimentalParseClassName: r} = e
      , i = t.length === 1
      , a = t[0]
      , l = t.length
      , u = p => {
        const m = [];
        let g = 0, v = 0, w;
        for (let C = 0; C < p.length; C++) {
            let T = p[C];
            if (g === 0) {
                if (T === a && (i || p.slice(C, C + l) === t)) {
                    m.push(p.slice(v, C)),
                    v = C + l;
                    continue
                }
                if (T === "/") {
                    w = C;
                    continue
                }
            }
            T === "[" ? g++ : T === "]" && g--
        }
        const S = m.length === 0 ? p : p.substring(v)
          , k = S.startsWith(vy)
          , j = k ? S.substring(1) : S
          , b = w && w > v ? w - v : void 0;
        return {
            modifiers: m,
            hasImportantModifier: k,
            baseClassName: j,
            maybePostfixModifierPosition: b
        }
    }
    ;
    return r ? p => r({
        className: p,
        parseClassName: u
    }) : u
}
  , s_ = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let r = [];
    return e.forEach(i => {
        i[0] === "[" ? (t.push(...r.sort(), i),
        r = []) : r.push(i)
    }
    ),
    t.push(...r.sort()),
    t
}
  , i_ = e => ({
    cache: n_(e.cacheSize),
    parseClassName: r_(e),
    ...XC(e)
})
  , o_ = /\s+/
  , a_ = (e, t) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a} = t
      , l = []
      , u = e.trim().split(o_);
    let p = "";
    for (let m = u.length - 1; m >= 0; m -= 1) {
        const g = u[m]
          , {modifiers: v, hasImportantModifier: w, baseClassName: S, maybePostfixModifierPosition: k} = r(g);
        let j = !!k
          , b = i(j ? S.substring(0, k) : S);
        if (!b) {
            if (!j) {
                p = g + (p.length > 0 ? " " + p : p);
                continue
            }
            if (b = i(S),
            !b) {
                p = g + (p.length > 0 ? " " + p : p);
                continue
            }
            j = !1
        }
        const C = s_(v).join(":")
          , T = w ? C + vy : C
          , N = T + b;
        if (l.includes(N))
            continue;
        l.push(N);
        const O = a(b, j);
        for (let L = 0; L < O.length; ++L) {
            const V = O[L];
            l.push(T + V)
        }
        p = g + (p.length > 0 ? " " + p : p)
    }
    return p
}
;
function l_() {
    let e = 0, t, r, i = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = yy(t)) && (i && (i += " "),
        i += r);
    return i
}
const yy = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let i = 0; i < e.length; i++)
        e[i] && (t = yy(e[i])) && (r && (r += " "),
        r += t);
    return r
}
;
function c_(e, ...t) {
    let r, i, a, l = u;
    function u(m) {
        const g = t.reduce( (v, w) => w(v), e());
        return r = i_(g),
        i = r.cache.get,
        a = r.cache.set,
        l = p,
        p(m)
    }
    function p(m) {
        const g = i(m);
        if (g)
            return g;
        const v = a_(m, r);
        return a(m, v),
        v
    }
    return function() {
        return l(l_.apply(null, arguments))
    }
}
const st = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , xy = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , u_ = /^\d+\/\d+$/
  , d_ = new Set(["px", "full", "screen"])
  , f_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , p_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , h_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , m_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , g_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , sr = e => li(e) || d_.has(e) || u_.test(e)
  , Ir = e => Si(e, "length", __)
  , li = e => !!e && !Number.isNaN(Number(e))
  , ud = e => Si(e, "number", li)
  , po = e => !!e && Number.isInteger(Number(e))
  , v_ = e => e.endsWith("%") && li(e.slice(0, -1))
  , Le = e => xy.test(e)
  , Mr = e => f_.test(e)
  , y_ = new Set(["length", "size", "percentage"])
  , x_ = e => Si(e, y_, wy)
  , w_ = e => Si(e, "position", wy)
  , b_ = new Set(["image", "url"])
  , S_ = e => Si(e, b_, k_)
  , C_ = e => Si(e, "", N_)
  , ho = () => !0
  , Si = (e, t, r) => {
    const i = xy.exec(e);
    return i ? i[1] ? typeof t == "string" ? i[1] === t : t.has(i[1]) : r(i[2]) : !1
}
  , __ = e => p_.test(e) && !h_.test(e)
  , wy = () => !1
  , N_ = e => m_.test(e)
  , k_ = e => g_.test(e)
  , E_ = () => {
    const e = st("colors")
      , t = st("spacing")
      , r = st("blur")
      , i = st("brightness")
      , a = st("borderColor")
      , l = st("borderRadius")
      , u = st("borderSpacing")
      , p = st("borderWidth")
      , m = st("contrast")
      , g = st("grayscale")
      , v = st("hueRotate")
      , w = st("invert")
      , S = st("gap")
      , k = st("gradientColorStops")
      , j = st("gradientColorStopPositions")
      , b = st("inset")
      , C = st("margin")
      , T = st("opacity")
      , N = st("padding")
      , O = st("saturate")
      , L = st("scale")
      , V = st("sepia")
      , Z = st("skew")
      , U = st("space")
      , le = st("translate")
      , he = () => ["auto", "contain", "none"]
      , ye = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Se = () => ["auto", Le, t]
      , K = () => [Le, t]
      , ne = () => ["", sr, Ir]
      , q = () => ["auto", li, Le]
      , xe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , ie = () => ["solid", "dashed", "dotted", "double", "none"]
      , ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , Y = () => ["", "0", Le]
      , J = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , R = () => [li, Le];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ho],
            spacing: [sr, Ir],
            blur: ["none", "", Mr, Le],
            brightness: R(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Mr, Le],
            borderSpacing: K(),
            borderWidth: ne(),
            contrast: R(),
            grayscale: Y(),
            hueRotate: R(),
            invert: Y(),
            gap: K(),
            gradientColorStops: [e],
            gradientColorStopPositions: [v_, Ir],
            inset: Se(),
            margin: Se(),
            opacity: R(),
            padding: K(),
            saturate: R(),
            scale: R(),
            sepia: Y(),
            skew: R(),
            space: K(),
            translate: K()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Le]
            }],
            container: ["container"],
            columns: [{
                columns: [Mr]
            }],
            "break-after": [{
                "break-after": J()
            }],
            "break-before": [{
                "break-before": J()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...xe(), Le]
            }],
            overflow: [{
                overflow: ye()
            }],
            "overflow-x": [{
                "overflow-x": ye()
            }],
            "overflow-y": [{
                "overflow-y": ye()
            }],
            overscroll: [{
                overscroll: he()
            }],
            "overscroll-x": [{
                "overscroll-x": he()
            }],
            "overscroll-y": [{
                "overscroll-y": he()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [b]
            }],
            "inset-x": [{
                "inset-x": [b]
            }],
            "inset-y": [{
                "inset-y": [b]
            }],
            start: [{
                start: [b]
            }],
            end: [{
                end: [b]
            }],
            top: [{
                top: [b]
            }],
            right: [{
                right: [b]
            }],
            bottom: [{
                bottom: [b]
            }],
            left: [{
                left: [b]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", po, Le]
            }],
            basis: [{
                basis: Se()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Le]
            }],
            grow: [{
                grow: Y()
            }],
            shrink: [{
                shrink: Y()
            }],
            order: [{
                order: ["first", "last", "none", po, Le]
            }],
            "grid-cols": [{
                "grid-cols": [ho]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", po, Le]
                }, Le]
            }],
            "col-start": [{
                "col-start": q()
            }],
            "col-end": [{
                "col-end": q()
            }],
            "grid-rows": [{
                "grid-rows": [ho]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [po, Le]
                }, Le]
            }],
            "row-start": [{
                "row-start": q()
            }],
            "row-end": [{
                "row-end": q()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Le]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Le]
            }],
            gap: [{
                gap: [S]
            }],
            "gap-x": [{
                "gap-x": [S]
            }],
            "gap-y": [{
                "gap-y": [S]
            }],
            "justify-content": [{
                justify: ["normal", ...z()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...z(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...z(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [N]
            }],
            px: [{
                px: [N]
            }],
            py: [{
                py: [N]
            }],
            ps: [{
                ps: [N]
            }],
            pe: [{
                pe: [N]
            }],
            pt: [{
                pt: [N]
            }],
            pr: [{
                pr: [N]
            }],
            pb: [{
                pb: [N]
            }],
            pl: [{
                pl: [N]
            }],
            m: [{
                m: [C]
            }],
            mx: [{
                mx: [C]
            }],
            my: [{
                my: [C]
            }],
            ms: [{
                ms: [C]
            }],
            me: [{
                me: [C]
            }],
            mt: [{
                mt: [C]
            }],
            mr: [{
                mr: [C]
            }],
            mb: [{
                mb: [C]
            }],
            ml: [{
                ml: [C]
            }],
            "space-x": [{
                "space-x": [U]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [U]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Le, t]
            }],
            "min-w": [{
                "min-w": [Le, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Le, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Mr]
                }, Mr]
            }],
            h: [{
                h: [Le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Le, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Mr, Ir]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ud]
            }],
            "font-family": [{
                font: [ho]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Le]
            }],
            "line-clamp": [{
                "line-clamp": ["none", li, ud]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sr, Le]
            }],
            "list-image": [{
                "list-image": ["none", Le]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Le]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [T]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [T]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ie(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", sr, Ir]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", sr, Le]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: K()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Le]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", Le]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [T]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...xe(), w_]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", x_]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, S_]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [j]
            }],
            "gradient-via-pos": [{
                via: [j]
            }],
            "gradient-to-pos": [{
                to: [j]
            }],
            "gradient-from": [{
                from: [k]
            }],
            "gradient-via": [{
                via: [k]
            }],
            "gradient-to": [{
                to: [k]
            }],
            rounded: [{
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
            }],
            "border-w": [{
                border: [p]
            }],
            "border-w-x": [{
                "border-x": [p]
            }],
            "border-w-y": [{
                "border-y": [p]
            }],
            "border-w-s": [{
                "border-s": [p]
            }],
            "border-w-e": [{
                "border-e": [p]
            }],
            "border-w-t": [{
                "border-t": [p]
            }],
            "border-w-r": [{
                "border-r": [p]
            }],
            "border-w-b": [{
                "border-b": [p]
            }],
            "border-w-l": [{
                "border-l": [p]
            }],
            "border-opacity": [{
                "border-opacity": [T]
            }],
            "border-style": [{
                border: [...ie(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [p]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [p]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [T]
            }],
            "divide-style": [{
                divide: ie()
            }],
            "border-color": [{
                border: [a]
            }],
            "border-color-x": [{
                "border-x": [a]
            }],
            "border-color-y": [{
                "border-y": [a]
            }],
            "border-color-s": [{
                "border-s": [a]
            }],
            "border-color-e": [{
                "border-e": [a]
            }],
            "border-color-t": [{
                "border-t": [a]
            }],
            "border-color-r": [{
                "border-r": [a]
            }],
            "border-color-b": [{
                "border-b": [a]
            }],
            "border-color-l": [{
                "border-l": [a]
            }],
            "divide-color": [{
                divide: [a]
            }],
            "outline-style": [{
                outline: ["", ...ie()]
            }],
            "outline-offset": [{
                "outline-offset": [sr, Le]
            }],
            "outline-w": [{
                outline: [sr, Ir]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: ne()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [T]
            }],
            "ring-offset-w": [{
                "ring-offset": [sr, Ir]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Mr, C_]
            }],
            "shadow-color": [{
                shadow: [ho]
            }],
            opacity: [{
                opacity: [T]
            }],
            "mix-blend": [{
                "mix-blend": [...ce(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": ce()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [m]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Mr, Le]
            }],
            grayscale: [{
                grayscale: [g]
            }],
            "hue-rotate": [{
                "hue-rotate": [v]
            }],
            invert: [{
                invert: [w]
            }],
            saturate: [{
                saturate: [O]
            }],
            sepia: [{
                sepia: [V]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [m]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [g]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [v]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [w]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [T]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [O]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [V]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [u]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [u]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [u]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Le]
            }],
            duration: [{
                duration: R()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Le]
            }],
            delay: [{
                delay: R()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Le]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [L]
            }],
            "scale-x": [{
                "scale-x": [L]
            }],
            "scale-y": [{
                "scale-y": [L]
            }],
            rotate: [{
                rotate: [po, Le]
            }],
            "translate-x": [{
                "translate-x": [le]
            }],
            "translate-y": [{
                "translate-y": [le]
            }],
            "skew-x": [{
                "skew-x": [Z]
            }],
            "skew-y": [{
                "skew-y": [Z]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Le]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Le]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": K()
            }],
            "scroll-mx": [{
                "scroll-mx": K()
            }],
            "scroll-my": [{
                "scroll-my": K()
            }],
            "scroll-ms": [{
                "scroll-ms": K()
            }],
            "scroll-me": [{
                "scroll-me": K()
            }],
            "scroll-mt": [{
                "scroll-mt": K()
            }],
            "scroll-mr": [{
                "scroll-mr": K()
            }],
            "scroll-mb": [{
                "scroll-mb": K()
            }],
            "scroll-ml": [{
                "scroll-ml": K()
            }],
            "scroll-p": [{
                "scroll-p": K()
            }],
            "scroll-px": [{
                "scroll-px": K()
            }],
            "scroll-py": [{
                "scroll-py": K()
            }],
            "scroll-ps": [{
                "scroll-ps": K()
            }],
            "scroll-pe": [{
                "scroll-pe": K()
            }],
            "scroll-pt": [{
                "scroll-pt": K()
            }],
            "scroll-pr": [{
                "scroll-pr": K()
            }],
            "scroll-pb": [{
                "scroll-pb": K()
            }],
            "scroll-pl": [{
                "scroll-pl": K()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Le]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [sr, Ir, ud]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , P_ = c_(E_);
function $e(...e) {
    return P_(ay(e))
}
const T_ = PC
  , by = y.forwardRef( ({className: e, ...t}, r) => f.jsx(ey, {
    ref: r,
    className: $e("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
by.displayName = ey.displayName;
const j_ = Ql("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Sy = y.forwardRef( ({className: e, variant: t, ...r}, i) => f.jsx(ty, {
    ref: i,
    className: $e(j_({
        variant: t
    }), e),
    ...r
}));
Sy.displayName = ty.displayName;
const R_ = y.forwardRef( ({className: e, ...t}, r) => f.jsx(sy, {
    ref: r,
    className: $e("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
R_.displayName = sy.displayName;
const Cy = y.forwardRef( ({className: e, ...t}, r) => f.jsx(iy, {
    ref: r,
    className: $e("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: f.jsx(my, {
        className: "h-4 w-4"
    })
}));
Cy.displayName = iy.displayName;
const _y = y.forwardRef( ({className: e, ...t}, r) => f.jsx(ny, {
    ref: r,
    className: $e("text-sm font-semibold", e),
    ...t
}));
_y.displayName = ny.displayName;
const Ny = y.forwardRef( ({className: e, ...t}, r) => f.jsx(ry, {
    ref: r,
    className: $e("text-sm opacity-90", e),
    ...t
}));
Ny.displayName = ry.displayName;
function A_() {
    const {toasts: e} = pf();
    return f.jsxs(T_, {
        children: [e.map(function({id: t, title: r, description: i, action: a, ...l}) {
            return f.jsxs(Sy, {
                ...l,
                children: [f.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && f.jsx(_y, {
                        children: r
                    }), i && f.jsx(Ny, {
                        children: i
                    })]
                }), a, f.jsx(Cy, {})]
            }, t)
        }), f.jsx(by, {})]
    })
}
var O_ = ov[" useId ".trim().toString()] || ( () => {}
)
  , I_ = 0;
function qo(e) {
    const [t,r] = y.useState(O_());
    return bt( () => {
        r(i => i ?? String(I_++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const M_ = ["top", "right", "bottom", "left"]
  , Fr = Math.min
  , sn = Math.max
  , Sl = Math.round
  , ll = Math.floor
  , Un = e => ({
    x: e,
    y: e
})
  , D_ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , L_ = {
    start: "end",
    end: "start"
};
function Ld(e, t, r) {
    return sn(e, Fr(t, r))
}
function cr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ur(e) {
    return e.split("-")[0]
}
function Ci(e) {
    return e.split("-")[1]
}
function Sf(e) {
    return e === "x" ? "y" : "x"
}
function Cf(e) {
    return e === "y" ? "height" : "width"
}
function zr(e) {
    return ["top", "bottom"].includes(ur(e)) ? "y" : "x"
}
function _f(e) {
    return Sf(zr(e))
}
function F_(e, t, r) {
    r === void 0 && (r = !1);
    const i = Ci(e)
      , a = _f(e)
      , l = Cf(a);
    let u = a === "x" ? i === (r ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return t.reference[l] > t.floating[l] && (u = Cl(u)),
    [u, Cl(u)]
}
function z_(e) {
    const t = Cl(e);
    return [Fd(e), t, Fd(t)]
}
function Fd(e) {
    return e.replace(/start|end/g, t => L_[t])
}
function V_(e, t, r) {
    const i = ["left", "right"]
      , a = ["right", "left"]
      , l = ["top", "bottom"]
      , u = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? a : i : t ? i : a;
    case "left":
    case "right":
        return t ? l : u;
    default:
        return []
    }
}
function B_(e, t, r, i) {
    const a = Ci(e);
    let l = V_(ur(e), r === "start", i);
    return a && (l = l.map(u => u + "-" + a),
    t && (l = l.concat(l.map(Fd)))),
    l
}
function Cl(e) {
    return e.replace(/left|right|bottom|top/g, t => D_[t])
}
function U_(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function ky(e) {
    return typeof e != "number" ? U_(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function _l(e) {
    const {x: t, y: r, width: i, height: a} = e;
    return {
        width: i,
        height: a,
        top: r,
        left: t,
        right: t + i,
        bottom: r + a,
        x: t,
        y: r
    }
}
function fg(e, t, r) {
    let {reference: i, floating: a} = e;
    const l = zr(t)
      , u = _f(t)
      , p = Cf(u)
      , m = ur(t)
      , g = l === "y"
      , v = i.x + i.width / 2 - a.width / 2
      , w = i.y + i.height / 2 - a.height / 2
      , S = i[p] / 2 - a[p] / 2;
    let k;
    switch (m) {
    case "top":
        k = {
            x: v,
            y: i.y - a.height
        };
        break;
    case "bottom":
        k = {
            x: v,
            y: i.y + i.height
        };
        break;
    case "right":
        k = {
            x: i.x + i.width,
            y: w
        };
        break;
    case "left":
        k = {
            x: i.x - a.width,
            y: w
        };
        break;
    default:
        k = {
            x: i.x,
            y: i.y
        }
    }
    switch (Ci(t)) {
    case "start":
        k[u] -= S * (r && g ? -1 : 1);
        break;
    case "end":
        k[u] += S * (r && g ? -1 : 1);
        break
    }
    return k
}
const $_ = async (e, t, r) => {
    const {placement: i="bottom", strategy: a="absolute", middleware: l=[], platform: u} = r
      , p = l.filter(Boolean)
      , m = await (u.isRTL == null ? void 0 : u.isRTL(t));
    let g = await u.getElementRects({
        reference: e,
        floating: t,
        strategy: a
    })
      , {x: v, y: w} = fg(g, i, m)
      , S = i
      , k = {}
      , j = 0;
    for (let b = 0; b < p.length; b++) {
        const {name: C, fn: T} = p[b]
          , {x: N, y: O, data: L, reset: V} = await T({
            x: v,
            y: w,
            initialPlacement: i,
            placement: S,
            strategy: a,
            middlewareData: k,
            rects: g,
            platform: u,
            elements: {
                reference: e,
                floating: t
            }
        });
        v = N ?? v,
        w = O ?? w,
        k = {
            ...k,
            [C]: {
                ...k[C],
                ...L
            }
        },
        V && j <= 50 && (j++,
        typeof V == "object" && (V.placement && (S = V.placement),
        V.rects && (g = V.rects === !0 ? await u.getElementRects({
            reference: e,
            floating: t,
            strategy: a
        }) : V.rects),
        {x: v, y: w} = fg(g, S, m)),
        b = -1)
    }
    return {
        x: v,
        y: w,
        placement: S,
        strategy: a,
        middlewareData: k
    }
}
;
async function ko(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: i, y: a, platform: l, rects: u, elements: p, strategy: m} = e
      , {boundary: g="clippingAncestors", rootBoundary: v="viewport", elementContext: w="floating", altBoundary: S=!1, padding: k=0} = cr(t, e)
      , j = ky(k)
      , C = p[S ? w === "floating" ? "reference" : "floating" : w]
      , T = _l(await l.getClippingRect({
        element: (r = await (l.isElement == null ? void 0 : l.isElement(C))) == null || r ? C : C.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(p.floating)),
        boundary: g,
        rootBoundary: v,
        strategy: m
    }))
      , N = w === "floating" ? {
        x: i,
        y: a,
        width: u.floating.width,
        height: u.floating.height
    } : u.reference
      , O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(p.floating))
      , L = await (l.isElement == null ? void 0 : l.isElement(O)) ? await (l.getScale == null ? void 0 : l.getScale(O)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , V = _l(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: p,
        rect: N,
        offsetParent: O,
        strategy: m
    }) : N);
    return {
        top: (T.top - V.top + j.top) / L.y,
        bottom: (V.bottom - T.bottom + j.bottom) / L.y,
        left: (T.left - V.left + j.left) / L.x,
        right: (V.right - T.right + j.right) / L.x
    }
}
const q_ = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: i, placement: a, rects: l, platform: u, elements: p, middlewareData: m} = t
          , {element: g, padding: v=0} = cr(e, t) || {};
        if (g == null)
            return {};
        const w = ky(v)
          , S = {
            x: r,
            y: i
        }
          , k = _f(a)
          , j = Cf(k)
          , b = await u.getDimensions(g)
          , C = k === "y"
          , T = C ? "top" : "left"
          , N = C ? "bottom" : "right"
          , O = C ? "clientHeight" : "clientWidth"
          , L = l.reference[j] + l.reference[k] - S[k] - l.floating[j]
          , V = S[k] - l.reference[k]
          , Z = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(g));
        let U = Z ? Z[O] : 0;
        (!U || !await (u.isElement == null ? void 0 : u.isElement(Z))) && (U = p.floating[O] || l.floating[j]);
        const le = L / 2 - V / 2
          , he = U / 2 - b[j] / 2 - 1
          , ye = Fr(w[T], he)
          , Se = Fr(w[N], he)
          , K = ye
          , ne = U - b[j] - Se
          , q = U / 2 - b[j] / 2 + le
          , xe = Ld(K, q, ne)
          , ie = !m.arrow && Ci(a) != null && q !== xe && l.reference[j] / 2 - (q < K ? ye : Se) - b[j] / 2 < 0
          , ce = ie ? q < K ? q - K : q - ne : 0;
        return {
            [k]: S[k] + ce,
            data: {
                [k]: xe,
                centerOffset: q - xe - ce,
                ...ie && {
                    alignmentOffset: ce
                }
            },
            reset: ie
        }
    }
})
  , H_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, i;
            const {placement: a, middlewareData: l, rects: u, initialPlacement: p, platform: m, elements: g} = t
              , {mainAxis: v=!0, crossAxis: w=!0, fallbackPlacements: S, fallbackStrategy: k="bestFit", fallbackAxisSideDirection: j="none", flipAlignment: b=!0, ...C} = cr(e, t);
            if ((r = l.arrow) != null && r.alignmentOffset)
                return {};
            const T = ur(a)
              , N = zr(p)
              , O = ur(p) === p
              , L = await (m.isRTL == null ? void 0 : m.isRTL(g.floating))
              , V = S || (O || !b ? [Cl(p)] : z_(p))
              , Z = j !== "none";
            !S && Z && V.push(...B_(p, b, j, L));
            const U = [p, ...V]
              , le = await ko(t, C)
              , he = [];
            let ye = ((i = l.flip) == null ? void 0 : i.overflows) || [];
            if (v && he.push(le[T]),
            w) {
                const q = F_(a, u, L);
                he.push(le[q[0]], le[q[1]])
            }
            if (ye = [...ye, {
                placement: a,
                overflows: he
            }],
            !he.every(q => q <= 0)) {
                var Se, K;
                const q = (((Se = l.flip) == null ? void 0 : Se.index) || 0) + 1
                  , xe = U[q];
                if (xe)
                    return {
                        data: {
                            index: q,
                            overflows: ye
                        },
                        reset: {
                            placement: xe
                        }
                    };
                let ie = (K = ye.filter(ce => ce.overflows[0] <= 0).sort( (ce, z) => ce.overflows[1] - z.overflows[1])[0]) == null ? void 0 : K.placement;
                if (!ie)
                    switch (k) {
                    case "bestFit":
                        {
                            var ne;
                            const ce = (ne = ye.filter(z => {
                                if (Z) {
                                    const Y = zr(z.placement);
                                    return Y === N || Y === "y"
                                }
                                return !0
                            }
                            ).map(z => [z.placement, z.overflows.filter(Y => Y > 0).reduce( (Y, J) => Y + J, 0)]).sort( (z, Y) => z[1] - Y[1])[0]) == null ? void 0 : ne[0];
                            ce && (ie = ce);
                            break
                        }
                    case "initialPlacement":
                        ie = p;
                        break
                    }
                if (a !== ie)
                    return {
                        reset: {
                            placement: ie
                        }
                    }
            }
            return {}
        }
    }
};
function pg(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function hg(e) {
    return M_.some(t => e[t] >= 0)
}
const W_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: i="referenceHidden", ...a} = cr(e, t);
            switch (i) {
            case "referenceHidden":
                {
                    const l = await ko(t, {
                        ...a,
                        elementContext: "reference"
                    })
                      , u = pg(l, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: u,
                            referenceHidden: hg(u)
                        }
                    }
                }
            case "escaped":
                {
                    const l = await ko(t, {
                        ...a,
                        altBoundary: !0
                    })
                      , u = pg(l, r.floating);
                    return {
                        data: {
                            escapedOffsets: u,
                            escaped: hg(u)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Q_(e, t) {
    const {placement: r, platform: i, elements: a} = e
      , l = await (i.isRTL == null ? void 0 : i.isRTL(a.floating))
      , u = ur(r)
      , p = Ci(r)
      , m = zr(r) === "y"
      , g = ["left", "top"].includes(u) ? -1 : 1
      , v = l && m ? -1 : 1
      , w = cr(t, e);
    let {mainAxis: S, crossAxis: k, alignmentAxis: j} = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis
    };
    return p && typeof j == "number" && (k = p === "end" ? j * -1 : j),
    m ? {
        x: k * v,
        y: S * g
    } : {
        x: S * g,
        y: k * v
    }
}
const Z_ = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, i;
            const {x: a, y: l, placement: u, middlewareData: p} = t
              , m = await Q_(t, e);
            return u === ((r = p.offset) == null ? void 0 : r.placement) && (i = p.arrow) != null && i.alignmentOffset ? {} : {
                x: a + m.x,
                y: l + m.y,
                data: {
                    ...m,
                    placement: u
                }
            }
        }
    }
}
  , K_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: i, placement: a} = t
              , {mainAxis: l=!0, crossAxis: u=!1, limiter: p={
                fn: C => {
                    let {x: T, y: N} = C;
                    return {
                        x: T,
                        y: N
                    }
                }
            }, ...m} = cr(e, t)
              , g = {
                x: r,
                y: i
            }
              , v = await ko(t, m)
              , w = zr(ur(a))
              , S = Sf(w);
            let k = g[S]
              , j = g[w];
            if (l) {
                const C = S === "y" ? "top" : "left"
                  , T = S === "y" ? "bottom" : "right"
                  , N = k + v[C]
                  , O = k - v[T];
                k = Ld(N, k, O)
            }
            if (u) {
                const C = w === "y" ? "top" : "left"
                  , T = w === "y" ? "bottom" : "right"
                  , N = j + v[C]
                  , O = j - v[T];
                j = Ld(N, j, O)
            }
            const b = p.fn({
                ...t,
                [S]: k,
                [w]: j
            });
            return {
                ...b,
                data: {
                    x: b.x - r,
                    y: b.y - i,
                    enabled: {
                        [S]: l,
                        [w]: u
                    }
                }
            }
        }
    }
}
  , G_ = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: i, placement: a, rects: l, middlewareData: u} = t
              , {offset: p=0, mainAxis: m=!0, crossAxis: g=!0} = cr(e, t)
              , v = {
                x: r,
                y: i
            }
              , w = zr(a)
              , S = Sf(w);
            let k = v[S]
              , j = v[w];
            const b = cr(p, t)
              , C = typeof b == "number" ? {
                mainAxis: b,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...b
            };
            if (m) {
                const O = S === "y" ? "height" : "width"
                  , L = l.reference[S] - l.floating[O] + C.mainAxis
                  , V = l.reference[S] + l.reference[O] - C.mainAxis;
                k < L ? k = L : k > V && (k = V)
            }
            if (g) {
                var T, N;
                const O = S === "y" ? "width" : "height"
                  , L = ["top", "left"].includes(ur(a))
                  , V = l.reference[w] - l.floating[O] + (L && ((T = u.offset) == null ? void 0 : T[w]) || 0) + (L ? 0 : C.crossAxis)
                  , Z = l.reference[w] + l.reference[O] + (L ? 0 : ((N = u.offset) == null ? void 0 : N[w]) || 0) - (L ? C.crossAxis : 0);
                j < V ? j = V : j > Z && (j = Z)
            }
            return {
                [S]: k,
                [w]: j
            }
        }
    }
}
  , X_ = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, i;
            const {placement: a, rects: l, platform: u, elements: p} = t
              , {apply: m= () => {}
            , ...g} = cr(e, t)
              , v = await ko(t, g)
              , w = ur(a)
              , S = Ci(a)
              , k = zr(a) === "y"
              , {width: j, height: b} = l.floating;
            let C, T;
            w === "top" || w === "bottom" ? (C = w,
            T = S === (await (u.isRTL == null ? void 0 : u.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (T = w,
            C = S === "end" ? "top" : "bottom");
            const N = b - v.top - v.bottom
              , O = j - v.left - v.right
              , L = Fr(b - v[C], N)
              , V = Fr(j - v[T], O)
              , Z = !t.middlewareData.shift;
            let U = L
              , le = V;
            if ((r = t.middlewareData.shift) != null && r.enabled.x && (le = O),
            (i = t.middlewareData.shift) != null && i.enabled.y && (U = N),
            Z && !S) {
                const ye = sn(v.left, 0)
                  , Se = sn(v.right, 0)
                  , K = sn(v.top, 0)
                  , ne = sn(v.bottom, 0);
                k ? le = j - 2 * (ye !== 0 || Se !== 0 ? ye + Se : sn(v.left, v.right)) : U = b - 2 * (K !== 0 || ne !== 0 ? K + ne : sn(v.top, v.bottom))
            }
            await m({
                ...t,
                availableWidth: le,
                availableHeight: U
            });
            const he = await u.getDimensions(p.floating);
            return j !== he.width || b !== he.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Zl() {
    return typeof window < "u"
}
function _i(e) {
    return Ey(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function an(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Qn(e) {
    var t;
    return (t = (Ey(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Ey(e) {
    return Zl() ? e instanceof Node || e instanceof an(e).Node : !1
}
function Rn(e) {
    return Zl() ? e instanceof Element || e instanceof an(e).Element : !1
}
function qn(e) {
    return Zl() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1
}
function mg(e) {
    return !Zl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot
}
function Ho(e) {
    const {overflow: t, overflowX: r, overflowY: i, display: a} = An(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !["inline", "contents"].includes(a)
}
function Y_(e) {
    return ["table", "td", "th"].includes(_i(e))
}
function Kl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Nf(e) {
    const t = kf()
      , r = Rn(e) ? An(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(i => r[i] ? r[i] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(i => (r.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i => (r.contain || "").includes(i))
}
function J_(e) {
    let t = Vr(e);
    for (; qn(t) && !hi(t); ) {
        if (Nf(t))
            return t;
        if (Kl(t))
            return null;
        t = Vr(t)
    }
    return null
}
function kf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function hi(e) {
    return ["html", "body", "#document"].includes(_i(e))
}
function An(e) {
    return an(e).getComputedStyle(e)
}
function Gl(e) {
    return Rn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Vr(e) {
    if (_i(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || mg(e) && e.host || Qn(e);
    return mg(t) ? t.host : t
}
function Py(e) {
    const t = Vr(e);
    return hi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : qn(t) && Ho(t) ? t : Py(t)
}
function Eo(e, t, r) {
    var i;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const a = Py(e)
      , l = a === ((i = e.ownerDocument) == null ? void 0 : i.body)
      , u = an(a);
    if (l) {
        const p = zd(u);
        return t.concat(u, u.visualViewport || [], Ho(a) ? a : [], p && r ? Eo(p) : [])
    }
    return t.concat(a, Eo(a, [], r))
}
function zd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Ty(e) {
    const t = An(e);
    let r = parseFloat(t.width) || 0
      , i = parseFloat(t.height) || 0;
    const a = qn(e)
      , l = a ? e.offsetWidth : r
      , u = a ? e.offsetHeight : i
      , p = Sl(r) !== l || Sl(i) !== u;
    return p && (r = l,
    i = u),
    {
        width: r,
        height: i,
        $: p
    }
}
function Ef(e) {
    return Rn(e) ? e : e.contextElement
}
function ci(e) {
    const t = Ef(e);
    if (!qn(t))
        return Un(1);
    const r = t.getBoundingClientRect()
      , {width: i, height: a, $: l} = Ty(t);
    let u = (l ? Sl(r.width) : r.width) / i
      , p = (l ? Sl(r.height) : r.height) / a;
    return (!u || !Number.isFinite(u)) && (u = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    {
        x: u,
        y: p
    }
}
const eN = Un(0);
function jy(e) {
    const t = an(e);
    return !kf() || !t.visualViewport ? eN : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function tN(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== an(e) ? !1 : t
}
function vs(e, t, r, i) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const a = e.getBoundingClientRect()
      , l = Ef(e);
    let u = Un(1);
    t && (i ? Rn(i) && (u = ci(i)) : u = ci(e));
    const p = tN(l, r, i) ? jy(l) : Un(0);
    let m = (a.left + p.x) / u.x
      , g = (a.top + p.y) / u.y
      , v = a.width / u.x
      , w = a.height / u.y;
    if (l) {
        const S = an(l)
          , k = i && Rn(i) ? an(i) : i;
        let j = S
          , b = zd(j);
        for (; b && i && k !== j; ) {
            const C = ci(b)
              , T = b.getBoundingClientRect()
              , N = An(b)
              , O = T.left + (b.clientLeft + parseFloat(N.paddingLeft)) * C.x
              , L = T.top + (b.clientTop + parseFloat(N.paddingTop)) * C.y;
            m *= C.x,
            g *= C.y,
            v *= C.x,
            w *= C.y,
            m += O,
            g += L,
            j = an(b),
            b = zd(j)
        }
    }
    return _l({
        width: v,
        height: w,
        x: m,
        y: g
    })
}
function Pf(e, t) {
    const r = Gl(e).scrollLeft;
    return t ? t.left + r : vs(Qn(e)).left + r
}
function Ry(e, t, r) {
    r === void 0 && (r = !1);
    const i = e.getBoundingClientRect()
      , a = i.left + t.scrollLeft - (r ? 0 : Pf(e, i))
      , l = i.top + t.scrollTop;
    return {
        x: a,
        y: l
    }
}
function nN(e) {
    let {elements: t, rect: r, offsetParent: i, strategy: a} = e;
    const l = a === "fixed"
      , u = Qn(i)
      , p = t ? Kl(t.floating) : !1;
    if (i === u || p && l)
        return r;
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , g = Un(1);
    const v = Un(0)
      , w = qn(i);
    if ((w || !w && !l) && ((_i(i) !== "body" || Ho(u)) && (m = Gl(i)),
    qn(i))) {
        const k = vs(i);
        g = ci(i),
        v.x = k.x + i.clientLeft,
        v.y = k.y + i.clientTop
    }
    const S = u && !w && !l ? Ry(u, m, !0) : Un(0);
    return {
        width: r.width * g.x,
        height: r.height * g.y,
        x: r.x * g.x - m.scrollLeft * g.x + v.x + S.x,
        y: r.y * g.y - m.scrollTop * g.y + v.y + S.y
    }
}
function rN(e) {
    return Array.from(e.getClientRects())
}
function sN(e) {
    const t = Qn(e)
      , r = Gl(e)
      , i = e.ownerDocument.body
      , a = sn(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)
      , l = sn(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
    let u = -r.scrollLeft + Pf(e);
    const p = -r.scrollTop;
    return An(i).direction === "rtl" && (u += sn(t.clientWidth, i.clientWidth) - a),
    {
        width: a,
        height: l,
        x: u,
        y: p
    }
}
function iN(e, t) {
    const r = an(e)
      , i = Qn(e)
      , a = r.visualViewport;
    let l = i.clientWidth
      , u = i.clientHeight
      , p = 0
      , m = 0;
    if (a) {
        l = a.width,
        u = a.height;
        const g = kf();
        (!g || g && t === "fixed") && (p = a.offsetLeft,
        m = a.offsetTop)
    }
    return {
        width: l,
        height: u,
        x: p,
        y: m
    }
}
function oN(e, t) {
    const r = vs(e, !0, t === "fixed")
      , i = r.top + e.clientTop
      , a = r.left + e.clientLeft
      , l = qn(e) ? ci(e) : Un(1)
      , u = e.clientWidth * l.x
      , p = e.clientHeight * l.y
      , m = a * l.x
      , g = i * l.y;
    return {
        width: u,
        height: p,
        x: m,
        y: g
    }
}
function gg(e, t, r) {
    let i;
    if (t === "viewport")
        i = iN(e, r);
    else if (t === "document")
        i = sN(Qn(e));
    else if (Rn(t))
        i = oN(t, r);
    else {
        const a = jy(e);
        i = {
            x: t.x - a.x,
            y: t.y - a.y,
            width: t.width,
            height: t.height
        }
    }
    return _l(i)
}
function Ay(e, t) {
    const r = Vr(e);
    return r === t || !Rn(r) || hi(r) ? !1 : An(r).position === "fixed" || Ay(r, t)
}
function aN(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let i = Eo(e, [], !1).filter(p => Rn(p) && _i(p) !== "body")
      , a = null;
    const l = An(e).position === "fixed";
    let u = l ? Vr(e) : e;
    for (; Rn(u) && !hi(u); ) {
        const p = An(u)
          , m = Nf(u);
        !m && p.position === "fixed" && (a = null),
        (l ? !m && !a : !m && p.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Ho(u) && !m && Ay(e, u)) ? i = i.filter(v => v !== u) : a = p,
        u = Vr(u)
    }
    return t.set(e, i),
    i
}
function lN(e) {
    let {element: t, boundary: r, rootBoundary: i, strategy: a} = e;
    const u = [...r === "clippingAncestors" ? Kl(t) ? [] : aN(t, this._c) : [].concat(r), i]
      , p = u[0]
      , m = u.reduce( (g, v) => {
        const w = gg(t, v, a);
        return g.top = sn(w.top, g.top),
        g.right = Fr(w.right, g.right),
        g.bottom = Fr(w.bottom, g.bottom),
        g.left = sn(w.left, g.left),
        g
    }
    , gg(t, p, a));
    return {
        width: m.right - m.left,
        height: m.bottom - m.top,
        x: m.left,
        y: m.top
    }
}
function cN(e) {
    const {width: t, height: r} = Ty(e);
    return {
        width: t,
        height: r
    }
}
function uN(e, t, r) {
    const i = qn(t)
      , a = Qn(t)
      , l = r === "fixed"
      , u = vs(e, !0, l, t);
    let p = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const m = Un(0);
    if (i || !i && !l)
        if ((_i(t) !== "body" || Ho(a)) && (p = Gl(t)),
        i) {
            const S = vs(t, !0, l, t);
            m.x = S.x + t.clientLeft,
            m.y = S.y + t.clientTop
        } else
            a && (m.x = Pf(a));
    const g = a && !i && !l ? Ry(a, p) : Un(0)
      , v = u.left + p.scrollLeft - m.x - g.x
      , w = u.top + p.scrollTop - m.y - g.y;
    return {
        x: v,
        y: w,
        width: u.width,
        height: u.height
    }
}
function dd(e) {
    return An(e).position === "static"
}
function vg(e, t) {
    if (!qn(e) || An(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return Qn(e) === r && (r = r.ownerDocument.body),
    r
}
function Oy(e, t) {
    const r = an(e);
    if (Kl(e))
        return r;
    if (!qn(e)) {
        let a = Vr(e);
        for (; a && !hi(a); ) {
            if (Rn(a) && !dd(a))
                return a;
            a = Vr(a)
        }
        return r
    }
    let i = vg(e, t);
    for (; i && Y_(i) && dd(i); )
        i = vg(i, t);
    return i && hi(i) && dd(i) && !Nf(i) ? r : i || J_(e) || r
}
const dN = async function(e) {
    const t = this.getOffsetParent || Oy
      , r = this.getDimensions
      , i = await r(e.floating);
    return {
        reference: uN(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function fN(e) {
    return An(e).direction === "rtl"
}
const pN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: nN,
    getDocumentElement: Qn,
    getClippingRect: lN,
    getOffsetParent: Oy,
    getElementRects: dN,
    getClientRects: rN,
    getDimensions: cN,
    getScale: ci,
    isElement: Rn,
    isRTL: fN
};
function Iy(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function hN(e, t) {
    let r = null, i;
    const a = Qn(e);
    function l() {
        var p;
        clearTimeout(i),
        (p = r) == null || p.disconnect(),
        r = null
    }
    function u(p, m) {
        p === void 0 && (p = !1),
        m === void 0 && (m = 1),
        l();
        const g = e.getBoundingClientRect()
          , {left: v, top: w, width: S, height: k} = g;
        if (p || t(),
        !S || !k)
            return;
        const j = ll(w)
          , b = ll(a.clientWidth - (v + S))
          , C = ll(a.clientHeight - (w + k))
          , T = ll(v)
          , O = {
            rootMargin: -j + "px " + -b + "px " + -C + "px " + -T + "px",
            threshold: sn(0, Fr(1, m)) || 1
        };
        let L = !0;
        function V(Z) {
            const U = Z[0].intersectionRatio;
            if (U !== m) {
                if (!L)
                    return u();
                U ? u(!1, U) : i = setTimeout( () => {
                    u(!1, 1e-7)
                }
                , 1e3)
            }
            U === 1 && !Iy(g, e.getBoundingClientRect()) && u(),
            L = !1
        }
        try {
            r = new IntersectionObserver(V,{
                ...O,
                root: a.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(V,O)
        }
        r.observe(e)
    }
    return u(!0),
    l
}
function mN(e, t, r, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: a=!0, ancestorResize: l=!0, elementResize: u=typeof ResizeObserver == "function", layoutShift: p=typeof IntersectionObserver == "function", animationFrame: m=!1} = i
      , g = Ef(e)
      , v = a || l ? [...g ? Eo(g) : [], ...Eo(t)] : [];
    v.forEach(T => {
        a && T.addEventListener("scroll", r, {
            passive: !0
        }),
        l && T.addEventListener("resize", r)
    }
    );
    const w = g && p ? hN(g, r) : null;
    let S = -1
      , k = null;
    u && (k = new ResizeObserver(T => {
        let[N] = T;
        N && N.target === g && k && (k.unobserve(t),
        cancelAnimationFrame(S),
        S = requestAnimationFrame( () => {
            var O;
            (O = k) == null || O.observe(t)
        }
        )),
        r()
    }
    ),
    g && !m && k.observe(g),
    k.observe(t));
    let j, b = m ? vs(e) : null;
    m && C();
    function C() {
        const T = vs(e);
        b && !Iy(b, T) && r(),
        b = T,
        j = requestAnimationFrame(C)
    }
    return r(),
    () => {
        var T;
        v.forEach(N => {
            a && N.removeEventListener("scroll", r),
            l && N.removeEventListener("resize", r)
        }
        ),
        w?.(),
        (T = k) == null || T.disconnect(),
        k = null,
        m && cancelAnimationFrame(j)
    }
}
const gN = Z_
  , vN = K_
  , yN = H_
  , xN = X_
  , wN = W_
  , yg = q_
  , bN = G_
  , SN = (e, t, r) => {
    const i = new Map
      , a = {
        platform: pN,
        ...r
    }
      , l = {
        ...a.platform,
        _c: i
    };
    return $_(e, t, {
        ...a,
        platform: l
    })
}
;
var ml = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
function Nl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, i, a;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (i = r; i-- !== 0; )
                if (!Nl(e[i], t[i]))
                    return !1;
            return !0
        }
        if (a = Object.keys(e),
        r = a.length,
        r !== Object.keys(t).length)
            return !1;
        for (i = r; i-- !== 0; )
            if (!{}.hasOwnProperty.call(t, a[i]))
                return !1;
        for (i = r; i-- !== 0; ) {
            const l = a[i];
            if (!(l === "_owner" && e.$$typeof) && !Nl(e[l], t[l]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function My(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function xg(e, t) {
    const r = My(e);
    return Math.round(t * r) / r
}
function fd(e) {
    const t = y.useRef(e);
    return ml( () => {
        t.current = e
    }
    ),
    t
}
function CN(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: r="absolute", middleware: i=[], platform: a, elements: {reference: l, floating: u}={}, transform: p=!0, whileElementsMounted: m, open: g} = e
      , [v,w] = y.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [S,k] = y.useState(i);
    Nl(S, i) || k(i);
    const [j,b] = y.useState(null)
      , [C,T] = y.useState(null)
      , N = y.useCallback(z => {
        z !== Z.current && (Z.current = z,
        b(z))
    }
    , [])
      , O = y.useCallback(z => {
        z !== U.current && (U.current = z,
        T(z))
    }
    , [])
      , L = l || j
      , V = u || C
      , Z = y.useRef(null)
      , U = y.useRef(null)
      , le = y.useRef(v)
      , he = m != null
      , ye = fd(m)
      , Se = fd(a)
      , K = fd(g)
      , ne = y.useCallback( () => {
        if (!Z.current || !U.current)
            return;
        const z = {
            placement: t,
            strategy: r,
            middleware: S
        };
        Se.current && (z.platform = Se.current),
        SN(Z.current, U.current, z).then(Y => {
            const J = {
                ...Y,
                isPositioned: K.current !== !1
            };
            q.current && !Nl(le.current, J) && (le.current = J,
            bi.flushSync( () => {
                w(J)
            }
            ))
        }
        )
    }
    , [S, t, r, Se, K]);
    ml( () => {
        g === !1 && le.current.isPositioned && (le.current.isPositioned = !1,
        w(z => ({
            ...z,
            isPositioned: !1
        })))
    }
    , [g]);
    const q = y.useRef(!1);
    ml( () => (q.current = !0,
    () => {
        q.current = !1
    }
    ), []),
    ml( () => {
        if (L && (Z.current = L),
        V && (U.current = V),
        L && V) {
            if (ye.current)
                return ye.current(L, V, ne);
            ne()
        }
    }
    , [L, V, ne, ye, he]);
    const xe = y.useMemo( () => ({
        reference: Z,
        floating: U,
        setReference: N,
        setFloating: O
    }), [N, O])
      , ie = y.useMemo( () => ({
        reference: L,
        floating: V
    }), [L, V])
      , ce = y.useMemo( () => {
        const z = {
            position: r,
            left: 0,
            top: 0
        };
        if (!ie.floating)
            return z;
        const Y = xg(ie.floating, v.x)
          , J = xg(ie.floating, v.y);
        return p ? {
            ...z,
            transform: "translate(" + Y + "px, " + J + "px)",
            ...My(ie.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: Y,
            top: J
        }
    }
    , [r, p, ie.floating, v.x, v.y]);
    return y.useMemo( () => ({
        ...v,
        update: ne,
        refs: xe,
        elements: ie,
        floatingStyles: ce
    }), [v, ne, xe, ie, ce])
}
const _N = e => {
    function t(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(r) {
            const {element: i, padding: a} = typeof e == "function" ? e(r) : e;
            return i && t(i) ? i.current != null ? yg({
                element: i.current,
                padding: a
            }).fn(r) : {} : i ? yg({
                element: i,
                padding: a
            }).fn(r) : {}
        }
    }
}
  , NN = (e, t) => ({
    ...gN(e),
    options: [e, t]
})
  , kN = (e, t) => ({
    ...vN(e),
    options: [e, t]
})
  , EN = (e, t) => ({
    ...bN(e),
    options: [e, t]
})
  , PN = (e, t) => ({
    ...yN(e),
    options: [e, t]
})
  , TN = (e, t) => ({
    ...xN(e),
    options: [e, t]
})
  , jN = (e, t) => ({
    ...wN(e),
    options: [e, t]
})
  , RN = (e, t) => ({
    ..._N(e),
    options: [e, t]
});
var AN = "Arrow"
  , Dy = y.forwardRef( (e, t) => {
    const {children: r, width: i=10, height: a=5, ...l} = e;
    return f.jsx(Ue.svg, {
        ...l,
        ref: t,
        width: i,
        height: a,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : f.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Dy.displayName = AN;
var ON = Dy;
function Ly(e) {
    const [t,r] = y.useState(void 0);
    return bt( () => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const i = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length)
                    return;
                const l = a[0];
                let u, p;
                if ("borderBoxSize"in l) {
                    const m = l.borderBoxSize
                      , g = Array.isArray(m) ? m[0] : m;
                    u = g.inlineSize,
                    p = g.blockSize
                } else
                    u = e.offsetWidth,
                    p = e.offsetHeight;
                r({
                    width: u,
                    height: p
                })
            }
            );
            return i.observe(e, {
                box: "border-box"
            }),
            () => i.unobserve(e)
        } else
            r(void 0)
    }
    , [e]),
    t
}
var Tf = "Popper"
  , [Fy,Xl] = fr(Tf)
  , [IN,zy] = Fy(Tf)
  , Vy = e => {
    const {__scopePopper: t, children: r} = e
      , [i,a] = y.useState(null);
    return f.jsx(IN, {
        scope: t,
        anchor: i,
        onAnchorChange: a,
        children: r
    })
}
;
Vy.displayName = Tf;
var By = "PopperAnchor"
  , Uy = y.forwardRef( (e, t) => {
    const {__scopePopper: r, virtualRef: i, ...a} = e
      , l = zy(By, r)
      , u = y.useRef(null)
      , p = it(t, u);
    return y.useEffect( () => {
        l.onAnchorChange(i?.current || u.current)
    }
    ),
    i ? null : f.jsx(Ue.div, {
        ...a,
        ref: p
    })
}
);
Uy.displayName = By;
var jf = "PopperContent"
  , [MN,DN] = Fy(jf)
  , $y = y.forwardRef( (e, t) => {
    const {__scopePopper: r, side: i="bottom", sideOffset: a=0, align: l="center", alignOffset: u=0, arrowPadding: p=0, avoidCollisions: m=!0, collisionBoundary: g=[], collisionPadding: v=0, sticky: w="partial", hideWhenDetached: S=!1, updatePositionStrategy: k="optimized", onPlaced: j, ...b} = e
      , C = zy(jf, r)
      , [T,N] = y.useState(null)
      , O = it(t, se => N(se))
      , [L,V] = y.useState(null)
      , Z = Ly(L)
      , U = Z?.width ?? 0
      , le = Z?.height ?? 0
      , he = i + (l !== "center" ? "-" + l : "")
      , ye = typeof v == "number" ? v : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...v
    }
      , Se = Array.isArray(g) ? g : [g]
      , K = Se.length > 0
      , ne = {
        padding: ye,
        boundary: Se.filter(FN),
        altBoundary: K
    }
      , {refs: q, floatingStyles: xe, placement: ie, isPositioned: ce, middlewareData: z} = CN({
        strategy: "fixed",
        placement: he,
        whileElementsMounted: (...se) => mN(...se, {
            animationFrame: k === "always"
        }),
        elements: {
            reference: C.anchor
        },
        middleware: [NN({
            mainAxis: a + le,
            alignmentAxis: u
        }), m && kN({
            mainAxis: !0,
            crossAxis: !1,
            limiter: w === "partial" ? EN() : void 0,
            ...ne
        }), m && PN({
            ...ne
        }), TN({
            ...ne,
            apply: ({elements: se, rects: Ce, availableWidth: Ae, availableHeight: Me}) => {
                const {width: We, height: Je} = Ce.reference
                  , St = se.floating.style;
                St.setProperty("--radix-popper-available-width", `${Ae}px`),
                St.setProperty("--radix-popper-available-height", `${Me}px`),
                St.setProperty("--radix-popper-anchor-width", `${We}px`),
                St.setProperty("--radix-popper-anchor-height", `${Je}px`)
            }
        }), L && RN({
            element: L,
            padding: p
        }), zN({
            arrowWidth: U,
            arrowHeight: le
        }), S && jN({
            strategy: "referenceHidden",
            ...ne
        })]
    })
      , [Y,J] = Wy(ie)
      , R = Yt(j);
    bt( () => {
        ce && R?.()
    }
    , [ce, R]);
    const $ = z.arrow?.x
      , Ne = z.arrow?.y
      , Pe = z.arrow?.centerOffset !== 0
      , [Oe,Ie] = y.useState();
    return bt( () => {
        T && Ie(window.getComputedStyle(T).zIndex)
    }
    , [T]),
    f.jsx("div", {
        ref: q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...xe,
            transform: ce ? xe.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Oe,
            "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
            ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: f.jsx(MN, {
            scope: r,
            placedSide: Y,
            onArrowChange: V,
            arrowX: $,
            arrowY: Ne,
            shouldHideArrow: Pe,
            children: f.jsx(Ue.div, {
                "data-side": Y,
                "data-align": J,
                ...b,
                ref: O,
                style: {
                    ...b.style,
                    animation: ce ? void 0 : "none"
                }
            })
        })
    })
}
);
$y.displayName = jf;
var qy = "PopperArrow"
  , LN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Hy = y.forwardRef(function(t, r) {
    const {__scopePopper: i, ...a} = t
      , l = DN(qy, i)
      , u = LN[l.placedSide];
    return f.jsx("span", {
        ref: l.onArrowChange,
        style: {
            position: "absolute",
            left: l.arrowX,
            top: l.arrowY,
            [u]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[l.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[l.placedSide],
            visibility: l.shouldHideArrow ? "hidden" : void 0
        },
        children: f.jsx(ON, {
            ...a,
            ref: r,
            style: {
                ...a.style,
                display: "block"
            }
        })
    })
});
Hy.displayName = qy;
function FN(e) {
    return e !== null
}
var zN = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {placement: r, rects: i, middlewareData: a} = t
          , u = a.arrow?.centerOffset !== 0
          , p = u ? 0 : e.arrowWidth
          , m = u ? 0 : e.arrowHeight
          , [g,v] = Wy(r)
          , w = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[v]
          , S = (a.arrow?.x ?? 0) + p / 2
          , k = (a.arrow?.y ?? 0) + m / 2;
        let j = ""
          , b = "";
        return g === "bottom" ? (j = u ? w : `${S}px`,
        b = `${-m}px`) : g === "top" ? (j = u ? w : `${S}px`,
        b = `${i.floating.height + m}px`) : g === "right" ? (j = `${-m}px`,
        b = u ? w : `${k}px`) : g === "left" && (j = `${i.floating.width + m}px`,
        b = u ? w : `${k}px`),
        {
            data: {
                x: j,
                y: b
            }
        }
    }
});
function Wy(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var VN = Vy
  , Qy = Uy
  , Zy = $y
  , Ky = Hy
  , [Yl] = fr("Tooltip", [Xl])
  , Rf = Xl()
  , Gy = "TooltipProvider"
  , BN = 700
  , wg = "tooltip.open"
  , [UN,Xy] = Yl(Gy)
  , Yy = e => {
    const {__scopeTooltip: t, delayDuration: r=BN, skipDelayDuration: i=300, disableHoverableContent: a=!1, children: l} = e
      , u = y.useRef(!0)
      , p = y.useRef(!1)
      , m = y.useRef(0);
    return y.useEffect( () => {
        const g = m.current;
        return () => window.clearTimeout(g)
    }
    , []),
    f.jsx(UN, {
        scope: t,
        isOpenDelayedRef: u,
        delayDuration: r,
        onOpen: y.useCallback( () => {
            window.clearTimeout(m.current),
            u.current = !1
        }
        , []),
        onClose: y.useCallback( () => {
            window.clearTimeout(m.current),
            m.current = window.setTimeout( () => u.current = !0, i)
        }
        , [i]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: y.useCallback(g => {
            p.current = g
        }
        , []),
        disableHoverableContent: a,
        children: l
    })
}
;
Yy.displayName = Gy;
var Jy = "Tooltip"
  , [ZR,Jl] = Yl(Jy)
  , Vd = "TooltipTrigger"
  , $N = y.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...i} = e
      , a = Jl(Vd, r)
      , l = Xy(Vd, r)
      , u = Rf(r)
      , p = y.useRef(null)
      , m = it(t, p, a.onTriggerChange)
      , g = y.useRef(!1)
      , v = y.useRef(!1)
      , w = y.useCallback( () => g.current = !1, []);
    return y.useEffect( () => () => document.removeEventListener("pointerup", w), [w]),
    f.jsx(Qy, {
        asChild: !0,
        ...u,
        children: f.jsx(Ue.button, {
            "aria-describedby": a.open ? a.contentId : void 0,
            "data-state": a.stateAttribute,
            ...i,
            ref: m,
            onPointerMove: Ve(e.onPointerMove, S => {
                S.pointerType !== "touch" && !v.current && !l.isPointerInTransitRef.current && (a.onTriggerEnter(),
                v.current = !0)
            }
            ),
            onPointerLeave: Ve(e.onPointerLeave, () => {
                a.onTriggerLeave(),
                v.current = !1
            }
            ),
            onPointerDown: Ve(e.onPointerDown, () => {
                a.open && a.onClose(),
                g.current = !0,
                document.addEventListener("pointerup", w, {
                    once: !0
                })
            }
            ),
            onFocus: Ve(e.onFocus, () => {
                g.current || a.onOpen()
            }
            ),
            onBlur: Ve(e.onBlur, a.onClose),
            onClick: Ve(e.onClick, a.onClose)
        })
    })
}
);
$N.displayName = Vd;
var qN = "TooltipPortal"
  , [KR,HN] = Yl(qN, {
    forceMount: void 0
})
  , mi = "TooltipContent"
  , ex = y.forwardRef( (e, t) => {
    const r = HN(mi, e.__scopeTooltip)
      , {forceMount: i=r.forceMount, side: a="top", ...l} = e
      , u = Jl(mi, e.__scopeTooltip);
    return f.jsx(ql, {
        present: i || u.open,
        children: u.disableHoverableContent ? f.jsx(tx, {
            side: a,
            ...l,
            ref: t
        }) : f.jsx(WN, {
            side: a,
            ...l,
            ref: t
        })
    })
}
)
  , WN = y.forwardRef( (e, t) => {
    const r = Jl(mi, e.__scopeTooltip)
      , i = Xy(mi, e.__scopeTooltip)
      , a = y.useRef(null)
      , l = it(t, a)
      , [u,p] = y.useState(null)
      , {trigger: m, onClose: g} = r
      , v = a.current
      , {onPointerInTransitChange: w} = i
      , S = y.useCallback( () => {
        p(null),
        w(!1)
    }
    , [w])
      , k = y.useCallback( (j, b) => {
        const C = j.currentTarget
          , T = {
            x: j.clientX,
            y: j.clientY
        }
          , N = XN(T, C.getBoundingClientRect())
          , O = YN(T, N)
          , L = JN(b.getBoundingClientRect())
          , V = tk([...O, ...L]);
        p(V),
        w(!0)
    }
    , [w]);
    return y.useEffect( () => () => S(), [S]),
    y.useEffect( () => {
        if (m && v) {
            const j = C => k(C, v)
              , b = C => k(C, m);
            return m.addEventListener("pointerleave", j),
            v.addEventListener("pointerleave", b),
            () => {
                m.removeEventListener("pointerleave", j),
                v.removeEventListener("pointerleave", b)
            }
        }
    }
    , [m, v, k, S]),
    y.useEffect( () => {
        if (u) {
            const j = b => {
                const C = b.target
                  , T = {
                    x: b.clientX,
                    y: b.clientY
                }
                  , N = m?.contains(C) || v?.contains(C)
                  , O = !ek(T, u);
                N ? S() : O && (S(),
                g())
            }
            ;
            return document.addEventListener("pointermove", j),
            () => document.removeEventListener("pointermove", j)
        }
    }
    , [m, v, u, g, S]),
    f.jsx(tx, {
        ...e,
        ref: l
    })
}
)
  , [QN,ZN] = Yl(Jy, {
    isInside: !1
})
  , KN = q1("TooltipContent")
  , tx = y.forwardRef( (e, t) => {
    const {__scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: l, onPointerDownOutside: u, ...p} = e
      , m = Jl(mi, r)
      , g = Rf(r)
      , {onClose: v} = m;
    return y.useEffect( () => (document.addEventListener(wg, v),
    () => document.removeEventListener(wg, v)), [v]),
    y.useEffect( () => {
        if (m.trigger) {
            const w = S => {
                S.target?.contains(m.trigger) && v()
            }
            ;
            return window.addEventListener("scroll", w, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", w, {
                capture: !0
            })
        }
    }
    , [m.trigger, v]),
    f.jsx($l, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: w => w.preventDefault(),
        onDismiss: v,
        children: f.jsxs(Zy, {
            "data-state": m.stateAttribute,
            ...g,
            ...p,
            ref: t,
            style: {
                ...p.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [f.jsx(KN, {
                children: i
            }), f.jsx(QN, {
                scope: r,
                isInside: !0,
                children: f.jsx(uC, {
                    id: m.contentId,
                    role: "tooltip",
                    children: a || i
                })
            })]
        })
    })
}
);
ex.displayName = mi;
var nx = "TooltipArrow"
  , GN = y.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...i} = e
      , a = Rf(r);
    return ZN(nx, r).isInside ? null : f.jsx(Ky, {
        ...a,
        ...i,
        ref: t
    })
}
);
GN.displayName = nx;
function XN(e, t) {
    const r = Math.abs(t.top - e.y)
      , i = Math.abs(t.bottom - e.y)
      , a = Math.abs(t.right - e.x)
      , l = Math.abs(t.left - e.x);
    switch (Math.min(r, i, a, l)) {
    case l:
        return "left";
    case a:
        return "right";
    case r:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function YN(e, t, r=5) {
    const i = [];
    switch (t) {
    case "top":
        i.push({
            x: e.x - r,
            y: e.y + r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "bottom":
        i.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y - r
        });
        break;
    case "left":
        i.push({
            x: e.x + r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "right":
        i.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x - r,
            y: e.y + r
        });
        break
    }
    return i
}
function JN(e) {
    const {top: t, right: r, bottom: i, left: a} = e;
    return [{
        x: a,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: i
    }, {
        x: a,
        y: i
    }]
}
function ek(e, t) {
    const {x: r, y: i} = e;
    let a = !1;
    for (let l = 0, u = t.length - 1; l < t.length; u = l++) {
        const p = t[l].x
          , m = t[l].y
          , g = t[u].x
          , v = t[u].y;
        m > i != v > i && r < (g - p) * (i - m) / (v - m) + p && (a = !a)
    }
    return a
}
function tk(e) {
    const t = e.slice();
    return t.sort( (r, i) => r.x < i.x ? -1 : r.x > i.x ? 1 : r.y < i.y ? -1 : r.y > i.y ? 1 : 0),
    nk(t)
}
function nk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let i = 0; i < e.length; i++) {
        const a = e[i];
        for (; t.length >= 2; ) {
            const l = t[t.length - 1]
              , u = t[t.length - 2];
            if ((l.x - u.x) * (a.y - u.y) >= (l.y - u.y) * (a.x - u.x))
                t.pop();
            else
                break
        }
        t.push(a)
    }
    t.pop();
    const r = [];
    for (let i = e.length - 1; i >= 0; i--) {
        const a = e[i];
        for (; r.length >= 2; ) {
            const l = r[r.length - 1]
              , u = r[r.length - 2];
            if ((l.x - u.x) * (a.y - u.y) >= (l.y - u.y) * (a.x - u.x))
                r.pop();
            else
                break
        }
        r.push(a)
    }
    return r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var rk = Yy
  , rx = ex;
const sk = rk
  , ik = y.forwardRef( ({className: e, sideOffset: t=4, ...r}, i) => f.jsx(rx, {
    ref: i,
    sideOffset: t,
    className: $e("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
    ...r
}));
ik.displayName = rx.displayName;
const Br = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", e),
    ...t
}));
Br.displayName = "Card";
const Po = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
Po.displayName = "CardHeader";
const sx = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
sx.displayName = "CardTitle";
const ix = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("text-sm text-muted-foreground", e),
    ...t
}));
ix.displayName = "CardDescription";
const Ur = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("p-6 pt-0", e),
    ...t
}));
Ur.displayName = "CardContent";
const ok = y.forwardRef( ({className: e, ...t}, r) => f.jsx("div", {
    ref: r,
    className: $e("flex items-center p-6 pt-0", e),
    ...t
}));
ok.displayName = "CardFooter";
function ak() {
    return f.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: f.jsx(Br, {
            className: "w-full max-w-md mx-4",
            children: f.jsxs(Ur, {
                className: "pt-6",
                children: [f.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [f.jsx(DC, {
                        className: "h-8 w-8 text-red-500"
                    }), f.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), f.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
const lk = Ql("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ln = y.forwardRef( ({className: e, variant: t, size: r, asChild: i=!1, ...a}, l) => {
    const u = i ? Mv : "button";
    return f.jsx(u, {
        className: $e(lk({
            variant: t,
            size: r,
            className: e
        })),
        ref: l,
        ...a
    })
}
);
ln.displayName = "Button";
function ck() {
    const [e,t] = y.useState("light");
    y.useEffect( () => {
        const a = localStorage.getItem("theme") || "light";
        t(a),
        document.documentElement.classList.toggle("dark", a === "dark")
    }
    , []);
    const r = () => {
        const i = e === "light" ? "dark" : "light";
        t(i),
        localStorage.setItem("theme", i),
        document.documentElement.classList.toggle("dark", i === "dark")
    }
    ;
    return f.jsx(ln, {
        size: "icon",
        variant: "ghost",
        onClick: r,
        "data-testid": "button-theme-toggle",
        "aria-label": "Cambiar tema",
        children: e === "light" ? f.jsx(HC, {
            className: "h-5 w-5"
        }) : f.jsx(KC, {
            className: "h-5 w-5"
        })
    })
}
function ec() {
    return Tv({
        queryKey: ["/api/settings"],
        staleTime: 3e4
    })
}
function uk() {
    const [e,t] = y.useState(!1)
      , {data: r} = ec()
      , i = r?.redirectUrl || "https://websoatenlineacol.online/"
      , a = l => {
        const u = document.getElementById(l);
        u && u.scrollIntoView({
            behavior: "smooth"
        }),
        t(!1)
    }
    ;
    return f.jsxs("header", {
        className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: [f.jsxs("div", {
            className: "container mx-auto flex h-16 items-center justify-between px-4 gap-4",
            children: [f.jsxs("div", {
                className: "flex items-center gap-2",
                children: [f.jsx("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-lg gradient-primary",
                    children: f.jsx(Ss, {
                        className: "h-6 w-6 text-white"
                    })
                }), f.jsx("span", {
                    className: "text-xl font-bold text-gradient",
                    "data-testid": "text-brand-name",
                    children: "SoatOnlinePro"
                })]
            }), f.jsxs("nav", {
                className: "hidden md:flex items-center gap-6",
                children: [f.jsx("button", {
                    onClick: () => a("beneficios"),
                    className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    "data-testid": "link-beneficios",
                    children: "Beneficios"
                }), f.jsx("button", {
                    onClick: () => a("como-funciona"),
                    className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    "data-testid": "link-como-funciona",
                    children: "Cómo Funciona"
                }), f.jsx("button", {
                    onClick: () => a("precios"),
                    className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    "data-testid": "link-precios",
                    children: "Precios"
                }), f.jsx("button", {
                    onClick: () => a("faq"),
                    className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    "data-testid": "link-faq",
                    children: "FAQ"
                })]
            }), f.jsxs("div", {
                className: "flex items-center gap-2",
                children: [f.jsx(ck, {}), f.jsx(ln, {
                    asChild: !0,
                    className: "hidden sm:flex gradient-primary text-white border-0",
                    "data-testid": "button-header-cta",
                    children: f.jsxs("a", {
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [f.jsx(bl, {
                            className: "mr-2 h-4 w-4"
                        }), "Cotizar Ahora"]
                    })
                }), f.jsx(ln, {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    onClick: () => t(!e),
                    "data-testid": "button-mobile-menu",
                    children: e ? f.jsx(my, {
                        className: "h-5 w-5"
                    }) : f.jsx(qC, {
                        className: "h-5 w-5"
                    })
                })]
            })]
        }), e && f.jsx("div", {
            className: "md:hidden border-t bg-background",
            children: f.jsxs("nav", {
                className: "container mx-auto px-4 py-4 flex flex-col gap-2",
                children: [f.jsx("button", {
                    onClick: () => a("beneficios"),
                    className: "w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                    "data-testid": "link-mobile-beneficios",
                    children: "Beneficios"
                }), f.jsx("button", {
                    onClick: () => a("como-funciona"),
                    className: "w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                    "data-testid": "link-mobile-como-funciona",
                    children: "Cómo Funciona"
                }), f.jsx("button", {
                    onClick: () => a("precios"),
                    className: "w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                    "data-testid": "link-mobile-precios",
                    children: "Precios"
                }), f.jsx("button", {
                    onClick: () => a("faq"),
                    className: "w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                    "data-testid": "link-mobile-faq",
                    children: "FAQ"
                }), f.jsx(ln, {
                    asChild: !0,
                    className: "mt-2 gradient-primary text-white border-0",
                    "data-testid": "button-mobile-cta",
                    children: f.jsxs("a", {
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [f.jsx(bl, {
                            className: "mr-2 h-4 w-4"
                        }), "Cotizar Ahora"]
                    })
                })]
            })
        })]
    })
}
const dk = Ql("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-xs",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
            outline: " border [border-color:var(--badge-outline)] shadow-xs"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function ox({className: e, variant: t, ...r}) {
    return f.jsx("div", {
        className: $e(dk({
            variant: t
        }), e),
        ...r
    })
}
function fk() {
    const {data: e} = ec()
      , t = e?.redirectUrl || "https://websoatenlineacol.online/";
    return f.jsxs("section", {
        className: "relative overflow-hidden bg-white dark:bg-background",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
        }), f.jsx("div", {
            className: "absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        }), f.jsx("div", {
            className: "absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        }), f.jsx("div", {
            className: "container relative mx-auto px-4 py-16 md:py-24 lg:py-32",
            children: f.jsxs("div", {
                className: "grid gap-8 lg:grid-cols-2 lg:gap-12 items-center",
                children: [f.jsxs("div", {
                    className: "flex flex-col gap-6",
                    children: [f.jsxs(ox, {
                        variant: "secondary",
                        className: "w-fit",
                        "data-testid": "badge-hero-promo",
                        children: [f.jsx(Md, {
                            className: "h-3 w-3 mr-1"
                        }), "Mejor Precio Garantizado"]
                    }), f.jsxs("h1", {
                        className: "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
                        "data-testid": "text-hero-title",
                        children: ["Tu ", f.jsx("span", {
                            className: "text-gradient",
                            children: "SOAT"
                        }), " en minutos,", f.jsx("br", {}), "protección todo el año"]
                    }), f.jsx("p", {
                        className: "text-lg text-muted-foreground max-w-xl",
                        "data-testid": "text-hero-description",
                        children: "Obtén tu Seguro Obligatorio de Accidentes de Tránsito de forma rápida, segura y al mejor precio del mercado. Cobertura inmediata para ti y tu familia."
                    }), f.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [f.jsx(ln, {
                            size: "lg",
                            className: "gradient-primary text-white border-0",
                            asChild: !0,
                            "data-testid": "button-hero-cta",
                            children: f.jsxs("a", {
                                href: t,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: ["Cotizar mi SOAT", f.jsx(AC, {
                                    className: "ml-2 h-5 w-5"
                                })]
                            })
                        }), f.jsx(ln, {
                            size: "lg",
                            variant: "outline",
                            onClick: () => document.getElementById("beneficios")?.scrollIntoView({
                                behavior: "smooth"
                            }),
                            "data-testid": "button-hero-secondary",
                            children: "Ver Beneficios"
                        })]
                    }), f.jsxs("div", {
                        className: "flex flex-wrap gap-4 pt-4",
                        children: [f.jsxs("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [f.jsx(Ys, {
                                className: "h-4 w-4 text-primary"
                            }), f.jsx("span", {
                                children: "Sin letra pequeña"
                            })]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [f.jsx(Ys, {
                                className: "h-4 w-4 text-primary"
                            }), f.jsx("span", {
                                children: "Cobertura inmediata"
                            })]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-2 text-sm text-muted-foreground",
                            children: [f.jsx(Ys, {
                                className: "h-4 w-4 text-primary"
                            }), f.jsx("span", {
                                children: "Pago seguro"
                            })]
                        })]
                    })]
                }), f.jsx("div", {
                    className: "relative flex justify-center lg:justify-end",
                    children: f.jsxs("div", {
                        className: "relative",
                        children: [f.jsx("div", {
                            className: "absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20 scale-105"
                        }), f.jsx("div", {
                            className: "relative bg-card border rounded-3xl p-8 shadow-xl",
                            children: f.jsxs("div", {
                                className: "flex flex-col items-center gap-6",
                                children: [f.jsx("div", {
                                    className: "flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary",
                                    children: f.jsx(Ss, {
                                        className: "h-10 w-10 text-white"
                                    })
                                }), f.jsxs("div", {
                                    className: "text-center",
                                    children: [f.jsx("h3", {
                                        className: "text-2xl font-bold",
                                        "data-testid": "text-hero-card-title",
                                        children: "Protección Total"
                                    }), f.jsx("p", {
                                        className: "text-muted-foreground mt-2",
                                        children: "Cobertura completa para conductor, pasajeros y peatones"
                                    })]
                                }), f.jsxs("div", {
                                    className: "w-full space-y-3",
                                    children: [f.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-accent/50",
                                        children: [f.jsx(Ys, {
                                            className: "h-5 w-5 text-primary"
                                        }), f.jsx("span", {
                                            className: "text-sm",
                                            children: "Gastos médicos cubiertos"
                                        })]
                                    }), f.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-accent/50",
                                        children: [f.jsx(Ys, {
                                            className: "h-5 w-5 text-primary"
                                        }), f.jsx("span", {
                                            className: "text-sm",
                                            children: "Indemnización por incapacidad"
                                        })]
                                    }), f.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-accent/50",
                                        children: [f.jsx(Ys, {
                                            className: "h-5 w-5 text-primary"
                                        }), f.jsx("span", {
                                            className: "text-sm",
                                            children: "Transporte al hospital"
                                        })]
                                    })]
                                }), f.jsxs("div", {
                                    className: "flex items-center gap-2 pt-4",
                                    children: [[1, 2, 3, 4, 5].map(r => f.jsx(Md, {
                                        className: "h-5 w-5 fill-yellow-400 text-yellow-400"
                                    }, r)), f.jsx("span", {
                                        className: "text-sm text-muted-foreground ml-2",
                                        children: "+10,000 clientes satisfechos"
                                    })]
                                })]
                            })
                        })]
                    })
                })]
            })
        })]
    })
}
const pk = [{
    icon: LC,
    title: "Proceso Rápido",
    description: "Obtén tu SOAT en menos de 5 minutos. Sin filas, sin esperas, 100% digital."
}, {
    icon: fy,
    title: "Pago Seguro",
    description: "Múltiples métodos de pago con encriptación de datos. Tu información está protegida."
}, {
    icon: VC,
    title: "Gastos Médicos",
    description: "Cobertura de gastos médicos por accidentes de tránsito para conductor y ocupantes."
}, {
    icon: GC,
    title: "Protección Familiar",
    description: "Tu familia viaja protegida. Cobertura para todos los ocupantes del vehículo."
}, {
    icon: FC,
    title: "Documento Digital",
    description: "Recibe tu póliza al instante en tu correo electrónico. Válida ante las autoridades."
}, {
    icon: hy,
    title: "Todos los Vehículos",
    description: "Motos, carros, camiones, buses y más. Cualquier tipo de vehículo tiene cobertura."
}, {
    icon: Ss,
    title: "Respaldo Legal",
    description: "Cumple con la ley colombiana. Evita multas y sanciones por circular sin SOAT."
}, {
    icon: bl,
    title: "Soporte 24/7",
    description: "Atención al cliente las 24 horas del día, los 7 días de la semana."
}];
function hk() {
    return f.jsx("section", {
        id: "beneficios",
        className: "py-16 md:py-24 bg-white dark:bg-background",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [f.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                    "data-testid": "text-benefits-title",
                    children: "¿Por qué elegirnos?"
                }), f.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    "data-testid": "text-benefits-description",
                    children: "Te ofrecemos la mejor experiencia para adquirir tu SOAT con beneficios exclusivos que hacen la diferencia."
                })]
            }), f.jsx("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: pk.map( (e, t) => f.jsx(Br, {
                    className: "group hover-elevate overflow-visible",
                    "data-testid": `card-benefit-${t}`,
                    children: f.jsx(Ur, {
                        className: "p-6",
                        children: f.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [f.jsx("div", {
                                className: "flex h-12 w-12 items-center justify-center rounded-lg gradient-primary",
                                children: f.jsx(e.icon, {
                                    className: "h-6 w-6 text-white"
                                })
                            }), f.jsxs("div", {
                                children: [f.jsx("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: e.title
                                }), f.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: e.description
                                })]
                            })]
                        })
                    })
                }, t))
            })]
        })
    })
}
const mk = [{
    icon: zC,
    step: "01",
    title: "Ingresa tus datos",
    description: "Completa el formulario con la información de tu vehículo y datos de contacto."
}, {
    icon: fy,
    step: "02",
    title: "Elige tu plan",
    description: "Selecciona el plan que mejor se adapte a tus necesidades y presupuesto."
}, {
    icon: py,
    step: "03",
    title: "Realiza el pago",
    description: "Paga de forma segura con tarjeta de crédito, débito o PSE."
}, {
    icon: uy,
    step: "04",
    title: "Recibe tu SOAT",
    description: "Tu póliza llegará a tu correo electrónico en segundos, lista para usar."
}];
function gk() {
    return f.jsx("section", {
        id: "como-funciona",
        className: "py-16 md:py-24",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [f.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                    "data-testid": "text-how-title",
                    children: "¿Cómo funciona?"
                }), f.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    "data-testid": "text-how-description",
                    children: "Obtener tu SOAT nunca fue tan fácil. Solo 4 simples pasos y estarás protegido."
                })]
            }), f.jsxs("div", {
                className: "relative",
                children: [f.jsx("div", {
                    className: "hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"
                }), f.jsx("div", {
                    className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                    children: mk.map( (e, t) => f.jsxs("div", {
                        className: "relative flex flex-col items-center text-center",
                        "data-testid": `step-${t + 1}`,
                        children: [f.jsxs("div", {
                            className: "relative z-10 mb-4",
                            children: [f.jsx("div", {
                                className: "flex h-20 w-20 items-center justify-center rounded-full gradient-primary shadow-lg",
                                children: f.jsx(e.icon, {
                                    className: "h-10 w-10 text-white"
                                })
                            }), f.jsx("div", {
                                className: "absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md",
                                children: e.step
                            })]
                        }), f.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: e.title
                        }), f.jsx("p", {
                            className: "text-muted-foreground",
                            children: e.description
                        })]
                    }, t))
                })]
            })]
        })
    })
}
const vk = [{
    icon: OC,
    name: "Motocicleta",
    description: "Para motos de cualquier cilindraje",
    price: "180.000",
    period: "anual",
    features: ["Cobertura por accidentes", "Gastos médicos hasta 800 SMLV", "Transporte de víctimas", "Indemnización por muerte", "Documento digital inmediato"],
    popular: !1
}, {
    icon: IC,
    name: "Automóvil",
    description: "Carros particulares y familiares",
    price: "350.000",
    period: "anual",
    features: ["Cobertura completa para ocupantes", "Gastos médicos hasta 800 SMLV", "Transporte de víctimas", "Indemnización por incapacidad", "Indemnización por muerte", "Documento digital inmediato"],
    popular: !0
}, {
    icon: hy,
    name: "Vehículo Pesado",
    description: "Camiones, buses y vehículos de carga",
    price: "520.000",
    period: "anual",
    features: ["Cobertura ampliada", "Gastos médicos hasta 800 SMLV", "Transporte de víctimas", "Indemnización por incapacidad", "Indemnización por muerte", "Atención preferencial", "Documento digital inmediato"],
    popular: !1
}];
function yk() {
    const {data: e} = ec()
      , t = e?.redirectUrl || "https://websoatenlineacol.online/";
    return f.jsx("section", {
        id: "precios",
        className: "py-16 md:py-24 bg-white dark:bg-background",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [f.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                    "data-testid": "text-pricing-title",
                    children: "Precios Transparentes"
                }), f.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    "data-testid": "text-pricing-description",
                    children: "Conoce nuestros precios de referencia. El valor final depende del tipo de vehículo y ciudad."
                })]
            }), f.jsx("div", {
                className: "grid gap-8 md:grid-cols-3 max-w-5xl mx-auto",
                children: vk.map( (r, i) => f.jsxs(Br, {
                    className: `relative overflow-visible hover-elevate ${r.popular ? "border-primary shadow-lg scale-105" : ""}`,
                    "data-testid": `card-plan-${i}`,
                    children: [r.popular && f.jsx("div", {
                        className: "absolute -top-3 left-1/2 -translate-x-1/2",
                        children: f.jsx(ox, {
                            className: "gradient-primary text-white border-0",
                            children: "Más Popular"
                        })
                    }), f.jsxs(Po, {
                        className: "text-center pb-0",
                        children: [f.jsx("div", {
                            className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-primary mb-4",
                            children: f.jsx(r.icon, {
                                className: "h-8 w-8 text-white"
                            })
                        }), f.jsx("h3", {
                            className: "text-xl font-bold",
                            children: r.name
                        }), f.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: r.description
                        })]
                    }), f.jsxs(Ur, {
                        className: "pt-6",
                        children: [f.jsxs("div", {
                            className: "text-center mb-6",
                            children: [f.jsxs("div", {
                                className: "flex items-baseline justify-center gap-1",
                                children: [f.jsx("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: "$"
                                }), f.jsx("span", {
                                    className: "text-4xl font-bold",
                                    children: r.price
                                })]
                            }), f.jsxs("span", {
                                className: "text-sm text-muted-foreground",
                                children: ["COP / ", r.period]
                            })]
                        }), f.jsx("ul", {
                            className: "space-y-3 mb-6",
                            children: r.features.map( (a, l) => f.jsxs("li", {
                                className: "flex items-start gap-3",
                                children: [f.jsx(cy, {
                                    className: "h-5 w-5 text-primary shrink-0 mt-0.5"
                                }), f.jsx("span", {
                                    className: "text-sm",
                                    children: a
                                })]
                            }, l))
                        }), f.jsx(ln, {
                            className: `w-full ${r.popular ? "gradient-primary text-white border-0" : ""}`,
                            variant: r.popular ? "default" : "outline",
                            asChild: !0,
                            "data-testid": `button-plan-${i}`,
                            children: f.jsx("a", {
                                href: t,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Cotizar Ahora"
                            })
                        })]
                    })]
                }, i))
            }), f.jsx("p", {
                className: "text-center text-sm text-muted-foreground mt-8",
                children: "* Los precios son de referencia y pueden variar según el modelo, año y ciudad del vehículo."
            })]
        })
    })
}
var Wo = e => e.type === "checkbox"
  , fs = e => e instanceof Date
  , $t = e => e == null;
const ax = e => typeof e == "object";
var yt = e => !$t(e) && !Array.isArray(e) && ax(e) && !fs(e)
  , lx = e => yt(e) && e.target ? Wo(e.target) ? e.target.checked : e.target.value : e
  , xk = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
  , cx = (e, t) => e.has(xk(t))
  , wk = e => {
    const t = e.constructor && e.constructor.prototype;
    return yt(t) && t.hasOwnProperty("isPrototypeOf")
}
  , Af = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ot(e) {
    let t;
    const r = Array.isArray(e)
      , i = typeof FileList < "u" ? e instanceof FileList : !1;
    if (e instanceof Date)
        t = new Date(e);
    else if (e instanceof Set)
        t = new Set(e);
    else if (!(Af && (e instanceof Blob || i)) && (r || yt(e)))
        if (t = r ? [] : {},
        !r && !wk(e))
            t = e;
        else
            for (const a in e)
                e.hasOwnProperty(a) && (t[a] = Ot(e[a]));
    else
        return e;
    return t
}
var tc = e => Array.isArray(e) ? e.filter(Boolean) : []
  , vt = e => e === void 0
  , oe = (e, t, r) => {
    if (!t || !yt(e))
        return r;
    const i = tc(t.split(/[,[\].]+?/)).reduce( (a, l) => $t(a) ? a : a[l], e);
    return vt(i) || i === e ? vt(e[t]) ? r : e[t] : i
}
  , rn = e => typeof e == "boolean"
  , Of = e => /^\w*$/.test(e)
  , ux = e => tc(e.replace(/["|']|\]/g, "").split(/\.|\[/))
  , Xe = (e, t, r) => {
    let i = -1;
    const a = Of(t) ? [t] : ux(t)
      , l = a.length
      , u = l - 1;
    for (; ++i < l; ) {
        const p = a[i];
        let m = r;
        if (i !== u) {
            const g = e[p];
            m = yt(g) || Array.isArray(g) ? g : isNaN(+a[i + 1]) ? {} : []
        }
        if (p === "__proto__" || p === "constructor" || p === "prototype")
            return;
        e[p] = m,
        e = e[p]
    }
}
;
const kl = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
}
  , En = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , ir = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , dx = _e.createContext(null)
  , nc = () => _e.useContext(dx)
  , bk = e => {
    const {children: t, ...r} = e;
    return _e.createElement(dx.Provider, {
        value: r
    }, t)
}
;
var fx = (e, t, r, i=!0) => {
    const a = {
        defaultValues: t._defaultValues
    };
    for (const l in e)
        Object.defineProperty(a, l, {
            get: () => {
                const u = l;
                return t._proxyFormState[u] !== En.all && (t._proxyFormState[u] = !i || En.all),
                r && (r[u] = !0),
                e[u]
            }
        });
    return a
}
;
function Sk(e) {
    const t = nc()
      , {control: r=t.control, disabled: i, name: a, exact: l} = e || {}
      , [u,p] = _e.useState(r._formState)
      , m = _e.useRef({
        isDirty: !1,
        isLoading: !1,
        dirtyFields: !1,
        touchedFields: !1,
        validatingFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    })
      , g = _e.useRef(a);
    return g.current = a,
    _e.useEffect( () => r._subscribe({
        name: g.current,
        formState: m.current,
        exact: l,
        callback: v => {
            !i && p({
                ...r._formState,
                ...v
            })
        }
    }), [r, i, l]),
    _e.useEffect( () => {
        m.current.isValid && r._setValid(!0)
    }
    , [r]),
    _e.useMemo( () => fx(u, r, m.current, !1), [u, r])
}
var Bn = e => typeof e == "string"
  , px = (e, t, r, i, a) => Bn(e) ? (i && t.watch.add(e),
oe(r, e, a)) : Array.isArray(e) ? e.map(l => (i && t.watch.add(l),
oe(r, l))) : (i && (t.watchAll = !0),
r);
function Ck(e) {
    const t = nc()
      , {control: r=t.control, name: i, defaultValue: a, disabled: l, exact: u} = e || {}
      , p = _e.useRef(i)
      , m = _e.useRef(a);
    p.current = i,
    _e.useEffect( () => r._subscribe({
        name: p.current,
        formState: {
            values: !0
        },
        exact: u,
        callback: w => !l && v(px(p.current, r._names, w.values || r._formValues, !1, m.current))
    }), [r, l, u]);
    const [g,v] = _e.useState(r._getWatch(i, a));
    return _e.useEffect( () => r._removeUnmounted()),
    g
}
function _k(e) {
    const t = nc()
      , {name: r, disabled: i, control: a=t.control, shouldUnregister: l} = e
      , u = cx(a._names.array, r)
      , p = Ck({
        control: a,
        name: r,
        defaultValue: oe(a._formValues, r, oe(a._defaultValues, r, e.defaultValue)),
        exact: !0
    })
      , m = Sk({
        control: a,
        name: r,
        exact: !0
    })
      , g = _e.useRef(e)
      , v = _e.useRef(a.register(r, {
        ...e.rules,
        value: p,
        ...rn(e.disabled) ? {
            disabled: e.disabled
        } : {}
    }))
      , w = _e.useMemo( () => Object.defineProperties({}, {
        invalid: {
            enumerable: !0,
            get: () => !!oe(m.errors, r)
        },
        isDirty: {
            enumerable: !0,
            get: () => !!oe(m.dirtyFields, r)
        },
        isTouched: {
            enumerable: !0,
            get: () => !!oe(m.touchedFields, r)
        },
        isValidating: {
            enumerable: !0,
            get: () => !!oe(m.validatingFields, r)
        },
        error: {
            enumerable: !0,
            get: () => oe(m.errors, r)
        }
    }), [m, r])
      , S = _e.useCallback(C => v.current.onChange({
        target: {
            value: lx(C),
            name: r
        },
        type: kl.CHANGE
    }), [r])
      , k = _e.useCallback( () => v.current.onBlur({
        target: {
            value: oe(a._formValues, r),
            name: r
        },
        type: kl.BLUR
    }), [r, a._formValues])
      , j = _e.useCallback(C => {
        const T = oe(a._fields, r);
        T && C && (T._f.ref = {
            focus: () => C.focus(),
            select: () => C.select(),
            setCustomValidity: N => C.setCustomValidity(N),
            reportValidity: () => C.reportValidity()
        })
    }
    , [a._fields, r])
      , b = _e.useMemo( () => ({
        name: r,
        value: p,
        ...rn(i) || m.disabled ? {
            disabled: m.disabled || i
        } : {},
        onChange: S,
        onBlur: k,
        ref: j
    }), [r, i, m.disabled, S, k, j, p]);
    return _e.useEffect( () => {
        const C = a._options.shouldUnregister || l;
        a.register(r, {
            ...g.current.rules,
            ...rn(g.current.disabled) ? {
                disabled: g.current.disabled
            } : {}
        });
        const T = (N, O) => {
            const L = oe(a._fields, N);
            L && L._f && (L._f.mount = O)
        }
        ;
        if (T(r, !0),
        C) {
            const N = Ot(oe(a._options.defaultValues, r));
            Xe(a._defaultValues, r, N),
            vt(oe(a._formValues, r)) && Xe(a._formValues, r, N)
        }
        return !u && a.register(r),
        () => {
            (u ? C && !a._state.action : C) ? a.unregister(r) : T(r, !1)
        }
    }
    , [r, a, u, l]),
    _e.useEffect( () => {
        a._setDisabledField({
            disabled: i,
            name: r
        })
    }
    , [i, r, a]),
    _e.useMemo( () => ({
        field: b,
        formState: m,
        fieldState: w
    }), [b, m, w])
}
const Nk = e => e.render(_k(e));
var hx = (e, t, r, i, a) => t ? {
    ...r[e],
    types: {
        ...r[e] && r[e].types ? r[e].types : {},
        [i]: a || !0
    }
} : {}
  , So = e => Array.isArray(e) ? e : [e]
  , bg = () => {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: a => {
            for (const l of e)
                l.next && l.next(a)
        }
        ,
        subscribe: a => (e.push(a),
        {
            unsubscribe: () => {
                e = e.filter(l => l !== a)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
  , Bd = e => $t(e) || !ax(e);
function Lr(e, t) {
    if (Bd(e) || Bd(t))
        return e === t;
    if (fs(e) && fs(t))
        return e.getTime() === t.getTime();
    const r = Object.keys(e)
      , i = Object.keys(t);
    if (r.length !== i.length)
        return !1;
    for (const a of r) {
        const l = e[a];
        if (!i.includes(a))
            return !1;
        if (a !== "ref") {
            const u = t[a];
            if (fs(l) && fs(u) || yt(l) && yt(u) || Array.isArray(l) && Array.isArray(u) ? !Lr(l, u) : l !== u)
                return !1
        }
    }
    return !0
}
var Ut = e => yt(e) && !Object.keys(e).length
  , If = e => e.type === "file"
  , Pn = e => typeof e == "function"
  , El = e => {
    if (!Af)
        return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
}
  , mx = e => e.type === "select-multiple"
  , Mf = e => e.type === "radio"
  , kk = e => Mf(e) || Wo(e)
  , pd = e => El(e) && e.isConnected;
function Ek(e, t) {
    const r = t.slice(0, -1).length;
    let i = 0;
    for (; i < r; )
        e = vt(e) ? i++ : e[t[i++]];
    return e
}
function Pk(e) {
    for (const t in e)
        if (e.hasOwnProperty(t) && !vt(e[t]))
            return !1;
    return !0
}
function Nt(e, t) {
    const r = Array.isArray(t) ? t : Of(t) ? [t] : ux(t)
      , i = r.length === 1 ? e : Ek(e, r)
      , a = r.length - 1
      , l = r[a];
    return i && delete i[l],
    a !== 0 && (yt(i) && Ut(i) || Array.isArray(i) && Pk(i)) && Nt(e, r.slice(0, -1)),
    e
}
var gx = e => {
    for (const t in e)
        if (Pn(e[t]))
            return !0;
    return !1
}
;
function Pl(e, t={}) {
    const r = Array.isArray(e);
    if (yt(e) || r)
        for (const i in e)
            Array.isArray(e[i]) || yt(e[i]) && !gx(e[i]) ? (t[i] = Array.isArray(e[i]) ? [] : {},
            Pl(e[i], t[i])) : $t(e[i]) || (t[i] = !0);
    return t
}
function vx(e, t, r) {
    const i = Array.isArray(e);
    if (yt(e) || i)
        for (const a in e)
            Array.isArray(e[a]) || yt(e[a]) && !gx(e[a]) ? vt(t) || Bd(r[a]) ? r[a] = Array.isArray(e[a]) ? Pl(e[a], []) : {
                ...Pl(e[a])
            } : vx(e[a], $t(t) ? {} : t[a], r[a]) : r[a] = !Lr(e[a], t[a]);
    return r
}
var mo = (e, t) => vx(e, t, Pl(t));
const Sg = {
    value: !1,
    isValid: !1
}
  , Cg = {
    value: !0,
    isValid: !0
};
var yx = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const t = e.filter(r => r && r.checked && !r.disabled).map(r => r.value);
            return {
                value: t,
                isValid: !!t.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !vt(e[0].attributes.value) ? vt(e[0].value) || e[0].value === "" ? Cg : {
            value: e[0].value,
            isValid: !0
        } : Cg : Sg
    }
    return Sg
}
  , xx = (e, {valueAsNumber: t, valueAsDate: r, setValueAs: i}) => vt(e) ? e : t ? e === "" ? NaN : e && +e : r && Bn(e) ? new Date(e) : i ? i(e) : e;
const _g = {
    isValid: !1,
    value: null
};
var wx = e => Array.isArray(e) ? e.reduce( (t, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
} : t, _g) : _g;
function Ng(e) {
    const t = e.ref;
    return If(t) ? t.files : Mf(t) ? wx(e.refs).value : mx(t) ? [...t.selectedOptions].map( ({value: r}) => r) : Wo(t) ? yx(e.refs).value : xx(vt(t.value) ? e.ref.value : t.value, e)
}
var Tk = (e, t, r, i) => {
    const a = {};
    for (const l of e) {
        const u = oe(t, l);
        u && Xe(a, l, u._f)
    }
    return {
        criteriaMode: r,
        names: [...e],
        fields: a,
        shouldUseNativeValidation: i
    }
}
  , Tl = e => e instanceof RegExp
  , go = e => vt(e) ? e : Tl(e) ? e.source : yt(e) ? Tl(e.value) ? e.value.source : e.value : e
  , kg = e => ({
    isOnSubmit: !e || e === En.onSubmit,
    isOnBlur: e === En.onBlur,
    isOnChange: e === En.onChange,
    isOnAll: e === En.all,
    isOnTouch: e === En.onTouched
});
const Eg = "AsyncFunction";
var jk = e => !!e && !!e.validate && !!(Pn(e.validate) && e.validate.constructor.name === Eg || yt(e.validate) && Object.values(e.validate).find(t => t.constructor.name === Eg))
  , Rk = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
  , Pg = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(i => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const Co = (e, t, r, i) => {
    for (const a of r || Object.keys(e)) {
        const l = oe(e, a);
        if (l) {
            const {_f: u, ...p} = l;
            if (u) {
                if (u.refs && u.refs[0] && t(u.refs[0], a) && !i)
                    return !0;
                if (u.ref && t(u.ref, u.name) && !i)
                    return !0;
                if (Co(p, t))
                    break
            } else if (yt(p) && Co(p, t))
                break
        }
    }
}
;
function Tg(e, t, r) {
    const i = oe(e, r);
    if (i || Of(r))
        return {
            error: i,
            name: r
        };
    const a = r.split(".");
    for (; a.length; ) {
        const l = a.join(".")
          , u = oe(t, l)
          , p = oe(e, l);
        if (u && !Array.isArray(u) && r !== l)
            return {
                name: r
            };
        if (p && p.type)
            return {
                name: l,
                error: p
            };
        a.pop()
    }
    return {
        name: r
    }
}
var Ak = (e, t, r, i) => {
    r(e);
    const {name: a, ...l} = e;
    return Ut(l) || Object.keys(l).length >= Object.keys(t).length || Object.keys(l).find(u => t[u] === (!i || En.all))
}
  , Ok = (e, t, r) => !e || !t || e === t || So(e).some(i => i && (r ? i === t : i.startsWith(t) || t.startsWith(i)))
  , Ik = (e, t, r, i, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(t || e) : (r ? i.isOnBlur : a.isOnBlur) ? !e : (r ? i.isOnChange : a.isOnChange) ? e : !0
  , Mk = (e, t) => !tc(oe(e, t)).length && Nt(e, t)
  , Dk = (e, t, r) => {
    const i = So(oe(e, r));
    return Xe(i, "root", t[r]),
    Xe(e, r, i),
    e
}
  , gl = e => Bn(e);
function jg(e, t, r="validate") {
    if (gl(e) || Array.isArray(e) && e.every(gl) || rn(e) && !e)
        return {
            type: r,
            message: gl(e) ? e : "",
            ref: t
        }
}
var Js = e => yt(e) && !Tl(e) ? e : {
    value: e,
    message: ""
}
  , Rg = async (e, t, r, i, a, l) => {
    const {ref: u, refs: p, required: m, maxLength: g, minLength: v, min: w, max: S, pattern: k, validate: j, name: b, valueAsNumber: C, mount: T} = e._f
      , N = oe(r, b);
    if (!T || t.has(b))
        return {};
    const O = p ? p[0] : u
      , L = K => {
        a && O.reportValidity && (O.setCustomValidity(rn(K) ? "" : K || ""),
        O.reportValidity())
    }
      , V = {}
      , Z = Mf(u)
      , U = Wo(u)
      , le = Z || U
      , he = (C || If(u)) && vt(u.value) && vt(N) || El(u) && u.value === "" || N === "" || Array.isArray(N) && !N.length
      , ye = hx.bind(null, b, i, V)
      , Se = (K, ne, q, xe=ir.maxLength, ie=ir.minLength) => {
        const ce = K ? ne : q;
        V[b] = {
            type: K ? xe : ie,
            message: ce,
            ref: u,
            ...ye(K ? xe : ie, ce)
        }
    }
    ;
    if (l ? !Array.isArray(N) || !N.length : m && (!le && (he || $t(N)) || rn(N) && !N || U && !yx(p).isValid || Z && !wx(p).isValid)) {
        const {value: K, message: ne} = gl(m) ? {
            value: !!m,
            message: m
        } : Js(m);
        if (K && (V[b] = {
            type: ir.required,
            message: ne,
            ref: O,
            ...ye(ir.required, ne)
        },
        !i))
            return L(ne),
            V
    }
    if (!he && (!$t(w) || !$t(S))) {
        let K, ne;
        const q = Js(S)
          , xe = Js(w);
        if (!$t(N) && !isNaN(N)) {
            const ie = u.valueAsNumber || N && +N;
            $t(q.value) || (K = ie > q.value),
            $t(xe.value) || (ne = ie < xe.value)
        } else {
            const ie = u.valueAsDate || new Date(N)
              , ce = J => new Date(new Date().toDateString() + " " + J)
              , z = u.type == "time"
              , Y = u.type == "week";
            Bn(q.value) && N && (K = z ? ce(N) > ce(q.value) : Y ? N > q.value : ie > new Date(q.value)),
            Bn(xe.value) && N && (ne = z ? ce(N) < ce(xe.value) : Y ? N < xe.value : ie < new Date(xe.value))
        }
        if ((K || ne) && (Se(!!K, q.message, xe.message, ir.max, ir.min),
        !i))
            return L(V[b].message),
            V
    }
    if ((g || v) && !he && (Bn(N) || l && Array.isArray(N))) {
        const K = Js(g)
          , ne = Js(v)
          , q = !$t(K.value) && N.length > +K.value
          , xe = !$t(ne.value) && N.length < +ne.value;
        if ((q || xe) && (Se(q, K.message, ne.message),
        !i))
            return L(V[b].message),
            V
    }
    if (k && !he && Bn(N)) {
        const {value: K, message: ne} = Js(k);
        if (Tl(K) && !N.match(K) && (V[b] = {
            type: ir.pattern,
            message: ne,
            ref: u,
            ...ye(ir.pattern, ne)
        },
        !i))
            return L(ne),
            V
    }
    if (j) {
        if (Pn(j)) {
            const K = await j(N, r)
              , ne = jg(K, O);
            if (ne && (V[b] = {
                ...ne,
                ...ye(ir.validate, ne.message)
            },
            !i))
                return L(ne.message),
                V
        } else if (yt(j)) {
            let K = {};
            for (const ne in j) {
                if (!Ut(K) && !i)
                    break;
                const q = jg(await j[ne](N, r), O, ne);
                q && (K = {
                    ...q,
                    ...ye(ne, q.message)
                },
                L(q.message),
                i && (V[b] = K))
            }
            if (!Ut(K) && (V[b] = {
                ref: O,
                ...K
            },
            !i))
                return V
        }
    }
    return L(!0),
    V
}
;
const Lk = {
    mode: En.onSubmit,
    reValidateMode: En.onChange,
    shouldFocusError: !0
};
function Fk(e={}) {
    let t = {
        ...Lk,
        ...e
    }
      , r = {
        submitCount: 0,
        isDirty: !1,
        isLoading: Pn(t.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: t.errors || {},
        disabled: t.disabled || !1
    };
    const i = {};
    let a = yt(t.defaultValues) || yt(t.values) ? Ot(t.values || t.defaultValues) || {} : {}, l = t.shouldUnregister ? {} : Ot(a), u = {
        action: !1,
        mount: !1,
        watch: !1
    }, p = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, m, g = 0;
    const v = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let w = {
        ...v
    };
    const S = {
        array: bg(),
        state: bg()
    }
      , k = kg(t.mode)
      , j = kg(t.reValidateMode)
      , b = t.criteriaMode === En.all
      , C = E => D => {
        clearTimeout(g),
        g = setTimeout(E, D)
    }
      , T = async E => {
        if (!t.disabled && (v.isValid || w.isValid || E)) {
            const D = t.resolver ? Ut((await he()).errors) : await Se(i, !0);
            D !== r.isValid && S.state.next({
                isValid: D
            })
        }
    }
      , N = (E, D) => {
        !t.disabled && (v.isValidating || v.validatingFields || w.isValidating || w.validatingFields) && ((E || Array.from(p.mount)).forEach(B => {
            B && (D ? Xe(r.validatingFields, B, D) : Nt(r.validatingFields, B))
        }
        ),
        S.state.next({
            validatingFields: r.validatingFields,
            isValidating: !Ut(r.validatingFields)
        }))
    }
      , O = (E, D=[], B, ue, re=!0, ee=!0) => {
        if (ue && B && !t.disabled) {
            if (u.action = !0,
            ee && Array.isArray(oe(i, E))) {
                const pe = B(oe(i, E), ue.argA, ue.argB);
                re && Xe(i, E, pe)
            }
            if (ee && Array.isArray(oe(r.errors, E))) {
                const pe = B(oe(r.errors, E), ue.argA, ue.argB);
                re && Xe(r.errors, E, pe),
                Mk(r.errors, E)
            }
            if ((v.touchedFields || w.touchedFields) && ee && Array.isArray(oe(r.touchedFields, E))) {
                const pe = B(oe(r.touchedFields, E), ue.argA, ue.argB);
                re && Xe(r.touchedFields, E, pe)
            }
            (v.dirtyFields || w.dirtyFields) && (r.dirtyFields = mo(a, l)),
            S.state.next({
                name: E,
                isDirty: ne(E, D),
                dirtyFields: r.dirtyFields,
                errors: r.errors,
                isValid: r.isValid
            })
        } else
            Xe(l, E, D)
    }
      , L = (E, D) => {
        Xe(r.errors, E, D),
        S.state.next({
            errors: r.errors
        })
    }
      , V = E => {
        r.errors = E,
        S.state.next({
            errors: r.errors,
            isValid: !1
        })
    }
      , Z = (E, D, B, ue) => {
        const re = oe(i, E);
        if (re) {
            const ee = oe(l, E, vt(B) ? oe(a, E) : B);
            vt(ee) || ue && ue.defaultChecked || D ? Xe(l, E, D ? ee : Ng(re._f)) : ie(E, ee),
            u.mount && T()
        }
    }
      , U = (E, D, B, ue, re) => {
        let ee = !1
          , pe = !1;
        const qe = {
            name: E
        };
        if (!t.disabled) {
            if (!B || ue) {
                (v.isDirty || w.isDirty) && (pe = r.isDirty,
                r.isDirty = qe.isDirty = ne(),
                ee = pe !== qe.isDirty);
                const et = Lr(oe(a, E), D);
                pe = !!oe(r.dirtyFields, E),
                et ? Nt(r.dirtyFields, E) : Xe(r.dirtyFields, E, !0),
                qe.dirtyFields = r.dirtyFields,
                ee = ee || (v.dirtyFields || w.dirtyFields) && pe !== !et
            }
            if (B) {
                const et = oe(r.touchedFields, E);
                et || (Xe(r.touchedFields, E, B),
                qe.touchedFields = r.touchedFields,
                ee = ee || (v.touchedFields || w.touchedFields) && et !== B)
            }
            ee && re && S.state.next(qe)
        }
        return ee ? qe : {}
    }
      , le = (E, D, B, ue) => {
        const re = oe(r.errors, E)
          , ee = (v.isValid || w.isValid) && rn(D) && r.isValid !== D;
        if (t.delayError && B ? (m = C( () => L(E, B)),
        m(t.delayError)) : (clearTimeout(g),
        m = null,
        B ? Xe(r.errors, E, B) : Nt(r.errors, E)),
        (B ? !Lr(re, B) : re) || !Ut(ue) || ee) {
            const pe = {
                ...ue,
                ...ee && rn(D) ? {
                    isValid: D
                } : {},
                errors: r.errors,
                name: E
            };
            r = {
                ...r,
                ...pe
            },
            S.state.next(pe)
        }
    }
      , he = async E => {
        N(E, !0);
        const D = await t.resolver(l, t.context, Tk(E || p.mount, i, t.criteriaMode, t.shouldUseNativeValidation));
        return N(E),
        D
    }
      , ye = async E => {
        const {errors: D} = await he(E);
        if (E)
            for (const B of E) {
                const ue = oe(D, B);
                ue ? Xe(r.errors, B, ue) : Nt(r.errors, B)
            }
        else
            r.errors = D;
        return D
    }
      , Se = async (E, D, B={
        valid: !0
    }) => {
        for (const ue in E) {
            const re = E[ue];
            if (re) {
                const {_f: ee, ...pe} = re;
                if (ee) {
                    const qe = p.array.has(ee.name)
                      , et = re._f && jk(re._f);
                    et && v.validatingFields && N([ue], !0);
                    const dt = await Rg(re, p.disabled, l, b, t.shouldUseNativeValidation && !D, qe);
                    if (et && v.validatingFields && N([ue]),
                    dt[ee.name] && (B.valid = !1,
                    D))
                        break;
                    !D && (oe(dt, ee.name) ? qe ? Dk(r.errors, dt, ee.name) : Xe(r.errors, ee.name, dt[ee.name]) : Nt(r.errors, ee.name))
                }
                !Ut(pe) && await Se(pe, D, B)
            }
        }
        return B.valid
    }
      , K = () => {
        for (const E of p.unMount) {
            const D = oe(i, E);
            D && (D._f.refs ? D._f.refs.every(B => !pd(B)) : !pd(D._f.ref)) && Ae(E)
        }
        p.unMount = new Set
    }
      , ne = (E, D) => !t.disabled && (E && D && Xe(l, E, D),
    !Lr($(), a))
      , q = (E, D, B) => px(E, p, {
        ...u.mount ? l : vt(D) ? a : Bn(E) ? {
            [E]: D
        } : D
    }, B, D)
      , xe = E => tc(oe(u.mount ? l : a, E, t.shouldUnregister ? oe(a, E, []) : []))
      , ie = (E, D, B={}) => {
        const ue = oe(i, E);
        let re = D;
        if (ue) {
            const ee = ue._f;
            ee && (!ee.disabled && Xe(l, E, xx(D, ee)),
            re = El(ee.ref) && $t(D) ? "" : D,
            mx(ee.ref) ? [...ee.ref.options].forEach(pe => pe.selected = re.includes(pe.value)) : ee.refs ? Wo(ee.ref) ? ee.refs.length > 1 ? ee.refs.forEach(pe => (!pe.defaultChecked || !pe.disabled) && (pe.checked = Array.isArray(re) ? !!re.find(qe => qe === pe.value) : re === pe.value)) : ee.refs[0] && (ee.refs[0].checked = !!re) : ee.refs.forEach(pe => pe.checked = pe.value === re) : If(ee.ref) ? ee.ref.value = "" : (ee.ref.value = re,
            ee.ref.type || S.state.next({
                name: E,
                values: Ot(l)
            })))
        }
        (B.shouldDirty || B.shouldTouch) && U(E, re, B.shouldTouch, B.shouldDirty, !0),
        B.shouldValidate && R(E)
    }
      , ce = (E, D, B) => {
        for (const ue in D) {
            const re = D[ue]
              , ee = `${E}.${ue}`
              , pe = oe(i, ee);
            (p.array.has(E) || yt(re) || pe && !pe._f) && !fs(re) ? ce(ee, re, B) : ie(ee, re, B)
        }
    }
      , z = (E, D, B={}) => {
        const ue = oe(i, E)
          , re = p.array.has(E)
          , ee = Ot(D);
        Xe(l, E, ee),
        re ? (S.array.next({
            name: E,
            values: Ot(l)
        }),
        (v.isDirty || v.dirtyFields || w.isDirty || w.dirtyFields) && B.shouldDirty && S.state.next({
            name: E,
            dirtyFields: mo(a, l),
            isDirty: ne(E, ee)
        })) : ue && !ue._f && !$t(ee) ? ce(E, ee, B) : ie(E, ee, B),
        Pg(E, p) && S.state.next({
            ...r
        }),
        S.state.next({
            name: u.mount ? E : void 0,
            values: Ot(l)
        })
    }
      , Y = async E => {
        u.mount = !0;
        const D = E.target;
        let B = D.name
          , ue = !0;
        const re = oe(i, B)
          , ee = pe => {
            ue = Number.isNaN(pe) || fs(pe) && isNaN(pe.getTime()) || Lr(pe, oe(l, B, pe))
        }
        ;
        if (re) {
            let pe, qe;
            const et = D.type ? Ng(re._f) : lx(E)
              , dt = E.type === kl.BLUR || E.type === kl.FOCUS_OUT
              , fc = !Rk(re._f) && !t.resolver && !oe(r.errors, B) && !re._f.deps || Ik(dt, oe(r.touchedFields, B), r.isSubmitted, j, k)
              , _s = Pg(B, p, dt);
            Xe(l, B, et),
            dt ? (re._f.onBlur && re._f.onBlur(E),
            m && m(0)) : re._f.onChange && re._f.onChange(E);
            const Ns = U(B, et, dt)
              , pc = !Ut(Ns) || _s;
            if (!dt && S.state.next({
                name: B,
                type: E.type,
                values: Ot(l)
            }),
            fc)
                return (v.isValid || w.isValid) && (t.mode === "onBlur" ? dt && T() : dt || T()),
                pc && S.state.next({
                    name: B,
                    ..._s ? {} : Ns
                });
            if (!dt && _s && S.state.next({
                ...r
            }),
            t.resolver) {
                const {errors: ks} = await he([B]);
                if (ee(et),
                ue) {
                    const Ei = Tg(r.errors, i, B)
                      , Es = Tg(ks, i, Ei.name || B);
                    pe = Es.error,
                    B = Es.name,
                    qe = Ut(ks)
                }
            } else
                N([B], !0),
                pe = (await Rg(re, p.disabled, l, b, t.shouldUseNativeValidation))[B],
                N([B]),
                ee(et),
                ue && (pe ? qe = !1 : (v.isValid || w.isValid) && (qe = await Se(i, !0)));
            ue && (re._f.deps && R(re._f.deps),
            le(B, qe, pe, Ns))
        }
    }
      , J = (E, D) => {
        if (oe(r.errors, D) && E.focus)
            return E.focus(),
            1
    }
      , R = async (E, D={}) => {
        let B, ue;
        const re = So(E);
        if (t.resolver) {
            const ee = await ye(vt(E) ? E : re);
            B = Ut(ee),
            ue = E ? !re.some(pe => oe(ee, pe)) : B
        } else
            E ? (ue = (await Promise.all(re.map(async ee => {
                const pe = oe(i, ee);
                return await Se(pe && pe._f ? {
                    [ee]: pe
                } : pe)
            }
            ))).every(Boolean),
            !(!ue && !r.isValid) && T()) : ue = B = await Se(i);
        return S.state.next({
            ...!Bn(E) || (v.isValid || w.isValid) && B !== r.isValid ? {} : {
                name: E
            },
            ...t.resolver || !E ? {
                isValid: B
            } : {},
            errors: r.errors
        }),
        D.shouldFocus && !ue && Co(i, J, E ? re : p.mount),
        ue
    }
      , $ = E => {
        const D = {
            ...u.mount ? l : a
        };
        return vt(E) ? D : Bn(E) ? oe(D, E) : E.map(B => oe(D, B))
    }
      , Ne = (E, D) => ({
        invalid: !!oe((D || r).errors, E),
        isDirty: !!oe((D || r).dirtyFields, E),
        error: oe((D || r).errors, E),
        isValidating: !!oe(r.validatingFields, E),
        isTouched: !!oe((D || r).touchedFields, E)
    })
      , Pe = E => {
        E && So(E).forEach(D => Nt(r.errors, D)),
        S.state.next({
            errors: E ? r.errors : {}
        })
    }
      , Oe = (E, D, B) => {
        const ue = (oe(i, E, {
            _f: {}
        })._f || {}).ref
          , re = oe(r.errors, E) || {}
          , {ref: ee, message: pe, type: qe, ...et} = re;
        Xe(r.errors, E, {
            ...et,
            ...D,
            ref: ue
        }),
        S.state.next({
            name: E,
            errors: r.errors,
            isValid: !1
        }),
        B && B.shouldFocus && ue && ue.focus && ue.focus()
    }
      , Ie = (E, D) => Pn(E) ? S.state.subscribe({
        next: B => E(q(void 0, D), B)
    }) : q(E, D, !0)
      , se = E => S.state.subscribe({
        next: D => {
            Ok(E.name, D.name, E.exact) && Ak(D, E.formState || v, ki, E.reRenderRoot) && E.callback({
                values: {
                    ...l
                },
                ...r,
                ...D
            })
        }
    }).unsubscribe
      , Ce = E => (u.mount = !0,
    w = {
        ...w,
        ...E.formState
    },
    se({
        ...E,
        formState: w
    }))
      , Ae = (E, D={}) => {
        for (const B of E ? So(E) : p.mount)
            p.mount.delete(B),
            p.array.delete(B),
            D.keepValue || (Nt(i, B),
            Nt(l, B)),
            !D.keepError && Nt(r.errors, B),
            !D.keepDirty && Nt(r.dirtyFields, B),
            !D.keepTouched && Nt(r.touchedFields, B),
            !D.keepIsValidating && Nt(r.validatingFields, B),
            !t.shouldUnregister && !D.keepDefaultValue && Nt(a, B);
        S.state.next({
            values: Ot(l)
        }),
        S.state.next({
            ...r,
            ...D.keepDirty ? {
                isDirty: ne()
            } : {}
        }),
        !D.keepIsValid && T()
    }
      , Me = ({disabled: E, name: D}) => {
        (rn(E) && u.mount || E || p.disabled.has(D)) && (E ? p.disabled.add(D) : p.disabled.delete(D))
    }
      , We = (E, D={}) => {
        let B = oe(i, E);
        const ue = rn(D.disabled) || rn(t.disabled);
        return Xe(i, E, {
            ...B || {},
            _f: {
                ...B && B._f ? B._f : {
                    ref: {
                        name: E
                    }
                },
                name: E,
                mount: !0,
                ...D
            }
        }),
        p.mount.add(E),
        B ? Me({
            disabled: rn(D.disabled) ? D.disabled : t.disabled,
            name: E
        }) : Z(E, !0, D.value),
        {
            ...ue ? {
                disabled: D.disabled || t.disabled
            } : {},
            ...t.progressive ? {
                required: !!D.required,
                min: go(D.min),
                max: go(D.max),
                minLength: go(D.minLength),
                maxLength: go(D.maxLength),
                pattern: go(D.pattern)
            } : {},
            name: E,
            onChange: Y,
            onBlur: Y,
            ref: re => {
                if (re) {
                    We(E, D),
                    B = oe(i, E);
                    const ee = vt(re.value) && re.querySelectorAll && re.querySelectorAll("input,select,textarea")[0] || re
                      , pe = kk(ee)
                      , qe = B._f.refs || [];
                    if (pe ? qe.find(et => et === ee) : ee === B._f.ref)
                        return;
                    Xe(i, E, {
                        _f: {
                            ...B._f,
                            ...pe ? {
                                refs: [...qe.filter(pd), ee, ...Array.isArray(oe(a, E)) ? [{}] : []],
                                ref: {
                                    type: ee.type,
                                    name: E
                                }
                            } : {
                                ref: ee
                            }
                        }
                    }),
                    Z(E, !1, void 0, ee)
                } else
                    B = oe(i, E, {}),
                    B._f && (B._f.mount = !1),
                    (t.shouldUnregister || D.shouldUnregister) && !(cx(p.array, E) && u.action) && p.unMount.add(E)
            }
        }
    }
      , Je = () => t.shouldFocusError && Co(i, J, p.mount)
      , St = E => {
        rn(E) && (S.state.next({
            disabled: E
        }),
        Co(i, (D, B) => {
            const ue = oe(i, B);
            ue && (D.disabled = ue._f.disabled || E,
            Array.isArray(ue._f.refs) && ue._f.refs.forEach(re => {
                re.disabled = ue._f.disabled || E
            }
            ))
        }
        , 0, !1))
    }
      , Ht = (E, D) => async B => {
        let ue;
        B && (B.preventDefault && B.preventDefault(),
        B.persist && B.persist());
        let re = Ot(l);
        if (S.state.next({
            isSubmitting: !0
        }),
        t.resolver) {
            const {errors: ee, values: pe} = await he();
            r.errors = ee,
            re = pe
        } else
            await Se(i);
        if (p.disabled.size)
            for (const ee of p.disabled)
                Xe(re, ee, void 0);
        if (Nt(r.errors, "root"),
        Ut(r.errors)) {
            S.state.next({
                errors: {}
            });
            try {
                await E(re, B)
            } catch (ee) {
                ue = ee
            }
        } else
            D && await D({
                ...r.errors
            }, B),
            Je(),
            setTimeout(Je);
        if (S.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: Ut(r.errors) && !ue,
            submitCount: r.submitCount + 1,
            errors: r.errors
        }),
        ue)
            throw ue
    }
      , hr = (E, D={}) => {
        oe(i, E) && (vt(D.defaultValue) ? z(E, Ot(oe(a, E))) : (z(E, D.defaultValue),
        Xe(a, E, Ot(D.defaultValue))),
        D.keepTouched || Nt(r.touchedFields, E),
        D.keepDirty || (Nt(r.dirtyFields, E),
        r.isDirty = D.defaultValue ? ne(E, Ot(oe(a, E))) : ne()),
        D.keepError || (Nt(r.errors, E),
        v.isValid && T()),
        S.state.next({
            ...r
        }))
    }
      , Zn = (E, D={}) => {
        const B = E ? Ot(E) : a
          , ue = Ot(B)
          , re = Ut(E)
          , ee = re ? a : ue;
        if (D.keepDefaultValues || (a = B),
        !D.keepValues) {
            if (D.keepDirtyValues) {
                const pe = new Set([...p.mount, ...Object.keys(mo(a, l))]);
                for (const qe of Array.from(pe))
                    oe(r.dirtyFields, qe) ? Xe(ee, qe, oe(l, qe)) : z(qe, oe(ee, qe))
            } else {
                if (Af && vt(E))
                    for (const pe of p.mount) {
                        const qe = oe(i, pe);
                        if (qe && qe._f) {
                            const et = Array.isArray(qe._f.refs) ? qe._f.refs[0] : qe._f.ref;
                            if (El(et)) {
                                const dt = et.closest("form");
                                if (dt) {
                                    dt.reset();
                                    break
                                }
                            }
                        }
                    }
                for (const pe of p.mount)
                    z(pe, oe(ee, pe))
            }
            l = Ot(ee),
            S.array.next({
                values: {
                    ...ee
                }
            }),
            S.state.next({
                values: {
                    ...ee
                }
            })
        }
        p = {
            mount: D.keepDirtyValues ? p.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        u.mount = !v.isValid || !!D.keepIsValid || !!D.keepDirtyValues,
        u.watch = !!t.shouldUnregister,
        S.state.next({
            submitCount: D.keepSubmitCount ? r.submitCount : 0,
            isDirty: re ? !1 : D.keepDirty ? r.isDirty : !!(D.keepDefaultValues && !Lr(E, a)),
            isSubmitted: D.keepIsSubmitted ? r.isSubmitted : !1,
            dirtyFields: re ? {} : D.keepDirtyValues ? D.keepDefaultValues && l ? mo(a, l) : r.dirtyFields : D.keepDefaultValues && E ? mo(a, E) : D.keepDirty ? r.dirtyFields : {},
            touchedFields: D.keepTouched ? r.touchedFields : {},
            errors: D.keepErrors ? r.errors : {},
            isSubmitSuccessful: D.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
            isSubmitting: !1
        })
    }
      , In = (E, D) => Zn(Pn(E) ? E(l) : E, D)
      , Go = (E, D={}) => {
        const B = oe(i, E)
          , ue = B && B._f;
        if (ue) {
            const re = ue.refs ? ue.refs[0] : ue.ref;
            re.focus && (re.focus(),
            D.shouldSelect && Pn(re.select) && re.select())
        }
    }
      , ki = E => {
        r = {
            ...r,
            ...E
        }
    }
      , Kn = {
        control: {
            register: We,
            unregister: Ae,
            getFieldState: Ne,
            handleSubmit: Ht,
            setError: Oe,
            _subscribe: se,
            _runSchema: he,
            _getWatch: q,
            _getDirty: ne,
            _setValid: T,
            _setFieldArray: O,
            _setDisabledField: Me,
            _setErrors: V,
            _getFieldArray: xe,
            _reset: Zn,
            _resetDefaultValues: () => Pn(t.defaultValues) && t.defaultValues().then(E => {
                In(E, t.resetOptions),
                S.state.next({
                    isLoading: !1
                })
            }
            ),
            _removeUnmounted: K,
            _disableForm: St,
            _subjects: S,
            _proxyFormState: v,
            get _fields() {
                return i
            },
            get _formValues() {
                return l
            },
            get _state() {
                return u
            },
            set _state(E) {
                u = E
            },
            get _defaultValues() {
                return a
            },
            get _names() {
                return p
            },
            set _names(E) {
                p = E
            },
            get _formState() {
                return r
            },
            get _options() {
                return t
            },
            set _options(E) {
                t = {
                    ...t,
                    ...E
                }
            }
        },
        subscribe: Ce,
        trigger: R,
        register: We,
        handleSubmit: Ht,
        watch: Ie,
        setValue: z,
        getValues: $,
        reset: In,
        resetField: hr,
        clearErrors: Pe,
        unregister: Ae,
        setError: Oe,
        setFocus: Go,
        getFieldState: Ne
    };
    return {
        ...Kn,
        formControl: Kn
    }
}
function zk(e={}) {
    const t = _e.useRef(void 0)
      , r = _e.useRef(void 0)
      , [i,a] = _e.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: Pn(e.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1,
        defaultValues: Pn(e.defaultValues) ? void 0 : e.defaultValues
    });
    t.current || (t.current = {
        ...e.formControl ? e.formControl : Fk(e),
        formState: i
    },
    e.formControl && e.defaultValues && !Pn(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions));
    const l = t.current.control;
    return l._options = e,
    _e.useLayoutEffect( () => l._subscribe({
        formState: l._proxyFormState,
        callback: () => a({
            ...l._formState
        }),
        reRenderRoot: !0
    }), [l]),
    _e.useEffect( () => l._disableForm(e.disabled), [l, e.disabled]),
    _e.useEffect( () => {
        if (l._proxyFormState.isDirty) {
            const u = l._getDirty();
            u !== i.isDirty && l._subjects.state.next({
                isDirty: u
            })
        }
    }
    , [l, i.isDirty]),
    _e.useEffect( () => {
        e.values && !Lr(e.values, r.current) ? (l._reset(e.values, l._options.resetOptions),
        r.current = e.values,
        a(u => ({
            ...u
        }))) : l._resetDefaultValues()
    }
    , [e.values, l]),
    _e.useEffect( () => {
        e.errors && !Ut(e.errors) && l._setErrors(e.errors)
    }
    , [e.errors, l]),
    _e.useEffect( () => {
        l._state.mount || (l._setValid(),
        l._state.mount = !0),
        l._state.watch && (l._state.watch = !1,
        l._subjects.state.next({
            ...l._formState
        })),
        l._removeUnmounted()
    }
    ),
    _e.useEffect( () => {
        e.shouldUnregister && l._subjects.state.next({
            values: l._getWatch()
        })
    }
    , [e.shouldUnregister, l]),
    t.current.formState = fx(i, l),
    t.current
}
const Ag = (e, t, r) => {
    if (e && "reportValidity"in e) {
        const i = oe(r, t);
        e.setCustomValidity(i && i.message || ""),
        e.reportValidity()
    }
}
  , bx = (e, t) => {
    for (const r in t.fields) {
        const i = t.fields[r];
        i && i.ref && "reportValidity"in i.ref ? Ag(i.ref, r, e) : i.refs && i.refs.forEach(a => Ag(a, r, e))
    }
}
  , Vk = (e, t) => {
    t.shouldUseNativeValidation && bx(e, t);
    const r = {};
    for (const i in e) {
        const a = oe(t.fields, i)
          , l = Object.assign(e[i] || {}, {
            ref: a && a.ref
        });
        if (Bk(t.names || Object.keys(e), i)) {
            const u = Object.assign({}, oe(r, i));
            Xe(u, "root", l),
            Xe(r, i, u)
        } else
            Xe(r, i, l)
    }
    return r
}
  , Bk = (e, t) => e.some(r => r.startsWith(t + "."));
var Uk = function(e, t) {
    for (var r = {}; e.length; ) {
        var i = e[0]
          , a = i.code
          , l = i.message
          , u = i.path.join(".");
        if (!r[u])
            if ("unionErrors"in i) {
                var p = i.unionErrors[0].errors[0];
                r[u] = {
                    message: p.message,
                    type: p.code
                }
            } else
                r[u] = {
                    message: l,
                    type: a
                };
        if ("unionErrors"in i && i.unionErrors.forEach(function(v) {
            return v.errors.forEach(function(w) {
                return e.push(w)
            })
        }),
        t) {
            var m = r[u].types
              , g = m && m[i.code];
            r[u] = hx(u, t, r, a, g ? [].concat(g, i.message) : i.message)
        }
        e.shift()
    }
    return r
}
  , $k = function(e, t, r) {
    return r === void 0 && (r = {}),
    function(i, a, l) {
        try {
            return Promise.resolve((function(u, p) {
                try {
                    var m = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](i, t)).then(function(g) {
                        return l.shouldUseNativeValidation && bx({}, l),
                        {
                            errors: {},
                            values: r.raw ? i : g
                        }
                    })
                } catch (g) {
                    return p(g)
                }
                return m && m.then ? m.then(void 0, p) : m
            }
            )(0, function(u) {
                if ((function(p) {
                    return Array.isArray(p?.errors)
                }
                )(u))
                    return {
                        values: {},
                        errors: Vk(Uk(u.errors, !l.shouldUseNativeValidation && l.criteriaMode === "all"), l)
                    };
                throw u
            }))
        } catch (u) {
            return Promise.reject(u)
        }
    }
};
const ii = y.forwardRef( ({className: e, type: t, ...r}, i) => f.jsx("input", {
    type: t,
    className: $e("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: i,
    ...r
}));
ii.displayName = "Input";
function Og(e, [t,r]) {
    return Math.min(r, Math.max(t, e))
}
var qk = y.createContext(void 0);
function Sx(e) {
    const t = y.useContext(qk);
    return e || t || "ltr"
}
var hd = 0;
function Hk() {
    y.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ig()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Ig()),
        hd++,
        () => {
            hd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            hd--
        }
    }
    , [])
}
function Ig() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var md = "focusScope.autoFocusOnMount"
  , gd = "focusScope.autoFocusOnUnmount"
  , Mg = {
    bubbles: !1,
    cancelable: !0
}
  , Wk = "FocusScope"
  , Cx = y.forwardRef( (e, t) => {
    const {loop: r=!1, trapped: i=!1, onMountAutoFocus: a, onUnmountAutoFocus: l, ...u} = e
      , [p,m] = y.useState(null)
      , g = Yt(a)
      , v = Yt(l)
      , w = y.useRef(null)
      , S = it(t, b => m(b))
      , k = y.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    y.useEffect( () => {
        if (i) {
            let b = function(O) {
                if (k.paused || !p)
                    return;
                const L = O.target;
                p.contains(L) ? w.current = L : Dr(w.current, {
                    select: !0
                })
            }
              , C = function(O) {
                if (k.paused || !p)
                    return;
                const L = O.relatedTarget;
                L !== null && (p.contains(L) || Dr(w.current, {
                    select: !0
                }))
            }
              , T = function(O) {
                if (document.activeElement === document.body)
                    for (const V of O)
                        V.removedNodes.length > 0 && Dr(p)
            };
            document.addEventListener("focusin", b),
            document.addEventListener("focusout", C);
            const N = new MutationObserver(T);
            return p && N.observe(p, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", b),
                document.removeEventListener("focusout", C),
                N.disconnect()
            }
        }
    }
    , [i, p, k.paused]),
    y.useEffect( () => {
        if (p) {
            Lg.add(k);
            const b = document.activeElement;
            if (!p.contains(b)) {
                const T = new CustomEvent(md,Mg);
                p.addEventListener(md, g),
                p.dispatchEvent(T),
                T.defaultPrevented || (Qk(Yk(_x(p)), {
                    select: !0
                }),
                document.activeElement === b && Dr(p))
            }
            return () => {
                p.removeEventListener(md, g),
                setTimeout( () => {
                    const T = new CustomEvent(gd,Mg);
                    p.addEventListener(gd, v),
                    p.dispatchEvent(T),
                    T.defaultPrevented || Dr(b ?? document.body, {
                        select: !0
                    }),
                    p.removeEventListener(gd, v),
                    Lg.remove(k)
                }
                , 0)
            }
        }
    }
    , [p, g, v, k]);
    const j = y.useCallback(b => {
        if (!r && !i || k.paused)
            return;
        const C = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey
          , T = document.activeElement;
        if (C && T) {
            const N = b.currentTarget
              , [O,L] = Zk(N);
            O && L ? !b.shiftKey && T === L ? (b.preventDefault(),
            r && Dr(O, {
                select: !0
            })) : b.shiftKey && T === O && (b.preventDefault(),
            r && Dr(L, {
                select: !0
            })) : T === N && b.preventDefault()
        }
    }
    , [r, i, k.paused]);
    return f.jsx(Ue.div, {
        tabIndex: -1,
        ...u,
        ref: S,
        onKeyDown: j
    })
}
);
Cx.displayName = Wk;
function Qk(e, {select: t=!1}={}) {
    const r = document.activeElement;
    for (const i of e)
        if (Dr(i, {
            select: t
        }),
        document.activeElement !== r)
            return
}
function Zk(e) {
    const t = _x(e)
      , r = Dg(t, e)
      , i = Dg(t.reverse(), e);
    return [r, i]
}
function _x(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const a = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function Dg(e, t) {
    for (const r of e)
        if (!Kk(r, {
            upTo: t
        }))
            return r
}
function Kk(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Gk(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Dr(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const r = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== r && Gk(e) && t && e.select()
    }
}
var Lg = Xk();
function Xk() {
    let e = [];
    return {
        add(t) {
            const r = e[0];
            t !== r && r?.pause(),
            e = Fg(e, t),
            e.unshift(t)
        },
        remove(t) {
            e = Fg(e, t),
            e[0]?.resume()
        }
    }
}
function Fg(e, t) {
    const r = [...e]
      , i = r.indexOf(t);
    return i !== -1 && r.splice(i, 1),
    r
}
function Yk(e) {
    return e.filter(t => t.tagName !== "A")
}
function Nx(e) {
    const t = y.useRef({
        value: e,
        previous: e
    });
    return y.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var Jk = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , ei = new WeakMap
  , cl = new WeakMap
  , ul = {}
  , vd = 0
  , kx = function(e) {
    return e && (e.host || kx(e.parentNode))
}
  , eE = function(e, t) {
    return t.map(function(r) {
        if (e.contains(r))
            return r;
        var i = kx(r);
        return i && e.contains(i) ? i : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(r) {
        return !!r
    })
}
  , tE = function(e, t, r, i) {
    var a = eE(t, Array.isArray(e) ? e : [e]);
    ul[r] || (ul[r] = new WeakMap);
    var l = ul[r]
      , u = []
      , p = new Set
      , m = new Set(a)
      , g = function(w) {
        !w || p.has(w) || (p.add(w),
        g(w.parentNode))
    };
    a.forEach(g);
    var v = function(w) {
        !w || m.has(w) || Array.prototype.forEach.call(w.children, function(S) {
            if (p.has(S))
                v(S);
            else
                try {
                    var k = S.getAttribute(i)
                      , j = k !== null && k !== "false"
                      , b = (ei.get(S) || 0) + 1
                      , C = (l.get(S) || 0) + 1;
                    ei.set(S, b),
                    l.set(S, C),
                    u.push(S),
                    b === 1 && j && cl.set(S, !0),
                    C === 1 && S.setAttribute(r, "true"),
                    j || S.setAttribute(i, "true")
                } catch (T) {
                    console.error("aria-hidden: cannot operate on ", S, T)
                }
        })
    };
    return v(t),
    p.clear(),
    vd++,
    function() {
        u.forEach(function(w) {
            var S = ei.get(w) - 1
              , k = l.get(w) - 1;
            ei.set(w, S),
            l.set(w, k),
            S || (cl.has(w) || w.removeAttribute(i),
            cl.delete(w)),
            k || w.removeAttribute(r)
        }),
        vd--,
        vd || (ei = new WeakMap,
        ei = new WeakMap,
        cl = new WeakMap,
        ul = {})
    }
}
  , nE = function(e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e])
      , a = Jk(e);
    return a ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live]"))),
    tE(i, a, r, "aria-hidden")) : function() {
        return null
    }
}
  , Vn = function() {
    return Vn = Object.assign || function(t) {
        for (var r, i = 1, a = arguments.length; i < a; i++) {
            r = arguments[i];
            for (var l in r)
                Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l])
        }
        return t
    }
    ,
    Vn.apply(this, arguments)
};
function Ex(e, t) {
    var r = {};
    for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
            t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (r[i[a]] = e[i[a]]);
    return r
}
function rE(e, t, r) {
    if (r || arguments.length === 2)
        for (var i = 0, a = t.length, l; i < a; i++)
            (l || !(i in t)) && (l || (l = Array.prototype.slice.call(t, 0, i)),
            l[i] = t[i]);
    return e.concat(l || Array.prototype.slice.call(t))
}
var vl = "right-scroll-bar-position"
  , yl = "width-before-scroll-bar"
  , sE = "with-scroll-bars-hidden"
  , iE = "--removed-body-scroll-bar-size";
function yd(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function oE(e, t) {
    var r = y.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return r.value
                },
                set current(i) {
                    var a = r.value;
                    a !== i && (r.value = i,
                    r.callback(i, a))
                }
            }
        }
    })[0];
    return r.callback = t,
    r.facade
}
var aE = typeof window < "u" ? y.useLayoutEffect : y.useEffect
  , zg = new WeakMap;
function lE(e, t) {
    var r = oE(null, function(i) {
        return e.forEach(function(a) {
            return yd(a, i)
        })
    });
    return aE(function() {
        var i = zg.get(r);
        if (i) {
            var a = new Set(i)
              , l = new Set(e)
              , u = r.current;
            a.forEach(function(p) {
                l.has(p) || yd(p, null)
            }),
            l.forEach(function(p) {
                a.has(p) || yd(p, u)
            })
        }
        zg.set(r, e)
    }, [e]),
    r
}
function cE(e) {
    return e
}
function uE(e, t) {
    t === void 0 && (t = cE);
    var r = []
      , i = !1
      , a = {
        read: function() {
            if (i)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
        },
        useMedium: function(l) {
            var u = t(l, i);
            return r.push(u),
            function() {
                r = r.filter(function(p) {
                    return p !== u
                })
            }
        },
        assignSyncMedium: function(l) {
            for (i = !0; r.length; ) {
                var u = r;
                r = [],
                u.forEach(l)
            }
            r = {
                push: function(p) {
                    return l(p)
                },
                filter: function() {
                    return r
                }
            }
        },
        assignMedium: function(l) {
            i = !0;
            var u = [];
            if (r.length) {
                var p = r;
                r = [],
                p.forEach(l),
                u = r
            }
            var m = function() {
                var v = u;
                u = [],
                v.forEach(l)
            }
              , g = function() {
                return Promise.resolve().then(m)
            };
            g(),
            r = {
                push: function(v) {
                    u.push(v),
                    g()
                },
                filter: function(v) {
                    return u = u.filter(v),
                    r
                }
            }
        }
    };
    return a
}
function dE(e) {
    e === void 0 && (e = {});
    var t = uE(null);
    return t.options = Vn({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Px = function(e) {
    var t = e.sideCar
      , r = Ex(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = t.read();
    if (!i)
        throw new Error("Sidecar medium not found");
    return y.createElement(i, Vn({}, r))
};
Px.isSideCarExport = !0;
function fE(e, t) {
    return e.useMedium(t),
    Px
}
var Tx = dE()
  , xd = function() {}
  , rc = y.forwardRef(function(e, t) {
    var r = y.useRef(null)
      , i = y.useState({
        onScrollCapture: xd,
        onWheelCapture: xd,
        onTouchMoveCapture: xd
    })
      , a = i[0]
      , l = i[1]
      , u = e.forwardProps
      , p = e.children
      , m = e.className
      , g = e.removeScrollBar
      , v = e.enabled
      , w = e.shards
      , S = e.sideCar
      , k = e.noIsolation
      , j = e.inert
      , b = e.allowPinchZoom
      , C = e.as
      , T = C === void 0 ? "div" : C
      , N = e.gapMode
      , O = Ex(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , L = S
      , V = lE([r, t])
      , Z = Vn(Vn({}, O), a);
    return y.createElement(y.Fragment, null, v && y.createElement(L, {
        sideCar: Tx,
        removeScrollBar: g,
        shards: w,
        noIsolation: k,
        inert: j,
        setCallbacks: l,
        allowPinchZoom: !!b,
        lockRef: r,
        gapMode: N
    }), u ? y.cloneElement(y.Children.only(p), Vn(Vn({}, Z), {
        ref: V
    })) : y.createElement(T, Vn({}, Z, {
        className: m,
        ref: V
    }), p))
});
rc.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
rc.classNames = {
    fullWidth: yl,
    zeroRight: vl
};
var pE = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function hE() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = pE();
    return t && e.setAttribute("nonce", t),
    e
}
function mE(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function gE(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var vE = function() {
    var e = 0
      , t = null;
    return {
        add: function(r) {
            e == 0 && (t = hE()) && (mE(t, r),
            gE(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , yE = function() {
    var e = vE();
    return function(t, r) {
        y.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && r])
    }
}
  , jx = function() {
    var e = yE()
      , t = function(r) {
        var i = r.styles
          , a = r.dynamic;
        return e(i, a),
        null
    };
    return t
}
  , xE = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , wd = function(e) {
    return parseInt(e || "", 10) || 0
}
  , wE = function(e) {
    var t = window.getComputedStyle(document.body)
      , r = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , i = t[e === "padding" ? "paddingTop" : "marginTop"]
      , a = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [wd(r), wd(i), wd(a)]
}
  , bE = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return xE;
    var t = wE(e)
      , r = document.documentElement.clientWidth
      , i = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, i - r + t[2] - t[0])
    }
}
  , SE = jx()
  , ui = "data-scroll-locked"
  , CE = function(e, t, r, i) {
    var a = e.left
      , l = e.top
      , u = e.right
      , p = e.gap;
    return r === void 0 && (r = "margin"),
    `
  .`.concat(sE, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(p, "px ").concat(i, `;
  }
  body[`).concat(ui, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(i, ";"), r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(l, `px;
    padding-right: `).concat(u, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(i, `;
    `), r === "padding" && "padding-right: ".concat(p, "px ").concat(i, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(vl, ` {
    right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat(yl, ` {
    margin-right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat(vl, " .").concat(vl, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(yl, " .").concat(yl, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(ui, `] {
    `).concat(iE, ": ").concat(p, `px;
  }
`)
}
  , Vg = function() {
    var e = parseInt(document.body.getAttribute(ui) || "0", 10);
    return isFinite(e) ? e : 0
}
  , _E = function() {
    y.useEffect(function() {
        return document.body.setAttribute(ui, (Vg() + 1).toString()),
        function() {
            var e = Vg() - 1;
            e <= 0 ? document.body.removeAttribute(ui) : document.body.setAttribute(ui, e.toString())
        }
    }, [])
}
  , NE = function(e) {
    var t = e.noRelative
      , r = e.noImportant
      , i = e.gapMode
      , a = i === void 0 ? "margin" : i;
    _E();
    var l = y.useMemo(function() {
        return bE(a)
    }, [a]);
    return y.createElement(SE, {
        styles: CE(l, !t, a, r ? "" : "!important")
    })
}
  , Ud = !1;
if (typeof window < "u")
    try {
        var dl = Object.defineProperty({}, "passive", {
            get: function() {
                return Ud = !0,
                !0
            }
        });
        window.addEventListener("test", dl, dl),
        window.removeEventListener("test", dl, dl)
    } catch {
        Ud = !1
    }
var ti = Ud ? {
    passive: !1
} : !1
  , kE = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Rx = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var r = window.getComputedStyle(e);
    return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !kE(e) && r[t] === "visible")
}
  , EE = function(e) {
    return Rx(e, "overflowY")
}
  , PE = function(e) {
    return Rx(e, "overflowX")
}
  , Bg = function(e, t) {
    var r = t.ownerDocument
      , i = t;
    do {
        typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
        var a = Ax(e, i);
        if (a) {
            var l = Ox(e, i)
              , u = l[1]
              , p = l[2];
            if (u > p)
                return !0
        }
        i = i.parentNode
    } while (i && i !== r.body);
    return !1
}
  , TE = function(e) {
    var t = e.scrollTop
      , r = e.scrollHeight
      , i = e.clientHeight;
    return [t, r, i]
}
  , jE = function(e) {
    var t = e.scrollLeft
      , r = e.scrollWidth
      , i = e.clientWidth;
    return [t, r, i]
}
  , Ax = function(e, t) {
    return e === "v" ? EE(t) : PE(t)
}
  , Ox = function(e, t) {
    return e === "v" ? TE(t) : jE(t)
}
  , RE = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , AE = function(e, t, r, i, a) {
    var l = RE(e, window.getComputedStyle(t).direction)
      , u = l * i
      , p = r.target
      , m = t.contains(p)
      , g = !1
      , v = u > 0
      , w = 0
      , S = 0;
    do {
        var k = Ox(e, p)
          , j = k[0]
          , b = k[1]
          , C = k[2]
          , T = b - C - l * j;
        (j || T) && Ax(e, p) && (w += T,
        S += j),
        p instanceof ShadowRoot ? p = p.host : p = p.parentNode
    } while (!m && p !== document.body || m && (t.contains(p) || t === p));
    return (v && Math.abs(w) < 1 || !v && Math.abs(S) < 1) && (g = !0),
    g
}
  , fl = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Ug = function(e) {
    return [e.deltaX, e.deltaY]
}
  , $g = function(e) {
    return e && "current"in e ? e.current : e
}
  , OE = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , IE = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , ME = 0
  , ni = [];
function DE(e) {
    var t = y.useRef([])
      , r = y.useRef([0, 0])
      , i = y.useRef()
      , a = y.useState(ME++)[0]
      , l = y.useState(jx)[0]
      , u = y.useRef(e);
    y.useEffect(function() {
        u.current = e
    }, [e]),
    y.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var b = rE([e.lockRef.current], (e.shards || []).map($g), !0).filter(Boolean);
            return b.forEach(function(C) {
                return C.classList.add("allow-interactivity-".concat(a))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(a)),
                b.forEach(function(C) {
                    return C.classList.remove("allow-interactivity-".concat(a))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var p = y.useCallback(function(b, C) {
        if ("touches"in b && b.touches.length === 2 || b.type === "wheel" && b.ctrlKey)
            return !u.current.allowPinchZoom;
        var T = fl(b), N = r.current, O = "deltaX"in b ? b.deltaX : N[0] - T[0], L = "deltaY"in b ? b.deltaY : N[1] - T[1], V, Z = b.target, U = Math.abs(O) > Math.abs(L) ? "h" : "v";
        if ("touches"in b && U === "h" && Z.type === "range")
            return !1;
        var le = Bg(U, Z);
        if (!le)
            return !0;
        if (le ? V = U : (V = U === "v" ? "h" : "v",
        le = Bg(U, Z)),
        !le)
            return !1;
        if (!i.current && "changedTouches"in b && (O || L) && (i.current = V),
        !V)
            return !0;
        var he = i.current || V;
        return AE(he, C, b, he === "h" ? O : L)
    }, [])
      , m = y.useCallback(function(b) {
        var C = b;
        if (!(!ni.length || ni[ni.length - 1] !== l)) {
            var T = "deltaY"in C ? Ug(C) : fl(C)
              , N = t.current.filter(function(V) {
                return V.name === C.type && (V.target === C.target || C.target === V.shadowParent) && OE(V.delta, T)
            })[0];
            if (N && N.should) {
                C.cancelable && C.preventDefault();
                return
            }
            if (!N) {
                var O = (u.current.shards || []).map($g).filter(Boolean).filter(function(V) {
                    return V.contains(C.target)
                })
                  , L = O.length > 0 ? p(C, O[0]) : !u.current.noIsolation;
                L && C.cancelable && C.preventDefault()
            }
        }
    }, [])
      , g = y.useCallback(function(b, C, T, N) {
        var O = {
            name: b,
            delta: C,
            target: T,
            should: N,
            shadowParent: LE(T)
        };
        t.current.push(O),
        setTimeout(function() {
            t.current = t.current.filter(function(L) {
                return L !== O
            })
        }, 1)
    }, [])
      , v = y.useCallback(function(b) {
        r.current = fl(b),
        i.current = void 0
    }, [])
      , w = y.useCallback(function(b) {
        g(b.type, Ug(b), b.target, p(b, e.lockRef.current))
    }, [])
      , S = y.useCallback(function(b) {
        g(b.type, fl(b), b.target, p(b, e.lockRef.current))
    }, []);
    y.useEffect(function() {
        return ni.push(l),
        e.setCallbacks({
            onScrollCapture: w,
            onWheelCapture: w,
            onTouchMoveCapture: S
        }),
        document.addEventListener("wheel", m, ti),
        document.addEventListener("touchmove", m, ti),
        document.addEventListener("touchstart", v, ti),
        function() {
            ni = ni.filter(function(b) {
                return b !== l
            }),
            document.removeEventListener("wheel", m, ti),
            document.removeEventListener("touchmove", m, ti),
            document.removeEventListener("touchstart", v, ti)
        }
    }, []);
    var k = e.removeScrollBar
      , j = e.inert;
    return y.createElement(y.Fragment, null, j ? y.createElement(l, {
        styles: IE(a)
    }) : null, k ? y.createElement(NE, {
        gapMode: e.gapMode
    }) : null)
}
function LE(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const FE = fE(Tx, DE);
var Ix = y.forwardRef(function(e, t) {
    return y.createElement(rc, Vn({}, e, {
        ref: t,
        sideCar: FE
    }))
});
Ix.classNames = rc.classNames;
var zE = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , VE = [" ", "Enter"]
  , Qo = "Select"
  , [sc,ic,BE] = hf(Qo)
  , [Ni] = fr(Qo, [BE, Xl])
  , oc = Xl()
  , [UE,Qr] = Ni(Qo)
  , [$E,qE] = Ni(Qo)
  , Mx = e => {
    const {__scopeSelect: t, children: r, open: i, defaultOpen: a, onOpenChange: l, value: u, defaultValue: p, onValueChange: m, dir: g, name: v, autoComplete: w, disabled: S, required: k, form: j} = e
      , b = oc(t)
      , [C,T] = y.useState(null)
      , [N,O] = y.useState(null)
      , [L,V] = y.useState(!1)
      , Z = Sx(g)
      , [U=!1,le] = gs({
        prop: i,
        defaultProp: a,
        onChange: l
    })
      , [he,ye] = gs({
        prop: u,
        defaultProp: p,
        onChange: m
    })
      , Se = y.useRef(null)
      , K = C ? j || !!C.closest("form") : !0
      , [ne,q] = y.useState(new Set)
      , xe = Array.from(ne).map(ie => ie.props.value).join(";");
    return f.jsx(VN, {
        ...b,
        children: f.jsxs(UE, {
            required: k,
            scope: t,
            trigger: C,
            onTriggerChange: T,
            valueNode: N,
            onValueNodeChange: O,
            valueNodeHasChildren: L,
            onValueNodeHasChildrenChange: V,
            contentId: qo(),
            value: he,
            onValueChange: ye,
            open: U,
            onOpenChange: le,
            dir: Z,
            triggerPointerDownPosRef: Se,
            disabled: S,
            children: [f.jsx(sc.Provider, {
                scope: t,
                children: f.jsx($E, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: y.useCallback(ie => {
                        q(ce => new Set(ce).add(ie))
                    }
                    , []),
                    onNativeOptionRemove: y.useCallback(ie => {
                        q(ce => {
                            const z = new Set(ce);
                            return z.delete(ie),
                            z
                        }
                        )
                    }
                    , []),
                    children: r
                })
            }), K ? f.jsxs(o0, {
                "aria-hidden": !0,
                required: k,
                tabIndex: -1,
                name: v,
                autoComplete: w,
                value: he,
                onChange: ie => ye(ie.target.value),
                disabled: S,
                form: j,
                children: [he === void 0 ? f.jsx("option", {
                    value: ""
                }) : null, Array.from(ne)]
            }, xe) : null]
        })
    })
}
;
Mx.displayName = Qo;
var Dx = "SelectTrigger"
  , Lx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, disabled: i=!1, ...a} = e
      , l = oc(r)
      , u = Qr(Dx, r)
      , p = u.disabled || i
      , m = it(t, u.onTriggerChange)
      , g = ic(r)
      , v = y.useRef("touch")
      , [w,S,k] = a0(b => {
        const C = g().filter(O => !O.disabled)
          , T = C.find(O => O.value === u.value)
          , N = l0(C, b, T);
        N !== void 0 && u.onValueChange(N.value)
    }
    )
      , j = b => {
        p || (u.onOpenChange(!0),
        k()),
        b && (u.triggerPointerDownPosRef.current = {
            x: Math.round(b.pageX),
            y: Math.round(b.pageY)
        })
    }
    ;
    return f.jsx(Qy, {
        asChild: !0,
        ...l,
        children: f.jsx(Ue.button, {
            type: "button",
            role: "combobox",
            "aria-controls": u.contentId,
            "aria-expanded": u.open,
            "aria-required": u.required,
            "aria-autocomplete": "none",
            dir: u.dir,
            "data-state": u.open ? "open" : "closed",
            disabled: p,
            "data-disabled": p ? "" : void 0,
            "data-placeholder": i0(u.value) ? "" : void 0,
            ...a,
            ref: m,
            onClick: Ve(a.onClick, b => {
                b.currentTarget.focus(),
                v.current !== "mouse" && j(b)
            }
            ),
            onPointerDown: Ve(a.onPointerDown, b => {
                v.current = b.pointerType;
                const C = b.target;
                C.hasPointerCapture(b.pointerId) && C.releasePointerCapture(b.pointerId),
                b.button === 0 && b.ctrlKey === !1 && b.pointerType === "mouse" && (j(b),
                b.preventDefault())
            }
            ),
            onKeyDown: Ve(a.onKeyDown, b => {
                const C = w.current !== "";
                !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && S(b.key),
                !(C && b.key === " ") && zE.includes(b.key) && (j(),
                b.preventDefault())
            }
            )
        })
    })
}
);
Lx.displayName = Dx;
var Fx = "SelectValue"
  , zx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, className: i, style: a, children: l, placeholder: u="", ...p} = e
      , m = Qr(Fx, r)
      , {onValueNodeHasChildrenChange: g} = m
      , v = l !== void 0
      , w = it(t, m.onValueNodeChange);
    return bt( () => {
        g(v)
    }
    , [g, v]),
    f.jsx(Ue.span, {
        ...p,
        ref: w,
        style: {
            pointerEvents: "none"
        },
        children: i0(m.value) ? f.jsx(f.Fragment, {
            children: u
        }) : l
    })
}
);
zx.displayName = Fx;
var HE = "SelectIcon"
  , Vx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, children: i, ...a} = e;
    return f.jsx(Ue.span, {
        "aria-hidden": !0,
        ...a,
        ref: t,
        children: i || "▼"
    })
}
);
Vx.displayName = HE;
var WE = "SelectPortal"
  , Bx = e => f.jsx(mf, {
    asChild: !0,
    ...e
});
Bx.displayName = WE;
var ys = "SelectContent"
  , Ux = y.forwardRef( (e, t) => {
    const r = Qr(ys, e.__scopeSelect)
      , [i,a] = y.useState();
    if (bt( () => {
        a(new DocumentFragment)
    }
    , []),
    !r.open) {
        const l = i;
        return l ? bi.createPortal(f.jsx($x, {
            scope: e.__scopeSelect,
            children: f.jsx(sc.Slot, {
                scope: e.__scopeSelect,
                children: f.jsx("div", {
                    children: e.children
                })
            })
        }), l) : null
    }
    return f.jsx(qx, {
        ...e,
        ref: t
    })
}
);
Ux.displayName = ys;
var _n = 10
  , [$x,Zr] = Ni(ys)
  , QE = "SelectContentImpl"
  , ZE = No("SelectContent.RemoveScroll")
  , qx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, position: i="item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: l, onPointerDownOutside: u, side: p, sideOffset: m, align: g, alignOffset: v, arrowPadding: w, collisionBoundary: S, collisionPadding: k, sticky: j, hideWhenDetached: b, avoidCollisions: C, ...T} = e
      , N = Qr(ys, r)
      , [O,L] = y.useState(null)
      , [V,Z] = y.useState(null)
      , U = it(t, se => L(se))
      , [le,he] = y.useState(null)
      , [ye,Se] = y.useState(null)
      , K = ic(r)
      , [ne,q] = y.useState(!1)
      , xe = y.useRef(!1);
    y.useEffect( () => {
        if (O)
            return nE(O)
    }
    , [O]),
    Hk();
    const ie = y.useCallback(se => {
        const [Ce,...Ae] = K().map(Je => Je.ref.current)
          , [Me] = Ae.slice(-1)
          , We = document.activeElement;
        for (const Je of se)
            if (Je === We || (Je?.scrollIntoView({
                block: "nearest"
            }),
            Je === Ce && V && (V.scrollTop = 0),
            Je === Me && V && (V.scrollTop = V.scrollHeight),
            Je?.focus(),
            document.activeElement !== We))
                return
    }
    , [K, V])
      , ce = y.useCallback( () => ie([le, O]), [ie, le, O]);
    y.useEffect( () => {
        ne && ce()
    }
    , [ne, ce]);
    const {onOpenChange: z, triggerPointerDownPosRef: Y} = N;
    y.useEffect( () => {
        if (O) {
            let se = {
                x: 0,
                y: 0
            };
            const Ce = Me => {
                se = {
                    x: Math.abs(Math.round(Me.pageX) - (Y.current?.x ?? 0)),
                    y: Math.abs(Math.round(Me.pageY) - (Y.current?.y ?? 0))
                }
            }
              , Ae = Me => {
                se.x <= 10 && se.y <= 10 ? Me.preventDefault() : O.contains(Me.target) || z(!1),
                document.removeEventListener("pointermove", Ce),
                Y.current = null
            }
            ;
            return Y.current !== null && (document.addEventListener("pointermove", Ce),
            document.addEventListener("pointerup", Ae, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", Ce),
                document.removeEventListener("pointerup", Ae, {
                    capture: !0
                })
            }
        }
    }
    , [O, z, Y]),
    y.useEffect( () => {
        const se = () => z(!1);
        return window.addEventListener("blur", se),
        window.addEventListener("resize", se),
        () => {
            window.removeEventListener("blur", se),
            window.removeEventListener("resize", se)
        }
    }
    , [z]);
    const [J,R] = a0(se => {
        const Ce = K().filter(We => !We.disabled)
          , Ae = Ce.find(We => We.ref.current === document.activeElement)
          , Me = l0(Ce, se, Ae);
        Me && setTimeout( () => Me.ref.current.focus())
    }
    )
      , $ = y.useCallback( (se, Ce, Ae) => {
        const Me = !xe.current && !Ae;
        (N.value !== void 0 && N.value === Ce || Me) && (he(se),
        Me && (xe.current = !0))
    }
    , [N.value])
      , Ne = y.useCallback( () => O?.focus(), [O])
      , Pe = y.useCallback( (se, Ce, Ae) => {
        const Me = !xe.current && !Ae;
        (N.value !== void 0 && N.value === Ce || Me) && Se(se)
    }
    , [N.value])
      , Oe = i === "popper" ? $d : Hx
      , Ie = Oe === $d ? {
        side: p,
        sideOffset: m,
        align: g,
        alignOffset: v,
        arrowPadding: w,
        collisionBoundary: S,
        collisionPadding: k,
        sticky: j,
        hideWhenDetached: b,
        avoidCollisions: C
    } : {};
    return f.jsx($x, {
        scope: r,
        content: O,
        viewport: V,
        onViewportChange: Z,
        itemRefCallback: $,
        selectedItem: le,
        onItemLeave: Ne,
        itemTextRefCallback: Pe,
        focusSelectedItem: ce,
        selectedItemText: ye,
        position: i,
        isPositioned: ne,
        searchRef: J,
        children: f.jsx(Ix, {
            as: ZE,
            allowPinchZoom: !0,
            children: f.jsx(Cx, {
                asChild: !0,
                trapped: N.open,
                onMountAutoFocus: se => {
                    se.preventDefault()
                }
                ,
                onUnmountAutoFocus: Ve(a, se => {
                    N.trigger?.focus({
                        preventScroll: !0
                    }),
                    se.preventDefault()
                }
                ),
                children: f.jsx($l, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: u,
                    onFocusOutside: se => se.preventDefault(),
                    onDismiss: () => N.onOpenChange(!1),
                    children: f.jsx(Oe, {
                        role: "listbox",
                        id: N.contentId,
                        "data-state": N.open ? "open" : "closed",
                        dir: N.dir,
                        onContextMenu: se => se.preventDefault(),
                        ...T,
                        ...Ie,
                        onPlaced: () => q(!0),
                        ref: U,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...T.style
                        },
                        onKeyDown: Ve(T.onKeyDown, se => {
                            const Ce = se.ctrlKey || se.altKey || se.metaKey;
                            if (se.key === "Tab" && se.preventDefault(),
                            !Ce && se.key.length === 1 && R(se.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(se.key)) {
                                let Me = K().filter(We => !We.disabled).map(We => We.ref.current);
                                if (["ArrowUp", "End"].includes(se.key) && (Me = Me.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(se.key)) {
                                    const We = se.target
                                      , Je = Me.indexOf(We);
                                    Me = Me.slice(Je + 1)
                                }
                                setTimeout( () => ie(Me)),
                                se.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
qx.displayName = QE;
var KE = "SelectItemAlignedPosition"
  , Hx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, onPlaced: i, ...a} = e
      , l = Qr(ys, r)
      , u = Zr(ys, r)
      , [p,m] = y.useState(null)
      , [g,v] = y.useState(null)
      , w = it(t, U => v(U))
      , S = ic(r)
      , k = y.useRef(!1)
      , j = y.useRef(!0)
      , {viewport: b, selectedItem: C, selectedItemText: T, focusSelectedItem: N} = u
      , O = y.useCallback( () => {
        if (l.trigger && l.valueNode && p && g && b && C && T) {
            const U = l.trigger.getBoundingClientRect()
              , le = g.getBoundingClientRect()
              , he = l.valueNode.getBoundingClientRect()
              , ye = T.getBoundingClientRect();
            if (l.dir !== "rtl") {
                const We = ye.left - le.left
                  , Je = he.left - We
                  , St = U.left - Je
                  , Ht = U.width + St
                  , hr = Math.max(Ht, le.width)
                  , Zn = window.innerWidth - _n
                  , In = Og(Je, [_n, Math.max(_n, Zn - hr)]);
                p.style.minWidth = Ht + "px",
                p.style.left = In + "px"
            } else {
                const We = le.right - ye.right
                  , Je = window.innerWidth - he.right - We
                  , St = window.innerWidth - U.right - Je
                  , Ht = U.width + St
                  , hr = Math.max(Ht, le.width)
                  , Zn = window.innerWidth - _n
                  , In = Og(Je, [_n, Math.max(_n, Zn - hr)]);
                p.style.minWidth = Ht + "px",
                p.style.right = In + "px"
            }
            const Se = S()
              , K = window.innerHeight - _n * 2
              , ne = b.scrollHeight
              , q = window.getComputedStyle(g)
              , xe = parseInt(q.borderTopWidth, 10)
              , ie = parseInt(q.paddingTop, 10)
              , ce = parseInt(q.borderBottomWidth, 10)
              , z = parseInt(q.paddingBottom, 10)
              , Y = xe + ie + ne + z + ce
              , J = Math.min(C.offsetHeight * 5, Y)
              , R = window.getComputedStyle(b)
              , $ = parseInt(R.paddingTop, 10)
              , Ne = parseInt(R.paddingBottom, 10)
              , Pe = U.top + U.height / 2 - _n
              , Oe = K - Pe
              , Ie = C.offsetHeight / 2
              , se = C.offsetTop + Ie
              , Ce = xe + ie + se
              , Ae = Y - Ce;
            if (Ce <= Pe) {
                const We = Se.length > 0 && C === Se[Se.length - 1].ref.current;
                p.style.bottom = "0px";
                const Je = g.clientHeight - b.offsetTop - b.offsetHeight
                  , St = Math.max(Oe, Ie + (We ? Ne : 0) + Je + ce)
                  , Ht = Ce + St;
                p.style.height = Ht + "px"
            } else {
                const We = Se.length > 0 && C === Se[0].ref.current;
                p.style.top = "0px";
                const St = Math.max(Pe, xe + b.offsetTop + (We ? $ : 0) + Ie) + Ae;
                p.style.height = St + "px",
                b.scrollTop = Ce - Pe + b.offsetTop
            }
            p.style.margin = `${_n}px 0`,
            p.style.minHeight = J + "px",
            p.style.maxHeight = K + "px",
            i?.(),
            requestAnimationFrame( () => k.current = !0)
        }
    }
    , [S, l.trigger, l.valueNode, p, g, b, C, T, l.dir, i]);
    bt( () => O(), [O]);
    const [L,V] = y.useState();
    bt( () => {
        g && V(window.getComputedStyle(g).zIndex)
    }
    , [g]);
    const Z = y.useCallback(U => {
        U && j.current === !0 && (O(),
        N?.(),
        j.current = !1)
    }
    , [O, N]);
    return f.jsx(XE, {
        scope: r,
        contentWrapper: p,
        shouldExpandOnScrollRef: k,
        onScrollButtonChange: Z,
        children: f.jsx("div", {
            ref: m,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: L
            },
            children: f.jsx(Ue.div, {
                ...a,
                ref: w,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...a.style
                }
            })
        })
    })
}
);
Hx.displayName = KE;
var GE = "SelectPopperPosition"
  , $d = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, align: i="start", collisionPadding: a=_n, ...l} = e
      , u = oc(r);
    return f.jsx(Zy, {
        ...u,
        ...l,
        ref: t,
        align: i,
        collisionPadding: a,
        style: {
            boxSizing: "border-box",
            ...l.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
$d.displayName = GE;
var [XE,Df] = Ni(ys, {})
  , qd = "SelectViewport"
  , Wx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, nonce: i, ...a} = e
      , l = Zr(qd, r)
      , u = Df(qd, r)
      , p = it(t, l.onViewportChange)
      , m = y.useRef(0);
    return f.jsxs(f.Fragment, {
        children: [f.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: i
        }), f.jsx(sc.Slot, {
            scope: r,
            children: f.jsx(Ue.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...a,
                ref: p,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style
                },
                onScroll: Ve(a.onScroll, g => {
                    const v = g.currentTarget
                      , {contentWrapper: w, shouldExpandOnScrollRef: S} = u;
                    if (S?.current && w) {
                        const k = Math.abs(m.current - v.scrollTop);
                        if (k > 0) {
                            const j = window.innerHeight - _n * 2
                              , b = parseFloat(w.style.minHeight)
                              , C = parseFloat(w.style.height)
                              , T = Math.max(b, C);
                            if (T < j) {
                                const N = T + k
                                  , O = Math.min(j, N)
                                  , L = N - O;
                                w.style.height = O + "px",
                                w.style.bottom === "0px" && (v.scrollTop = L > 0 ? L : 0,
                                w.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    m.current = v.scrollTop
                }
                )
            })
        })]
    })
}
);
Wx.displayName = qd;
var Qx = "SelectGroup"
  , [YE,JE] = Ni(Qx)
  , eP = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...i} = e
      , a = qo();
    return f.jsx(YE, {
        scope: r,
        id: a,
        children: f.jsx(Ue.div, {
            role: "group",
            "aria-labelledby": a,
            ...i,
            ref: t
        })
    })
}
);
eP.displayName = Qx;
var Zx = "SelectLabel"
  , Kx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...i} = e
      , a = JE(Zx, r);
    return f.jsx(Ue.div, {
        id: a.id,
        ...i,
        ref: t
    })
}
);
Kx.displayName = Zx;
var jl = "SelectItem"
  , [tP,Gx] = Ni(jl)
  , Xx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, value: i, disabled: a=!1, textValue: l, ...u} = e
      , p = Qr(jl, r)
      , m = Zr(jl, r)
      , g = p.value === i
      , [v,w] = y.useState(l ?? "")
      , [S,k] = y.useState(!1)
      , j = it(t, N => m.itemRefCallback?.(N, i, a))
      , b = qo()
      , C = y.useRef("touch")
      , T = () => {
        a || (p.onValueChange(i),
        p.onOpenChange(!1))
    }
    ;
    if (i === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return f.jsx(tP, {
        scope: r,
        value: i,
        disabled: a,
        textId: b,
        isSelected: g,
        onItemTextChange: y.useCallback(N => {
            w(O => O || (N?.textContent ?? "").trim())
        }
        , []),
        children: f.jsx(sc.ItemSlot, {
            scope: r,
            value: i,
            disabled: a,
            textValue: v,
            children: f.jsx(Ue.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": S ? "" : void 0,
                "aria-selected": g && S,
                "data-state": g ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...u,
                ref: j,
                onFocus: Ve(u.onFocus, () => k(!0)),
                onBlur: Ve(u.onBlur, () => k(!1)),
                onClick: Ve(u.onClick, () => {
                    C.current !== "mouse" && T()
                }
                ),
                onPointerUp: Ve(u.onPointerUp, () => {
                    C.current === "mouse" && T()
                }
                ),
                onPointerDown: Ve(u.onPointerDown, N => {
                    C.current = N.pointerType
                }
                ),
                onPointerMove: Ve(u.onPointerMove, N => {
                    C.current = N.pointerType,
                    a ? m.onItemLeave?.() : C.current === "mouse" && N.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: Ve(u.onPointerLeave, N => {
                    N.currentTarget === document.activeElement && m.onItemLeave?.()
                }
                ),
                onKeyDown: Ve(u.onKeyDown, N => {
                    m.searchRef?.current !== "" && N.key === " " || (VE.includes(N.key) && T(),
                    N.key === " " && N.preventDefault())
                }
                )
            })
        })
    })
}
);
Xx.displayName = jl;
var vo = "SelectItemText"
  , Yx = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, className: i, style: a, ...l} = e
      , u = Qr(vo, r)
      , p = Zr(vo, r)
      , m = Gx(vo, r)
      , g = qE(vo, r)
      , [v,w] = y.useState(null)
      , S = it(t, T => w(T), m.onItemTextChange, T => p.itemTextRefCallback?.(T, m.value, m.disabled))
      , k = v?.textContent
      , j = y.useMemo( () => f.jsx("option", {
        value: m.value,
        disabled: m.disabled,
        children: k
    }, m.value), [m.disabled, m.value, k])
      , {onNativeOptionAdd: b, onNativeOptionRemove: C} = g;
    return bt( () => (b(j),
    () => C(j)), [b, C, j]),
    f.jsxs(f.Fragment, {
        children: [f.jsx(Ue.span, {
            id: m.textId,
            ...l,
            ref: S
        }), m.isSelected && u.valueNode && !u.valueNodeHasChildren ? bi.createPortal(l.children, u.valueNode) : null]
    })
}
);
Yx.displayName = vo;
var Jx = "SelectItemIndicator"
  , e0 = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...i} = e;
    return Gx(Jx, r).isSelected ? f.jsx(Ue.span, {
        "aria-hidden": !0,
        ...i,
        ref: t
    }) : null
}
);
e0.displayName = Jx;
var Hd = "SelectScrollUpButton"
  , t0 = y.forwardRef( (e, t) => {
    const r = Zr(Hd, e.__scopeSelect)
      , i = Df(Hd, e.__scopeSelect)
      , [a,l] = y.useState(!1)
      , u = it(t, i.onScrollButtonChange);
    return bt( () => {
        if (r.viewport && r.isPositioned) {
            let p = function() {
                const g = m.scrollTop > 0;
                l(g)
            };
            const m = r.viewport;
            return p(),
            m.addEventListener("scroll", p),
            () => m.removeEventListener("scroll", p)
        }
    }
    , [r.viewport, r.isPositioned]),
    a ? f.jsx(r0, {
        ...e,
        ref: u,
        onAutoScroll: () => {
            const {viewport: p, selectedItem: m} = r;
            p && m && (p.scrollTop = p.scrollTop - m.offsetHeight)
        }
    }) : null
}
);
t0.displayName = Hd;
var Wd = "SelectScrollDownButton"
  , n0 = y.forwardRef( (e, t) => {
    const r = Zr(Wd, e.__scopeSelect)
      , i = Df(Wd, e.__scopeSelect)
      , [a,l] = y.useState(!1)
      , u = it(t, i.onScrollButtonChange);
    return bt( () => {
        if (r.viewport && r.isPositioned) {
            let p = function() {
                const g = m.scrollHeight - m.clientHeight
                  , v = Math.ceil(m.scrollTop) < g;
                l(v)
            };
            const m = r.viewport;
            return p(),
            m.addEventListener("scroll", p),
            () => m.removeEventListener("scroll", p)
        }
    }
    , [r.viewport, r.isPositioned]),
    a ? f.jsx(r0, {
        ...e,
        ref: u,
        onAutoScroll: () => {
            const {viewport: p, selectedItem: m} = r;
            p && m && (p.scrollTop = p.scrollTop + m.offsetHeight)
        }
    }) : null
}
);
n0.displayName = Wd;
var r0 = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, onAutoScroll: i, ...a} = e
      , l = Zr("SelectScrollButton", r)
      , u = y.useRef(null)
      , p = ic(r)
      , m = y.useCallback( () => {
        u.current !== null && (window.clearInterval(u.current),
        u.current = null)
    }
    , []);
    return y.useEffect( () => () => m(), [m]),
    bt( () => {
        p().find(v => v.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
            block: "nearest"
        })
    }
    , [p]),
    f.jsx(Ue.div, {
        "aria-hidden": !0,
        ...a,
        ref: t,
        style: {
            flexShrink: 0,
            ...a.style
        },
        onPointerDown: Ve(a.onPointerDown, () => {
            u.current === null && (u.current = window.setInterval(i, 50))
        }
        ),
        onPointerMove: Ve(a.onPointerMove, () => {
            l.onItemLeave?.(),
            u.current === null && (u.current = window.setInterval(i, 50))
        }
        ),
        onPointerLeave: Ve(a.onPointerLeave, () => {
            m()
        }
        )
    })
}
)
  , nP = "SelectSeparator"
  , s0 = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...i} = e;
    return f.jsx(Ue.div, {
        "aria-hidden": !0,
        ...i,
        ref: t
    })
}
);
s0.displayName = nP;
var Qd = "SelectArrow"
  , rP = y.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...i} = e
      , a = oc(r)
      , l = Qr(Qd, r)
      , u = Zr(Qd, r);
    return l.open && u.position === "popper" ? f.jsx(Ky, {
        ...a,
        ...i,
        ref: t
    }) : null
}
);
rP.displayName = Qd;
function i0(e) {
    return e === "" || e === void 0
}
var o0 = y.forwardRef( (e, t) => {
    const {value: r, ...i} = e
      , a = y.useRef(null)
      , l = it(t, a)
      , u = Nx(r);
    return y.useEffect( () => {
        const p = a.current
          , m = window.HTMLSelectElement.prototype
          , v = Object.getOwnPropertyDescriptor(m, "value").set;
        if (u !== r && v) {
            const w = new Event("change",{
                bubbles: !0
            });
            v.call(p, r),
            p.dispatchEvent(w)
        }
    }
    , [u, r]),
    f.jsx($o, {
        asChild: !0,
        children: f.jsx("select", {
            ...i,
            ref: l,
            defaultValue: r
        })
    })
}
);
o0.displayName = "BubbleSelect";
function a0(e) {
    const t = Yt(e)
      , r = y.useRef("")
      , i = y.useRef(0)
      , a = y.useCallback(u => {
        const p = r.current + u;
        t(p),
        (function m(g) {
            r.current = g,
            window.clearTimeout(i.current),
            g !== "" && (i.current = window.setTimeout( () => m(""), 1e3))
        }
        )(p)
    }
    , [t])
      , l = y.useCallback( () => {
        r.current = "",
        window.clearTimeout(i.current)
    }
    , []);
    return y.useEffect( () => () => window.clearTimeout(i.current), []),
    [r, a, l]
}
function l0(e, t, r) {
    const a = t.length > 1 && Array.from(t).every(g => g === t[0]) ? t[0] : t
      , l = r ? e.indexOf(r) : -1;
    let u = sP(e, Math.max(l, 0));
    a.length === 1 && (u = u.filter(g => g !== r));
    const m = u.find(g => g.textValue.toLowerCase().startsWith(a.toLowerCase()));
    return m !== r ? m : void 0
}
function sP(e, t) {
    return e.map( (r, i) => e[(t + i) % e.length])
}
var iP = Mx
  , c0 = Lx
  , oP = zx
  , aP = Vx
  , lP = Bx
  , u0 = Ux
  , cP = Wx
  , d0 = Kx
  , f0 = Xx
  , uP = Yx
  , dP = e0
  , p0 = t0
  , h0 = n0
  , m0 = s0;
const qg = iP
  , Hg = oP
  , Zd = y.forwardRef( ({className: e, children: t, ...r}, i) => f.jsxs(c0, {
    ref: i,
    className: $e("flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...r,
    children: [t, f.jsx(aP, {
        asChild: !0,
        children: f.jsx(wf, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
Zd.displayName = c0.displayName;
const g0 = y.forwardRef( ({className: e, ...t}, r) => f.jsx(p0, {
    ref: r,
    className: $e("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: f.jsx(MC, {
        className: "h-4 w-4"
    })
}));
g0.displayName = p0.displayName;
const v0 = y.forwardRef( ({className: e, ...t}, r) => f.jsx(h0, {
    ref: r,
    className: $e("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: f.jsx(wf, {
        className: "h-4 w-4"
    })
}));
v0.displayName = h0.displayName;
const Kd = y.forwardRef( ({className: e, children: t, position: r="popper", ...i}, a) => f.jsx(lP, {
    children: f.jsxs(u0, {
        ref: a,
        className: $e("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: r,
        ...i,
        children: [f.jsx(g0, {}), f.jsx(cP, {
            className: $e("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), f.jsx(v0, {})]
    })
}));
Kd.displayName = u0.displayName;
const fP = y.forwardRef( ({className: e, ...t}, r) => f.jsx(d0, {
    ref: r,
    className: $e("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
fP.displayName = d0.displayName;
const Gd = y.forwardRef( ({className: e, children: t, ...r}, i) => f.jsxs(f0, {
    ref: i,
    className: $e("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...r,
    children: [f.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: f.jsx(dP, {
            children: f.jsx(cy, {
                className: "h-4 w-4"
            })
        })
    }), f.jsx(uP, {
        children: t
    })]
}));
Gd.displayName = f0.displayName;
const pP = y.forwardRef( ({className: e, ...t}, r) => f.jsx(m0, {
    ref: r,
    className: $e("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
pP.displayName = m0.displayName;
var hP = "Label"
  , y0 = y.forwardRef( (e, t) => f.jsx(Ue.label, {
    ...e,
    ref: t,
    onMouseDown: r => {
        r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r),
        !r.defaultPrevented && r.detail > 1 && r.preventDefault())
    }
}));
y0.displayName = hP;
var x0 = y0;
const mP = Ql("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Rl = y.forwardRef( ({className: e, ...t}, r) => f.jsx(x0, {
    ref: r,
    className: $e(mP(), e),
    ...t
}));
Rl.displayName = x0.displayName;
const gP = bk
  , w0 = y.createContext({})
  , ri = ({...e}) => f.jsx(w0.Provider, {
    value: {
        name: e.name
    },
    children: f.jsx(Nk, {
        ...e
    })
})
  , ac = () => {
    const e = y.useContext(w0)
      , t = y.useContext(b0)
      , {getFieldState: r, formState: i} = nc()
      , a = r(e.name, i);
    if (!e)
        throw new Error("useFormField should be used within <FormField>");
    const {id: l} = t;
    return {
        id: l,
        name: e.name,
        formItemId: `${l}-form-item`,
        formDescriptionId: `${l}-form-item-description`,
        formMessageId: `${l}-form-item-message`,
        ...a
    }
}
  , b0 = y.createContext({})
  , ls = y.forwardRef( ({className: e, ...t}, r) => {
    const i = y.useId();
    return f.jsx(b0.Provider, {
        value: {
            id: i
        },
        children: f.jsx("div", {
            ref: r,
            className: $e("space-y-2", e),
            ...t
        })
    })
}
);
ls.displayName = "FormItem";
const cs = y.forwardRef( ({className: e, ...t}, r) => {
    const {error: i, formItemId: a} = ac();
    return f.jsx(Rl, {
        ref: r,
        className: $e(i && "text-destructive", e),
        htmlFor: a,
        ...t
    })
}
);
cs.displayName = "FormLabel";
const us = y.forwardRef( ({...e}, t) => {
    const {error: r, formItemId: i, formDescriptionId: a, formMessageId: l} = ac();
    return f.jsx(Mv, {
        ref: t,
        id: i,
        "aria-describedby": r ? `${a} ${l}` : `${a}`,
        "aria-invalid": !!r,
        ...e
    })
}
);
us.displayName = "FormControl";
const vP = y.forwardRef( ({className: e, ...t}, r) => {
    const {formDescriptionId: i} = ac();
    return f.jsx("p", {
        ref: r,
        id: i,
        className: $e("text-sm text-muted-foreground", e),
        ...t
    })
}
);
vP.displayName = "FormDescription";
const ds = y.forwardRef( ({className: e, children: t, ...r}, i) => {
    const {error: a, formMessageId: l} = ac()
      , u = a ? String(a?.message ?? "") : t;
    return u ? f.jsx("p", {
        ref: i,
        id: l,
        className: $e("text-sm font-medium text-destructive", e),
        ...r,
        children: u
    }) : null
}
);
ds.displayName = "FormMessage";
const W = Symbol.for("drizzle:entityKind");
function It(e, t) {
    if (!e || typeof e != "object")
        return !1;
    if (e instanceof t)
        return !0;
    if (!Object.prototype.hasOwnProperty.call(t, W))
        throw new Error(`Class "${t.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
    let r = Object.getPrototypeOf(e).constructor;
    if (r)
        for (; r; ) {
            if (W in r && r[W] === t[W])
                return !0;
            r = Object.getPrototypeOf(r)
        }
    return !1
}
class To {
    constructor(t, r) {
        this.table = t,
        this.config = r,
        this.name = r.name,
        this.keyAsName = r.keyAsName,
        this.notNull = r.notNull,
        this.default = r.default,
        this.defaultFn = r.defaultFn,
        this.onUpdateFn = r.onUpdateFn,
        this.hasDefault = r.hasDefault,
        this.primary = r.primaryKey,
        this.isUnique = r.isUnique,
        this.uniqueName = r.uniqueName,
        this.uniqueType = r.uniqueType,
        this.dataType = r.dataType,
        this.columnType = r.columnType,
        this.generated = r.generated,
        this.generatedIdentity = r.generatedIdentity
    }
    static[W] = "Column";
    name;
    keyAsName;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = void 0;
    generated = void 0;
    generatedIdentity = void 0;
    config;
    mapFromDriverValue(t) {
        return t
    }
    mapToDriverValue(t) {
        return t
    }
    shouldDisableInsert() {
        return this.config.generated !== void 0 && this.config.generated.type !== "byDefault"
    }
}
class yP {
    static[W] = "ColumnBuilder";
    config;
    constructor(t, r, i) {
        this.config = {
            name: t,
            keyAsName: t === "",
            notNull: !1,
            default: void 0,
            hasDefault: !1,
            primaryKey: !1,
            isUnique: !1,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType: r,
            columnType: i,
            generated: void 0
        }
    }
    $type() {
        return this
    }
    notNull() {
        return this.config.notNull = !0,
        this
    }
    default(t) {
        return this.config.default = t,
        this.config.hasDefault = !0,
        this
    }
    $defaultFn(t) {
        return this.config.defaultFn = t,
        this.config.hasDefault = !0,
        this
    }
    $default = this.$defaultFn;
    $onUpdateFn(t) {
        return this.config.onUpdateFn = t,
        this.config.hasDefault = !0,
        this
    }
    $onUpdate = this.$onUpdateFn;
    primaryKey() {
        return this.config.primaryKey = !0,
        this.config.notNull = !0,
        this
    }
    setName(t) {
        this.config.name === "" && (this.config.name = t)
    }
}
const di = Symbol.for("drizzle:Name");
class xP {
    static[W] = "PgForeignKeyBuilder";
    reference;
    _onUpdate = "no action";
    _onDelete = "no action";
    constructor(t, r) {
        this.reference = () => {
            const {name: i, columns: a, foreignColumns: l} = t();
            return {
                name: i,
                columns: a,
                foreignTable: l[0].table,
                foreignColumns: l
            }
        }
        ,
        r && (this._onUpdate = r.onUpdate,
        this._onDelete = r.onDelete)
    }
    onUpdate(t) {
        return this._onUpdate = t === void 0 ? "no action" : t,
        this
    }
    onDelete(t) {
        return this._onDelete = t === void 0 ? "no action" : t,
        this
    }
    build(t) {
        return new wP(t,this)
    }
}
class wP {
    constructor(t, r) {
        this.table = t,
        this.reference = r.reference,
        this.onUpdate = r._onUpdate,
        this.onDelete = r._onDelete
    }
    static[W] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
        const {name: t, columns: r, foreignColumns: i} = this.reference()
          , a = r.map(p => p.name)
          , l = i.map(p => p.name)
          , u = [this.table[di], ...a, i[0].table[di], ...l];
        return t ?? `${u.join("_")}_fk`
    }
}
function bP(e, ...t) {
    return e(...t)
}
function SP(e, t) {
    return `${e[di]}_${t.join("_")}_unique`
}
function Wg(e, t, r) {
    for (let i = t; i < e.length; i++) {
        const a = e[i];
        if (a === "\\") {
            i++;
            continue
        }
        if (a === '"')
            return [e.slice(t, i).replace(/\\/g, ""), i + 1];
        if (!r && (a === "," || a === "}"))
            return [e.slice(t, i).replace(/\\/g, ""), i]
    }
    return [e.slice(t).replace(/\\/g, ""), e.length]
}
function S0(e, t=0) {
    const r = [];
    let i = t
      , a = !1;
    for (; i < e.length; ) {
        const l = e[i];
        if (l === ",") {
            (a || i === t) && r.push(""),
            a = !0,
            i++;
            continue
        }
        if (a = !1,
        l === "\\") {
            i += 2;
            continue
        }
        if (l === '"') {
            const [m,g] = Wg(e, i + 1, !0);
            r.push(m),
            i = g;
            continue
        }
        if (l === "}")
            return [r, i + 1];
        if (l === "{") {
            const [m,g] = S0(e, i + 1);
            r.push(m),
            i = g;
            continue
        }
        const [u,p] = Wg(e, i, !1);
        r.push(u),
        i = p
    }
    return [r, i]
}
function CP(e) {
    const [t] = S0(e, 1);
    return t
}
function C0(e) {
    return `{${e.map(t => Array.isArray(t) ? C0(t) : typeof t == "string" ? `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${t}`).join(",")}}`
}
class Ze extends yP {
    foreignKeyConfigs = [];
    static[W] = "PgColumnBuilder";
    array(t) {
        return new NP(this.config.name,this,t)
    }
    references(t, r={}) {
        return this.foreignKeyConfigs.push({
            ref: t,
            actions: r
        }),
        this
    }
    unique(t, r) {
        return this.config.isUnique = !0,
        this.config.uniqueName = t,
        this.config.uniqueType = r?.nulls,
        this
    }
    generatedAlwaysAs(t) {
        return this.config.generated = {
            as: t,
            type: "always",
            mode: "stored"
        },
        this
    }
    buildForeignKeys(t, r) {
        return this.foreignKeyConfigs.map( ({ref: i, actions: a}) => bP( (l, u) => {
            const p = new xP( () => {
                const m = l();
                return {
                    columns: [t],
                    foreignColumns: [m]
                }
            }
            );
            return u.onUpdate && p.onUpdate(u.onUpdate),
            u.onDelete && p.onDelete(u.onDelete),
            p.build(r)
        }
        , i, a))
    }
    buildExtraConfigColumn(t) {
        return new _P(t,this.config)
    }
}
class Fe extends To {
    constructor(t, r) {
        r.uniqueName || (r.uniqueName = SP(t, [r.name])),
        super(t, r),
        this.table = t
    }
    static[W] = "PgColumn"
}
class _P extends Fe {
    static[W] = "ExtraConfigColumn";
    getSQLType() {
        return this.getSQLType()
    }
    indexConfig = {
        order: this.config.order ?? "asc",
        nulls: this.config.nulls ?? "last",
        opClass: this.config.opClass
    };
    defaultConfig = {
        order: "asc",
        nulls: "last",
        opClass: void 0
    };
    asc() {
        return this.indexConfig.order = "asc",
        this
    }
    desc() {
        return this.indexConfig.order = "desc",
        this
    }
    nullsFirst() {
        return this.indexConfig.nulls = "first",
        this
    }
    nullsLast() {
        return this.indexConfig.nulls = "last",
        this
    }
    op(t) {
        return this.indexConfig.opClass = t,
        this
    }
}
class NP extends Ze {
    static[W] = "PgArrayBuilder";
    constructor(t, r, i) {
        super(t, "array", "PgArray"),
        this.config.baseBuilder = r,
        this.config.size = i
    }
    build(t) {
        const r = this.config.baseBuilder.build(t);
        return new Lf(t,this.config,r)
    }
}
class Lf extends Fe {
    constructor(t, r, i, a) {
        super(t, r),
        this.baseColumn = i,
        this.range = a,
        this.size = r.size
    }
    size;
    static[W] = "PgArray";
    getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`
    }
    mapFromDriverValue(t) {
        return typeof t == "string" && (t = CP(t)),
        t.map(r => this.baseColumn.mapFromDriverValue(r))
    }
    mapToDriverValue(t, r=!1) {
        const i = t.map(a => a === null ? null : It(this.baseColumn, Lf) ? this.baseColumn.mapToDriverValue(a, !0) : this.baseColumn.mapToDriverValue(a));
        return r ? i : C0(i)
    }
}
const Qg = Symbol.for("drizzle:isPgEnum");
function kP(e) {
    return !!e && typeof e == "function" && Qg in e && e[Qg] === !0
}
class _0 {
    static[W] = "Subquery";
    constructor(t, r, i, a=!1) {
        this._ = {
            brand: "Subquery",
            sql: t,
            selectedFields: r,
            alias: i,
            isWith: a
        }
    }
}
const EP = {
    startActiveSpan(e, t) {
        return t()
    }
}
  , fi = Symbol.for("drizzle:ViewBaseConfig")
  , bd = Symbol.for("drizzle:Schema")
  , Zg = Symbol.for("drizzle:Columns")
  , Kg = Symbol.for("drizzle:ExtraConfigColumns")
  , Sd = Symbol.for("drizzle:OriginalName")
  , Cd = Symbol.for("drizzle:BaseName")
  , Al = Symbol.for("drizzle:IsAlias")
  , Gg = Symbol.for("drizzle:ExtraConfigBuilder")
  , N0 = Symbol.for("drizzle:IsDrizzleTable");
class on {
    static[W] = "Table";
    static Symbol = {
        Name: di,
        Schema: bd,
        OriginalName: Sd,
        Columns: Zg,
        ExtraConfigColumns: Kg,
        BaseName: Cd,
        IsAlias: Al,
        ExtraConfigBuilder: Gg
    };
    [di];
    [Sd];
    [bd];
    [Zg];
    [Kg];
    [Cd];
    [Al] = !1;
    [N0] = !0;
    [Gg] = void 0;
    constructor(t, r, i) {
        this[di] = this[Sd] = t,
        this[bd] = r,
        this[Cd] = i
    }
}
function k0(e) {
    return typeof e == "object" && e !== null && N0 in e
}
function PP(e) {
    return e != null && typeof e.getSQL == "function"
}
function TP(e) {
    const t = {
        sql: "",
        params: []
    };
    for (const r of e)
        t.sql += r.sql,
        t.params.push(...r.params),
        r.typings?.length && (t.typings || (t.typings = []),
        t.typings.push(...r.typings));
    return t
}
class Nn {
    static[W] = "StringChunk";
    value;
    constructor(t) {
        this.value = Array.isArray(t) ? t : [t]
    }
    getSQL() {
        return new pt([this])
    }
}
class pt {
    constructor(t) {
        this.queryChunks = t
    }
    static[W] = "SQL";
    decoder = E0;
    shouldInlineParams = !1;
    append(t) {
        return this.queryChunks.push(...t.queryChunks),
        this
    }
    toQuery(t) {
        return EP.startActiveSpan("drizzle.buildSQL", r => {
            const i = this.buildQueryFromSourceParams(this.queryChunks, t);
            return r?.setAttributes({
                "drizzle.query.text": i.sql,
                "drizzle.query.params": JSON.stringify(i.params)
            }),
            i
        }
        )
    }
    buildQueryFromSourceParams(t, r) {
        const i = Object.assign({}, r, {
            inlineParams: r.inlineParams || this.shouldInlineParams,
            paramStartIndex: r.paramStartIndex || {
                value: 0
            }
        })
          , {casing: a, escapeName: l, escapeParam: u, prepareTyping: p, inlineParams: m, paramStartIndex: g} = i;
        return TP(t.map(v => {
            if (It(v, Nn))
                return {
                    sql: v.value.join(""),
                    params: []
                };
            if (It(v, Xd))
                return {
                    sql: l(v.value),
                    params: []
                };
            if (v === void 0)
                return {
                    sql: "",
                    params: []
                };
            if (Array.isArray(v)) {
                const w = [new Nn("(")];
                for (const [S,k] of v.entries())
                    w.push(k),
                    S < v.length - 1 && w.push(new Nn(", "));
                return w.push(new Nn(")")),
                this.buildQueryFromSourceParams(w, i)
            }
            if (It(v, pt))
                return this.buildQueryFromSourceParams(v.queryChunks, {
                    ...i,
                    inlineParams: m || v.shouldInlineParams
                });
            if (It(v, on)) {
                const w = v[on.Symbol.Schema]
                  , S = v[on.Symbol.Name];
                return {
                    sql: w === void 0 || v[Al] ? l(S) : l(w) + "." + l(S),
                    params: []
                }
            }
            if (It(v, To)) {
                const w = a.getColumnCasing(v);
                if (r.invokeSource === "indexes")
                    return {
                        sql: l(w),
                        params: []
                    };
                const S = v.table[on.Symbol.Schema];
                return {
                    sql: v.table[Al] || S === void 0 ? l(v.table[on.Symbol.Name]) + "." + l(w) : l(S) + "." + l(v.table[on.Symbol.Name]) + "." + l(w),
                    params: []
                }
            }
            if (It(v, jP)) {
                const w = v[fi].schema
                  , S = v[fi].name;
                return {
                    sql: w === void 0 || v[fi].isAlias ? l(S) : l(w) + "." + l(S),
                    params: []
                }
            }
            if (It(v, T0)) {
                if (It(v.value, Yd))
                    return {
                        sql: u(g.value++, v),
                        params: [v],
                        typings: ["none"]
                    };
                const w = v.value === null ? null : v.encoder.mapToDriverValue(v.value);
                if (It(w, pt))
                    return this.buildQueryFromSourceParams([w], i);
                if (m)
                    return {
                        sql: this.mapInlineParam(w, i),
                        params: []
                    };
                let S = ["none"];
                return p && (S = [p(v.encoder)]),
                {
                    sql: u(g.value++, w),
                    params: [w],
                    typings: S
                }
            }
            return It(v, Yd) ? {
                sql: u(g.value++, v),
                params: [v],
                typings: ["none"]
            } : It(v, pt.Aliased) && v.fieldAlias !== void 0 ? {
                sql: l(v.fieldAlias),
                params: []
            } : It(v, _0) ? v._.isWith ? {
                sql: l(v._.alias),
                params: []
            } : this.buildQueryFromSourceParams([new Nn("("), v._.sql, new Nn(") "), new Xd(v._.alias)], i) : kP(v) ? v.schema ? {
                sql: l(v.schema) + "." + l(v.enumName),
                params: []
            } : {
                sql: l(v.enumName),
                params: []
            } : PP(v) ? v.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([v.getSQL()], i) : this.buildQueryFromSourceParams([new Nn("("), v.getSQL(), new Nn(")")], i) : m ? {
                sql: this.mapInlineParam(v, i),
                params: []
            } : {
                sql: u(g.value++, v),
                params: [v],
                typings: ["none"]
            }
        }
        ))
    }
    mapInlineParam(t, {escapeString: r}) {
        if (t === null)
            return "null";
        if (typeof t == "number" || typeof t == "boolean")
            return t.toString();
        if (typeof t == "string")
            return r(t);
        if (typeof t == "object") {
            const i = t.toString();
            return r(i === "[object Object]" ? JSON.stringify(t) : i)
        }
        throw new Error("Unexpected param value: " + t)
    }
    getSQL() {
        return this
    }
    as(t) {
        return t === void 0 ? this : new pt.Aliased(this,t)
    }
    mapWith(t) {
        return this.decoder = typeof t == "function" ? {
            mapFromDriverValue: t
        } : t,
        this
    }
    inlineParams() {
        return this.shouldInlineParams = !0,
        this
    }
    if(t) {
        return t ? this : void 0
    }
}
class Xd {
    constructor(t) {
        this.value = t
    }
    static[W] = "Name";
    brand;
    getSQL() {
        return new pt([this])
    }
}
const E0 = {
    mapFromDriverValue: e => e
}
  , P0 = {
    mapToDriverValue: e => e
};
({
    ...E0,
    ...P0
});
class T0 {
    constructor(t, r=P0) {
        this.value = t,
        this.encoder = r
    }
    static[W] = "Param";
    brand;
    getSQL() {
        return new pt([this])
    }
}
function gi(e, ...t) {
    const r = [];
    (t.length > 0 || e.length > 0 && e[0] !== "") && r.push(new Nn(e[0]));
    for (const [i,a] of t.entries())
        r.push(a, new Nn(e[i + 1]));
    return new pt(r)
}
(e => {
    function t() {
        return new pt([])
    }
    e.empty = t;
    function r(m) {
        return new pt(m)
    }
    e.fromList = r;
    function i(m) {
        return new pt([new Nn(m)])
    }
    e.raw = i;
    function a(m, g) {
        const v = [];
        for (const [w,S] of m.entries())
            w > 0 && g !== void 0 && v.push(g),
            v.push(S);
        return new pt(v)
    }
    e.join = a;
    function l(m) {
        return new Xd(m)
    }
    e.identifier = l;
    function u(m) {
        return new Yd(m)
    }
    e.placeholder = u;
    function p(m, g) {
        return new T0(m,g)
    }
    e.param = p
}
)(gi || (gi = {}));
(e => {
    class t {
        constructor(i, a) {
            this.sql = i,
            this.fieldAlias = a
        }
        static[W] = "SQL.Aliased";
        isSelectionField = !1;
        getSQL() {
            return this.sql
        }
        clone() {
            return new t(this.sql,this.fieldAlias)
        }
    }
    e.Aliased = t
}
)(pt || (pt = {}));
class Yd {
    constructor(t) {
        this.name = t
    }
    static[W] = "Placeholder";
    getSQL() {
        return new pt([this])
    }
}
const j0 = Symbol.for("drizzle:IsDrizzleView");
class jP {
    static[W] = "View";
    [fi];
    [j0] = !0;
    constructor({name: t, schema: r, selectedFields: i, query: a}) {
        this[fi] = {
            name: t,
            originalName: t,
            schema: r,
            selectedFields: i,
            query: a,
            isExisting: !a,
            isAlias: !1
        }
    }
    getSQL() {
        return new pt([this])
    }
}
function RP(e) {
    return typeof e == "object" && e !== null && j0 in e
}
To.prototype.getSQL = function() {
    return new pt([this])
}
;
on.prototype.getSQL = function() {
    return new pt([this])
}
;
_0.prototype.getSQL = function() {
    return new pt([this])
}
;
function AP(e) {
    return e[on.Symbol.Columns]
}
function OP(e) {
    return e[fi].selectedFields
}
function jt(e, t) {
    return {
        name: typeof e == "string" && e.length > 0 ? e : "",
        config: typeof e == "object" ? e : t
    }
}
class lc extends Ze {
    static[W] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(t) {
        if (t) {
            const {name: r, ...i} = t;
            this.config.generatedIdentity = {
                type: "always",
                sequenceName: r,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "always"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
    generatedByDefaultAsIdentity(t) {
        if (t) {
            const {name: r, ...i} = t;
            this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: r,
                sequenceOptions: i
            }
        } else
            this.config.generatedIdentity = {
                type: "byDefault"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
}
class IP extends lc {
    static[W] = "PgBigInt53Builder";
    constructor(t) {
        super(t, "number", "PgBigInt53")
    }
    build(t) {
        return new MP(t,this.config)
    }
}
class MP extends Fe {
    static[W] = "PgBigInt53";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(t) {
        return typeof t == "number" ? t : Number(t)
    }
}
class DP extends lc {
    static[W] = "PgBigInt64Builder";
    constructor(t) {
        super(t, "bigint", "PgBigInt64")
    }
    build(t) {
        return new LP(t,this.config)
    }
}
class LP extends Fe {
    static[W] = "PgBigInt64";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(t) {
        return BigInt(t)
    }
}
function FP(e, t) {
    const {name: r, config: i} = jt(e, t);
    return i.mode === "number" ? new IP(r) : new DP(r)
}
class zP extends Ze {
    static[W] = "PgBigSerial53Builder";
    constructor(t) {
        super(t, "number", "PgBigSerial53"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(t) {
        return new VP(t,this.config)
    }
}
class VP extends Fe {
    static[W] = "PgBigSerial53";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(t) {
        return typeof t == "number" ? t : Number(t)
    }
}
class BP extends Ze {
    static[W] = "PgBigSerial64Builder";
    constructor(t) {
        super(t, "bigint", "PgBigSerial64"),
        this.config.hasDefault = !0
    }
    build(t) {
        return new UP(t,this.config)
    }
}
class UP extends Fe {
    static[W] = "PgBigSerial64";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(t) {
        return BigInt(t)
    }
}
function $P(e, t) {
    const {name: r, config: i} = jt(e, t);
    return i.mode === "number" ? new zP(r) : new BP(r)
}
class qP extends Ze {
    static[W] = "PgBooleanBuilder";
    constructor(t) {
        super(t, "boolean", "PgBoolean")
    }
    build(t) {
        return new HP(t,this.config)
    }
}
class HP extends Fe {
    static[W] = "PgBoolean";
    getSQLType() {
        return "boolean"
    }
}
function WP(e) {
    return new qP(e ?? "")
}
class QP extends Ze {
    static[W] = "PgCharBuilder";
    constructor(t, r) {
        super(t, "string", "PgChar"),
        this.config.length = r.length,
        this.config.enumValues = r.enum
    }
    build(t) {
        return new ZP(t,this.config)
    }
}
class ZP extends Fe {
    static[W] = "PgChar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "char" : `char(${this.length})`
    }
}
function KP(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return new QP(r,i)
}
class GP extends Ze {
    static[W] = "PgCidrBuilder";
    constructor(t) {
        super(t, "string", "PgCidr")
    }
    build(t) {
        return new XP(t,this.config)
    }
}
class XP extends Fe {
    static[W] = "PgCidr";
    getSQLType() {
        return "cidr"
    }
}
function YP(e) {
    return new GP(e ?? "")
}
class JP extends Ze {
    static[W] = "PgCustomColumnBuilder";
    constructor(t, r, i) {
        super(t, "custom", "PgCustomColumn"),
        this.config.fieldConfig = r,
        this.config.customTypeParams = i
    }
    build(t) {
        return new eT(t,this.config)
    }
}
class eT extends Fe {
    static[W] = "PgCustomColumn";
    sqlName;
    mapTo;
    mapFrom;
    constructor(t, r) {
        super(t, r),
        this.sqlName = r.customTypeParams.dataType(r.fieldConfig),
        this.mapTo = r.customTypeParams.toDriver,
        this.mapFrom = r.customTypeParams.fromDriver
    }
    getSQLType() {
        return this.sqlName
    }
    mapFromDriverValue(t) {
        return typeof this.mapFrom == "function" ? this.mapFrom(t) : t
    }
    mapToDriverValue(t) {
        return typeof this.mapTo == "function" ? this.mapTo(t) : t
    }
}
function tT(e) {
    return (t, r) => {
        const {name: i, config: a} = jt(t, r);
        return new JP(i,a,e)
    }
}
class Zo extends Ze {
    static[W] = "PgDateColumnBaseBuilder";
    defaultNow() {
        return this.default(gi`now()`)
    }
}
class nT extends Zo {
    static[W] = "PgDateBuilder";
    constructor(t) {
        super(t, "date", "PgDate")
    }
    build(t) {
        return new rT(t,this.config)
    }
}
class rT extends Fe {
    static[W] = "PgDate";
    getSQLType() {
        return "date"
    }
    mapFromDriverValue(t) {
        return new Date(t)
    }
    mapToDriverValue(t) {
        return t.toISOString()
    }
}
class sT extends Zo {
    static[W] = "PgDateStringBuilder";
    constructor(t) {
        super(t, "string", "PgDateString")
    }
    build(t) {
        return new iT(t,this.config)
    }
}
class iT extends Fe {
    static[W] = "PgDateString";
    getSQLType() {
        return "date"
    }
}
function oT(e, t) {
    const {name: r, config: i} = jt(e, t);
    return i?.mode === "date" ? new nT(r) : new sT(r)
}
class aT extends Ze {
    static[W] = "PgDoublePrecisionBuilder";
    constructor(t) {
        super(t, "number", "PgDoublePrecision")
    }
    build(t) {
        return new lT(t,this.config)
    }
}
class lT extends Fe {
    static[W] = "PgDoublePrecision";
    getSQLType() {
        return "double precision"
    }
    mapFromDriverValue(t) {
        return typeof t == "string" ? Number.parseFloat(t) : t
    }
}
function cT(e) {
    return new aT(e ?? "")
}
class uT extends Ze {
    static[W] = "PgInetBuilder";
    constructor(t) {
        super(t, "string", "PgInet")
    }
    build(t) {
        return new dT(t,this.config)
    }
}
class dT extends Fe {
    static[W] = "PgInet";
    getSQLType() {
        return "inet"
    }
}
function fT(e) {
    return new uT(e ?? "")
}
class pT extends lc {
    static[W] = "PgIntegerBuilder";
    constructor(t) {
        super(t, "number", "PgInteger")
    }
    build(t) {
        return new hT(t,this.config)
    }
}
class hT extends Fe {
    static[W] = "PgInteger";
    getSQLType() {
        return "integer"
    }
    mapFromDriverValue(t) {
        return typeof t == "string" ? Number.parseInt(t) : t
    }
}
function mT(e) {
    return new pT(e ?? "")
}
class gT extends Ze {
    static[W] = "PgIntervalBuilder";
    constructor(t, r) {
        super(t, "string", "PgInterval"),
        this.config.intervalConfig = r
    }
    build(t) {
        return new vT(t,this.config)
    }
}
class vT extends Fe {
    static[W] = "PgInterval";
    fields = this.config.intervalConfig.fields;
    precision = this.config.intervalConfig.precision;
    getSQLType() {
        const t = this.fields ? ` ${this.fields}` : ""
          , r = this.precision ? `(${this.precision})` : "";
        return `interval${t}${r}`
    }
}
function yT(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return new gT(r,i)
}
class xT extends Ze {
    static[W] = "PgJsonBuilder";
    constructor(t) {
        super(t, "json", "PgJson")
    }
    build(t) {
        return new wT(t,this.config)
    }
}
class wT extends Fe {
    static[W] = "PgJson";
    constructor(t, r) {
        super(t, r)
    }
    getSQLType() {
        return "json"
    }
    mapToDriverValue(t) {
        return JSON.stringify(t)
    }
    mapFromDriverValue(t) {
        if (typeof t == "string")
            try {
                return JSON.parse(t)
            } catch {
                return t
            }
        return t
    }
}
function bT(e) {
    return new xT(e ?? "")
}
class ST extends Ze {
    static[W] = "PgJsonbBuilder";
    constructor(t) {
        super(t, "json", "PgJsonb")
    }
    build(t) {
        return new CT(t,this.config)
    }
}
class CT extends Fe {
    static[W] = "PgJsonb";
    constructor(t, r) {
        super(t, r)
    }
    getSQLType() {
        return "jsonb"
    }
    mapToDriverValue(t) {
        return JSON.stringify(t)
    }
    mapFromDriverValue(t) {
        if (typeof t == "string")
            try {
                return JSON.parse(t)
            } catch {
                return t
            }
        return t
    }
}
function _T(e) {
    return new ST(e ?? "")
}
class NT extends Ze {
    static[W] = "PgLineBuilder";
    constructor(t) {
        super(t, "array", "PgLine")
    }
    build(t) {
        return new kT(t,this.config)
    }
}
class kT extends Fe {
    static[W] = "PgLine";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(t) {
        const [r,i,a] = t.slice(1, -1).split(",");
        return [Number.parseFloat(r), Number.parseFloat(i), Number.parseFloat(a)]
    }
    mapToDriverValue(t) {
        return `{${t[0]},${t[1]},${t[2]}}`
    }
}
class ET extends Ze {
    static[W] = "PgLineABCBuilder";
    constructor(t) {
        super(t, "json", "PgLineABC")
    }
    build(t) {
        return new PT(t,this.config)
    }
}
class PT extends Fe {
    static[W] = "PgLineABC";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(t) {
        const [r,i,a] = t.slice(1, -1).split(",");
        return {
            a: Number.parseFloat(r),
            b: Number.parseFloat(i),
            c: Number.parseFloat(a)
        }
    }
    mapToDriverValue(t) {
        return `{${t.a},${t.b},${t.c}}`
    }
}
function TT(e, t) {
    const {name: r, config: i} = jt(e, t);
    return !i?.mode || i.mode === "tuple" ? new NT(r) : new ET(r)
}
class jT extends Ze {
    static[W] = "PgMacaddrBuilder";
    constructor(t) {
        super(t, "string", "PgMacaddr")
    }
    build(t) {
        return new RT(t,this.config)
    }
}
class RT extends Fe {
    static[W] = "PgMacaddr";
    getSQLType() {
        return "macaddr"
    }
}
function AT(e) {
    return new jT(e ?? "")
}
class OT extends Ze {
    static[W] = "PgMacaddr8Builder";
    constructor(t) {
        super(t, "string", "PgMacaddr8")
    }
    build(t) {
        return new IT(t,this.config)
    }
}
class IT extends Fe {
    static[W] = "PgMacaddr8";
    getSQLType() {
        return "macaddr8"
    }
}
function MT(e) {
    return new OT(e ?? "")
}
class DT extends Ze {
    static[W] = "PgNumericBuilder";
    constructor(t, r, i) {
        super(t, "string", "PgNumeric"),
        this.config.precision = r,
        this.config.scale = i
    }
    build(t) {
        return new LT(t,this.config)
    }
}
class LT extends Fe {
    static[W] = "PgNumeric";
    precision;
    scale;
    constructor(t, r) {
        super(t, r),
        this.precision = r.precision,
        this.scale = r.scale
    }
    getSQLType() {
        return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`
    }
}
function FT(e, t) {
    const {name: r, config: i} = jt(e, t);
    return new DT(r,i?.precision,i?.scale)
}
class zT extends Ze {
    static[W] = "PgPointTupleBuilder";
    constructor(t) {
        super(t, "array", "PgPointTuple")
    }
    build(t) {
        return new VT(t,this.config)
    }
}
class VT extends Fe {
    static[W] = "PgPointTuple";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(t) {
        if (typeof t == "string") {
            const [r,i] = t.slice(1, -1).split(",");
            return [Number.parseFloat(r), Number.parseFloat(i)]
        }
        return [t.x, t.y]
    }
    mapToDriverValue(t) {
        return `(${t[0]},${t[1]})`
    }
}
class BT extends Ze {
    static[W] = "PgPointObjectBuilder";
    constructor(t) {
        super(t, "json", "PgPointObject")
    }
    build(t) {
        return new UT(t,this.config)
    }
}
class UT extends Fe {
    static[W] = "PgPointObject";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(t) {
        if (typeof t == "string") {
            const [r,i] = t.slice(1, -1).split(",");
            return {
                x: Number.parseFloat(r),
                y: Number.parseFloat(i)
            }
        }
        return t
    }
    mapToDriverValue(t) {
        return `(${t.x},${t.y})`
    }
}
function $T(e, t) {
    const {name: r, config: i} = jt(e, t);
    return !i?.mode || i.mode === "tuple" ? new zT(r) : new BT(r)
}
function qT(e) {
    const t = [];
    for (let r = 0; r < e.length; r += 2)
        t.push(Number.parseInt(e.slice(r, r + 2), 16));
    return new Uint8Array(t)
}
function Xg(e, t) {
    const r = new ArrayBuffer(8)
      , i = new DataView(r);
    for (let a = 0; a < 8; a++)
        i.setUint8(a, e[t + a]);
    return i.getFloat64(0, !0)
}
function R0(e) {
    const t = qT(e);
    let r = 0;
    const i = t[r];
    r += 1;
    const a = new DataView(t.buffer)
      , l = a.getUint32(r, i === 1);
    if (r += 4,
    l & 536870912 && (a.getUint32(r, i === 1),
    r += 4),
    (l & 65535) === 1) {
        const u = Xg(t, r);
        r += 8;
        const p = Xg(t, r);
        return r += 8,
        [u, p]
    }
    throw new Error("Unsupported geometry type")
}
class HT extends Ze {
    static[W] = "PgGeometryBuilder";
    constructor(t) {
        super(t, "array", "PgGeometry")
    }
    build(t) {
        return new WT(t,this.config)
    }
}
class WT extends Fe {
    static[W] = "PgGeometry";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(t) {
        return R0(t)
    }
    mapToDriverValue(t) {
        return `point(${t[0]} ${t[1]})`
    }
}
class QT extends Ze {
    static[W] = "PgGeometryObjectBuilder";
    constructor(t) {
        super(t, "json", "PgGeometryObject")
    }
    build(t) {
        return new ZT(t,this.config)
    }
}
class ZT extends Fe {
    static[W] = "PgGeometryObject";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(t) {
        const r = R0(t);
        return {
            x: r[0],
            y: r[1]
        }
    }
    mapToDriverValue(t) {
        return `point(${t.x} ${t.y})`
    }
}
function KT(e, t) {
    const {name: r, config: i} = jt(e, t);
    return !i?.mode || i.mode === "tuple" ? new HT(r) : new QT(r)
}
class GT extends Ze {
    static[W] = "PgRealBuilder";
    constructor(t, r) {
        super(t, "number", "PgReal"),
        this.config.length = r
    }
    build(t) {
        return new XT(t,this.config)
    }
}
class XT extends Fe {
    static[W] = "PgReal";
    constructor(t, r) {
        super(t, r)
    }
    getSQLType() {
        return "real"
    }
    mapFromDriverValue = t => typeof t == "string" ? Number.parseFloat(t) : t
}
function YT(e) {
    return new GT(e ?? "")
}
class JT extends Ze {
    static[W] = "PgSerialBuilder";
    constructor(t) {
        super(t, "number", "PgSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(t) {
        return new ej(t,this.config)
    }
}
class ej extends Fe {
    static[W] = "PgSerial";
    getSQLType() {
        return "serial"
    }
}
function tj(e) {
    return new JT(e ?? "")
}
class nj extends lc {
    static[W] = "PgSmallIntBuilder";
    constructor(t) {
        super(t, "number", "PgSmallInt")
    }
    build(t) {
        return new rj(t,this.config)
    }
}
class rj extends Fe {
    static[W] = "PgSmallInt";
    getSQLType() {
        return "smallint"
    }
    mapFromDriverValue = t => typeof t == "string" ? Number(t) : t
}
function sj(e) {
    return new nj(e ?? "")
}
class ij extends Ze {
    static[W] = "PgSmallSerialBuilder";
    constructor(t) {
        super(t, "number", "PgSmallSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(t) {
        return new oj(t,this.config)
    }
}
class oj extends Fe {
    static[W] = "PgSmallSerial";
    getSQLType() {
        return "smallserial"
    }
}
function aj(e) {
    return new ij(e ?? "")
}
class lj extends Ze {
    static[W] = "PgTextBuilder";
    constructor(t, r) {
        super(t, "string", "PgText"),
        this.config.enumValues = r.enum
    }
    build(t) {
        return new cj(t,this.config)
    }
}
class cj extends Fe {
    static[W] = "PgText";
    enumValues = this.config.enumValues;
    getSQLType() {
        return "text"
    }
}
function ar(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return new lj(r,i)
}
class uj extends Zo {
    constructor(t, r, i) {
        super(t, "string", "PgTime"),
        this.withTimezone = r,
        this.precision = i,
        this.config.withTimezone = r,
        this.config.precision = i
    }
    static[W] = "PgTimeBuilder";
    build(t) {
        return new dj(t,this.config)
    }
}
class dj extends Fe {
    static[W] = "PgTime";
    withTimezone;
    precision;
    constructor(t, r) {
        super(t, r),
        this.withTimezone = r.withTimezone,
        this.precision = r.precision
    }
    getSQLType() {
        return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function fj(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return new uj(r,i.withTimezone ?? !1,i.precision)
}
class pj extends Zo {
    static[W] = "PgTimestampBuilder";
    constructor(t, r, i) {
        super(t, "date", "PgTimestamp"),
        this.config.withTimezone = r,
        this.config.precision = i
    }
    build(t) {
        return new hj(t,this.config)
    }
}
class hj extends Fe {
    static[W] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(t, r) {
        super(t, r),
        this.withTimezone = r.withTimezone,
        this.precision = r.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
    mapFromDriverValue = t => new Date(this.withTimezone ? t : t + "+0000");
    mapToDriverValue = t => t.toISOString()
}
class mj extends Zo {
    static[W] = "PgTimestampStringBuilder";
    constructor(t, r, i) {
        super(t, "string", "PgTimestampString"),
        this.config.withTimezone = r,
        this.config.precision = i
    }
    build(t) {
        return new gj(t,this.config)
    }
}
class gj extends Fe {
    static[W] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(t, r) {
        super(t, r),
        this.withTimezone = r.withTimezone,
        this.precision = r.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function A0(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return i?.mode === "string" ? new mj(r,i.withTimezone ?? !1,i.precision) : new pj(r,i?.withTimezone ?? !1,i?.precision)
}
class vj extends Ze {
    static[W] = "PgUUIDBuilder";
    constructor(t) {
        super(t, "string", "PgUUID")
    }
    defaultRandom() {
        return this.default(gi`gen_random_uuid()`)
    }
    build(t) {
        return new yj(t,this.config)
    }
}
class yj extends Fe {
    static[W] = "PgUUID";
    getSQLType() {
        return "uuid"
    }
}
function xj(e) {
    return new vj(e ?? "")
}
class wj extends Ze {
    static[W] = "PgVarcharBuilder";
    constructor(t, r) {
        super(t, "string", "PgVarchar"),
        this.config.length = r.length,
        this.config.enumValues = r.enum
    }
    build(t) {
        return new bj(t,this.config)
    }
}
class bj extends Fe {
    static[W] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "varchar" : `varchar(${this.length})`
    }
}
function Ff(e, t={}) {
    const {name: r, config: i} = jt(e, t);
    return new wj(r,i)
}
class Sj extends Ze {
    static[W] = "PgBinaryVectorBuilder";
    constructor(t, r) {
        super(t, "string", "PgBinaryVector"),
        this.config.dimensions = r.dimensions
    }
    build(t) {
        return new Cj(t,this.config)
    }
}
class Cj extends Fe {
    static[W] = "PgBinaryVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `bit(${this.dimensions})`
    }
}
function _j(e, t) {
    const {name: r, config: i} = jt(e, t);
    return new Sj(r,i)
}
class Nj extends Ze {
    static[W] = "PgHalfVectorBuilder";
    constructor(t, r) {
        super(t, "array", "PgHalfVector"),
        this.config.dimensions = r.dimensions
    }
    build(t) {
        return new kj(t,this.config)
    }
}
class kj extends Fe {
    static[W] = "PgHalfVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `halfvec(${this.dimensions})`
    }
    mapToDriverValue(t) {
        return JSON.stringify(t)
    }
    mapFromDriverValue(t) {
        return t.slice(1, -1).split(",").map(r => Number.parseFloat(r))
    }
}
function Ej(e, t) {
    const {name: r, config: i} = jt(e, t);
    return new Nj(r,i)
}
class Pj extends Ze {
    static[W] = "PgSparseVectorBuilder";
    constructor(t, r) {
        super(t, "string", "PgSparseVector"),
        this.config.dimensions = r.dimensions
    }
    build(t) {
        return new Tj(t,this.config)
    }
}
class Tj extends Fe {
    static[W] = "PgSparseVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `sparsevec(${this.dimensions})`
    }
}
function jj(e, t) {
    const {name: r, config: i} = jt(e, t);
    return new Pj(r,i)
}
class Rj extends Ze {
    static[W] = "PgVectorBuilder";
    constructor(t, r) {
        super(t, "array", "PgVector"),
        this.config.dimensions = r.dimensions
    }
    build(t) {
        return new Aj(t,this.config)
    }
}
class Aj extends Fe {
    static[W] = "PgVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `vector(${this.dimensions})`
    }
    mapToDriverValue(t) {
        return JSON.stringify(t)
    }
    mapFromDriverValue(t) {
        return t.slice(1, -1).split(",").map(r => Number.parseFloat(r))
    }
}
function Oj(e, t) {
    const {name: r, config: i} = jt(e, t);
    return new Rj(r,i)
}
function Ij() {
    return {
        bigint: FP,
        bigserial: $P,
        boolean: WP,
        char: KP,
        cidr: YP,
        customType: tT,
        date: oT,
        doublePrecision: cT,
        inet: fT,
        integer: mT,
        interval: yT,
        json: bT,
        jsonb: _T,
        line: TT,
        macaddr: AT,
        macaddr8: MT,
        numeric: FT,
        point: $T,
        geometry: KT,
        real: YT,
        serial: tj,
        smallint: sj,
        smallserial: aj,
        text: ar,
        time: fj,
        timestamp: A0,
        uuid: xj,
        varchar: Ff,
        bit: _j,
        halfvec: Ej,
        sparsevec: jj,
        vector: Oj
    }
}
const Jd = Symbol.for("drizzle:PgInlineForeignKeys")
  , Yg = Symbol.for("drizzle:EnableRLS");
class Jg extends on {
    static[W] = "PgTable";
    static Symbol = Object.assign({}, on.Symbol, {
        InlineForeignKeys: Jd,
        EnableRLS: Yg
    });
    [Jd] = [];
    [Yg] = !1;
    [on.Symbol.ExtraConfigBuilder] = void 0
}
function Mj(e, t, r, i, a=e) {
    const l = new Jg(e,i,a)
      , u = typeof t == "function" ? t(Ij()) : t
      , p = Object.fromEntries(Object.entries(u).map( ([v,w]) => {
        const S = w;
        S.setName(v);
        const k = S.build(l);
        return l[Jd].push(...S.buildForeignKeys(k, l)),
        [v, k]
    }
    ))
      , m = Object.fromEntries(Object.entries(u).map( ([v,w]) => {
        const S = w;
        S.setName(v);
        const k = S.buildExtraConfigColumn(l);
        return [v, k]
    }
    ))
      , g = Object.assign(l, p);
    return g[on.Symbol.Columns] = p,
    g[on.Symbol.ExtraConfigColumns] = m,
    Object.assign(g, {
        enableRLS: () => (g[Jg.Symbol.EnableRLS] = !0,
        g)
    })
}
const O0 = (e, t, r) => Mj(e, t, r, void 0);
var He;
(function(e) {
    e.assertEqual = a => a;
    function t(a) {}
    e.assertIs = t;
    function r(a) {
        throw new Error
    }
    e.assertNever = r,
    e.arrayToEnum = a => {
        const l = {};
        for (const u of a)
            l[u] = u;
        return l
    }
    ,
    e.getValidEnumValues = a => {
        const l = e.objectKeys(a).filter(p => typeof a[a[p]] != "number")
          , u = {};
        for (const p of l)
            u[p] = a[p];
        return e.objectValues(u)
    }
    ,
    e.objectValues = a => e.objectKeys(a).map(function(l) {
        return a[l]
    }),
    e.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
        const l = [];
        for (const u in a)
            Object.prototype.hasOwnProperty.call(a, u) && l.push(u);
        return l
    }
    ,
    e.find = (a, l) => {
        for (const u of a)
            if (l(u))
                return u
    }
    ,
    e.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
    function i(a, l=" | ") {
        return a.map(u => typeof u == "string" ? `'${u}'` : u).join(l)
    }
    e.joinValues = i,
    e.jsonStringifyReplacer = (a, l) => typeof l == "bigint" ? l.toString() : l
}
)(He || (He = {}));
var ef;
(function(e) {
    e.mergeShapes = (t, r) => ({
        ...t,
        ...r
    })
}
)(ef || (ef = {}));
const fe = He.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , lr = e => {
    switch (typeof e) {
    case "undefined":
        return fe.undefined;
    case "string":
        return fe.string;
    case "number":
        return isNaN(e) ? fe.nan : fe.number;
    case "boolean":
        return fe.boolean;
    case "function":
        return fe.function;
    case "bigint":
        return fe.bigint;
    case "symbol":
        return fe.symbol;
    case "object":
        return Array.isArray(e) ? fe.array : e === null ? fe.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? fe.promise : typeof Map < "u" && e instanceof Map ? fe.map : typeof Set < "u" && e instanceof Set ? fe.set : typeof Date < "u" && e instanceof Date ? fe.date : fe.object;
    default:
        return fe.unknown
    }
}
  , X = He.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , Dj = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class cn extends Error {
    get errors() {
        return this.issues
    }
    constructor(t) {
        super(),
        this.issues = [],
        this.addIssue = i => {
            this.issues = [...this.issues, i]
        }
        ,
        this.addIssues = (i=[]) => {
            this.issues = [...this.issues, ...i]
        }
        ;
        const r = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r,
        this.name = "ZodError",
        this.issues = t
    }
    format(t) {
        const r = t || function(l) {
            return l.message
        }
          , i = {
            _errors: []
        }
          , a = l => {
            for (const u of l.issues)
                if (u.code === "invalid_union")
                    u.unionErrors.map(a);
                else if (u.code === "invalid_return_type")
                    a(u.returnTypeError);
                else if (u.code === "invalid_arguments")
                    a(u.argumentsError);
                else if (u.path.length === 0)
                    i._errors.push(r(u));
                else {
                    let p = i
                      , m = 0;
                    for (; m < u.path.length; ) {
                        const g = u.path[m];
                        m === u.path.length - 1 ? (p[g] = p[g] || {
                            _errors: []
                        },
                        p[g]._errors.push(r(u))) : p[g] = p[g] || {
                            _errors: []
                        },
                        p = p[g],
                        m++
                    }
                }
        }
        ;
        return a(this),
        i
    }
    static assert(t) {
        if (!(t instanceof cn))
            throw new Error(`Not a ZodError: ${t}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, He.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(t=r => r.message) {
        const r = {}
          , i = [];
        for (const a of this.issues)
            a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [],
            r[a.path[0]].push(t(a))) : i.push(t(a));
        return {
            formErrors: i,
            fieldErrors: r
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
cn.create = e => new cn(e);
const vi = (e, t) => {
    let r;
    switch (e.code) {
    case X.invalid_type:
        e.received === fe.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
        break;
    case X.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(e.expected, He.jsonStringifyReplacer)}`;
        break;
    case X.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${He.joinValues(e.keys, ", ")}`;
        break;
    case X.invalid_union:
        r = "Invalid input";
        break;
    case X.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${He.joinValues(e.options)}`;
        break;
    case X.invalid_enum_value:
        r = `Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;
        break;
    case X.invalid_arguments:
        r = "Invalid function arguments";
        break;
    case X.invalid_return_type:
        r = "Invalid function return type";
        break;
    case X.invalid_date:
        r = "Invalid date";
        break;
    case X.invalid_string:
        typeof e.validation == "object" ? "includes"in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`,
        typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith"in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith"in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : He.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
        break;
    case X.too_small:
        e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
        break;
    case X.too_big:
        e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
        break;
    case X.custom:
        r = "Invalid input";
        break;
    case X.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
    case X.not_multiple_of:
        r = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case X.not_finite:
        r = "Number must be finite";
        break;
    default:
        r = t.defaultError,
        He.assertNever(e)
    }
    return {
        message: r
    }
}
;
let I0 = vi;
function Lj(e) {
    I0 = e
}
function Ol() {
    return I0
}
const Il = e => {
    const {data: t, path: r, errorMaps: i, issueData: a} = e
      , l = [...r, ...a.path || []]
      , u = {
        ...a,
        path: l
    };
    if (a.message !== void 0)
        return {
            ...a,
            path: l,
            message: a.message
        };
    let p = "";
    const m = i.filter(g => !!g).slice().reverse();
    for (const g of m)
        p = g(u, {
            data: t,
            defaultError: p
        }).message;
    return {
        ...a,
        path: l,
        message: p
    }
}
  , Fj = [];
function ae(e, t) {
    const r = Ol()
      , i = Il({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === vi ? void 0 : vi].filter(a => !!a)
    });
    e.common.issues.push(i)
}
class zt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(t, r) {
        const i = [];
        for (const a of r) {
            if (a.status === "aborted")
                return je;
            a.status === "dirty" && t.dirty(),
            i.push(a.value)
        }
        return {
            status: t.value,
            value: i
        }
    }
    static async mergeObjectAsync(t, r) {
        const i = [];
        for (const a of r) {
            const l = await a.key
              , u = await a.value;
            i.push({
                key: l,
                value: u
            })
        }
        return zt.mergeObjectSync(t, i)
    }
    static mergeObjectSync(t, r) {
        const i = {};
        for (const a of r) {
            const {key: l, value: u} = a;
            if (l.status === "aborted" || u.status === "aborted")
                return je;
            l.status === "dirty" && t.dirty(),
            u.status === "dirty" && t.dirty(),
            l.value !== "__proto__" && (typeof u.value < "u" || a.alwaysSet) && (i[l.value] = u.value)
        }
        return {
            status: t.value,
            value: i
        }
    }
}
const je = Object.freeze({
    status: "aborted"
})
  , oi = e => ({
    status: "dirty",
    value: e
})
  , qt = e => ({
    status: "valid",
    value: e
})
  , tf = e => e.status === "aborted"
  , nf = e => e.status === "dirty"
  , xs = e => e.status === "valid"
  , jo = e => typeof Promise < "u" && e instanceof Promise;
function Ml(e, t, r, i) {
    if (typeof t == "function" ? e !== t || !0 : !t.has(e))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return t.get(e)
}
function M0(e, t, r, i, a) {
    if (typeof t == "function" ? e !== t || !0 : !t.has(e))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, r),
    r
}
var be;
(function(e) {
    e.errToObj = t => typeof t == "string" ? {
        message: t
    } : t || {},
    e.toString = t => typeof t == "string" ? t : t?.message
}
)(be || (be = {}));
var yo, xo;
class Hn {
    constructor(t, r, i, a) {
        this._cachedPath = [],
        this.parent = t,
        this.data = r,
        this._path = i,
        this._key = a
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const ev = (e, t) => {
    if (xs(t))
        return {
            success: !0,
            data: t.value
        };
    if (!e.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const r = new cn(e.common.issues);
            return this._error = r,
            this._error
        }
    }
}
;
function De(e) {
    if (!e)
        return {};
    const {errorMap: t, invalid_type_error: r, required_error: i, description: a} = e;
    if (t && (r || i))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t ? {
        errorMap: t,
        description: a
    } : {
        errorMap: (u, p) => {
            var m, g;
            const {message: v} = e;
            return u.code === "invalid_enum_value" ? {
                message: v ?? p.defaultError
            } : typeof p.data > "u" ? {
                message: (m = v ?? i) !== null && m !== void 0 ? m : p.defaultError
            } : u.code !== "invalid_type" ? {
                message: p.defaultError
            } : {
                message: (g = v ?? r) !== null && g !== void 0 ? g : p.defaultError
            }
        }
        ,
        description: a
    }
}
class ze {
    get description() {
        return this._def.description
    }
    _getType(t) {
        return lr(t.data)
    }
    _getOrReturnCtx(t, r) {
        return r || {
            common: t.parent.common,
            data: t.data,
            parsedType: lr(t.data),
            schemaErrorMap: this._def.errorMap,
            path: t.path,
            parent: t.parent
        }
    }
    _processInputParams(t) {
        return {
            status: new zt,
            ctx: {
                common: t.parent.common,
                data: t.data,
                parsedType: lr(t.data),
                schemaErrorMap: this._def.errorMap,
                path: t.path,
                parent: t.parent
            }
        }
    }
    _parseSync(t) {
        const r = this._parse(t);
        if (jo(r))
            throw new Error("Synchronous parse encountered promise.");
        return r
    }
    _parseAsync(t) {
        const r = this._parse(t);
        return Promise.resolve(r)
    }
    parse(t, r) {
        const i = this.safeParse(t, r);
        if (i.success)
            return i.data;
        throw i.error
    }
    safeParse(t, r) {
        var i;
        const a = {
            common: {
                issues: [],
                async: (i = r?.async) !== null && i !== void 0 ? i : !1,
                contextualErrorMap: r?.errorMap
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: lr(t)
        }
          , l = this._parseSync({
            data: t,
            path: a.path,
            parent: a
        });
        return ev(a, l)
    }
    "~validate"(t) {
        var r, i;
        const a = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: lr(t)
        };
        if (!this["~standard"].async)
            try {
                const l = this._parseSync({
                    data: t,
                    path: [],
                    parent: a
                });
                return xs(l) ? {
                    value: l.value
                } : {
                    issues: a.common.issues
                }
            } catch (l) {
                !((i = (r = l?.message) === null || r === void 0 ? void 0 : r.toLowerCase()) === null || i === void 0) && i.includes("encountered") && (this["~standard"].async = !0),
                a.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: t,
            path: [],
            parent: a
        }).then(l => xs(l) ? {
            value: l.value
        } : {
            issues: a.common.issues
        })
    }
    async parseAsync(t, r) {
        const i = await this.safeParseAsync(t, r);
        if (i.success)
            return i.data;
        throw i.error
    }
    async safeParseAsync(t, r) {
        const i = {
            common: {
                issues: [],
                contextualErrorMap: r?.errorMap,
                async: !0
            },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: lr(t)
        }
          , a = this._parse({
            data: t,
            path: i.path,
            parent: i
        })
          , l = await (jo(a) ? a : Promise.resolve(a));
        return ev(i, l)
    }
    refine(t, r) {
        const i = a => typeof r == "string" || typeof r > "u" ? {
            message: r
        } : typeof r == "function" ? r(a) : r;
        return this._refinement( (a, l) => {
            const u = t(a)
              , p = () => l.addIssue({
                code: X.custom,
                ...i(a)
            });
            return typeof Promise < "u" && u instanceof Promise ? u.then(m => m ? !0 : (p(),
            !1)) : u ? !0 : (p(),
            !1)
        }
        )
    }
    refinement(t, r) {
        return this._refinement( (i, a) => t(i) ? !0 : (a.addIssue(typeof r == "function" ? r(i, a) : r),
        !1))
    }
    _refinement(t) {
        return new On({
            schema: this,
            typeName: Te.ZodEffects,
            effect: {
                type: "refinement",
                refinement: t
            }
        })
    }
    superRefine(t) {
        return this._refinement(t)
    }
    constructor(t) {
        this.spa = this.safeParseAsync,
        this._def = t,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: r => this["~validate"](r)
        }
    }
    optional() {
        return $n.create(this, this._def)
    }
    nullable() {
        return Wr.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return jn.create(this)
    }
    promise() {
        return xi.create(this, this._def)
    }
    or(t) {
        return Io.create([this, t], this._def)
    }
    and(t) {
        return Mo.create(this, t, this._def)
    }
    transform(t) {
        return new On({
            ...De(this._def),
            schema: this,
            typeName: Te.ZodEffects,
            effect: {
                type: "transform",
                transform: t
            }
        })
    }
    default(t) {
        const r = typeof t == "function" ? t : () => t;
        return new Vo({
            ...De(this._def),
            innerType: this,
            defaultValue: r,
            typeName: Te.ZodDefault
        })
    }
    brand() {
        return new zf({
            typeName: Te.ZodBranded,
            type: this,
            ...De(this._def)
        })
    }
    catch(t) {
        const r = typeof t == "function" ? t : () => t;
        return new Bo({
            ...De(this._def),
            innerType: this,
            catchValue: r,
            typeName: Te.ZodCatch
        })
    }
    describe(t) {
        const r = this.constructor;
        return new r({
            ...this._def,
            description: t
        })
    }
    pipe(t) {
        return Ko.create(this, t)
    }
    readonly() {
        return Uo.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const zj = /^c[^\s-]{8,}$/i
  , Vj = /^[0-9a-z]+$/
  , Bj = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , Uj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , $j = /^[a-z0-9_-]{21}$/i
  , qj = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , Hj = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Wj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Qj = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let _d;
const Zj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Kj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , Gj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , Xj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , Yj = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , Jj = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , D0 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , e2 = new RegExp(`^${D0}$`);
function L0(e) {
    let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
}
function t2(e) {
    return new RegExp(`^${L0(e)}$`)
}
function F0(e) {
    let t = `${D0}T${L0(e)}`;
    const r = [];
    return r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    t = `${t}(${r.join("|")})`,
    new RegExp(`^${t}$`)
}
function n2(e, t) {
    return !!((t === "v4" || !t) && Zj.test(e) || (t === "v6" || !t) && Gj.test(e))
}
function r2(e, t) {
    if (!qj.test(e))
        return !1;
    try {
        const [r] = e.split(".")
          , i = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "=")
          , a = JSON.parse(atob(i));
        return !(typeof a != "object" || a === null || !a.typ || !a.alg || t && a.alg !== t)
    } catch {
        return !1
    }
}
function s2(e, t) {
    return !!((t === "v4" || !t) && Kj.test(e) || (t === "v6" || !t) && Xj.test(e))
}
class Tn extends ze {
    _parse(t) {
        if (this._def.coerce && (t.data = String(t.data)),
        this._getType(t) !== fe.string) {
            const l = this._getOrReturnCtx(t);
            return ae(l, {
                code: X.invalid_type,
                expected: fe.string,
                received: l.parsedType
            }),
            je
        }
        const i = new zt;
        let a;
        for (const l of this._def.checks)
            if (l.kind === "min")
                t.data.length < l.value && (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "max")
                t.data.length > l.value && (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "length") {
                const u = t.data.length > l.value
                  , p = t.data.length < l.value;
                (u || p) && (a = this._getOrReturnCtx(t, a),
                u ? ae(a, {
                    code: X.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }) : p && ae(a, {
                    code: X.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }),
                i.dirty())
            } else if (l.kind === "email")
                Wj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "email",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "emoji")
                _d || (_d = new RegExp(Qj,"u")),
                _d.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "emoji",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "uuid")
                Uj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "uuid",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "nanoid")
                $j.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "nanoid",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "cuid")
                zj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "cuid",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "cuid2")
                Vj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "cuid2",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "ulid")
                Bj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "ulid",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty());
            else if (l.kind === "url")
                try {
                    new URL(t.data)
                } catch {
                    a = this._getOrReturnCtx(t, a),
                    ae(a, {
                        validation: "url",
                        code: X.invalid_string,
                        message: l.message
                    }),
                    i.dirty()
                }
            else
                l.kind === "regex" ? (l.regex.lastIndex = 0,
                l.regex.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "regex",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty())) : l.kind === "trim" ? t.data = t.data.trim() : l.kind === "includes" ? t.data.includes(l.value, l.position) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        includes: l.value,
                        position: l.position
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : l.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : l.kind === "startsWith" ? t.data.startsWith(l.value) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        startsWith: l.value
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "endsWith" ? t.data.endsWith(l.value) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: {
                        endsWith: l.value
                    },
                    message: l.message
                }),
                i.dirty()) : l.kind === "datetime" ? F0(l).test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "datetime",
                    message: l.message
                }),
                i.dirty()) : l.kind === "date" ? e2.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "date",
                    message: l.message
                }),
                i.dirty()) : l.kind === "time" ? t2(l).test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    code: X.invalid_string,
                    validation: "time",
                    message: l.message
                }),
                i.dirty()) : l.kind === "duration" ? Hj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "duration",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "ip" ? n2(t.data, l.version) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "ip",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "jwt" ? r2(t.data, l.alg) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "jwt",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "cidr" ? s2(t.data, l.version) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "cidr",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "base64" ? Yj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "base64",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : l.kind === "base64url" ? Jj.test(t.data) || (a = this._getOrReturnCtx(t, a),
                ae(a, {
                    validation: "base64url",
                    code: X.invalid_string,
                    message: l.message
                }),
                i.dirty()) : He.assertNever(l);
        return {
            status: i.value,
            value: t.data
        }
    }
    _regex(t, r, i) {
        return this.refinement(a => t.test(a), {
            validation: r,
            code: X.invalid_string,
            ...be.errToObj(i)
        })
    }
    _addCheck(t) {
        return new Tn({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    email(t) {
        return this._addCheck({
            kind: "email",
            ...be.errToObj(t)
        })
    }
    url(t) {
        return this._addCheck({
            kind: "url",
            ...be.errToObj(t)
        })
    }
    emoji(t) {
        return this._addCheck({
            kind: "emoji",
            ...be.errToObj(t)
        })
    }
    uuid(t) {
        return this._addCheck({
            kind: "uuid",
            ...be.errToObj(t)
        })
    }
    nanoid(t) {
        return this._addCheck({
            kind: "nanoid",
            ...be.errToObj(t)
        })
    }
    cuid(t) {
        return this._addCheck({
            kind: "cuid",
            ...be.errToObj(t)
        })
    }
    cuid2(t) {
        return this._addCheck({
            kind: "cuid2",
            ...be.errToObj(t)
        })
    }
    ulid(t) {
        return this._addCheck({
            kind: "ulid",
            ...be.errToObj(t)
        })
    }
    base64(t) {
        return this._addCheck({
            kind: "base64",
            ...be.errToObj(t)
        })
    }
    base64url(t) {
        return this._addCheck({
            kind: "base64url",
            ...be.errToObj(t)
        })
    }
    jwt(t) {
        return this._addCheck({
            kind: "jwt",
            ...be.errToObj(t)
        })
    }
    ip(t) {
        return this._addCheck({
            kind: "ip",
            ...be.errToObj(t)
        })
    }
    cidr(t) {
        return this._addCheck({
            kind: "cidr",
            ...be.errToObj(t)
        })
    }
    datetime(t) {
        var r, i;
        return typeof t == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: t
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof t?.precision > "u" ? null : t?.precision,
            offset: (r = t?.offset) !== null && r !== void 0 ? r : !1,
            local: (i = t?.local) !== null && i !== void 0 ? i : !1,
            ...be.errToObj(t?.message)
        })
    }
    date(t) {
        return this._addCheck({
            kind: "date",
            message: t
        })
    }
    time(t) {
        return typeof t == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: t
        }) : this._addCheck({
            kind: "time",
            precision: typeof t?.precision > "u" ? null : t?.precision,
            ...be.errToObj(t?.message)
        })
    }
    duration(t) {
        return this._addCheck({
            kind: "duration",
            ...be.errToObj(t)
        })
    }
    regex(t, r) {
        return this._addCheck({
            kind: "regex",
            regex: t,
            ...be.errToObj(r)
        })
    }
    includes(t, r) {
        return this._addCheck({
            kind: "includes",
            value: t,
            position: r?.position,
            ...be.errToObj(r?.message)
        })
    }
    startsWith(t, r) {
        return this._addCheck({
            kind: "startsWith",
            value: t,
            ...be.errToObj(r)
        })
    }
    endsWith(t, r) {
        return this._addCheck({
            kind: "endsWith",
            value: t,
            ...be.errToObj(r)
        })
    }
    min(t, r) {
        return this._addCheck({
            kind: "min",
            value: t,
            ...be.errToObj(r)
        })
    }
    max(t, r) {
        return this._addCheck({
            kind: "max",
            value: t,
            ...be.errToObj(r)
        })
    }
    length(t, r) {
        return this._addCheck({
            kind: "length",
            value: t,
            ...be.errToObj(r)
        })
    }
    nonempty(t) {
        return this.min(1, be.errToObj(t))
    }
    trim() {
        return new Tn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Tn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Tn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(t => t.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(t => t.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(t => t.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(t => t.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(t => t.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(t => t.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(t => t.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(t => t.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(t => t.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(t => t.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(t => t.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(t => t.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(t => t.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(t => t.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(t => t.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(t => t.kind === "base64url")
    }
    get minLength() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "min" && (t === null || r.value > t) && (t = r.value);
        return t
    }
    get maxLength() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "max" && (t === null || r.value < t) && (t = r.value);
        return t
    }
}
Tn.create = e => {
    var t;
    return new Tn({
        checks: [],
        typeName: Te.ZodString,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...De(e)
    })
}
;
function i2(e, t) {
    const r = (e.toString().split(".")[1] || "").length
      , i = (t.toString().split(".")[1] || "").length
      , a = r > i ? r : i
      , l = parseInt(e.toFixed(a).replace(".", ""))
      , u = parseInt(t.toFixed(a).replace(".", ""));
    return l % u / Math.pow(10, a)
}
class $r extends ze {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(t) {
        if (this._def.coerce && (t.data = Number(t.data)),
        this._getType(t) !== fe.number) {
            const l = this._getOrReturnCtx(t);
            return ae(l, {
                code: X.invalid_type,
                expected: fe.number,
                received: l.parsedType
            }),
            je
        }
        let i;
        const a = new zt;
        for (const l of this._def.checks)
            l.kind === "int" ? He.isInteger(t.data) || (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.invalid_type,
                expected: "integer",
                received: "float",
                message: l.message
            }),
            a.dirty()) : l.kind === "min" ? (l.inclusive ? t.data < l.value : t.data <= l.value) && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.too_small,
                minimum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            a.dirty()) : l.kind === "max" ? (l.inclusive ? t.data > l.value : t.data >= l.value) && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.too_big,
                maximum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            a.dirty()) : l.kind === "multipleOf" ? i2(t.data, l.value) !== 0 && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            a.dirty()) : l.kind === "finite" ? Number.isFinite(t.data) || (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.not_finite,
                message: l.message
            }),
            a.dirty()) : He.assertNever(l);
        return {
            status: a.value,
            value: t.data
        }
    }
    gte(t, r) {
        return this.setLimit("min", t, !0, be.toString(r))
    }
    gt(t, r) {
        return this.setLimit("min", t, !1, be.toString(r))
    }
    lte(t, r) {
        return this.setLimit("max", t, !0, be.toString(r))
    }
    lt(t, r) {
        return this.setLimit("max", t, !1, be.toString(r))
    }
    setLimit(t, r, i, a) {
        return new $r({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: r,
                inclusive: i,
                message: be.toString(a)
            }]
        })
    }
    _addCheck(t) {
        return new $r({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    int(t) {
        return this._addCheck({
            kind: "int",
            message: be.toString(t)
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: be.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: be.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: be.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: be.toString(t)
        })
    }
    multipleOf(t, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: be.toString(r)
        })
    }
    finite(t) {
        return this._addCheck({
            kind: "finite",
            message: be.toString(t)
        })
    }
    safe(t) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: be.toString(t)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: be.toString(t)
        })
    }
    get minValue() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "min" && (t === null || r.value > t) && (t = r.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "max" && (t === null || r.value < t) && (t = r.value);
        return t
    }
    get isInt() {
        return !!this._def.checks.find(t => t.kind === "int" || t.kind === "multipleOf" && He.isInteger(t.value))
    }
    get isFinite() {
        let t = null
          , r = null;
        for (const i of this._def.checks) {
            if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
                return !0;
            i.kind === "min" ? (r === null || i.value > r) && (r = i.value) : i.kind === "max" && (t === null || i.value < t) && (t = i.value)
        }
        return Number.isFinite(r) && Number.isFinite(t)
    }
}
$r.create = e => new $r({
    checks: [],
    typeName: Te.ZodNumber,
    coerce: e?.coerce || !1,
    ...De(e)
});
class qr extends ze {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(t) {
        if (this._def.coerce)
            try {
                t.data = BigInt(t.data)
            } catch {
                return this._getInvalidInput(t)
            }
        if (this._getType(t) !== fe.bigint)
            return this._getInvalidInput(t);
        let i;
        const a = new zt;
        for (const l of this._def.checks)
            l.kind === "min" ? (l.inclusive ? t.data < l.value : t.data <= l.value) && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.too_small,
                type: "bigint",
                minimum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            a.dirty()) : l.kind === "max" ? (l.inclusive ? t.data > l.value : t.data >= l.value) && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.too_big,
                type: "bigint",
                maximum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            a.dirty()) : l.kind === "multipleOf" ? t.data % l.value !== BigInt(0) && (i = this._getOrReturnCtx(t, i),
            ae(i, {
                code: X.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            a.dirty()) : He.assertNever(l);
        return {
            status: a.value,
            value: t.data
        }
    }
    _getInvalidInput(t) {
        const r = this._getOrReturnCtx(t);
        return ae(r, {
            code: X.invalid_type,
            expected: fe.bigint,
            received: r.parsedType
        }),
        je
    }
    gte(t, r) {
        return this.setLimit("min", t, !0, be.toString(r))
    }
    gt(t, r) {
        return this.setLimit("min", t, !1, be.toString(r))
    }
    lte(t, r) {
        return this.setLimit("max", t, !0, be.toString(r))
    }
    lt(t, r) {
        return this.setLimit("max", t, !1, be.toString(r))
    }
    setLimit(t, r, i, a) {
        return new qr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: r,
                inclusive: i,
                message: be.toString(a)
            }]
        })
    }
    _addCheck(t) {
        return new qr({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: be.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: be.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: be.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: be.toString(t)
        })
    }
    multipleOf(t, r) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: be.toString(r)
        })
    }
    get minValue() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "min" && (t === null || r.value > t) && (t = r.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "max" && (t === null || r.value < t) && (t = r.value);
        return t
    }
}
qr.create = e => {
    var t;
    return new qr({
        checks: [],
        typeName: Te.ZodBigInt,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...De(e)
    })
}
;
class Ro extends ze {
    _parse(t) {
        if (this._def.coerce && (t.data = !!t.data),
        this._getType(t) !== fe.boolean) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.boolean,
                received: i.parsedType
            }),
            je
        }
        return qt(t.data)
    }
}
Ro.create = e => new Ro({
    typeName: Te.ZodBoolean,
    coerce: e?.coerce || !1,
    ...De(e)
});
class ws extends ze {
    _parse(t) {
        if (this._def.coerce && (t.data = new Date(t.data)),
        this._getType(t) !== fe.date) {
            const l = this._getOrReturnCtx(t);
            return ae(l, {
                code: X.invalid_type,
                expected: fe.date,
                received: l.parsedType
            }),
            je
        }
        if (isNaN(t.data.getTime())) {
            const l = this._getOrReturnCtx(t);
            return ae(l, {
                code: X.invalid_date
            }),
            je
        }
        const i = new zt;
        let a;
        for (const l of this._def.checks)
            l.kind === "min" ? t.data.getTime() < l.value && (a = this._getOrReturnCtx(t, a),
            ae(a, {
                code: X.too_small,
                message: l.message,
                inclusive: !0,
                exact: !1,
                minimum: l.value,
                type: "date"
            }),
            i.dirty()) : l.kind === "max" ? t.data.getTime() > l.value && (a = this._getOrReturnCtx(t, a),
            ae(a, {
                code: X.too_big,
                message: l.message,
                inclusive: !0,
                exact: !1,
                maximum: l.value,
                type: "date"
            }),
            i.dirty()) : He.assertNever(l);
        return {
            status: i.value,
            value: new Date(t.data.getTime())
        }
    }
    _addCheck(t) {
        return new ws({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    min(t, r) {
        return this._addCheck({
            kind: "min",
            value: t.getTime(),
            message: be.toString(r)
        })
    }
    max(t, r) {
        return this._addCheck({
            kind: "max",
            value: t.getTime(),
            message: be.toString(r)
        })
    }
    get minDate() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "min" && (t === null || r.value > t) && (t = r.value);
        return t != null ? new Date(t) : null
    }
    get maxDate() {
        let t = null;
        for (const r of this._def.checks)
            r.kind === "max" && (t === null || r.value < t) && (t = r.value);
        return t != null ? new Date(t) : null
    }
}
ws.create = e => new ws({
    checks: [],
    coerce: e?.coerce || !1,
    typeName: Te.ZodDate,
    ...De(e)
});
class Dl extends ze {
    _parse(t) {
        if (this._getType(t) !== fe.symbol) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.symbol,
                received: i.parsedType
            }),
            je
        }
        return qt(t.data)
    }
}
Dl.create = e => new Dl({
    typeName: Te.ZodSymbol,
    ...De(e)
});
class Ao extends ze {
    _parse(t) {
        if (this._getType(t) !== fe.undefined) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.undefined,
                received: i.parsedType
            }),
            je
        }
        return qt(t.data)
    }
}
Ao.create = e => new Ao({
    typeName: Te.ZodUndefined,
    ...De(e)
});
class Oo extends ze {
    _parse(t) {
        if (this._getType(t) !== fe.null) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.null,
                received: i.parsedType
            }),
            je
        }
        return qt(t.data)
    }
}
Oo.create = e => new Oo({
    typeName: Te.ZodNull,
    ...De(e)
});
class yi extends ze {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(t) {
        return qt(t.data)
    }
}
yi.create = e => new yi({
    typeName: Te.ZodAny,
    ...De(e)
});
class ps extends ze {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(t) {
        return qt(t.data)
    }
}
ps.create = e => new ps({
    typeName: Te.ZodUnknown,
    ...De(e)
});
class dr extends ze {
    _parse(t) {
        const r = this._getOrReturnCtx(t);
        return ae(r, {
            code: X.invalid_type,
            expected: fe.never,
            received: r.parsedType
        }),
        je
    }
}
dr.create = e => new dr({
    typeName: Te.ZodNever,
    ...De(e)
});
class Ll extends ze {
    _parse(t) {
        if (this._getType(t) !== fe.undefined) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.void,
                received: i.parsedType
            }),
            je
        }
        return qt(t.data)
    }
}
Ll.create = e => new Ll({
    typeName: Te.ZodVoid,
    ...De(e)
});
class jn extends ze {
    _parse(t) {
        const {ctx: r, status: i} = this._processInputParams(t)
          , a = this._def;
        if (r.parsedType !== fe.array)
            return ae(r, {
                code: X.invalid_type,
                expected: fe.array,
                received: r.parsedType
            }),
            je;
        if (a.exactLength !== null) {
            const u = r.data.length > a.exactLength.value
              , p = r.data.length < a.exactLength.value;
            (u || p) && (ae(r, {
                code: u ? X.too_big : X.too_small,
                minimum: p ? a.exactLength.value : void 0,
                maximum: u ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message
            }),
            i.dirty())
        }
        if (a.minLength !== null && r.data.length < a.minLength.value && (ae(r, {
            code: X.too_small,
            minimum: a.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.minLength.message
        }),
        i.dirty()),
        a.maxLength !== null && r.data.length > a.maxLength.value && (ae(r, {
            code: X.too_big,
            maximum: a.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.maxLength.message
        }),
        i.dirty()),
        r.common.async)
            return Promise.all([...r.data].map( (u, p) => a.type._parseAsync(new Hn(r,u,r.path,p)))).then(u => zt.mergeArray(i, u));
        const l = [...r.data].map( (u, p) => a.type._parseSync(new Hn(r,u,r.path,p)));
        return zt.mergeArray(i, l)
    }
    get element() {
        return this._def.type
    }
    min(t, r) {
        return new jn({
            ...this._def,
            minLength: {
                value: t,
                message: be.toString(r)
            }
        })
    }
    max(t, r) {
        return new jn({
            ...this._def,
            maxLength: {
                value: t,
                message: be.toString(r)
            }
        })
    }
    length(t, r) {
        return new jn({
            ...this._def,
            exactLength: {
                value: t,
                message: be.toString(r)
            }
        })
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
jn.create = (e, t) => new jn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Te.ZodArray,
    ...De(t)
});
function si(e) {
    if (e instanceof ut) {
        const t = {};
        for (const r in e.shape) {
            const i = e.shape[r];
            t[r] = $n.create(si(i))
        }
        return new ut({
            ...e._def,
            shape: () => t
        })
    } else
        return e instanceof jn ? new jn({
            ...e._def,
            type: si(e.element)
        }) : e instanceof $n ? $n.create(si(e.unwrap())) : e instanceof Wr ? Wr.create(si(e.unwrap())) : e instanceof Wn ? Wn.create(e.items.map(t => si(t))) : e
}
class ut extends ze {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const t = this._def.shape()
          , r = He.objectKeys(t);
        return this._cached = {
            shape: t,
            keys: r
        }
    }
    _parse(t) {
        if (this._getType(t) !== fe.object) {
            const g = this._getOrReturnCtx(t);
            return ae(g, {
                code: X.invalid_type,
                expected: fe.object,
                received: g.parsedType
            }),
            je
        }
        const {status: i, ctx: a} = this._processInputParams(t)
          , {shape: l, keys: u} = this._getCached()
          , p = [];
        if (!(this._def.catchall instanceof dr && this._def.unknownKeys === "strip"))
            for (const g in a.data)
                u.includes(g) || p.push(g);
        const m = [];
        for (const g of u) {
            const v = l[g]
              , w = a.data[g];
            m.push({
                key: {
                    status: "valid",
                    value: g
                },
                value: v._parse(new Hn(a,w,a.path,g)),
                alwaysSet: g in a.data
            })
        }
        if (this._def.catchall instanceof dr) {
            const g = this._def.unknownKeys;
            if (g === "passthrough")
                for (const v of p)
                    m.push({
                        key: {
                            status: "valid",
                            value: v
                        },
                        value: {
                            status: "valid",
                            value: a.data[v]
                        }
                    });
            else if (g === "strict")
                p.length > 0 && (ae(a, {
                    code: X.unrecognized_keys,
                    keys: p
                }),
                i.dirty());
            else if (g !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const g = this._def.catchall;
            for (const v of p) {
                const w = a.data[v];
                m.push({
                    key: {
                        status: "valid",
                        value: v
                    },
                    value: g._parse(new Hn(a,w,a.path,v)),
                    alwaysSet: v in a.data
                })
            }
        }
        return a.common.async ? Promise.resolve().then(async () => {
            const g = [];
            for (const v of m) {
                const w = await v.key
                  , S = await v.value;
                g.push({
                    key: w,
                    value: S,
                    alwaysSet: v.alwaysSet
                })
            }
            return g
        }
        ).then(g => zt.mergeObjectSync(i, g)) : zt.mergeObjectSync(i, m)
    }
    get shape() {
        return this._def.shape()
    }
    strict(t) {
        return be.errToObj,
        new ut({
            ...this._def,
            unknownKeys: "strict",
            ...t !== void 0 ? {
                errorMap: (r, i) => {
                    var a, l, u, p;
                    const m = (u = (l = (a = this._def).errorMap) === null || l === void 0 ? void 0 : l.call(a, r, i).message) !== null && u !== void 0 ? u : i.defaultError;
                    return r.code === "unrecognized_keys" ? {
                        message: (p = be.errToObj(t).message) !== null && p !== void 0 ? p : m
                    } : {
                        message: m
                    }
                }
            } : {}
        })
    }
    strip() {
        return new ut({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new ut({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(t) {
        return new ut({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...t
            })
        })
    }
    merge(t) {
        return new ut({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...t._def.shape()
            }),
            typeName: Te.ZodObject
        })
    }
    setKey(t, r) {
        return this.augment({
            [t]: r
        })
    }
    catchall(t) {
        return new ut({
            ...this._def,
            catchall: t
        })
    }
    pick(t) {
        const r = {};
        return He.objectKeys(t).forEach(i => {
            t[i] && this.shape[i] && (r[i] = this.shape[i])
        }
        ),
        new ut({
            ...this._def,
            shape: () => r
        })
    }
    omit(t) {
        const r = {};
        return He.objectKeys(this.shape).forEach(i => {
            t[i] || (r[i] = this.shape[i])
        }
        ),
        new ut({
            ...this._def,
            shape: () => r
        })
    }
    deepPartial() {
        return si(this)
    }
    partial(t) {
        const r = {};
        return He.objectKeys(this.shape).forEach(i => {
            const a = this.shape[i];
            t && !t[i] ? r[i] = a : r[i] = a.optional()
        }
        ),
        new ut({
            ...this._def,
            shape: () => r
        })
    }
    required(t) {
        const r = {};
        return He.objectKeys(this.shape).forEach(i => {
            if (t && !t[i])
                r[i] = this.shape[i];
            else {
                let l = this.shape[i];
                for (; l instanceof $n; )
                    l = l._def.innerType;
                r[i] = l
            }
        }
        ),
        new ut({
            ...this._def,
            shape: () => r
        })
    }
    keyof() {
        return z0(He.objectKeys(this.shape))
    }
}
ut.create = (e, t) => new ut({
    shape: () => e,
    unknownKeys: "strip",
    catchall: dr.create(),
    typeName: Te.ZodObject,
    ...De(t)
});
ut.strictCreate = (e, t) => new ut({
    shape: () => e,
    unknownKeys: "strict",
    catchall: dr.create(),
    typeName: Te.ZodObject,
    ...De(t)
});
ut.lazycreate = (e, t) => new ut({
    shape: e,
    unknownKeys: "strip",
    catchall: dr.create(),
    typeName: Te.ZodObject,
    ...De(t)
});
class Io extends ze {
    _parse(t) {
        const {ctx: r} = this._processInputParams(t)
          , i = this._def.options;
        function a(l) {
            for (const p of l)
                if (p.result.status === "valid")
                    return p.result;
            for (const p of l)
                if (p.result.status === "dirty")
                    return r.common.issues.push(...p.ctx.common.issues),
                    p.result;
            const u = l.map(p => new cn(p.ctx.common.issues));
            return ae(r, {
                code: X.invalid_union,
                unionErrors: u
            }),
            je
        }
        if (r.common.async)
            return Promise.all(i.map(async l => {
                const u = {
                    ...r,
                    common: {
                        ...r.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await l._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: u
                    }),
                    ctx: u
                }
            }
            )).then(a);
        {
            let l;
            const u = [];
            for (const m of i) {
                const g = {
                    ...r,
                    common: {
                        ...r.common,
                        issues: []
                    },
                    parent: null
                }
                  , v = m._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: g
                });
                if (v.status === "valid")
                    return v;
                v.status === "dirty" && !l && (l = {
                    result: v,
                    ctx: g
                }),
                g.common.issues.length && u.push(g.common.issues)
            }
            if (l)
                return r.common.issues.push(...l.ctx.common.issues),
                l.result;
            const p = u.map(m => new cn(m));
            return ae(r, {
                code: X.invalid_union,
                unionErrors: p
            }),
            je
        }
    }
    get options() {
        return this._def.options
    }
}
Io.create = (e, t) => new Io({
    options: e,
    typeName: Te.ZodUnion,
    ...De(t)
});
const or = e => e instanceof Lo ? or(e.schema) : e instanceof On ? or(e.innerType()) : e instanceof Fo ? [e.value] : e instanceof Hr ? e.options : e instanceof zo ? He.objectValues(e.enum) : e instanceof Vo ? or(e._def.innerType) : e instanceof Ao ? [void 0] : e instanceof Oo ? [null] : e instanceof $n ? [void 0, ...or(e.unwrap())] : e instanceof Wr ? [null, ...or(e.unwrap())] : e instanceof zf || e instanceof Uo ? or(e.unwrap()) : e instanceof Bo ? or(e._def.innerType) : [];
class cc extends ze {
    _parse(t) {
        const {ctx: r} = this._processInputParams(t);
        if (r.parsedType !== fe.object)
            return ae(r, {
                code: X.invalid_type,
                expected: fe.object,
                received: r.parsedType
            }),
            je;
        const i = this.discriminator
          , a = r.data[i]
          , l = this.optionsMap.get(a);
        return l ? r.common.async ? l._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }) : l._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }) : (ae(r, {
            code: X.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [i]
        }),
        je)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(t, r, i) {
        const a = new Map;
        for (const l of r) {
            const u = or(l.shape[t]);
            if (!u.length)
                throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
            for (const p of u) {
                if (a.has(p))
                    throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(p)}`);
                a.set(p, l)
            }
        }
        return new cc({
            typeName: Te.ZodDiscriminatedUnion,
            discriminator: t,
            options: r,
            optionsMap: a,
            ...De(i)
        })
    }
}
function rf(e, t) {
    const r = lr(e)
      , i = lr(t);
    if (e === t)
        return {
            valid: !0,
            data: e
        };
    if (r === fe.object && i === fe.object) {
        const a = He.objectKeys(t)
          , l = He.objectKeys(e).filter(p => a.indexOf(p) !== -1)
          , u = {
            ...e,
            ...t
        };
        for (const p of l) {
            const m = rf(e[p], t[p]);
            if (!m.valid)
                return {
                    valid: !1
                };
            u[p] = m.data
        }
        return {
            valid: !0,
            data: u
        }
    } else if (r === fe.array && i === fe.array) {
        if (e.length !== t.length)
            return {
                valid: !1
            };
        const a = [];
        for (let l = 0; l < e.length; l++) {
            const u = e[l]
              , p = t[l]
              , m = rf(u, p);
            if (!m.valid)
                return {
                    valid: !1
                };
            a.push(m.data)
        }
        return {
            valid: !0,
            data: a
        }
    } else
        return r === fe.date && i === fe.date && +e == +t ? {
            valid: !0,
            data: e
        } : {
            valid: !1
        }
}
class Mo extends ze {
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t)
          , a = (l, u) => {
            if (tf(l) || tf(u))
                return je;
            const p = rf(l.value, u.value);
            return p.valid ? ((nf(l) || nf(u)) && r.dirty(),
            {
                status: r.value,
                value: p.data
            }) : (ae(i, {
                code: X.invalid_intersection_types
            }),
            je)
        }
        ;
        return i.common.async ? Promise.all([this._def.left._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i
        })]).then( ([l,u]) => a(l, u)) : a(this._def.left._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }), this._def.right._parseSync({
            data: i.data,
            path: i.path,
            parent: i
        }))
    }
}
Mo.create = (e, t, r) => new Mo({
    left: e,
    right: t,
    typeName: Te.ZodIntersection,
    ...De(r)
});
class Wn extends ze {
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t);
        if (i.parsedType !== fe.array)
            return ae(i, {
                code: X.invalid_type,
                expected: fe.array,
                received: i.parsedType
            }),
            je;
        if (i.data.length < this._def.items.length)
            return ae(i, {
                code: X.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            je;
        !this._def.rest && i.data.length > this._def.items.length && (ae(i, {
            code: X.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        r.dirty());
        const l = [...i.data].map( (u, p) => {
            const m = this._def.items[p] || this._def.rest;
            return m ? m._parse(new Hn(i,u,i.path,p)) : null
        }
        ).filter(u => !!u);
        return i.common.async ? Promise.all(l).then(u => zt.mergeArray(r, u)) : zt.mergeArray(r, l)
    }
    get items() {
        return this._def.items
    }
    rest(t) {
        return new Wn({
            ...this._def,
            rest: t
        })
    }
}
Wn.create = (e, t) => {
    if (!Array.isArray(e))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Wn({
        items: e,
        typeName: Te.ZodTuple,
        rest: null,
        ...De(t)
    })
}
;
class Do extends ze {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t);
        if (i.parsedType !== fe.object)
            return ae(i, {
                code: X.invalid_type,
                expected: fe.object,
                received: i.parsedType
            }),
            je;
        const a = []
          , l = this._def.keyType
          , u = this._def.valueType;
        for (const p in i.data)
            a.push({
                key: l._parse(new Hn(i,p,i.path,p)),
                value: u._parse(new Hn(i,i.data[p],i.path,p)),
                alwaysSet: p in i.data
            });
        return i.common.async ? zt.mergeObjectAsync(r, a) : zt.mergeObjectSync(r, a)
    }
    get element() {
        return this._def.valueType
    }
    static create(t, r, i) {
        return r instanceof ze ? new Do({
            keyType: t,
            valueType: r,
            typeName: Te.ZodRecord,
            ...De(i)
        }) : new Do({
            keyType: Tn.create(),
            valueType: t,
            typeName: Te.ZodRecord,
            ...De(r)
        })
    }
}
class Fl extends ze {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t);
        if (i.parsedType !== fe.map)
            return ae(i, {
                code: X.invalid_type,
                expected: fe.map,
                received: i.parsedType
            }),
            je;
        const a = this._def.keyType
          , l = this._def.valueType
          , u = [...i.data.entries()].map( ([p,m], g) => ({
            key: a._parse(new Hn(i,p,i.path,[g, "key"])),
            value: l._parse(new Hn(i,m,i.path,[g, "value"]))
        }));
        if (i.common.async) {
            const p = new Map;
            return Promise.resolve().then(async () => {
                for (const m of u) {
                    const g = await m.key
                      , v = await m.value;
                    if (g.status === "aborted" || v.status === "aborted")
                        return je;
                    (g.status === "dirty" || v.status === "dirty") && r.dirty(),
                    p.set(g.value, v.value)
                }
                return {
                    status: r.value,
                    value: p
                }
            }
            )
        } else {
            const p = new Map;
            for (const m of u) {
                const g = m.key
                  , v = m.value;
                if (g.status === "aborted" || v.status === "aborted")
                    return je;
                (g.status === "dirty" || v.status === "dirty") && r.dirty(),
                p.set(g.value, v.value)
            }
            return {
                status: r.value,
                value: p
            }
        }
    }
}
Fl.create = (e, t, r) => new Fl({
    valueType: t,
    keyType: e,
    typeName: Te.ZodMap,
    ...De(r)
});
class bs extends ze {
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t);
        if (i.parsedType !== fe.set)
            return ae(i, {
                code: X.invalid_type,
                expected: fe.set,
                received: i.parsedType
            }),
            je;
        const a = this._def;
        a.minSize !== null && i.data.size < a.minSize.value && (ae(i, {
            code: X.too_small,
            minimum: a.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.minSize.message
        }),
        r.dirty()),
        a.maxSize !== null && i.data.size > a.maxSize.value && (ae(i, {
            code: X.too_big,
            maximum: a.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.maxSize.message
        }),
        r.dirty());
        const l = this._def.valueType;
        function u(m) {
            const g = new Set;
            for (const v of m) {
                if (v.status === "aborted")
                    return je;
                v.status === "dirty" && r.dirty(),
                g.add(v.value)
            }
            return {
                status: r.value,
                value: g
            }
        }
        const p = [...i.data.values()].map( (m, g) => l._parse(new Hn(i,m,i.path,g)));
        return i.common.async ? Promise.all(p).then(m => u(m)) : u(p)
    }
    min(t, r) {
        return new bs({
            ...this._def,
            minSize: {
                value: t,
                message: be.toString(r)
            }
        })
    }
    max(t, r) {
        return new bs({
            ...this._def,
            maxSize: {
                value: t,
                message: be.toString(r)
            }
        })
    }
    size(t, r) {
        return this.min(t, r).max(t, r)
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
bs.create = (e, t) => new bs({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Te.ZodSet,
    ...De(t)
});
class pi extends ze {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(t) {
        const {ctx: r} = this._processInputParams(t);
        if (r.parsedType !== fe.function)
            return ae(r, {
                code: X.invalid_type,
                expected: fe.function,
                received: r.parsedType
            }),
            je;
        function i(p, m) {
            return Il({
                data: p,
                path: r.path,
                errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ol(), vi].filter(g => !!g),
                issueData: {
                    code: X.invalid_arguments,
                    argumentsError: m
                }
            })
        }
        function a(p, m) {
            return Il({
                data: p,
                path: r.path,
                errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ol(), vi].filter(g => !!g),
                issueData: {
                    code: X.invalid_return_type,
                    returnTypeError: m
                }
            })
        }
        const l = {
            errorMap: r.common.contextualErrorMap
        }
          , u = r.data;
        if (this._def.returns instanceof xi) {
            const p = this;
            return qt(async function(...m) {
                const g = new cn([])
                  , v = await p._def.args.parseAsync(m, l).catch(k => {
                    throw g.addIssue(i(m, k)),
                    g
                }
                )
                  , w = await Reflect.apply(u, this, v);
                return await p._def.returns._def.type.parseAsync(w, l).catch(k => {
                    throw g.addIssue(a(w, k)),
                    g
                }
                )
            })
        } else {
            const p = this;
            return qt(function(...m) {
                const g = p._def.args.safeParse(m, l);
                if (!g.success)
                    throw new cn([i(m, g.error)]);
                const v = Reflect.apply(u, this, g.data)
                  , w = p._def.returns.safeParse(v, l);
                if (!w.success)
                    throw new cn([a(v, w.error)]);
                return w.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...t) {
        return new pi({
            ...this._def,
            args: Wn.create(t).rest(ps.create())
        })
    }
    returns(t) {
        return new pi({
            ...this._def,
            returns: t
        })
    }
    implement(t) {
        return this.parse(t)
    }
    strictImplement(t) {
        return this.parse(t)
    }
    static create(t, r, i) {
        return new pi({
            args: t || Wn.create([]).rest(ps.create()),
            returns: r || ps.create(),
            typeName: Te.ZodFunction,
            ...De(i)
        })
    }
}
class Lo extends ze {
    get schema() {
        return this._def.getter()
    }
    _parse(t) {
        const {ctx: r} = this._processInputParams(t);
        return this._def.getter()._parse({
            data: r.data,
            path: r.path,
            parent: r
        })
    }
}
Lo.create = (e, t) => new Lo({
    getter: e,
    typeName: Te.ZodLazy,
    ...De(t)
});
class Fo extends ze {
    _parse(t) {
        if (t.data !== this._def.value) {
            const r = this._getOrReturnCtx(t);
            return ae(r, {
                received: r.data,
                code: X.invalid_literal,
                expected: this._def.value
            }),
            je
        }
        return {
            status: "valid",
            value: t.data
        }
    }
    get value() {
        return this._def.value
    }
}
Fo.create = (e, t) => new Fo({
    value: e,
    typeName: Te.ZodLiteral,
    ...De(t)
});
function z0(e, t) {
    return new Hr({
        values: e,
        typeName: Te.ZodEnum,
        ...De(t)
    })
}
class Hr extends ze {
    constructor() {
        super(...arguments),
        yo.set(this, void 0)
    }
    _parse(t) {
        if (typeof t.data != "string") {
            const r = this._getOrReturnCtx(t)
              , i = this._def.values;
            return ae(r, {
                expected: He.joinValues(i),
                received: r.parsedType,
                code: X.invalid_type
            }),
            je
        }
        if (Ml(this, yo) || M0(this, yo, new Set(this._def.values)),
        !Ml(this, yo).has(t.data)) {
            const r = this._getOrReturnCtx(t)
              , i = this._def.values;
            return ae(r, {
                received: r.data,
                code: X.invalid_enum_value,
                options: i
            }),
            je
        }
        return qt(t.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const t = {};
        for (const r of this._def.values)
            t[r] = r;
        return t
    }
    get Values() {
        const t = {};
        for (const r of this._def.values)
            t[r] = r;
        return t
    }
    get Enum() {
        const t = {};
        for (const r of this._def.values)
            t[r] = r;
        return t
    }
    extract(t, r=this._def) {
        return Hr.create(t, {
            ...this._def,
            ...r
        })
    }
    exclude(t, r=this._def) {
        return Hr.create(this.options.filter(i => !t.includes(i)), {
            ...this._def,
            ...r
        })
    }
}
yo = new WeakMap;
Hr.create = z0;
class zo extends ze {
    constructor() {
        super(...arguments),
        xo.set(this, void 0)
    }
    _parse(t) {
        const r = He.getValidEnumValues(this._def.values)
          , i = this._getOrReturnCtx(t);
        if (i.parsedType !== fe.string && i.parsedType !== fe.number) {
            const a = He.objectValues(r);
            return ae(i, {
                expected: He.joinValues(a),
                received: i.parsedType,
                code: X.invalid_type
            }),
            je
        }
        if (Ml(this, xo) || M0(this, xo, new Set(He.getValidEnumValues(this._def.values))),
        !Ml(this, xo).has(t.data)) {
            const a = He.objectValues(r);
            return ae(i, {
                received: i.data,
                code: X.invalid_enum_value,
                options: a
            }),
            je
        }
        return qt(t.data)
    }
    get enum() {
        return this._def.values
    }
}
xo = new WeakMap;
zo.create = (e, t) => new zo({
    values: e,
    typeName: Te.ZodNativeEnum,
    ...De(t)
});
class xi extends ze {
    unwrap() {
        return this._def.type
    }
    _parse(t) {
        const {ctx: r} = this._processInputParams(t);
        if (r.parsedType !== fe.promise && r.common.async === !1)
            return ae(r, {
                code: X.invalid_type,
                expected: fe.promise,
                received: r.parsedType
            }),
            je;
        const i = r.parsedType === fe.promise ? r.data : Promise.resolve(r.data);
        return qt(i.then(a => this._def.type.parseAsync(a, {
            path: r.path,
            errorMap: r.common.contextualErrorMap
        })))
    }
}
xi.create = (e, t) => new xi({
    type: e,
    typeName: Te.ZodPromise,
    ...De(t)
});
class On extends ze {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t)
          , a = this._def.effect || null
          , l = {
            addIssue: u => {
                ae(i, u),
                u.fatal ? r.abort() : r.dirty()
            }
            ,
            get path() {
                return i.path
            }
        };
        if (l.addIssue = l.addIssue.bind(l),
        a.type === "preprocess") {
            const u = a.transform(i.data, l);
            if (i.common.async)
                return Promise.resolve(u).then(async p => {
                    if (r.value === "aborted")
                        return je;
                    const m = await this._def.schema._parseAsync({
                        data: p,
                        path: i.path,
                        parent: i
                    });
                    return m.status === "aborted" ? je : m.status === "dirty" || r.value === "dirty" ? oi(m.value) : m
                }
                );
            {
                if (r.value === "aborted")
                    return je;
                const p = this._def.schema._parseSync({
                    data: u,
                    path: i.path,
                    parent: i
                });
                return p.status === "aborted" ? je : p.status === "dirty" || r.value === "dirty" ? oi(p.value) : p
            }
        }
        if (a.type === "refinement") {
            const u = p => {
                const m = a.refinement(p, l);
                if (i.common.async)
                    return Promise.resolve(m);
                if (m instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return p
            }
            ;
            if (i.common.async === !1) {
                const p = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return p.status === "aborted" ? je : (p.status === "dirty" && r.dirty(),
                u(p.value),
                {
                    status: r.value,
                    value: p.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(p => p.status === "aborted" ? je : (p.status === "dirty" && r.dirty(),
                u(p.value).then( () => ({
                    status: r.value,
                    value: p.value
                }))))
        }
        if (a.type === "transform")
            if (i.common.async === !1) {
                const u = this._def.schema._parseSync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                if (!xs(u))
                    return u;
                const p = a.transform(u.value, l);
                if (p instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: r.value,
                    value: p
                }
            } else
                return this._def.schema._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                }).then(u => xs(u) ? Promise.resolve(a.transform(u.value, l)).then(p => ({
                    status: r.value,
                    value: p
                })) : u);
        He.assertNever(a)
    }
}
On.create = (e, t, r) => new On({
    schema: e,
    typeName: Te.ZodEffects,
    effect: t,
    ...De(r)
});
On.createWithPreprocess = (e, t, r) => new On({
    schema: t,
    effect: {
        type: "preprocess",
        transform: e
    },
    typeName: Te.ZodEffects,
    ...De(r)
});
class $n extends ze {
    _parse(t) {
        return this._getType(t) === fe.undefined ? qt(void 0) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
$n.create = (e, t) => new $n({
    innerType: e,
    typeName: Te.ZodOptional,
    ...De(t)
});
class Wr extends ze {
    _parse(t) {
        return this._getType(t) === fe.null ? qt(null) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
Wr.create = (e, t) => new Wr({
    innerType: e,
    typeName: Te.ZodNullable,
    ...De(t)
});
class Vo extends ze {
    _parse(t) {
        const {ctx: r} = this._processInputParams(t);
        let i = r.data;
        return r.parsedType === fe.undefined && (i = this._def.defaultValue()),
        this._def.innerType._parse({
            data: i,
            path: r.path,
            parent: r
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Vo.create = (e, t) => new Vo({
    innerType: e,
    typeName: Te.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...De(t)
});
class Bo extends ze {
    _parse(t) {
        const {ctx: r} = this._processInputParams(t)
          , i = {
            ...r,
            common: {
                ...r.common,
                issues: []
            }
        }
          , a = this._def.innerType._parse({
            data: i.data,
            path: i.path,
            parent: {
                ...i
            }
        });
        return jo(a) ? a.then(l => ({
            status: "valid",
            value: l.status === "valid" ? l.value : this._def.catchValue({
                get error() {
                    return new cn(i.common.issues)
                },
                input: i.data
            })
        })) : {
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new cn(i.common.issues)
                },
                input: i.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Bo.create = (e, t) => new Bo({
    innerType: e,
    typeName: Te.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...De(t)
});
class zl extends ze {
    _parse(t) {
        if (this._getType(t) !== fe.nan) {
            const i = this._getOrReturnCtx(t);
            return ae(i, {
                code: X.invalid_type,
                expected: fe.nan,
                received: i.parsedType
            }),
            je
        }
        return {
            status: "valid",
            value: t.data
        }
    }
}
zl.create = e => new zl({
    typeName: Te.ZodNaN,
    ...De(e)
});
const o2 = Symbol("zod_brand");
class zf extends ze {
    _parse(t) {
        const {ctx: r} = this._processInputParams(t)
          , i = r.data;
        return this._def.type._parse({
            data: i,
            path: r.path,
            parent: r
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Ko extends ze {
    _parse(t) {
        const {status: r, ctx: i} = this._processInputParams(t);
        if (i.common.async)
            return (async () => {
                const l = await this._def.in._parseAsync({
                    data: i.data,
                    path: i.path,
                    parent: i
                });
                return l.status === "aborted" ? je : l.status === "dirty" ? (r.dirty(),
                oi(l.value)) : this._def.out._parseAsync({
                    data: l.value,
                    path: i.path,
                    parent: i
                })
            }
            )();
        {
            const a = this._def.in._parseSync({
                data: i.data,
                path: i.path,
                parent: i
            });
            return a.status === "aborted" ? je : a.status === "dirty" ? (r.dirty(),
            {
                status: "dirty",
                value: a.value
            }) : this._def.out._parseSync({
                data: a.value,
                path: i.path,
                parent: i
            })
        }
    }
    static create(t, r) {
        return new Ko({
            in: t,
            out: r,
            typeName: Te.ZodPipeline
        })
    }
}
class Uo extends ze {
    _parse(t) {
        const r = this._def.innerType._parse(t)
          , i = a => (xs(a) && (a.value = Object.freeze(a.value)),
        a);
        return jo(r) ? r.then(a => i(a)) : i(r)
    }
    unwrap() {
        return this._def.innerType
    }
}
Uo.create = (e, t) => new Uo({
    innerType: e,
    typeName: Te.ZodReadonly,
    ...De(t)
});
function tv(e, t) {
    const r = typeof e == "function" ? e(t) : typeof e == "string" ? {
        message: e
    } : e;
    return typeof r == "string" ? {
        message: r
    } : r
}
function V0(e, t={}, r) {
    return e ? yi.create().superRefine( (i, a) => {
        var l, u;
        const p = e(i);
        if (p instanceof Promise)
            return p.then(m => {
                var g, v;
                if (!m) {
                    const w = tv(t, i)
                      , S = (v = (g = w.fatal) !== null && g !== void 0 ? g : r) !== null && v !== void 0 ? v : !0;
                    a.addIssue({
                        code: "custom",
                        ...w,
                        fatal: S
                    })
                }
            }
            );
        if (!p) {
            const m = tv(t, i)
              , g = (u = (l = m.fatal) !== null && l !== void 0 ? l : r) !== null && u !== void 0 ? u : !0;
            a.addIssue({
                code: "custom",
                ...m,
                fatal: g
            })
        }
    }
    ) : yi.create()
}
const a2 = {
    object: ut.lazycreate
};
var Te;
(function(e) {
    e.ZodString = "ZodString",
    e.ZodNumber = "ZodNumber",
    e.ZodNaN = "ZodNaN",
    e.ZodBigInt = "ZodBigInt",
    e.ZodBoolean = "ZodBoolean",
    e.ZodDate = "ZodDate",
    e.ZodSymbol = "ZodSymbol",
    e.ZodUndefined = "ZodUndefined",
    e.ZodNull = "ZodNull",
    e.ZodAny = "ZodAny",
    e.ZodUnknown = "ZodUnknown",
    e.ZodNever = "ZodNever",
    e.ZodVoid = "ZodVoid",
    e.ZodArray = "ZodArray",
    e.ZodObject = "ZodObject",
    e.ZodUnion = "ZodUnion",
    e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    e.ZodIntersection = "ZodIntersection",
    e.ZodTuple = "ZodTuple",
    e.ZodRecord = "ZodRecord",
    e.ZodMap = "ZodMap",
    e.ZodSet = "ZodSet",
    e.ZodFunction = "ZodFunction",
    e.ZodLazy = "ZodLazy",
    e.ZodLiteral = "ZodLiteral",
    e.ZodEnum = "ZodEnum",
    e.ZodEffects = "ZodEffects",
    e.ZodNativeEnum = "ZodNativeEnum",
    e.ZodOptional = "ZodOptional",
    e.ZodNullable = "ZodNullable",
    e.ZodDefault = "ZodDefault",
    e.ZodCatch = "ZodCatch",
    e.ZodPromise = "ZodPromise",
    e.ZodBranded = "ZodBranded",
    e.ZodPipeline = "ZodPipeline",
    e.ZodReadonly = "ZodReadonly"
}
)(Te || (Te = {}));
const l2 = (e, t={
    message: `Input not instance of ${e.name}`
}) => V0(r => r instanceof e, t)
  , B0 = Tn.create
  , U0 = $r.create
  , c2 = zl.create
  , u2 = qr.create
  , $0 = Ro.create
  , d2 = ws.create
  , f2 = Dl.create
  , p2 = Ao.create
  , h2 = Oo.create
  , m2 = yi.create
  , g2 = ps.create
  , v2 = dr.create
  , y2 = Ll.create
  , x2 = jn.create
  , w2 = ut.create
  , b2 = ut.strictCreate
  , S2 = Io.create
  , C2 = cc.create
  , _2 = Mo.create
  , N2 = Wn.create
  , k2 = Do.create
  , E2 = Fl.create
  , P2 = bs.create
  , T2 = pi.create
  , j2 = Lo.create
  , R2 = Fo.create
  , A2 = Hr.create
  , O2 = zo.create
  , I2 = xi.create
  , nv = On.create
  , M2 = $n.create
  , D2 = Wr.create
  , L2 = On.createWithPreprocess
  , F2 = Ko.create
  , z2 = () => B0().optional()
  , V2 = () => U0().optional()
  , B2 = () => $0().optional()
  , U2 = {
    string: (e => Tn.create({
        ...e,
        coerce: !0
    })),
    number: (e => $r.create({
        ...e,
        coerce: !0
    })),
    boolean: (e => Ro.create({
        ...e,
        coerce: !0
    })),
    bigint: (e => qr.create({
        ...e,
        coerce: !0
    })),
    date: (e => ws.create({
        ...e,
        coerce: !0
    }))
}
  , $2 = je;
var wt = Object.freeze({
    __proto__: null,
    defaultErrorMap: vi,
    setErrorMap: Lj,
    getErrorMap: Ol,
    makeIssue: Il,
    EMPTY_PATH: Fj,
    addIssueToContext: ae,
    ParseStatus: zt,
    INVALID: je,
    DIRTY: oi,
    OK: qt,
    isAborted: tf,
    isDirty: nf,
    isValid: xs,
    isAsync: jo,
    get util() {
        return He
    },
    get objectUtil() {
        return ef
    },
    ZodParsedType: fe,
    getParsedType: lr,
    ZodType: ze,
    datetimeRegex: F0,
    ZodString: Tn,
    ZodNumber: $r,
    ZodBigInt: qr,
    ZodBoolean: Ro,
    ZodDate: ws,
    ZodSymbol: Dl,
    ZodUndefined: Ao,
    ZodNull: Oo,
    ZodAny: yi,
    ZodUnknown: ps,
    ZodNever: dr,
    ZodVoid: Ll,
    ZodArray: jn,
    ZodObject: ut,
    ZodUnion: Io,
    ZodDiscriminatedUnion: cc,
    ZodIntersection: Mo,
    ZodTuple: Wn,
    ZodRecord: Do,
    ZodMap: Fl,
    ZodSet: bs,
    ZodFunction: pi,
    ZodLazy: Lo,
    ZodLiteral: Fo,
    ZodEnum: Hr,
    ZodNativeEnum: zo,
    ZodPromise: xi,
    ZodEffects: On,
    ZodTransformer: On,
    ZodOptional: $n,
    ZodNullable: Wr,
    ZodDefault: Vo,
    ZodCatch: Bo,
    ZodNaN: zl,
    BRAND: o2,
    ZodBranded: zf,
    ZodPipeline: Ko,
    ZodReadonly: Uo,
    custom: V0,
    Schema: ze,
    ZodSchema: ze,
    late: a2,
    get ZodFirstPartyTypeKind() {
        return Te
    },
    coerce: U2,
    any: m2,
    array: x2,
    bigint: u2,
    boolean: $0,
    date: d2,
    discriminatedUnion: C2,
    effect: nv,
    enum: A2,
    function: T2,
    instanceof: l2,
    intersection: _2,
    lazy: j2,
    literal: R2,
    map: E2,
    nan: c2,
    nativeEnum: O2,
    never: v2,
    null: h2,
    nullable: D2,
    number: U0,
    object: w2,
    oboolean: B2,
    onumber: V2,
    optional: M2,
    ostring: z2,
    pipeline: F2,
    preprocess: L2,
    promise: I2,
    record: k2,
    set: P2,
    strictObject: b2,
    string: B0,
    symbol: f2,
    transformer: nv,
    tuple: N2,
    undefined: p2,
    union: S2,
    unknown: g2,
    void: y2,
    NEVER: $2,
    ZodIssueCode: X,
    quotelessJson: Dj,
    ZodError: cn
});
const ct = {
    INT8_MIN: -128,
    INT8_MAX: 127,
    INT8_UNSIGNED_MAX: 255,
    INT16_MIN: -32768,
    INT16_MAX: 32767,
    INT16_UNSIGNED_MAX: 65535,
    INT24_MIN: -8388608,
    INT24_MAX: 8388607,
    INT24_UNSIGNED_MAX: 16777215,
    INT32_MIN: -2147483648,
    INT32_MAX: 2147483647,
    INT32_UNSIGNED_MAX: 4294967295,
    INT48_MIN: -0x800000000000,
    INT48_MAX: 0x7fffffffffff,
    INT48_UNSIGNED_MAX: 0xffffffffffff,
    INT64_MIN: -9223372036854775808n,
    INT64_MAX: 9223372036854775807n,
    INT64_UNSIGNED_MAX: 18446744073709551615n
};
function gt(e, t) {
    return t.includes(e.columnType)
}
function q2(e) {
    return "enumValues"in e && Array.isArray(e.enumValues) && e.enumValues.length > 0
}
const H2 = wt.union([wt.string(), wt.number(), wt.boolean(), wt.null()])
  , W2 = wt.union([H2, wt.record(wt.any()), wt.array(wt.any())])
  , Q2 = wt.custom(e => e instanceof Buffer);
function q0(e, t) {
    const r = t?.zodInstance ?? wt
      , i = t?.coerce ?? {};
    let a;
    return q2(e) && (a = e.enumValues.length ? r.enum(e.enumValues) : r.string()),
    a || (gt(e, ["PgGeometry", "PgPointTuple"]) ? a = r.tuple([r.number(), r.number()]) : gt(e, ["PgGeometryObject", "PgPointObject"]) ? a = r.object({
        x: r.number(),
        y: r.number()
    }) : gt(e, ["PgHalfVector", "PgVector"]) ? (a = r.array(r.number()),
    a = e.dimensions ? a.length(e.dimensions) : a) : gt(e, ["PgLine"]) ? a = r.tuple([r.number(), r.number(), r.number()]) : gt(e, ["PgLineABC"]) ? a = r.object({
        a: r.number(),
        b: r.number(),
        c: r.number()
    }) : gt(e, ["PgArray"]) ? (a = r.array(q0(e.baseColumn, r)),
    a = e.size ? a.length(e.size) : a) : e.dataType === "array" ? a = r.array(r.any()) : e.dataType === "number" ? a = Z2(e, r, i) : e.dataType === "bigint" ? a = K2(e, r, i) : e.dataType === "boolean" ? a = i === !0 || i.boolean ? r.coerce.boolean() : r.boolean() : e.dataType === "date" ? a = i === !0 || i.date ? r.coerce.date() : r.date() : e.dataType === "string" ? a = G2(e, r, i) : e.dataType === "json" ? a = W2 : e.dataType === "custom" ? a = r.any() : e.dataType === "buffer" && (a = Q2)),
    a || (a = r.any()),
    a
}
function Z2(e, t, r) {
    let i = e.getSQLType().includes("unsigned"), a, l, u = !1;
    gt(e, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (a = i ? 0 : ct.INT8_MIN,
    l = i ? ct.INT8_UNSIGNED_MAX : ct.INT8_MAX,
    u = !0) : gt(e, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (a = i ? 0 : ct.INT16_MIN,
    l = i ? ct.INT16_UNSIGNED_MAX : ct.INT16_MAX,
    u = !0) : gt(e, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (a = i ? 0 : ct.INT24_MIN,
    l = i ? ct.INT24_UNSIGNED_MAX : ct.INT24_MAX,
    u = gt(e, ["MySqlMediumInt", "SingleStoreMediumInt"])) : gt(e, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (a = i ? 0 : ct.INT32_MIN,
    l = i ? ct.INT32_UNSIGNED_MAX : ct.INT32_MAX,
    u = !0) : gt(e, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (a = i ? 0 : ct.INT48_MIN,
    l = i ? ct.INT48_UNSIGNED_MAX : ct.INT48_MAX) : gt(e, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (i = i || gt(e, ["MySqlSerial", "SingleStoreSerial"]),
    a = i ? 0 : Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER,
    u = !0) : gt(e, ["MySqlYear", "SingleStoreYear"]) ? (a = 1901,
    l = 2155,
    u = !0) : (a = Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER);
    let p = r === !0 || r?.number ? t.coerce.number() : t.number();
    return p = p.min(a).max(l),
    u ? p.int() : p
}
function K2(e, t, r) {
    const i = e.getSQLType().includes("unsigned")
      , a = i ? 0n : ct.INT64_MIN
      , l = i ? ct.INT64_UNSIGNED_MAX : ct.INT64_MAX;
    return (r === !0 || r?.bigint ? t.coerce.bigint() : t.bigint()).min(a).max(l)
}
function G2(e, t, r) {
    if (gt(e, ["PgUUID"]))
        return t.string().uuid();
    let i, a, l = !1;
    gt(e, ["PgVarchar", "SQLiteText"]) ? i = e.length : gt(e, ["MySqlVarChar", "SingleStoreVarChar"]) ? i = e.length ?? ct.INT16_UNSIGNED_MAX : gt(e, ["MySqlText", "SingleStoreText"]) && (e.textType === "longtext" ? i = ct.INT32_UNSIGNED_MAX : e.textType === "mediumtext" ? i = ct.INT24_UNSIGNED_MAX : e.textType === "text" ? i = ct.INT16_UNSIGNED_MAX : i = ct.INT8_UNSIGNED_MAX),
    gt(e, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (i = e.length,
    l = !0),
    gt(e, ["PgBinaryVector"]) && (a = /^[01]+$/,
    i = e.dimensions);
    let u = r === !0 || r?.string ? t.coerce.string() : t.string();
    return u = a ? u.regex(a) : u,
    i && l ? u.length(i) : i ? u.max(i) : u
}
function H0(e) {
    return k0(e) ? AP(e) : OP(e)
}
function W0(e, t, r, i) {
    const a = {};
    for (const [l,u] of Object.entries(e)) {
        if (!It(u, To) && !It(u, pt) && !It(u, pt.Aliased) && typeof u == "object") {
            const w = k0(u) || RP(u) ? H0(u) : u;
            a[l] = W0(w, t[l] ?? {}, r, i);
            continue
        }
        const p = t[l];
        if (p !== void 0 && typeof p != "function") {
            a[l] = p;
            continue
        }
        const m = It(u, To) ? u : void 0
          , g = m ? q0(m, i) : wt.any()
          , v = typeof p == "function" ? p(g) : g;
        r.never(m) || (a[l] = v,
        m && (r.nullable(m) && (a[l] = a[l].nullable()),
        r.optional(m) && (a[l] = a[l].optional())))
    }
    return wt.object(a)
}
const X2 = {
    never: e => e?.generated?.type === "always" || e?.generatedIdentity?.type === "always",
    optional: e => !e.notNull || e.notNull && e.hasDefault,
    nullable: e => !e.notNull
}
  , Q0 = (e, t) => {
    const r = H0(e);
    return W0(r, {}, X2)
}
  , Y2 = O0("users", {
    id: Ff("id").primaryKey().default(gi`gen_random_uuid()`),
    username: ar("username").notNull().unique(),
    password: ar("password").notNull()
});
Q0(Y2).pick({
    username: !0,
    password: !0
});
const J2 = O0("quote_requests", {
    id: Ff("id").primaryKey().default(gi`gen_random_uuid()`),
    fullName: ar("full_name").notNull(),
    email: ar("email").notNull(),
    phone: ar("phone").notNull(),
    vehicleType: ar("vehicle_type").notNull(),
    licensePlate: ar("license_plate").notNull(),
    city: ar("city").notNull(),
    createdAt: A0("created_at").defaultNow()
})
  , eR = Q0(J2).omit({
    id: !0,
    createdAt: !0
})
  , tR = eR.extend({
    fullName: wt.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    email: wt.string().email("Ingresa un correo electrónico válido"),
    phone: wt.string().min(10, "Ingresa un número de teléfono válido"),
    vehicleType: wt.string().min(1, "Selecciona un tipo de vehículo"),
    licensePlate: wt.string().min(5, "Ingresa una placa válida").max(7, "La placa no puede tener más de 7 caracteres"),
    city: wt.string().min(1, "Selecciona una ciudad")
})
  , nR = [{
    value: "moto",
    label: "Motocicleta"
}, {
    value: "carro",
    label: "Automóvil Particular"
}, {
    value: "taxi",
    label: "Taxi"
}, {
    value: "camioneta",
    label: "Camioneta"
}, {
    value: "camion",
    label: "Camión"
}, {
    value: "bus",
    label: "Bus / Buseta"
}]
  , rR = [{
    value: "bogota",
    label: "Bogotá"
}, {
    value: "medellin",
    label: "Medellín"
}, {
    value: "cali",
    label: "Cali"
}, {
    value: "barranquilla",
    label: "Barranquilla"
}, {
    value: "cartagena",
    label: "Cartagena"
}, {
    value: "bucaramanga",
    label: "Bucaramanga"
}, {
    value: "pereira",
    label: "Pereira"
}, {
    value: "manizales",
    label: "Manizales"
}, {
    value: "cucuta",
    label: "Cúcuta"
}, {
    value: "ibague",
    label: "Ibagué"
}, {
    value: "otra",
    label: "Otra Ciudad"
}];
function sR() {
    const {toast: e} = pf()
      , t = zk({
        resolver: $k(tR),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            vehicleType: "",
            licensePlate: "",
            city: ""
        }
    })
      , r = jv({
        mutationFn: async a => (await Av("POST", "/api/quotes", a)).json(),
        onSuccess: () => {
            e({
                title: "Solicitud enviada",
                description: "Nos comunicaremos contigo muy pronto con tu cotización."
            }),
            t.reset()
        }
        ,
        onError: () => {
            e({
                title: "Error",
                description: "Hubo un problema al enviar tu solicitud. Intenta nuevamente.",
                variant: "destructive"
            })
        }
    })
      , i = a => {
        r.mutate(a)
    }
    ;
    return f.jsx("section", {
        id: "cotizar",
        className: "py-16 md:py-24",
        children: f.jsx("div", {
            className: "container mx-auto px-4",
            children: f.jsx("div", {
                className: "max-w-2xl mx-auto",
                children: f.jsxs(Br, {
                    className: "shadow-xl border-2",
                    children: [f.jsxs(Po, {
                        className: "text-center pb-6",
                        children: [f.jsx("div", {
                            className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-primary mb-4",
                            children: f.jsx(Ss, {
                                className: "h-8 w-8 text-white"
                            })
                        }), f.jsx(sx, {
                            className: "text-2xl sm:text-3xl",
                            "data-testid": "text-form-title",
                            children: "Cotiza tu SOAT Gratis"
                        }), f.jsx(ix, {
                            className: "text-base",
                            "data-testid": "text-form-description",
                            children: "Completa el formulario y recibe tu cotización personalizada en segundos"
                        })]
                    }), f.jsx(Ur, {
                        children: r.isSuccess ? f.jsxs("div", {
                            className: "flex flex-col items-center gap-4 py-8",
                            children: [f.jsx("div", {
                                className: "flex h-20 w-20 items-center justify-center rounded-full bg-primary/10",
                                children: f.jsx(uy, {
                                    className: "h-12 w-12 text-primary"
                                })
                            }), f.jsx("h3", {
                                className: "text-xl font-semibold text-center",
                                children: "Solicitud Enviada Exitosamente"
                            }), f.jsx("p", {
                                className: "text-muted-foreground text-center max-w-md",
                                children: "Hemos recibido tu información. Un asesor se comunicará contigo muy pronto para brindarte la mejor cotización."
                            }), f.jsx(ln, {
                                variant: "outline",
                                onClick: () => r.reset(),
                                "data-testid": "button-new-quote",
                                children: "Realizar otra cotización"
                            })]
                        }) : f.jsx(gP, {
                            ...t,
                            children: f.jsxs("form", {
                                onSubmit: t.handleSubmit(i),
                                className: "space-y-6",
                                children: [f.jsxs("div", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: [f.jsx(ri, {
                                        control: t.control,
                                        name: "fullName",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            className: "sm:col-span-2",
                                            children: [f.jsx(cs, {
                                                children: "Nombre Completo"
                                            }), f.jsx(us, {
                                                children: f.jsx(ii, {
                                                    placeholder: "Juan Pérez García",
                                                    ...a,
                                                    "data-testid": "input-fullname"
                                                })
                                            }), f.jsx(ds, {})]
                                        })
                                    }), f.jsx(ri, {
                                        control: t.control,
                                        name: "email",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            children: [f.jsx(cs, {
                                                children: "Correo Electrónico"
                                            }), f.jsx(us, {
                                                children: f.jsx(ii, {
                                                    type: "email",
                                                    placeholder: "tu@correo.com",
                                                    ...a,
                                                    "data-testid": "input-email"
                                                })
                                            }), f.jsx(ds, {})]
                                        })
                                    }), f.jsx(ri, {
                                        control: t.control,
                                        name: "phone",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            children: [f.jsx(cs, {
                                                children: "Teléfono"
                                            }), f.jsx(us, {
                                                children: f.jsx(ii, {
                                                    type: "tel",
                                                    placeholder: "3001234567",
                                                    ...a,
                                                    "data-testid": "input-phone"
                                                })
                                            }), f.jsx(ds, {})]
                                        })
                                    }), f.jsx(ri, {
                                        control: t.control,
                                        name: "vehicleType",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            children: [f.jsx(cs, {
                                                children: "Tipo de Vehículo"
                                            }), f.jsxs(qg, {
                                                onValueChange: a.onChange,
                                                value: a.value,
                                                children: [f.jsx(us, {
                                                    children: f.jsx(Zd, {
                                                        "data-testid": "select-vehicle-type",
                                                        children: f.jsx(Hg, {
                                                            placeholder: "Selecciona tipo"
                                                        })
                                                    })
                                                }), f.jsx(Kd, {
                                                    children: nR.map(l => f.jsx(Gd, {
                                                        value: l.value,
                                                        "data-testid": `option-vehicle-${l.value}`,
                                                        children: l.label
                                                    }, l.value))
                                                })]
                                            }), f.jsx(ds, {})]
                                        })
                                    }), f.jsx(ri, {
                                        control: t.control,
                                        name: "licensePlate",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            children: [f.jsx(cs, {
                                                children: "Placa del Vehículo"
                                            }), f.jsx(us, {
                                                children: f.jsx(ii, {
                                                    placeholder: "ABC123",
                                                    ...a,
                                                    onChange: l => a.onChange(l.target.value.toUpperCase()),
                                                    "data-testid": "input-license-plate"
                                                })
                                            }), f.jsx(ds, {})]
                                        })
                                    }), f.jsx(ri, {
                                        control: t.control,
                                        name: "city",
                                        render: ({field: a}) => f.jsxs(ls, {
                                            className: "sm:col-span-2",
                                            children: [f.jsx(cs, {
                                                children: "Ciudad"
                                            }), f.jsxs(qg, {
                                                onValueChange: a.onChange,
                                                value: a.value,
                                                children: [f.jsx(us, {
                                                    children: f.jsx(Zd, {
                                                        "data-testid": "select-city",
                                                        children: f.jsx(Hg, {
                                                            placeholder: "Selecciona tu ciudad"
                                                        })
                                                    })
                                                }), f.jsx(Kd, {
                                                    children: rR.map(l => f.jsx(Gd, {
                                                        value: l.value,
                                                        "data-testid": `option-city-${l.value}`,
                                                        children: l.label
                                                    }, l.value))
                                                })]
                                            }), f.jsx(ds, {})]
                                        })
                                    })]
                                }), f.jsx(ln, {
                                    type: "submit",
                                    className: "w-full gradient-primary text-white border-0",
                                    size: "lg",
                                    disabled: r.isPending,
                                    "data-testid": "button-submit-quote",
                                    children: r.isPending ? f.jsxs(f.Fragment, {
                                        children: [f.jsx(UC, {
                                            className: "mr-2 h-5 w-5 animate-spin"
                                        }), "Enviando..."]
                                    }) : "Obtener Cotización Gratis"
                                }), f.jsx("p", {
                                    className: "text-xs text-center text-muted-foreground",
                                    children: "Al enviar este formulario, aceptas que nos comuniquemos contigo para brindarte información sobre tu SOAT."
                                })]
                            })
                        })
                    })]
                })
            })
        })
    })
}
var Vf = "Avatar"
  , [iR] = fr(Vf)
  , [oR,Z0] = iR(Vf)
  , K0 = y.forwardRef( (e, t) => {
    const {__scopeAvatar: r, ...i} = e
      , [a,l] = y.useState("idle");
    return f.jsx(oR, {
        scope: r,
        imageLoadingStatus: a,
        onImageLoadingStatusChange: l,
        children: f.jsx(Ue.span, {
            ...i,
            ref: t
        })
    })
}
);
K0.displayName = Vf;
var G0 = "AvatarImage"
  , X0 = y.forwardRef( (e, t) => {
    const {__scopeAvatar: r, src: i, onLoadingStatusChange: a= () => {}
    , ...l} = e
      , u = Z0(G0, r)
      , p = aR(i, l)
      , m = Yt(g => {
        a(g),
        u.onImageLoadingStatusChange(g)
    }
    );
    return bt( () => {
        p !== "idle" && m(p)
    }
    , [p, m]),
    p === "loaded" ? f.jsx(Ue.img, {
        ...l,
        ref: t,
        src: i
    }) : null
}
);
X0.displayName = G0;
var Y0 = "AvatarFallback"
  , J0 = y.forwardRef( (e, t) => {
    const {__scopeAvatar: r, delayMs: i, ...a} = e
      , l = Z0(Y0, r)
      , [u,p] = y.useState(i === void 0);
    return y.useEffect( () => {
        if (i !== void 0) {
            const m = window.setTimeout( () => p(!0), i);
            return () => window.clearTimeout(m)
        }
    }
    , [i]),
    u && l.imageLoadingStatus !== "loaded" ? f.jsx(Ue.span, {
        ...a,
        ref: t
    }) : null
}
);
J0.displayName = Y0;
function rv(e, t) {
    return e ? t ? (e.src !== t && (e.src = t),
    e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}
function aR(e, {referrerPolicy: t, crossOrigin: r}) {
    const i = cR()
      , a = y.useRef(null)
      , l = i ? (a.current || (a.current = new window.Image),
    a.current) : null
      , [u,p] = y.useState( () => rv(l, e));
    return bt( () => {
        p(rv(l, e))
    }
    , [l, e]),
    bt( () => {
        const m = w => () => {
            p(w)
        }
        ;
        if (!l)
            return;
        const g = m("loaded")
          , v = m("error");
        return l.addEventListener("load", g),
        l.addEventListener("error", v),
        t && (l.referrerPolicy = t),
        typeof r == "string" && (l.crossOrigin = r),
        () => {
            l.removeEventListener("load", g),
            l.removeEventListener("error", v)
        }
    }
    , [l, r, t]),
    u
}
function lR() {
    return () => {}
}
function cR() {
    return y.useSyncExternalStore(lR, () => !0, () => !1)
}
var ew = K0
  , tw = X0
  , nw = J0;
const rw = y.forwardRef( ({className: e, ...t}, r) => f.jsx(ew, {
    ref: r,
    className: $e(`
      after:content-[''] after:block after:absolute after:inset-0 after:rounded-full after:pointer-events-none after:border after:border-black/10 dark:after:border-white/10
      relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full`, e),
    ...t
}));
rw.displayName = ew.displayName;
const uR = y.forwardRef( ({className: e, ...t}, r) => f.jsx(tw, {
    ref: r,
    className: $e("aspect-square h-full w-full", e),
    ...t
}));
uR.displayName = tw.displayName;
const sw = y.forwardRef( ({className: e, ...t}, r) => f.jsx(nw, {
    ref: r,
    className: $e("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
sw.displayName = nw.displayName;
const dR = [{
    name: "María González",
    location: "Bogotá",
    initials: "MG",
    rating: 5,
    comment: "Excelente servicio. Mi SOAT llegó en menos de 3 minutos a mi correo. Todo muy fácil y rápido."
}, {
    name: "Carlos Rodríguez",
    location: "Medellín",
    initials: "CR",
    rating: 5,
    comment: "Muy profesionales. El precio fue competitivo y el proceso de compra súper sencillo. Lo recomiendo."
}, {
    name: "Ana María López",
    location: "Cali",
    initials: "AL",
    rating: 5,
    comment: "Primera vez que compro SOAT online y quedé muy satisfecha. Atención al cliente excelente."
}, {
    name: "Pedro Martínez",
    location: "Barranquilla",
    initials: "PM",
    rating: 5,
    comment: "Llevaba años comprando el SOAT de forma presencial. Ahora todo es más fácil desde mi celular."
}];
function fR() {
    return f.jsx("section", {
        className: "py-16 md:py-24 bg-white dark:bg-background",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [f.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                    "data-testid": "text-testimonials-title",
                    children: "Lo que dicen nuestros clientes"
                }), f.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    "data-testid": "text-testimonials-description",
                    children: "Miles de colombianos ya confían en nosotros para proteger sus vehículos"
                })]
            }), f.jsx("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                children: dR.map( (e, t) => f.jsx(Br, {
                    className: "overflow-visible hover-elevate",
                    "data-testid": `card-testimonial-${t}`,
                    children: f.jsx(Ur, {
                        className: "p-6",
                        children: f.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [f.jsx(WC, {
                                className: "h-8 w-8 text-primary/30"
                            }), f.jsxs("p", {
                                className: "text-sm text-muted-foreground flex-1",
                                children: ['"', e.comment, '"']
                            }), f.jsx("div", {
                                className: "flex items-center gap-1 pt-2",
                                children: Array.from({
                                    length: e.rating
                                }).map( (r, i) => f.jsx(Md, {
                                    className: "h-4 w-4 fill-yellow-400 text-yellow-400"
                                }, i))
                            }), f.jsxs("div", {
                                className: "flex items-center gap-3 pt-2 border-t",
                                children: [f.jsx(rw, {
                                    className: "h-10 w-10",
                                    children: f.jsx(sw, {
                                        className: "gradient-primary text-white text-sm",
                                        children: e.initials
                                    })
                                }), f.jsxs("div", {
                                    children: [f.jsx("p", {
                                        className: "font-medium text-sm",
                                        children: e.name
                                    }), f.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: e.location
                                    })]
                                })]
                            })]
                        })
                    })
                }, t))
            })]
        })
    })
}
var Bf = "Collapsible"
  , [pR,iw] = fr(Bf)
  , [hR,Uf] = pR(Bf)
  , ow = y.forwardRef( (e, t) => {
    const {__scopeCollapsible: r, open: i, defaultOpen: a, disabled: l, onOpenChange: u, ...p} = e
      , [m=!1,g] = gs({
        prop: i,
        defaultProp: a,
        onChange: u
    });
    return f.jsx(hR, {
        scope: r,
        disabled: l,
        contentId: qo(),
        open: m,
        onOpenToggle: y.useCallback( () => g(v => !v), [g]),
        children: f.jsx(Ue.div, {
            "data-state": qf(m),
            "data-disabled": l ? "" : void 0,
            ...p,
            ref: t
        })
    })
}
);
ow.displayName = Bf;
var aw = "CollapsibleTrigger"
  , lw = y.forwardRef( (e, t) => {
    const {__scopeCollapsible: r, ...i} = e
      , a = Uf(aw, r);
    return f.jsx(Ue.button, {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": qf(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...i,
        ref: t,
        onClick: Ve(e.onClick, a.onOpenToggle)
    })
}
);
lw.displayName = aw;
var $f = "CollapsibleContent"
  , cw = y.forwardRef( (e, t) => {
    const {forceMount: r, ...i} = e
      , a = Uf($f, e.__scopeCollapsible);
    return f.jsx(ql, {
        present: r || a.open,
        children: ({present: l}) => f.jsx(mR, {
            ...i,
            ref: t,
            present: l
        })
    })
}
);
cw.displayName = $f;
var mR = y.forwardRef( (e, t) => {
    const {__scopeCollapsible: r, present: i, children: a, ...l} = e
      , u = Uf($f, r)
      , [p,m] = y.useState(i)
      , g = y.useRef(null)
      , v = it(t, g)
      , w = y.useRef(0)
      , S = w.current
      , k = y.useRef(0)
      , j = k.current
      , b = u.open || p
      , C = y.useRef(b)
      , T = y.useRef(void 0);
    return y.useEffect( () => {
        const N = requestAnimationFrame( () => C.current = !1);
        return () => cancelAnimationFrame(N)
    }
    , []),
    bt( () => {
        const N = g.current;
        if (N) {
            T.current = T.current || {
                transitionDuration: N.style.transitionDuration,
                animationName: N.style.animationName
            },
            N.style.transitionDuration = "0s",
            N.style.animationName = "none";
            const O = N.getBoundingClientRect();
            w.current = O.height,
            k.current = O.width,
            C.current || (N.style.transitionDuration = T.current.transitionDuration,
            N.style.animationName = T.current.animationName),
            m(i)
        }
    }
    , [u.open, i]),
    f.jsx(Ue.div, {
        "data-state": qf(u.open),
        "data-disabled": u.disabled ? "" : void 0,
        id: u.contentId,
        hidden: !b,
        ...l,
        ref: v,
        style: {
            "--radix-collapsible-content-height": S ? `${S}px` : void 0,
            "--radix-collapsible-content-width": j ? `${j}px` : void 0,
            ...e.style
        },
        children: b && a
    })
}
);
function qf(e) {
    return e ? "open" : "closed"
}
var gR = ow
  , vR = lw
  , yR = cw
  , pr = "Accordion"
  , xR = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Hf,wR,bR] = hf(pr)
  , [uc] = fr(pr, [bR, iw])
  , Wf = iw()
  , uw = _e.forwardRef( (e, t) => {
    const {type: r, ...i} = e
      , a = i
      , l = i;
    return f.jsx(Hf.Provider, {
        scope: e.__scopeAccordion,
        children: r === "multiple" ? f.jsx(NR, {
            ...l,
            ref: t
        }) : f.jsx(_R, {
            ...a,
            ref: t
        })
    })
}
);
uw.displayName = pr;
var [dw,SR] = uc(pr)
  , [fw,CR] = uc(pr, {
    collapsible: !1
})
  , _R = _e.forwardRef( (e, t) => {
    const {value: r, defaultValue: i, onValueChange: a= () => {}
    , collapsible: l=!1, ...u} = e
      , [p,m] = gs({
        prop: r,
        defaultProp: i,
        onChange: a
    });
    return f.jsx(dw, {
        scope: e.__scopeAccordion,
        value: p ? [p] : [],
        onItemOpen: m,
        onItemClose: _e.useCallback( () => l && m(""), [l, m]),
        children: f.jsx(fw, {
            scope: e.__scopeAccordion,
            collapsible: l,
            children: f.jsx(pw, {
                ...u,
                ref: t
            })
        })
    })
}
)
  , NR = _e.forwardRef( (e, t) => {
    const {value: r, defaultValue: i, onValueChange: a= () => {}
    , ...l} = e
      , [u=[],p] = gs({
        prop: r,
        defaultProp: i,
        onChange: a
    })
      , m = _e.useCallback(v => p( (w=[]) => [...w, v]), [p])
      , g = _e.useCallback(v => p( (w=[]) => w.filter(S => S !== v)), [p]);
    return f.jsx(dw, {
        scope: e.__scopeAccordion,
        value: u,
        onItemOpen: m,
        onItemClose: g,
        children: f.jsx(fw, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: f.jsx(pw, {
                ...l,
                ref: t
            })
        })
    })
}
)
  , [kR,dc] = uc(pr)
  , pw = _e.forwardRef( (e, t) => {
    const {__scopeAccordion: r, disabled: i, dir: a, orientation: l="vertical", ...u} = e
      , p = _e.useRef(null)
      , m = it(p, t)
      , g = wR(r)
      , w = Sx(a) === "ltr"
      , S = Ve(e.onKeyDown, k => {
        if (!xR.includes(k.key))
            return;
        const j = k.target
          , b = g().filter(le => !le.ref.current?.disabled)
          , C = b.findIndex(le => le.ref.current === j)
          , T = b.length;
        if (C === -1)
            return;
        k.preventDefault();
        let N = C;
        const O = 0
          , L = T - 1
          , V = () => {
            N = C + 1,
            N > L && (N = O)
        }
          , Z = () => {
            N = C - 1,
            N < O && (N = L)
        }
        ;
        switch (k.key) {
        case "Home":
            N = O;
            break;
        case "End":
            N = L;
            break;
        case "ArrowRight":
            l === "horizontal" && (w ? V() : Z());
            break;
        case "ArrowDown":
            l === "vertical" && V();
            break;
        case "ArrowLeft":
            l === "horizontal" && (w ? Z() : V());
            break;
        case "ArrowUp":
            l === "vertical" && Z();
            break
        }
        const U = N % T;
        b[U].ref.current?.focus()
    }
    );
    return f.jsx(kR, {
        scope: r,
        disabled: i,
        direction: a,
        orientation: l,
        children: f.jsx(Hf.Slot, {
            scope: r,
            children: f.jsx(Ue.div, {
                ...u,
                "data-orientation": l,
                ref: m,
                onKeyDown: i ? void 0 : S
            })
        })
    })
}
)
  , Vl = "AccordionItem"
  , [ER,Qf] = uc(Vl)
  , hw = _e.forwardRef( (e, t) => {
    const {__scopeAccordion: r, value: i, ...a} = e
      , l = dc(Vl, r)
      , u = SR(Vl, r)
      , p = Wf(r)
      , m = qo()
      , g = i && u.value.includes(i) || !1
      , v = l.disabled || e.disabled;
    return f.jsx(ER, {
        scope: r,
        open: g,
        disabled: v,
        triggerId: m,
        children: f.jsx(gR, {
            "data-orientation": l.orientation,
            "data-state": ww(g),
            ...p,
            ...a,
            ref: t,
            disabled: v,
            open: g,
            onOpenChange: w => {
                w ? u.onItemOpen(i) : u.onItemClose(i)
            }
        })
    })
}
);
hw.displayName = Vl;
var mw = "AccordionHeader"
  , gw = _e.forwardRef( (e, t) => {
    const {__scopeAccordion: r, ...i} = e
      , a = dc(pr, r)
      , l = Qf(mw, r);
    return f.jsx(Ue.h3, {
        "data-orientation": a.orientation,
        "data-state": ww(l.open),
        "data-disabled": l.disabled ? "" : void 0,
        ...i,
        ref: t
    })
}
);
gw.displayName = mw;
var sf = "AccordionTrigger"
  , vw = _e.forwardRef( (e, t) => {
    const {__scopeAccordion: r, ...i} = e
      , a = dc(pr, r)
      , l = Qf(sf, r)
      , u = CR(sf, r)
      , p = Wf(r);
    return f.jsx(Hf.ItemSlot, {
        scope: r,
        children: f.jsx(vR, {
            "aria-disabled": l.open && !u.collapsible || void 0,
            "data-orientation": a.orientation,
            id: l.triggerId,
            ...p,
            ...i,
            ref: t
        })
    })
}
);
vw.displayName = sf;
var yw = "AccordionContent"
  , xw = _e.forwardRef( (e, t) => {
    const {__scopeAccordion: r, ...i} = e
      , a = dc(pr, r)
      , l = Qf(yw, r)
      , u = Wf(r);
    return f.jsx(yR, {
        role: "region",
        "aria-labelledby": l.triggerId,
        "data-orientation": a.orientation,
        ...u,
        ...i,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
xw.displayName = yw;
function ww(e) {
    return e ? "open" : "closed"
}
var PR = uw
  , TR = hw
  , jR = gw
  , bw = vw
  , Sw = xw;
const RR = PR
  , Cw = y.forwardRef( ({className: e, ...t}, r) => f.jsx(TR, {
    ref: r,
    className: $e("border-b", e),
    ...t
}));
Cw.displayName = "AccordionItem";
const _w = y.forwardRef( ({className: e, children: t, ...r}, i) => f.jsx(jR, {
    className: "flex",
    children: f.jsxs(bw, {
        ref: i,
        className: $e("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...r,
        children: [t, f.jsx(wf, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
_w.displayName = bw.displayName;
const Nw = y.forwardRef( ({className: e, children: t, ...r}, i) => f.jsx(Sw, {
    ref: i,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: f.jsx("div", {
        className: $e("pb-4 pt-0", e),
        children: t
    })
}));
Nw.displayName = Sw.displayName;
const AR = [{
    question: "¿Qué es el SOAT y por qué es obligatorio?",
    answer: "El SOAT (Seguro Obligatorio de Accidentes de Tránsito) es un seguro que cubre los gastos médicos de las víctimas de accidentes de tránsito en Colombia. Es obligatorio por ley y todos los vehículos deben tenerlo vigente para circular legalmente."
}, {
    question: "¿Cuánto tiempo tarda en llegar mi SOAT?",
    answer: "Una vez realizado el pago, recibirás tu póliza digital en tu correo electrónico en menos de 5 minutos. El documento digital tiene la misma validez legal que el físico."
}, {
    question: "¿Qué cobertura ofrece el SOAT?",
    answer: "El SOAT cubre gastos médicos por accidente (hasta 800 SMLV), transporte de víctimas, indemnización por incapacidad permanente y muerte. Aplica para conductor, pasajeros y peatones afectados."
}, {
    question: "¿Qué pasa si circulo sin SOAT?",
    answer: "Circular sin SOAT vigente es una infracción grave. Puede resultar en multas de hasta 30 salarios mínimos legales vigentes, inmovilización del vehículo y problemas legales en caso de accidente."
}, {
    question: "¿Cómo puedo verificar si mi SOAT está vigente?",
    answer: "Puedes verificar la vigencia de tu SOAT en el RUNT (Registro Único Nacional de Tránsito) ingresando tu número de placa. También puedes revisar la fecha de vencimiento en tu póliza digital."
}, {
    question: "¿El SOAT cubre daños a mi vehículo?",
    answer: "No, el SOAT solo cubre daños personales (lesiones y muerte). Para la cobertura de daños materiales al vehículo, necesitas contratar un seguro todo riesgo adicional."
}, {
    question: "¿Puedo renovar mi SOAT antes de que venza?",
    answer: "Sí, puedes renovar tu SOAT hasta 30 días antes del vencimiento. La nueva póliza iniciará su vigencia el día siguiente al vencimiento de la anterior."
}, {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas débito, PSE (transferencia bancaria) y pagos en efectivo a través de corresponsales bancarios."
}];
function OR() {
    return f.jsx("section", {
        id: "faq",
        className: "py-16 md:py-24",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [f.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                    "data-testid": "text-faq-title",
                    children: "Preguntas Frecuentes"
                }), f.jsx("p", {
                    className: "text-lg text-muted-foreground",
                    "data-testid": "text-faq-description",
                    children: "Resuelve tus dudas sobre el SOAT y nuestro servicio"
                })]
            }), f.jsx("div", {
                className: "max-w-3xl mx-auto",
                children: f.jsx(RR, {
                    type: "single",
                    collapsible: !0,
                    className: "w-full space-y-4",
                    children: AR.map( (e, t) => f.jsxs(Cw, {
                        value: `item-${t}`,
                        className: "border rounded-lg px-4 data-[state=open]:bg-accent/30",
                        "data-testid": `faq-item-${t}`,
                        children: [f.jsx(_w, {
                            className: "text-left hover:no-underline py-4",
                            children: f.jsx("span", {
                                className: "font-medium",
                                children: e.question
                            })
                        }), f.jsx(Nw, {
                            className: "text-muted-foreground pb-4",
                            children: e.answer
                        })]
                    }, t))
                })
            })]
        })
    })
}
function IR() {
    const e = new Date().getFullYear()
      , t = r => {
        const i = document.getElementById(r);
        i && i.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return f.jsx("footer", {
        className: "bg-card border-t",
        children: f.jsxs("div", {
            className: "container mx-auto px-4 py-12",
            children: [f.jsxs("div", {
                className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                children: [f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [f.jsx("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-lg gradient-primary",
                            children: f.jsx(Ss, {
                                className: "h-6 w-6 text-white"
                            })
                        }), f.jsx("span", {
                            className: "text-xl font-bold text-gradient",
                            "data-testid": "text-footer-brand",
                            children: "SoatOnlinePro"
                        })]
                    }), f.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Tu aliado de confianza para la protección vial en Colombia. Compra tu SOAT rápido, seguro y al mejor precio."
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "font-semibold mb-4",
                        children: "Enlaces Rápidos"
                    }), f.jsxs("ul", {
                        className: "space-y-2",
                        children: [f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => t("beneficios"),
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-beneficios",
                                children: "Beneficios"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => t("como-funciona"),
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-como-funciona",
                                children: "Cómo Funciona"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => t("precios"),
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-precios",
                                children: "Precios"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => t("faq"),
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-faq",
                                children: "Preguntas Frecuentes"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "font-semibold mb-4",
                        children: "Información Legal"
                    }), f.jsxs("ul", {
                        className: "space-y-2",
                        children: [f.jsx("li", {
                            children: f.jsx(wo, {
                                href: "/terminos",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-terms",
                                children: "Términos y Condiciones"
                            })
                        }), f.jsx("li", {
                            children: f.jsx(wo, {
                                href: "/privacidad",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-privacy",
                                children: "Política de Privacidad"
                            })
                        }), f.jsx("li", {
                            children: f.jsx(wo, {
                                href: "/privacidad#cookies",
                                className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                                "data-testid": "link-footer-cookies",
                                children: "Política de Cookies"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "font-semibold mb-4",
                        children: "Contacto"
                    }), f.jsxs("ul", {
                        className: "space-y-3",
                        children: [f.jsxs("li", {
                            className: "flex items-center gap-2",
                            children: [f.jsx(bl, {
                                className: "h-4 w-4 text-primary"
                            }), f.jsx("span", {
                                className: "text-sm text-muted-foreground",
                                "data-testid": "text-footer-phone",
                                children: "(601) 555-0123"
                            })]
                        }), f.jsxs("li", {
                            className: "flex items-center gap-2",
                            children: [f.jsx(py, {
                                className: "h-4 w-4 text-primary"
                            }), f.jsx("span", {
                                className: "text-sm text-muted-foreground",
                                "data-testid": "text-footer-email",
                                children: "contacto@soatonlinepro.co"
                            })]
                        }), f.jsxs("li", {
                            className: "flex items-start gap-2",
                            children: [f.jsx($C, {
                                className: "h-4 w-4 text-primary mt-0.5"
                            }), f.jsx("span", {
                                className: "text-sm text-muted-foreground",
                                "data-testid": "text-footer-address",
                                children: "Colombia - Atención Nacional"
                            })]
                        })]
                    })]
                })]
            }), f.jsx("div", {
                className: "border-t mt-8 pt-8",
                children: f.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [f.jsxs("p", {
                        className: "text-sm text-muted-foreground text-center md:text-left",
                        "data-testid": "text-footer-copyright",
                        children: [e, " SoatOnlinePro. Todos los derechos reservados."]
                    }), f.jsx("p", {
                        className: "text-xs text-muted-foreground text-center md:text-right",
                        children: "Este sitio no está afiliado a ninguna compañía de seguros específica. Somos intermediarios autorizados."
                    })]
                })
            })]
        })
    })
}
function MR() {
    const [e,t] = y.useState(!0)
      , {data: r} = ec()
      , i = () => {
        r?.cookieRedirectEnabled && r?.redirectUrl ? window.open(r.redirectUrl, "_blank", "noopener,noreferrer") : t(!1)
    }
    ;
    return e ? f.jsxs("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center",
        "data-testid": "cookie-overlay",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-black/70 backdrop-blur-md",
            "data-testid": "cookie-backdrop"
        }), f.jsxs("div", {
            className: "relative w-full max-w-2xl mx-4 bg-white dark:bg-card rounded-2xl shadow-2xl border p-6 animate-in zoom-in-95 duration-500",
            "data-testid": "cookie-banner",
            children: [f.jsxs("div", {
                className: "flex items-start gap-4",
                children: [f.jsx("div", {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30",
                    children: f.jsx(dy, {
                        className: "h-5 w-5 text-blue-600"
                    })
                }), f.jsxs("div", {
                    className: "flex-1",
                    children: [f.jsx("h3", {
                        className: "font-semibold text-base mb-1",
                        "data-testid": "text-cookie-title",
                        children: "Utilizamos cookies"
                    }), f.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        "data-testid": "text-cookie-description",
                        children: "Este sitio web utiliza cookies para mejorar tu experiencia de navegación, personalizar contenido y analizar nuestro tráfico. Al continuar navegando, aceptas el uso de cookies."
                    })]
                })]
            }), f.jsxs("div", {
                className: "flex justify-end gap-3 mt-4",
                children: [f.jsx(ln, {
                    variant: "outline",
                    size: "sm",
                    onClick: i,
                    "data-testid": "button-cookie-reject",
                    children: "Rechazar"
                }), f.jsx(ln, {
                    size: "sm",
                    className: "gradient-primary text-white border-0",
                    onClick: i,
                    "data-testid": "button-cookie-accept",
                    children: "Aceptar cookies"
                })]
            })]
        })]
    }) : null
}
function DR() {
    return f.jsxs("div", {
        className: "flex min-h-screen flex-col",
        children: [f.jsx(uk, {}), f.jsxs("main", {
            className: "flex-1",
            children: [f.jsx(fk, {}), f.jsx(hk, {}), f.jsx(gk, {}), f.jsx(yk, {}), f.jsx(sR, {}), f.jsx(fR, {}), f.jsx(OR, {})]
        }), f.jsx(IR, {}), f.jsx(MR, {})]
    })
}
var Zf = "Switch"
  , [LR] = fr(Zf)
  , [FR,zR] = LR(Zf)
  , kw = y.forwardRef( (e, t) => {
    const {__scopeSwitch: r, name: i, checked: a, defaultChecked: l, required: u, disabled: p, value: m="on", onCheckedChange: g, form: v, ...w} = e
      , [S,k] = y.useState(null)
      , j = it(t, O => k(O))
      , b = y.useRef(!1)
      , C = S ? v || !!S.closest("form") : !0
      , [T=!1,N] = gs({
        prop: a,
        defaultProp: l,
        onChange: g
    });
    return f.jsxs(FR, {
        scope: r,
        checked: T,
        disabled: p,
        children: [f.jsx(Ue.button, {
            type: "button",
            role: "switch",
            "aria-checked": T,
            "aria-required": u,
            "data-state": Tw(T),
            "data-disabled": p ? "" : void 0,
            disabled: p,
            value: m,
            ...w,
            ref: j,
            onClick: Ve(e.onClick, O => {
                N(L => !L),
                C && (b.current = O.isPropagationStopped(),
                b.current || O.stopPropagation())
            }
            )
        }), C && f.jsx(VR, {
            control: S,
            bubbles: !b.current,
            name: i,
            value: m,
            checked: T,
            required: u,
            disabled: p,
            form: v,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
kw.displayName = Zf;
var Ew = "SwitchThumb"
  , Pw = y.forwardRef( (e, t) => {
    const {__scopeSwitch: r, ...i} = e
      , a = zR(Ew, r);
    return f.jsx(Ue.span, {
        "data-state": Tw(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...i,
        ref: t
    })
}
);
Pw.displayName = Ew;
var VR = e => {
    const {control: t, checked: r, bubbles: i=!0, ...a} = e
      , l = y.useRef(null)
      , u = Nx(r)
      , p = Ly(t);
    return y.useEffect( () => {
        const m = l.current
          , g = window.HTMLInputElement.prototype
          , w = Object.getOwnPropertyDescriptor(g, "checked").set;
        if (u !== r && w) {
            const S = new Event("click",{
                bubbles: i
            });
            w.call(m, r),
            m.dispatchEvent(S)
        }
    }
    , [u, r, i]),
    f.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...a,
        tabIndex: -1,
        ref: l,
        style: {
            ...e.style,
            ...p,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
;
function Tw(e) {
    return e ? "checked" : "unchecked"
}
var jw = kw
  , BR = Pw;
const Rw = y.forwardRef( ({className: e, ...t}, r) => f.jsx(jw, {
    className: $e("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
    ...t,
    ref: r,
    children: f.jsx(BR, {
        className: $e("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    })
}));
Rw.displayName = jw.displayName;
function UR() {
    const {toast: e} = pf()
      , [t,r] = y.useState("")
      , {data: i, isLoading: a} = Tv({
        queryKey: ["/api/settings"]
    });
    y.useEffect( () => {
        i && r(i.redirectUrl)
    }
    , [i]);
    const l = jv({
        mutationFn: async u => (await Av("PATCH", "/api/settings", u)).json(),
        onSuccess: () => {
            Ov.invalidateQueries({
                queryKey: ["/api/settings"]
            }),
            e({
                title: "Configuración guardada",
                description: "Los cambios se han aplicado correctamente."
            })
        }
        ,
        onError: () => {
            e({
                title: "Error",
                description: "No se pudo guardar la configuración.",
                variant: "destructive"
            })
        }
    });
    return a ? f.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: f.jsx("p", {
            className: "text-muted-foreground",
            children: "Cargando configuración..."
        })
    }) : f.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [f.jsx("div", {
            className: "border-b bg-white",
            children: f.jsxs("div", {
                className: "container mx-auto px-4 py-4 flex items-center gap-3",
                children: [f.jsx("a", {
                    href: "/",
                    className: "text-muted-foreground hover:text-foreground",
                    "data-testid": "link-panel-back",
                    children: f.jsx(xf, {
                        className: "h-5 w-5"
                    })
                }), f.jsx(ZC, {
                    className: "h-6 w-6 text-blue-600"
                }), f.jsx("h1", {
                    className: "text-xl font-bold",
                    "data-testid": "text-panel-title",
                    children: "Panel de Configuración"
                })]
            })
        }), f.jsxs("div", {
            className: "container mx-auto px-4 py-8 max-w-2xl space-y-6",
            children: [f.jsxs(Br, {
                "data-testid": "card-cookie-settings",
                children: [f.jsx(Po, {
                    children: f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [f.jsx("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100",
                            children: f.jsx(dy, {
                                className: "h-5 w-5 text-blue-600"
                            })
                        }), f.jsxs("div", {
                            children: [f.jsx("h2", {
                                className: "text-lg font-semibold",
                                children: "Redirección de Cookies"
                            }), f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Controla si el banner de cookies redirige a una URL externa"
                            })]
                        })]
                    })
                }), f.jsxs(Ur, {
                    children: [f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [f.jsx(Rl, {
                            htmlFor: "cookie-toggle",
                            className: "text-sm font-medium",
                            children: i?.cookieRedirectEnabled ? "Activado" : "Desactivado"
                        }), f.jsx(Rw, {
                            id: "cookie-toggle",
                            checked: i?.cookieRedirectEnabled ?? !0,
                            onCheckedChange: u => l.mutate({
                                cookieRedirectEnabled: u
                            }),
                            "data-testid": "switch-cookie-redirect"
                        })]
                    }), f.jsx("p", {
                        className: "text-xs text-muted-foreground mt-2",
                        children: i?.cookieRedirectEnabled ? "Al aceptar o rechazar cookies, el usuario será redirigido a la URL configurada." : "El banner de cookies funcionará de forma normal sin redirección."
                    })]
                })]
            }), f.jsxs(Br, {
                "data-testid": "card-url-settings",
                children: [f.jsx(Po, {
                    children: f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [f.jsx("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100",
                            children: f.jsx(BC, {
                                className: "h-5 w-5 text-blue-600"
                            })
                        }), f.jsxs("div", {
                            children: [f.jsx("h2", {
                                className: "text-lg font-semibold",
                                children: "URL de Redirección"
                            }), f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: 'Esta URL se usa en los botones "Cotizar Ahora" y en el banner de cookies'
                            })]
                        })]
                    })
                }), f.jsxs(Ur, {
                    className: "space-y-4",
                    children: [f.jsxs("div", {
                        className: "space-y-2",
                        children: [f.jsx(Rl, {
                            htmlFor: "redirect-url",
                            className: "text-sm font-medium",
                            children: "URL destino"
                        }), f.jsx(ii, {
                            id: "redirect-url",
                            type: "url",
                            value: t,
                            onChange: u => r(u.target.value),
                            placeholder: "https://ejemplo.com",
                            "data-testid": "input-redirect-url"
                        })]
                    }), f.jsxs(ln, {
                        onClick: () => l.mutate({
                            redirectUrl: t
                        }),
                        disabled: l.isPending || t === i?.redirectUrl,
                        className: "gradient-primary text-white border-0",
                        "data-testid": "button-save-url",
                        children: [f.jsx(QC, {
                            className: "mr-2 h-4 w-4"
                        }), l.isPending ? "Guardando..." : "Guardar URL"]
                    }), f.jsxs("p", {
                        className: "text-xs text-muted-foreground",
                        children: ["URL actual: ", f.jsx("span", {
                            className: "font-mono text-foreground",
                            children: i?.redirectUrl
                        })]
                    })]
                })]
            })]
        })]
    })
}
function $R() {
    return f.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [f.jsx("header", {
            className: "border-b bg-white sticky top-0 z-10",
            children: f.jsx("div", {
                className: "container mx-auto px-4 py-4 flex items-center gap-3",
                children: f.jsxs(wo, {
                    href: "/",
                    className: "text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm",
                    "data-testid": "link-back-home",
                    children: [f.jsx(xf, {
                        className: "h-4 w-4"
                    }), "Volver al inicio"]
                })
            })
        }), f.jsxs("main", {
            className: "container mx-auto px-4 py-12 max-w-4xl",
            children: [f.jsxs("div", {
                className: "flex items-center gap-3 mb-8",
                children: [f.jsx("div", {
                    className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100",
                    children: f.jsx(Ss, {
                        className: "h-6 w-6 text-blue-600"
                    })
                }), f.jsxs("div", {
                    children: [f.jsx("h1", {
                        className: "text-3xl font-bold",
                        "data-testid": "text-terms-title",
                        children: "Términos y Condiciones"
                    }), f.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Última actualización: enero de 2025"
                    })]
                })]
            }), f.jsxs("div", {
                className: "prose prose-slate max-w-none space-y-8 text-slate-700",
                children: [f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "1. Aceptación de los Términos"
                    }), f.jsxs("p", {
                        className: "leading-relaxed",
                        children: ["Al acceder y utilizar el sitio web de ", f.jsx("strong", {
                            children: "SoatOnlinePro"
                        }), ' (en adelante "el Sitio"), usted acepta estar sujeto a estos Términos y Condiciones de uso. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro Sitio. SoatOnlinePro se reserva el derecho de modificar estos términos en cualquier momento, y dichos cambios entrarán en vigor inmediatamente después de su publicación en el Sitio.']
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "2. Descripción del Servicio"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "SoatOnlinePro es una plataforma intermediaria que facilita la adquisición del Seguro Obligatorio de Accidentes de Tránsito (SOAT) en Colombia. Nuestro servicio incluye:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsx("li", {
                            children: "Orientación informativa sobre el SOAT y sus coberturas."
                        }), f.jsx("li", {
                            children: "Facilitar el proceso de cotización y compra a través de aseguradoras autorizadas."
                        }), f.jsx("li", {
                            children: "Atención al cliente para resolver dudas relacionadas con el SOAT."
                        })]
                    }), f.jsx("p", {
                        className: "leading-relaxed mt-3",
                        children: "SoatOnlinePro no es una compañía de seguros. Actuamos como intermediarios y las pólizas son emitidas por entidades aseguradoras debidamente autorizadas por la Superintendencia Financiera de Colombia."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "3. Uso Permitido del Sitio"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "El usuario se compromete a utilizar el Sitio exclusivamente para fines lícitos y de conformidad con la normativa vigente en Colombia. Queda expresamente prohibido:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsx("li", {
                            children: "Proporcionar información falsa o fraudulenta en los formularios de cotización."
                        }), f.jsx("li", {
                            children: "Intentar acceder de forma no autorizada a los sistemas o bases de datos del Sitio."
                        }), f.jsx("li", {
                            children: "Reproducir, distribuir o comercializar el contenido del Sitio sin autorización previa."
                        }), f.jsx("li", {
                            children: "Utilizar el Sitio para actividades que infrinjan derechos de terceros."
                        }), f.jsx("li", {
                            children: "Realizar cualquier acción que pueda dañar, deshabilitar o sobrecargar los servidores del Sitio."
                        })]
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "4. Información y Precios"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Los precios de referencia publicados en este Sitio son aproximados y pueden variar según el tipo de vehículo, cilindraje, modelo, año y ciudad de registro. El valor definitivo del SOAT es calculado según la normativa vigente emitida por el Ministerio de Hacienda y Crédito Público de Colombia y puede ser actualizado periódicamente por las autoridades competentes."
                    }), f.jsx("p", {
                        className: "leading-relaxed mt-3",
                        children: "SoatOnlinePro no se responsabiliza por diferencias entre los precios indicativos publicados y el valor final cobrado por la aseguradora al momento de la transacción."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "5. Limitación de Responsabilidad"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "SoatOnlinePro no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso del Sitio. No garantizamos la disponibilidad ininterrumpida del Sitio ni la ausencia de errores técnicos. La información publicada tiene carácter meramente orientativo y no constituye asesoría jurídica ni financiera."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "6. Propiedad Intelectual"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Todos los contenidos del Sitio, incluyendo textos, imágenes, logotipos, diseños y código fuente, son propiedad de SoatOnlinePro o de sus respectivos titulares, y están protegidos por las leyes colombianas e internacionales de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización escrita previa."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "7. Legislación Aplicable"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa derivada del uso del Sitio será sometida a la jurisdicción de los tribunales competentes de la ciudad de Bogotá D.C., Colombia."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "8. Contacto"
                    }), f.jsxs("p", {
                        className: "leading-relaxed",
                        children: ["Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos a través del correo electrónico: ", f.jsx("a", {
                            href: "mailto:contacto@soatonlinepro.co",
                            className: "text-blue-600 hover:underline",
                            children: "contacto@soatonlinepro.co"
                        })]
                    })]
                })]
            })]
        }), f.jsx("footer", {
            className: "border-t mt-16 py-6 bg-gray-50",
            children: f.jsxs("div", {
                className: "container mx-auto px-4 text-center text-sm text-muted-foreground",
                children: ["© ", new Date().getFullYear(), " SoatOnlinePro. Todos los derechos reservados."]
            })
        })]
    })
}
function qR() {
    return f.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [f.jsx("header", {
            className: "border-b bg-white sticky top-0 z-10",
            children: f.jsx("div", {
                className: "container mx-auto px-4 py-4 flex items-center gap-3",
                children: f.jsxs(wo, {
                    href: "/",
                    className: "text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm",
                    "data-testid": "link-back-home",
                    children: [f.jsx(xf, {
                        className: "h-4 w-4"
                    }), "Volver al inicio"]
                })
            })
        }), f.jsxs("main", {
            className: "container mx-auto px-4 py-12 max-w-4xl",
            children: [f.jsxs("div", {
                className: "flex items-center gap-3 mb-8",
                children: [f.jsx("div", {
                    className: "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100",
                    children: f.jsx(Ss, {
                        className: "h-6 w-6 text-blue-600"
                    })
                }), f.jsxs("div", {
                    children: [f.jsx("h1", {
                        className: "text-3xl font-bold",
                        "data-testid": "text-privacy-title",
                        children: "Política de Privacidad"
                    }), f.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Última actualización: enero de 2025"
                    })]
                })]
            }), f.jsxs("div", {
                className: "prose prose-slate max-w-none space-y-8 text-slate-700",
                children: [f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "1. Responsable del Tratamiento"
                    }), f.jsxs("p", {
                        className: "leading-relaxed",
                        children: [f.jsx("strong", {
                            children: "SoatOnlinePro"
                        }), " es responsable del tratamiento de los datos personales recopilados a través de este Sitio web. Para ejercer sus derechos o resolver inquietudes sobre el manejo de su información, puede contactarnos en: ", f.jsx("a", {
                            href: "mailto:contacto@soatonlinepro.co",
                            className: "text-blue-600 hover:underline",
                            children: "contacto@soatonlinepro.co"
                        })]
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "2. Datos que Recopilamos"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Al utilizar nuestro Sitio, podemos recopilar los siguientes tipos de información:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Datos de contacto:"
                            }), " nombre completo, correo electrónico, número de teléfono."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Datos del vehículo:"
                            }), " tipo de vehículo, placa, ciudad de registro."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Datos de navegación:"
                            }), " dirección IP, tipo de navegador, páginas visitadas, tiempo de visita."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Cookies y tecnologías de rastreo:"
                            }), " para mejorar la experiencia de usuario y analizar el uso del Sitio."]
                        })]
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "3. Finalidad del Tratamiento"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Sus datos personales serán utilizados para:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsx("li", {
                            children: "Procesar y gestionar su solicitud de cotización del SOAT."
                        }), f.jsx("li", {
                            children: "Comunicarnos con usted para brindarle información sobre el servicio solicitado."
                        }), f.jsx("li", {
                            children: "Enviarle información comercial sobre nuestros servicios (solo con su consentimiento previo)."
                        }), f.jsx("li", {
                            children: "Mejorar la funcionalidad y el contenido del Sitio."
                        }), f.jsx("li", {
                            children: "Cumplir con obligaciones legales y regulatorias aplicables en Colombia."
                        })]
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "4. Base Legal del Tratamiento"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "El tratamiento de sus datos se fundamenta en la Ley 1581 de 2012 (Ley de Protección de Datos Personales de Colombia) y sus decretos reglamentarios. Al completar nuestros formularios, usted otorga su consentimiento libre, previo e informado para el tratamiento de sus datos con las finalidades indicadas."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "5. Compartición de Datos con Terceros"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "SoatOnlinePro podrá compartir sus datos personales únicamente con:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsx("li", {
                            children: "Compañías aseguradoras autorizadas por la Superintendencia Financiera de Colombia, necesarias para procesar su cotización o póliza SOAT."
                        }), f.jsx("li", {
                            children: "Proveedores de servicios tecnológicos que colaboran en la operación del Sitio, bajo acuerdos de confidencialidad."
                        }), f.jsx("li", {
                            children: "Autoridades competentes cuando sea requerido por ley."
                        })]
                    }), f.jsx("p", {
                        className: "leading-relaxed mt-3",
                        children: "No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines publicitarios sin su consentimiento."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "6. Cookies y Tecnologías de Rastreo"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Utilizamos cookies propias y de terceros para analizar el comportamiento de los usuarios, personalizar el contenido y mejorar nuestros servicios. Puede configurar su navegador para rechazar todas las cookies o para recibir una notificación cuando se envíe una cookie. Sin embargo, algunas funcionalidades del Sitio pueden no estar disponibles si desactiva las cookies."
                    }), f.jsx("p", {
                        className: "leading-relaxed mt-3",
                        children: "Utilizamos herramientas como Google Analytics para medir el tráfico del Sitio de forma anónima y agregada."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "7. Conservación de los Datos"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, o durante el plazo requerido por la ley colombiana. Una vez cumplida la finalidad, los datos serán eliminados de forma segura."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "8. Sus Derechos"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "De conformidad con la Ley 1581 de 2012, usted tiene derecho a:"
                    }), f.jsxs("ul", {
                        className: "list-disc pl-6 mt-3 space-y-2",
                        children: [f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Conocer"
                            }), " los datos personales que tenemos sobre usted."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Actualizar"
                            }), " sus datos cuando estén incompletos o sean inexactos."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Rectificar"
                            }), " información que sea incorrecta."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Suprimir"
                            }), " sus datos cuando no sean necesarios para la finalidad para la que fueron recabados."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Revocar"
                            }), " el consentimiento otorgado para el tratamiento."]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Presentar quejas"
                            }), " ante la Superintendencia de Industria y Comercio (SIC)."]
                        })]
                    }), f.jsxs("p", {
                        className: "leading-relaxed mt-3",
                        children: ["Para ejercer cualquiera de estos derechos, envíe una solicitud a ", f.jsx("a", {
                            href: "mailto:contacto@soatonlinepro.co",
                            className: "text-blue-600 hover:underline",
                            children: "contacto@soatonlinepro.co"
                        }), ' con el asunto "Derechos ARCO".']
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "9. Seguridad de la Información"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Implementamos medidas técnicas, administrativas y físicas adecuadas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún sistema de transmisión por Internet es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de la información transmitida."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "10. Cambios en esta Política"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Le notificaremos sobre cambios significativos publicando la nueva política en el Sitio con la fecha de actualización. El uso continuado del Sitio después de dichos cambios constituirá su aceptación de la nueva política."
                    })]
                }), f.jsxs("section", {
                    children: [f.jsx("h2", {
                        className: "text-xl font-semibold text-slate-900 mb-3",
                        children: "11. Contacto"
                    }), f.jsx("p", {
                        className: "leading-relaxed",
                        children: "Si tiene preguntas sobre esta Política de Privacidad o sobre el tratamiento de sus datos, comuníquese con nosotros:"
                    }), f.jsxs("ul", {
                        className: "list-none mt-3 space-y-1",
                        children: [f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Correo:"
                            }), " ", f.jsx("a", {
                                href: "mailto:contacto@soatonlinepro.co",
                                className: "text-blue-600 hover:underline",
                                children: "contacto@soatonlinepro.co"
                            })]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Sitio web:"
                            }), " soatonlinepro.co"]
                        }), f.jsxs("li", {
                            children: [f.jsx("strong", {
                                children: "Cobertura:"
                            }), " Colombia — Atención Nacional"]
                        })]
                    })]
                })]
            })]
        }), f.jsx("footer", {
            className: "border-t mt-16 py-6 bg-gray-50",
            children: f.jsxs("div", {
                className: "container mx-auto px-4 text-center text-sm text-muted-foreground",
                children: ["© ", new Date().getFullYear(), " SoatOnlinePro. Todos los derechos reservados."]
            })
        })]
    })
}
function HR() {
    return f.jsxs(r1, {
        children: [f.jsx(fo, {
            path: "/",
            component: DR
        }), f.jsx(fo, {
            path: "/panel-23433",
            component: UR
        }), f.jsx(fo, {
            path: "/terminos",
            component: $R
        }), f.jsx(fo, {
            path: "/privacidad",
            component: qR
        }), f.jsx(fo, {
            component: ak
        })]
    })
}
function WR() {
    return f.jsx(C1, {
        client: Ov,
        children: f.jsxs(sk, {
            children: [f.jsx(A_, {}), f.jsx(HR, {})]
        })
    })
}
IS.createRoot(document.getElementById("root")).render(f.jsx(WR, {}));
