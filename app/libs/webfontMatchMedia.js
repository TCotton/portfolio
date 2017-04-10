// jscs:disable
// Commons ES6 / ES7 polyfills
// Array.prototype.contains()
(function(window) {

  if (![].contains) {
    try {
      Object.defineProperty(Array.prototype, "contains", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(c, f) {
          if (void 0 === this || null === this) {
            throw new TypeError("Cannot convert this value to object");
          }
          var e = Object(this), b = parseInt(e.length) || 0;
          if (0 === b) {
            return !1;
          }
          var a = parseInt(f) || 0;
          if (a >= b) {
            return !1;
          }
          0 <= a || (a = b + a, 0 > a && (a = 0));
          for (; a < b;) {
            var d = e[a];
            if (c === d || c !== c && d !== d) {
              return !0;
            }
            a++
          }
          return !1
        }
      })
    } catch (e$$4) {
      Array.prototype.contains = function(c, f) {
        if (void 0 === this || null === this) {
          throw new TypeError("Cannot convert this value to object");
        }
        var e = Object(this), b = parseInt(e.length) || 0;
        if (0 === b) {
          return !1;
        }
        var a = parseInt(f) || 0;
        if (a >= b) {
          return !1;
        }
        0 <= a || (a = b + a, 0 > a && (a = 0));
        for (; a < b;) {
          var d = e[a];
          if (c === d || c !== c && d !== d) {
            return !0;
          }
          a++
        }
        return !1
      }
    }
  }
  ;

// Object.defineProperties
  if (!Object.defineProperties)var defineProperties = function(e, d) {
    function h(a) {
      function b(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
      }

      if ("object" !== typeof a || null === a)throw new TypeError("bad desc");
      var c = {};
      b(a, "enumerable") && (c.enumerable = !!e.enumerable);
      b(a, "configurable") && (c.configurable = !!e.configurable);
      b(a, "value") && (c.value = e.value);
      b(a, "writable") && (c.writable = !!a.writable);
      if (b(a, "get")) {
        var d = a.get;
        if ("function" !== typeof d && "undefined" !== typeof d)throw new TypeError("bad get");
        c.get = d
      }
      if (b(a, "set")) {
        a = a.set;
        if ("function" !== typeof a && "undefined" !== typeof a)throw new TypeError("bad set");
        c.set = a
      }
      if (("get"in c || "set"in c) && ("value"in c || "writable"in c))throw new TypeError("identity-confused descriptor");
      return c
    }

    if ("object" !== typeof e || null === e)throw new TypeError("bad obj");
    d = Object(d);
    for (var g = Object.keys(d), f = [], b = 0; b < g.length; b++)f.push([g[b], h(d[g[b]])]);
    for (b = 0; b < f.length; b++)Object.defineProperty(e, f[b][0], f[b][1]);
    return e
  };

// Object.keys
  Object.keys || (Object.keys = function() {
    var e = Object.prototype.hasOwnProperty, f = !{toString: null}.propertyIsEnumerable("toString"), c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "), g = c.length;
    return function(b) {
      if ("object" !== typeof b && ("function" !== typeof b || null === b))throw new TypeError("Object.keys called on non-object");
      var d = [], a;
      for (a in b)e.call(b, a) && d.push(a);
      if (f)for (a = 0; a < g; a++)e.call(b, c[a]) && d.push(c[a]);
      return d
    }
  }());

// forEach
  Array.prototype.forEach || (Array.prototype.forEach = function(c, f) {
    var d, a;
    if (null == this)throw new TypeError(" this is null or not defined");
    var b = Object(this), g = b.length >>> 0;
    if ("function" !== typeof c)throw new TypeError(c + " is not a function");
    1 < arguments.length && (d = f);
    for (a = 0; a < g;) {
      var e;
      a in b && (e = b[a], c.call(d, e, a, b));
      a++
    }
  });

// bind
  Function.prototype.bind || (Function.prototype.bind = function(b) {
    if ("function" !== typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var d = Array.prototype.slice.call(arguments, 1), e = this, a = function() {
    }, c = function() {
      return e.apply(this instanceof a && b ? this : b, d.concat(Array.prototype.slice.call(arguments)))
    };
    a.prototype = this.prototype;
    c.prototype = new a;
    return c
  });

// String.prototype.startsWith
  String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(b, a) {
      a = a || 0;
      return this.lastIndexOf(b, a) === a
    }
  });

// String.prototype.endsWith
  String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
    value: function(c, a) {
      var b = this.toString();
      if (void 0 === a || a > b.length)a = b.length;
      a -= c.length;
      b = b.indexOf(c, a);
      return -1 !== b && b === a
    }
  });

// String.prototype.contains
  String.prototype.contains || (String.prototype.contains = function() {
    return -1 !== String.prototype.indexOf.apply(this, arguments)
  });

// String.prototype.repeat
  String.prototype.repeat || (String.prototype.repeat = function(a) {
    if (null == this)throw new TypeError("can't convert " + this + " to object");
    var b = "" + this;
    a = +a;
    a != a && (a = 0);
    if (0 > a)throw new RangeError("repeat count must be non-negative");
    if (Infinity == a)throw new RangeError("repeat count must be less than infinity");
    a = Math.floor(a);
    if (0 == b.length || 0 == a)return "";
    if (268435456 <= b.length * a)throw new RangeError("repeat count must not overflow maximum string size");
    for (var c = ""; ;) {
      1 == (a & 1) && (c += b);
      a >>>= 1;
      if (0 == a)break;
      b += b
    }
    return c
  });

// String.prototype.codePointAt
  String.prototype.codePointAt || function() {
    var d = function(b) {
      if (null == this)throw TypeError();
      var c = String(this), d = c.length, a = b ? Number(b) : 0;
      a != a && (a = 0);
      if (!(0 > a || a >= d))return b = c.charCodeAt(a), 55296 <= b && 56319 >= b && d > a + 1 && (c = c.charCodeAt(a + 1), 56320 <= c && 57343 >= c) ? 1024 * (b - 55296) + c - 56320 + 65536 : b
    };
    Object.defineProperty ? Object.defineProperty(String.prototype, "codePointAt", {
      value: d,
      configurable: !0,
      writable: !0
    }) : String.prototype.codePointAt = d
  }();

// Object.is
  Object.is || (Object.is = function(a, b) {
    return 0 === a && 0 === b ? 1 / a === 1 / b : a !== a ? b !== b : a === b
  });

// Object.assign - only accepts first argument
  Object.assign || Object.defineProperty(Object, "assign", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(b, l) {
      if (void 0 === b || null === b)throw new TypeError("Cannot convert first argument to object");
      for (var f = Object(b), c = 1; c < arguments.length; c++) {
        var a = arguments[c];
        if (void 0 !== a && null !== a)for (var g = Object.keys(Object(a)), d = 0, k = g.length; d < k; d++) {
          var e = g[d], h = Object.getOwnPropertyDescriptor(a, e);
          void 0 !== h && h.enumerable && (f[e] = a[e])
        }
      }
      return f
    }
  });

// Object.create
  "function" != typeof Object.create && (Object.create = function() {
    var a = function() {
    };
    return function(b) {
      if (1 < arguments.length)throw Error("Second argument not supported");
      if ("object" != typeof b)throw TypeError("Argument must be an object");
      a.prototype = b;
      var c = new a;
      a.prototype = null;
      return c
    }
  }());

// Number.isInteger
  Number.isInteger || (Number.isInteger = function(a) {
    return "number" === typeof a && isFinite(a) && -9007199254740992 < a && 9007199254740992 > a && Math.floor(a) === a
  });

// Number.parseInt
  Number.parseInt || (Number.parseInt = window.parseInt);

// Number.parseFloat
  Number.parseFloat || (Number.parseFloat = window.parseFloat);

//Array.find
  Array.prototype.find || (Array.prototype.find = function(d, e) {
    if (null == this)throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" !== typeof d)throw new TypeError("predicate must be a function");
    for (var b = Object(this), f = b.length >>> 0, c, a = 0; a < f; a++)if (c = b[a], d.call(e, c, a, b))return c
  });

// Array.of // Array.from: https://gist.github.com/rwaldron/3186576
  (function(f) {
    function g(a) {
      try {return new a, !0} catch (c) {return !1}
    }

    Array.from = function(a) {
      var c, e, b, d, f;
      a = Object(a);
      c = +a.length;
      e = g(this) ? Object(new this(c)) : Array(c);
      for (b = 0; b < c;) {
        d = String(b);
        if (f = a.hasOwnProperty(d))d = a[d], e[b] = d;
        b++
      }
      return e
    };
    Array.of = function() {
      var a, c, e, b, d;
      a = Object(arguments);
      c = +a.length;
      e = g(this) ? Object(new this(c)) : Array(c);
      for (b = 0; b < c;)d = String(b), d = a[d], e[b] = d, b++;
      return e
    };
    f.Array.from = Array.from;
    f.Array.of = Array.of
  })(window);

})(window);

/* Web Font Loader v1.6.10 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function() {
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ba(a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }

  function n(a, b, c) {
    n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
    return n.apply(null, arguments)
  }

  var p = Date.now || function() {
      return +new Date
    };

  function q(a, b) {
    this.F = a;
    this.k = b || a;
    this.H = this.k.document
  }

  var ca = !!window.FontFace;
  q.prototype.createElement = function(a, b, c) {
    a = this.H.createElement(a);
    if (b)for (var d in b)b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
    c && a.appendChild(this.H.createTextNode(c));
    return a
  };
  function s(a, b, c) {
    a = a.H.getElementsByTagName(b)[0];
    a || (a = document.documentElement);
    a.insertBefore(c, a.lastChild)
  }

  function t(a, b, c) {
    b = b || [];
    c = c || [];
    for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
      for (var f = !1, g = 0; g < d.length; g += 1)if (b[e] === d[g]) {
        f = !0;
        break
      }
      f || d.push(b[e])
    }
    b = [];
    for (e = 0; e < d.length; e += 1) {
      f = !1;
      for (g = 0; g < c.length; g += 1)if (d[e] === c[g]) {
        f = !0;
        break
      }
      f || b.push(d[e])
    }
    a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
  }

  function u(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)if (c[d] == b)return !0;
    return !1
  }

  function v(a) {
    if ("string" === typeof a.fa)return a.fa;
    var b = a.k.location.protocol;
    "about:" == b && (b = a.F.location.protocol);
    return "https:" == b ? "https:" : "http:"
  }

  function x(a, b, c) {
    function d() {
      l && e && f && (l(g), l = null)
    }

    b = a.createElement("link", {rel: "stylesheet", href: b, media: "all"});
    var e = !1, f = !0, g = null, l = c || null;
    ca ? (b.onload = function() {
      e = !0;
      d()
    }, b.onerror = function() {
      e = !0;
      g = Error("Stylesheet failed to load");
      d()
    }) : setTimeout(function() {
      e = !0;
      d()
    }, 0);
    s(a, "head", b)
  }

  function y(a, b, c, d) {
    var e = a.H.getElementsByTagName("head")[0];
    if (e) {
      var f = a.createElement("script", {src: b}), g = !1;
      f.onload = f.onreadystatechange = function() {
        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
      };
      e.appendChild(f);
      setTimeout(function() {
        g || (g = !0, c && c(Error("Script load timeout")))
      }, d || 5E3);
      return f
    }
    return null
  };
  function z() {
    this.S = 0;
    this.K = null
  }

  function A(a) {
    a.S++;
    return function() {
      a.S--;
      B(a)
    }
  }

  function C(a, b) {
    a.K = b;
    B(a)
  }

  function B(a) {
    0 == a.S && a.K && (a.K(), a.K = null)
  };
  function D(a) {
    this.ea = a || "-"
  }

  D.prototype.d = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++)b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    return b.join(this.ea)
  };
  function E(a, b) {
    this.Q = a;
    this.M = 4;
    this.L = "n";
    var c = (b || "n4").match(/^([nio])([1-9])$/i);
    c && (this.L = c[1], this.M = parseInt(c[2], 10))
  }

  E.prototype.getName = function() {
    return this.Q
  };
  function da(a) {
    return G(a) + " " + (a.M + "00") + " 300px " + H(a.Q)
  }

  function H(a) {
    var b = [];
    a = a.split(/,\s*/);
    for (var c = 0; c < a.length; c++) {
      var d = a[c].replace(/['"]/g, "");
      -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
    }
    return b.join(",")
  }

  function I(a) {
    return a.L + a.M
  }

  function G(a) {
    var b = "normal";
    "o" === a.L ? b = "oblique" : "i" === a.L && (b = "italic");
    return b
  }

  function ea(a) {
    var b = 4, c = "n", d = null;
    a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
    return c + b
  };
  function fa(a, b) {
    this.a = a;
    this.j = a.k.document.documentElement;
    this.O = b;
    this.g = "wf";
    this.e = new D("-");
    this.da = !1 !== b.events;
    this.u = !1 !== b.classes
  }

  function ga(a) {
    a.u && t(a.j, [a.e.d(a.g, "loading")]);
    J(a, "loading")
  }

  function K(a) {
    if (a.u) {
      var b = u(a.j, a.e.d(a.g, "active")), c = [], d = [a.e.d(a.g, "loading")];
      b || c.push(a.e.d(a.g, "inactive"));
      t(a.j, c, d)
    }
    J(a, "inactive")
  }

  function J(a, b, c) {
    if (a.da && a.O[b])if (c)a.O[b](c.getName(), I(c)); else a.O[b]()
  };
  function ha() {
    this.t = {}
  }

  function ia(a, b, c) {
    var d = [], e;
    for (e in b)if (b.hasOwnProperty(e)) {
      var f = a.t[e];
      f && d.push(f(b[e], c))
    }
    return d
  };
  function L(a, b) {
    this.a = a;
    this.h = b;
    this.m = this.a.createElement("span", {"aria-hidden": "true"}, this.h)
  }

  function M(a, b) {
    var c = a.m, d;
    d = "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + H(b.Q) + ";" + ("font-style:" + G(b) + ";font-weight:" + (b.M + "00") + ";");
    c.style.cssText = d
  }

  function N(a) {
    s(a.a, "body", a.m)
  }

  L.prototype.remove = function() {
    var a = this.m;
    a.parentNode && a.parentNode.removeChild(a)
  };
  function O(a, b, c, d, e, f) {
    this.G = a;
    this.J = b;
    this.f = d;
    this.a = c;
    this.v = e || 3E3;
    this.h = f || void 0
  }

  O.prototype.start = function() {
    var a = this.a.k.document, b = this;
    Promise.race([new Promise(function(a, d) {
      setTimeout(function() {
        d(b.f)
      }, b.v)
    }), a.fonts.load(da(this.f), this.h)]).then(function(a) {
      1 === a.length ? b.G(b.f) : b.J(b.f)
    }, function() {
      b.J(b.f)
    })
  };
  function P(a, b, c, d, e, f, g) {
    this.G = a;
    this.J = b;
    this.a = c;
    this.f = d;
    this.h = g || "BESbswy";
    this.s = {};
    this.v = e || 3E3;
    this.Z = f || null;
    this.D = this.C = this.A = this.w = null;
    this.w = new L(this.a, this.h);
    this.A = new L(this.a, this.h);
    this.C = new L(this.a, this.h);
    this.D = new L(this.a, this.h);
    M(this.w, new E(this.f.getName() + ",serif", I(this.f)));
    M(this.A, new E(this.f.getName() + ",sans-serif", I(this.f)));
    M(this.C, new E("serif", I(this.f)));
    M(this.D, new E("sans-serif", I(this.f)));
    N(this.w);
    N(this.A);
    N(this.C);
    N(this.D)
  }

  var Q = {ia: "serif", ha: "sans-serif"}, R = null;

  function S() {
    if (null === R) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      R = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
    }
    return R
  }

  P.prototype.start = function() {
    this.s.serif = this.C.m.offsetWidth;
    this.s["sans-serif"] = this.D.m.offsetWidth;
    this.ga = p();
    T(this)
  };
  function ja(a, b, c) {
    for (var d in Q)if (Q.hasOwnProperty(d) && b === a.s[Q[d]] && c === a.s[Q[d]])return !0;
    return !1
  }

  function T(a) {
    var b = a.w.m.offsetWidth, c = a.A.m.offsetWidth, d;
    (d = b === a.s.serif && c === a.s["sans-serif"]) || (d = S() && ja(a, b, c));
    d ? p() - a.ga >= a.v ? S() && ja(a, b, c) && (null === a.Z || a.Z.hasOwnProperty(a.f.getName())) ? U(a, a.G) : U(a, a.J) : ka(a) : U(a, a.G)
  }

  function ka(a) {
    setTimeout(n(function() {
      T(this)
    }, a), 50)
  }

  function U(a, b) {
    setTimeout(n(function() {
      this.w.remove();
      this.A.remove();
      this.C.remove();
      this.D.remove();
      b(this.f)
    }, a), 0)
  };
  function V(a, b, c) {
    this.a = a;
    this.p = b;
    this.P = 0;
    this.ba = this.Y = !1;
    this.v = c
  }

  var la = !!window.FontFace;
  V.prototype.V = function(a) {
    var b = this.p;
    b.u && t(b.j, [b.e.d(b.g, a.getName(), I(a).toString(), "active")], [b.e.d(b.g, a.getName(), I(a).toString(), "loading"), b.e.d(b.g, a.getName(), I(a).toString(), "inactive")]);
    J(b, "fontactive", a);
    this.ba = !0;
    ma(this)
  };
  V.prototype.W = function(a) {
    var b = this.p;
    if (b.u) {
      var c = u(b.j, b.e.d(b.g, a.getName(), I(a).toString(), "active")), d = [], e = [b.e.d(b.g, a.getName(), I(a).toString(), "loading")];
      c || d.push(b.e.d(b.g, a.getName(), I(a).toString(), "inactive"));
      t(b.j, d, e)
    }
    J(b, "fontinactive", a);
    ma(this)
  };
  function ma(a) {
    0 == --a.P && a.Y && (a.ba ? (a = a.p, a.u && t(a.j, [a.e.d(a.g, "active")], [a.e.d(a.g, "loading"), a.e.d(a.g, "inactive")]), J(a, "active")) : K(a.p))
  };
  function na(a) {
    this.F = a;
    this.q = new ha;
    this.$ = 0;
    this.T = this.U = !0
  }

  na.prototype.load = function(a) {
    this.a = new q(this.F, a.context || this.F);
    this.U = !1 !== a.events;
    this.T = !1 !== a.classes;
    oa(this, new fa(this.a, a), a)
  };
  function pa(a, b, c, d, e) {
    var f = 0 == --a.$;
    (a.T || a.U) && setTimeout(function() {
      var a = e || null, l = d || null || {};
      if (0 === c.length && f)K(b.p); else {
        b.P += c.length;
        f && (b.Y = f);
        var h, k = [];
        for (h = 0; h < c.length; h++) {
          var m = c[h], w = l[m.getName()], r = b.p, F = m;
          r.u && t(r.j, [r.e.d(r.g, F.getName(), I(F).toString(), "loading")]);
          J(r, "fontloading", F);
          r = null;
          r = la ? new O(n(b.V, b), n(b.W, b), b.a, m, b.v, w) : new P(n(b.V, b), n(b.W, b), b.a, m, b.v, a, w);
          k.push(r)
        }
        for (h = 0; h < k.length; h++)k[h].start()
      }
    }, 0)
  }

  function oa(a, b, c) {
    var d = [], e = c.timeout;
    ga(b);
    var d = ia(a.q, c, a.a), f = new V(a.a, b, e);
    a.$ = d.length;
    b = 0;
    for (c = d.length; b < c; b++)d[b].load(function(b, c, d) {
      pa(a, f, b, c, d)
    })
  };
  function qa(a, b, c) {
    this.N = a ? a : b + ra;
    this.o = [];
    this.R = [];
    this.ca = c || ""
  }

  var ra = "//fonts.googleapis.com/css";

  function sa(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var e = b[d].split(":");
      3 == e.length && a.R.push(e.pop());
      var f = "";
      2 == e.length && "" != e[1] && (f = ":");
      a.o.push(e.join(f))
    }
  }

  qa.prototype.d = function() {
    if (0 == this.o.length)throw Error("No fonts to load!");
    if (-1 != this.N.indexOf("kit="))return this.N;
    for (var a = this.o.length, b = [], c = 0; c < a; c++)b.push(this.o[c].replace(/ /g, "+"));
    a = this.N + "?family=" + b.join("%7C");
    0 < this.R.length && (a += "&subset=" + this.R.join(","));
    0 < this.ca.length && (a += "&text=" + encodeURIComponent(this.ca));
    return a
  };
  function ta(a) {
    this.o = a;
    this.aa = [];
    this.I = {}
  }

  var ua = {
    latin: "BESbswy",
    cyrillic: "&#1081;&#1103;&#1046;",
    greek: "&#945;&#946;&#931;",
    khmer: "&#x1780;&#x1781;&#x1782;",
    Hanuman: "&#x1780;&#x1781;&#x1782;"
  }, va = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  }, wa = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  }, xa = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  ta.prototype.parse = function() {
    for (var a = this.o.length, b = 0; b < a; b++) {
      var c = this.o[b].split(":"), d = c[0].replace(/\+/g, " "), e = ["n4"];
      if (2 <= c.length) {
        var f;
        var g = c[1];
        f = [];
        if (g)for (var g = g.split(","), l = g.length, h = 0; h < l; h++) {
          var k;
          k = g[h];
          if (k.match(/^[\w-]+$/))if (k = xa.exec(k.toLowerCase()), null == k)k = ""; else {
            var m;
            m = k[1];
            if (null == m || "" == m)m = "4"; else {
              var w = va[m];
              m = w ? w : isNaN(m) ? "4" : m.substr(0, 1)
            }
            k = k[2];
            k = [null == k || "" == k ? "n" : wa[k], m].join("")
          } else k = "";
          k && f.push(k)
        }
        0 < f.length && (e = f);
        3 == c.length && (c = c[2], f =
          [], c = c ? c.split(",") : f, 0 < c.length && (c = ua[c[0]]) && (this.I[d] = c))
      }
      this.I[d] || (c = ua[d]) && (this.I[d] = c);
      for (c = 0; c < e.length; c += 1)this.aa.push(new E(d, e[c]))
    }
  };
  function ya(a, b) {
    this.a = a;
    this.c = b
  }

  var za = {Arimo: !0, Cousine: !0, Tinos: !0};
  ya.prototype.load = function(a) {
    var b = new z, c = this.a, d = new qa(this.c.api, v(c), this.c.text), e = this.c.families;
    sa(d, e);
    var f = new ta(e);
    f.parse();
    x(c, d.d(), A(b));
    C(b, function() {
      a(f.aa, f.I, za)
    })
  };
  function W(a, b) {
    this.a = a;
    this.c = b;
    this.X = []
  }

  W.prototype.B = function(a) {
    var b = this.a;
    return v(this.a) + (this.c.api || "//f.fontdeck.com/s/css/js/") + (b.k.location.hostname || b.F.location.hostname) + "/" + a + ".js"
  };
  W.prototype.load = function(a) {
    var b = this.c.id, c = this.a.k, d = this;
    b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
      for (var g = 0, l = c.fonts.length; g < l; ++g) {
        var h = c.fonts[g];
        d.X.push(new E(h.name, ea("font-weight:" + h.weight + ";font-style:" + h.style)))
      }
      a(d.X)
    }, y(this.a, this.B(b), function(b) {
      b && a([])
    })) : a([])
  };
  function X(a, b) {
    this.a = a;
    this.c = b
  }

  X.prototype.B = function(a) {
    return (this.c.api || "https://use.typekit.net") + "/" + a + ".js"
  };
  X.prototype.load = function(a) {
    var b = this.c.id, c = this.a.k;
    b ? y(this.a, this.B(b), function(b) {
      if (b)a([]); else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
        b = c.Typekit.config.fn;
        for (var e = [], f = 0; f < b.length; f += 2)for (var g = b[f], l = b[f + 1], h = 0; h < l.length; h++)e.push(new E(g, l[h]));
        try {c.Typekit.load({events: !1, classes: !1, async: !0})} catch (k) {}
        a(e)
      }
    }, 2E3) : a([])
  };
  function Y(a, b) {
    this.a = a;
    this.c = b
  }

  Y.prototype.B = function(a, b) {
    var c = v(this.a), d = (this.c.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
    return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
  };
  Y.prototype.load = function(a) {
    function b() {
      if (e["__mti_fntLst" + c]) {
        var d = e["__mti_fntLst" + c](), g = [], l;
        if (d)for (var h = 0; h < d.length; h++) {
          var k = d[h].fontfamily;
          void 0 != d[h].fontStyle && void 0 != d[h].fontWeight ? (l = d[h].fontStyle + d[h].fontWeight, g.push(new E(k, l))) : g.push(new E(k))
        }
        a(g)
      } else setTimeout(function() {
        b()
      }, 50)
    }

    var c = this.c.projectId, d = this.c.version;
    if (c) {
      var e = this.a.k;
      y(this.a, this.B(c, d), function(c) {
        c ? a([]) : b()
      }).id = "__MonotypeAPIScript__" + c
    } else a([])
  };
  function Aa(a, b) {
    this.a = a;
    this.c = b
  }

  Aa.prototype.load = function(a) {
    var b, c, d = this.c.urls || [], e = this.c.families || [], f = this.c.testStrings || {}, g = new z;
    b = 0;
    for (c = d.length; b < c; b++)x(this.a, d[b], A(g));
    var l = [];
    b = 0;
    for (c = e.length; b < c; b++)if (d = e[b].split(":"), d[1])for (var h = d[1].split(","), k = 0; k < h.length; k += 1)l.push(new E(d[0], h[k])); else l.push(new E(d[0]));
    C(g, function() {
      a(l, f)
    })
  };
  var Z = new na(window);
  Z.q.t.custom = function(a, b) {
    return new Aa(b, a)
  };
  Z.q.t.fontdeck = function(a, b) {
    return new W(b, a)
  };
  Z.q.t.monotype = function(a, b) {
    return new Y(b, a)
  };
  Z.q.t.typekit = function(a, b) {
    return new X(b, a)
  };
  Z.q.t.google = function(a, b) {
    return new ya(b, a)
  };
  var $ = {load: n(Z.load, Z)};
  "function" === typeof define && define.amd ? define(function() {
    return $
  }) : "undefined" !== typeof module && module.exports ? module.exports = $ : (window.WebFont = $, window.WebFontConfig && Z.load(window.WebFontConfig));
}());


var WebFont;

window.webfontMatchMedia = window.webfontMatchMedia || {};

window.webfontMatchMedia = (function(document, window) {

  return {

    stopTimer: null,

    loadFullFonts: function() {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,300italic,400italic,600,600italic,700,700italic', 'Yellowtail']
        }
      });

    },

    loadPartialFonts: function() {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,600,700', 'Yellowtail']
        }
      });

    },

    handleMediaMatch: function(mql) {

      if (!mql.matches) {

        webfontMatchMedia.loadFullFonts();
        mql.removeListener(webfontMatchMedia.handleMediaMatch);

      } else {

        webfontMatchMedia.loadPartialFonts();

      }

    },

    loadMatchMedia: function() {

      if (window.matchMedia) {

        var mql = window.matchMedia('screen and (max-width: 767px)');
        mql.addListener(this.handleMediaMatch);
        this.handleMediaMatch(mql);

      } else {

        webfontMatchMedia.loadFullFonts();

      }

      if (this.stopTimer) {
        clearInterval(this.stopTimer);
      }

    },

    init: function() {

      if (!WebFont) {

        this.stopTimer = setInterval(function() {

          if (WebFont) {

            webfontMatchMedia.loadMatchMedia();

          }

        }, 20);

      } else {

        webfontMatchMedia.loadMatchMedia();

      }

    }

  };

}(document, window));

if (WebFont) {
  window.webfontMatchMedia.loadMatchMedia();
} else {
  window.webfontMatchMedia.init();
}


/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssclasses-addtest-prefixed-
 * teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-img_webp
 */
window.Modernizr = (function(window, document, undefined) {

  var version = '2.8.3',

    Modernizr = {},
    enableClasses = true,
    docElement = document.documentElement,
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,
    inputElem,
    toString = {}.toString,
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    omPrefixes = 'Webkit Moz O ms',
    cssomPrefixes = omPrefixes.split(' '),
    domPrefixes = omPrefixes.toLowerCase().split(' '),
    tests = {},
    inputs = {},
    attrs = {},
    classes = [],
    slice = classes.slice,
    featureName,

    injectElementWithStyles = function(rule, callback, nodes, testnames) {

      var style, ret, node, docOverflow,
        div = document.createElement('div'),
        body = document.body,
        fakeBody = body || document.createElement('body');

      if (parseInt(nodes, 10)) {
        while (nodes--) {
          node = document.createElement('div');
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }

      style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if (!body) {
        fakeBody.style.background = '';
        fakeBody.style.overflow = 'hidden';
        docOverflow = docElement.style.overflow;
        docElement.style.overflow = 'hidden';
        docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      if (!body) {
        fakeBody.parentNode.removeChild(fakeBody);
        docElement.style.overflow = docOverflow;
      } else {
        div.parentNode.removeChild(div);
      }

      return !!ret;

    },

    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input',
        'change': 'input',
        'submit': 'form',
        'reset': 'form',
        'error': 'img',
        'load': 'img',
        'abort': 'img'
      };

      function isEventSupported(eventName, element) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        var isSupported = eventName in element;

        if (!isSupported) {
          if (!element.setAttribute) {
            element = document.createElement('div');
          }
          if (element.setAttribute && element.removeAttribute) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            if (!is(element[eventName], 'undefined')) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }

      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty,
    hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function(object, property) {
      return _hasOwnProperty.call(object, property);
    };
  } else {
    hasOwnProp = function(object, property) {
      return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
    };
  }


  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {

      var target = this;

      if (typeof target != "function") {
        throw new TypeError();
      }

      var args = slice.call(arguments, 1),
        bound = function() {

          if (this instanceof bound) {

            var F = function() {
            };
            F.prototype = target.prototype;
            var self = new F();

            var result = target.apply(
              self,
              args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
              return result;
            }
            return self;

          } else {

            return target.apply(
              that,
              args.concat(slice.call(arguments))
            );

          }

        };

      return bound;
    };
  }

  function setCss(str) {
    mStyle.cssText = str;
  }

  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''));
  }

  function is(obj, type) {
    return typeof obj === type;
  }

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  function testProps(props, prefixed) {
    for (var i in props) {
      var prop = props[i];
      if (!contains(prop, "-") && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }
    return false;
  }

  function testDOMProps(props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];
      if (item !== undefined) {

        if (elem === false) return props[i];

        if (is(item, 'function')) {
          return item.bind(elem || obj);
        }

        return item;
      }
    }
    return false;
  }

  function testPropsAll(prop, prefixed, elem) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed);

    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();

      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  Modernizr.addTest = function(feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {

      feature = feature.toLowerCase();

      if (Modernizr[feature] !== undefined) {
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      if (typeof enableClasses !== "undefined" && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }
      Modernizr[feature] = test;

    }

    return Modernizr;
  };

  setCss('');
  modElem = inputElem = null;

  Modernizr._version = version;

  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;

  Modernizr.hasEvent = isEventSupported;

  Modernizr.testProp = function(prop) {
    return testProps([prop]);
  };

  Modernizr.testAllProps = testPropsAll;

  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = function(prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      return testPropsAll(prop, obj, elem);
    }
  };

  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

    (enableClasses ? ' js ' + classes.join(' ') : '');

  return Modernizr;

})(this, this.document);
// code.google.com/speed/webp/
// by rich bradshaw, ryan seddon, and paul irish
// This test is asynchronous. Watch out.

(function() {

  var image = new Image();

  image.onerror = function() {
    Modernizr.addTest('webp', false);
  };
  image.onload = function() {
    Modernizr.addTest('webp', function() {
      return image.width == 1;
    });
  };

  image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';

}());

/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
(function(w){
	"use strict";
  /* exported loadCSS */
	var loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` [REQUIRED] is the URL for your CSS file.
		// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
		// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
		// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
		var doc = w.document;
		var ss = doc.createElement( "link" );
		var ref;
		if( before ){
			ref = before;
		}
		else {
			var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		var sheets = doc.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		ss.media = "only x";

		// wait until body is defined before injecting link. This ensures a non-blocking load in IE11.
		function ready( cb ){
			if( doc.body ){
				return cb();
			}
			setTimeout(function(){
				ready( cb );
			});
		}
		// Inject link
		// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
		// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ready( function(){
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		});
		// A method (exposed on return object for external use) that mimics onload by polling document.styleSheets until it includes the new sheet.
		var onloadcssdefined = function( cb ){
			var resolvedHref = ss.href;
			var i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		function loadCB(){
			if( ss.addEventListener ){
				ss.removeEventListener( "load", loadCB );
			}
			ss.media = media || "all";
		}

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		if( ss.addEventListener ){
			ss.addEventListener( "load", loadCB);
		}
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined( loadCB );
		return ss;
	};
	// commonjs
	if( typeof exports !== "undefined" ){
		exports.loadCSS = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
(function( w ){
	// rel=preload support test
	if( !w.loadCSS ){
		return;
	}
	var rp = loadCSS.relpreload = {};
	rp.support = function(){
		try {
			return w.document.createElement( "link" ).relList.supports( "preload" );
		} catch (e) {
			return false;
		}
	};

	// loop preload links and fetch using loadCSS
	rp.poly = function(){
		var links = w.document.getElementsByTagName( "link" );
		for( var i = 0; i < links.length; i++ ){
			var link = links[ i ];
			if( link.rel === "preload" && link.getAttribute( "as" ) === "style" ){
				w.loadCSS( link.href, link, link.getAttribute( "media" ) );
				link.rel = null;
			}
		}
	};

	// if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
	if( !rp.support() ){
		rp.poly();
		var run = w.setInterval( rp.poly, 300 );
		if( w.addEventListener ){
			w.addEventListener( "load", function(){
				rp.poly();
				w.clearInterval( run );
			} );
		}
		if( w.attachEvent ){
			w.attachEvent( "onload", function(){
				w.clearInterval( run );
			} )
		}
	}
}( this ));

// jscs:enable
