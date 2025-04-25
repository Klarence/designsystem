(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && r(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const o = e(i);
    fetch(i.href, o);
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis, ct = q.ShadowRoot && (q.ShadyCSS === void 0 || q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ht = Symbol(), _t = /* @__PURE__ */ new WeakMap();
let Dt = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== ht) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ct && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = _t.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && _t.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const se = (s) => new Dt(typeof s == "string" ? s : s + "", void 0, ht), G = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((r, i, o) => r + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + s[o + 1], s[0]);
  return new Dt(e, s, ht);
}, re = (s, t) => {
  if (ct) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), i = q.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = e.cssText, s.appendChild(r);
  }
}, yt = ct ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return se(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ie, defineProperty: oe, getOwnPropertyDescriptor: ne, getOwnPropertyNames: ae, getOwnPropertySymbols: le, getPrototypeOf: ce } = Object, $ = globalThis, wt = $.trustedTypes, he = wt ? wt.emptyScript : "", Y = $.reactiveElementPolyfillSupport, z = (s, t) => s, Z = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? he : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, dt = (s, t) => !ie(s, t), $t = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: dt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $.litPropertyMetadata ?? ($.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class L extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = $t) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
      i !== void 0 && oe(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: i, set: o } = ne(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const l = i == null ? void 0 : i.call(this);
      o.call(this, n), this.requestUpdate(t, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? $t;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const t = ce(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const e = this.properties, r = [...ae(e), ...le(e)];
      for (const i of r) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, i] of e) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const i = this._$Eu(e, r);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const i of r) e.unshift(yt(i));
    } else t !== void 0 && e.push(yt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return re(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const n = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : Z).toAttribute(e, r.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, i = r._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const n = r.getPropertyOptions(i), l = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((o = n.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? n.converter : Z;
      this._$Em = i, this[i] = l.fromAttribute(e, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    if (t !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(t)), !(r.hasChanged ?? dt)(this[t], e)) return;
      this.P(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, r) {
    this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, n] of i) n.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
L.elementStyles = [], L.shadowRootOptions = { mode: "open" }, L[z("elementProperties")] = /* @__PURE__ */ new Map(), L[z("finalized")] = /* @__PURE__ */ new Map(), Y == null || Y({ ReactiveElement: L }), ($.reactiveElementVersions ?? ($.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, K = R.trustedTypes, At = K ? K.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, jt = "$lit$", w = `lit$${Math.random().toFixed(9).slice(2)}$`, Vt = "?" + w, de = `<${Vt}>`, S = document, I = () => S.createComment(""), B = (s) => s === null || typeof s != "object" && typeof s != "function", ut = Array.isArray, ue = (s) => ut(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", Q = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Et = /-->/g, Ct = />/g, A = RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), St = /'/g, xt = /"/g, Ft = /^(?:script|style|textarea|title)$/i, pe = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), H = pe(1), x = Symbol.for("lit-noChange"), f = Symbol.for("lit-nothing"), Pt = /* @__PURE__ */ new WeakMap(), C = S.createTreeWalker(S, 129);
function qt(s, t) {
  if (!ut(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return At !== void 0 ? At.createHTML(t) : t;
}
const fe = (s, t) => {
  const e = s.length - 1, r = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = k;
  for (let l = 0; l < e; l++) {
    const a = s[l];
    let c, u, h = -1, _ = 0;
    for (; _ < a.length && (n.lastIndex = _, u = n.exec(a), u !== null); ) _ = n.lastIndex, n === k ? u[1] === "!--" ? n = Et : u[1] !== void 0 ? n = Ct : u[2] !== void 0 ? (Ft.test(u[2]) && (i = RegExp("</" + u[2], "g")), n = A) : u[3] !== void 0 && (n = A) : n === A ? u[0] === ">" ? (n = i ?? k, h = -1) : u[1] === void 0 ? h = -2 : (h = n.lastIndex - u[2].length, c = u[1], n = u[3] === void 0 ? A : u[3] === '"' ? xt : St) : n === xt || n === St ? n = A : n === Et || n === Ct ? n = k : (n = A, i = void 0);
    const y = n === A && s[l + 1].startsWith("/>") ? " " : "";
    o += n === k ? a + de : h >= 0 ? (r.push(c), a.slice(0, h) + jt + a.slice(h) + w + y) : a + w + (h === -2 ? l : y);
  }
  return [qt(s, o + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class D {
  constructor({ strings: t, _$litType$: e }, r) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const l = t.length - 1, a = this.parts, [c, u] = fe(t, e);
    if (this.el = D.createElement(c, r), C.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = C.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(jt)) {
          const _ = u[n++], y = i.getAttribute(h).split(w), V = /([.?@])?(.*)/.exec(_);
          a.push({ type: 1, index: o, name: V[2], strings: y, ctor: V[1] === "." ? ve : V[1] === "?" ? me : V[1] === "@" ? be : J }), i.removeAttribute(h);
        } else h.startsWith(w) && (a.push({ type: 6, index: o }), i.removeAttribute(h));
        if (Ft.test(i.tagName)) {
          const h = i.textContent.split(w), _ = h.length - 1;
          if (_ > 0) {
            i.textContent = K ? K.emptyScript : "";
            for (let y = 0; y < _; y++) i.append(h[y], I()), C.nextNode(), a.push({ type: 2, index: ++o });
            i.append(h[_], I());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Vt) a.push({ type: 2, index: o });
      else {
        let h = -1;
        for (; (h = i.data.indexOf(w, h + 1)) !== -1; ) a.push({ type: 7, index: o }), h += w.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const r = S.createElement("template");
    return r.innerHTML = t, r;
  }
}
function M(s, t, e = s, r) {
  var n, l;
  if (t === x) return t;
  let i = r !== void 0 ? (n = e._$Co) == null ? void 0 : n[r] : e._$Cl;
  const o = B(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), o === void 0 ? i = void 0 : (i = new o(s), i._$AT(s, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = i : e._$Cl = i), i !== void 0 && (t = M(s, i._$AS(s, t.values), i, r)), t;
}
class ge {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: r } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? S).importNode(e, !0);
    C.currentNode = i;
    let o = C.nextNode(), n = 0, l = 0, a = r[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new j(o, o.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (c = new _e(o, this, t)), this._$AV.push(c), a = r[++l];
      }
      n !== (a == null ? void 0 : a.index) && (o = C.nextNode(), n++);
    }
    return C.currentNode = S, i;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class j {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, i) {
    this.type = 2, this._$AH = f, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = M(this, t, e), B(t) ? t === f || t == null || t === "" ? (this._$AH !== f && this._$AR(), this._$AH = f) : t !== this._$AH && t !== x && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ue(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== f && B(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: r } = t, i = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = D.createElement(qt(r.h, r.h[0]), this.options)), r);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(e);
    else {
      const n = new ge(i, this), l = n.u(this.options);
      n.p(e), this.T(l), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Pt.get(t.strings);
    return e === void 0 && Pt.set(t.strings, e = new D(t)), e;
  }
  k(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, i = 0;
    for (const o of t) i === e.length ? e.push(r = new j(this.O(I()), this.O(I()), this, this.options)) : r = e[i], r._$AI(o), i++;
    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class J {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, i, o) {
    this.type = 1, this._$AH = f, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = f;
  }
  _$AI(t, e = this, r, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = M(this, t, e, 0), n = !B(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = o[0], a = 0; a < o.length - 1; a++) c = M(this, l[r + a], e, a), c === x && (c = this._$AH[a]), n || (n = !B(c) || c !== this._$AH[a]), c === f ? t = f : t !== f && (t += (c ?? "") + o[a + 1]), this._$AH[a] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === f ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ve extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === f ? void 0 : t;
  }
}
class me extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== f);
  }
}
class be extends J {
  constructor(t, e, r, i, o) {
    super(t, e, r, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = M(this, t, e, 0) ?? f) === x) return;
    const r = this._$AH, i = t === f && r !== f || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== f && (r === f || i);
    i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class _e {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    M(this, t);
  }
}
const tt = R.litHtmlPolyfillSupport;
tt == null || tt(D, j), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.2.1");
const ye = (s, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = r._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = i = new j(t.insertBefore(I(), o), o, void 0, e ?? {});
  }
  return i._$AI(s), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let N = class extends L {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ye(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return x;
  }
};
var Bt;
N._$litElement$ = !0, N.finalized = !0, (Bt = globalThis.litElementHydrateSupport) == null || Bt.call(globalThis, { LitElement: N });
const et = globalThis.litElementPolyfillSupport;
et == null || et({ LitElement: N });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
var we = G`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, $e = G`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`, it = "";
function ot(s) {
  it = s;
}
function Ae(s = "") {
  if (!it) {
    const t = [...document.getElementsByTagName("script")], e = t.find((r) => r.hasAttribute("data-shoelace"));
    if (e)
      ot(e.getAttribute("data-shoelace"));
    else {
      const r = t.find((o) => /shoelace(\.min)?\.js($|\?)/.test(o.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));
      let i = "";
      r && (i = r.getAttribute("src")), ot(i.split("/").slice(0, -1).join("/"));
    }
  }
  return it.replace(/\/$/, "") + (s ? `/${s.replace(/^\//, "")}` : "");
}
var Ee = {
  name: "default",
  resolver: (s) => Ae(`assets/icons/${s}.svg`)
}, Ce = Ee, Tt = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, Se = {
  name: "system",
  resolver: (s) => s in Tt ? `data:image/svg+xml,${encodeURIComponent(Tt[s])}` : ""
}, xe = Se, Pe = [Ce, xe], nt = [];
function Te(s) {
  nt.push(s);
}
function Le(s) {
  nt = nt.filter((t) => t !== s);
}
function Lt(s) {
  return Pe.find((t) => t.name === s);
}
var Wt = Object.defineProperty, Oe = Object.defineProperties, Me = Object.getOwnPropertyDescriptor, ke = Object.getOwnPropertyDescriptors, Ot = Object.getOwnPropertySymbols, Ue = Object.prototype.hasOwnProperty, ze = Object.prototype.propertyIsEnumerable, Zt = (s) => {
  throw TypeError(s);
}, Mt = (s, t, e) => t in s ? Wt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, pt = (s, t) => {
  for (var e in t || (t = {}))
    Ue.call(t, e) && Mt(s, e, t[e]);
  if (Ot)
    for (var e of Ot(t))
      ze.call(t, e) && Mt(s, e, t[e]);
  return s;
}, Re = (s, t) => Oe(s, ke(t)), d = (s, t, e, r) => {
  for (var i = r > 1 ? void 0 : r ? Me(t, e) : t, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (i = (r ? n(t, e, i) : n(i)) || i);
  return r && i && Wt(t, e, i), i;
}, Kt = (s, t, e) => t.has(s) || Zt("Cannot " + e), He = (s, t, e) => (Kt(s, t, "read from private field"), t.get(s)), Ne = (s, t, e) => t.has(s) ? Zt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(s) : t.set(s, e), Ie = (s, t, e, r) => (Kt(s, t, "write to private field"), t.set(s, e), e);
function X(s, t) {
  const e = pt({
    waitUntilFirstUpdate: !1
  }, t);
  return (r, i) => {
    const { update: o } = r, n = Array.isArray(s) ? s : [s];
    r.update = function(l) {
      n.forEach((a) => {
        const c = a;
        if (l.has(c)) {
          const u = l.get(c), h = this[c];
          u !== h && (!e.waitUntilFirstUpdate || this.hasUpdated) && this[i](u, h);
        }
      }), o.call(this, l);
    };
  };
}
var ft = G`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Be = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: dt }, De = (s = Be, t, e) => {
  const { kind: r, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), o.set(e.name, s), r === "accessor") {
    const { name: n } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, s);
    }, init(l) {
      return l !== void 0 && this.P(n, void 0, s), l;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, s);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function p(s) {
  return (t, e) => typeof e == "object" ? De(s, t, e) : ((r, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, n ? { ...r, wrapped: !0 } : r), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gt(s) {
  return p({ ...s, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const je = (s, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(s, t, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function vt(s, t) {
  return (e, r, i) => {
    const o = (n) => {
      var l;
      return ((l = n.renderRoot) == null ? void 0 : l.querySelector(s)) ?? null;
    };
    return je(e, r, { get() {
      return o(this);
    } });
  };
}
var W, P = class extends N {
  constructor() {
    super(), Ne(this, W, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([s, t]) => {
      this.constructor.define(s, t);
    });
  }
  emit(s, t) {
    const e = new CustomEvent(s, pt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(e), e;
  }
  /* eslint-enable */
  static define(s, t = this, e = {}) {
    const r = customElements.get(s);
    if (!r) {
      try {
        customElements.define(s, t, e);
      } catch {
        customElements.define(s, class extends t {
        }, e);
      }
      return;
    }
    let i = " (unknown version)", o = i;
    "version" in t && t.version && (i = " v" + t.version), "version" in r && r.version && (o = " v" + r.version), !(i && o && i === o) && console.warn(
      `Attempted to register <${s}>${i}, but <${s}>${o} has already been registered.`
    );
  }
  attributeChangedCallback(s, t, e) {
    He(this, W) || (this.constructor.elementProperties.forEach(
      (r, i) => {
        r.reflect && this[i] != null && this.initialReflectedProperties.set(i, this[i]);
      }
    ), Ie(this, W, !0)), super.attributeChangedCallback(s, t, e);
  }
  willUpdate(s) {
    super.willUpdate(s), this.initialReflectedProperties.forEach((t, e) => {
      s.has(e) && this[e] == null && (this[e] = t);
    });
  }
};
W = /* @__PURE__ */ new WeakMap();
P.version = "2.19.1";
P.dependencies = {};
d([
  p()
], P.prototype, "dir", 2);
d([
  p()
], P.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ve = (s, t) => (s == null ? void 0 : s._$litType$) !== void 0;
var U = Symbol(), F = Symbol(), st, rt = /* @__PURE__ */ new Map(), b = class extends P {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(s, t) {
    var e;
    let r;
    if (t != null && t.spriteSheet)
      return this.svg = H`<svg part="svg">
        <use part="use" href="${s}"></use>
      </svg>`, this.svg;
    try {
      if (r = await fetch(s, { mode: "cors" }), !r.ok) return r.status === 410 ? U : F;
    } catch {
      return F;
    }
    try {
      const i = document.createElement("div");
      i.innerHTML = await r.text();
      const o = i.firstElementChild;
      if (((e = o == null ? void 0 : o.tagName) == null ? void 0 : e.toLowerCase()) !== "svg") return U;
      st || (st = new DOMParser());
      const l = st.parseFromString(o.outerHTML, "text/html").body.querySelector("svg");
      return l ? (l.part.add("svg"), document.adoptNode(l)) : U;
    } catch {
      return U;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Te(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Le(this);
  }
  getIconSource() {
    const s = Lt(this.library);
    return this.name && s ? {
      url: s.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var s;
    const { url: t, fromLibrary: e } = this.getIconSource(), r = e ? Lt(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let i = rt.get(t);
    if (i || (i = this.resolveIcon(t, r), rt.set(t, i)), !this.initialRender)
      return;
    const o = await i;
    if (o === F && rt.delete(t), t === this.getIconSource().url) {
      if (Ve(o)) {
        if (this.svg = o, r) {
          await this.updateComplete;
          const n = this.shadowRoot.querySelector("[part='svg']");
          typeof r.mutator == "function" && n && r.mutator(n);
        }
        return;
      }
      switch (o) {
        case F:
        case U:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = o.cloneNode(!0), (s = r == null ? void 0 : r.mutator) == null || s.call(r, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
b.styles = [ft, $e];
d([
  gt()
], b.prototype, "svg", 2);
d([
  p({ reflect: !0 })
], b.prototype, "name", 2);
d([
  p()
], b.prototype, "src", 2);
d([
  p()
], b.prototype, "label", 2);
d([
  p({ reflect: !0 })
], b.prototype, "library", 2);
d([
  X("label")
], b.prototype, "handleLabelChange", 1);
d([
  X(["name", "src", "library"])
], b.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fe = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, qe = (s) => (...t) => ({ _$litDirective$: s, values: t });
let We = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, r) {
    this._$Ct = t, this._$AM = e, this._$Ci = r;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = qe(class extends We {
  constructor(s) {
    var t;
    if (super(s), s.type !== Fe.ATTRIBUTE || s.name !== "class" || ((t = s.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return " " + Object.keys(s).filter((t) => s[t]).join(" ") + " ";
  }
  update(s, [t]) {
    var r, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), s.strings !== void 0 && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in t) t[o] && !((r = this.nt) != null && r.has(o)) && this.st.add(o);
      return this.render(t);
    }
    const e = s.element.classList;
    for (const o of this.st) o in t || (e.remove(o), this.st.delete(o));
    for (const o in t) {
      const n = !!t[o];
      n === this.st.has(o) || (i = this.nt) != null && i.has(o) || (n ? (e.add(o), this.st.add(o)) : (e.remove(o), this.st.delete(o)));
    }
    return x;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gt = Symbol.for(""), Ze = (s) => {
  if ((s == null ? void 0 : s.r) === Gt) return s == null ? void 0 : s._$litStatic$;
}, kt = (s, ...t) => ({ _$litStatic$: t.reduce((e, r, i) => e + ((o) => {
  if (o._$litStatic$ !== void 0) return o._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r) + s[i + 1], s[0]), r: Gt }), Ut = /* @__PURE__ */ new Map(), Ke = (s) => (t, ...e) => {
  const r = e.length;
  let i, o;
  const n = [], l = [];
  let a, c = 0, u = !1;
  for (; c < r; ) {
    for (a = t[c]; c < r && (o = e[c], (i = Ze(o)) !== void 0); ) a += i + t[++c], u = !0;
    c !== r && l.push(o), n.push(a), c++;
  }
  if (c === r && n.push(t[r]), u) {
    const h = n.join("$$lit$$");
    (t = Ut.get(h)) === void 0 && (n.raw = n, Ut.set(h, t = n)), e = l;
  }
  return s(t, ...e);
}, Ge = Ke(H);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const m = (s) => s ?? f;
var g = class extends P {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(s) {
    this.disabled && (s.preventDefault(), s.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(s) {
    this.button.focus(s);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const s = !!this.href, t = s ? kt`a` : kt`button`;
    return Ge`
      <${t}
        part="base"
        class=${at({
      "icon-button": !0,
      "icon-button--disabled": !s && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${m(s ? void 0 : this.disabled)}
        type=${m(s ? void 0 : "button")}
        href=${m(s ? this.href : void 0)}
        target=${m(s ? this.target : void 0)}
        download=${m(s ? this.download : void 0)}
        rel=${m(s && this.target ? "noreferrer noopener" : void 0)}
        role=${m(s ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${m(this.name)}
          library=${m(this.library)}
          src=${m(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
  }
};
g.styles = [ft, we];
g.dependencies = { "sl-icon": b };
d([
  vt(".icon-button")
], g.prototype, "button", 2);
d([
  gt()
], g.prototype, "hasFocus", 2);
d([
  p()
], g.prototype, "name", 2);
d([
  p()
], g.prototype, "library", 2);
d([
  p()
], g.prototype, "src", 2);
d([
  p()
], g.prototype, "href", 2);
d([
  p()
], g.prototype, "target", 2);
d([
  p()
], g.prototype, "download", 2);
d([
  p()
], g.prototype, "label", 2);
d([
  p({ type: Boolean, reflect: !0 })
], g.prototype, "disabled", 2);
var Jt = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new WeakMap();
function Xe(s) {
  return s ?? { keyframes: [], options: { duration: 0 } };
}
function zt(s, t) {
  return t.toLowerCase() === "rtl" ? {
    keyframes: s.rtlKeyframes || s.keyframes,
    options: s.options
  } : s;
}
function Xt(s, t) {
  Jt.set(s, Xe(t));
}
function Rt(s, t, e) {
  const r = Je.get(s);
  if (r != null && r[t])
    return zt(r[t], e.dir);
  const i = Jt.get(t);
  return i ? zt(i, e.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function Ht(s, t) {
  return new Promise((e) => {
    function r(i) {
      i.target === s && (s.removeEventListener(t, r), e());
    }
    s.addEventListener(t, r);
  });
}
function Nt(s, t, e) {
  return new Promise((r) => {
    if ((e == null ? void 0 : e.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const i = s.animate(t, Re(pt({}, e), {
      duration: Ye() ? 0 : e.duration
    }));
    i.addEventListener("cancel", r, { once: !0 }), i.addEventListener("finish", r, { once: !0 });
  });
}
function Ye() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function It(s) {
  return Promise.all(
    s.getAnimations().map((t) => new Promise((e) => {
      t.cancel(), requestAnimationFrame(e);
    }))
  );
}
var Qe = class {
  constructor(s, ...t) {
    this.slotNames = [], this.handleSlotChange = (e) => {
      const r = e.target;
      (this.slotNames.includes("[default]") && !r.name || r.name && this.slotNames.includes(r.name)) && this.host.requestUpdate();
    }, (this.host = s).addController(this), this.slotNames = t;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((s) => {
      if (s.nodeType === s.TEXT_NODE && s.textContent.trim() !== "")
        return !0;
      if (s.nodeType === s.ELEMENT_NODE) {
        const t = s;
        if (t.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!t.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(s) {
    return this.host.querySelector(`:scope > [slot="${s}"]`) !== null;
  }
  test(s) {
    return s === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(s);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
const lt = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
let E, mt = "ltr", bt = "en";
const Yt = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Yt) {
  const s = new MutationObserver(te);
  mt = document.documentElement.dir || "ltr", bt = document.documentElement.lang || navigator.language, s.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function Qt(...s) {
  s.map((t) => {
    const e = t.$code.toLowerCase();
    O.has(e) ? O.set(e, Object.assign(Object.assign({}, O.get(e)), t)) : O.set(e, t), E || (E = t);
  }), te();
}
function te() {
  Yt && (mt = document.documentElement.dir || "ltr", bt = document.documentElement.lang || navigator.language), [...lt.keys()].map((s) => {
    typeof s.requestUpdate == "function" && s.requestUpdate();
  });
}
let ts = class {
  constructor(t) {
    this.host = t, this.host.addController(this);
  }
  hostConnected() {
    lt.add(this.host);
  }
  hostDisconnected() {
    lt.delete(this.host);
  }
  dir() {
    return `${this.host.dir || mt}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || bt}`.toLowerCase();
  }
  getTranslationData(t) {
    var e, r;
    const i = new Intl.Locale(t.replace(/_/g, "-")), o = i == null ? void 0 : i.language.toLowerCase(), n = (r = (e = i == null ? void 0 : i.region) === null || e === void 0 ? void 0 : e.toLowerCase()) !== null && r !== void 0 ? r : "", l = O.get(`${o}-${n}`), a = O.get(o);
    return { locale: i, language: o, region: n, primary: l, secondary: a };
  }
  exists(t, e) {
    var r;
    const { primary: i, secondary: o } = this.getTranslationData((r = e.lang) !== null && r !== void 0 ? r : this.lang());
    return e = Object.assign({ includeFallback: !1 }, e), !!(i && i[t] || o && o[t] || e.includeFallback && E && E[t]);
  }
  term(t, ...e) {
    const { primary: r, secondary: i } = this.getTranslationData(this.lang());
    let o;
    if (r && r[t])
      o = r[t];
    else if (i && i[t])
      o = i[t];
    else if (E && E[t])
      o = E[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof o == "function" ? o(...e) : o;
  }
  date(t, e) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), e).format(t);
  }
  number(t, e) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), e).format(t);
  }
  relativeTime(t, e, r) {
    return new Intl.RelativeTimeFormat(this.lang(), r).format(t, e);
  }
};
var ee = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (s, t) => `Go to slide ${s} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (s) => s === 0 ? "No options selected" : s === 1 ? "1 option selected" : `${s} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (s) => `Slide ${s}`,
  toggleColorFormat: "Toggle color format"
};
Qt(ee);
var es = ee, ss = class extends ts {
};
Qt(es);
var rs = G`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`, T = Object.assign(document.createElement("div"), { className: "sl-toast-stack" }), v = class extends P {
  constructor() {
    super(...arguments), this.hasSlotController = new Qe(this, "icon", "suffix"), this.localize = new ss(this), this.open = !1, this.closable = !1, this.variant = "primary", this.duration = 1 / 0, this.remainingTime = this.duration;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  restartAutoHide() {
    this.handleCountdownChange(), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval), this.open && this.duration < 1 / 0 && (this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration), this.remainingTime = this.duration, this.remainingTimeInterval = window.setInterval(() => {
      this.remainingTime -= 100;
    }, 100));
  }
  pauseAutoHide() {
    var s;
    (s = this.countdownAnimation) == null || s.pause(), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval);
  }
  resumeAutoHide() {
    var s;
    this.duration < 1 / 0 && (this.autoHideTimeout = window.setTimeout(() => this.hide(), this.remainingTime), this.remainingTimeInterval = window.setInterval(() => {
      this.remainingTime -= 100;
    }, 100), (s = this.countdownAnimation) == null || s.play());
  }
  handleCountdownChange() {
    if (this.open && this.duration < 1 / 0 && this.countdown) {
      const { countdownElement: s } = this, t = "100%", e = "0";
      this.countdownAnimation = s.animate([{ width: t }, { width: e }], {
        duration: this.duration,
        easing: "linear"
      });
    }
  }
  handleCloseClick() {
    this.hide();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"), this.duration < 1 / 0 && this.restartAutoHide(), await It(this.base), this.base.hidden = !1;
      const { keyframes: s, options: t } = Rt(this, "alert.show", { dir: this.localize.dir() });
      await Nt(this.base, s, t), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval), await It(this.base);
      const { keyframes: s, options: t } = Rt(this, "alert.hide", { dir: this.localize.dir() });
      await Nt(this.base, s, t), this.base.hidden = !0, this.emit("sl-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    if (!this.open)
      return this.open = !0, Ht(this, "sl-after-show");
  }
  /** Hides the alert */
  async hide() {
    if (this.open)
      return this.open = !1, Ht(this, "sl-after-hide");
  }
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((s) => {
      this.handleCountdownChange(), T.parentElement === null && document.body.append(T), T.appendChild(this), requestAnimationFrame(() => {
        this.clientWidth, this.show();
      }), this.addEventListener(
        "sl-after-hide",
        () => {
          T.removeChild(this), s(), T.querySelector("sl-alert") === null && T.remove();
        },
        { once: !0 }
      );
    });
  }
  render() {
    return H`
      <div
        part="base"
        class=${at({
      alert: !0,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-countdown": !!this.countdown,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? H`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? H`
              <div
                class=${at({
      alert__countdown: !0,
      "alert__countdown--ltr": this.countdown === "ltr"
    })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            ` : ""}
      </div>
    `;
  }
};
v.styles = [ft, rs];
v.dependencies = { "sl-icon-button": g };
d([
  vt('[part~="base"]')
], v.prototype, "base", 2);
d([
  vt(".alert__countdown-elapsed")
], v.prototype, "countdownElement", 2);
d([
  p({ type: Boolean, reflect: !0 })
], v.prototype, "open", 2);
d([
  p({ type: Boolean, reflect: !0 })
], v.prototype, "closable", 2);
d([
  p({ reflect: !0 })
], v.prototype, "variant", 2);
d([
  p({ type: Number })
], v.prototype, "duration", 2);
d([
  p({ type: String, reflect: !0 })
], v.prototype, "countdown", 2);
d([
  gt()
], v.prototype, "remainingTime", 2);
d([
  X("open", { waitUntilFirstUpdate: !0 })
], v.prototype, "handleOpenChange", 1);
d([
  X("duration")
], v.prototype, "handleDurationChange", 1);
Xt("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
Xt("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
v.define("sl-alert");
b.define("sl-icon");
ot("../../..");
