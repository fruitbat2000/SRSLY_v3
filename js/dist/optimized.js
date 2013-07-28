/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/

/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

(function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
        return e instanceof x ? e : this instanceof x ? (this._wrapped = e, void 0) : new x(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
    var T = x.each = x.forEach = function(e, t, r) {
        if (null != e) if (c && e.forEach === c) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, s = e.length; s > i; i++) if (t.call(r, e[i], i, e) === n) return;
        } else for (var o in e) if (x.has(e, o) && t.call(r, e[o], o, e) === n) return;
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s);
        }), r);
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0);
        }), !i) throw new TypeError(N);
        return n;
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length;
        }
        if (T(e, function(u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0);
        }), !i) throw new TypeError(N);
        return n;
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, s) {
            return t.call(n, e, i, s) ? (r = e, !0) : void 0;
        }), r;
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return null == e ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e);
        }), r);
    }, x.reject = function(e, t, n) {
        return x.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i);
        }, n);
    }, x.every = x.all = function(e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            return (i = i && t.call(r, e, s, o)) ? void 0 : n;
        }), !!i);
    };
    var C = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            return i || (i = t.call(r, e, s, o)) ? n : void 0;
        }), !!i);
    };
    x.contains = x.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
            return e === t;
        });
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2), r = x.isFunction(t);
        return x.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n);
        });
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t];
        });
    }, x.where = function(e, t, n) {
        return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function(e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
        });
    }, x.findWhere = function(e, t) {
        return x.where(e, t, !0);
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && 65535 > e.length) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            r.computed > o && (r = {
                value: e,
                computed: o
            });
        }), r.value;
    }, x.shuffle = function(e) {
        var t, n = 0, r = [];
        return T(e, function(e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e;
        }), r;
    };
    var k = function(e) {
        return x.isFunction(e) ? e : function(t) {
            return t[e];
        };
    };
    x.sortBy = function(e, t, n) {
        var r = k(t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (r > n || r === void 0) return -1;
            }
            return e.index < t.index ? -1 : 1;
        }), "value");
    };
    var L = function(e, t, n, r) {
        var i = {}, s = k(t || x.identity);
        return T(e, function(t, o) {
            var u = s.call(n, t, o, e);
            r(i, u, t);
        }), i;
    };
    x.groupBy = function(e, t, n) {
        return L(e, t, n, function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n);
        });
    }, x.countBy = function(e, t, n) {
        return L(e, t, n, function(e, t) {
            x.has(e, t) || (e[t] = 0), e[t]++;
        });
    }, x.sortedIndex = function(e, t, n, r) {
        n = null == n ? x.identity : k(n);
        for (var i = n.call(r, t), s = 0, o = e.length; o > s; ) {
            var u = s + o >>> 1;
            i > n.call(r, e[u]) ? s = u + 1 : o = u;
        }
        return s;
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : [];
    }, x.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : x.keys(e).length;
    }, x.first = x.head = x.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : u.call(e, 0, t);
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (null == t || n ? 1 : t));
    }, x.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0));
    }, x.rest = x.tail = x.drop = function(e, t, n) {
        return u.call(e, null == t || n ? 1 : t);
    }, x.compact = function(e) {
        return x.filter(e, x.identity);
    };
    var A = function(e, t, n) {
        return T(e, function(e) {
            x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e);
        }), n;
    };
    x.flatten = function(e, t) {
        return A(e, t, []);
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1));
    }, x.uniq = x.unique = function(e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e, s = [], o = [];
        return T(i, function(n, r) {
            (t ? r && o[o.length - 1] === n : x.contains(o, n)) || (o.push(n), s.push(e[r]));
        }), s;
    }, x.union = function() {
        return x.uniq(a.apply(r, arguments));
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0;
            });
        });
    }, x.difference = function(e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.contains(t, e);
        });
    }, x.zip = function() {
        for (var e = u.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
        return n;
    }, x.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, x.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0, i = e.length;
        if (n) {
            if ("number" != typeof n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n;
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++) if (e[r] === t) return r;
        return -1;
    }, x.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--; ) if (e[i] === t) return i;
        return -1;
    }, x.range = function(e, t, n) {
        1 >= arguments.length && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = Array(r); r > i; ) s[i++] = e, e += n;
        return s;
    }, x.bind = function(e, t) {
        if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
        var n = u.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(u.call(arguments)));
        };
    }, x.partial = function(e) {
        var t = u.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(u.call(arguments)));
        };
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return 0 === t.length && (t = x.functions(e)), T(t, function(t) {
            e[t] = x.bind(e[t], e);
        }), e;
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity), function() {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments);
        };
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, x.defer = function(e) {
        return x.delay.apply(x, [ e, 1 ].concat(u.call(arguments, 1)));
    }, x.throttle = function(e, t) {
        var n, r, i, s, o = 0, u = function() {
            o = new Date, i = null, s = e.apply(n, r);
        };
        return function() {
            var a = new Date, f = t - (a - o);
            return n = this, r = arguments, 0 >= f ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s;
        };
    }, x.debounce = function(e, t, n) {
        var r, i;
        return function() {
            var s = this, o = arguments, u = function() {
                r = null, n || (i = e.apply(s, o));
            }, a = n && !r;
            return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i;
        };
    }, x.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t);
        };
    }, x.wrap = function(e, t) {
        return function() {
            var n = [ e ];
            return o.apply(n, arguments), t.apply(this, n);
        };
    }, x.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, x.after = function(e, t) {
        return 0 >= e ? t() : function() {
            return 1 > --e ? t.apply(this, arguments) : void 0;
        };
    }, x.keys = E || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t;
    }, x.values = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push(e[n]);
        return t;
    }, x.pairs = function(e) {
        var t = [];
        for (var n in e) x.has(e, n) && t.push([ n, e[n] ]);
        return t;
    }, x.invert = function(e) {
        var t = {};
        for (var n in e) x.has(e, n) && (t[e[n]] = n);
        return t;
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t) for (var n in t) e[n] = t[n];
        }), e;
    }, x.pick = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function(n) {
            n in e && (t[n] = e[n]);
        }), t;
    }, x.omit = function(e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t;
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            if (t) for (var n in t) null == e[n] && (e[n] = t[n]);
        }), e;
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e;
    }, x.tap = function(e, t) {
        return t(e), e;
    };
    var O = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
          case "[object String]":
            return e == t + "";
          case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = n.length; s--; ) if (n[s] == e) return r[s] == t;
        n.push(e), r.push(t);
        var o = 0, u = !0;
        if ("[object Array]" == i) {
            if (o = e.length, u = o == t.length) for (; o-- && (u = O(e[o], t[o], n, r)); ) ;
        } else {
            var a = e.constructor, l = t.constructor;
            if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
            for (var c in e) if (x.has(e, c) && (o++, !(u = x.has(t, c) && O(e[c], t[c], n, r)))) break;
            if (u) {
                for (c in t) if (x.has(t, c) && !(o--)) break;
                u = !o;
            }
        }
        return n.pop(), r.pop(), u;
    };
    x.isEqual = function(e, t) {
        return O(e, t, [], []);
    }, x.isEmpty = function(e) {
        if (null == e) return !0;
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e) if (x.has(e, t)) return !1;
        return !0;
    }, x.isElement = function(e) {
        return !!e && 1 === e.nodeType;
    }, x.isArray = w || function(e) {
        return "[object Array]" == f.call(e);
    }, x.isObject = function(e) {
        return e === Object(e);
    }, T([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee");
    }), "function" != typeof /./ && (x.isFunction = function(e) {
        return "function" == typeof e;
    }), x.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, x.isNaN = function(e) {
        return x.isNumber(e) && e != +e;
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == f.call(e);
    }, x.isNull = function(e) {
        return null === e;
    }, x.isUndefined = function(e) {
        return e === void 0;
    }, x.has = function(e, t) {
        return l.call(e, t);
    }, x.noConflict = function() {
        return e._ = t, this;
    }, x.identity = function(e) {
        return e;
    }, x.times = function(e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r;
    }, x.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = x.invert(M.escape);
    var _ = {
        escape: RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(e) {
        x[e] = function(t) {
            return null == t ? "" : ("" + t).replace(_[e], function(t) {
                return M[e][t];
            });
        };
    }), x.result = function(e, t) {
        if (null == e) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n;
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            var n = x[t] = e[t];
            x.prototype[t] = function() {
                var e = [ this._wrapped ];
                return o.apply(e, arguments), j.call(this, n.apply(x, e));
            };
        });
    };
    var D = 0;
    x.uniqueId = function(e) {
        var t = ++D + "";
        return e ? e + t : t;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /(.)^/, H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = RegExp([ (n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source ].join("|") + "|$", "g"), s = 0, o = "__p+='";
        e.replace(i, function(t, n, r, i, u) {
            return o += e.slice(s, u).replace(B, function(e) {
                return "\\" + H[e];
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t;
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = Function(n.variable || "obj", "_", o);
        } catch (u) {
            throw u.source = o, u;
        }
        if (t) return r(t, x);
        var a = function(e) {
            return r.call(this, e, x);
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a;
    }, x.chain = function(e) {
        return x(e).chain();
    };
    var j = function(e) {
        return this._chain ? x(e).chain() : e;
    };
    x.mixin(x), T([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], j.call(this, n);
        };
    }), T([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        x.prototype[e] = function() {
            return j.call(this, t.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}).call(this), define("libs/underscore", function(e) {
    return function() {
        var t, n;
        return t || e._;
    };
}(this)), function(e, t) {
    function P(e) {
        var t = e.length, n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function I(e, n, r, i) {
        if (b.acceptData(e)) {
            var s, o, u = b.expando, a = "string" == typeof n, f = e.nodeType, c = f ? b.cache : e, h = f ? e[u] : e[u] && u;
            if (h && c[h] && (i || c[h].data) || !a || r !== t) return h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n)), s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], null == o && (o = s[b.camelCase(n)])) : o = s, o;
        }
    }
    function q(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, s, o = e.nodeType, u = o ? b.cache : e, a = o ? e[b.expando] : b.expando;
            if (u[a]) {
                if (t && (s = n ? u[a] : u[a].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [ t ] : (t = b.camelCase(t), t = t in s ? [ t ] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete s[t[r]];
                    if (!(n ? U : b.isEmptyObject)(s)) return;
                }
                (n || (delete u[a].data, U(u[a]))) && (o ? b.cleanData([ e ], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null);
            }
        }
    }
    function R(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r;
                } catch (s) {}
                b.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function U(e) {
        var t;
        for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function it() {
        return !0;
    }
    function st() {
        return !1;
    }
    function ct(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function ht(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return b.grep(e, function(e) {
            return e === t === n;
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (at.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r);
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n;
        });
    }
    function pt(e) {
        var t = dt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Pt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"));
    }
    function Ht(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, s = b._data(e), o = b._data(t, s), u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u) for (r = 0, i = u[n].length; i > r; r++) b.event.add(t, n, u[n][r]);
            }
            o.data && (o.data = b.extend({}, o.data));
        }
    }
    function Bt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando);
            }
            "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function jt(e, n) {
        var r, s, o = 0, u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u) for (u = [], r = e.childNodes || e; null != (s = r[o]); o++) !n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([ e ], u) : u;
    }
    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) if (t = en[i] + n, t in e) return t;
        return r;
    }
    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        var n, r, i, s = [], o = 0, u = e.length;
        for (; u > o; o++) r = e[o], r.style && (s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e;
    }
    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0;
        for (; 4 > s; s += 2) "margin" === n && (o += b.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= b.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o;
    }
    function un(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, s = qt(e), o = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px";
    }
    function an(e) {
        var t = s, n = Qt[e];
        return n || (n = fn(e, t), "none" !== n && n || (It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n;
    }
    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body), r = b.css(n[0], "display");
        return n.remove(), r;
    }
    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function(t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== b.type(t)) r(e, t); else for (i in t) vn(e + "[" + i + "]", t[i], n, r);
    }
    function _n(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n)) while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function Dn(e, n, r, i) {
        function u(a) {
            var f;
            return s[a] = !0, b.each(e[a] || [], function(e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1);
            }), f;
        }
        var s = {}, o = e === An;
        return u(n.dataTypes[0]) || !s["*"] && u("*");
    }
    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e;
    }
    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (u in l) u in r && (n[l[u]] = r[u]);
        while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break;
        }
        if (f[0] in r) o = f[0]; else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break;
                }
                i || (i = u);
            }
            o = o || i;
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t;
    }
    function Bn(e, t) {
        var n, r, i, s, o = {}, u = 0, a = e.dataTypes.slice(), f = a[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u]; ) if ("*" !== r) {
            if ("*" !== f && f !== r) {
                if (i = o[f + " " + r] || o["* " + r], !i) for (n in o) if (s = n.split(" "), s[1] === r && (i = o[f + " " + s[0]] || o["* " + s[0]])) {
                    i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                    break;
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t);
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: i ? l : "No conversion from " + f + " to " + r
                    };
                }
            }
            f = r;
        }
        return {
            state: "success",
            data: t
        };
    }
    function zn() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {}
    }
    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function Yn() {
        return setTimeout(function() {
            Xn = t;
        }), Xn = b.now();
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]), i = 0, s = r.length;
            for (; s > i; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function er(e, t, n) {
        var r, i, s = 0, o = Qn.length, u = b.Deferred().always(function() {
            delete a.elem;
        }), a = function() {
            if (i) return !1;
            var t = Xn || Yn(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length;
            for (; a > o; o++) f.tweens[o].run(s);
            return u.notifyWith(e, [ f, s, n ]), 1 > s && a ? n : (u.resolveWith(e, [ f ]), !1);
        }, f = u.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Yn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? f.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [ f, t ]) : u.rejectWith(e, [ f, t ]), this;
            }
        }), l = f.props;
        for (tr(l, f.opts.specialEasing); o > s; s++) if (r = Qn[s].call(f, e, l, f.opts)) return r;
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
    }
    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) if (r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r], o && "expand" in o) {
            n = o.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = s);
        } else t[r] = s;
    }
    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, v = [], m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c();
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (i in t) if (o = t[i], $n.exec(o)) {
            if (delete t[i], a = a || "toggle" === o, o === (m ? "hide" : "show")) continue;
            v.push(i);
        }
        if (s = v.length) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function() {
                b(e).hide();
            }), h.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t]);
            });
            for (i = 0; s > i; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function sr(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    var n, r, i = typeof t, s = e.document, o = e.location, u = e.jQuery, a = e.$, f = {}, l = [], c = "1.9.1", h = l.concat, p = l.push, d = l.slice, v = l.indexOf, m = f.toString, g = f.hasOwnProperty, y = c.trim, b = function(e, t) {
        return new b.fn.init(e, t, r);
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, E = /\S+/g, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, N = /^[\],:{}\s]*$/, C = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, A = /^-ms-/, O = /-([\da-z])/gi, M = function(e, t) {
        return t.toUpperCase();
    }, _ = function(e) {
        (s.addEventListener || "load" === e.type || "complete" === s.readyState) && (D(), b.ready());
    }, D = function() {
        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _));
    };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : x.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), T.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (o = s.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = s, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this));
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length;
        },
        toArray: function() {
            return d.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return b.each(this, e, t);
        },
        ready: function(e) {
            return b.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || b.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++) if (null != (s = arguments[a])) for (i in s) e = u[i], r = s[i], u !== r && (l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r));
        return u;
    }, b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!s.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(s, [ b ]), b.fn.trigger && b(s).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === b.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[m.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || g.call(e, r);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || s;
            var r = T.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = b.buildFragment([ e ], t, i), i && b(i).remove(), b.merge([], r.childNodes));
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && N.test(n.replace(k, "@").replace(L, "]").replace(C, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (s) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(A, "ms-").replace(O, M);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e);
            if (n) {
                if (o) {
                    for (; s > i; i++) if (r = t.apply(e[i], n), r === !1) break;
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
            } else if (o) {
                for (; s > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break;
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e;
        },
        trim: y && !y.call("﻿ ") ? function(e) {
            return null == e ? "" : y.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(S, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (P(Object(e)) ? b.merge(n, "string" == typeof e ? [ e ] : e) : p.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, s = 0;
            if ("number" == typeof r) for (; r > s; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            for (n = !!n; o > s; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, s = e.length, o = P(e), u = [];
            if (o) for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
            return h.apply([], u);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return "string" == typeof n && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(d.call(arguments)));
            }, i.guid = e.guid = e.guid || b.guid++, i) : t;
        },
        access: function(e, n, r, i, s, o, u) {
            var a = 0, f = e.length, l = null == r;
            if ("object" === b.type(r)) {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u);
            } else if (i !== t && (s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                return l.call(b(e), n);
            })), n)) for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o;
        },
        now: function() {
            return (new Date).getTime();
        }
    }), b.ready.promise = function(t) {
        if (!n) if (n = b.Deferred(), "complete" === s.readyState) setTimeout(b.ready); else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1); else {
            s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
            var r = !1;
            try {
                r = null == e.frameElement && s.documentElement;
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left");
                    } catch (e) {
                        return setTimeout(o, 50);
                    }
                    D(), b.ready();
                }
            }();
        }
        return n.promise(t);
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase();
    }), r = b(s);
    var H = {};
    b.Callbacks = function(e) {
        e = "string" == typeof e ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++) if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break;
            }
            n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable());
        }, c = {
            add: function() {
                if (a) {
                    var t = a.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    })(arguments), n ? s = a.length : r && (u = t, l(r));
                }
                return this;
            },
            remove: function() {
                return a && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--);
                }), this;
            },
            has: function(e) {
                return e ? b.inArray(e, a) > -1 : !!a && !!a.length;
            },
            empty: function() {
                return a = [], this;
            },
            disable: function() {
                return a = f = r = t, this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return f = t, r || c.disable(), this;
            },
            locked: function() {
                return !f;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !a || i && !f || (n ? f.push(t) : l(t)), this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    }, b.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", b.Callbacks("once memory"), "resolved" ], [ "reject", "fail", b.Callbacks("once memory"), "rejected" ], [ "notify", "progress", b.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, s) {
                            var o = s[0], u = b.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? b.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, b.each(t, function(e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this;
                }, i[s[0] + "With"] = o.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, s = 1 === i ? e : b.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
                };
            }, u, a, f;
            if (r > 1) for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise();
        }
    }), b.support = function() {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!o.value,
            optSelected: f.selected,
            enctype: !!s.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === s.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test;
        } catch (d) {
            t.deleteExpando = !1;
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, b(function() {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = s.getElementsByTagName("body")[0];
            a && (n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null);
        }), n = u = a = f = r = o = null, t;
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, F = /([A-Z])/g;
    b.extend({
        cache: {},
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !U(e);
        },
        data: function(e, t, n) {
            return I(e, t, n);
        },
        removeData: function(e, t) {
            return q(e, t);
        },
        _data: function(e, t, n) {
            return I(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return q(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), b.fn.extend({
        data: function(e, n) {
            var r, i, s = this[0], o = 0, u = null;
            if (e === t) {
                if (this.length && (u = b.data(s), 1 === s.nodeType && !b._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > o; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                    b._data(s, "parsedAttrs", !0);
                }
                return u;
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e);
            }) : b.access(this, function(n) {
                return n === t ? s ? R(s, e, b.data(s, e)) : null : (this.each(function() {
                    b.data(this, e, n);
                }), t);
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }
    }), b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t), r = n.length, i = n.shift(), s = b._queueHooks(e, t), o = function() {
                b.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), s.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"), b._removeData(e, n);
                })
            });
        }
    }), b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, s = b.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (u--) r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n);
        }
    });
    var z, W, X = /[\t\r\n]/g, V = /\r/g, $ = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Q = /^(?:checked|selected)$/i, G = b.support.getSetAttribute, Y = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).addClass(e.call(this, t, this.className));
            });
            if (a) for (t = (e || "").match(E) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                s = 0;
                while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = b.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0, u = this.length, a = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).removeClass(e.call(this, t, this.className));
            });
            if (a) for (t = (e || "").match(E) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                s = 0;
                while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? b.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) {
                    var s, o = 0, u = b(this), a = t, f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s);
                } else (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
                var s, o = b(this);
                1 === this.nodeType && (s = i ? e.call(this, n, o.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : b.isArray(s) && (s = b.map(s, function(e) {
                    return null == e ? "" : e + "";
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s));
            });
            if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0;
                    for (; u > a; a++) if (n = r[a], !(!n.selected && a !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                        if (t = b(n).val(), s) return t;
                        o.push(t);
                    }
                    return o;
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attr: function(e, n, r) {
            var s, o, u, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === i ? b.prop(e, n, r) : (o = 1 !== a || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z)), r === t ? s && o && "get" in s && null !== (u = s.get(e, n)) ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), null == u ? t : u) : null !== r ? s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, s = t && t.match(E);
            if (s && 1 === e.nodeType) while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), W = {
        get: function(e, n) {
            var r = b.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), s = "boolean" == typeof r ? Y && G ? null != i : Q.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t;
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n;
        }
    }, Y && G || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t;
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
        }
    }), G || (z = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t;
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n);
        }
    }, b.each([ "width", "height" ], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            }
        });
    })), b.support.hrefNormalized || (b.each([ "href", "src", "width", "height" ], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r;
            }
        });
    }), b.each([ "href", "src" ], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    })), b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }
        };
    }), b.each([ "radio", "checkbox" ], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t;
            }
        });
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {
        global: {},
        add: function(e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
            if (y) {
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function(e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments);
                }, h.elem = e), n = (n || "").match(E) || [ "" ], f = n.length;
                while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0;
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(E) || [ "" ], f = t.length;
                while (f--) if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                    c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                    while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || b.removeEvent(e, p, m.handle), delete l[p]);
                } else for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var u, a, f, l, c, h, p, d = [ i || s ], v = g.call(n, "type") ? n.type : n, m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            if (f = h = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + b.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[b.expando] ? n : new b.Event(v, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : b.makeArray(r, [ n ]), c = b.event.special[v] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !b.isWindow(i)) {
                    for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode); f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e);
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                if (n.type = v, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === v && b.nodeName(i, "a") || !b.acceptData(i) || !a || !i[v] || b.isWindow(i))) {
                    h = i[a], h && (i[a] = null), b.event.triggered = v;
                    try {
                        i[v]();
                    } catch (y) {}
                    b.event.triggered = t, h && (i[a] = h);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [], a = d.call(arguments), f = (b._data(this, "events") || {})[e.type] || [], l = b.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = b.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [], a = n.delegateCount, f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type)) for (; f != this; f = f.parentNode || this) if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [ f ]).length), s[r] && s.push(i);
                s.length && u.push({
                    elem: f,
                    handlers: s
                });
            }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u;
        },
        fix: function(e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type, o = e, u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, u = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
                }
            },
            focus: {
                trigger: function() {
                    if (this !== s.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === s.activeElement && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, b.removeEvent = s.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
    }, b.Event = function(e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n);
    }, b.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation();
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), b._data(r, "submitBubbles", !0));
            }), t);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t);
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), b.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0);
            })), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0);
                }), b._data(t, "changeBubbles", !0));
            }), t);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },
        teardown: function() {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName);
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0);
        };
        b.event.special[t] = {
            setup: function() {
                0 === n++ && s.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && s.removeEventListener(e, r, !0);
            }
        };
    }), b.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st; else if (!i) return this;
            return 1 === s && (u = i, i = function(e) {
                return b().off(e), u.apply(this, arguments);
            }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function() {
                b.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function() {
                b.event.remove(this, e, r, n);
            });
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t;
        }
    }), function(e, t) {
        function rt(e) {
            return J.test(e + "");
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r;
            };
        }
        function st(e) {
            return e[w] = !0, e;
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }
        function ut(e, t, n, r) {
            var i, s, o, u, a, f, h, v, m, y;
            if ((t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (!p && !r) {
                if (i = K.exec(e)) if (o = i[1]) {
                    if (9 === u) {
                        if (s = t.getElementById(o), !s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s), n;
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n;
                } else {
                    if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                    if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n;
                }
                if (S.qsa && !d.test(e)) {
                    if (h = !0, v = w, m = t, y = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                        while (a--) f[a] = v + pt(f[a]);
                        m = $.test(e) && t.parentNode || t, y = f.join(",");
                    }
                    if (y) try {
                        return _.apply(n, D.call(m.querySelectorAll(y), 0)), n;
                    } catch (b) {} finally {
                        h || t.removeAttribute("id");
                    }
                }
            }
            return Et(e.replace(R, "$1"), t, n, r);
        }
        function at(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ht(e, t) {
            var n, r, s, o, u, a, f, l = C[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                (!n || (r = U.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(s = [])), n = !1, (r = z.exec(u)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in i.filter) !(r = V[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break;
            }
            return t ? u.length : u ? ut.error(e) : C(e, a).slice(0);
        }
        function pt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) r += e[t].value;
            return r;
        }
        function dt(e, t, n) {
            var i = t.dir, s = n && "parentNode" === i, o = T++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || s) return e(t, n, r);
            } : function(t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i]) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else while (t = t[i]) if (1 === t.nodeType || s) if (l = t[w] || (t[w] = {}), (f = l[i]) && f[0] === c) {
                    if ((a = f[1]) === !0 || a === r) return a === !0;
                } else if (f = l[i] = [ c ], f[1] = e(t, n, u) || r, f[1] === !0) return !0;
            };
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function mt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = null != t;
            for (; a > u; u++) (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o;
        }
        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || wt(t || "*", u.nodeType ? [ u ] : u, []), m = !e || !s && t ? v : mt(v, h, e, u, a), g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--) (c = f[l]) && (g[p[l]] = !(m[p[l]] = c));
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a);
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
                    }
                } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g);
            });
        }
        function yt(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, l = dt(function(e) {
                return e === t;
            }, u, !0), c = dt(function(e) {
                return P.call(t, e) > -1;
            }, u, !0), h = [ function(e, n, r) {
                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
            } ];
            for (; s > a; a++) if (n = i.relative[e[a].type]) h = [ dt(vt(h), n) ]; else {
                if (n = i.filter[e[a].type].apply(null, e[a].matches), n[w]) {
                    for (r = ++a; s > r; r++) if (i.relative[e[r].type]) break;
                    return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, r > a && yt(e.slice(a, r)), s > r && yt(e = e.slice(r)), s > r && pt(e));
                }
                h.push(n);
            }
            return vt(h);
        }
        function bt(e, t) {
            var n = 0, s = t.length > 0, o = e.length > 0, u = function(u, a, l, h, p) {
                var d, v, m, g = [], y = 0, b = "0", w = u && [], E = null != p, S = f, T = u || o && i.find.TAG("*", p && a.parentNode || a), N = x += null == S ? 1 : Math.random() || .1;
                for (E && (f = a !== c && a, r = n); null != (d = T[b]); b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++]) if (m(d, a, l)) {
                            h.push(d);
                            break;
                        }
                        E && (x = N, r = ++n);
                    }
                    s && ((d = !m && d) && y--, u && w.push(d));
                }
                if (y += b, s && b !== y) {
                    v = 0;
                    while (m = t[v++]) m(w, g, a, l);
                    if (u) {
                        if (y > 0) while (b--) w[b] || g[b] || (g[b] = M.call(h));
                        g = mt(g);
                    }
                    _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h);
                }
                return E && (x = N, f = S), w;
            };
            return s ? st(u) : u;
        }
        function wt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) ut(e, t[r], n);
            return n;
        }
        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !p && i.relative[o[1].type]) {
                    if (t = i.find.ID(a.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length);
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    if (a = o[s], i.relative[f = a.type]) break;
                    if ((l = i.find[f]) && (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(s, 1), e = r.length && pt(o), !e) return _.apply(n, D.call(r, 0)), n;
                        break;
                    }
                }
            }
            return u(e, c)(r, t, p, n, $.test(e)), n;
        }
        function St() {}
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date), E = e.document, S = {}, x = 0, T = 0, N = it(), C = it(), k = it(), L = typeof t, A = 1 << 31, O = [], M = O.pop, _ = O.push, D = O.slice, P = O.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, H = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", j = B.replace("w", "w#"), F = "([*^$|!~]?=)", I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]", q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)", R = RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), U = RegExp("^" + H + "*," + H + "*"), z = RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"), W = RegExp(q), X = RegExp("^" + j + "$"), V = {
            ID: RegExp("^#(" + B + ")"),
            CLASS: RegExp("^\\.(" + B + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
            TAG: RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + I),
            PSEUDO: RegExp("^" + q),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            needsContext: RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        }, $ = /[\x20\t\r\n\f]*[+~]/, J = /^[^{]+\{\s*\[native code/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            D.call(E.documentElement.childNodes, 0)[0].nodeType;
        } catch (nt) {
            D = function(e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n;
            };
        }
        o = ut.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, l = ut.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : E;
            return n !== c && 9 === n.nodeType && n.documentElement ? (c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), S.attributes = ot(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
            }), S.getByClassName = ot(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1;
            }), S.getByName = ot(function(e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t;
            }), i.attrHandle = ot(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && "#" === e.firstChild.getAttribute("href");
            }) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            }, S.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== L && !p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== L && !p) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                }
            }, i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), i.find.TAG = S.tagNameNoComments ? function(e, n) {
                return typeof n.getElementsByTagName !== L ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return s;
            }, i.find.NAME = S.getByName && function(e, n) {
                return typeof n.getElementsByName !== L ? n.getElementsByName(name) : t;
            }, i.find.CLASS = S.getByClassName && function(e, n) {
                return typeof n.getElementsByClassName === L || p ? t : n.getElementsByClassName(e);
            }, v = [], d = [ ":focus" ], (S.qsa = rt(n.querySelectorAll)) && (ot(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked");
            }), ot(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:");
            })), (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q);
            }), d = RegExp(d.join("|")), v = RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, y = h.compareDocumentPosition ? function(e, t) {
                var r;
                return e === t ? (a = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, s = e.parentNode, o = t.parentNode, u = [ e ], f = [ t ];
                if (e === t) return a = !0, 0;
                if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                if (s === o) return at(e, t);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = t;
                while (r = r.parentNode) f.unshift(r);
                while (u[i] === f[i]) i++;
                return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0;
            }, a = !1, [ 0, 0 ].sort(y), S.detectDuplicates = a, c) : c;
        }, ut.matches = function(e, t) {
            return ut(e, null, null, t);
        }, ut.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']"), !(!S.matchesSelector || p || v && v.test(t) || d.test(t))) try {
                var n = m.call(e, t);
                if (n || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (r) {}
            return ut(t, c, null, [ e ]).length > 0;
        }, ut.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t);
        }, ut.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
        }, ut.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, ut.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            if (a = !S.detectDuplicates, e.sort(y), a) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1);
            }
            return e;
        }, s = ut.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; t = e[r]; r++) n += s(t);
            return n;
        }, i = ut.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: V,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ut.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, g = u && t.nodeName.toLowerCase(), y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling";
                                }
                                return !0;
                            }
                            if (d = [ o ? m.firstChild : m.lastChild ], o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (1 === c.nodeType && ++h && c === t) {
                                    l[e] = [ x, p, h ];
                                    break;
                                }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1]; else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [ x, h ]), c === t)) break;
                            return h -= i, h === r || 0 === h % r && h / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [], n = [], r = u(e.replace(R, "$1"));
                    return r[w] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--) (s = o[u]) && (e[u] = !(t[u] = s));
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop();
                    };
                }),
                has: st(function(e) {
                    return function(t) {
                        return ut(e, t).length > 0;
                    };
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
                    };
                }),
                lang: st(function(e) {
                    return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                        var n;
                        do if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === h;
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !i.pseudos.empty(e);
                },
                header: function(e) {
                    return G.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: ct(function() {
                    return [ 0 ];
                }),
                last: ct(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ct(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: ct(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: ct(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: ct(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ct(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; ) e.push(r);
                    return e;
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = lt(n);
        u = ut.compile = function(e, t) {
            var n, r = [], i = [], s = k[e + " "];
            if (!s) {
                t || (t = ht(e)), n = t.length;
                while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = k(e, bt(i, r));
            }
            return s;
        }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains;
    }(e);
    var ot = /Until$/, ut = /^(?:parents|prev(?:Until|All))/, at = /^.[^:#\[\.,]*$/, ft = b.expr.match.needsContext, lt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
                for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0;
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n;
        },
        has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ht(this, e, !1));
        },
        filter: function(e) {
            return this.pushStack(ht(this, e, !0));
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = ft.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break;
                    }
                    n = n.parentNode;
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s);
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [ e ] : e), r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return b.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n);
        },
        next: function(e) {
            return ct(e, "nextSibling");
        },
        prev: function(e) {
            return ct(e, "previousSibling");
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return b.sibling(e.firstChild);
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes);
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i);
        };
    }), b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : b.find.matches(e, t);
        },
        dir: function(e, n, r) {
            var i = [], s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !b(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
            return i;
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"), gt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, wt = /<tbody/i, Et = /<|&#?\w+;/, St = /<(?:script|style|link)/i, xt = /^(?:checkbox|radio)$/i, Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /^$|\/(?:java|ecma)script/i, Ct = /^true\/(.*)/, kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: b.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, At = pt(s), Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) return this.each(function(t) {
                b(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = b(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
            });
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++) (!e || b.filter(e, [ n ]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n)));
            return this;
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return b.clone(this, e, t);
            });
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                if (!("string" != typeof e || St.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0;
                    } catch (s) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([ e ], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t));
            });
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0, c = this.length, p = this, d = c - 1, v = e[0], m = b.isFunction(v);
            if (m || !(1 >= c || "string" != typeof v || b.support.checkClone) && Tt.test(v)) return this.each(function(i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r);
            });
            if (c && (f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, 1 === f.childNodes.length && (f = i), i)) {
                for (n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length; c > l; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                if (o) for (a = u[u.length - 1].ownerDocument, b.map(u, Dt), l = 0; o > l; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                    url: s.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")));
                f = i = null;
            }
            return this;
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], s = b(e), o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i);
        };
    }), b.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o) r[o] && Bt(i, r[o]);
            if (t) if (n) for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++) Ht(i, r[o]); else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s;
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length, h = pt(t), p = [], d = 0;
            for (; c > d; d++) if (s = e[d], s || 0 === s) if ("object" === b.type(s)) b.merge(p, s.nodeType ? [ s ] : s); else if (Et.test(s)) {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || [ "", "" ])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !b.support.tbody) {
                    s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f);
                }
                b.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild;
            } else p.push(t.createTextNode(s));
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) if ((!r || -1 === b.inArray(s, r)) && (o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                i = 0;
                while (s = u[i++]) Nt.test(s.type || "") && n.push(s);
            }
            return u = null, h;
        },
        cleanData: function(e, t) {
            var n, r, s, o, u = 0, a = b.expando, f = b.cache, c = b.support.deleteExpando, h = b.event.special;
            for (; null != (n = e[u]); u++) if ((t || b.acceptData(n)) && (s = n[a], o = s && f[s])) {
                if (o.events) for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s));
            }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i, zt = /opacity\s*=\s*([^)]*)/, Wt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Vt = /^margin/, $t = RegExp("^(" + w + ")(.*)$", "i"), Jt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Kt = RegExp("^([+-])=(" + w + ")", "i"), Qt = {
        BODY: "block"
    }, Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = [ "Top", "Right", "Bottom", "Left" ], en = [ "Webkit", "O", "Moz", "ms" ];
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, s, o = {}, u = 0;
                if (b.isArray(n)) {
                    for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = b.css(e, n[u], !1, s);
                    return o;
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return rn(this, !0);
        },
        hide: function() {
            return rn(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide();
            });
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = b.camelCase(n), f = e.style;
                if (n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || b.cssNumber[a] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r;
                } catch (l) {}
            }
        },
        css: function(e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o;
        },
        swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i;
        }
    }), e.getComputedStyle ? (qt = function(t) {
        return e.getComputedStyle(t, null);
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u.getPropertyValue(n) || u[n] : t, f = e.style;
        return u && ("" !== a || b.contains(e.ownerDocument, e) || (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a;
    }) : s.documentElement.currentStyle && (qt = function(e) {
        return e.currentStyle;
    }, Rt = function(e, n, r) {
        var i, s, o, u = r || qt(e), a = u ? u[n] : t, f = e.style;
        return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a;
    }), b.each([ "height", "width" ], function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function() {
                    return un(e, n, i);
                }) : un(e, n, i) : t;
            },
            set: function(e, t, r) {
                var i = r && qt(e);
                return sn(e, t, r ? on(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i);
        }
    }), b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Rt, [ e, "marginRight" ]) : t;
            }
        }), !b.support.pixelPosition && b.fn.position && b.each([ "top", "left" ], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Rt(e, n), Jt.test(r) ? b(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"));
    }, b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e);
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [ n ];
                for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i;
            }
        }, Vt.test(e) || (b.cssHooks[e + t].set = sn);
    });
    var ln = /%20/g, cn = /\[\]$/, hn = /\r?\n/g, pn = /^(?:submit|button|image|reset|file)$/i, dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e));
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                };
            }).get();
        }
    }), b.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
            s(this.name, this.value);
        }); else for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+");
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
    };
    var mn, gn, yn = b.now(), bn = /\?/, wn = /#.*$/, En = /([?&])_=[^&]*/, Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn = /^(?:GET|HEAD)$/, Nn = /^\/\//, Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn = b.fn.load, Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = o.href;
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href;
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function(e, n, r) {
        if ("string" != typeof e && kn) return kn.apply(this, arguments);
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && b.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            u.each(r, s || [ e.responseText, t, e ]);
        }), this;
    }, b.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), b.each([ "get", "post" ], function(e, n) {
        b[n] = function(e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            });
        };
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e);
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function(e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                2 !== w && (w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r)), e >= 200 && 300 > e || 304 === e ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), 204 === e ? (l = !0, T = "nocontent") : 304 === e ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [ g, T, x ]) : d.rejectWith(h, [ x, T, y ]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [ x, c, l ? g : y ]), v.fireWith(h, [ x, T ]), a && (p.trigger("ajaxComplete", [ x, c ]), --b.active || b.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n), h = c.context || c, p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event, d = b.Deferred(), v = b.Callbacks("once memory"), m = c.statusCode || {}, g = {}, y = {}, w = 0, S = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2];
                        }
                        t = l[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? o : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, g[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return w || (c.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > w) for (t in e) m[t] = [ m[t], e[t] ]; else x.always(e[x.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || S;
                    return f && f.abort(t), N(0, t), this;
                }
            };
            if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [ "" ], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), c.data && c.processData && "string" != typeof c.data && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === w) return x;
            a = c.global, a && 0 === b.active++ && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== w) {
                S = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                if (f = Dn(An, c, n, x)) {
                    x.readyState = 1, a && p.trigger("ajaxSend", [ x, c ]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout");
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N);
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        N(-1, T);
                    }
                } else N(-1, "No Transport");
                return x;
            }
            return x.abort();
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script");
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json");
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e), e;
            }
        }
    }), b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {
                send: function(t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var jn = [], Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e;
        }
    }), b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || b.error(s + " was not called"), u[0];
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments;
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t;
        }), "script") : t;
    });
    var In, qn, Rn = 0, Un = e.ActiveXObject && function() {
        var e;
        for (e in In) In[e](t, !0);
    };
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Wn();
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u]);
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState)) if (r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort(); else {
                                c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText;
                                } catch (h) {
                                    l = "";
                                }
                                u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404;
                            }
                        } catch (p) {
                            i || s(-1, p);
                        }
                        c && s(u, l, c, f);
                    }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/, Jn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Qn = [ nr ], Gn = {
        "*": [ function(e, t) {
            var n, r, i = this.createTween(e, t), s = Jn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                if (n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                    u = b.css(i.elem, e, !0) || n || 1;
                    do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && 1 !== a && --f);
                }
                i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e);
        }
    }), b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, b.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e), s = b.speed(t, n, r), o = function() {
                var t = er(this, b.extend({}, e), s);
                o.finish = function() {
                    t.stop(!0);
                }, (i || b._data(this, "finish")) && t.stop(!0);
            };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", s = b.timers, o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--; ) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = b.timers, o = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
        }, r;
    }, b.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t;
    }, b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start();
    }, b.fx.interval = 13, b.fx.start = function() {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval));
    }, b.fx.stop = function() {
        clearInterval(Vn), Vn = null;
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem;
        }).length;
    }), b.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            b.offset.setOffset(this, e, t);
        });
        var n, r, s = {
            top: 0,
            left: 0
        }, o = this[0], u = o && o.ownerDocument;
        if (u) return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s;
    }, b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e), s = i.offset(), o = b.css(e, "top"), u = b.css(e, "left"), a = ("absolute" === r || "fixed" === r) && b.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
        }
    }, b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || s.documentElement;
            });
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, s) {
                var o = sr(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s, t);
            }, e, i, arguments.length, null);
        };
    }), b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, s) {
                var o = arguments.length && (r || "boolean" != typeof i), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u);
                }, n, o ? i : t, o, null);
            };
        });
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b;
    });
}(window), define("libs/jquery", function() {}), function() {
    var e = this, t = e.Backbone, n = [], r = n.push, i = n.slice, s = n.splice, o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.0.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function() {
        return e.Backbone = t, this;
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {
        on: function(e, t, n) {
            if (!l(this, "on", e, [ t, n ]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this;
        },
        once: function(e, t, n) {
            if (!l(this, "once", e, [ t, n ]) || !t) return this;
            var r = this, i = u.once(function() {
                r.off(e, i), t.apply(this, arguments);
            });
            return i._callback = t, this.on(e, i, n);
        },
        off: function(e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [ t, n ])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [ e ] : u.keys(this._events);
            for (a = 0, f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n) for (c = 0, h = s.length; c < h; c++) i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e];
                }
            }
            return this;
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e], r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this;
        },
        stopListening: function(e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            typeof t == "object" && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var s in r) r[s].off(t, n, this), i && delete this._listeners[s];
            return this;
        }
    }, f = /\s+/, l = function(e, t, n, r) {
        if (!n) return !0;
        if (typeof n == "object") {
            for (var i in n) e[t].apply(e, [ i, n[i] ].concat(r));
            return !1;
        }
        if (f.test(n)) {
            var s = n.split(f);
            for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [ s[o] ].concat(r));
            return !1;
        }
        return !0;
    }, c = function(e, t) {
        var n, r = -1, i = e.length, s = t[0], o = t[1], u = t[2];
        switch (t.length) {
          case 0:
            while (++r < i) (n = e[r]).callback.call(n.ctx);
            return;
          case 1:
            while (++r < i) (n = e[r]).callback.call(n.ctx, s);
            return;
          case 2:
            while (++r < i) (n = e[r]).callback.call(n.ctx, s, o);
            return;
          case 3:
            while (++r < i) (n = e[r]).callback.call(n.ctx, s, o, u);
            return;
          default:
            while (++r < i) (n = e[r]).callback.apply(n.ctx, t);
        }
    }, h = {
        listenTo: "on",
        listenToOnce: "once"
    };
    u.each(h, function(e, t) {
        a[t] = function(t, n, r) {
            var i = this._listeners || (this._listeners = {}), s = t._listenerId || (t._listenerId = u.uniqueId("l"));
            return i[s] = t, typeof n == "object" && (r = this), t[e](n, r, this), this;
        };
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function(e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, u.extend(this, u.pick(t, d)), t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments);
    }, d = [ "url", "urlRoot", "collection" ];
    u.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return u.clone(this.attributes);
        },
        sync: function() {
            return o.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            return u.escape(this.get(e));
        },
        has: function(e) {
            return this.get(e) != null;
        },
        set: function(e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n);
            }
            if (f) return this;
            if (!a) while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }));
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }));
        },
        hasChanged: function(e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t;
            }
            return n;
        },
        previous: function(e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e];
        },
        previousAttributes: function() {
            return u.clone(this._previousAttributes);
        },
        fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r) {
                if (!t.set(t.parse(r, e), e)) return !1;
                n && n(t, r, e), t.trigger("sync", t, r, e);
            }, j(this, e), this.sync("read", this, e);
        },
        save: function(e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t;
            if (r && (!n || !n.wait) && !this.set(r, n)) return !1;
            n = u.extend({
                validate: !0
            }, n);
            if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this, f = n.success;
            return n.success = function(e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n)) return !1;
                f && f(a, e, n), a.trigger("sync", a, e, n);
            }, j(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s;
        },
        destroy: function(e) {
            e = e ? u.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            e.success = function(i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e);
            };
            if (this.isNew()) return e.success(), !1;
            j(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i;
        },
        url: function() {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || B();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return this.id == null;
        },
        isValid: function(e) {
            return this._validate({}, u.extend(e || {}, {
                validate: !0
            }));
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t || {}, {
                validationError: n
            })), !1) : !0;
        }
    });
    var v = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    u.each(v, function(e) {
        p.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t);
        };
    });
    var m = o.Collection = function(e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t));
    }, g = {
        add: !0,
        remove: !0,
        merge: !0
    }, y = {
        add: !0,
        merge: !1,
        remove: !1
    };
    u.extend(m.prototype, a, {
        model: p,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return o.sync.apply(this, arguments);
        },
        add: function(e, t) {
            return this.set(e, u.defaults(t || {}, y));
        },
        remove: function(e, t) {
            e = u.isArray(e) ? e.slice() : [ e ], t || (t = {});
            var n, r, i, s;
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s);
            }
            return this;
        },
        set: function(e, t) {
            t = u.defaults(t || {}, g), t.parse && (e = this.parse(e, t)), u.isArray(e) || (e = e ? [ e ] : []);
            var n, i, o, a, f, l, c = t.at, h = this.comparator && c == null && t.sort !== !1, p = u.isString(this.comparator) ? this.comparator : null, d = [], v = [], m = {};
            for (n = 0, i = e.length; n < i; n++) {
                if (!(o = this._prepareModel(e[n], t))) continue;
                (f = this.get(o)) ? (t.remove && (m[f.cid] = !0), t.merge && (f.set(o.attributes, t), h && !l && f.hasChanged(p) && (l = !0))) : t.add && (d.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o));
            }
            if (t.remove) {
                for (n = 0, i = this.length; n < i; ++n) m[(o = this.models[n]).cid] || v.push(o);
                v.length && this.remove(v, t);
            }
            d.length && (h && (l = !0), this.length += d.length, c != null ? s.apply(this.models, [ c, 0 ].concat(d)) : r.apply(this.models, d)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, i = d.length; n < i; n++) (o = d[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this;
        },
        reset: function(e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this;
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        findWhere: function(e) {
            return this.where(e, !0);
        },
        sort: function(e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this;
        },
        sortedIndex: function(e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return u.sortedIndex(this.models, e, r, n);
        },
        pluck: function(e) {
            return u.invoke(this.models, "get", e);
        },
        fetch: function(e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success, n = this;
            return e.success = function(r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e);
            }, j(this, e), this.sync("read", this, e);
        },
        create: function(e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this, r = t.success;
            return t.success = function(i) {
                t.wait && n.add(e, t), r && r(e, i, t);
            }, e.save(null, t), e;
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1);
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments);
        }
    });
    var b = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
    u.each(b, function(e) {
        m.prototype[e] = function() {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t);
        };
    });
    var w = [ "groupBy", "countBy", "sortBy" ];
    u.each(w, function(e) {
        m.prototype[e] = function(t, n) {
            var r = u.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return u[e](this.models, r, n);
        };
    });
    var E = o.View = function(e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
    }, S = /^(\S+)\s*(.*)$/, x = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    u.extend(E.prototype, a, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (!e && !(e = u.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) continue;
                var r = t.match(S), i = r[1], s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n);
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _configure: function(e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, x)), this.options = e;
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1);
            } else this.setElement(u.result(this, "el"), !1);
        }
    }), o.sync = function(e, t, n) {
        var r = T[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || B()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments);
            };
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && window.ActiveXObject && (!window.external || !window.external.msActiveXFilteringEnabled) && (i.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a;
    };
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.ajax = function() {
        return o.$.ajax.apply(o.$, arguments);
    };
    var N = o.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, C = /\((.*?)\)/g, k = /(\(\?)?:\w+/g, L = /\*\w+/g, A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {
        initialize: function() {},
        route: function(e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function(i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, [ "route:" + t ].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s);
            }), this;
        },
        navigate: function(e, t) {
            return o.history.navigate(e, t), this;
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e]);
        },
        _routeToRegExp: function(e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(k, function(e, t) {
                return t ? e : "([^/]+)";
            }).replace(L, "(.*?)"), new RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function(e) {
                return e ? decodeURIComponent(e) : null;
            });
        }
    });
    var O = o.History = function() {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history);
    }, M = /^[#\/]|\s+$/g, _ = /^\/+|\/+$/g, D = /msie [\w.]+/, P = /\/$/;
    O.started = !1, u.extend(O.prototype, a, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (e == null) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(P, "");
                e.indexOf(n) || (e = e.substr(n.length));
            } else e = this.getHash();
            return e.replace(M, "");
        },
        start: function(e) {
            if (O.started) throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(), n = document.documentMode, r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(_, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location, s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl();
        },
        stop: function() {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = u.any(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!O.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace));
            }
            t.trigger && this.loadUrl(e);
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t);
            } else e.hash = "#" + t;
        }
    }), o.history = new O;
    var H = function(e, t) {
        var n = this, r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function() {
            return n.apply(this, arguments);
        }, u.extend(r, n, t);
        var i = function() {
            this.constructor = r;
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r;
    };
    p.extend = m.extend = N.extend = E.extend = O.extend = H;
    var B = function() {
        throw new Error('A "url" property or function must be specified');
    }, j = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t), e.trigger("error", e, r, t);
        };
    };
}.call(this), define("libs/backbone", [ "libs/underscore", "libs/jquery" ], function(e) {
    return function() {
        var t, n;
        return t || e.Backbone;
    };
}(this)), this.Handlebars = {}, function(e) {
    e.VERSION = "1.0.0-rc.3", e.COMPILER_REVISION = 2, e.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: ">= 1.0.0-rc.3"
    }, e.helpers = {}, e.partials = {}, e.registerHelper = function(e, t, n) {
        n && (t.not = n), this.helpers[e] = t;
    }, e.registerPartial = function(e, t) {
        this.partials[e] = t;
    }, e.registerHelper("helperMissing", function(e) {
        if (arguments.length === 2) return undefined;
        throw new Error("Could not find property '" + e + "'");
    });
    var t = Object.prototype.toString, n = "[object Function]";
    e.registerHelper("blockHelperMissing", function(r, i) {
        var s = i.inverse || function() {}, o = i.fn, u = "", a = t.call(r);
        return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r);
    }), e.K = function() {}, e.createFrame = Object.create || function(t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n;
    }, e.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(t, n) {
            if (e.logger.level <= t) {
                var r = e.logger.methodMap[t];
                typeof console != "undefined" && console[r] && console[r].call(console, n);
            }
        }
    }, e.log = function(t, n) {
        e.logger.log(t, n);
    }, e.registerHelper("each", function(t, n) {
        var r = n.fn, i = n.inverse, s = 0, o = "", u;
        n.data && (u = e.createFrame(n.data));
        if (t && typeof t == "object") if (t instanceof Array) for (var a = t.length; s < a; s++) u && (u.index = s), o += r(t[s], {
            data: u
        }); else for (var f in t) t.hasOwnProperty(f) && (u && (u.key = f), o += r(t[f], {
            data: u
        }), s++);
        return s === 0 && (o = i(this)), o;
    }), e.registerHelper("if", function(r, i) {
        var s = t.call(r);
        return s === n && (r = r.call(this)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this);
    }), e.registerHelper("unless", function(t, n) {
        var r = n.fn, i = n.inverse;
        return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n);
    }), e.registerHelper("with", function(e, t) {
        return t.fn(e);
    }), e.registerHelper("log", function(t, n) {
        var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
        e.log(r, t);
    });
}(this.Handlebars);

var handlebars = function() {
    function n() {
        this.yy = {};
    }
    var e = {
        trace: function() {},
        yy: {},
        symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            simpleInverse: 6,
            statements: 7,
            statement: 8,
            openInverse: 9,
            closeBlock: 10,
            openBlock: 11,
            mustache: 12,
            partial: 13,
            CONTENT: 14,
            COMMENT: 15,
            OPEN_BLOCK: 16,
            inMustache: 17,
            CLOSE: 18,
            OPEN_INVERSE: 19,
            OPEN_ENDBLOCK: 20,
            path: 21,
            OPEN: 22,
            OPEN_UNESCAPED: 23,
            OPEN_PARTIAL: 24,
            partialName: 25,
            params: 26,
            hash: 27,
            DATA: 28,
            param: 29,
            STRING: 30,
            INTEGER: 31,
            BOOLEAN: 32,
            hashSegments: 33,
            hashSegment: 34,
            ID: 35,
            EQUALS: 36,
            PARTIAL_NAME: 37,
            pathSegments: 38,
            SEP: 39,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "CONTENT",
            15: "COMMENT",
            16: "OPEN_BLOCK",
            18: "CLOSE",
            19: "OPEN_INVERSE",
            20: "OPEN_ENDBLOCK",
            22: "OPEN",
            23: "OPEN_UNESCAPED",
            24: "OPEN_PARTIAL",
            28: "DATA",
            30: "STRING",
            31: "INTEGER",
            32: "BOOLEAN",
            35: "ID",
            36: "EQUALS",
            37: "PARTIAL_NAME",
            39: "SEP"
        },
        productions_: [ 0, [ 3, 2 ], [ 4, 2 ], [ 4, 3 ], [ 4, 2 ], [ 4, 1 ], [ 4, 1 ], [ 4, 0 ], [ 7, 1 ], [ 7, 2 ], [ 8, 3 ], [ 8, 3 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 8, 1 ], [ 11, 3 ], [ 9, 3 ], [ 10, 3 ], [ 12, 3 ], [ 12, 3 ], [ 13, 3 ], [ 13, 4 ], [ 6, 2 ], [ 17, 3 ], [ 17, 2 ], [ 17, 2 ], [ 17, 1 ], [ 17, 1 ], [ 26, 2 ], [ 26, 1 ], [ 29, 1 ], [ 29, 1 ], [ 29, 1 ], [ 29, 1 ], [ 29, 1 ], [ 27, 1 ], [ 33, 2 ], [ 33, 1 ], [ 34, 3 ], [ 34, 3 ], [ 34, 3 ], [ 34, 3 ], [ 34, 3 ], [ 25, 1 ], [ 21, 1 ], [ 38, 3 ], [ 38, 1 ] ],
        performAction: function(t, n, r, i, s, o, u) {
            var a = o.length - 1;
            switch (s) {
              case 1:
                return o[a - 1];
              case 2:
                this.$ = new i.ProgramNode([], o[a]);
                break;
              case 3:
                this.$ = new i.ProgramNode(o[a - 2], o[a]);
                break;
              case 4:
                this.$ = new i.ProgramNode(o[a - 1], []);
                break;
              case 5:
                this.$ = new i.ProgramNode(o[a]);
                break;
              case 6:
                this.$ = new i.ProgramNode([], []);
                break;
              case 7:
                this.$ = new i.ProgramNode([]);
                break;
              case 8:
                this.$ = [ o[a] ];
                break;
              case 9:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 10:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
                break;
              case 11:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
                break;
              case 12:
                this.$ = o[a];
                break;
              case 13:
                this.$ = o[a];
                break;
              case 14:
                this.$ = new i.ContentNode(o[a]);
                break;
              case 15:
                this.$ = new i.CommentNode(o[a]);
                break;
              case 16:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 17:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 18:
                this.$ = o[a - 1];
                break;
              case 19:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
              case 20:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                break;
              case 21:
                this.$ = new i.PartialNode(o[a - 1]);
                break;
              case 22:
                this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                break;
              case 23:
                break;
              case 24:
                this.$ = [ [ o[a - 2] ].concat(o[a - 1]), o[a] ];
                break;
              case 25:
                this.$ = [ [ o[a - 1] ].concat(o[a]), null ];
                break;
              case 26:
                this.$ = [ [ o[a - 1] ], o[a] ];
                break;
              case 27:
                this.$ = [ [ o[a] ], null ];
                break;
              case 28:
                this.$ = [ [ new i.DataNode(o[a]) ], null ];
                break;
              case 29:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 30:
                this.$ = [ o[a] ];
                break;
              case 31:
                this.$ = o[a];
                break;
              case 32:
                this.$ = new i.StringNode(o[a]);
                break;
              case 33:
                this.$ = new i.IntegerNode(o[a]);
                break;
              case 34:
                this.$ = new i.BooleanNode(o[a]);
                break;
              case 35:
                this.$ = new i.DataNode(o[a]);
                break;
              case 36:
                this.$ = new i.HashNode(o[a]);
                break;
              case 37:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
              case 38:
                this.$ = [ o[a] ];
                break;
              case 39:
                this.$ = [ o[a - 2], o[a] ];
                break;
              case 40:
                this.$ = [ o[a - 2], new i.StringNode(o[a]) ];
                break;
              case 41:
                this.$ = [ o[a - 2], new i.IntegerNode(o[a]) ];
                break;
              case 42:
                this.$ = [ o[a - 2], new i.BooleanNode(o[a]) ];
                break;
              case 43:
                this.$ = [ o[a - 2], new i.DataNode(o[a]) ];
                break;
              case 44:
                this.$ = new i.PartialNameNode(o[a]);
                break;
              case 45:
                this.$ = new i.IdNode(o[a]);
                break;
              case 46:
                o[a - 2].push(o[a]), this.$ = o[a - 2];
                break;
              case 47:
                this.$ = [ o[a] ];
            }
        },
        table: [ {
            3: 1,
            4: 2,
            5: [ 2, 7 ],
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 5 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            1: [ 3 ]
        }, {
            5: [ 1, 17 ]
        }, {
            5: [ 2, 6 ],
            7: 18,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 19 ],
            20: [ 2, 6 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            5: [ 2, 5 ],
            6: 20,
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 5 ],
            20: [ 2, 5 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            17: 23,
            18: [ 1, 22 ],
            21: 24,
            28: [ 1, 25 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            5: [ 2, 8 ],
            14: [ 2, 8 ],
            15: [ 2, 8 ],
            16: [ 2, 8 ],
            19: [ 2, 8 ],
            20: [ 2, 8 ],
            22: [ 2, 8 ],
            23: [ 2, 8 ],
            24: [ 2, 8 ]
        }, {
            4: 28,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 5 ],
            20: [ 2, 7 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            4: 29,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 5 ],
            20: [ 2, 7 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            5: [ 2, 12 ],
            14: [ 2, 12 ],
            15: [ 2, 12 ],
            16: [ 2, 12 ],
            19: [ 2, 12 ],
            20: [ 2, 12 ],
            22: [ 2, 12 ],
            23: [ 2, 12 ],
            24: [ 2, 12 ]
        }, {
            5: [ 2, 13 ],
            14: [ 2, 13 ],
            15: [ 2, 13 ],
            16: [ 2, 13 ],
            19: [ 2, 13 ],
            20: [ 2, 13 ],
            22: [ 2, 13 ],
            23: [ 2, 13 ],
            24: [ 2, 13 ]
        }, {
            5: [ 2, 14 ],
            14: [ 2, 14 ],
            15: [ 2, 14 ],
            16: [ 2, 14 ],
            19: [ 2, 14 ],
            20: [ 2, 14 ],
            22: [ 2, 14 ],
            23: [ 2, 14 ],
            24: [ 2, 14 ]
        }, {
            5: [ 2, 15 ],
            14: [ 2, 15 ],
            15: [ 2, 15 ],
            16: [ 2, 15 ],
            19: [ 2, 15 ],
            20: [ 2, 15 ],
            22: [ 2, 15 ],
            23: [ 2, 15 ],
            24: [ 2, 15 ]
        }, {
            17: 30,
            21: 24,
            28: [ 1, 25 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            17: 31,
            21: 24,
            28: [ 1, 25 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            17: 32,
            21: 24,
            28: [ 1, 25 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            25: 33,
            37: [ 1, 34 ]
        }, {
            1: [ 2, 1 ]
        }, {
            5: [ 2, 2 ],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 19 ],
            20: [ 2, 2 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            17: 23,
            21: 24,
            28: [ 1, 25 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            5: [ 2, 4 ],
            7: 35,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 19 ],
            20: [ 2, 4 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            5: [ 2, 9 ],
            14: [ 2, 9 ],
            15: [ 2, 9 ],
            16: [ 2, 9 ],
            19: [ 2, 9 ],
            20: [ 2, 9 ],
            22: [ 2, 9 ],
            23: [ 2, 9 ],
            24: [ 2, 9 ]
        }, {
            5: [ 2, 23 ],
            14: [ 2, 23 ],
            15: [ 2, 23 ],
            16: [ 2, 23 ],
            19: [ 2, 23 ],
            20: [ 2, 23 ],
            22: [ 2, 23 ],
            23: [ 2, 23 ],
            24: [ 2, 23 ]
        }, {
            18: [ 1, 36 ]
        }, {
            18: [ 2, 27 ],
            21: 41,
            26: 37,
            27: 38,
            28: [ 1, 45 ],
            29: 39,
            30: [ 1, 42 ],
            31: [ 1, 43 ],
            32: [ 1, 44 ],
            33: 40,
            34: 46,
            35: [ 1, 47 ],
            38: 26
        }, {
            18: [ 2, 28 ]
        }, {
            18: [ 2, 45 ],
            28: [ 2, 45 ],
            30: [ 2, 45 ],
            31: [ 2, 45 ],
            32: [ 2, 45 ],
            35: [ 2, 45 ],
            39: [ 1, 48 ]
        }, {
            18: [ 2, 47 ],
            28: [ 2, 47 ],
            30: [ 2, 47 ],
            31: [ 2, 47 ],
            32: [ 2, 47 ],
            35: [ 2, 47 ],
            39: [ 2, 47 ]
        }, {
            10: 49,
            20: [ 1, 50 ]
        }, {
            10: 51,
            20: [ 1, 50 ]
        }, {
            18: [ 1, 52 ]
        }, {
            18: [ 1, 53 ]
        }, {
            18: [ 1, 54 ]
        }, {
            18: [ 1, 55 ],
            21: 56,
            35: [ 1, 27 ],
            38: 26
        }, {
            18: [ 2, 44 ],
            35: [ 2, 44 ]
        }, {
            5: [ 2, 3 ],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [ 1, 11 ],
            15: [ 1, 12 ],
            16: [ 1, 13 ],
            19: [ 1, 19 ],
            20: [ 2, 3 ],
            22: [ 1, 14 ],
            23: [ 1, 15 ],
            24: [ 1, 16 ]
        }, {
            14: [ 2, 17 ],
            15: [ 2, 17 ],
            16: [ 2, 17 ],
            19: [ 2, 17 ],
            20: [ 2, 17 ],
            22: [ 2, 17 ],
            23: [ 2, 17 ],
            24: [ 2, 17 ]
        }, {
            18: [ 2, 25 ],
            21: 41,
            27: 57,
            28: [ 1, 45 ],
            29: 58,
            30: [ 1, 42 ],
            31: [ 1, 43 ],
            32: [ 1, 44 ],
            33: 40,
            34: 46,
            35: [ 1, 47 ],
            38: 26
        }, {
            18: [ 2, 26 ]
        }, {
            18: [ 2, 30 ],
            28: [ 2, 30 ],
            30: [ 2, 30 ],
            31: [ 2, 30 ],
            32: [ 2, 30 ],
            35: [ 2, 30 ]
        }, {
            18: [ 2, 36 ],
            34: 59,
            35: [ 1, 60 ]
        }, {
            18: [ 2, 31 ],
            28: [ 2, 31 ],
            30: [ 2, 31 ],
            31: [ 2, 31 ],
            32: [ 2, 31 ],
            35: [ 2, 31 ]
        }, {
            18: [ 2, 32 ],
            28: [ 2, 32 ],
            30: [ 2, 32 ],
            31: [ 2, 32 ],
            32: [ 2, 32 ],
            35: [ 2, 32 ]
        }, {
            18: [ 2, 33 ],
            28: [ 2, 33 ],
            30: [ 2, 33 ],
            31: [ 2, 33 ],
            32: [ 2, 33 ],
            35: [ 2, 33 ]
        }, {
            18: [ 2, 34 ],
            28: [ 2, 34 ],
            30: [ 2, 34 ],
            31: [ 2, 34 ],
            32: [ 2, 34 ],
            35: [ 2, 34 ]
        }, {
            18: [ 2, 35 ],
            28: [ 2, 35 ],
            30: [ 2, 35 ],
            31: [ 2, 35 ],
            32: [ 2, 35 ],
            35: [ 2, 35 ]
        }, {
            18: [ 2, 38 ],
            35: [ 2, 38 ]
        }, {
            18: [ 2, 47 ],
            28: [ 2, 47 ],
            30: [ 2, 47 ],
            31: [ 2, 47 ],
            32: [ 2, 47 ],
            35: [ 2, 47 ],
            36: [ 1, 61 ],
            39: [ 2, 47 ]
        }, {
            35: [ 1, 62 ]
        }, {
            5: [ 2, 10 ],
            14: [ 2, 10 ],
            15: [ 2, 10 ],
            16: [ 2, 10 ],
            19: [ 2, 10 ],
            20: [ 2, 10 ],
            22: [ 2, 10 ],
            23: [ 2, 10 ],
            24: [ 2, 10 ]
        }, {
            21: 63,
            35: [ 1, 27 ],
            38: 26
        }, {
            5: [ 2, 11 ],
            14: [ 2, 11 ],
            15: [ 2, 11 ],
            16: [ 2, 11 ],
            19: [ 2, 11 ],
            20: [ 2, 11 ],
            22: [ 2, 11 ],
            23: [ 2, 11 ],
            24: [ 2, 11 ]
        }, {
            14: [ 2, 16 ],
            15: [ 2, 16 ],
            16: [ 2, 16 ],
            19: [ 2, 16 ],
            20: [ 2, 16 ],
            22: [ 2, 16 ],
            23: [ 2, 16 ],
            24: [ 2, 16 ]
        }, {
            5: [ 2, 19 ],
            14: [ 2, 19 ],
            15: [ 2, 19 ],
            16: [ 2, 19 ],
            19: [ 2, 19 ],
            20: [ 2, 19 ],
            22: [ 2, 19 ],
            23: [ 2, 19 ],
            24: [ 2, 19 ]
        }, {
            5: [ 2, 20 ],
            14: [ 2, 20 ],
            15: [ 2, 20 ],
            16: [ 2, 20 ],
            19: [ 2, 20 ],
            20: [ 2, 20 ],
            22: [ 2, 20 ],
            23: [ 2, 20 ],
            24: [ 2, 20 ]
        }, {
            5: [ 2, 21 ],
            14: [ 2, 21 ],
            15: [ 2, 21 ],
            16: [ 2, 21 ],
            19: [ 2, 21 ],
            20: [ 2, 21 ],
            22: [ 2, 21 ],
            23: [ 2, 21 ],
            24: [ 2, 21 ]
        }, {
            18: [ 1, 64 ]
        }, {
            18: [ 2, 24 ]
        }, {
            18: [ 2, 29 ],
            28: [ 2, 29 ],
            30: [ 2, 29 ],
            31: [ 2, 29 ],
            32: [ 2, 29 ],
            35: [ 2, 29 ]
        }, {
            18: [ 2, 37 ],
            35: [ 2, 37 ]
        }, {
            36: [ 1, 61 ]
        }, {
            21: 65,
            28: [ 1, 69 ],
            30: [ 1, 66 ],
            31: [ 1, 67 ],
            32: [ 1, 68 ],
            35: [ 1, 27 ],
            38: 26
        }, {
            18: [ 2, 46 ],
            28: [ 2, 46 ],
            30: [ 2, 46 ],
            31: [ 2, 46 ],
            32: [ 2, 46 ],
            35: [ 2, 46 ],
            39: [ 2, 46 ]
        }, {
            18: [ 1, 70 ]
        }, {
            5: [ 2, 22 ],
            14: [ 2, 22 ],
            15: [ 2, 22 ],
            16: [ 2, 22 ],
            19: [ 2, 22 ],
            20: [ 2, 22 ],
            22: [ 2, 22 ],
            23: [ 2, 22 ],
            24: [ 2, 22 ]
        }, {
            18: [ 2, 39 ],
            35: [ 2, 39 ]
        }, {
            18: [ 2, 40 ],
            35: [ 2, 40 ]
        }, {
            18: [ 2, 41 ],
            35: [ 2, 41 ]
        }, {
            18: [ 2, 42 ],
            35: [ 2, 42 ]
        }, {
            18: [ 2, 43 ],
            35: [ 2, 43 ]
        }, {
            5: [ 2, 18 ],
            14: [ 2, 18 ],
            15: [ 2, 18 ],
            16: [ 2, 18 ],
            19: [ 2, 18 ],
            20: [ 2, 18 ],
            22: [ 2, 18 ],
            23: [ 2, 18 ],
            24: [ 2, 18 ]
        } ],
        defaultActions: {
            17: [ 2, 1 ],
            25: [ 2, 28 ],
            38: [ 2, 26 ],
            57: [ 2, 24 ]
        },
        parseError: function(t, n) {
            throw new Error(t);
        },
        parse: function(t) {
            function v(e) {
                r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e;
            }
            function m() {
                var e;
                return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e;
            }
            var n = this, r = [ 0 ], i = [ null ], s = [], o = this.table, u = "", a = 0, f = 0, l = 0, c = 2, h = 1;
            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
            var p = this.lexer.yylloc;
            s.push(p);
            var d = this.lexer.options && this.lexer.options.ranges;
            typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
            var g, y, b, w, E, S, x = {}, T, N, C, k;
            for (;;) {
                b = r[r.length - 1];
                if (this.defaultActions[b]) w = this.defaultActions[b]; else {
                    if (g === null || typeof g == "undefined") g = m();
                    w = o[b] && o[b][g];
                }
                if (typeof w == "undefined" || !w.length || !w[0]) {
                    var L = "";
                    if (!l) {
                        k = [];
                        for (T in o[b]) this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                        this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {
                            text: this.lexer.match,
                            token: this.terminals_[g] || g,
                            line: this.lexer.yylineno,
                            loc: p,
                            expected: k
                        });
                    }
                }
                if (w[0] instanceof Array && w.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
                switch (w[0]) {
                  case 1:
                    r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                    break;
                  case 2:
                    N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {
                        first_line: s[s.length - (N || 1)].first_line,
                        last_line: s[s.length - 1].last_line,
                        first_column: s[s.length - (N || 1)].first_column,
                        last_column: s[s.length - 1].last_column
                    }, d && (x._$.range = [ s[s.length - (N || 1)].range[0], s[s.length - 1].range[1] ]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                    if (typeof S != "undefined") return S;
                    N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                    break;
                  case 3:
                    return !0;
                }
            }
            return !0;
        }
    }, t = function() {
        var e = {
            EOF: 1,
            parseError: function(t, n) {
                if (!this.yy.parser) throw new Error(t);
                this.yy.parser.parseError(t, n);
            },
            setInput: function(e) {
                return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
            },
            input: function() {
                var e = this._input[0];
                this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                var t = e.match(/(?:\r\n?|\n).*/g);
                return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
            },
            unput: function(e) {
                var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
                this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                var r = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                var i = this.yylloc.range;
                return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                }, this.options.ranges && (this.yylloc.range = [ i[0], i[0] + this.yyleng - t ]), this;
            },
            more: function() {
                return this._more = !0, this;
            },
            less: function(e) {
                this.unput(this.match.slice(e));
            },
            pastInput: function() {
                var e = this.matched.substr(0, this.matched.length - this.match.length);
                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function() {
                var e = this.match;
                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function() {
                var e = this.pastInput(), t = (new Array(e.length + 1)).join("-");
                return e + this.upcomingInput() + "\n" + t + "^";
            },
            next: function() {
                if (this.done) return this.EOF;
                this._input || (this.done = !0);
                var e, t, n, r, i, s;
                this._more || (this.yytext = "", this.match = "");
                var o = this._currentRules();
                for (var u = 0; u < o.length; u++) {
                    n = this._input.match(this.rules[o[u]]);
                    if (n && (!t || n[0].length > t[0].length)) {
                        t = n, r = u;
                        if (!this.options.flex) break;
                    }
                }
                if (t) {
                    s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                    }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                    if (e) return e;
                    return;
                }
                return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function() {
                var t = this.next();
                return typeof t != "undefined" ? t : this.lex();
            },
            begin: function(t) {
                this.conditionStack.push(t);
            },
            popState: function() {
                return this.conditionStack.pop();
            },
            _currentRules: function() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function(t) {
                this.begin(t);
            }
        };
        return e.options = {}, e.performAction = function(t, n, r, i) {
            var s = i;
            switch (r) {
              case 0:
                n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                if (n.yytext) return 14;
                break;
              case 1:
                return 14;
              case 2:
                return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
              case 3:
                return n.yytext = n.yytext.substr(0, n.yyleng - 4), this.popState(), 15;
              case 4:
                return this.begin("par"), 24;
              case 5:
                return 16;
              case 6:
                return 20;
              case 7:
                return 19;
              case 8:
                return 19;
              case 9:
                return 23;
              case 10:
                return 23;
              case 11:
                this.popState(), this.begin("com");
                break;
              case 12:
                return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
              case 13:
                return 22;
              case 14:
                return 36;
              case 15:
                return 35;
              case 16:
                return 35;
              case 17:
                return 39;
              case 18:
                break;
              case 19:
                return this.popState(), 18;
              case 20:
                return this.popState(), 18;
              case 21:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 30;
              case 22:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\'/g, "'"), 30;
              case 23:
                return n.yytext = n.yytext.substr(1), 28;
              case 24:
                return 32;
              case 25:
                return 32;
              case 26:
                return 31;
              case 27:
                return 35;
              case 28:
                return n.yytext = n.yytext.substr(1, n.yyleng - 2), 35;
              case 29:
                return "INVALID";
              case 30:
                break;
              case 31:
                return this.popState(), 37;
              case 32:
                return 5;
            }
        }, e.rules = [ /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:\s+)/, /^(?:[a-zA-Z0-9_$-/]+)/, /^(?:$)/ ], e.conditions = {
            mu: {
                rules: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32 ],
                inclusive: !1
            },
            emu: {
                rules: [ 2 ],
                inclusive: !1
            },
            com: {
                rules: [ 3 ],
                inclusive: !1
            },
            par: {
                rules: [ 30, 31 ],
                inclusive: !1
            },
            INITIAL: {
                rules: [ 0, 1, 32 ],
                inclusive: !0
            }
        }, e;
    }();
    return e.lexer = t, n.prototype = e, e.Parser = n, new n;
}();

Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
    return e.constructor === Handlebars.AST.ProgramNode ? e : (Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e));
}, Handlebars.print = function(e) {
    return (new Handlebars.PrintVisitor).accept(e);
}, function() {
    Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
        this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t));
    }, Handlebars.AST.MustacheNode = function(e, t, n) {
        this.type = "mustache", this.escaped = !n, this.hash = t;
        var r = this.id = e[0], i = this.params = e.slice(1), s = this.eligibleHelper = r.isSimple;
        this.isHelper = s && (i.length || t);
    }, Handlebars.AST.PartialNode = function(e, t) {
        this.type = "partial", this.partialName = e, this.context = t;
    };
    var e = function(e, t) {
        if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original);
    };
    Handlebars.AST.BlockNode = function(t, n, r, i) {
        e(t.id, i), this.type = "block", this.mustache = t, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = !0);
    }, Handlebars.AST.ContentNode = function(e) {
        this.type = "content", this.string = e;
    }, Handlebars.AST.HashNode = function(e) {
        this.type = "hash", this.pairs = e;
    }, Handlebars.AST.IdNode = function(e) {
        this.type = "ID", this.original = e.join(".");
        var t = [], n = 0;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            if (s === ".." || s === "." || s === "this") {
                if (t.length > 0) throw new Handlebars.Exception("Invalid path: " + this.original);
                s === ".." ? n++ : this.isScoped = !0;
            } else t.push(s);
        }
        this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = e.length === 1 && !this.isScoped && n === 0, this.stringModeValue = this.string;
    }, Handlebars.AST.PartialNameNode = function(e) {
        this.type = "PARTIAL_NAME", this.name = e;
    }, Handlebars.AST.DataNode = function(e) {
        this.type = "DATA", this.id = e;
    }, Handlebars.AST.StringNode = function(e) {
        this.type = "STRING", this.string = e, this.stringModeValue = e;
    }, Handlebars.AST.IntegerNode = function(e) {
        this.type = "INTEGER", this.integer = e, this.stringModeValue = Number(e);
    }, Handlebars.AST.BooleanNode = function(e) {
        this.type = "BOOLEAN", this.bool = e, this.stringModeValue = e === "true";
    }, Handlebars.AST.CommentNode = function(e) {
        this.type = "comment", this.comment = e;
    };
}();

var errorProps = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];

Handlebars.Exception = function(e) {
    var t = Error.prototype.constructor.apply(this, arguments);
    for (var n = 0; n < errorProps.length; n++) this[errorProps[n]] = t[errorProps[n]];
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
    this.string = e;
}, Handlebars.SafeString.prototype.toString = function() {
    return this.string.toString();
}, function() {
    var e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, t = /[&<>"'`]/g, n = /[&<>"'`]/, r = function(t) {
        return e[t] || "&amp;";
    };
    Handlebars.Utils = {
        escapeExpression: function(e) {
            return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e;
        },
        isEmpty: function(e) {
            return !e && e !== 0 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1;
        }
    };
}(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {}, function(e, t) {
    e.prototype = {
        compiler: e,
        disassemble: function() {
            var e = this.opcodes, t, n = [], r, i;
            for (var s = 0, o = e.length; s < o; s++) {
                t = e[s];
                if (t.opcode === "DECLARE") n.push("DECLARE " + t.name + "=" + t.value); else {
                    r = [];
                    for (var u = 0; u < t.args.length; u++) i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                    n.push(t.opcode + " " + r.join(" "));
                }
            }
            return n.join("\n");
        },
        equals: function(e) {
            var t = this.opcodes.length;
            if (e.opcodes.length !== t) return !1;
            for (var n = 0; n < t; n++) {
                var r = this.opcodes[n], i = e.opcodes[n];
                if (r.opcode !== i.opcode || r.args.length !== i.args.length) return !1;
                for (var s = 0; s < r.args.length; s++) if (r.args[s] !== i.args[s]) return !1;
            }
            return !0;
        },
        guid: 0,
        compile: function(e, t) {
            this.children = [], this.depths = {
                list: []
            }, this.options = t;
            var n = this.options.knownHelpers;
            this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            };
            if (n) for (var r in n) this.options.knownHelpers[r] = n[r];
            return this.program(e);
        },
        accept: function(e) {
            return this[e.type](e);
        },
        program: function(e) {
            var t = e.statements, n;
            this.opcodes = [];
            for (var r = 0, i = t.length; r < i; r++) n = t[r], this[n.type](n);
            return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function(e, t) {
                return e - t;
            }), this;
        },
        compileProgram: function(e) {
            var t = (new this.compiler).compile(e, this.options), n = this.guid++, r;
            this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
            for (var i = 0, s = t.depths.list.length; i < s; i++) {
                r = t.depths.list[i];
                if (r < 2) continue;
                this.addDepth(r - 1);
            }
            return n;
        },
        block: function(e) {
            var t = e.mustache, n = e.program, r = e.inverse;
            n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
            var i = this.classifyMustache(t);
            i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
        },
        hash: function(e) {
            var t = e.pairs, n, r;
            this.opcode("pushHash");
            for (var i = 0, s = t.length; i < s; i++) n = t[i], r = n[1], this.options.stringParams ? this.opcode("pushStringParam", r.stringModeValue, r.type) : this.accept(r), this.opcode("assignToHash", n[0]);
            this.opcode("popHash");
        },
        partial: function(e) {
            var t = e.partialName;
            this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.name), this.opcode("append");
        },
        content: function(e) {
            this.opcode("appendContent", e.string);
        },
        mustache: function(e) {
            var t = this.options, n = this.classifyMustache(e);
            n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
        },
        ambiguousMustache: function(e, t, n) {
            var r = e.id, i = r.parts[0], s = t != null || n != null;
            this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i, s);
        },
        simpleMustache: function(e) {
            var t = e.id;
            t.type === "DATA" ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda");
        },
        helperMustache: function(e, t, n) {
            var r = this.setupFullMustacheParams(e, t, n), i = e.id.parts[0];
            if (this.options.knownHelpers[i]) this.opcode("invokeKnownHelper", r.length, i); else {
                if (this.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
                this.opcode("invokeHelper", r.length, i);
            }
        },
        ID: function(e) {
            this.addDepth(e.depth), this.opcode("getContext", e.depth);
            var t = e.parts[0];
            t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
            for (var n = 1, r = e.parts.length; n < r; n++) this.opcode("lookup", e.parts[n]);
        },
        DATA: function(e) {
            this.options.data = !0, this.opcode("lookupData", e.id);
        },
        STRING: function(e) {
            this.opcode("pushString", e.string);
        },
        INTEGER: function(e) {
            this.opcode("pushLiteral", e.integer);
        },
        BOOLEAN: function(e) {
            this.opcode("pushLiteral", e.bool);
        },
        comment: function() {},
        opcode: function(e) {
            this.opcodes.push({
                opcode: e,
                args: [].slice.call(arguments, 1)
            });
        },
        declare: function(e, t) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: e,
                value: t
            });
        },
        addDepth: function(e) {
            if (isNaN(e)) throw new Error("EWOT");
            if (e === 0) return;
            this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e));
        },
        classifyMustache: function(e) {
            var t = e.isHelper, n = e.eligibleHelper, r = this.options;
            if (n && !t) {
                var i = e.id.parts[0];
                r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1);
            }
            return t ? "helper" : n ? "ambiguous" : "simple";
        },
        pushParams: function(e) {
            var t = e.length, n;
            while (t--) n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type)) : this[n.type](n);
        },
        setupMustacheParams: function(e) {
            var t = e.params;
            return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), t;
        },
        setupFullMustacheParams: function(e, t, n) {
            var r = e.params;
            return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), r;
        }
    };
    var n = function(e) {
        this.value = e;
    };
    t.prototype = {
        nameLookup: function(e, n) {
            return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']";
        },
        appendToBuffer: function(e) {
            return this.environment.isSimple ? "return " + e + ";" : {
                appendToBuffer: !0,
                content: e,
                toString: function() {
                    return "buffer += " + e + ";";
                }
            };
        },
        initializeBuffer: function() {
            return this.quotedString("");
        },
        namespace: "Handlebars",
        compile: function(e, t, n, r) {
            this.environment = e, this.options = t || {}, Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                programs: [],
                environments: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t);
            var i = e.opcodes, s;
            this.i = 0;
            for (o = i.length; this.i < o; this.i++) s = i[this.i], s.opcode === "DECLARE" ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
            return this.createFunctionContext(r);
        },
        nextOpcode: function() {
            var e = this.environment.opcodes;
            return e[this.i + 1];
        },
        eat: function() {
            this.i = this.i + 1;
        },
        preamble: function() {
            var e = [];
            if (!this.isChild) {
                var t = this.namespace, n = "helpers = helpers || " + t + ".helpers;";
                this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), this.options.data && (n += " data = data || {};"), e.push(n);
            } else e.push("");
            this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e;
        },
        createFunctionContext: function(e) {
            var t = this.stackVars.concat(this.registers.list);
            t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
            if (!this.isChild) for (var n in this.context.aliases) this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n];
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
            var r = this.isChild ? [ "depth0", "data" ] : [ "Handlebars", "depth0", "helpers", "partials", "data" ];
            for (var i = 0, s = this.environment.depths.list.length; i < s; i++) r.push("depth" + this.environment.depths.list[i]);
            var o = this.mergeSource();
            if (!this.isChild) {
                var u = Handlebars.COMPILER_REVISION, a = Handlebars.REVISION_CHANGES[u];
                o = "this.compilerInfo = [" + u + ",'" + a + "'];\n" + o;
            }
            if (e) return r.push(o), Function.apply(this, r);
            var f = "function " + (this.name || "") + "(" + r.join(",") + ") {\n  " + o + "}";
            return Handlebars.log(Handlebars.logger.DEBUG, f + "\n\n"), f;
        },
        mergeSource: function() {
            var e = "", t;
            for (var n = 0, r = this.source.length; n < r; n++) {
                var i = this.source[n];
                i.appendToBuffer ? t ? t = t + "\n    + " + i.content : t = i.content : (t && (e += "buffer += " + t + ";\n  ", t = undefined), e += i + "\n  ");
            }
            return e;
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = [ "depth0" ];
            this.setupParams(0, e), this.replaceStack(function(t) {
                return e.splice(1, 0, t), "blockHelperMissing.call(" + e.join(", ") + ")";
            });
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var e = [ "depth0" ];
            this.setupParams(0, e);
            var t = this.topStack();
            e.splice(1, 0, t), e[e.length - 1] = "options", this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }");
        },
        appendContent: function(e) {
            this.source.push(this.appendToBuffer(this.quotedString(e)));
        },
        append: function() {
            this.flushInline();
            var e = this.popStack();
            this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }");
        },
        appendEscaped: function() {
            this.context.aliases.escapeExpression = "this.escapeExpression", this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
        },
        getContext: function(e) {
            this.lastContext !== e && (this.lastContext = e);
        },
        lookupOnContext: function(e) {
            this.push(this.nameLookup("depth" + this.lastContext, e, "context"));
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext);
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(e) {
                return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e;
            });
        },
        lookup: function(e) {
            this.replaceStack(function(t) {
                return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context");
            });
        },
        lookupData: function(e) {
            this.push(this.nameLookup("data", e, "data"));
        },
        pushStringParam: function(e, t) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(t), typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e);
        },
        emptyHash: function() {
            this.pushStackLiteral("{}"), this.options.stringParams && this.register("hashTypes", "{}");
        },
        pushHash: function() {
            this.hash = {
                values: [],
                types: []
            };
        },
        popHash: function() {
            var e = this.hash;
            this.hash = undefined, this.options.stringParams && this.register("hashTypes", "{" + e.types.join(",") + "}"), this.push("{\n    " + e.values.join(",\n    ") + "\n  }");
        },
        pushString: function(e) {
            this.pushStackLiteral(this.quotedString(e));
        },
        push: function(e) {
            return this.inlineStack.push(e), e;
        },
        pushLiteral: function(e) {
            this.pushStackLiteral(e);
        },
        pushProgram: function(e) {
            e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null);
        },
        invokeHelper: function(e, t) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var n = this.lastHelper = this.setupHelper(e, t, !0);
            this.push(n.name), this.replaceStack(function(e) {
                return e + " ? " + e + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")";
            });
        },
        invokeKnownHelper: function(e, t) {
            var n = this.setupHelper(e, t);
            this.push(n.name + ".call(" + n.callParams + ")");
        },
        invokeAmbiguous: function(e, t) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var n = this.setupHelper(0, e, t), r = this.lastHelper = this.nameLookup("helpers", e, "helper"), i = this.nameLookup("depth" + this.lastContext, e, "context"), s = this.nextStack();
            this.source.push("if (" + s + " = " + r + ") { " + s + " = " + s + ".call(" + n.callParams + "); }"), this.source.push("else { " + s + " = " + i + "; " + s + " = typeof " + s + " === functionType ? " + s + ".apply(depth0) : " + s + "; }");
        },
        invokePartial: function(e) {
            var t = [ this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials" ];
            this.options.data && t.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + t.join(", ") + ")");
        },
        assignToHash: function(e) {
            var t = this.popStack(), n;
            this.options.stringParams && (n = this.popStack(), this.popStack());
            var r = this.hash;
            n && r.types.push("'" + e + "': " + n), r.values.push("'" + e + "': (" + t + ")");
        },
        compiler: t,
        compileChildren: function(e, t) {
            var n = e.children, r, i;
            for (var s = 0, o = n.length; s < o; s++) {
                r = n[s], i = new this.compiler;
                var u = this.matchExistingProgram(r);
                u == null ? (this.context.programs.push(""), u = this.context.programs.length, r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context), this.context.environments[u] = r) : (r.index = u, r.name = "program" + u);
            }
        },
        matchExistingProgram: function(e) {
            for (var t = 0, n = this.context.environments.length; t < n; t++) {
                var r = this.context.environments[t];
                if (r && r.equals(e)) return t;
            }
        },
        programExpression: function(e) {
            this.context.aliases.self = "this";
            if (e == null) return "self.noop";
            var t = this.environment.children[e], n = t.depths.list, r, i = [ t.index, t.name, "data" ];
            for (var s = 0, o = n.length; s < o; s++) r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
            return n.length === 0 ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")");
        },
        register: function(e, t) {
            this.useRegister(e), this.source.push(e + " = " + t + ";");
        },
        useRegister: function(e) {
            this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e));
        },
        pushStackLiteral: function(e) {
            return this.push(new n(e));
        },
        pushStack: function(e) {
            this.flushInline();
            var t = this.incrStack();
            return e && this.source.push(t + " = " + e + ";"), this.compileStack.push(t), t;
        },
        replaceStack: function(e) {
            var t = "", r = this.isInline(), i;
            if (r) {
                var s = this.popStack(!0);
                if (s instanceof n) i = s.value; else {
                    var o = this.stackSlot ? this.topStackName() : this.incrStack();
                    t = "(" + this.push(o) + " = " + s + "),", i = this.topStack();
                }
            } else i = this.topStack();
            var u = e.call(this, i);
            return r ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + t + u + ")")) : (/^stack/.test(i) || (i = this.nextStack()), this.source.push(i + " = (" + t + u + ");")), i;
        },
        nextStack: function() {
            return this.pushStack();
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
        },
        topStackName: function() {
            return "stack" + this.stackSlot;
        },
        flushInline: function() {
            var e = this.inlineStack;
            if (e.length) {
                this.inlineStack = [];
                for (var t = 0, r = e.length; t < r; t++) {
                    var i = e[t];
                    i instanceof n ? this.compileStack.push(i) : this.pushStack(i);
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length;
        },
        popStack: function(e) {
            var t = this.isInline(), r = (t ? this.inlineStack : this.compileStack).pop();
            return !e && r instanceof n ? r.value : (t || this.stackSlot--, r);
        },
        topStack: function(e) {
            var t = this.isInline() ? this.inlineStack : this.compileStack, r = t[t.length - 1];
            return !e && r instanceof n ? r.value : r;
        },
        quotedString: function(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
        },
        setupHelper: function(e, t, n) {
            var r = [];
            this.setupParams(e, r, n);
            var i = this.nameLookup("helpers", t, "helper");
            return {
                params: r,
                name: i,
                callParams: [ "depth0" ].concat(r).join(", "),
                helperMissingParams: n && [ "depth0", this.quotedString(t) ].concat(r).join(", ")
            };
        },
        setupParams: function(e, t, n) {
            var r = [], i = [], s = [], o, u, a;
            r.push("hash:" + this.popStack()), u = this.popStack(), a = this.popStack();
            if (a || u) a || (this.context.aliases.self = "this", a = "self.noop"), u || (this.context.aliases.self = "this", u = "self.noop"), r.push("inverse:" + u), r.push("fn:" + a);
            for (var f = 0; f < e; f++) o = this.popStack(), t.push(o), this.options.stringParams && (s.push(this.popStack()), i.push(this.popStack()));
            return this.options.stringParams && (r.push("contexts:[" + i.join(",") + "]"), r.push("types:[" + s.join(",") + "]"), r.push("hashTypes:hashTypes")), this.options.data && r.push("data:data"), r = "{" + r.join(",") + "}", n ? (this.register("options", r), t.push("options")) : t.push(r), t.join(", ");
        }
    };
    var r = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), i = t.RESERVED_WORDS = {};
    for (var s = 0, o = r.length; s < o; s++) i[r[s]] = !0;
    t.isValidJavaScriptVariableName = function(e) {
        return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1;
    };
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
    if (!e || typeof e != "string" && e.constructor !== Handlebars.AST.ProgramNode) throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
    t = t || {}, "data" in t || (t.data = !0);
    var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t);
    return (new Handlebars.JavaScriptCompiler).compile(r, t);
}, Handlebars.compile = function(e, t) {
    function r() {
        var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t), i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
        return Handlebars.template(i);
    }
    if (!e || typeof e != "string" && e.constructor !== Handlebars.AST.ProgramNode) throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
    t = t || {}, "data" in t || (t.data = !0);
    var n;
    return function(e, t) {
        return n || (n = r()), n.call(this, e, t);
    };
}, Handlebars.VM = {
    template: function(e) {
        var t = {
            escapeExpression: Handlebars.Utils.escapeExpression,
            invokePartial: Handlebars.VM.invokePartial,
            programs: [],
            program: function(e, t, n) {
                var r = this.programs[e];
                return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r);
            },
            programWithDepth: Handlebars.VM.programWithDepth,
            noop: Handlebars.VM.noop,
            compilerInfo: null
        };
        return function(n, r) {
            r = r || {};
            var i = e.call(t, Handlebars, n, r.helpers, r.partials, r.data), s = t.compilerInfo || [], o = s[0] || 1, u = Handlebars.COMPILER_REVISION;
            if (o !== u) {
                if (o < u) {
                    var a = Handlebars.REVISION_CHANGES[u], f = Handlebars.REVISION_CHANGES[o];
                    throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + a + ") or downgrade your runtime to an older version (" + f + ").";
                }
                throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + s[1] + ").";
            }
            return i;
        };
    },
    programWithDepth: function(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function(n, i) {
            return i = i || {}, e.apply(this, [ n, i.data || t ].concat(r));
        };
    },
    program: function(e, t) {
        return function(n, r) {
            return r = r || {}, e(n, r.data || t);
        };
    },
    noop: function() {
        return "";
    },
    invokePartial: function(e, t, n, r, i, s) {
        var o = {
            helpers: r,
            partials: i,
            data: s
        };
        if (e === undefined) throw new Handlebars.Exception("The partial " + t + " could not be found");
        if (e instanceof Function) return e(n, o);
        if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
        return i[t] = Handlebars.compile(e, {
            data: s !== undefined
        }), i[t](n, o);
    }
}, Handlebars.template = Handlebars.VM.template, define("libs/handlebars", function(e) {
    return function() {
        var t, n;
        return t || e.Handlebars;
    };
}(this)), define("components/app-view", [ "libs/backbone" ], function(e) {
    function t() {
        this.showView = function(e, t, n) {
            this.currentView && this.currentView.close(), this.currentView = e, this.currentView.render(t, n), this.currentView.id === "detailView" ? $("#content").prepend(this.currentView.el) : $("#content").html(this.currentView.el);
        };
    }
    return t;
}), define("templates/templates", [ "libs/handlebars" ], function(e) {
    return this.hbs = this.hbs || {}, this.hbs.about = e.template(function(e, t, n, r, i) {
        return this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {}, '<div class="row1 about">\r\n	<div class="column_6 col1">\r\n		<h1>About me</h1>\r\n		<section class="about-me">\r\n			<p class="intro">I\'m Vicki Keeley, a front end web developer from London. I hate writing \'About Me\' pages so here are some key facts instead:</p>\r\n			<p><strong>Born:</strong>1980, Bristol</p>\r\n			<p><strong>Lives:</strong>Plaistow, London</p>\r\n			<p><strong>Pets:</strong>Random the cat</p>\r\n			<p><strong>In my spare time I...</strong>experiment with new code stuff, play computer games, read books, listen to music, climb fake rocks indoors.</p>\r\n			<p><strong>If you\'re making a brew I\'ll have...</strong>Redbush tea, milk, no sugar.</p>\r\n			<p><strong>When I was growing up I wanted to be...</strong>A wizard or a hero. Or a heroic wizard.</p>\r\n			<p><strong>Fave games:</strong>Anything where I get to be a hero/wizard (see previous comment). Currently I\'m quite addicted to Guild Wars 2.</p>\r\n			<p><strong>Fave authors:</strong>Jeanette Winterson, Murakami, David Mitchell, Bronte, Jasper Fforde, Ali Smith and loads more. Love books &lsaquo;3.</p>\r\n			<p><strong>Fave music:</strong>Anything from Chase &amp; Status to Joan Jett &amp; The Blackhearts to Suzanne Vega to Mussorgsky. Love music &lsaquo;3.</p>\r\n		</section>\r\n	</div>\r\n	<div class="column_6 col2">\r\n		<section class="contact">\r\n			<h2>Find me on the interwebs...</h2>\r\n			<a href="http://uk.linkedin.com/in/vickikeeley/" target="_blank" class="social"><img src="images/linkedin.png" alt="LinkedIn">LinkedIn</a>\r\n			<a href="" target="_blank" class="social"><img src="images/twitter.png" alt="Twitter">Twitter</a>\r\n			<h2>Get in touch...</h2>\r\n			<a href="mailto:hello@srsly.me.uk" target="_blank" class="mailto">hello@srsly.me.uk</a>\r\n		</section>\r\n	</div>\r\n</div>\r\n';
    }), this.hbs.detail = e.template(function(e, t, n, r, i) {
        function c(e, t) {
            return '\r\n		<a href="#labs">&laquo; Back to list</a>\r\n	';
        }
        function h(e, t) {
            return '\r\n		<a href="#work">&laquo; Back to list</a>\r\n	';
        }
        function p(e, t) {
            var n = "", r;
            return n += '\r\n				<a href="' + f((r = (r = e.attributes, r == null || r === !1 ? r : r.url), typeof r === a ? r.apply(e) : r)) + '" target="_blank">' + f((r = (r = e.attributes, r == null || r === !1 ? r : r.url), typeof r === a ? r.apply(e) : r)) + "</a>\r\n			", n;
        }
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u, a = "function", f = this.escapeExpression, l = this;
        s += '<div class="row1 detail-view">\r\n	', u = n["if"].call(t, (o = t.attributes, o == null || o === !1 ? o : o.labs), {
            hash: {},
            inverse: l.program(3, h, i),
            fn: l.program(1, c, i),
            data: i
        });
        if (u || u === 0) s += u;
        s += '\r\n	<div class="column_6 col1">\r\n		<img src="' + f((o = (o = (o = t.attributes, o == null || o === !1 ? o : o.images), o == null || o === !1 ? o : o[0]), typeof o === a ? o.apply(t) : o)) + '" alt="' + f((o = (o = t.attributes, o == null || o === !1 ? o : o.title), typeof o === a ? o.apply(t) : o)) + '">\r\n	</div>\r\n	<div class="column_6 col2">\r\n		<div class="project-details">\r\n			<h1>' + f((o = (o = t.attributes, o == null || o === !1 ? o : o.title), typeof o === a ? o.apply(t) : o)) + "</h1>\r\n			<p>", u = (o = (o = t.attributes, o == null || o === !1 ? o : o.description), typeof o === a ? o.apply(t) : o);
        if (u || u === 0) s += u;
        s += "</p>\r\n			", u = n["if"].call(t, (o = t.attributes, o == null || o === !1 ? o : o.url), {
            hash: {},
            inverse: l.noop,
            fn: l.program(5, p, i),
            data: i
        });
        if (u || u === 0) s += u;
        return s += '\r\n			<section id="skills">\r\n				<h2>skills = [' + f((o = (o = t.attributes, o == null || o === !1 ? o : o.skills), typeof o === a ? o.apply(t) : o)) + "];</h2>\r\n			</section>\r\n		</div>\r\n	</div>\r\n</div>\r\n", s;
    }), this.hbs.home = e.template(function(e, t, n, r, i) {
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u = "function", a = this.escapeExpression;
        return s += '<div class="main-image">\r\n	<div class="img1">\r\n		<img src="' + a((o = (o = (o = (o = t[0], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.images), o == null || o === !1 ? o : o[0]), typeof o === u ? o.apply(t) : o)) + '" alt="' + a((o = (o = (o = t[0], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.title), typeof o === u ? o.apply(t) : o)) + '"/>\r\n	</div>\r\n	<div class="img2">\r\n		<img src="' + a((o = (o = (o = (o = t[1], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.images), o == null || o === !1 ? o : o[0]), typeof o === u ? o.apply(t) : o)) + '" alt="' + a((o = (o = (o = t[1], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.title), typeof o === u ? o.apply(t) : o)) + '"/>\r\n	</div>\r\n	<div class="img3">\r\n		<img src="' + a((o = (o = (o = (o = t[2], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.images), o == null || o === !1 ? o : o[0]), typeof o === u ? o.apply(t) : o)) + '" alt="' + a((o = (o = (o = t[2], o == null || o === !1 ? o : o.attributes), o == null || o === !1 ? o : o.title), typeof o === u ? o.apply(t) : o)) + '"/>\r\n	</div>\r\n</div>\r\n<div class="row1">\r\n	<div class="column_6 col1">\r\n		<section id="intro">\r\n			<h1 class="inline-title">Hello World!</h1>\r\n			<p>Welcome to my small corner of the interwebs. I\'m a front end web developer who\'s serious about making great web experiences across all manner of platforms and projects. I\'ve been lucky enough to work for some of the world\'s biggest brands inlcluding Xbox, Premier Inn, Colgate, SAP etc - you can take a look at my <a href="#work">WORK</a> here. When I\'m not coding, I\'m generally... coding, so take a look at some of my \'for fun\' projects in the <a href="#labs">LABS</a> section.</p>\r\n		</section>\r\n		<section id="skills">\r\n			<h2>mainSkills = [HTML(5), CSS(3), JavaScript, jQuery];</h2>\r\n			<h3>haveUsed = [knockout.js, backbone.js, require.js, node.js, grunt, stylus];</h3>\r\n			<h3>otherSkills = [WordPress theme development, web design, branding];</h3>\r\n		</section>\r\n	</div>\r\n	<div class="column_6 col2">\r\n		<nav class="feature-nav">\r\n			<ul>\r\n				<li class="first"><span>{}</span><a href="#work">Work</a></li>\r\n				<li class="second"><span><></span><a href="#labs">Labs</a></li>\r\n				<li class="third"><span>:)</span><a href="#about">About</a></li>\r\n			</ul>\r\n		</nav>\r\n		<section class="twitter">\r\n			<h2>Twitter</h2>\r\n			<a class="twitter-timeline" href="https://twitter.com/srsly_vicki/dev-stuff" data-widget-id="361460682681643008" data-tweet-limit="1" height="100px" data-chrome="noheader transparent noborders">Tweets from @srsly_vicki/dev-stuff</a>\r\n			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>\r\n\r\n		</section>\r\n	</div>\r\n</div>', s;
    }), this.hbs.labs = e.template(function(e, t, n, r, i) {
        function l(e, t) {
            var r = "", i, s;
            r += "\r\n		", s = n["if"].call(e, (i = e.attributes, i == null || i === !1 ? i : i.labs), {
                hash: {},
                inverse: f.noop,
                fn: f.program(2, c, t),
                data: t
            });
            if (s || s === 0) r += s;
            return r += "\r\n	", r;
        }
        function c(e, t) {
            var r = "", i;
            return r += '\r\n			<li class="column_4" data-id="', (i = n.id) ? i = i.call(e, {
                hash: {},
                data: t
            }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\r\n				<img src="' + a((i = (i = (i = e.attributes, i == null || i === !1 ? i : i.images), i == null || i === !1 ? i : i[0]), typeof i === u ? i.apply(e) : i)) + '" alt="' + a((i = (i = e.attributes, i == null || i === !1 ? i : i.title), typeof i === u ? i.apply(e) : i)) + '">\r\n			</li>\r\n		', r;
        }
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u = "function", a = this.escapeExpression, f = this;
        s += '<section class="labs-intro">\r\n	<h1>Labs</h1>\r\n	<p>Below you can find a few of the personal projects I\'ve taken on as a way to learn new stuff. Be warned, they\'re not exactly polished and probably work best in a modern browser ;)</p>\r\n</section>\r\n<ul class="folio-list labs-list">\r\n	', o = n.each.call(t, t.models, {
            hash: {},
            inverse: f.noop,
            fn: f.program(1, l, i),
            data: i
        });
        if (o || o === 0) s += o;
        return s += "\r\n</ul>", s;
    }), this.hbs.labsThumbs = e.template(function(e, t, n, r, i) {
        function l(e, t) {
            var r = "", i, s;
            r += "\r\n		", s = n["if"].call(e, (i = e.attributes, i == null || i === !1 ? i : i.labs), {
                hash: {},
                inverse: f.noop,
                fn: f.program(2, c, t),
                data: t
            });
            if (s || s === 0) r += s;
            return r += "\r\n	", r;
        }
        function c(e, t) {
            var r = "", i, s;
            return r += '\r\n			<li class="column_2">\r\n				<img src="' + a((i = (i = (i = e.attributes, i == null || i === !1 ? i : i.images), i == null || i === !1 ? i : i[0]), typeof i === u ? i.apply(e) : i)) + '" alt="' + a((i = (i = e.attributes, i == null || i === !1 ? i : i.title), typeof i === u ? i.apply(e) : i)) + '" data-id="', (s = n.id) ? s = s.call(e, {
                hash: {},
                data: t
            }) : (s = e.id, s = typeof s === u ? s.apply(e) : s), r += a(s) + '">\r\n			</li>\r\n		', r;
        }
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u = "function", a = this.escapeExpression, f = this;
        s += '<a class="column_1 scroll-left" href="">&lsaquo;</a>\r\n<div class="slider">\r\n	<ul class="list">\r\n	', o = n.each.call(t, t.models, {
            hash: {},
            inverse: f.noop,
            fn: f.program(1, l, i),
            data: i
        });
        if (o || o === 0) s += o;
        return s += '\r\n	</ul>\r\n</div>\r\n<a class="column_1 scroll-right" href="">&rsaquo;</a>\r\n', s;
    }), this.hbs.projectThumbs = e.template(function(e, t, n, r, i) {
        function l(e, t) {
            var r = "", i, s;
            r += "\r\n		", s = n.unless.call(e, (i = e.attributes, i == null || i === !1 ? i : i.labs), {
                hash: {},
                inverse: f.noop,
                fn: f.program(2, c, t),
                data: t
            });
            if (s || s === 0) r += s;
            return r += "\r\n	", r;
        }
        function c(e, t) {
            var r = "", i, s;
            return r += '\r\n			<li class="column_2">\r\n				<img src="' + a((i = (i = (i = e.attributes, i == null || i === !1 ? i : i.images), i == null || i === !1 ? i : i[0]), typeof i === u ? i.apply(e) : i)) + '" alt="' + a((i = (i = e.attributes, i == null || i === !1 ? i : i.title), typeof i === u ? i.apply(e) : i)) + '" data-id="', (s = n.id) ? s = s.call(e, {
                hash: {},
                data: t
            }) : (s = e.id, s = typeof s === u ? s.apply(e) : s), r += a(s) + '">\r\n			</li>\r\n			', r;
        }
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u = "function", a = this.escapeExpression, f = this;
        s += '<a class="column_1 scroll-left" href="">&lsaquo;</a>\r\n<div class="slider">\r\n	<ul class="list">\r\n	', o = n.each.call(t, t.models, {
            hash: {},
            inverse: f.noop,
            fn: f.program(1, l, i),
            data: i
        });
        if (o || o === 0) s += o;
        return s += '\r\n	</ul>\r\n</div>\r\n<a class="column_1 scroll-right" href="">&rsaquo;</a>\r\n', s;
    }), this.hbs.work = e.template(function(e, t, n, r, i) {
        function l(e, t) {
            var r = "", i, s;
            r += "\r\n		", s = n.unless.call(e, (i = e.attributes, i == null || i === !1 ? i : i.labs), {
                hash: {},
                inverse: f.noop,
                fn: f.program(2, c, t),
                data: t
            });
            if (s || s === 0) r += s;
            return r += "\r\n	", r;
        }
        function c(e, t) {
            var r = "", i;
            return r += '\r\n			<li class="column_4" data-id="', (i = n.id) ? i = i.call(e, {
                hash: {},
                data: t
            }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\r\n				<img src="' + a((i = (i = (i = e.attributes, i == null || i === !1 ? i : i.images), i == null || i === !1 ? i : i[0]), typeof i === u ? i.apply(e) : i)) + '" alt="' + a((i = (i = e.attributes, i == null || i === !1 ? i : i.title), typeof i === u ? i.apply(e) : i)) + '">\r\n			</li>\r\n		', r;
        }
        this.compilerInfo = [ 2, ">= 1.0.0-rc.3" ], n = n || e.helpers, i = i || {};
        var s = "", o, u = "function", a = this.escapeExpression, f = this;
        s += '<ul class="folio-list">\r\n	', o = n.each.call(t, t.models, {
            hash: {},
            inverse: f.noop,
            fn: f.program(1, l, i),
            data: i
        });
        if (o || o === 0) s += o;
        return s += "\r\n</ul>\r\n<section id=\"client-list\">\r\n	<h2>clientList = ['Premier Inn', 'Colgate', 'Xbox', 'SAP Banking', 'Whitbread', 'Premier League', 'Nestle', 'Microsoft'];</h2>\r\n</section>", s;
    }), this.hbs;
}), define("components/models", [ "libs/underscore", "libs/backbone" ], function(e, t) {
    var n = t.Model.extend({
        defaults: {
            id: "",
            title: "",
            images: [],
            description: "",
            skills: []
        }
    }), r = t.Collection.extend({
        model: n,
        byId: function(e) {
            for (var t = 0; t < this.models.length; t++) if (this.models[t].attributes.id === e) return this.models[t];
        }
    }), i = new r;
    return i.add([ new n({
        labs: !1,
        id: "reviews",
        title: "Colgate Review Centre",
        images: [ "images/reviews1.png" ],
        description: "The Colgate Review Centre is a single page JS app that allows customers to leave a review for Colgate products. It makes heavy use of the BazaarVoice API - a 3rd party product reviews service - to populate the product list and product details etc. The site is built in javascript/jQuery using require.js to manage AMD dependencies and grunt for automation. Templating is handled by handlebars and CSS is pre-processed using Stylus. It's also responsive and has a very different user journey on mobile.",
        skills: [ "HTML", " CSS", " jQuery", " Stylus", " Require", " node", " grunt", " Responsive", " API" ]
    }), new n({
        labs: !1,
        id: "sap",
        title: "SAP Banking View",
        images: [ "images/sap1.png", "images/sap1_list.png", "images/sap1_thumb.png" ],
        description: "The SAP Banking View blog is a fully responsive WordPress site with a few custom widgets and the like. It's built on the skeleton framework and uses device detection as well as media queries to provide the best possible experience across mobile and tablet platforms (including old-school Blackberry!). I did a bit of everything on this one - PHP for the theme development, HTML, CSS, bits of jQuery and setting up the CMS ready to be taken on by our content strategist.",
        skills: [ "HTML", " CSS", " jQuery", " PHP", " WordPress", " Responsive" ]
    }), new n({
        labs: !1,
        id: "ciol",
        title: "Premier Inn Check-in Online",
        images: [ "images/ciol1.png", "images/ciol1_list.png", "images/ciol1_thumb.png" ],
        description: "Check-in online is a major new addition to the booking process on the Premier Inn website. It allows users to avoid the hassle of checking-in when they arrive at the hotel whilst also prompting them to add meals and wifi etc to the their booking. I worked alongside a Senior Dev and was responsible for all the HTML and CSS development. The site uses some progressive enhancement techniques in regards to CSS3 styles and is designed to work in all browsers from ie6 upwards - lots of lovely cross-browser testing!",
        skills: [ "HTML", " CSS", " JavaScript" ]
    }), new n({
        labs: !1,
        id: "colgate",
        title: "Colgate Interdental Data Capture",
        images: [ "images/colgate1.png", "images/colgate1_list.png", "images/colgate1_thumb.png" ],
        description: "The new Colgate Total Interdental toothpaste launched with a campaign offering people free samples, so I built a data capture page where they could leave their details in order to receive the sample. It's not hugely complex, but it is fully responsive and uses a third party CRM system to host the form and collect the data. The third party software is pretty archaic (tables!) so part of the challenge was making it work with the designs as best as possible.",
        skills: [ "HTML", " CSS", " jQuery", " Responsive" ]
    }), new n({
        labs: !1,
        id: "xbox",
        title: "Xbox CRM",
        images: [ "images/xbox1.png", "images/xbox1_list.png", "images/xbox1_thumb.png" ],
        description: "Xbox have a massive global CRM programme in Europe covering 23 different markets and broadcasting to more than 8 million people. Each bespoke email is built using an XSLT template, allowing us to pass each locale's content through it via an XML document and generate HTML emails that can be broadcast from Exact Target.<br><br> I have the dubious honour of being Technical Team Leader for the Xbox account, which means having final sign-off of all emails prior to broadcast as well as overseeing one other developer.",
        skills: [ "HTML", " XSLT", " XML", " AMPScript", " Exact Target" ]
    }), new n({
        labs: !1,
        id: "tep",
        title: "The Empowerment Plan",
        images: [ "images/ellie1.png", "images/ellie1_list.png", "images/ellie1_thumb.png" ],
        description: "The Empowerment Plan is a system for rediscovering/maintaining wellbeing for people who are suffering from chronic health conditions. I was asked to design and build a site that would provide people with information about the plan and its practitioner and encourage them to give it a go. I did everything from branding to site design to build",
        skills: [ "HTML", " CSS", " jQuery", " Web Design", " Branding" ]
    }), new n({
        labs: !1,
        id: "srsly",
        title: "SRSLY Website",
        images: [ "images/srsly1.png", "images/srsly1_list.png", "images/srsly1_thumb.png" ],
        description: "This website was a bit of a sandbox project for me and allowed me to try out a whole host of technologies without an end  client to pander to. It's built as a single page JavaScript app using Backbone.js and Require JS. It uses Handlebars templates and Stylus CSS preprocessing and my development environment whilst building it was based on node.js with grunt to automate stuff. <br><br>It's responsive and uses some fancy CSS3 transforms etc, which degrade gracefully (ish) in older browsers",
        skills: [ "HTML", " CSS", " jQuery", " Stylus", " Backbone", " Require", " node", " grunt", " Responsive" ]
    }), new n({
        labs: !0,
        id: "tamagotchi",
        title: "Tamagotchi Town!",
        images: [ "images/tama1.png" ],
        description: "Tamagotchi Town was my first forray into object oriented programming in JS. It also has a bunch of CSS3 bits and bobs that I wanted to try out at the time - particularly the '3D' text etc. It's pretty silly and very much a first attempt at OO JS, but it has cats and everything on the internet is better with cats, right?<br><br>Note: I'm pretty sure this doesn't work in IE!",
        skills: [ "HTML", " CSS3", " jQuery", " OO JavaScript" ],
        url: "http://labs.srsly.me.uk/tamagotchi"
    }), new n({
        labs: !0,
        id: "profitTracker",
        title: "GW2 Profit Tracker",
        images: [ "images/profitTracker.png" ],
        description: "The GW2 profit tracker is a little project that I came up with as an excuse to try to out Knockout.js. It uses 2-way data bindings between the view and the view-model to update the UI automatically when inputs are changed. Having since looked at Knockout in a bit more detail, I would probably re-do this so that there was less JS in the DOM and make more use of custom bindings, but as a first introduction to the framework I found this pretty helpful.",
        skills: [ "HTML", " CSS", " jQuery", " Knockout.js" ],
        url: "http://labs.srsly.me.uk/profit-tracker"
    }), new n({
        labs: !0,
        id: "srsly-labs",
        title: "SRSLY Website",
        images: [ "images/srsly1.png", "images/srsly1_list.png", "images/srsly1_thumb.png" ],
        description: "This website was a bit of a sandbox project for me and allowed me to try out a whole host of technologies without an end  client to pander to. It's built as a single page JavaScript app using Backbone.js and Require JS. It uses Handlebars templates and Stylus CSS preprocessing and my development environment whilst building it was based on node.js with grunt to automate stuff. <br><br>It's responsive and uses some fancy CSS3 transforms etc, which degrade gracefully (ish) in older browsers",
        skills: [ "HTML", " CSS", " jQuery", " Stylus", " Backbone", " Require", " node", " grunt", " Responsive" ],
        url: "https://github.com/fruitbat2000/SRSLY_v3"
    }), new n({
        labs: !0,
        id: "css-transforms",
        title: "CSS 3D Transforms",
        images: [ "images/rollovers.png" ],
        description: "A selection of rollovers using CSS3 transforms, including some snazzy 3D ones. Some of them are pretty OTT, but it was a useful introduction to how some of the more complicated transforms work. <br><br> They should all have fallbacks, but if you want to see them in their full glory, you'll need to be using a nice, modern browser such as Chrome.",
        skills: [ "HTML", " CSS3" ],
        url: "http://labs.srsly.me.uk/css-transforms"
    }) ]), i;
}), define("components/home-view", [ "templates/templates", "components/models", "libs/handlebars", "libs/backbone" ], function(e, t, n, r) {
    var i = t.models, s = r.View.extend({
        el: "#main",
        tmpl: hbs.home,
        render: function() {
            return this.$el.html(this.tmpl(i)), this;
        }
    });
    return s;
}), define("components/list-view", [ "templates/templates", "components/models", "libs/handlebars", "libs/backbone" ], function(e, t, n, r) {
    var i = r.View.extend({
        el: "#main",
        collection: t,
        initialize: function() {
            window.location.hash === "#work" ? this.tmpl = hbs.work : this.tmpl = hbs.labs;
        },
        render: function() {
            return this.$el.html(this.tmpl(this.collection)), this.initEvents(), this;
        },
        initEvents: function() {
            var e = this;
            this.$el.on("click", "li", function(t) {
                var n = $(this).data("id");
                e.trigger("detailView", n), $("html, body").animate({
                    scrollTop: 0
                }, 400);
            });
        }
    });
    return i;
}), define("components/detail-view", [ "templates/templates", "libs/handlebars", "libs/backbone" ], function(e, t, n) {
    var r = n.View.extend({
        id: "detailView",
        el: "#main",
        tmpl: hbs.detail,
        render: function(e, t) {
            return this.$el.html(this.tmpl(t.byId(e))), this;
        }
    });
    return r;
}), define("components/thumbs-view", [ "templates/templates", "components/models", "libs/handlebars", "libs/backbone" ], function(e, t, n, r) {
    var i = r.View.extend({
        tagName: "section",
        id: "project-thumbs",
        collection: t,
        events: {
            "click .list img": "triggerRoute"
        },
        initialize: function() {
            var e = window.location.hash.replace(/\/.*/, "");
            e === "#work" ? this.tmpl = hbs.projectThumbs : this.tmpl = hbs.labsThumbs;
        },
        render: function(e) {
            return this.$el.html(this.tmpl(t)), this.$el.appendTo($("#content")), this.initElements(e), this.sortCarousel(), this.initEvents(), this;
        },
        initElements: function(e) {
            this.$scrollable = this.$el.find(".slider"), this.$scrollLeft = this.$el.find(".scroll-right"), this.$scrollRight = this.$el.find(".scroll-left"), this.$currentProjectImg = this.$el.find('[data-id="' + e + '"]'), this.$projectList = this.$el.find("ul.list"), this.$thumbnails = this.$el.find("ul.list img");
        },
        initEvents: function() {
            var e = this;
            this.$scrollLeft.click(function(t) {
                t.preventDefault(), e.$scrollable.animate({
                    scrollLeft: e.$scrollable[0].scrollLeft + 200
                }, 200, function() {
                    return !1;
                });
            }), this.$scrollRight.click(function(t) {
                t.preventDefault(), e.$scrollable.animate({
                    scrollLeft: e.$scrollable[0].scrollLeft - 200
                }, 200, function() {
                    return !1;
                });
            });
        },
        triggerRoute: function(e) {
            var t = $(e.target).data("id");
            return this.trigger("detailView", t), this.$thumbnails.fadeTo(0, .5), $(e.target).fadeTo(0, 1), $("html, body").animate({
                scrollTop: 0
            }, 400), !1;
        },
        sortCarousel: function() {
            this.$currentProjectImg.fadeTo(0, 1);
        }
    });
    return i;
}), define("components/about-view", [ "templates/templates", "components/models", "libs/handlebars", "libs/backbone" ], function(e, t, n, r) {
    var i = t.models, s = r.View.extend({
        el: "#main",
        tmpl: hbs.about,
        render: function() {
            return this.$el.html(this.tmpl(i)), this;
        }
    });
    return s;
}), require.config({
    shim: {
        "libs/handlebars": {
            exports: "Handlebars"
        },
        "libs/underscore": {
            exports: "_"
        },
        "libs/backbone": {
            deps: [ "libs/underscore", "libs/jquery" ],
            exports: "Backbone"
        }
    }
}), require([ "libs/underscore", "libs/backbone", "libs/handlebars", "components/app-view", "components/home-view", "components/list-view", "components/detail-view", "components/thumbs-view", "components/about-view", "components/models" ], function(e, t, n, r, i, s, o, u, a, f) {
    function c() {
        var e = new l;
        this.start = function() {
            t.history.start();
        };
    }
    t.View.prototype.close = function() {
        this.remove(), this.unbind();
    };
    var l = t.Router.extend({
        routes: {
            home: "home",
            work: "work",
            "work/:id": "folio",
            about: "about",
            labs: "labs",
            "labs/:id": "labFolio"
        },
        initialize: function() {
            this.appView = new r;
            var e = new i;
            this.appView.showView(e), this.folioColl = f;
        },
        home: function() {
            var e = new i;
            this.appView.showView(e);
        },
        work: function() {
            var e = this, t = new s;
            this.appView.showView(t), t.on("detailView", function(t) {
                e.navigate("work/" + t, {
                    trigger: !0
                });
            });
        },
        folio: function(e) {
            var t = this, n = new o, r = new u;
            this.appView.showView(n, e, this.folioColl), r.render(e), r.on("detailView", function(e) {
                t.navigate("work/" + e), t.appView.showView(n, e, t.folioColl);
            });
        },
        labs: function() {
            var e = this, t = new s;
            this.appView.showView(t), t.on("detailView", function(t) {
                e.navigate("labs/" + t, {
                    trigger: !0
                });
            });
        },
        labFolio: function(e) {
            var t = this, n = new o, r = new u;
            this.appView.showView(n, e, this.folioColl), r.render(e), r.on("detailView", function(e) {
                t.navigate("labs/" + e), t.appView.showView(n, e, t.folioColl);
            });
        },
        about: function() {
            var e = new a;
            this.appView.showView(e);
        }
    });
    (new c).start();
}), define("main", function() {});;