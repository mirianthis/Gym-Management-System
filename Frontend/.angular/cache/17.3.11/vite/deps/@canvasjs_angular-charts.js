import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-VBIE6LKH.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-M4XJ4RAE.js";
import "./chunk-CO2UG7VT.js";
import {
  __commonJS
} from "./chunk-WKYGNSYM.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function pa(d, q) {
        d.prototype = fb(q.prototype);
        d.prototype.constructor = d;
        d.base = q.prototype;
      }
      function fb(d) {
        function q() {
        }
        q.prototype = d;
        return new q();
      }
      function Za(d, q, l2) {
        "millisecond" === l2 ? d.setMilliseconds(d.getMilliseconds() + 1 * q) : "second" === l2 ? d.setSeconds(d.getSeconds() + 1 * q) : "minute" === l2 ? d.setMinutes(d.getMinutes() + 1 * q) : "hour" === l2 ? d.setHours(d.getHours() + 1 * q) : "day" === l2 ? d.setDate(d.getDate() + 1 * q) : "week" === l2 ? d.setDate(d.getDate() + 7 * q) : "month" === l2 ? d.setMonth(d.getMonth() + 1 * q) : "year" === l2 && d.setFullYear(d.getFullYear() + 1 * q);
        return d;
      }
      function $(d, q) {
        var l2 = false;
        0 > d && (l2 = true, d *= -1);
        d = "" + d;
        for (q = q ? q : 1; d.length < q; )
          d = "0" + d;
        return l2 ? "-" + d : d;
      }
      function Ha(d) {
        if (!d)
          return d;
        d = d.replace(/^\s\s*/, "");
        for (var q = /\s/, l2 = d.length; q.test(d.charAt(--l2)); )
          ;
        return d.slice(0, l2 + 1);
      }
      function za(d) {
        d.roundRect = function(d2, l2, t2, T, oa, B, w2, A2) {
          w2 && (this.fillStyle = w2);
          A2 && (this.strokeStyle = A2);
          "undefined" === typeof oa && (oa = 5);
          oa = Math.min(oa, Math.min(t2, T) / 2);
          this.lineWidth = B;
          this.beginPath();
          this.moveTo(d2 + oa, l2);
          this.lineTo(d2 + t2 - oa, l2);
          this.quadraticCurveTo(d2 + t2, l2, d2 + t2, l2 + oa);
          this.lineTo(d2 + t2, l2 + T - oa);
          this.quadraticCurveTo(d2 + t2, l2 + T, d2 + t2 - oa, l2 + T);
          this.lineTo(d2 + oa, l2 + T);
          this.quadraticCurveTo(d2, l2 + T, d2, l2 + T - oa);
          this.lineTo(d2, l2 + oa);
          this.quadraticCurveTo(d2, l2, d2 + oa, l2);
          this.closePath();
          w2 && this.fill();
          A2 && 0 < B && this.stroke();
        };
      }
      function Sa(d, q) {
        return d - q;
      }
      function U(d) {
        var q = ((d & 16711680) >> 16).toString(16), l2 = ((d & 65280) >> 8).toString(16);
        d = ((d & 255) >> 0).toString(16);
        q = 2 > q.length ? "0" + q : q;
        l2 = 2 > l2.length ? "0" + l2 : l2;
        d = 2 > d.length ? "0" + d : d;
        return "#" + q + l2 + d;
      }
      function gb(d, q) {
        var l2 = this.length >>> 0, t2 = Number(q) || 0, t2 = 0 > t2 ? Math.ceil(t2) : Math.floor(t2);
        for (0 > t2 && (t2 += l2); t2 < l2; t2++)
          if (t2 in this && this[t2] === d)
            return t2;
        return -1;
      }
      function l(d) {
        return null === d || "undefined" === typeof d;
      }
      function Ea(d) {
        d.indexOf || (d.indexOf = gb);
        return d;
      }
      function hb(d) {
        if (ua.fSDec)
          d[X("`eeDwdouMhrudods")](X("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            ua._fTWm && ua._fTWm(d);
          });
      }
      function $a(d, q, l2) {
        l2 = l2 || "normal";
        var t2 = d + "_" + q + "_" + l2, T = ab[t2];
        if (isNaN(T)) {
          try {
            if (!wa) {
              var oa = document.body;
              wa = document.createElement("span");
              wa.innerHTML = "";
              var B = document.createTextNode("Mpgyi");
              wa.appendChild(B);
              oa.appendChild(wa);
            }
            wa.style.display = "";
            J(wa, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: d, fontSize: q + "px", fontWeight: l2 });
            T = Math.round(wa.offsetHeight);
            wa.style.display = "none";
          } catch (w2) {
            T = Math.ceil(1.1 * q);
          }
          T = Math.max(T, q);
          ab[t2] = T;
        }
        return T;
      }
      function I(d, q) {
        var l2 = [];
        if (l2 = {
          solid: [],
          shortDash: [3, 1],
          shortDot: [1, 1],
          shortDashDot: [3, 1, 1, 1],
          shortDashDotDot: [3, 1, 1, 1, 1, 1],
          dot: [1, 2],
          dash: [4, 2],
          dashDot: [4, 2, 1, 2],
          longDash: [8, 2],
          longDashDot: [8, 2, 1, 2],
          longDashDotDot: [8, 2, 1, 2, 1, 2]
        }[d || "solid"])
          for (var t2 = 0; t2 < l2.length; t2++)
            l2[t2] *= q;
        else
          l2 = [];
        return l2;
      }
      function G(d, q, xa, t2, T) {
        t2 = t2 || [];
        T = l(T) ? ib ? { passive: false, capture: false } : false : T;
        t2.push([d, q, xa, T]);
        return d.addEventListener ? (d.addEventListener(q, xa, T), xa) : d.attachEvent ? (t2 = function(q2) {
          q2 = q2 || window.event;
          q2.preventDefault = q2.preventDefault || function() {
            q2.returnValue = false;
          };
          q2.stopPropagation = q2.stopPropagation || function() {
            q2.cancelBubble = true;
          };
          xa.call(
            d,
            q2
          );
        }, d.attachEvent("on" + q, t2), t2) : false;
      }
      function jb(d) {
        if (d._menuButton)
          d.exportEnabled ? (J(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), Ma(d._menuButton), sa(d, d._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && d._menuButton.childNodes[0] && J(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) : va(d._menuButton);
        else if (d.exportEnabled && t) {
          var q = false;
          d._menuButton = document.createElement("button");
          sa(d, d._menuButton, "menu");
          d._toolBar.appendChild(d._menuButton);
          G(d._menuButton, "touchstart", function(d2) {
            q = true;
          }, d.allDOMEventHandlers);
          G(d._menuButton, "click", function() {
            "none" !== d._dropdownMenu.style.display || d._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - d._dropDownCloseTime.getTime() || (d._dropdownMenu.style.display = "block", d._menuButton.blur(), d._dropdownMenu.focus());
          }, d.allDOMEventHandlers, true);
          G(d._menuButton, "mousemove", function() {
            q || (J(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColorOnHover, color: d.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && J(d._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, d.allDOMEventHandlers, true);
          G(d._menuButton, "mouseout", function() {
            q || (J(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && J(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, d.allDOMEventHandlers, true);
        }
        if (d.exportEnabled && d._dropdownMenu) {
          var l2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888";
          J(
            d._dropdownMenu,
            { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor, boxShadow: "2px 2px 10px " + l2 }
          );
          for (var l2 = d._dropdownMenu.childNodes, M = [d._cultureInfo.printText, d._cultureInfo.saveJPGText, d._cultureInfo.savePNGText], T = 0; T < M.length; T++)
            J(l2[T], { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), l2[T].innerHTML = M[T];
        } else
          !d._dropdownMenu && (d.exportEnabled && t) && (q = false, d._dropdownMenu = document.createElement("div"), d._dropdownMenu.setAttribute("tabindex", -1), l2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888", J(d._dropdownMenu, { position: "absolute", zIndex: 1, userSelect: "none", MozUserSeelct: "none", WebkitUserSelect: "none", msUserSelect: "none", cursor: "pointer", right: "0px", top: "25px", minWidth: "120px", outline: 0, fontSize: "14px", fontFamily: "Arial, Helvetica, sans-serif", padding: "5px 0px 5px 0px", textAlign: "left", lineHeight: "10px", backgroundColor: d.toolbar.itemBackgroundColor, boxShadow: "2px 2px 10px " + l2 }), d._dropdownMenu.style.display = "none", d._toolBar.appendChild(d._dropdownMenu), G(
            d._dropdownMenu,
            "blur",
            function() {
              va(d._dropdownMenu);
              d._dropDownCloseTime = /* @__PURE__ */ new Date();
            },
            d.allDOMEventHandlers,
            true
          ), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = d._cultureInfo.printText, l2.style.backgroundColor = d.toolbar.itemBackgroundColor, l2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(d2) {
            q = true;
          }, d.allDOMEventHandlers), G(
            l2,
            "mousemove",
            function() {
              q || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
            },
            d.allDOMEventHandlers,
            true
          ), G(l2, "mouseout", function() {
            q || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), G(l2, "click", function() {
            d.print();
            va(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = d._cultureInfo.saveJPGText, l2.style.backgroundColor = d.toolbar.itemBackgroundColor, l2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(d2) {
            q = true;
          }, d.allDOMEventHandlers), G(l2, "mousemove", function() {
            q || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), G(l2, "mouseout", function() {
            q || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), G(l2, "click", function() {
            d.exportChart({ format: "jpeg", fileName: d.exportFileName });
            va(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = d._cultureInfo.savePNGText, l2.style.backgroundColor = d.toolbar.itemBackgroundColor, l2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(d2) {
            q = true;
          }, d.allDOMEventHandlers), G(l2, "mousemove", function() {
            q || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), G(l2, "mouseout", function() {
            q || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), G(l2, "click", function() {
            d.exportChart({ format: "png", fileName: d.exportFileName });
            va(d._dropdownMenu);
          }, d.allDOMEventHandlers, true));
      }
      function bb(d, q, l2) {
        d *= ia;
        q *= ia;
        d = l2.getImageData(d, q, 2, 2).data;
        q = true;
        for (l2 = 0; 4 > l2; l2++)
          if (d[l2] !== d[l2 + 4] | d[l2] !== d[l2 + 8] | d[l2] !== d[l2 + 12]) {
            q = false;
            break;
          }
        return q ? d[0] << 16 | d[1] << 8 | d[2] : 0;
      }
      function ma(d, q, l2) {
        return d in q ? q[d] : l2[d];
      }
      function Na(d, q, xa, M) {
        t && cb ? (M = !l(M) && M ? d.getContext("2d", { willReadFrequently: true }) : d.getContext("2d"), Oa = M.webkitBackingStorePixelRatio || M.mozBackingStorePixelRatio || M.msBackingStorePixelRatio || M.oBackingStorePixelRatio || M.backingStorePixelRatio || 1, ia = Ta / Oa, d.width = q * ia, d.height = xa * ia, Ta !== Oa && (d.style.width = q + "px", d.style.height = xa + "px", M.scale(ia, ia))) : (d.width = q, d.height = xa);
      }
      function kb(d) {
        if (!lb) {
          var q = false, l2 = false;
          "undefined" === typeof qa.Chart.creditHref ? (d.creditHref = X("iuuqr;..b`ow`rkr/bnl."), d.creditText = X("B`ow`rKR/bnl")) : (q = d.updateOption("creditText"), l2 = d.updateOption("creditHref"));
          if (d.creditHref && d.creditText) {
            d._creditLink || (d._creditLink = document.createElement("a"), d._creditLink.setAttribute("class", "canvasjs-chart-credit"), d._creditLink.setAttribute("title", "JavaScript Charts"), J(d._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: d.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), d._creditLink.setAttribute("tabIndex", -1), d._creditLink.setAttribute("target", "_blank"));
            if (0 === d.renderCount || q || l2)
              d._creditLink.setAttribute("href", d.creditHref), d._creditLink.innerHTML = d.creditText;
            d._creditLink && d.creditHref && d.creditText ? (d._creditLink.parentElement || d._canvasJSContainer.appendChild(d._creditLink), d._creditLink.style.top = d.height - 14 + "px") : d._creditLink.parentElement && d._canvasJSContainer.removeChild(d._creditLink);
          }
        }
      }
      function ta(d, q, l2) {
        Ia && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var M = document.createElement("canvas");
        M.setAttribute("class", "canvasjs-chart-canvas");
        Na(M, d, q, l2);
        t || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(M);
        return M;
      }
      function J(d, q) {
        for (var l2 in q)
          d.style[l2] = q[l2];
      }
      function db(d) {
        return d.currentStyle ? d.currentStyle : window && window.getComputedStyle ? window.getComputedStyle(d, null) : d.style;
      }
      function sa(d, q, l2) {
        q.getAttribute("state") || (q.style.backgroundColor = d.toolbar.itemBackgroundColor, q.style.color = d.toolbar.fontColor, q.style.border = "none", J(q, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        q.getAttribute("state") !== l2 && (q.setAttribute("state", l2), q.setAttribute("type", "button"), J(q, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), q.innerHTML = "<img src='" + mb[l2].image + "' alt='" + d._cultureInfo[l2 + "Text"] + "' />", J(q.childNodes[0], { height: "95%", pointerEvents: "none" }));
        q.setAttribute("title", d._cultureInfo[l2 + "Text"]);
      }
      function Ma() {
        for (var d = null, q = 0; q < arguments.length; q++)
          d = arguments[q], d.style && (d.style.display = "inline");
      }
      function va() {
        for (var d = null, q = 0; q < arguments.length; q++)
          (d = arguments[q]) && d.style && (d.style.display = "none");
      }
      function Ua(d, q, l2, t2, T) {
        if (null === d || "undefined" === typeof d)
          return "undefined" === typeof l2 ? q : l2;
        d = parseFloat(d.toString()) * (0 <= d.toString().indexOf("%") ? q / 100 : 1);
        "undefined" !== typeof t2 && (d = Math.min(t2, d), "undefined" !== typeof T && (d = Math.max(T, d)));
        return !isNaN(d) && d <= q && 0 <= d ? d : "undefined" === typeof l2 ? q : l2;
      }
      function Y(d, q, t2, M, T) {
        this._defaultsKey = d;
        this._themeOptionsKey = q;
        this._index = M;
        this.parent = T;
        this._eventListeners = [];
        d = {};
        this.theme && l(this.parent) && l(q) && l(M) ? d = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[q]) && (null === M ? d = this.parent.themeOptions[q] : 0 < this.parent.themeOptions[q].length && (M = Math.min(this.parent.themeOptions[q].length - 1, M), d = this.parent.themeOptions[q][M]));
        this.themeOptions = d;
        this.options = t2 ? t2 : { _isPlaceholder: true };
        this.setOptions(this.options, d);
      }
      function Fa(d, q, l2, t2, T) {
        "undefined" === typeof T && (T = 0);
        this._padding = T;
        this._x1 = d;
        this._y1 = q;
        this._x2 = l2;
        this._y2 = t2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function ka(d, q) {
        ka.base.constructor.call(this, "TextBlock", null, q, null, null);
        this.ctx = d;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Va(d, q) {
        Va.base.constructor.call(this, "Toolbar", "toolbar", q, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Aa(d, q) {
        Aa.base.constructor.call(this, "Title", "title", q, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (l(this.options.margin) && d.options.subtitles) {
          for (var t2 = d.options.subtitles, M = 0; M < t2.length; M++)
            if ((l(t2[M].horizontalAlign) && "center" === this.horizontalAlign || t2[M].horizontalAlign === this.horizontalAlign) && (l(t2[M].verticalAlign) && "top" === this.verticalAlign || t2[M].verticalAlign === this.verticalAlign) && !t2[M].dockInsidePlotArea === !this.dockInsidePlotArea) {
              this.margin = 0;
              break;
            }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ja(d, q, l2) {
        Ja.base.constructor.call(this, "Subtitle", "subtitles", q, l2, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Wa() {
        this.pool = [];
      }
      function Ka(d) {
        var q;
        d && La[d] && (q = La[d]);
        Ka.base.constructor.call(this, "CultureInfo", null, q, null, null);
      }
      var Ia = false, ua = {}, t = !!document.createElement("canvas").getContext, qa = { Chart: {
        width: 500,
        height: 400,
        zoomEnabled: false,
        zoomType: "x",
        backgroundColor: "white",
        theme: "light1",
        animationEnabled: false,
        animationDuration: 1200,
        dataPointWidth: null,
        dataPointMinWidth: null,
        dataPointMaxWidth: null,
        colorSet: "colorSet1",
        culture: "en",
        creditText: "CanvasJS",
        interactivityEnabled: true,
        exportEnabled: false,
        exportFileName: "Chart",
        rangeChanging: null,
        rangeChanged: null,
        publicProperties: { title: "readWrite", subtitles: "readWrite", toolbar: "readWrite", toolTip: "readWrite", legend: "readWrite", axisX: "readWrite", axisY: "readWrite", axisX2: "readWrite", axisY2: "readWrite", data: "readWrite", options: "readWrite", bounds: "readOnly", container: "readOnly", selectedColorSet: "readOnly" }
      }, Title: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 20,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: t ? "transparent" : null,
        margin: 5,
        wrap: true,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: false,
        publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
      }, Subtitle: {
        padding: 0,
        text: null,
        verticalAlign: "top",
        horizontalAlign: "center",
        fontSize: 14,
        fontFamily: "Calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        margin: 2,
        wrap: true,
        maxWidth: null,
        textAlign: "center",
        dockInsidePlotArea: false,
        publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
      }, Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } }, Legend: {
        name: null,
        verticalAlign: "center",
        horizontalAlign: "right",
        fontSize: 14,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        cursor: null,
        itemmouseover: null,
        itemmouseout: null,
        itemmousemove: null,
        itemclick: null,
        dockInsidePlotArea: false,
        reversed: false,
        backgroundColor: t ? "transparent" : null,
        borderColor: t ? "transparent" : null,
        borderThickness: 0,
        cornerRadius: 0,
        maxWidth: null,
        maxHeight: null,
        markerMargin: null,
        itemMaxWidth: null,
        itemWidth: null,
        itemWrap: true,
        itemTextFormatter: null,
        publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
      }, ToolTip: {
        enabled: true,
        shared: false,
        animationEnabled: true,
        content: null,
        contentFormatter: null,
        reversed: false,
        backgroundColor: t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
        borderColor: null,
        borderThickness: 2,
        cornerRadius: 5,
        fontSize: 14,
        fontColor: "black",
        fontFamily: "Calibri, Arial, Georgia, serif;",
        fontWeight: "normal",
        fontStyle: "italic",
        updated: null,
        hidden: null,
        publicProperties: { options: "readWrite", chart: "readOnly" }
      }, Axis: {
        minimum: null,
        maximum: null,
        viewportMinimum: null,
        viewportMaximum: null,
        interval: null,
        intervalType: null,
        reversed: false,
        logarithmic: false,
        logarithmBase: 10,
        title: null,
        titleFontColor: "black",
        titleFontSize: 20,
        titleFontFamily: "arial",
        titleFontWeight: "normal",
        titleFontStyle: "normal",
        titleWrap: true,
        titleMaxWidth: null,
        titleBackgroundColor: t ? "transparent" : null,
        titleBorderColor: t ? "transparent" : null,
        titleBorderThickness: 0,
        titleCornerRadius: 0,
        titleTextAlign: "left",
        labelAngle: 0,
        labelFontFamily: "arial",
        labelFontColor: "black",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelAutoFit: true,
        labelWrap: true,
        labelMaxWidth: null,
        labelFormatter: null,
        labelBackgroundColor: t ? "transparent" : null,
        labelBorderColor: t ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelPlacement: "outside",
        labelTextAlign: "left",
        prefix: "",
        suffix: "",
        includeZero: false,
        tickLength: 5,
        tickColor: "black",
        tickThickness: 1,
        tickPlacement: "outside",
        lineColor: "black",
        lineThickness: 1,
        lineDashType: "solid",
        gridColor: "#A0A0A0",
        gridThickness: 0,
        gridDashType: "solid",
        interlacedColor: t ? "transparent" : null,
        valueFormatString: null,
        margin: 2,
        publicProperties: {
          options: "readWrite",
          stripLines: "readWrite",
          scaleBreaks: "readWrite",
          crosshair: "readWrite",
          bounds: "readOnly",
          chart: "readOnly"
        }
      }, StripLine: {
        value: null,
        startValue: null,
        endValue: null,
        color: "orange",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelPlacement: "inside",
        labelAlign: "far",
        labelWrap: true,
        labelMaxWidth: null,
        labelBackgroundColor: null,
        labelBorderColor: t ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: "arial",
        labelFontColor: "orange",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        labelTextAlign: "left",
        showOnTop: false,
        publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
      }, ScaleBreaks: { autoCalculate: false, collapsibleThreshold: "25%", maxNumberOfAutoBreaks: 2, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } }, Break: {
        startValue: null,
        endValue: null,
        spacing: 8,
        type: "straight",
        color: "#FFFFFF",
        fillOpacity: 0.9,
        lineThickness: 2,
        lineColor: "#E16E6E",
        lineDashType: "solid",
        publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
      }, Crosshair: { enabled: false, snapToDataPoint: false, color: "grey", opacity: null, thickness: 2, lineDashType: "solid", label: "", labelWrap: true, labelMaxWidth: null, labelTextAlign: "left", labelBackgroundColor: t ? "grey" : null, labelBorderColor: t ? "grey" : null, labelBorderThickness: 0, labelCornerRadius: 0, labelFontFamily: t ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 12, labelFontColor: "#fff", labelFontWeight: "normal", labelFontStyle: "normal", labelFormatter: null, valueFormatString: null, updated: null, hidden: null, publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" } }, DataSeries: {
        name: null,
        dataPoints: null,
        label: "",
        bevelEnabled: false,
        highlightEnabled: true,
        cursor: "default",
        indexLabel: "",
        indexLabelPlacement: "auto",
        indexLabelOrientation: "horizontal",
        indexLabelTextAlign: "left",
        indexLabelFontColor: "black",
        indexLabelFontSize: 12,
        indexLabelFontStyle: "normal",
        indexLabelFontFamily: "Arial",
        indexLabelFontWeight: "normal",
        indexLabelBackgroundColor: null,
        indexLabelBorderColor: null,
        indexLabelBorderThickness: 0,
        indexLabelLineColor: "gray",
        indexLabelLineThickness: 1,
        indexLabelLineDashType: "solid",
        indexLabelMaxWidth: null,
        indexLabelWrap: true,
        indexLabelFormatter: null,
        lineThickness: 2,
        lineDashType: "solid",
        connectNullData: false,
        nullDataLineDashType: "dash",
        color: null,
        lineColor: null,
        risingColor: "white",
        fallingColor: "red",
        fillOpacity: null,
        startAngle: 0,
        radius: null,
        innerRadius: null,
        explodeOnClick: true,
        neckHeight: null,
        neckWidth: null,
        reversed: false,
        valueRepresents: null,
        linkedDataSeriesIndex: null,
        whiskerThickness: 2,
        whiskerDashType: "solid",
        whiskerColor: null,
        whiskerLength: null,
        stemThickness: 2,
        stemColor: null,
        stemDashType: "solid",
        upperBoxColor: "white",
        lowerBoxColor: "white",
        type: "column",
        xValueType: "number",
        axisXType: "primary",
        axisYType: "primary",
        axisXIndex: 0,
        axisYIndex: 0,
        xValueFormatString: null,
        yValueFormatString: null,
        zValueFormatString: null,
        percentFormatString: null,
        showInLegend: false,
        legendMarkerType: null,
        legendMarkerColor: null,
        legendText: null,
        legendMarkerBorderColor: t ? "transparent" : null,
        legendMarkerBorderThickness: 0,
        markerType: "circle",
        markerColor: null,
        markerSize: null,
        markerBorderColor: t ? "transparent" : null,
        markerBorderThickness: 0,
        mouseover: null,
        mouseout: null,
        mousemove: null,
        click: null,
        toolTipContent: null,
        visible: true,
        publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
      }, TextBlock: {
        x: 0,
        y: 0,
        width: null,
        height: null,
        maxWidth: null,
        maxHeight: null,
        padding: 0,
        angle: 0,
        text: "",
        horizontalAlign: "center",
        textAlign: "left",
        fontSize: 12,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        borderThickness: 0,
        borderColor: "black",
        cornerRadius: 0,
        backgroundColor: null,
        textBaseline: "top"
      }, CultureInfo: {
        decimalSeparator: ".",
        digitGroupSeparator: ",",
        zoomText: "Zoom",
        panText: "Pan",
        resetText: "Reset",
        menuText: "More Options",
        saveJPGText: "Save as JPEG",
        savePNGText: "Save as PNG",
        printText: "Print",
        days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
      } }, La = { en: {} }, w = t ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ga = t ? "Impact, Charcoal, sans-serif" : "Arial", Ba = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      }, Q, Z, V, ga, ja;
      Z = "#333333";
      V = "#000000";
      Q = "#666666";
      ja = ga = "#000000";
      var fa = 20, A = 14, Xa = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: A, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{
        indexLabelFontFamily: w,
        indexLabelFontSize: A,
        indexLabelFontColor: Z,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: Z, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 0, gridColor: Q, stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisX2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: Z, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 0, gridColor: Q, stripLines: [{
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: w,
        titleFontSize: fa,
        titleFontColor: Z,
        titleFontWeight: "normal",
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: Q,
        tickThickness: 1,
        tickColor: Q,
        gridThickness: 1,
        gridColor: Q,
        stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisY2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: Z, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 1, gridColor: Q, stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white"
      } };
      V = Z = "#F5F5F5";
      Q = "#FFFFFF";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      var fa = 20, A = 14, eb = { colorSet: "colorSet2", title: { fontFamily: w, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: w, fontSize: A, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: w, indexLabelFontSize: A, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: w,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: {
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#EEEEEE",
          labelFontWeight: "normal",
          labelBackgroundColor: "black",
          color: "black",
          thickness: 1,
          lineDashType: "dot"
        },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisX2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#FFA500",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FFA500",
        thickness: 1
      }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: w,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisY2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 0, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
        labelFontFamily: w,
        labelFontSize: A,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: w, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white"
      } };
      V = Z = "#F5F5F5";
      Q = "#FFFFFF";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      fa = 20;
      A = 14;
      Ga = {
        colorSet: "colorSet1",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Ga, fontSize: A, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
        },
        data: [{ indexLabelFontFamily: w, indexLabelFontSize: A, indexLabelFontColor: V, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 0, gridColor: Q, stripLines: [{
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisX2: [{
          titleFontFamily: w,
          titleFontSize: fa,
          titleFontColor: V,
          titleFontWeight: "normal",
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
          crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
          scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 1, gridColor: Q, stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ja,
          color: ga,
          thickness: 1,
          lineDashType: "dash"
        }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisY2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 1, gridColor: Q, stripLines: [{
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: {
          fontFamily: w,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: V,
          backgroundColor: "rgba(0, 0, 0, .7)"
        }
      };
      Q = "#FFFFFF";
      V = Z = "#FAFAFA";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      var fa = 20, A = 14, Pa = { light1: Xa, light2: eb, dark1: Ga, dark2: {
        colorSet: "colorSet2",
        backgroundColor: "#32373A",
        title: { fontFamily: w, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: w, fontSize: A, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
        },
        data: [{ indexLabelFontFamily: w, indexLabelFontSize: A, indexLabelFontColor: V, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 0, gridColor: Q, stripLines: [{
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisX2: [{
          titleFontFamily: w,
          titleFontSize: fa,
          titleFontColor: V,
          titleFontWeight: "normal",
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: V,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: Q,
          tickThickness: 1,
          tickColor: Q,
          gridThickness: 0,
          gridColor: Q,
          stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
          crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
          scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 0, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 1, gridColor: Q, stripLines: [{ labelFontFamily: w, labelFontSize: A, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ja,
          color: ga,
          thickness: 1,
          lineDashType: "dash"
        }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisY2: [{ titleFontFamily: w, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: w, labelFontSize: A, labelFontColor: V, labelFontWeight: "normal", lineThickness: 0, lineColor: Q, tickThickness: 1, tickColor: Q, gridThickness: 1, gridColor: Q, stripLines: [{
          labelFontFamily: w,
          labelFontSize: A,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: w, labelFontSize: A, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: {
          fontFamily: w,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: V,
          backgroundColor: "rgba(0, 0, 0, .7)"
        }
      }, theme1: Xa, theme2: eb, theme3: Xa }, S = { numberDuration: 1, yearDuration: 314496e5, monthDuration: 2592e6, weekDuration: 6048e5, dayDuration: 864e5, hourDuration: 36e5, minuteDuration: 6e4, secondDuration: 1e3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ") };
      (function() {
        ua.fSDec = function(d) {
          for (var q = "", l2 = 0; l2 < d.length; l2++)
            q += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(l2));
          return q;
        };
        delete qa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")];
        ua.pro = { sCH: qa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")] };
      })();
      var ib = function() {
        var d = false;
        try {
          var q = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            d = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, q), window.removeEventListener("test", null, q));
        } catch (l2) {
          d = false;
        }
        return d;
      }(), ab = {}, wa = null, nb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, ya = function(d) {
        d.width = 1;
        d.height = 1;
        d.getContext("2d") && d.getContext("2d").clearRect(0, 0, 1, 1);
      }, ob = function(d, q, l2) {
        q = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= q ? 12 : 11, Math.round(q * (d / 400)));
      }, Ca = function() {
        var d = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, q = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), l2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), t2 = "January February March April May June July August September October November December".split(" "), T = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), w2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, B = /[^-+\dA-Z]/g;
        return function(A2, I2, N) {
          var Q2 = N ? N.days : q, U2 = N ? N.months : t2, G2 = N ? N.shortDays : l2, S2 = N ? N.shortMonths : T;
          N = "";
          var J2 = false;
          A2 = A2 && A2.getTime ? A2 : A2 ? new Date(A2) : /* @__PURE__ */ new Date();
          if (isNaN(A2))
            throw SyntaxError("invalid date");
          "UTC:" === I2.slice(0, 4) && (I2 = I2.slice(4), J2 = true);
          N = J2 ? "getUTC" : "get";
          var Y2 = A2[N + "Date"](), R = A2[N + "Day"](), aa = A2[N + "Month"](), a = A2[N + "FullYear"](), g = A2[N + "Hours"](), c = A2[N + "Minutes"](), b = A2[N + "Seconds"](), e = A2[N + "Milliseconds"](), h = J2 ? 0 : A2.getTimezoneOffset();
          return N = I2.replace(d, function(r) {
            switch (r) {
              case "D":
                return Y2;
              case "DD":
                return $(Y2, 2);
              case "DDD":
                return G2[R];
              case "DDDD":
                return Q2[R];
              case "M":
                return aa + 1;
              case "MM":
                return $(aa + 1, 2);
              case "MMM":
                return S2[aa];
              case "MMMM":
                return U2[aa];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return $(String(a).slice(-2), 2);
              case "YYY":
                return $(String(a).slice(-3), 3);
              case "YYYY":
                return $(a, 4);
              case "h":
                return g % 12 || 12;
              case "hh":
                return $(g % 12 || 12, 2);
              case "H":
                return g;
              case "HH":
                return $(g, 2);
              case "m":
                return c;
              case "mm":
                return $(c, 2);
              case "s":
                return b;
              case "ss":
                return $(b, 2);
              case "f":
                return $(String(e), 3).slice(0, 1);
              case "ff":
                return $(String(e), 3).slice(0, 2);
              case "fff":
                return $(String(e), 3).slice(0, 3);
              case "t":
                return 12 > g ? "a" : "p";
              case "tt":
                return 12 > g ? "am" : "pm";
              case "T":
                return 12 > g ? "A" : "P";
              case "TT":
                return 12 > g ? "AM" : "PM";
              case "K":
                return J2 ? "UTC" : (String(A2).match(w2) || [""]).pop().replace(B, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2) + $(Math.abs(h) % 60, 2);
              default:
                return r.slice(1, r.length - 1);
            }
          });
        };
      }(), pb = function(d) {
        var q = 0 > d;
        if (1 > Math.abs(d)) {
          var l2 = parseInt(d.toString().split("e-")[1]);
          l2 && (d = (q ? -1 * d : d) * Math.pow(10, l2 - 1), d = "0." + Array(l2).join("0") + d.toString().substring(2), d = q ? "-" + d : d);
        } else
          l2 = parseInt(d.toString().split("+")[1]), 20 < l2 && (l2 -= 20, d /= Math.pow(10, l2), d = d.toString() + Array(l2 + 1).join("0"));
        return String(d);
      }, ha = function(d, l2, t2) {
        if (null === d)
          return "";
        if (!isFinite(d))
          return d;
        d = Number(d);
        var M = 0 > d ? true : false;
        M && (d *= -1);
        var T = t2 ? t2.decimalSeparator : ".", w2 = t2 ? t2.digitGroupSeparator : ",", B = "";
        l2 = String(l2);
        var B = 1, A2 = t2 = "", I2 = -1, N = [], Q2 = [], U2 = 0, J2 = 0, G2 = 0, S2 = false, Y2 = 0, A2 = l2.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        l2 = null;
        for (var R = 0; A2 && R < A2.length; R++)
          if (l2 = A2[R], "." === l2 && 0 > I2)
            I2 = R;
          else {
            if ("%" === l2)
              B *= 100;
            else if ("‰" === l2) {
              B *= 1e3;
              continue;
            } else if ("," === l2[0] && "." === l2[l2.length - 1]) {
              B /= Math.pow(1e3, l2.length - 1);
              I2 = R + l2.length - 1;
              continue;
            } else
              "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || (S2 = true);
            0 > I2 ? (N.push(l2), "#" === l2 || "0" === l2 ? U2++ : "," === l2 && G2++) : (Q2.push(l2), "#" !== l2 && "0" !== l2 || J2++);
          }
        S2 && (l2 = Math.floor(d), A2 = -Math.floor(Math.log(d) / Math.LN10 + 1), Y2 = 0 === d ? 0 : 0 === l2 ? -(U2 + A2) : pb(l2).length - U2, B /= Math.pow(10, Y2));
        0 > I2 && (I2 = R);
        B = (d * B).toFixed(J2);
        l2 = B.split(".");
        B = (l2[0] + "").split("");
        d = (l2[1] + "").split("");
        B && "0" === B[0] && B.shift();
        for (S2 = A2 = R = J2 = I2 = 0; 0 < N.length; )
          if (l2 = N.pop(), "#" === l2 || "0" === l2)
            if (I2++, I2 === U2) {
              var aa = B, B = [];
              if ("0" === l2)
                for (l2 = U2 - J2 - (aa ? aa.length : 0); 0 < l2; )
                  aa.unshift("0"), l2--;
              for (; 0 < aa.length; )
                t2 = aa.pop() + t2, S2++, 0 === S2 % A2 && (R === G2 && 0 < aa.length) && (t2 = w2 + t2);
            } else
              0 < B.length ? (t2 = B.pop() + t2, J2++, S2++) : "0" === l2 && (t2 = "0" + t2, J2++, S2++), 0 === S2 % A2 && (R === G2 && 0 < B.length) && (t2 = w2 + t2);
          else
            "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? "," === l2 ? (R++, A2 = S2, S2 = 0, 0 < B.length && (t2 = w2 + t2)) : t2 = 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? l2.slice(1, l2.length - 1) + t2 : l2 + t2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), t2 += l2.replace(/[0]+/, function(a) {
              return $(Y2, a.length);
            }));
        w2 = "";
        for (N = false; 0 < Q2.length; )
          l2 = Q2.shift(), "#" === l2 || "0" === l2 ? 0 < d.length && 0 !== Number(d.join("")) ? (w2 += d.shift(), N = true) : "0" === l2 && (w2 += "0", N = true) : 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? w2 += l2.slice(1, l2.length - 1) : "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? w2 += l2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), w2 += l2.replace(/[0]+/, function(a) {
            return $(Y2, a.length);
          }));
        t2 += (N ? T : "") + w2;
        return M ? "-" + t2 : t2;
      }, Qa = function(d) {
        var l2 = 0, t2 = 0;
        d = d || window.event;
        d.offsetX || 0 === d.offsetX ? (l2 = d.offsetX, t2 = d.offsetY) : d.layerX || 0 == d.layerX ? (l2 = d.layerX, t2 = d.layerY) : (l2 = d.pageX - d.target.offsetLeft, t2 = d.pageY - d.target.offsetTop);
        return { x: l2, y: t2 };
      }, cb = true, Ta = window.devicePixelRatio || 1, Oa = 1, ia = cb ? Ta / Oa : 1, da = function(d, l2, t2, M, w2, A2, B, I2, S2, N, U2, Q2, J2) {
        "undefined" === typeof J2 && (J2 = 1);
        B = B || 0;
        I2 = I2 || "black";
        var G2 = 15 < M - l2 && 15 < w2 - t2 ? 8 : 0.35 * Math.min(M - l2, w2 - t2);
        d.beginPath();
        d.moveTo(l2, t2);
        d.save();
        d.fillStyle = A2;
        d.globalAlpha = J2;
        d.fillRect(l2, t2, M - l2, w2 - t2);
        d.globalAlpha = 1;
        0 < B && (J2 = 0 === B % 2 ? 0 : 0.5, d.beginPath(), d.lineWidth = B, d.strokeStyle = I2, d.moveTo(l2, t2), d.rect(l2 - J2, t2 - J2, M - l2 + 2 * J2, w2 - t2 + 2 * J2), d.stroke());
        d.restore();
        true === S2 && (d.save(), d.beginPath(), d.moveTo(l2, t2), d.lineTo(l2 + G2, t2 + G2), d.lineTo(M - G2, t2 + G2), d.lineTo(M, t2), d.closePath(), B = d.createLinearGradient((M + l2) / 2, t2 + G2, (M + l2) / 2, t2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = B, d.fill(), d.restore());
        true === N && (d.save(), d.beginPath(), d.moveTo(l2, w2), d.lineTo(l2 + G2, w2 - G2), d.lineTo(M - G2, w2 - G2), d.lineTo(M, w2), d.closePath(), B = d.createLinearGradient((M + l2) / 2, w2 - G2, (M + l2) / 2, w2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = B, d.fill(), d.restore());
        true === U2 && (d.save(), d.beginPath(), d.moveTo(l2, t2), d.lineTo(l2 + G2, t2 + G2), d.lineTo(l2 + G2, w2 - G2), d.lineTo(l2, w2), d.closePath(), B = d.createLinearGradient(l2 + G2, (w2 + t2) / 2, l2, (w2 + t2) / 2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = B, d.fill(), d.restore());
        true === Q2 && (d.save(), d.beginPath(), d.moveTo(M, t2), d.lineTo(M - G2, t2 + G2), d.lineTo(M - G2, w2 - G2), d.lineTo(M, w2), B = d.createLinearGradient(M - G2, (w2 + t2) / 2, M, (w2 + t2) / 2), B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = B, B.addColorStop(0, A2), B.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = B, d.fill(), d.closePath(), d.restore());
      }, X = function(d) {
        for (var l2 = "", t2 = 0; t2 < d.length; t2++)
          l2 += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(t2));
        return l2;
      }, lb = window && (window[X("mnb`uhno")] && window[X("mnb`uhno")].href && window[X("mnb`uhno")].href.indexOf && (-1 !== window[X("mnb`uhno")].href.indexOf(X("b`ow`rkr/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gdonqhy/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gheemd")))) && -1 === window[X("mnb`uhno")].href.indexOf(X("gheemd")), mb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      Y.prototype.setOptions = function(d, l2) {
        if (qa[this._defaultsKey]) {
          var t2 = qa[this._defaultsKey], w2;
          for (w2 in t2)
            "publicProperties" !== w2 && t2.hasOwnProperty(w2) && (this[w2] = d && w2 in d ? d[w2] : l2 && w2 in l2 ? l2[w2] : t2[w2]);
        } else
          Ia && window.console && console.log("defaults not set");
      };
      Y.prototype.get = function(d) {
        var l2 = qa[this._defaultsKey];
        if ("options" === d)
          return this.options && this.options._isPlaceholder ? null : this.options;
        if (l2.hasOwnProperty(d) || l2.publicProperties && l2.publicProperties.hasOwnProperty(d))
          return this[d];
        window.console && window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`);
      };
      Y.prototype.set = function(d, l2, t2) {
        t2 = "undefined" === typeof t2 ? true : t2;
        var w2 = qa[this._defaultsKey];
        if ("options" === d)
          this.createUserOptions(l2);
        else if (w2.hasOwnProperty(d) || w2.publicProperties && w2.publicProperties.hasOwnProperty(d) && "readWrite" === w2.publicProperties[d])
          this.options._isPlaceholder && this.createUserOptions(), this.options[d] = l2;
        else {
          window.console && (w2.publicProperties && w2.publicProperties.hasOwnProperty(d) && "readOnly" === w2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
          return;
        }
        t2 && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.addTo = function(d, l2, t2, w2) {
        w2 = "undefined" === typeof w2 ? true : w2;
        var A2 = qa[this._defaultsKey];
        A2.hasOwnProperty(d) || A2.publicProperties && A2.publicProperties.hasOwnProperty(d) && "readWrite" === A2.publicProperties[d] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[d] && (this.options[d] = []), d = this.options[d], t2 = "undefined" === typeof t2 || null === t2 ? d.length : t2, d.splice(t2, 0, l2), w2 && (this.stockChart || this.chart || this).render()) : window.console && (A2.publicProperties && A2.publicProperties.hasOwnProperty(d) && "readOnly" === A2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
      };
      Y.prototype.createUserOptions = function(d) {
        if ("undefined" !== typeof d || this.options._isPlaceholder)
          if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var l2 = this.parent.options[this.optionsName], t2 = l2.length;
            this.options._isPlaceholder || (Ea(l2), t2 = l2.indexOf(this.options));
            this.options = "undefined" === typeof d ? {} : d;
            l2[t2] = this.options;
          } else
            this.options = "undefined" === typeof d ? {} : d, this.parent && (d = this.parent.options, this.optionsName ? l2 = this.optionsName : (l2 = this._defaultsKey) && 0 !== l2.length ? (t2 = l2.charAt(0).toLowerCase(), 1 < l2.length && (t2 = t2.concat(l2.slice(1))), l2 = t2) : l2 = void 0, d[l2] = this.options);
      };
      Y.prototype.remove = function(d) {
        d = "undefined" === typeof d ? true : d;
        if (this.isOptionsInArray) {
          var l2 = this.parent.options[this.optionsName];
          Ea(l2);
          var t2 = l2.indexOf(this.options);
          0 <= t2 && l2.splice(t2, 1);
        } else
          delete this.parent.options[this.optionsName];
        d && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.updateOption = function(d) {
        !qa[this._defaultsKey] && (Ia && window.console) && console.log("defaults not set");
        var t2 = qa[this._defaultsKey], w2 = {}, A2 = this[d], T = this._themeOptionsKey, I2 = this._index;
        this.theme && l(this.parent) && l(T) && l(I2) ? w2 = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme ? "Chart" === this._defaultsKey && Pa[this.options.theme] ? w2 = Pa[this.options.theme] : stockThemes[this.options.theme] && (w2 = stockThemes[this.options.theme][T]) : this.parent.themeOptions[T] && (null === I2 ? w2 = this.parent.themeOptions[T] : 0 < this.parent.themeOptions[T].length && (w2 = Math.min(this.parent.themeOptions[T].length - 1, I2), w2 = this.parent.themeOptions[T][w2])));
        this.themeOptions = w2;
        d in t2 && (A2 = d in this.options ? this.options[d] : w2 && d in w2 ? w2[d] : t2[d]);
        if (A2 === this[d])
          return false;
        this[d] = A2;
        return true;
      };
      Y.prototype.trackChanges = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        this.sessionVariables[d] = this.options[d];
      };
      Y.prototype.isBeingTracked = function(d) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[d] ? true : false;
      };
      Y.prototype.hasOptionChanged = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        return this.sessionVariables[d] !== this.options[d];
      };
      Y.prototype.addEventListener = function(d, l2, t2) {
        d && l2 && (this._eventListeners[d] = this._eventListeners[d] || [], this._eventListeners[d].push({ context: t2 || this, eventHandler: l2 }));
      };
      Y.prototype.removeEventListener = function(d, l2) {
        if (d && l2 && this._eventListeners[d]) {
          for (var t2 = this._eventListeners[d], w2 = 0; w2 < t2.length; w2++)
            if (t2[w2].eventHandler === l2) {
              t2[w2].splice(w2, 1);
              break;
            }
        }
      };
      Y.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      Y.prototype.dispatchEvent = function(d, l2, t2) {
        if (d && this._eventListeners[d]) {
          l2 = l2 || {};
          for (var w2 = this._eventListeners[d], A2 = 0; A2 < w2.length; A2++)
            w2[A2].eventHandler.call(w2[A2].context, l2);
        }
        "function" === typeof this[d] && this[d].call(t2 || this.chart, l2);
      };
      Fa.prototype.registerSpace = function(l2, t2) {
        "top" === l2 ? this._topOccupied += t2.height : "bottom" === l2 ? this._bottomOccupied += t2.height : "left" === l2 ? this._leftOccupied += t2.width : "right" === l2 && (this._rightOccupied += t2.width);
      };
      Fa.prototype.unRegisterSpace = function(l2, t2) {
        "top" === l2 ? this._topOccupied -= t2.height : "bottom" === l2 ? this._bottomOccupied -= t2.height : "left" === l2 ? this._leftOccupied -= t2.width : "right" === l2 && (this._rightOccupied -= t2.width);
      };
      Fa.prototype.getFreeSpace = function() {
        return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
      };
      Fa.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      pa(ka, Y);
      ka.prototype._initialize = function() {
        l(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = l(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = l(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = l(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = l(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      ka.prototype.render = function(l2) {
        if (0 !== this.fontSize) {
          l2 && this.ctx.save();
          var t2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var w2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + w2);
          "middle" === this.textBaseline && (w2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var A2 = 0, T = this.topPadding, I2 = null;
          this.ctx.roundRect || za(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(
            0,
            w2,
            this.width,
            this.height,
            this.cornerRadius,
            this.borderThickness,
            this.backgroundColor,
            this.borderColor
          );
          this.ctx.fillStyle = this.fontColor;
          for (w2 = 0; w2 < this._wrappedText.lines.length; w2++)
            I2 = this._wrappedText.lines[w2], "right" === this.textAlign ? A2 = this.width - I2.width - this.rightPadding : "left" === this.textAlign ? A2 = this.leftPadding : "center" === this.textAlign && (A2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I2.width / 2 + this.leftPadding), this.ctx.fillText(I2.text, A2, T), T += I2.height;
          this.ctx.font = t2;
          l2 && this.ctx.restore();
        }
      };
      ka.prototype.setText = function(l2) {
        this.text = l2;
        this._isDirty = true;
        this._wrappedText = null;
      };
      ka.prototype.measureText = function() {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
          throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      ka.prototype._getLineWithWidth = function(l2, t2, w2) {
        l2 = String(l2);
        if (!l2)
          return { text: "", width: 0 };
        var A2 = w2 = 0, I2 = l2.length - 1, G2 = Infinity;
        for (this.ctx.font = this._getFontString(); A2 <= I2; ) {
          var G2 = Math.floor((A2 + I2) / 2), B = l2.substr(0, G2 + 1);
          w2 = this.ctx.measureText(B).width;
          if (w2 < t2)
            A2 = G2 + 1;
          else if (w2 > t2)
            I2 = G2 - 1;
          else
            break;
        }
        w2 > t2 && 1 < B.length && (B = B.substr(0, B.length - 1), w2 = this.ctx.measureText(B).width);
        t2 = true;
        if (B.length === l2.length || " " === l2[B.length])
          t2 = false;
        t2 && (l2 = B.split(" "), 1 < l2.length && l2.pop(), B = l2.join(" "), w2 = this.ctx.measureText(B).width);
        return { text: B, width: w2 };
      };
      ka.prototype._wrapText = function() {
        var l2 = new String(Ha(String(this.text))), t2 = [], w2 = this.ctx.font, A2 = 0, I2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
          I2 = A2 = 0;
        else
          for (; 0 < l2.length; ) {
            var G2 = this.maxHeight - (this.topPadding + this.bottomPadding), B = this._getLineWithWidth(l2, this.maxWidth - (this.leftPadding + this.rightPadding), false);
            B.height = this._lineHeight;
            t2.push(B);
            var J2 = I2, I2 = Math.max(I2, B.width), A2 = A2 + B.height, l2 = Ha(l2.slice(B.text.length, l2.length));
            G2 && A2 > G2 && (B = t2.pop(), A2 -= B.height, I2 = J2);
          }
        this._wrappedText = { lines: t2, width: I2, height: A2 };
        this.width = I2 + (this.leftPadding + this.rightPadding);
        this.height = A2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = w2;
      };
      ka.prototype._getFontString = function() {
        var l2;
        l2 = this.fontStyle ? this.fontStyle + " " : "";
        l2 += this.fontWeight ? this.fontWeight + " " : "";
        l2 += this.fontSize ? this.fontSize + "px " : "";
        var q = this.fontFamily ? this.fontFamily + "" : "";
        !t && q && (q = q.split(",")[0], "'" !== q[0] && '"' !== q[0] && (q = "'" + q + "'"));
        return l2 += q;
      };
      pa(Va, Y);
      pa(Aa, Y);
      Aa.prototype.setLayout = function() {
        if (this.text) {
          var d = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, t2 = d.layoutManager.getFreeSpace(), w2 = t2.x1, A2 = t2.y1, I2 = 0, G2 = 0, B = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, J2, S2;
          this.textAlign = l(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = t2.width - 4 - B * ("center" === this.horizontalAlign ? 2 : 1)), G2 = 0.5 * t2.height - this.margin - 2, I2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = t2.height - 4), G2 = 0.5 * t2.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = t2.width - 4), G2 = 0.5 * t2.height - 4));
          var N;
          l(this.padding) || "number" !== typeof this.padding ? l(this.padding) || "object" !== typeof this.padding || (N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : N = 2 * this.padding;
          this.wrap || (G2 = Math.min(G2, 1.5 * this.fontSize + N));
          G2 = new ka(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            textAlign: this.textAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: G2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          N = G2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (A2 = t2.y1 + 2 + this.fontSize / 2 + 4, S2 = "top") : "bottom" === this.verticalAlign && (A2 = t2.y2 - 2 - N.height + this.fontSize / 2 + 4, S2 = "bottom"), "left" === this.horizontalAlign ? w2 = t2.x1 + 2 : "center" === this.horizontalAlign ? w2 = t2.x1 + t2.width / 2 - N.width / 2 : "right" === this.horizontalAlign && (w2 = t2.x2 - 2 - N.width - B), J2 = this.horizontalAlign, this.width = N.width, this.height = N.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (w2 = t2.x1 + 2 + (this.fontSize / 2 + 4), A2 = t2.y2 - 2 - (this.maxWidth / 2 - N.width / 2), I2 = -90, S2 = "left", this.width = N.height, this.height = N.width) : "right" === this.horizontalAlign ? (w2 = t2.x2 - 2 - (this.fontSize / 2 + 4), A2 = t2.y1 + 2 + (this.maxWidth / 2 - N.width / 2), I2 = 90, S2 = "right", this.width = N.height, this.height = N.width) : "center" === this.horizontalAlign && (A2 = d.y1 + (d.height / 2 - N.height / 2) + this.fontSize / 2 + 4, w2 = d.x1 + (d.width / 2 - N.width / 2), S2 = "center", this.width = N.width, this.height = N.height), J2 = "center");
          G2.x = w2;
          G2.y = A2;
          G2.angle = I2;
          G2.horizontalAlign = J2;
          this._textBlock = G2;
          d.layoutManager.registerSpace(S2, { width: this.width + ("left" === S2 || "right" === S2 ? this.margin + 2 : 0), height: this.height + ("top" === S2 || "bottom" === S2 ? this.margin + 2 : 0) });
          this.bounds = { x1: w2, y1: A2, x2: w2 + this.width, y2: A2 + this.height };
          this.ctx.textBaseline = "top";
        }
      };
      Aa.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      pa(Ja, Y);
      Ja.prototype.setLayout = Aa.prototype.setLayout;
      Ja.prototype.render = Aa.prototype.render;
      Wa.prototype.get = function(l2, t2) {
        var w2 = null;
        0 < this.pool.length ? (w2 = this.pool.pop(), Na(w2, l2, t2)) : w2 = ta(l2, t2);
        return w2;
      };
      Wa.prototype.release = function(l2) {
        this.pool.push(l2);
      };
      pa(Ka, Y);
      var Ra = { addTheme: function(l2, t2) {
        Pa[l2] = t2;
      }, addColorSet: function(l2, t2) {
        Ba[l2] = t2;
      }, addCultureInfo: function(l2, t2) {
        La[l2] = t2;
      }, formatNumber: function(l2, t2, w2) {
        w2 = w2 || "en";
        if (La[w2])
          return ha(l2, t2 || "#,##0.##", new Ka(w2));
        throw "Unknown Culture Name";
      }, formatDate: function(l2, t2, w2) {
        w2 = w2 || "en";
        if (La[w2])
          return Ca(l2, t2 || "DD MMM YYYY", new Ka(w2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Ra : "function" === typeof define && define.amd ? define([], function() {
        return Ra;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra);
      w = Ra.Chart = function() {
        function d(a, g) {
          return a.x - g.x;
        }
        function q(a, g, c) {
          g = g || {};
          l(c) ? (this.predefinedThemes = Pa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = l(g.theme) || l(this.predefinedThemes[g.theme]) ? "light1" : g.theme;
          q.base.constructor.call(
            this,
            "Chart",
            this.optionsName,
            g,
            this.index,
            this.parent
          );
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Wa();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", g = a = 0, g = db(this.container), a = this.options.width ? this.width : 0 < this.container.clientWidth - parseFloat(g.paddingLeft) - parseFloat(g.paddingRight) ? this.container.clientWidth - parseFloat(g.paddingLeft) - parseFloat(g.paddingRight) : this.width, g = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight - parseFloat(g.paddingTop) - parseFloat(g.paddingBottom) ? this.container.clientHeight - parseFloat(g.paddingTop) - parseFloat(g.paddingBottom) : this.height, this.width = a, this.height = g, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", t || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ta(a, g), this._preRenderCanvas = ta(a, g), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", za(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", za(this._preRenderCtx), t ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(a, g), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ta(a, g), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", za(this.overlaidCanvasCtx)), this._eventManager = new ga2(this), this.windowResizeHandler = G(window, "resize", function() {
            b._updateSize() && (b.render(), b.isNavigator && (b.stockChart && b.stockChart.navigator && b.stockChart.navigator.enabled) && b.stockChart.navigator._updateSlider(b.stockChart._axisXMin, b.stockChart._axisXMax));
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), J(this._toolBar, { position: "absolute", right: "1px", top: "1px" }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, G(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, "mousedown", function(a2) {
            b._mouseEventHandler(a2);
            va(b._dropdownMenu);
          }, this.allDOMEventHandlers), G(
            this.overlaidCanvas,
            "mouseout",
            function(a2) {
              b._mouseEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new $2(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function w2(a, g) {
          for (var c = [], b, e = 0; e < a.length; e++)
            if (0 == e)
              c.push(a[0]);
            else {
              var h, r, u;
              u = e - 1;
              h = 0 === u ? 0 : u - 1;
              r = u === a.length - 1 ? u : u + 1;
              b = Math.abs((a[r].x - a[h].x) / (0 === a[r].x - a[u].x ? 0.01 : a[r].x - a[u].x)) * (g - 1) / 2 + 1;
              var D = (a[r].x - a[h].x) / b;
              b = (a[r].y - a[h].y) / b;
              c[c.length] = a[u].x > a[h].x && 0 < D || a[u].x < a[h].x && 0 > D ? { x: a[u].x + D / 3, y: a[u].y + b / 3 } : { x: a[u].x, y: a[u].y + (1 === c.length ? 0 : b / 9) };
              u = e;
              h = 0 === u ? 0 : u - 1;
              r = u === a.length - 1 ? u : u + 1;
              b = Math.abs((a[r].x - a[h].x) / (0 === a[u].x - a[h].x ? 0.01 : a[u].x - a[h].x)) * (g - 1) / 2 + 1;
              D = (a[r].x - a[h].x) / b;
              b = (a[r].y - a[h].y) / b;
              c[c.length] = a[u].x > a[h].x && 0 < D || a[u].x < a[h].x && 0 > D ? { x: a[u].x - D / 3, y: a[u].y - b / 3 } : {
                x: a[u].x,
                y: a[u].y - b / 9
              };
              c[c.length] = a[e];
            }
          return c;
        }
        function A2(a, g, c, b, e, h, r, u, D, k) {
          var m = 0;
          k ? (r.color = h, u.color = h) : k = 1;
          m = D ? Math.abs(e - c) : Math.abs(b - g);
          m = 0 < r.trimLength ? Math.abs(m * r.trimLength / 100) : Math.abs(m - r.length);
          D ? (c += m / 2, e -= m / 2) : (g += m / 2, b -= m / 2);
          var m = 1 === Math.round(r.thickness) % 2 ? 0.5 : 0, n = 1 === Math.round(u.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = u.color || h;
          a.lineWidth = u.thickness || 2;
          a.setLineDash && a.setLineDash(I(u.dashType, u.thickness));
          a.beginPath();
          D && 0 < u.thickness ? (a.moveTo(b - r.thickness / 2, Math.round((c + e) / 2) - n), a.lineTo(g + r.thickness / 2, Math.round((c + e) / 2) - n)) : 0 < u.thickness && (a.moveTo(Math.round((g + b) / 2) - n, c + r.thickness / 2), a.lineTo(Math.round((g + b) / 2) - n, e - r.thickness / 2));
          a.stroke();
          a.strokeStyle = r.color || h;
          a.lineWidth = r.thickness || 2;
          a.setLineDash && a.setLineDash(I(r.dashType, r.thickness));
          a.beginPath();
          D && 0 < r.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, e), a.moveTo(g + m, c), a.lineTo(g + m, e)) : 0 < r.thickness && (a.moveTo(g, c + m), a.lineTo(b, c + m), a.moveTo(g, e - m), a.lineTo(b, e - m));
          a.stroke();
          a.restore();
        }
        function T(a, g) {
          T.base.constructor.call(this, "Legend", "legend", g, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function Q2(a, g, c, b) {
          Q2.base.constructor.call(this, "DataSeries", "data", g, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = g.dataPoints ? g.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (g = 0; g < a; g++)
            this.dataPointEOs[g] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function B(a, g, c, b, e, h) {
          B.base.constructor.call(this, "Axis", g, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === e ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", l(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", l(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", l(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", l(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = h;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new V2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (a = 0; a < this.options.stripLines.length; a++)
              this.stripLines.push(new N(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new Z2(this.chart, this.options.crosshair, this), this.crosshair._updatedValue = l(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(
            this.viewportMaximum,
            this.maximum
          ));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function V2(a, g, c, b) {
          V2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", g, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++)
              this.customBreaks.push(new fa2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++)
              this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(
                a,
                2
              ), a--);
          }
        }
        function fa2(a, g, c, b, e, h) {
          fa2.base.constructor.call(this, "Break", g, c, b, h);
          this.id = e;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = h;
          this.optionsName = g;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : h.type;
          this.fillOpacity = l(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
          this.lineThickness = l(c.lineThickness) ? h.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : h.color;
          this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
          !l(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !l(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
          this.size = h.parent.logarithmic ? 1 : 0;
        }
        function N(a, g, c, b, e) {
          N.base.constructor.call(this, "StripLine", "stripLines", g, c, e);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = e;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function Z2(a, g, c) {
          Z2.base.constructor.call(this, "Crosshair", "crosshair", g, null, c);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function $2(a, g) {
          $2.base.constructor.call(
            this,
            "ToolTip",
            "toolTip",
            g,
            null,
            a
          );
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ga2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ta(
            this.chart.width,
            this.chart.height,
            true
          );
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function ja2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        pa(q, Y);
        q.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var g = 0; g < a.length; g++) {
            var c = a[g][0], b = a[g][1], e = a[g][2], h = a[g][3], h = h || false;
            c.removeEventListener ? c.removeEventListener(
              b,
              e,
              h
            ) : c.detachEvent && c.detachEvent("on" + b, e);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
            this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); )
            this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
            this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && ya(this.canvas);
          this.overlaidCanvas && ya(this.overlaidCanvas);
          this._preRenderCanvas && ya(this._preRenderCanvas);
          this._breaksCanvas && ya(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && ya(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        q.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && l(this.options.theme) ? this.theme = this.stockChart.theme : l(this.stockChart) && l(this.theme) && (this.theme = "light1");
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && l(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && l(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new Ka(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && t;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Va(this, this.options.toolbar);
          if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar)
            for (var g in this.stockChart.options.toolbar)
              this.toolbar[g] = this.stockChart.options.toolbar[g];
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton)
              J(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && J(this._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
            else {
              var c = false;
              va(this._zoomButton = document.createElement("button"));
              sa(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              G(this._zoomButton, "touchstart", function(a2) {
                c = true;
              }, this.allDOMEventHandlers);
              G(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, sa(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, sa(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              G(this._zoomButton, "mousemove", function() {
                c ? c = false : (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
              }, this.allDOMEventHandlers);
              G(this._zoomButton, "mouseout", function() {
                c || (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (J(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && J(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }), this._resetButton.title = this._cultureInfo.resetText) : (c = false, va(this._resetButton = document.createElement("button")), sa(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), G(this._resetButton, "touchstart", function(a2) {
              c = true;
            }, this.allDOMEventHandlers), G(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip }, a.toolTip);
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, sa(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                  a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                  a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++)
                  a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                  a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
              va(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = {
                stockChart: a.stockChart,
                source: "chart",
                index: a.stockChart.charts.indexOf(a),
                minimum: null,
                maximum: null
              });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || l(a.stockChart.navigator.slider.options.minimum) && l(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || l(a.stockChart.rangeSelector.inputFields.options.startValue) && l(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator", l(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"), a.syncCharts(null, null), "rangeButton" === a.stockChart.rangeUpdatedBy && a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (b = a.stockChart.rangeSelector.buttons[a.stockChart._selectedRangeButtonIndex], b.enabled && (b.state = "on", b.textBlock.fontWeight = "bold", b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect, a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null, b.render())));
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent(
                "rangeChanged",
                a.stockChart._rangeEventParameter,
                a.stockChart
              ));
            }, this.allDOMEventHandlers), G(this._resetButton, "mousemove", function() {
              c || (J(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
            }, this.allDOMEventHandlers), G(this._resetButton, "mouseout", function() {
              c || (J(a._resetButton, {
                backgroundColor: a.toolbar.itemBackgroundColor,
                color: a.toolbar.fontColor,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Ma(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else
            this.panEnabled = this.zoomEnabled = false;
          jb(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? sa(a, a._zoomButton, "zoom") : sa(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && sa(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (g in this.toolTip.options)
            this.toolTip.options.hasOwnProperty(g) && this.toolTip.updateOption(g);
        };
        q.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var g = 0, c = 0, b = db(this.container);
          this.options.width ? g = this.width : this.width = g = 0 < this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) ? this.container.clientWidth - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) : this.width;
          l(this.stockChart) || l(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) ? this.container.clientHeight - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== g * ia || this.canvas.height !== c * ia) {
            for (b = 0; b < a.length; b++)
              Na(a[b], g, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else
            a = false;
          return a;
        };
        q.prototype._initialize = function() {
          this.isNavigator = l(this.parent) || l(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new ja2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = t && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = {
            axisPlacement: null,
            plotTypes: []
          };
          this.layoutManager = new Fa(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, g = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++)
              if (a++, !this.options.data[c].type || 0 <= q._supportedChartTypes.indexOf(this.options.data[c].type)) {
                var b = new Q2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                if (!l(b) && b.dataPoints) {
                  for (var e = 0; e < b.dataPoints.length; e++)
                    if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                      b.xValueType = "dateTime";
                      break;
                    }
                }
                "error" === b.type && (b.linkedDataSeriesIndex = l(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                null === b.name && (b.name = "DataSeries " + a);
                null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                  return a2.x;
                }) && b.dataPoints.sort(d) : b.dataPoints.sort(d));
                this.data.push(b);
                var e = b.axisPlacement, g = g || e, h;
                "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
                if (h && window.console) {
                  window.console.log(h);
                  return;
                }
              }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == g && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = g || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        q._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        q.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, g = 0; g < this.data.length; g++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
              if (!this.data[g].axisYType || "primary" === this.data[g].axisYType)
                if (this.options.axisY && 0 < this.options.axisY.length) {
                  if (!this.axisY.length)
                    for (var c = 0; c < this.options.axisY.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new B(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new B(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                  this.data[g].axisY = this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0];
                  this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new B(
                    this,
                    "axisY",
                    this.options.axisY,
                    0,
                    "axisY",
                    "left"
                  )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new B(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[g].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisYType)
                if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                  if (!this.axisY2.length)
                    for (c = 0; c < this.options.axisY2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new B(
                        this,
                        "axisY2",
                        this.options.axisY2[c],
                        c,
                        "axisY",
                        "right"
                      )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new B(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                  this.data[g].axisY = this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0];
                  this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new B(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new B(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[g].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[g]);
              if (!this.data[g].axisXType || "primary" === this.data[g].axisXType)
                if (this.options.axisX && 0 < this.options.axisX.length) {
                  if (!this.axisX.length)
                    for (c = 0; c < this.options.axisX.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new B(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new B(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                  this.data[g].axisX = this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0];
                  this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new B(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new B(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[g].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisXType)
                if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                  if (!this.axisX2.length)
                    for (c = 0; c < this.options.axisX2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new B(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new B(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                  this.data[g].axisX = this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0];
                  this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new B(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new B(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[g].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[g]);
            }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++)
              "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++)
              "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++)
              "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++)
              "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
            for (c = 0; c < this.axisX.length; c++)
              "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
            for (c = 0; c < this.axisX2.length; c++)
              "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (g = 0; g < this._axes.length; g++)
              if (!l(this._axes[g].viewportMinimum) || !l(this._axes[g].viewportMaximum)) {
                c = true;
                break;
              }
          }
          c ? (Ma(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (va(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          hb(this);
          this._processData();
          this.options.title && (this.title = new Aa(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
            for (g = 0; g < this.options.subtitles.length; g++)
              c = new Ja(this, this.options.subtitles[g], g), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new T(this, this.options.legend);
          for (g = 0; g < this.data.length; g++)
            (this.data[g].showInLegend || "pie" === this.data[g].type || "doughnut" === this.data[g].type || "funnel" === this.data[g].type || "pyramid" === this.data[g].type) && this.legend.dataSeries.push(this.data[g]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (g = 0; g < this._axes.length; g++)
            if (this._axes[g].scaleBreaks && this._axes[g].scaleBreaks._appliedBreaks.length) {
              t ? (this._breaksCanvas = ta(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
              break;
            }
          this._preRenderCanvas = ta(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || B.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        q.prototype.renderElements = function() {
          if (this.height && this.width) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var g = 0; g < this.subtitles.length; g++)
              this.subtitles[g].dockInsidePlotArea || this.subtitles[g].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
              B.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement)
              this.preparePlotArea();
            else
              return;
            for (g = 0; g < a.length; g++)
              a[g].setLayout(), a[g].render();
            var c = [];
            if (this.animatedRender) {
              var b = ta(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            kb(this);
            var a = this.ctx.miterLimit, e;
            this.ctx.miterLimit = 3;
            t && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (g = 0; g < this.plotInfo.plotTypes.length; g++)
              for (var h = this.plotInfo.plotTypes[g], r = 0; r < h.plotUnits.length; r++) {
                var u = h.plotUnits[r], D = null;
                u.targetCanvas && ya(u.targetCanvas);
                u.targetCanvas = null;
                this.animatedRender && (u.targetCanvas = ta(this.width, this.height), u.targetCanvasCtx = u.targetCanvas.getContext("2d"), e = u.targetCanvasCtx.miterLimit, u.targetCanvasCtx.miterLimit = 3);
                "line" === u.type ? D = this.renderLine(u) : "stepLine" === u.type ? D = this.renderStepLine(u) : "spline" === u.type ? D = this.renderSpline(u) : "column" === u.type ? D = this.renderColumn(u) : "bar" === u.type ? D = this.renderBar(u) : "area" === u.type ? D = this.renderArea(u) : "stepArea" === u.type ? D = this.renderStepArea(u) : "splineArea" === u.type ? D = this.renderSplineArea(u) : "stackedColumn" === u.type ? D = this.renderStackedColumn(u) : "stackedColumn100" === u.type ? D = this.renderStackedColumn100(u) : "stackedBar" === u.type ? D = this.renderStackedBar(u) : "stackedBar100" === u.type ? D = this.renderStackedBar100(u) : "stackedArea" === u.type ? D = this.renderStackedArea(u) : "stackedArea100" === u.type ? D = this.renderStackedArea100(u) : "bubble" === u.type ? D = D = this.renderBubble(u) : "scatter" === u.type ? D = this.renderScatter(u) : "pie" === u.type ? this.renderPie(u) : "doughnut" === u.type ? this.renderPie(u) : "funnel" === u.type ? D = this.renderFunnel(u) : "pyramid" === u.type ? D = this.renderFunnel(u) : "candlestick" === u.type ? D = this.renderCandlestick(u) : "ohlc" === u.type ? D = this.renderCandlestick(u) : "rangeColumn" === u.type ? D = this.renderRangeColumn(u) : "error" === u.type ? D = this.renderError(u) : "rangeBar" === u.type ? D = this.renderRangeBar(u) : "rangeArea" === u.type ? D = this.renderRangeArea(u) : "rangeSplineArea" === u.type ? D = this.renderRangeSplineArea(u) : "waterfall" === u.type ? D = this.renderWaterfall(u) : "boxAndWhisker" === u.type && (D = this.renderBoxAndWhisker(u));
                for (var k = 0; k < u.dataSeriesIndexes.length; k++)
                  this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[k]]);
                this.animatedRender && (u.targetCanvasCtx.miterLimit = e, D && c.push(D));
              }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = ta(this.width, this.height).getContext("2d"), za(e), c.push(this.renderIndexLabels(e)));
            var m = this;
            if (0 < c.length)
              m.disableToolTip = true, m._animator.animate(200, m.animationDuration, function(a2) {
                m.ctx.clearRect(0, 0, m.width, m.height);
                m.ctx.drawImage(b, 0, 0, Math.floor(m.width * ia), Math.floor(m.height * ia), 0, 0, m.width, m.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  D = c[e2], 1 > a2 && "undefined" !== typeof D.startTimePercent ? a2 >= D.startTimePercent && D.animationCallback(D.easingFunction(a2 - D.startTimePercent, 0, 1, 1 - D.startTimePercent), D) : D.animationCallback(D.easingFunction(a2, 0, 1, 1), D);
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              }, function() {
                c = [];
                for (var a2 = 0; a2 < m.plotInfo.plotTypes.length; a2++)
                  for (var e2 = m.plotInfo.plotTypes[a2], f = 0; f < e2.plotUnits.length; f++) {
                    var g2 = e2.plotUnits[f];
                    g2.targetCanvas && ya(g2.targetCanvas);
                    g2.targetCanvas = null;
                  }
                b = null;
                m.disableToolTip = false;
                m.dispatchEvent("dataAnimationEnd", { chart: m });
              });
            else {
              if (m._breaksCanvas)
                if (t)
                  m.plotArea.ctx.drawImage(
                    m._breaksCanvas,
                    0,
                    0,
                    this.width,
                    this.height
                  );
                else
                  for (k = 0; k < m._axes.length; k++)
                    m._axes[k].createMask();
              0 < m._indexLabels.length && m.renderIndexLabels();
              m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              m.dispatchEvent("dataAnimationEnd", { chart: m });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || va(this._zoomButton, this._resetButton);
            l(this.toolTip._xValue) || l(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(
              this.toolTip._xValue,
              this.toolTip._dataSeriesIndex
            );
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ia && (m = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Na(a2, m.width, m.height), a2.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++)
              this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        q.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && ya(this._preRenderCanvas);
        };
        q.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
        };
        q.prototype.categoriseDataSeries = function() {
          for (var a = "", g = 0; g < this.data.length; g++)
            if (a = this.data[g], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= q._supportedChartTypes.indexOf(a.type)) {
              for (var c = null, b = false, e = null, h = false, r = 0; r < this.plotInfo.plotTypes.length; r++)
                if (this.plotInfo.plotTypes[r].type === a.type) {
                  b = true;
                  c = this.plotInfo.plotTypes[r];
                  break;
                }
              b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
              for (r = 0; r < c.plotUnits.length; r++)
                if (c.plotUnits[r].axisYType === a.axisYType && c.plotUnits[r].axisXType === a.axisXType && c.plotUnits[r].axisYIndex === a.axisYIndex && c.plotUnits[r].axisXIndex === a.axisXIndex) {
                  h = true;
                  e = c.plotUnits[r];
                  break;
                }
              h || (e = { type: a.type, previousDataSeriesCount: 0, index: c.plotUnits.length, plotType: c, axisXType: a.axisXType, axisYType: a.axisYType, axisYIndex: a.axisYIndex, axisXIndex: a.axisXIndex, axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0], axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0], dataSeriesIndexes: [], yTotals: [], yAbsTotals: [] }, c.plotUnits.push(e));
              c.totalDataSeries++;
              e.dataSeriesIndexes.push(g);
              a.plotUnit = e;
            }
          for (g = 0; g < this.plotInfo.plotTypes.length; g++)
            for (c = this.plotInfo.plotTypes[g], r = a = 0; r < c.plotUnits.length; r++)
              c.plotUnits[r].previousDataSeriesCount = a, a += c.plotUnits[r].dataSeriesIndexes.length;
        };
        q.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var g = this.data[a];
            if (g.dataPoints)
              for (var c = g.dataPoints.length, b = 0; b < c; b++)
                g.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        q.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var g = this.plotInfo.plotTypes[a], c = 0; c < g.plotUnits.length; c++) {
              var b = g.plotUnits[c];
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
          this.calculateAutoBreaks();
        };
        q.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = 0; r < a.dataSeriesIndexes.length; r++) {
              var u = this.data[a.dataSeriesIndexes[r]], D = 0, k = false, m = false, n;
              if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement)
                var p = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (u.dataPoints[D].x && u.dataPoints[D].x.getTime || "dateTime" === u.xValueType)
                h = true;
              for (D = 0; D < u.dataPoints.length; D++) {
                "undefined" === typeof u.dataPoints[D].x && (u.dataPoints[D].x = D + (a.axisX.logarithmic ? 1 : 0));
                u.dataPoints[D].x.getTime ? (h = true, b = u.dataPoints[D].x.getTime()) : b = u.dataPoints[D].x;
                e = u.dataPoints[D].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                e < g.min && "number" === typeof e && (g.min = e);
                e > g.max && "number" === typeof e && (g.max = e);
                if (0 < D) {
                  if (a.axisX.logarithmic) {
                    var l2 = b / u.dataPoints[D - 1].x;
                    1 > l2 && (l2 = 1 / l2);
                    c.minDiff > l2 && 1 !== l2 && (c.minDiff = l2);
                  } else
                    l2 = b - u.dataPoints[D - 1].x, 0 > l2 && (l2 *= -1), c.minDiff > l2 && 0 !== l2 && (c.minDiff = l2);
                  null !== e && null !== u.dataPoints[D - 1].y && (a.axisY.logarithmic ? (l2 = e / u.dataPoints[D - 1].y, 1 > l2 && (l2 = 1 / l2), g.minDiff > l2 && 1 !== l2 && (g.minDiff = l2)) : (l2 = e - u.dataPoints[D - 1].y, 0 > l2 && (l2 *= -1), g.minDiff > l2 && 0 !== l2 && (g.minDiff = l2)));
                }
                if (b < p && !k)
                  null !== e && (n = b);
                else {
                  if (!k && (k = true, 0 < D)) {
                    D -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  u.dataPoints[D].label && (a.axisX.labels[b] = u.dataPoints[D].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (e < g.viewPortMin && "number" === typeof e && (g.viewPortMin = e), e > g.viewPortMax && "number" === typeof e && (g.viewPortMax = e));
                }
              }
              u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
            }
        };
        q.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = [], u = [], D = Infinity, k = -Infinity, m = {}, n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = this.data[a.dataSeriesIndexes[n]], f = 0, d2 = false, x = false, y;
              if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement)
                var s = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, t2 = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (p.dataPoints[f].x && p.dataPoints[f].x.getTime || "dateTime" === p.xValueType)
                h = true;
              for (f = 0; f < p.dataPoints.length; f++) {
                "undefined" === typeof p.dataPoints[f].x && (p.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
                p.dataPoints[f].x.getTime ? (h = true, b = p.dataPoints[f].x.getTime()) : b = p.dataPoints[f].x;
                e = l(p.dataPoints[f].y) ? 0 : p.dataPoints[f].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < f) {
                  if (a.axisX.logarithmic) {
                    var v = b / p.dataPoints[f - 1].x;
                    1 > v && (v = 1 / v);
                    c.minDiff > v && 1 !== v && (c.minDiff = v);
                  } else
                    v = b - p.dataPoints[f - 1].x, 0 > v && (v *= -1), c.minDiff > v && 0 !== v && (c.minDiff = v);
                  null !== e && null !== p.dataPoints[f - 1].y && (a.axisY.logarithmic ? 0 < e && (v = e / p.dataPoints[f - 1].y, 1 > v && (v = 1 / v), g.minDiff > v && 1 !== v && (g.minDiff = v)) : (v = e - p.dataPoints[f - 1].y, 0 > v && (v *= -1), g.minDiff > v && 0 !== v && (g.minDiff = v)));
                }
                if (b < s && !d2)
                  null !== p.dataPoints[f].y && (y = b);
                else {
                  if (!d2 && (d2 = true, 0 < f)) {
                    f -= 2;
                    continue;
                  }
                  if (b > t2 && !x)
                    x = true;
                  else if (b > t2 && x)
                    continue;
                  p.dataPoints[f].label && (a.axisX.labels[b] = p.dataPoints[f].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === p.dataPoints[f].y ? c.viewPortMin === b && y < b && (c.viewPortMin = y) : (m[b] = (m[b] || 0) + p.dataPoints[f].y, p.dataPointEOs[f].cumulativeY = m[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? r[b] ? r[b] += e : (r[b] = e, D = Math.min(e, D)) : u[b] ? u[b] += e : (u[b] = e, k = Math.max(e, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (g.dataPointYPositiveSums ? (g.dataPointYPositiveSums.push.apply(g.dataPointYPositiveSums, r), g.dataPointYNegativeSums.push.apply(g.dataPointYPositiveSums, u)) : (g.dataPointYPositiveSums = r, g.dataPointYNegativeSums = u));
              p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
            }
            for (f in r)
              r.hasOwnProperty(f) && !isNaN(f) && (a = r[f], a < g.min && (g.min = Math.min(a, D)), a > g.max && (g.max = a), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = Math.min(a, D)), a > g.viewPortMax && (g.viewPortMax = a)));
            for (f in u)
              u.hasOwnProperty(f) && !isNaN(f) && (a = u[f], a < g.min && (g.min = a), a > g.max && (g.max = Math.max(a, k)), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = a), a > g.viewPortMax && (g.viewPortMax = Math.max(a, k))));
          }
        };
        q.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = false, u = false, D = {}, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
              var n = this.data[a.dataSeriesIndexes[m]], p = 0, f = false, d2 = false, x;
              if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType)
                h = true;
              for (p = 0; p < n.dataPoints.length; p++) {
                "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                n.dataPoints[p].x.getTime ? (h = true, b = n.dataPoints[p].x.getTime()) : b = n.dataPoints[p].x;
                e = l(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < p) {
                  if (a.axisX.logarithmic) {
                    var t2 = b / n.dataPoints[p - 1].x;
                    1 > t2 && (t2 = 1 / t2);
                    c.minDiff > t2 && 1 !== t2 && (c.minDiff = t2);
                  } else
                    t2 = b - n.dataPoints[p - 1].x, 0 > t2 && (t2 *= -1), c.minDiff > t2 && 0 !== t2 && (c.minDiff = t2);
                  l(e) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < e && (t2 = e / n.dataPoints[p - 1].y, 1 > t2 && (t2 = 1 / t2), g.minDiff > t2 && 1 !== t2 && (g.minDiff = t2)) : (t2 = e - n.dataPoints[p - 1].y, 0 > t2 && (t2 *= -1), g.minDiff > t2 && 0 !== t2 && (g.minDiff = t2)));
                }
                if (b < y && !f)
                  null !== e && (x = b);
                else {
                  if (!f && (f = true, 0 < p)) {
                    p -= 2;
                    continue;
                  }
                  if (b > s && !d2)
                    d2 = true;
                  else if (b > s && d2)
                    continue;
                  n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && x < b && (c.viewPortMin = x) : (D[b] = (D[b] || 0) + n.dataPoints[p].y, n.dataPointEOs[p].cumulativeY = D[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? r = true : 0 > e && (u = true), k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e));
                }
              }
              n.axisX.valueType = n.xValueType = h ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (g.max = l(g.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(g.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), g.min = l(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : r && !u ? (g.max = l(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = l(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : r && u ? (g.max = l(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = l(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)) : !r && u && (g.max = l(g.viewPortMax) ? -1 : Math.max(g.viewPortMax, -1), g.min = l(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99));
            g.viewPortMin = g.min;
            g.viewPortMax = g.max;
            a.dataPointYSums = k;
          }
        };
        q.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h, r, u = false, l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
              var k = this.data[a.dataSeriesIndexes[l2]], m = 0, n = false, p = false, f, d2, x;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                var t2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (k.dataPoints[m].x && k.dataPoints[m].x.getTime || "dateTime" === k.xValueType)
                u = true;
              for (m = 0; m < k.dataPoints.length; m++) {
                "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[m].x.getTime ? (u = true, b = k.dataPoints[m].x.getTime()) : b = k.dataPoints[m].x;
                if ((e = k.dataPoints[m].y) && e.length) {
                  h = Math.min.apply(null, e);
                  r = Math.max.apply(null, e);
                  d2 = true;
                  for (var z = 0; z < e.length; z++)
                    null === e.k && (d2 = false);
                  d2 && (n || (x = f), f = b);
                }
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                h < g.min && (g.min = h);
                r > g.max && (g.max = r);
                0 < m && (a.axisX.logarithmic ? (d2 = b / k.dataPoints[m - 1].x, 1 > d2 && (d2 = 1 / d2), c.minDiff > d2 && 1 !== d2 && (c.minDiff = d2)) : (d2 = b - k.dataPoints[m - 1].x, 0 > d2 && (d2 *= -1), c.minDiff > d2 && 0 !== d2 && (c.minDiff = d2)), e && (null !== e[0] && k.dataPoints[m - 1].y && null !== k.dataPoints[m - 1].y[0]) && (a.axisY.logarithmic ? (d2 = e[0] / k.dataPoints[m - 1].y[0], 1 > d2 && (d2 = 1 / d2), g.minDiff > d2 && 1 !== d2 && (g.minDiff = d2)) : (d2 = e[0] - k.dataPoints[m - 1].y[0], 0 > d2 && (d2 *= -1), g.minDiff > d2 && 0 !== d2 && (g.minDiff = d2))));
                if (!(b < t2) || n) {
                  if (!n && (n = true, 0 < m)) {
                    m -= 2;
                    f = x;
                    continue;
                  }
                  if (b > s && !p)
                    p = true;
                  else if (b > s && p)
                    continue;
                  k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  if (c.viewPortMin === b && e) {
                    for (z = 0; z < e.length; z++)
                      if (null === e[z] && f < b) {
                        c.viewPortMin = f;
                        break;
                      }
                  }
                  null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (h < g.viewPortMin && (g.viewPortMin = h), r > g.viewPortMax && (g.viewPortMax = r));
                }
              }
              k.axisX.valueType = k.xValueType = u ? "dateTime" : "number";
            }
        };
        q.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, r = 0; r < a.dataSeriesIndexes.length; r++) {
              var u = this.data[a.dataSeriesIndexes[r]], l2 = 0, k = false, m = false, n = b = 0;
              if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement)
                var p = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (u.dataPoints[l2].x && u.dataPoints[l2].x.getTime || "dateTime" === u.xValueType)
                h = true;
              for (l2 = 0; l2 < u.dataPoints.length; l2++)
                "undefined" !== typeof u.dataPoints[l2].isCumulativeSum && true === u.dataPoints[l2].isCumulativeSum ? (u.dataPointEOs[l2].cumulativeSumYStartValue = 0, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPoints[l2].y = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum) : "undefined" !== typeof u.dataPoints[l2].isIntermediateSum && true === u.dataPoints[l2].isIntermediateSum ? (u.dataPointEOs[l2].cumulativeSumYStartValue = n, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPoints[l2].y = 0 === l2 ? 0 : b, n = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, b = 0) : (e = "number" !== typeof u.dataPoints[l2].y ? 0 : u.dataPoints[l2].y, u.dataPointEOs[l2].cumulativeSumYStartValue = 0 === l2 ? 0 : u.dataPointEOs[l2 - 1].cumulativeSum, u.dataPointEOs[l2].cumulativeSum = 0 === l2 ? e : u.dataPointEOs[l2 - 1].cumulativeSum + e, b += e);
              for (l2 = 0; l2 < u.dataPoints.length; l2++)
                if ("undefined" === typeof u.dataPoints[l2].x && (u.dataPoints[l2].x = l2 + (a.axisX.logarithmic ? 1 : 0)), u.dataPoints[l2].x.getTime ? (h = true, b = u.dataPoints[l2].x.getTime()) : b = u.dataPoints[l2].x, e = u.dataPoints[l2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), u.dataPointEOs[l2].cumulativeSum < g.min && (g.min = u.dataPointEOs[l2].cumulativeSum), u.dataPointEOs[l2].cumulativeSum > g.max && (g.max = u.dataPointEOs[l2].cumulativeSum), 0 < l2 && (a.axisX.logarithmic ? (n = b / u.dataPoints[l2 - 1].x, 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n)) : (n = b - u.dataPoints[l2 - 1].x, 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)), null !== e && null !== u.dataPoints[l2 - 1].y && (a.axisY.logarithmic ? (e = u.dataPointEOs[l2].cumulativeSum / u.dataPointEOs[l2 - 1].cumulativeSum, 1 > e && (e = 1 / e), g.minDiff > e && 1 !== e && (g.minDiff = e)) : (e = u.dataPointEOs[l2].cumulativeSum - u.dataPointEOs[l2 - 1].cumulativeSum, 0 > e && (e *= -1), g.minDiff > e && 0 !== e && (g.minDiff = e)))), !(b < p) || k) {
                  if (!k && (k = true, 0 < l2)) {
                    l2 -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  u.dataPoints[l2].label && (a.axisX.labels[b] = u.dataPoints[l2].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  0 < l2 && (u.dataPointEOs[l2 - 1].cumulativeSum < g.viewPortMin && (g.viewPortMin = u.dataPointEOs[l2 - 1].cumulativeSum), u.dataPointEOs[l2 - 1].cumulativeSum > g.viewPortMax && (g.viewPortMax = u.dataPointEOs[l2 - 1].cumulativeSum));
                  u.dataPointEOs[l2].cumulativeSum < g.viewPortMin && (g.viewPortMin = u.dataPointEOs[l2].cumulativeSum);
                  u.dataPointEOs[l2].cumulativeSum > g.viewPortMax && (g.viewPortMax = u.dataPointEOs[l2].cumulativeSum);
                }
              u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
            }
        };
        q.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, e2) {
            if (e2)
              return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function g(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2)
                for (var f2 = a2.axisY.dataInfo, g2 = a2.axisX.dataInfo, h2, r2 = g2.min, k2 = g2.max, m2 = f2.min, n2 = f2.max, g2 = g2._dataRanges, f2 = f2._dataRanges, p2, u2 = 0, D2 = 0; D2 < a2.dataSeriesIndexes.length; D2++) {
                  var d2 = e.data[a2.dataSeriesIndexes[D2]];
                  if (!(4 > d2.dataPoints.length)) {
                    for (u2 = 0; u2 < d2.dataPoints.length; u2++)
                      if (b2 && (p2 = (k2 + 1 - r2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, h2 = d2.dataPoints[u2].x.getTime ? d2.dataPoints[u2].x.getTime() : d2.dataPoints[u2].x, p2 = Math.floor((h2 - r2) / p2), h2 < g2[p2].min && (g2[p2].min = h2), h2 > g2[p2].max && (g2[p2].max = h2)), c2) {
                        var t2 = (n2 + 1 - m2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        if ((h2 = "waterfall" === a2.type ? d2.dataPointEOs[u2].cumulativeSum : d2.dataPoints[u2].y) && h2.length)
                          for (var ea = 0; ea < h2.length; ea++)
                            p2 = Math.floor((h2[ea] - m2) / t2), h2[ea] < f2[p2].min && (f2[p2].min = h2[ea]), h2[ea] > f2[p2].max && (f2[p2].max = h2[ea]);
                        else
                          l(h2) || (p2 = Math.floor((h2 - m2) / t2), h2 < f2[p2].min && (f2[p2].min = h2), h2 > f2[p2].max && (f2[p2].max = h2));
                      }
                  }
                }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
              for (var b2 = a2.axisX.dataInfo, c2 = b2.min, f2 = b2.max, g2 = b2._dataRanges, h2, r2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
                var m2 = e.data[a2.dataSeriesIndexes[k2]];
                if (!(4 > m2.dataPoints.length))
                  for (r2 = 0; r2 < m2.dataPoints.length; r2++)
                    h2 = (f2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = m2.dataPoints[r2].x.getTime ? m2.dataPoints[r2].x.getTime() : m2.dataPoints[r2].x, h2 = Math.floor((b2 - c2) / h2), b2 < g2[h2].min && (g2[h2].min = b2), b2 > g2[h2].max && (g2[h2].max = b2);
              }
          }
          for (var b, e = this, h = false, r = 0; r < this._axes.length; r++)
            if (this._axes[r].scaleBreaks && this._axes[r].scaleBreaks.autoCalculate && 1 <= this._axes[r].scaleBreaks.maxNumberOfAutoBreaks) {
              h = true;
              this._axes[r].dataInfo._dataRanges = [];
              for (var u = 0; u < 100 / Math.max(parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) || 10, 10); u++)
                this._axes[r].dataInfo._dataRanges.push({
                  min: Infinity,
                  max: -Infinity
                });
            }
          if (h) {
            for (r = 0; r < this.plotInfo.plotTypes.length; r++)
              for (h = this.plotInfo.plotTypes[r], u = 0; u < h.plotUnits.length; u++)
                b = h.plotUnits[u], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? g(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (r = 0; r < this._axes.length; r++)
              if (this._axes[r].dataInfo._dataRanges) {
                var D = this._axes[r].dataInfo.min;
                b = (this._axes[r].dataInfo.max + 1 - D) * Math.max(parseFloat(this._axes[r].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                var k = this._axes[r].dataInfo._dataRanges, m, n, h = [];
                if (this._axes[r].dataInfo.dataPointYPositiveSums) {
                  var p = this._axes[r].dataInfo.dataPointYPositiveSums;
                  m = k;
                  for (u in p)
                    if (p.hasOwnProperty(u) && !isNaN(u) && (n = p[u], !l(n))) {
                      var f = Math.floor((n - D) / b);
                      n < m[f].min && (m[f].min = n);
                      n > m[f].max && (m[f].max = n);
                    }
                  delete this._axes[r].dataInfo.dataPointYPositiveSums;
                }
                if (this._axes[r].dataInfo.dataPointYNegativeSums) {
                  p = this._axes[r].dataInfo.dataPointYNegativeSums;
                  m = k;
                  for (u in p)
                    p.hasOwnProperty(u) && !isNaN(u) && (n = -1 * p[u], l(n) || (f = Math.floor((n - D) / b), n < m[f].min && (m[f].min = n), n > m[f].max && (m[f].max = n)));
                  delete this._axes[r].dataInfo.dataPointYNegativeSums;
                }
                for (u = 0; u < k.length - 1; u++)
                  if (m = k[u].max, isFinite(m))
                    for (; u < k.length - 1; )
                      if (D = k[u + 1].min, isFinite(D)) {
                        n = D - m;
                        n > b && h.push({ diff: n, start: m, end: D });
                        break;
                      } else
                        u++;
                if (this._axes[r].scaleBreaks.customBreaks) {
                  for (u = 0; u < this._axes[r].scaleBreaks.customBreaks.length; u++)
                    for (b = 0; b < h.length; b++)
                      if (this._axes[r].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[r].scaleBreaks.customBreaks[u].endValue || this._axes[r].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[r].scaleBreaks.customBreaks[u].endValue || h[b].start <= this._axes[r].scaleBreaks.customBreaks[u].startValue && this._axes[r].scaleBreaks.customBreaks[u].startValue <= h[b].end || h[b].start <= this._axes[r].scaleBreaks.customBreaks[u].endValue && this._axes[r].scaleBreaks.customBreaks[u].endValue <= h[b].end)
                        h.splice(b, 1), b--;
                }
                h.sort(function(a2, b2) {
                  return b2.diff - a2.diff;
                });
                for (u = 0; u < Math.min(h.length, this._axes[r].scaleBreaks.maxNumberOfAutoBreaks); u++)
                  b = a(h[u].start, h[u].end, this._axes[r].logarithmic ? this._axes[r].dataInfo.max / this._axes[r].dataInfo.min : this._axes[r].dataInfo.max - this._axes[r].dataInfo.min, this._axes[r].logarithmic), this._axes[r].scaleBreaks.autoBreaks.push(new fa2(this, "autoBreaks", b, u, ++this._eventManager.lastObjectId, this._axes[r].scaleBreaks)), this._axes[r].scaleBreaks._appliedBreaks.push(this._axes[r].scaleBreaks.autoBreaks[this._axes[r].scaleBreaks.autoBreaks.length - 1]);
                this._axes[r].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                  return a2.startValue - b2.startValue;
                });
              }
          }
        };
        q.prototype.renderCrosshairs = function(a, g) {
          for (var c = 0; c < this.axisX.length; c++)
            this.axisX[c] != a && (this.axisX[c].crosshair && this.axisX[c].crosshair.enabled && !this.axisX[c].crosshair._hidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseX)) : g || this.axisX[c].showCrosshair(this.axisX[c].crosshair._updatedValue));
          for (c = 0; c < this.axisX2.length; c++)
            this.axisX2[c] != a && (this.axisX2[c].crosshair && this.axisX2[c].crosshair.enabled && !this.axisX2[c].crosshair._hidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX2[c].crosshair.render(
              null,
              this.sessionVariables.mouseY,
              this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseY)
            ) : this.axisX2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseX)) : g || this.axisX2[c].showCrosshair(this.axisX2[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY.length; c++)
            this.axisY[c] != a && (this.axisY[c].crosshair && this.axisY[c].crosshair.enabled && !this.axisY[c].crosshair._hidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseY)) : g || this.axisY[c].showCrosshair(this.axisY[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY2.length; c++)
            this.axisY2[c] != a && (this.axisY2[c].crosshair && this.axisY2[c].crosshair.enabled && !this.axisY2[c].crosshair._hidden) && (g && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseY)) : g || this.axisY2[c].showCrosshair(this.axisY2[c].crosshair._updatedValue));
        };
        q.prototype.getDataPointAtXY = function(a, g, c) {
          c = c || false;
          for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var h = null;
            (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, g, c)) && b.push(h);
          }
          a = null;
          g = false;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
              if (e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                g = true;
                break;
              }
            }
          for (c = 0; c < b.length; c++)
            g && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        q.prototype.getObjectAtXY = function(a, g, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, g, c || false))
            b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (t)
            b = bb(a, g, this._eventManager.ghostCtx);
          else
            for (c = 0; c < this.legend.items.length; c++) {
              var e = this.legend.items[c];
              a >= e.x1 && (a <= e.x2 && g >= e.y1 && g <= e.y2) && (b = e.id);
            }
          return b;
        };
        q.prototype.getAutoFontSize = ob;
        q.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        q.prototype.clearCanvas = nb;
        q.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        q.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var g = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                g = ["mousemove", "mousedown"];
                this._lastTouchData = Qa(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                g = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, g = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              e = Qa(b);
              e.time = /* @__PURE__ */ new Date();
              try {
                var r = e.y - this._lastTouchData.y, h = e.time - this._lastTouchData.time;
                if (1 < Math.abs(r) && this._lastTouchData.scroll || 5 < Math.abs(r) && 250 > h)
                  this._lastTouchData.scroll = true, this.stockChart && (this.stockChart._chartScroll = true);
              } catch (u) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled)
                this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else
                for (c = 0; c < g.length; c++)
                  if (e = g[c], r = document.createEvent("MouseEvent"), r.initMouseEvent(
                    e,
                    true,
                    true,
                    window,
                    1,
                    b.screenX,
                    b.screenY,
                    b.clientX,
                    b.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                  ), b.target.dispatchEvent(r), !l(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === e)
                    a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault(), this.stockChart && (this.stockChart._chartScroll = null);
            }
          }
        };
        q.prototype._dispatchRangeEvent = function(a, g) {
          var c = { chart: this };
          c.type = a;
          c.trigger = g;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var e = 0; e < b.length; e++)
            if (l(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
              for (var h = 0; h < this.axisY.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisY2" === b[e])
              for (h = 0; h < this.axisY2.length; h++)
                c[b[e]].push({
                  viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum,
                  viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum
                });
            else if ("axisX" === b[e])
              for (h = 0; h < this.axisX.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
              for (h = 0; h < this.axisX2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        q.prototype._mouseEventHandler = function(a) {
          function g() {
            q.capturedEventParam && (e = q.capturedEventParam, r = e.bounds, "mouseup" === b && (q.capturedEventParam = null, e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, false)), e.hasOwnProperty(b) && ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? a.target !== e.chart.overlaidCanvas && t || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Qa(a), b = a.type, e, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          if (this._ignoreNextEvent)
            g(), this._ignoreNextEvent = false;
          else if (g(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var r;
            Ia && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!h) {
              if (!q.capturedEventParam && this._events) {
                for (h = 0; h < this._events.length; h++)
                  if (this._events[h].hasOwnProperty(b))
                    if (e = this._events[h], r = e.bounds, c.x >= r.x1 && c.x <= r.x2 && c.y >= r.y1 && c.y <= r.y2) {
                      e[b].call(e.context, c.x, c.y);
                      "mousedown" === b && true === e.capture ? (q.capturedEventParam = e, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener(
                        "mouseup",
                        this._mouseEventHandler,
                        false
                      ));
                      break;
                    } else
                      e = null;
                a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
              }
              h = this.plotArea;
              if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                for (h = 0; h < this.axisX.length; h++)
                  this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent(
                    "hidden",
                    { chart: this, axis: this.axisX[h].options },
                    this.axisX[h].crosshair
                  ));
                for (h = 0; h < this.axisX2.length; h++)
                  this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair));
                for (h = 0; h < this.axisY.length; h++)
                  this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent(
                    "hidden",
                    { chart: this, axis: this.axisY[h].options },
                    this.axisY[h].crosshair
                  ));
                for (h = 0; h < this.axisY2.length; h++)
                  this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[h].options }, this.axisY2[h].crosshair));
              }
              this.sessionVariables.mouseX = c.x;
              this.sessionVariables.mouseY = c.y;
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        q.prototype._plotAreaMouseDown = function(a, g) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: g };
        };
        q.prototype._plotAreaMouseUp = function(a, g) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = g - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), r = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
              var u = h, h = e, e = u;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled)
                for (e = h = 0; e < this._axes.length; e++)
                  c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, r = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, r = true) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum = c.viewportMaximum + h, r = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, r = true);
              else if ((!e || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint)
                  return;
                c = e ? this.dragStartPoint.x : this.plotArea.x1;
                b = h ? this.dragStartPoint.y : this.plotArea.y1;
                e = e ? a : this.plotArea.x2;
                h = h ? g : this.plotArea.y2;
                2 < Math.abs(c - e) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, e, h) && (r = true);
              }
              r && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), r && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ma(this._zoomButton, this._resetButton), sa(this, this._zoomButton, "pan"), sa(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length)
              for (r = 0; r < this.axisX.length; r++)
                this.axisX[r].crosshair && this.axisX[r].crosshair.enabled && this.axisX[r].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (r = 0; r < this.axisX2.length; r++)
                this.axisX2[r].crosshair && this.axisX2[r].crosshair.enabled && this.axisX2[r].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (r = 0; r < this.axisY.length; r++)
                this.axisY[r].crosshair && this.axisY[r].crosshair.enabled && this.axisY[r].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (r = 0; r < this.axisY2.length; r++)
                this.axisY2[r].crosshair && this.axisY2[r].crosshair.enabled && this.axisY2[r].renderCrosshair(a, g);
            if (this.axisX && 0 < this.axisX.length)
              for (r = 0; r < this.axisX.length; r++)
                this.axisX[r].crosshair && this.axisX[r].crosshair.enabled && this.axisX[r].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (r = 0; r < this.axisX2.length; r++)
                this.axisX2[r].crosshair && this.axisX2[r].crosshair.enabled && this.axisX2[r].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (r = 0; r < this.axisY.length; r++)
                this.axisY[r].crosshair && this.axisY[r].crosshair.enabled && this.axisY[r].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (r = 0; r < this.axisY2.length; r++)
                this.axisY2[r].crosshair && this.axisY2[r].crosshair.enabled && this.axisY2[r].crosshair.renderLabel();
          }
        };
        q.prototype._plotAreaMouseMove = function(a, g) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), r = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = e, e = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - g;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var u = 0; u < this.axisX.length; u++)
                this.axisX[u].crosshair && this.axisX[u].crosshair.enabled && (this.axisX[u].crosshair.hide(), this.axisX[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[u].options }, this.axisX[u].crosshair));
              for (u = 0; u < this.axisX2.length; u++)
                this.axisX2[u].crosshair && this.axisX2[u].crosshair.enabled && (this.axisX2[u].crosshair.hide(), this.axisX2[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[u].options }, this.axisX2[u].crosshair));
              for (u = 0; u < this.axisY.length; u++)
                this.axisY[u].crosshair && this.axisY[u].crosshair.enabled && (this.axisY[u].crosshair.hide(), this.axisY[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[u].options }, this.axisY[u].crosshair));
              for (u = 0; u < this.axisY2.length; u++)
                this.axisY2[u].crosshair && this.axisY2[u].crosshair.enabled && (this.axisY2[u].crosshair.hide(), this.axisY2[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[u].options }, this.axisY2[u].crosshair));
            } else
              this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, g);
            if ((!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled)
                e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: h ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: h ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(r._panTimerId), r._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                  return function() {
                    r._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (r._dispatchRangeEvent("rangeChanging", "pan"), r.stockChart && (r.stockChart._rangeEventParameter.type = "rangeChanging", r.stockChart.dispatchEvent("rangeChanging", r.stockChart._rangeEventParameter, r.stockChart)), r.render(), r._dispatchRangeEvent("rangeChanged", "pan"), r.stockChart && (r.stockChart._rangeEventParameter.type = "rangeChanged", r.stockChart.dispatchEvent(
                      "rangeChanged",
                      r.stockChart._rangeEventParameter,
                      r.stockChart
                    )), r.dragStartPoint.x = a, r.dragStartPoint.y = g);
                  };
                }(e.x1, e.y1, e.x2, e.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = e ? this.dragStartPoint.x : this.plotArea.x1, u = h ? this.dragStartPoint.y : this.plotArea.y1, l2 = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = h ? g - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, u, e ? a : this.plotArea.x2 - this.plotArea.x1, h ? g : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, u, l2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, g), "none" !== this.plotInfo.axisPlacement) {
            this.sessionVariables.crosshairShownByPixel = true;
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(
                  a,
                  g
                );
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
          }
        };
        q.prototype._zoomPanToSelectedRegion = function(a, g, c, b, e) {
          a = this.validateRegion(a, g, c, b, e);
          g = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid)
            for (b = 0; b < g.length; b++)
              e = c[b], g[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: e.val1,
                maximum: e.val2
              });
          return a.isValid;
        };
        q.prototype.validateRegion = function(a, g, c, b, e) {
          e = e || false;
          for (var h = 0 <= this.zoomType.indexOf("x"), r = 0 <= this.zoomType.indexOf("y"), u = false, l2 = [], k = [], m = [], n = 0; n < this._axes.length; n++)
            ("axisX" === this._axes[n].type && h || "axisY" === this._axes[n].type && r) && k.push(this._axes[n]);
          for (r = 0; r < k.length; r++) {
            var n = k[r], h = false, p = n.convertPixelToValue({ x: a, y: g }), f = n.convertPixelToValue({ x: c, y: b });
            if (p > f)
              var d2 = f, f = p, p = d2;
            if (n.scaleBreaks)
              for (d2 = 0; !h && d2 < n.scaleBreaks._appliedBreaks.length; d2++)
                h = n.scaleBreaks._appliedBreaks[d2].startValue <= p && n.scaleBreaks._appliedBreaks[d2].endValue >= f;
            if (isFinite(n.dataInfo.minDiff)) {
              if (d2 = n.getApparentDifference(p, f, null, true), !(h || !(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && (n.logarithmic && d2 < Math.pow(n.dataInfo.minDiff, 3) || !n.logarithmic && d2 < 3 * Math.abs(n.dataInfo.minDiff)) || p < n.minimum || f > n.maximum))
                l2.push(n), m.push({ val1: p, val2: f }), u = true;
              else if (!e) {
                u = false;
                break;
              }
            }
          }
          return { isValid: u, axesWithValidRange: l2, axesRanges: m };
        };
        q.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !t && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var g = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1;
              a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1;
              a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2;
              a.y2 = g.y1 > c.lineCoordinates.y2 ? g.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1, a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1, a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2, a.y2 = g.y2 > c.lineCoordinates.y2 ? g.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else
            g = this.layoutManager.getFreeSpace(), a.x1 = g.x1, a.x2 = g.x2, a.y1 = g.y1, a.y2 = g.y2, a.width = g.width, a.height = g.height;
          t || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
        };
        q.prototype.renderIndexLabels = function(a) {
          var g = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, h = 0, r = e = h = 0, u = 0, d2 = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var m = this._indexLabels[a], n = m.chartType.toLowerCase(), p, f, u = ma(
              "indexLabelFontColor",
              m.dataPoint,
              m.dataSeries
            ), E = ma("indexLabelFontSize", m.dataPoint, m.dataSeries), d2 = ma("indexLabelFontFamily", m.dataPoint, m.dataSeries), k = ma("indexLabelFontStyle", m.dataPoint, m.dataSeries);
            p = ma("indexLabelFontWeight", m.dataPoint, m.dataSeries);
            var x = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
            f = ma("indexLabelBorderColor", m.dataPoint, m.dataSeries);
            var h = ma("indexLabelBorderThickness", m.dataPoint, m.dataSeries), e = ma("indexLabelMaxWidth", m.dataPoint, m.dataSeries), r = ma("indexLabelWrap", m.dataPoint, m.dataSeries), y = ma("indexLabelLineDashType", m.dataPoint, m.dataSeries), s = ma("indexLabelLineColor", m.dataPoint, m.dataSeries), z = l(m.dataPoint.indexLabelLineThickness) ? l(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness, b = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, v = { percent: null, total: null }, W = null;
            if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type)
              v = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
            if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter)
              W = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: v.total, percent: v.percent };
            var q2 = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(W) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(W) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : null;
            if (null !== q2 && "" !== q2) {
              var v = ma("indexLabelPlacement", m.dataPoint, m.dataSeries), W = ma("indexLabelOrientation", m.dataPoint, m.dataSeries), C = ma("indexLabelTextAlign", m.dataPoint, m.dataSeries), w3 = m.direction, A3 = m.dataSeries.axisX, K = m.dataSeries.axisY, L = false, x = new ka(g, {
                x: 0,
                y: 0,
                maxWidth: e ? e : 0.5 * this.width,
                maxHeight: r ? 5 * E : 1.5 * E,
                angle: "horizontal" === W ? 0 : -90,
                text: q2,
                padding: 0,
                backgroundColor: x,
                borderColor: f,
                borderThickness: h,
                textAlign: C,
                fontSize: E,
                fontFamily: d2,
                fontWeight: p,
                fontColor: u,
                fontStyle: k,
                textBaseline: "middle"
              });
              x.measureText();
              m.dataSeries.indexLabelMaxWidth = x.maxWidth;
              if ("stackedarea100" === n) {
                if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1)
                  continue;
              } else if ("rangearea" === n || "rangesplinearea" === n) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || m.dataPoint.y < K.viewportMinimum || m.dataPoint.y > K.viewportMaximum)
                  continue;
              } else if (0 <= n.indexOf("column")) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) < K.viewportMinimum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if ("waterfall" === n || "error" === n && !m.axisSwapped) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || m.bounds.y1 > c.y2 || m.bounds.y2 < c.y1)
                  continue;
              } else if (0 <= n.indexOf("bar") || "error" === n) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1)
                  continue;
              } else if ("candlestick" === n || "ohlc" === n) {
                if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if (m.dataPoint.x < A3.viewportMinimum || m.dataPoint.x > A3.viewportMaximum)
                continue;
              r = u = 2;
              "horizontal" === W ? (d2 = x.width, k = x.height) : (k = x.width, d2 = x.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= n.indexOf("line") || 0 <= n.indexOf("area"))
                  v = "auto", u = 4;
                else if (0 <= n.indexOf("stacked"))
                  "auto" === v && (v = "inside");
                else if ("bubble" === n || "scatter" === n)
                  v = "inside";
                p = m.point.x - d2 / 2 + ("horizontal" === W ? 0 : x._lineHeight / 2);
                if ("inside" !== v)
                  e = c.y1, h = c.y2, 0 < w3 ? (f = m.point.y + x._lineHeight / 2 - k - u - b, f < e && (f = "auto" === v ? Math.max(m.point.y, e) + x._lineHeight / 2 + u + b : e + x._lineHeight / 2 + u + b, L = f + ("horizontal" === W ? k - x._lineHeight / 2 : 0) > m.point.y, !L || (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) || (f -= b))) : (f = m.point.y + x._lineHeight / 2 + u + b, f > h - k + x._lineHeight / 2 - u && (f = "auto" === v ? Math.min(m.point.y, h) + x._lineHeight / 2 - k - u - b : h + x._lineHeight / 2 - k - u - b, L = f - ("horizontal" === W ? x._lineHeight / 2 : k) < m.point.y, !L || (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) || (f += b)));
                else {
                  Math.max(
                    m.bounds.y1,
                    c.y1
                  );
                  h = Math.min(m.bounds.y2, c.y2) - k + x._lineHeight / 2;
                  b = 0 <= n.indexOf("range") || "error" === n ? 0 < w3 ? Math.max(m.bounds.y1, c.y1) + x._lineHeight / 2 + u : Math.min(m.bounds.y2, c.y2) + x._lineHeight / 2 - k - u : (Math.max(m.bounds.y1, c.y1) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + x._lineHeight / 2;
                  if (0 < w3) {
                    if (f = b, "bubble" === n || "scatter" === n)
                      f = m.point.y - k / 2 + x._lineHeight / 2, k > m.bounds.y2 - m.bounds.y1 && (f -= k / 2 + u), 0 > f - x._lineHeight / 2 && (f += Math.abs(f - x._lineHeight / 2) <= (m.bounds.y2 - m.bounds.y1) / 2 + u ? Math.abs(f - x._lineHeight / 2) : (m.bounds.y2 - m.bounds.y1) / 2 + u);
                  } else
                    f = Math.min(m.point.y, b), f > h - k - u && ("bubble" === n || "scatter" === n) && (f = Math.min(m.point.y + u, c.y2 - k - u));
                  f = Math.min(f, h);
                }
              } else
                0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (v = "auto", r = 4) : 0 <= n.indexOf("stacked") ? "auto" === v && (v = "inside") : "bubble" === n && (v = "inside"), f = m.point.y + x._lineHeight / 2 - k / 2, "inside" !== v ? (h = c.x1, e = c.x2, 0 > w3 ? (p = m.point.x - d2 + ("horizontal" === W ? 0 : x._lineHeight / 2) - r - b, ("horizontal" === W ? p : p - x._lineHeight / 2) < h && (p = "auto" === v ? Math.max(m.point.x, h) + ("horizontal" === W ? 0 : x._lineHeight / 2) + u + b : h + ("horizontal" === W ? 0 : x._lineHeight / 2) + r, (L = p + d2 - ("horizontal" === W ? 0 : x._lineHeight / 2) > m.point.x) && (p -= b))) : (p = m.point.x + ("horizontal" === W ? 0 : x._lineHeight / 2) + r + b, ("horizontal" === W ? p : p - x._lineHeight / 2) > e - d2 - r - b && (p = "auto" === v ? Math.min(m.point.x, e) - ("horizontal" === W ? d2 : d2 - x._lineHeight / 2) - r - b : e - d2 - r + ("horizontal" === W ? 0 : x._lineHeight / 2), (L = p - ("horizontal" === W ? 0 : x._lineHeight / 2) < m.point.x) && (p += b)))) : (h = Math.max(m.bounds.x1, c.x1), Math.min(m.bounds.x2, c.x2), b = 0 <= n.indexOf("range") || "error" === n ? 0 > w3 ? Math.max(m.bounds.x1, c.x1) : Math.min(m.bounds.x2, c.x2) - d2 - r + ("horizontal" === W ? 0 : x._lineHeight / 2) : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 - d2 / 2 + ("horizontal" === W ? 0 : x._lineHeight / 2), p = 0 > w3 ? b : Math.min(m.point.x, b), p = Math.max(p, h + ("horizontal" === W ? 0 : x._lineHeight / 2 + u)));
              "vertical" === W && (f += k - x._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) && (L = 0 < w3 ? f + ("horizontal" === W ? k - x._lineHeight / 2 : 0) > m.point.y : f - ("horizontal" === W ? x._lineHeight / 2 : k) < m.point.y), "bubble" === n || "scatter" === n) && (p += x._lineHeight / 2 - E / 2);
              x.x = p;
              x.y = f;
              x.render(true);
              z && ("inside" !== v && (0 > n.indexOf("bar") && ("error" !== n || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2 || !L) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) && ("error" !== n || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2 || !L)) && (g.lineWidth = z, g.strokeStyle = s ? s : "gray", g.setLineDash && g.setLineDash(I(y, z)), g.beginPath(), g.moveTo(m.point.x, m.point.y), 0 <= n.indexOf("bar") || "error" === n && m.axisSwapped ? g.lineTo(p + (0 < m.direction ? 0 : d2) + ("vertical" === W ? -x._lineHeight / 2 : 0), f + ("vertical" === W ? -k / 2 : k / 2 - x._lineHeight / 2)) : 0 <= n.indexOf("column") || "error" === n && !m.axisSwapped ? g.lineTo(p + d2 / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2), f + ("vertical" === W ? f - k < m.point.y ? 0 : -k : (f - x._lineHeight / 2 < m.point.y ? k : 0) - x._lineHeight / 2)) : 0 <= n.indexOf("waterfall") ? g.lineTo(p + d2 / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2), "vertical" === W ? 0 < w3 && f < m.point.y ? f : 0 > w3 && f - k > m.point.y ? f - k : m.point.y : 0 < w3 && f + k - x._lineHeight / 2 < m.point.y ? f + k - x._lineHeight / 2 : 0 > w3 && f - x._lineHeight / 2 > m.point.y ? f - x._lineHeight / 2 : m.point.y) : g.lineTo(p + d2 / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2), f + ("vertical" === W ? f - k < m.point.y ? 0 : -k : (f + k - x._lineHeight / 2 < m.point.y ? k : 0) - x._lineHeight / 2)), g.stroke());
            }
          }
          g = { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
          for (a = 0; a < this._indexLabels.length; a++)
            m = this._indexLabels[a], x = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = l(x) ? t ? "transparent" : null : x;
          return g;
        };
        q.prototype.renderLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], r, u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                c.setLineDash(f);
              }
              var d2 = k.id;
              this._eventManager.objectMap[d2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              d2 = U(d2);
              b.strokeStyle = d2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var d2 = k._colorSet, x = d2 = k.lineColor = k.options.lineColor ? k.options.lineColor : d2[0];
              c.strokeStyle = d2;
              var y = true, s = 0, z, v;
              c.beginPath();
              if (0 < m.length) {
                for (var W = false, s = 0; s < m.length; s++)
                  if (z = m[s].x.getTime ? m[s].x.getTime() : m[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || W || y) && (c.stroke(), t && b.stroke()), W = true;
                    else {
                      z = a.axisX.convertValueToPixel(z);
                      v = a.axisY.convertValueToPixel(m[s].y);
                      var q2 = k.dataPointIds[s];
                      this._eventManager.objectMap[q2] = { id: q2, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: s, x1: z, y1: v };
                      y || W ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(r.x, r.y), n = k.nullDataLineDashType, c.setLineDash(p)), c.lineTo(z, v), t && b.lineTo(z, v)) : (c.beginPath(), c.moveTo(z, v), t && (b.beginPath(), b.moveTo(z, v))), W = y = false) : (c.lineTo(z, v), t && b.lineTo(z, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, v), t && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                      r = { x: z, y: v };
                      s < m.length - 1 && (x !== (m[s].lineColor || d2) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(
                        z,
                        v
                      ), x = m[s].lineColor || d2, c.strokeStyle = x, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                      if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                        var C = k.getMarkerProperties(s, z, v, c);
                        h.push(C);
                        q2 = U(q2);
                        t && h.push({ x: z, y: v, ctx: b, type: C.type, size: C.size, color: q2, borderColor: q2, borderThickness: C.borderThickness });
                      }
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "line",
                        dataPoint: m[s],
                        dataSeries: k,
                        point: { x: z, y: v },
                        direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1,
                        color: d2
                      });
                    }
                c.stroke();
                t && b.stroke();
              }
            }
            aa.drawMarkers(h);
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderStepLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], r, u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                c.setLineDash(f);
              }
              var d2 = k.id;
              this._eventManager.objectMap[d2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              d2 = U(d2);
              b.strokeStyle = d2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var d2 = k._colorSet, x = d2 = k.lineColor = k.options.lineColor ? k.options.lineColor : d2[0];
              c.strokeStyle = d2;
              var y = true, s = 0, z, v;
              c.beginPath();
              if (0 < m.length) {
                for (var W = false, s = 0; s < m.length; s++)
                  if (z = m[s].getTime ? m[s].x.getTime() : m[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || W || y) && (c.stroke(), t && b.stroke()), W = true;
                    else {
                      var q2 = v;
                      z = a.axisX.convertValueToPixel(z);
                      v = a.axisY.convertValueToPixel(m[s].y);
                      var C = k.dataPointIds[s];
                      this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: s, x1: z, y1: v };
                      y || W ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(r.x, r.y), n = k.nullDataLineDashType, c.setLineDash(p)), c.lineTo(z, q2), c.lineTo(z, v), t && (b.lineTo(z, q2), b.lineTo(z, v))) : (c.beginPath(), c.moveTo(z, v), t && (b.beginPath(), b.moveTo(z, v))), W = y = false) : (c.lineTo(z, q2), t && b.lineTo(z, q2), c.lineTo(z, v), t && b.lineTo(z, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, v), t && (b.stroke(), b.beginPath(), b.moveTo(z, v))));
                      r = { x: z, y: v };
                      s < m.length - 1 && (x !== (m[s].lineColor || d2) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, v), x = m[s].lineColor || d2, c.strokeStyle = x, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                      0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize) && (q2 = k.getMarkerProperties(s, z, v, c), h.push(q2), C = U(C), t && h.push({ x: z, y: v, ctx: b, type: q2.type, size: q2.size, color: C, borderColor: C, borderThickness: q2.borderThickness }));
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: m[s], dataSeries: k, point: { x: z, y: v }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: d2 });
                    }
                c.stroke();
                t && b.stroke();
              }
            }
            aa.drawMarkers(h);
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderSpline = function(a) {
          function g(a2) {
            a2 = w2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              t && e.beginPath();
              b.moveTo(a2[0].x, a2[0].y);
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              t && e.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
                if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), t && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), t && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              t && e.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx;
            b.save();
            var h = this.plotArea;
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            for (var r = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
              var l2 = a.dataSeriesIndexes[u], k = this.data[l2];
              b.lineWidth = k.lineThickness;
              var m = k.dataPoints, n = "solid";
              if (b.setLineDash) {
                var p = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                b.setLineDash(f);
              }
              var d2 = k.id;
              this._eventManager.objectMap[d2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              d2 = U(d2);
              e.strokeStyle = d2;
              e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var d2 = k._colorSet, x = d2 = k.lineColor = k.options.lineColor ? k.options.lineColor : d2[0];
              b.strokeStyle = d2;
              var y = 0, s, z, v = [];
              b.beginPath();
              if (0 < m.length) {
                for (z = false, y = 0; y < m.length; y++)
                  if (s = m[y].getTime ? m[y].x.getTime() : m[y].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !z)))
                    if ("number" !== typeof m[y].y)
                      0 < y && !z && (k.connectNullData ? b.setLineDash && (0 < v.length && (k.options.nullDataLineDashType || !m[y - 1].lineDashType)) && (v[v.length - 1].newLineDashArray = p, n = k.nullDataLineDashType) : (g(v), v = [])), z = true;
                    else {
                      s = a.axisX.convertValueToPixel(s);
                      z = a.axisY.convertValueToPixel(m[y].y);
                      var W = k.dataPointIds[y];
                      this._eventManager.objectMap[W] = { id: W, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: y, x1: s, y1: z };
                      v[v.length] = {
                        x: s,
                        y: z
                      };
                      y < m.length - 1 && (x !== (m[y].lineColor || d2) || n !== (m[y].lineDashType || k.lineDashType)) && (x = m[y].lineColor || d2, v[v.length - 1].newStrokeStyle = x, b.setLineDash && (m[y].lineDashType ? (n = m[y].lineDashType, v[v.length - 1].newLineDashArray = I(n, k.lineThickness)) : (n = k.lineDashType, v[v.length - 1].newLineDashArray = f)));
                      if (0 !== m[y].markerSize && (0 < m[y].markerSize || 0 < k.markerSize)) {
                        var q2 = k.getMarkerProperties(y, s, z, b);
                        r.push(q2);
                        W = U(W);
                        t && r.push({ x: s, y: z, ctx: e, type: q2.type, size: q2.size, color: W, borderColor: W, borderThickness: q2.borderThickness });
                      }
                      (m[y].indexLabel || k.indexLabel || m[y].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: m[y], dataSeries: k, point: { x: s, y: z }, direction: 0 > m[y].y === a.axisY.reversed ? 1 : -1, color: d2 });
                      z = false;
                    }
              }
              g(v);
            }
            aa.drawMarkers(r);
            t && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), e.beginPath());
            b.restore();
            b.beginPath();
            return { source: c, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, u, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > m && (n = m);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            ), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], f = this.data[p], d2 = f.dataPoints;
              if (0 < d2.length) {
                for (var x = 5 < n && f.bevelEnabled ? true : false, h = 0; h < d2.length; h++)
                  if (d2[h].getTime ? l2 = d2[h].x.getTime() : l2 = d2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof d2[h].y) {
                    r = a.axisX.convertValueToPixel(l2);
                    u = a.axisY.convertValueToPixel(d2[h].y);
                    r = a.axisX.reversed ? r + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : r - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                    var y = a.axisX.reversed ? r - n << 0 : r + n << 0, s;
                    0 <= d2[h].y ? s = k : (s = u, u = k);
                    u > s && (b = u, u = s, s = b);
                    b = d2[h].color ? d2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, a.axisX.reversed ? y : r, u, a.axisX.reversed ? r : y, s, b, 0, null, x && (a.axisY.reversed ? 0 > d2[h].y : 0 <= d2[h].y), (a.axisY.reversed ? 0 <= d2[h].y : 0 > d2[h].y) && x, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: p,
                      dataPointIndex: h,
                      x1: r,
                      y1: u,
                      x2: y,
                      y2: s
                    };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, a.axisX.reversed ? y : r, u, a.axisX.reversed ? r : y, s, b, 0, null, false, false, false, false);
                    (d2[h].indexLabel || f.indexLabel || d2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: d2[h], dataSeries: f, point: { x: r + (y - r) / 2, y: 0 > d2[h].y === a.axisY.reversed ? u : s }, direction: 0 > d2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: r, y1: Math.min(u, s), x2: y, y2: Math.max(u, s) }, color: b });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.yScaleAnimation, easingFunction: R.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
          }
        };
        q.prototype.renderStackedColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], u = [], l2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, d2 = a.axisX.dataInfo.minDiff;
            isFinite(d2) || (d2 = 0.3 * Math.abs(a.axisX.range));
            d2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d2) / Math.log(a.axisX.range) : Math.abs(d2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            d2 < k && (d2 = k);
            d2 > f && (d2 = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var x = a.dataSeriesIndexes[f], y = this.data[x], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < d2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    m = m - a.plotType.plotUnits.length * d2 / 2 + a.index * d2 << 0;
                    var v = m + d2 << 0, q2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      u[b] = s[k].y + (u[b] ? u[b] : 0), 0 < u[b] && (n = a.axisY.convertValueToPixel(u[b]), q2 = "undefined" !== typeof h[b] ? h[b] : p, h[b] = n);
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      l2[b] = s[k].y + (l2[b] ? l2[b] : 0), q2 = a.axisY.convertValueToPixel(l2[b]), n = "undefined" !== typeof r[b] ? r[b] : p, r[b] = q2;
                    else if (n = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var w3 = "undefined" !== typeof h[b] ? h[b] : 0;
                      n -= w3;
                      q2 = p - w3;
                      h[b] = w3 + (q2 - n);
                    } else
                      w3 = r[b] ? r[b] : 0, q2 = n + w3, n = p + w3, r[b] = w3 + (q2 - n);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, m, a.axisY.reversed ? q2 : n, v, a.axisY.reversed ? n : q2, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: m, y1: n, x2: v, y2: q2 };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, m, n, v, q2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: y, point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : q2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(n, q2), x2: v, y2: Math.max(n, q2) }, color: b });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: R.yScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p
            };
          }
        };
        q.prototype.renderStackedColumn100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], u = [], l2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, d2 = a.axisX.dataInfo.minDiff;
            isFinite(d2) || (d2 = 0.3 * Math.abs(a.axisX.range));
            d2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d2) / Math.log(a.axisX.range) : Math.abs(d2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            d2 < k && (d2 = k);
            d2 > f && (d2 = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var x = a.dataSeriesIndexes[f], y = this.data[x], s = y.dataPoints;
              if (0 < s.length) {
                for (var z = 5 < d2 && y.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    n = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    m = m - a.plotType.plotUnits.length * d2 / 2 + a.index * d2 << 0;
                    var v = m + d2 << 0, q2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      u[b] = n + ("undefined" !== typeof u[b] ? u[b] : 0);
                      if (0 >= u[b])
                        continue;
                      n = a.axisY.convertValueToPixel(u[b]);
                      q2 = h[b] ? h[b] : p;
                      h[b] = n;
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      l2[b] = n + ("undefined" !== typeof l2[b] ? l2[b] : 0), q2 = a.axisY.convertValueToPixel(l2[b]), n = r[b] ? r[b] : p, r[b] = q2;
                    else if (n = a.axisY.convertValueToPixel(n), 0 <= s[k].y) {
                      var w3 = "undefined" !== typeof h[b] ? h[b] : 0;
                      n -= w3;
                      q2 = p - w3;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                      h[b] = w3 + (q2 - n);
                    } else
                      w3 = "undefined" !== typeof r[b] ? r[b] : 0, q2 = n + w3, n = p + w3, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - q2) && (q2 = e.y2), r[b] = w3 + (q2 - n);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, m, a.axisY.reversed ? q2 : n, v, a.axisY.reversed ? n : q2, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: m, y1: n, x2: v, y2: q2 };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, m, n, v, q2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn100", dataPoint: s[k], dataSeries: y, point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : q2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(n, q2), x2: v, y2: Math.max(n, q2) }, color: b });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.yScaleAnimation, easingFunction: R.easing.easeOutQuart, animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p };
          }
        };
        q.prototype.renderBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, u, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            n < h && (n = h);
            n > m && (n = m);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], f = this.data[p], d2 = f.dataPoints;
              if (0 < d2.length) {
                var x = 5 < n && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < d2.length; h++)
                  if (d2[h].getTime ? l2 = d2[h].x.getTime() : l2 = d2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof d2[h].y) {
                    u = a.axisX.convertValueToPixel(l2);
                    r = a.axisY.convertValueToPixel(d2[h].y);
                    u = a.axisX.reversed ? u + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : u - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                    var y = a.axisX.reversed ? u - n << 0 : u + n << 0, s;
                    0 <= d2[h].y ? s = k : (s = r, r = k);
                    b = d2[h].color ? d2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, a.axisY.reversed ? r : s, a.axisX.reversed ? y : u, a.axisY.reversed ? s : r, a.axisX.reversed ? u : y, b, 0, null, x, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: p,
                      dataPointIndex: h,
                      x1: s,
                      y1: u,
                      x2: r,
                      y2: y
                    };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, s, a.axisX.reversed ? y : u, r, a.axisX.reversed ? u : y, b, 0, null, false, false, false, false);
                    (d2[h].indexLabel || f.indexLabel || d2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: d2[h], dataSeries: f, point: { x: 0 <= d2[h].y ? r : s, y: u + (y - u) / 2 }, direction: 0 > d2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, r), y1: u, x2: Math.max(s, r), y2: y }, color: b });
                  }
              }
            }
            t && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: R.xScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
            };
          }
        };
        q.prototype.renderStackedBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], l2 = [], d2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, E = a.axisX.dataInfo.minDiff;
            isFinite(E) || (E = 0.3 * Math.abs(a.axisX.range));
            E = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(E) / Math.log(a.axisX.range) : Math.abs(E) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            E < k && (E = k);
            E > f && (E = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var x = a.dataSeriesIndexes[f], y = this.data[x], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < E && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    n = a.axisX.convertValueToPixel(b);
                    n = n - a.plotType.plotUnits.length * E / 2 + a.index * E << 0;
                    var v = n + E << 0, q2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      l2[b] = s[k].y + (l2[b] ? l2[b] : 0), 0 < l2[b] && (q2 = h[b] ? h[b] : p, h[b] = m = a.axisY.convertValueToPixel(l2[b]));
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = s[k].y + (d2[b] ? d2[b] : 0), m = r[b] ? r[b] : p, r[b] = q2 = a.axisY.convertValueToPixel(d2[b]);
                    else if (m = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var w3 = h[b] ? h[b] : 0;
                      q2 = p + w3;
                      m += w3;
                      h[b] = w3 + (m - q2);
                    } else
                      w3 = r[b] ? r[b] : 0, q2 = m - w3, m = p - w3, r[b] = w3 + (m - q2);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, a.axisY.reversed ? m : q2, n, a.axisY.reversed ? q2 : m, v, b, 0, null, z, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: x,
                      dataPointIndex: k,
                      x1: q2,
                      y1: n,
                      x2: m,
                      y2: v
                    };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, q2, n, m, v, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: s[k], dataSeries: y, point: { x: 0 <= s[k].y ? m : q2, y: n + (v - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(q2, m), y1: n, x2: Math.max(q2, m), y2: v }, color: b });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.xScaleAnimation, easingFunction: R.easing.easeOutQuart, animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p };
          }
        };
        q.prototype.renderStackedBar100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], r = [], l2 = [], d2 = [], k = 0, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, E = a.axisX.dataInfo.minDiff;
            isFinite(E) || (E = 0.3 * Math.abs(a.axisX.range));
            E = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(E) / Math.log(a.axisX.range) : Math.abs(E) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(
              this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
              k
            ));
            E < k && (E = k);
            E > f && (E = f);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var x = a.dataSeriesIndexes[f], y = this.data[x], s = y.dataPoints;
              if (0 < s.length) {
                var z = 5 < E && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    n = a.axisX.convertValueToPixel(b);
                    var v;
                    v = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    n = n - a.plotType.plotUnits.length * E / 2 + a.index * E << 0;
                    var q2 = n + E << 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      l2[b] = v + (l2[b] ? l2[b] : 0);
                      if (0 >= l2[b])
                        continue;
                      v = h[b] ? h[b] : p;
                      h[b] = m = a.axisY.convertValueToPixel(l2[b]);
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = v + (d2[b] ? d2[b] : 0), m = r[b] ? r[b] : p, r[b] = v = a.axisY.convertValueToPixel(d2[b]);
                    else if (m = a.axisY.convertValueToPixel(v), 0 <= s[k].y) {
                      var w3 = h[b] ? h[b] : 0;
                      v = p + w3;
                      m += w3;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                      h[b] = w3 + (m - v);
                    } else
                      w3 = r[b] ? r[b] : 0, v = m - w3, m = p - w3, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - v) && (v = e.x1), r[b] = w3 + (m - v);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, a.axisY.reversed ? m : v, n, a.axisY.reversed ? v : m, q2, b, 0, null, z, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: v, y1: n, x2: m, y2: q2 };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, v, n, m, q2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: s[k], dataSeries: y, point: { x: 0 <= s[k].y ? m : v, y: n + (q2 - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(v, m), y1: n, x2: Math.max(v, m), y2: q2 }, color: b });
                  }
              }
            }
            t && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: R.xScaleAnimation,
              easingFunction: R.easing.easeOutQuart,
              animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p
            };
          }
        };
        q.prototype.renderArea = function(a) {
          var g, c;
          function b() {
            w3 && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? q2 = v : 0 > a.axisY.viewportMaximum ? q2 = l2.y1 : 0 < a.axisY.viewportMinimum && (q2 = v), h.lineTo(y, q2), h.lineTo(w3.x, q2), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, t && (r.lineTo(y, q2), r.lineTo(w3.x, q2), r.closePath(), r.fill()), h.beginPath(), h.moveTo(
              y,
              s
            ), r.beginPath(), r.moveTo(y, s), w3 = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = t ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var r = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, d2 = [], k = this.plotArea, m;
            h.save();
            t && r.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            t && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], f = this.data[p], E = f.dataPoints, d2 = f.id;
              this._eventManager.objectMap[d2] = { objectType: "dataSeries", dataSeriesIndex: p };
              d2 = U(d2);
              r.fillStyle = d2;
              d2 = [];
              g = true;
              var x = 0, y, s, z, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), q2, w3 = null;
              if (0 < E.length) {
                var C = f._colorSet[x % f._colorSet.length], A3 = f.lineColor = f.options.lineColor || C, B2 = A3;
                h.fillStyle = C;
                h.strokeStyle = A3;
                h.lineWidth = f.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var K = I(f.nullDataLineDashType, f.lineThickness);
                  c = f.lineDashType;
                  var L = I(c, f.lineThickness);
                  h.setLineDash(L);
                }
                for (var ca = true; x < E.length; x++)
                  if (z = E[x].x.getTime ? E[x].x.getTime() : E[x].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !ca)))
                    if ("number" !== typeof E[x].y)
                      f.connectNullData || (ca || g) || b(), ca = true;
                    else {
                      y = a.axisX.convertValueToPixel(z);
                      s = a.axisY.convertValueToPixel(E[x].y);
                      g || ca ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = g, s = c, w3 = m, c = f.nullDataLineDashType, h.setLineDash(K)), h.lineTo(
                        y,
                        s
                      ), t && r.lineTo(y, s)) : (h.beginPath(), h.moveTo(y, s), t && (r.beginPath(), r.moveTo(y, s)), w3 = { x: y, y: s }), ca = g = false) : (h.lineTo(y, s), t && r.lineTo(y, s), 0 == x % 250 && b());
                      m = { x: y, y: s };
                      x < E.length - 1 && (B2 !== (E[x].lineColor || A3) || c !== (E[x].lineDashType || f.lineDashType)) && (b(), B2 = E[x].lineColor || A3, h.strokeStyle = B2, h.setLineDash && (E[x].lineDashType ? (c = E[x].lineDashType, h.setLineDash(I(c, f.lineThickness))) : (c = f.lineDashType, h.setLineDash(L))));
                      var ba = f.dataPointIds[x];
                      this._eventManager.objectMap[ba] = {
                        id: ba,
                        objectType: "dataPoint",
                        dataSeriesIndex: p,
                        dataPointIndex: x,
                        x1: y,
                        y1: s
                      };
                      0 !== E[x].markerSize && (0 < E[x].markerSize || 0 < f.markerSize) && (z = f.getMarkerProperties(x, y, s, h), d2.push(z), ba = U(ba), t && d2.push({ x: y, y: s, ctx: r, type: z.type, size: z.size, color: ba, borderColor: ba, borderThickness: z.borderThickness }));
                      (E[x].indexLabel || f.indexLabel || E[x].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: E[x], dataSeries: f, point: { x: y, y: s }, direction: 0 > E[x].y === a.axisY.reversed ? 1 : -1, color: C });
                    }
                b();
                aa.drawMarkers(d2);
              }
            }
            t && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        q.prototype.renderSplineArea = function(a) {
          function g() {
            var c2 = w2(z, 2);
            if (0 < c2.length) {
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var f2 = 0; f2 < c2.length - 3; f2 += 3)
                  if (b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), t && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle || c2[f2 + 3].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle && (b.strokeStyle = c2[f2 + 3].newStrokeStyle), c2[f2 + 3].newLineDashArray && b.setLineDash(c2[f2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              t && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
              for (f2 = 0; f2 < c2.length - 3; f2 += 3)
                b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), t && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = x : 0 > a.axisY.viewportMaximum ? y = h.y1 : 0 < a.axisY.viewportMinimum && (y = x);
              s = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, y);
              b.lineTo(s.x, y);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              t && (e.lineTo(c2[c2.length - 1].x, y), e.lineTo(s.x, y), e.closePath(), e.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, r = [], l2 = this.plotArea;
            b.save();
            t && e.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            t && (e.beginPath(), e.rect(l2.x1, l2.y1, l2.width, l2.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var k = a.dataSeriesIndexes[d2], m = this.data[k], n = m.dataPoints, r = m.id;
              this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: k };
              r = U(r);
              e.fillStyle = r;
              var r = [], p = 0, f, E, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y, s = null, z = [];
              if (0 < n.length) {
                var v = m._colorSet[p % m._colorSet.length], q2 = m.lineColor = m.options.lineColor || v, Ya = q2;
                b.fillStyle = v;
                b.strokeStyle = q2;
                b.lineWidth = m.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var A3 = I(m.nullDataLineDashType, m.lineThickness), C = m.lineDashType, B2 = I(C, m.lineThickness);
                  b.setLineDash(B2);
                }
                for (E = false; p < n.length; p++)
                  if (f = n[p].x.getTime ? n[p].x.getTime() : n[p].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !E)))
                    if ("number" !== typeof n[p].y)
                      0 < p && !E && (m.connectNullData ? b.setLineDash && (0 < z.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType)) && (z[z.length - 1].newLineDashArray = A3, C = m.nullDataLineDashType) : (g(), z = [])), E = true;
                    else {
                      f = a.axisX.convertValueToPixel(f);
                      E = a.axisY.convertValueToPixel(n[p].y);
                      var K = m.dataPointIds[p];
                      this._eventManager.objectMap[K] = { id: K, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: p, x1: f, y1: E };
                      z[z.length] = { x: f, y: E };
                      p < n.length - 1 && (Ya !== (n[p].lineColor || q2) || C !== (n[p].lineDashType || m.lineDashType)) && (Ya = n[p].lineColor || q2, z[z.length - 1].newStrokeStyle = Ya, b.setLineDash && (n[p].lineDashType ? (C = n[p].lineDashType, z[z.length - 1].newLineDashArray = I(C, m.lineThickness)) : (C = m.lineDashType, z[z.length - 1].newLineDashArray = B2)));
                      if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                        var L = m.getMarkerProperties(p, f, E, b);
                        r.push(L);
                        K = U(K);
                        t && r.push({ x: f, y: E, ctx: e, type: L.type, size: L.size, color: K, borderColor: K, borderThickness: L.borderThickness });
                      }
                      (n[p].indexLabel || m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "splineArea",
                        dataPoint: n[p],
                        dataSeries: m,
                        point: { x: f, y: E },
                        direction: 0 > n[p].y === a.axisY.reversed ? 1 : -1,
                        color: v
                      });
                      E = false;
                    }
                g();
                aa.drawMarkers(r);
              }
            }
            t && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderStepArea = function(a) {
          var g, c;
          function b() {
            w3 && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? q2 = v : 0 > a.axisY.viewportMaximum ? q2 = l2.y1 : 0 < a.axisY.viewportMinimum && (q2 = v), h.lineTo(y, q2), h.lineTo(w3.x, q2), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, t && (r.lineTo(y, q2), r.lineTo(w3.x, q2), r.closePath(), r.fill()), h.beginPath(), h.moveTo(y, s), r.beginPath(), r.moveTo(y, s), w3 = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = t ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var r = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, d2 = [], k = this.plotArea, m;
            h.save();
            t && r.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            t && (r.beginPath(), r.rect(k.x1, k.y1, k.width, k.height), r.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], f = this.data[p], E = f.dataPoints, d2 = f.id;
              this._eventManager.objectMap[d2] = { objectType: "dataSeries", dataSeriesIndex: p };
              d2 = U(d2);
              r.fillStyle = d2;
              d2 = [];
              g = true;
              var x = 0, y, s, z, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), q2, w3 = null;
              c = false;
              if (0 < E.length) {
                var C = f._colorSet[x % f._colorSet.length], A3 = f.lineColor = f.options.lineColor || C, B2 = A3;
                h.fillStyle = C;
                h.strokeStyle = A3;
                h.lineWidth = f.lineThickness;
                var K = "solid";
                if (h.setLineDash) {
                  var L = I(f.nullDataLineDashType, f.lineThickness), K = f.lineDashType, ca = I(K, f.lineThickness);
                  h.setLineDash(ca);
                }
                for (; x < E.length; x++)
                  if (z = E[x].x.getTime ? E[x].x.getTime() : E[x].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                    var ba = s;
                    "number" !== typeof E[x].y ? (f.connectNullData || (c || g) || b(), c = true) : (y = a.axisX.convertValueToPixel(z), s = a.axisY.convertValueToPixel(E[x].y), g || c ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || K === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = g, s = c, w3 = m, K = f.nullDataLineDashType, h.setLineDash(L)), h.lineTo(y, ba), h.lineTo(y, s), t && (r.lineTo(y, ba), r.lineTo(y, s))) : (h.beginPath(), h.moveTo(y, s), t && (r.beginPath(), r.moveTo(y, s)), w3 = { x: y, y: s }), c = g = false) : (h.lineTo(y, ba), t && r.lineTo(y, ba), h.lineTo(y, s), t && r.lineTo(y, s), 0 == x % 250 && b()), m = { x: y, y: s }, x < E.length - 1 && (B2 !== (E[x].lineColor || A3) || K !== (E[x].lineDashType || f.lineDashType)) && (b(), B2 = E[x].lineColor || A3, h.strokeStyle = B2, h.setLineDash && (E[x].lineDashType ? (K = E[x].lineDashType, h.setLineDash(I(K, f.lineThickness))) : (K = f.lineDashType, h.setLineDash(ca)))), z = f.dataPointIds[x], this._eventManager.objectMap[z] = { id: z, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: x, x1: y, y1: s }, 0 !== E[x].markerSize && (0 < E[x].markerSize || 0 < f.markerSize) && (ba = f.getMarkerProperties(x, y, s, h), d2.push(ba), z = U(z), t && d2.push({ x: y, y: s, ctx: r, type: ba.type, size: ba.size, color: z, borderColor: z, borderThickness: ba.borderThickness })), (E[x].indexLabel || f.indexLabel || E[x].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: E[x], dataSeries: f, point: { x: y, y: s }, direction: 0 > E[x].y === a.axisY.reversed ? 1 : -1, color: C }));
                  }
                b();
                aa.drawMarkers(d2);
              }
            }
            t && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderStackedArea = function(a) {
          function g() {
            if (!(1 > k.length)) {
              for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                t && y.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = C.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              t && (y.closePath(), y.fill(), y.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = [], l2 = this.plotArea, d2 = [], k = [], m = [], n = [], p = 0, f, E, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y = this._eventManager.ghostCtx, s, z, v;
            t && y.beginPath();
            b.save();
            t && y.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            t && (y.beginPath(), y.rect(l2.x1, l2.y1, l2.width, l2.height), y.clip());
            for (var e = [], q2 = 0; q2 < a.dataSeriesIndexes.length; q2++) {
              var w3 = a.dataSeriesIndexes[q2], C = this.data[w3], A3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (p = 0; p < A3.length; p++)
                w3 = A3[p].x.getTime ? A3[p].x.getTime() : A3[p].x, C.dataPointIndexes[w3] = p, e[w3] || (m.push(w3), e[w3] = true);
              m.sort(Sa);
            }
            for (q2 = 0; q2 < a.dataSeriesIndexes.length; q2++) {
              w3 = a.dataSeriesIndexes[q2];
              C = this.data[w3];
              A3 = C.dataPoints;
              z = true;
              k = [];
              p = C.id;
              this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: w3 };
              p = U(p);
              y.fillStyle = p;
              if (0 < m.length) {
                var e = C._colorSet[0], B2 = C.lineColor = C.options.lineColor || e, K = B2;
                b.fillStyle = e;
                b.strokeStyle = B2;
                b.lineWidth = C.lineThickness;
                v = "solid";
                if (b.setLineDash) {
                  var L = I(C.nullDataLineDashType, C.lineThickness);
                  v = C.lineDashType;
                  var ca = I(v, C.lineThickness);
                  b.setLineDash(ca);
                }
                for (var ba = true, p = 0; p < m.length; p++) {
                  var h = m[p], ea = null, ea = 0 <= C.dataPointIndexes[h] ? A3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !ba)))
                    if ("number" !== typeof ea.y)
                      C.connectNullData || (ba || z) || g(), ba = true;
                    else {
                      f = a.axisX.convertValueToPixel(h);
                      var na = d2[h] ? d2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        n[h] = ea.y + (n[h] ? n[h] : 0);
                        if (0 >= n[h] && a.axisY.logarithmic)
                          continue;
                        E = a.axisY.convertValueToPixel(n[h]);
                      } else
                        E = a.axisY.convertValueToPixel(ea.y), E -= na;
                      k.push({ x: f, y: x - na });
                      d2[h] = x - E;
                      z || ba ? (!z && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || v === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (z = k.pop(), v = k[k.length - 1], g(), b.moveTo(s.x, s.y), k.push(v), k.push(z), v = C.nullDataLineDashType, b.setLineDash(L)), b.lineTo(f, E), t && y.lineTo(f, E)) : (b.beginPath(), b.moveTo(f, E), t && (y.beginPath(), y.moveTo(f, E))), ba = z = false) : (b.lineTo(f, E), t && y.lineTo(f, E), 0 == p % 250 && (g(), b.moveTo(f, E), t && y.moveTo(f, E), k.push({ x: f, y: x - na })));
                      s = { x: f, y: E };
                      p < A3.length - 1 && (K !== (A3[p].lineColor || B2) || v !== (A3[p].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, E), k.push({ x: f, y: x - na }), K = A3[p].lineColor || B2, b.strokeStyle = K, b.setLineDash && (A3[p].lineDashType ? (v = A3[p].lineDashType, b.setLineDash(I(v, C.lineThickness))) : (v = C.lineDashType, b.setLineDash(ca))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var la = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[la] = { id: la, objectType: "dataPoint", dataSeriesIndex: w3, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: E };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ea.markerSize && (0 < ea.markerSize || 0 < C.markerSize) && (na = C.getMarkerProperties(C.dataPointIndexes[h], f, E, b), r.push(na), h = U(la), t && r.push({ x: f, y: E, ctx: y, type: na.type, size: na.size, color: h, borderColor: h, borderThickness: na.borderThickness }));
                      (ea.indexLabel || C.indexLabel || ea.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ea, dataSeries: C, point: { x: f, y: E }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                g();
                b.moveTo(f, E);
                t && y.moveTo(f, E);
              }
              delete C.dataPointIndexes;
            }
            aa.drawMarkers(r);
            t && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), y.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderStackedArea100 = function(a) {
          function g() {
            for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              t && v.lineTo(
                a2.x,
                a2.y
              );
            }
            b.closePath();
            b.globalAlpha = C.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            t && (v.closePath(), v.fill(), v.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = this.plotArea, l2 = [], d2 = [], k = [], m = [], n = [], p = 0, f, E, x, y, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
            b.save();
            t && v.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            t && (v.beginPath(), v.rect(r.x1, r.y1, r.width, r.height), v.clip());
            for (var e = [], q2 = 0; q2 < a.dataSeriesIndexes.length; q2++) {
              var w3 = a.dataSeriesIndexes[q2], C = this.data[w3], A3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (p = 0; p < A3.length; p++)
                w3 = A3[p].x.getTime ? A3[p].x.getTime() : A3[p].x, C.dataPointIndexes[w3] = p, e[w3] || (m.push(w3), e[w3] = true);
              m.sort(Sa);
            }
            for (q2 = 0; q2 < a.dataSeriesIndexes.length; q2++) {
              w3 = a.dataSeriesIndexes[q2];
              C = this.data[w3];
              A3 = C.dataPoints;
              y = true;
              e = C.id;
              this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: w3 };
              e = U(e);
              v.fillStyle = e;
              k = [];
              if (0 < m.length) {
                var e = C._colorSet[p % C._colorSet.length], B2 = C.lineColor = C.options.lineColor || e, K = B2;
                b.fillStyle = e;
                b.strokeStyle = B2;
                b.lineWidth = C.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var L = I(C.nullDataLineDashType, C.lineThickness);
                  s = C.lineDashType;
                  var ca = I(s, C.lineThickness);
                  b.setLineDash(ca);
                }
                for (var ba = true, p = 0; p < m.length; p++) {
                  var h = m[p], ea = null, ea = 0 <= C.dataPointIndexes[h] ? A3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !ba)))
                    if ("number" !== typeof ea.y)
                      C.connectNullData || (ba || y) || g(), ba = true;
                    else {
                      var na;
                      na = 0 !== a.dataPointYSums[h] ? 100 * (ea.y / a.dataPointYSums[h]) : 0;
                      f = a.axisX.convertValueToPixel(h);
                      var la = d2[h] ? d2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        n[h] = na + (n[h] ? n[h] : 0);
                        if (0 >= n[h] && a.axisY.logarithmic)
                          continue;
                        E = a.axisY.convertValueToPixel(n[h]);
                      } else
                        E = a.axisY.convertValueToPixel(na), E -= la;
                      k.push({ x: f, y: z - la });
                      d2[h] = z - E;
                      y || ba ? (!y && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || s === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (y = k.pop(), s = k[k.length - 1], g(), b.moveTo(x.x, x.y), k.push(s), k.push(y), s = C.nullDataLineDashType, b.setLineDash(L)), b.lineTo(f, E), t && v.lineTo(f, E)) : (b.beginPath(), b.moveTo(f, E), t && (v.beginPath(), v.moveTo(f, E))), ba = y = false) : (b.lineTo(f, E), t && v.lineTo(f, E), 0 == p % 250 && (g(), b.moveTo(f, E), t && v.moveTo(f, E), k.push({ x: f, y: z - la })));
                      x = { x: f, y: E };
                      p < A3.length - 1 && (K !== (A3[p].lineColor || B2) || s !== (A3[p].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, E), k.push({ x: f, y: z - la }), K = A3[p].lineColor || B2, b.strokeStyle = K, b.setLineDash && (A3[p].lineDashType ? (s = A3[p].lineDashType, b.setLineDash(I(s, C.lineThickness))) : (s = C.lineDashType, b.setLineDash(ca))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var F = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: w3, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: E };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ea.markerSize && (0 < ea.markerSize || 0 < C.markerSize) && (la = C.getMarkerProperties(C.dataPointIndexes[h], f, E, b), l2.push(la), h = U(F), t && l2.push({ x: f, y: E, ctx: v, type: la.type, size: la.size, color: h, borderColor: h, borderThickness: la.borderThickness }));
                      (ea.indexLabel || C.indexLabel || ea.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: ea, dataSeries: C, point: { x: f, y: E }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                g();
                b.moveTo(f, E);
                t && v.moveTo(f, E);
              }
              delete C.dataPointIndexes;
            }
            aa.drawMarkers(l2);
            t && (c.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(r.x1, r.y1, r.width, r.height), v.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: R.xClipAnimation,
              easingFunction: R.easing.linear,
              animationBase: 0
            };
          }
        };
        q.prototype.renderBubble = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, r;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = -Infinity, d2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
              for (var m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, f = 0, e = 0; e < p.length; e++)
                h = p[e].getTime ? h = p[e].x.getTime() : h = p[e].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof p[e].z || (f = p[e].z, f > l2 && (l2 = f), f < d2 && (d2 = f));
            for (var E = 25 * Math.PI, x = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, E), k = 0; k < a.dataSeriesIndexes.length; k++)
              if (m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, 0 < p.length) {
                for (c.strokeStyle = "#4572A7 ", e = 0; e < p.length; e++)
                  if (h = p[e].getTime ? h = p[e].x.getTime() : h = p[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    r = a.axisY.convertValueToPixel(p[e].y);
                    var f = p[e].z, y = 2 * Math.max(Math.sqrt((l2 === d2 ? x / 2 : E + (x - E) / (l2 - d2) * (f - d2)) / Math.PI) << 0, 1), f = n.getMarkerProperties(e, c);
                    f.size = y;
                    c.globalAlpha = n.fillOpacity;
                    aa.drawMarker(h, r, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    var s = n.dataPointIds[e];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: m,
                      dataPointIndex: e,
                      x1: h,
                      y1: r,
                      size: y
                    };
                    y = U(s);
                    t && aa.drawMarker(h, r, this._eventManager.ghostCtx, f.type, f.size, y, y, f.borderThickness);
                    (p[e].indexLabel || n.indexLabel || p[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: p[e], dataSeries: n, point: { x: h, y: r }, direction: 1, bounds: { x1: h - f.size / 2, y1: r - f.size / 2, x2: h + f.size / 2, y2: r + f.size / 2 }, color: null });
                  }
              }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderScatter = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, r;
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
              var d2 = a.dataSeriesIndexes[l2], k = this.data[d2], m = k.dataPoints;
              if (0 < m.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var n = 0, p = 0, e = 0; e < m.length; e++)
                  if (h = m[e].getTime ? h = m[e].x.getTime() : h = m[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    r = a.axisY.convertValueToPixel(m[e].y);
                    var f = k.getMarkerProperties(e, h, r, c);
                    c.globalAlpha = k.fillOpacity;
                    aa.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    Math.sqrt((n - h) * (n - h) + (p - r) * (p - r)) < Math.min(f.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = k.dataPointIds[e], this._eventManager.objectMap[n] = { id: n, objectType: "dataPoint", dataSeriesIndex: d2, dataPointIndex: e, x1: h, y1: r }, n = U(n), t && aa.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, n, n, f.borderThickness), (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "scatter",
                      dataPoint: m[e],
                      dataSeries: k,
                      point: { x: h, y: r },
                      direction: 1,
                      bounds: { x1: h - f.size / 2, y1: r - f.size / 2, x2: h + f.size / 2, y2: r + f.size / 2 },
                      color: null
                    }), n = h, p = r);
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderCandlestick = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, r = this.plotArea, d2 = 0, D, k, m, n, p, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, E = a.axisX.dataInfo.minDiff;
            isFinite(E) || (E = 0.3 * Math.abs(a.axisX.range));
            E = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * r.width * (a.axisX.logarithmic ? Math.log(E) / Math.log(a.axisX.range) : Math.abs(E) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            E < e && (E = e);
            E > h && (E = h);
            c.save();
            t && b.save();
            c.beginPath();
            c.rect(r.x1, r.y1, r.width, r.height);
            c.clip();
            t && (b.beginPath(), b.rect(r.x1, r.y1, r.width, r.height), b.clip());
            for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
              var y = a.dataSeriesIndexes[x], s = this.data[y], z = s.dataPoints;
              if (0 < z.length) {
                for (var v = 5 < E && s.bevelEnabled ? true : false, d2 = 0; d2 < z.length; d2++)
                  if (z[d2].getTime ? f = z[d2].x.getTime() : f = z[d2].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(z[d2].y) && z[d2].y.length && "number" === typeof z[d2].y[0] && "number" === typeof z[d2].y[1] && "number" === typeof z[d2].y[2] && "number" === typeof z[d2].y[3]) {
                    D = a.axisX.convertValueToPixel(f);
                    k = a.axisY.convertValueToPixel(z[d2].y[0]);
                    m = a.axisY.convertValueToPixel(z[d2].y[1]);
                    n = a.axisY.convertValueToPixel(z[d2].y[2]);
                    p = a.axisY.convertValueToPixel(z[d2].y[3]);
                    var q2 = D - E / 2 << 0, w3 = q2 + E << 0, h = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = z[d2].color ? z[d2].color : s._colorSet[0], C = Math.round(Math.max(1, 0.15 * E)), A3 = 0 === C % 2 ? 0 : 0.5, B2 = s.dataPointIds[d2];
                    this._eventManager.objectMap[B2] = { id: B2, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: d2, x1: q2, y1: k, x2: w3, y2: m, x3: D, y3: n, x4: D, y4: p, borderThickness: C, color: e };
                    c.strokeStyle = e;
                    c.beginPath();
                    c.lineWidth = C;
                    b.lineWidth = Math.max(C, 4);
                    "candlestick" === s.type ? (c.moveTo(D - A3, m), c.lineTo(D - A3, Math.min(k, p)), c.stroke(), c.moveTo(D - A3, Math.max(k, p)), c.lineTo(D - A3, n), c.stroke(), da(c, q2, Math.min(k, p), w3, Math.max(k, p), z[d2].y[0] <= z[d2].y[3] ? s.risingColor : h, C, e, v, v, false, false, s.fillOpacity), t && (e = U(B2), b.strokeStyle = e, b.moveTo(D - A3, m), b.lineTo(D - A3, Math.min(
                      k,
                      p
                    )), b.stroke(), b.moveTo(D - A3, Math.max(k, p)), b.lineTo(D - A3, n), b.stroke(), da(b, q2, Math.min(k, p), w3, Math.max(k, p), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(D - A3, m), c.lineTo(D - A3, n), c.stroke(), c.beginPath(), c.moveTo(D, k), c.lineTo(q2, k), c.stroke(), c.beginPath(), c.moveTo(D, p), c.lineTo(w3, p), c.stroke(), t && (e = U(B2), b.strokeStyle = e, b.moveTo(D - A3, m), b.lineTo(D - A3, n), b.stroke(), b.beginPath(), b.moveTo(D, k), b.lineTo(q2, k), b.stroke(), b.beginPath(), b.moveTo(D, p), b.lineTo(w3, p), b.stroke()));
                    (z[d2].indexLabel || s.indexLabel || z[d2].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: z[d2], dataSeries: s, point: { x: q2 + (w3 - q2) / 2, y: a.axisY.reversed ? n : m }, direction: 1, bounds: { x1: q2, y1: Math.min(m, n), x2: w3, y2: Math.max(m, n) }, color: e });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(r.x1, r.y1, r.width, r.height), b.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderBoxAndWhisker = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = this.plotArea, r = 0, d2, D, k, m, n, p, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, q2 = a.axisX.dataInfo.minDiff;
            isFinite(q2) || (q2 = 0.3 * Math.abs(a.axisX.range));
            q2 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(q2) / Math.log(a.axisX.range) : Math.abs(q2) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > r && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < e) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            q2 < e && (q2 = e);
            q2 > r && (q2 = r);
            c.save();
            t && b.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            t && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
            for (var x = false, x = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var s = a.dataSeriesIndexes[y], z = this.data[s], v = z.dataPoints;
              if (0 < v.length) {
                for (var w3 = 5 < q2 && z.bevelEnabled ? true : false, r = 0; r < v.length; r++)
                  if (v[r].getTime ? f = v[r].x.getTime() : f = v[r].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(v[r].y) && v[r].y.length && "number" === typeof v[r].y[0] && "number" === typeof v[r].y[1] && "number" === typeof v[r].y[2] && "number" === typeof v[r].y[3] && "number" === typeof v[r].y[4] && 5 === v[r].y.length) {
                    d2 = a.axisX.convertValueToPixel(f);
                    D = a.axisY.convertValueToPixel(v[r].y[0]);
                    k = a.axisY.convertValueToPixel(v[r].y[1]);
                    m = a.axisY.convertValueToPixel(v[r].y[2]);
                    n = a.axisY.convertValueToPixel(v[r].y[3]);
                    p = a.axisY.convertValueToPixel(v[r].y[4]);
                    var A3 = d2 - q2 / 2 << 0, C = d2 + q2 / 2 << 0, e = v[r].color ? v[r].color : z._colorSet[0], B2 = Math.round(Math.max(1, 0.15 * q2)), G2 = 0 === B2 % 2 ? 0 : 0.5, K = v[r].whiskerColor ? v[r].whiskerColor : v[r].color ? z.whiskerColor ? z.whiskerColor : v[r].color : z.whiskerColor ? z.whiskerColor : e, L = "number" === typeof v[r].whiskerThickness ? v[r].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : B2, ca = v[r].whiskerDashType ? v[r].whiskerDashType : z.whiskerDashType, ba = l(v[r].whiskerLength) ? l(z.options.whiskerLength) ? q2 : z.whiskerLength : v[r].whiskerLength, ba = "number" === typeof ba ? 0 >= ba ? 0 : ba >= q2 ? q2 : ba : "string" === typeof ba ? parseInt(ba) * q2 / 100 > q2 ? q2 : parseInt(ba) * q2 / 100 : q2, ea = 1 === Math.round(L) % 2 ? 0.5 : 0, na = v[r].stemColor ? v[r].stemColor : v[r].color ? z.stemColor ? z.stemColor : v[r].color : z.stemColor ? z.stemColor : e, la = "number" === typeof v[r].stemThickness ? v[r].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : B2, F = 1 === Math.round(la) % 2 ? 0.5 : 0, S2 = v[r].stemDashType ? v[r].stemDashType : z.stemDashType, Q3 = v[r].lineColor ? v[r].lineColor : v[r].color ? z.lineColor ? z.lineColor : v[r].color : z.lineColor ? z.lineColor : e, J2 = "number" === typeof v[r].lineThickness ? v[r].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : B2, T2 = v[r].lineDashType ? v[r].lineDashType : z.lineDashType, P = 1 === Math.round(J2) % 2 ? 0.5 : 0, N2 = z.upperBoxColor, M = z.lowerBoxColor, ra = l(z.options.fillOpacity) ? 1 : z.fillOpacity, O = z.dataPointIds[r];
                    this._eventManager.objectMap[O] = {
                      id: O,
                      objectType: "dataPoint",
                      dataSeriesIndex: s,
                      dataPointIndex: r,
                      x1: A3,
                      y1: D,
                      x2: C,
                      y2: k,
                      x3: d2,
                      y3: m,
                      x4: d2,
                      y4: n,
                      y5: p,
                      borderThickness: B2,
                      color: e,
                      stemThickness: la,
                      stemColor: na,
                      whiskerThickness: L,
                      whiskerLength: ba,
                      whiskerColor: K,
                      lineThickness: J2,
                      lineColor: Q3
                    };
                    c.save();
                    0 < la && (c.beginPath(), c.strokeStyle = na, c.lineWidth = la, c.setLineDash && c.setLineDash(I(S2, la)), c.moveTo(d2 - F, k), c.lineTo(d2 - F, D), c.stroke(), c.moveTo(d2 - F, n), c.lineTo(d2 - F, m), c.stroke());
                    c.restore();
                    b.lineWidth = Math.max(B2, 4);
                    c.beginPath();
                    da(c, A3, Math.min(p, k), C, Math.max(k, p), M, 0, e, x ? w3 : false, x ? false : w3, false, false, ra);
                    c.beginPath();
                    da(c, A3, Math.min(m, p), C, Math.max(p, m), N2, 0, e, x ? false : w3, x ? w3 : false, false, false, ra);
                    c.beginPath();
                    c.lineWidth = B2;
                    c.strokeStyle = e;
                    c.rect(A3 - G2, Math.min(k, m) - G2, C - A3 + 2 * G2, Math.max(k, m) - Math.min(k, m) + 2 * G2);
                    c.stroke();
                    c.save();
                    0 < J2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(I(T2, J2)), c.strokeStyle = Q3, c.lineWidth = J2, c.moveTo(A3, p - P), c.lineTo(C, p - P), c.stroke());
                    c.restore();
                    c.save();
                    0 < L && (c.beginPath(), c.setLineDash && c.setLineDash(I(ca, L)), c.strokeStyle = K, c.lineWidth = L, c.moveTo(d2 - ba / 2 << 0, n - ea), c.lineTo(d2 + ba / 2 << 0, n - ea), c.stroke(), c.moveTo(d2 - ba / 2 << 0, D + ea), c.lineTo(d2 + ba / 2 << 0, D + ea), c.stroke());
                    c.restore();
                    t && (e = U(O), b.strokeStyle = e, b.lineWidth = la, 0 < la && (b.moveTo(d2 - G2 - F, k), b.lineTo(d2 - G2 - F, Math.max(D, n)), b.stroke(), b.moveTo(d2 - G2 - F, Math.min(D, n)), b.lineTo(d2 - G2 - F, m), b.stroke()), da(b, A3, Math.max(k, m), C, Math.min(k, m), e, 0, null, false, false, false, false), 0 < L && (b.beginPath(), b.lineWidth = L, b.moveTo(d2 + ba / 2, n - ea), b.lineTo(d2 - ba / 2, n - ea), b.stroke(), b.moveTo(d2 + ba / 2, D + ea), b.lineTo(d2 - ba / 2, D + ea), b.stroke()));
                    (v[r].indexLabel || z.indexLabel || v[r].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({ chartType: z.type, dataPoint: v[r], dataSeries: z, point: { x: A3 + (C - A3) / 2, y: a.axisY.reversed ? D : n }, direction: 1, bounds: { x1: A3, y1: Math.min(D, n), x2: C, y2: Math.max(D, n) }, color: e });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderRangeColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, d2, D, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            k < h && (k = h);
            k > r && (k = r);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
              var n = a.dataSeriesIndexes[m], p = this.data[n], f = p.dataPoints;
              if (0 < f.length) {
                for (var q2 = 5 < k && p.bevelEnabled ? true : false, h = 0; h < f.length; h++)
                  if (f[h].getTime ? D = f[h].x.getTime() : D = f[h].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax) && !l(f[h].y) && f[h].y.length && "number" === typeof f[h].y[0] && "number" === typeof f[h].y[1]) {
                    b = a.axisX.convertValueToPixel(D);
                    r = a.axisY.convertValueToPixel(f[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(f[h].y[1]);
                    var x = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0, y = a.axisX.reversed ? x - k << 0 : x + k << 0, b = f[h].color ? f[h].color : p._colorSet[h % p._colorSet.length];
                    if (r > d2) {
                      var s = r;
                      r = d2;
                      d2 = s;
                    }
                    s = p.dataPointIds[h];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: h, x1: x, y1: r, x2: y, y2: d2 };
                    da(c, a.axisX.reversed ? y : x, r, a.axisX.reversed ? x : y, d2, b, 0, b, q2, q2, false, false, p.fillOpacity);
                    b = U(s);
                    t && da(this._eventManager.ghostCtx, a.axisX.reversed ? y : x, r, a.axisX.reversed ? x : y, d2, b, 0, null, false, false, false, false);
                    if (f[h].indexLabel || p.indexLabel || f[h].indexLabelFormatter || p.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: p, indexKeyword: 0, point: { x: x + (y - x) / 2, y: f[h].y[1] >= f[h].y[0] ? d2 : r }, direction: f[h].y[1] >= f[h].y[0] ? -1 : 1, bounds: { x1: x, y1: Math.min(r, d2), x2: y, y2: Math.max(r, d2) }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: p, indexKeyword: 1, point: { x: x + (y - x) / 2, y: f[h].y[1] >= f[h].y[0] ? r : d2 }, direction: f[h].y[1] >= f[h].y[0] ? 1 : -1, bounds: { x1: x, y1: Math.min(r, d2), x2: y, y2: Math.max(r, d2) }, color: b });
                  }
              }
            }
            t && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: R.fadeInAnimation,
              easingFunction: R.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        q.prototype.renderError = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = false, r = this.plotArea, d2 = 0, D, k, m, n, p, f, q2, x = a.axisX.dataInfo.minDiff;
            isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(r.x1, r.y1, r.width, r.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.clip());
            for (var y = 0, s = 0; s < this.data.length; s++)
              !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && y || y++;
            for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
              var v = a.dataSeriesIndexes[z], w3 = this.data[v], B2 = w3.dataPoints, C = l(w3._linkedSeries) ? false : w3._linkedSeries.type.match(/(bar|column)/ig) && w3._linkedSeries.visible ? true : false, I2 = 0;
              if (C)
                for (e = w3._linkedSeries.id, s = 0; s < e; s++)
                  !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && I2 || (this.data[s].type.match(/(range)/ig) && (h = true), I2++);
              e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? y : 1))) << 0 : 0.3 * this.width;
              h && (d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? y : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? r.height : r.width) * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range)) / (C ? y : 1)) << 0;
              this.dataPointMaxWidth && e > d2 && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < e) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
              s < e && (s = e);
              s > d2 && (s = d2);
              if (0 < B2.length)
                for (var G2 = w3._colorSet, d2 = 0; d2 < B2.length; d2++) {
                  var e = w3.lineColor = w3.options.color ? w3.options.color : G2[0], K = {
                    color: B2[d2].whiskerColor ? B2[d2].whiskerColor : B2[d2].color ? w3.whiskerColor ? w3.whiskerColor : B2[d2].color : w3.whiskerColor ? w3.whiskerColor : e,
                    thickness: l(B2[d2].whiskerThickness) ? w3.whiskerThickness : B2[d2].whiskerThickness,
                    dashType: B2[d2].whiskerDashType ? B2[d2].whiskerDashType : w3.whiskerDashType,
                    length: l(B2[d2].whiskerLength) ? l(w3.options.whiskerLength) ? s : w3.options.whiskerLength : B2[d2].whiskerLength,
                    trimLength: l(B2[d2].whiskerLength) ? l(w3.options.whiskerLength) ? 50 : 0 : 0
                  };
                  K.length = "number" === typeof K.length ? 0 >= K.length ? 0 : K.length >= s ? s : K.length : "string" === typeof K.length ? parseInt(K.length) * s / 100 > s ? s : parseInt(K.length) * s / 100 > s : s;
                  K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                  var L = { color: B2[d2].stemColor ? B2[d2].stemColor : B2[d2].color ? w3.stemColor ? w3.stemColor : B2[d2].color : w3.stemColor ? w3.stemColor : e, thickness: B2[d2].stemThickness ? B2[d2].stemThickness : w3.stemThickness, dashType: B2[d2].stemDashType ? B2[d2].stemDashType : w3.stemDashType };
                  L.thickness = "number" === typeof L.thickness ? 0 > L.thickness ? 0 : Math.round(L.thickness) : 2;
                  B2[d2].getTime ? q2 = B2[d2].x.getTime() : q2 = B2[d2].x;
                  if (!(q2 < a.axisX.dataInfo.viewPortMin || q2 > a.axisX.dataInfo.viewPortMax) && !l(B2[d2].y) && B2[d2].y.length && "number" === typeof B2[d2].y[0] && "number" === typeof B2[d2].y[1]) {
                    var ca = a.axisX.convertValueToPixel(q2);
                    b ? k = ca : D = ca;
                    ca = a.axisY.convertValueToPixel(B2[d2].y[0]);
                    b ? m = ca : p = ca;
                    ca = a.axisY.convertValueToPixel(B2[d2].y[1]);
                    b ? n = ca : f = ca;
                    b ? (p = a.axisX.reversed ? k + (C ? y : 1) * s / 2 - (C ? I2 - 1 : 0) * s << 0 : k - (C ? y : 1) * s / 2 + (C ? I2 - 1 : 0) * s << 0, f = a.axisX.reversed ? p - s << 0 : p + s << 0) : (m = a.axisX.reversed ? D + (C ? y : 1) * s / 2 - (C ? I2 - 1 : 0) * s << 0 : D - (C ? y : 1) * s / 2 + (C ? I2 - 1 : 0) * s << 0, n = a.axisX.reversed ? m - s << 0 : m + s << 0);
                    !b && p > f && (ca = p, p = f, f = ca);
                    b && m > n && (ca = m, m = n, n = ca);
                    ca = w3.dataPointIds[d2];
                    this._eventManager.objectMap[ca] = { id: ca, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: d2, x1: Math.min(m, n), y1: Math.min(p, f), x2: Math.max(n, m), y2: Math.max(f, p), isXYSwapped: b, stemProperties: L, whiskerProperties: K };
                    A2(
                      c,
                      Math.min(m, n),
                      Math.min(p, f),
                      Math.max(n, m),
                      Math.max(f, p),
                      e,
                      K,
                      L,
                      b
                    );
                    t && A2(this._eventManager.ghostCtx, m, p, n, f, e, K, L, b);
                    if (B2[d2].indexLabel || w3.indexLabel || B2[d2].indexLabelFormatter || w3.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "error", dataPoint: B2[d2], dataSeries: w3, indexKeyword: 0, point: { x: b ? B2[d2].y[1] >= B2[d2].y[0] ? m : n : m + (n - m) / 2, y: b ? p + (f - p) / 2 : B2[d2].y[1] >= B2[d2].y[0] ? f : p }, direction: B2[d2].y[1] >= B2[d2].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(m, n) : m, y1: b ? p : Math.min(p, f), x2: b ? Math.max(m, n) : n, y2: b ? f : Math.max(p, f) }, color: e, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: B2[d2], dataSeries: w3, indexKeyword: 1, point: { x: b ? B2[d2].y[1] >= B2[d2].y[0] ? n : m : m + (n - m) / 2, y: b ? p + (f - p) / 2 : B2[d2].y[1] >= B2[d2].y[0] ? p : f }, direction: B2[d2].y[1] >= B2[d2].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(m, n) : m, y1: b ? p : Math.min(p, f), x2: b ? Math.max(m, n) : n, y2: b ? f : Math.max(p, f) }, color: e, axisSwapped: b });
                  }
                }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderRangeBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, r, d2, D, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
            m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > r && (m = r);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var p = a.dataSeriesIndexes[n], f = this.data[p], q2 = f.dataPoints;
              if (0 < q2.length) {
                var x = 5 < m && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < q2.length; h++)
                  if (q2[h].getTime ? k = q2[h].x.getTime() : k = q2[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !l(q2[h].y) && q2[h].y.length && "number" === typeof q2[h].y[0] && "number" === typeof q2[h].y[1]) {
                    r = a.axisY.convertValueToPixel(q2[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(q2[h].y[1]);
                    D = a.axisX.convertValueToPixel(k);
                    D = a.axisX.reversed ? D + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : D - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0;
                    var y = a.axisX.reversed ? D - m << 0 : D + m << 0;
                    r > d2 && (b = r, r = d2, d2 = b);
                    b = q2[h].color ? q2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, r, a.axisX.reversed ? y : D, d2, a.axisX.reversed ? D : y, b, 0, null, x, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: p,
                      dataPointIndex: h,
                      x1: r,
                      y1: D,
                      x2: d2,
                      y2: y
                    };
                    b = U(b);
                    t && da(this._eventManager.ghostCtx, r, a.axisX.reversed ? y : D, d2, a.axisX.reversed ? D : y, b, 0, null, false, false, false, false);
                    if (q2[h].indexLabel || f.indexLabel || q2[h].indexLabelFormatter || f.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeBar", dataPoint: q2[h], dataSeries: f, indexKeyword: 0, point: { x: q2[h].y[1] >= q2[h].y[0] ? r : d2, y: D + (y - D) / 2 }, direction: q2[h].y[1] >= q2[h].y[0] ? -1 : 1, bounds: { x1: Math.min(r, d2), y1: D, x2: Math.max(r, d2), y2: y }, color: b }), this._indexLabels.push({
                        chartType: "rangeBar",
                        dataPoint: q2[h],
                        dataSeries: f,
                        indexKeyword: 1,
                        point: { x: q2[h].y[1] >= q2[h].y[0] ? d2 : r, y: D + (y - D) / 2 },
                        direction: q2[h].y[1] >= q2[h].y[0] ? 1 : -1,
                        bounds: { x1: Math.min(r, d2), y1: D, x2: Math.max(r, d2), y2: y },
                        color: b
                      });
                  }
              }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        q.prototype.renderRangeArea = function(a) {
          function g() {
            if (z) {
              for (var a2 = null, c2 = l2.length - 1; 0 <= c2; c2--)
                a2 = l2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              e.fill();
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < l2.length; c2++)
                  a2 = l2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(l2[0].x, l2[0].y1);
                for (c2 = 0; c2 < l2.length; c2++)
                  a2 = l2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(q2, x);
              e.beginPath();
              e.moveTo(q2, x);
              z = { x: q2, y: x };
              l2 = [];
              l2.push({ x: q2, y1: x, y2: y });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], r = this.plotArea;
            b.save();
            t && e.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            t && (e.beginPath(), e.rect(r.x1, r.y1, r.width, r.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var l2 = [], k = a.dataSeriesIndexes[d2], m = this.data[k], n = m.dataPoints, h = m.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k };
              h = U(h);
              e.fillStyle = h;
              var h = [], p = true, f = 0, q2, x, y, s, z = null;
              if (0 < n.length) {
                var v = m._colorSet[f % m._colorSet.length], w3 = m.lineColor = m.options.lineColor || v, A3 = w3;
                b.fillStyle = v;
                b.strokeStyle = w3;
                b.lineWidth = m.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var B2 = I(
                    m.nullDataLineDashType,
                    m.lineThickness
                  ), C = m.lineDashType, G2 = I(C, m.lineThickness);
                  b.setLineDash(G2);
                }
                for (var K = true; f < n.length; f++)
                  if (s = n[f].x.getTime ? n[f].x.getTime() : n[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !K)))
                    if (null !== n[f].y && n[f].y.length && "number" === typeof n[f].y[0] && "number" === typeof n[f].y[1]) {
                      q2 = a.axisX.convertValueToPixel(s);
                      x = a.axisY.convertValueToPixel(n[f].y[0]);
                      y = a.axisY.convertValueToPixel(n[f].y[1]);
                      p || K ? (m.connectNullData && !p ? (b.setLineDash && (m.options.nullDataLineDashType || C === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (l2[l2.length - 1].newLineDashArray = G2, C = m.nullDataLineDashType, b.setLineDash(B2)), b.lineTo(q2, x), t && e.lineTo(q2, x), l2.push({ x: q2, y1: x, y2: y })) : (b.beginPath(), b.moveTo(q2, x), z = { x: q2, y: x }, l2 = [], l2.push({ x: q2, y1: x, y2: y }), t && (e.beginPath(), e.moveTo(q2, x))), K = p = false) : (b.lineTo(q2, x), l2.push({ x: q2, y1: x, y2: y }), t && e.lineTo(q2, x), 0 == f % 250 && g());
                      s = m.dataPointIds[f];
                      this._eventManager.objectMap[s] = {
                        id: s,
                        objectType: "dataPoint",
                        dataSeriesIndex: k,
                        dataPointIndex: f,
                        x1: q2,
                        y1: x,
                        y2: y
                      };
                      f < n.length - 1 && (A3 !== (n[f].lineColor || w3) || C !== (n[f].lineDashType || m.lineDashType)) && (g(), A3 = n[f].lineColor || w3, l2[l2.length - 1].newStrokeStyle = A3, b.strokeStyle = A3, b.setLineDash && (n[f].lineDashType ? (C = n[f].lineDashType, l2[l2.length - 1].newLineDashArray = I(C, m.lineThickness), b.setLineDash(l2[l2.length - 1].newLineDashArray)) : (C = m.lineDashType, l2[l2.length - 1].newLineDashArray = G2, b.setLineDash(G2))));
                      if (0 !== n[f].markerSize && (0 < n[f].markerSize || 0 < m.markerSize)) {
                        var L = m.getMarkerProperties(f, q2, y, b);
                        h.push(L);
                        var ca = U(s);
                        t && h.push({ x: q2, y, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                        L = m.getMarkerProperties(f, q2, x, b);
                        h.push(L);
                        ca = U(s);
                        t && h.push({ x: q2, y: x, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                      }
                      if (n[f].indexLabel || m.indexLabel || n[f].indexLabelFormatter || m.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: m, indexKeyword: 0, point: { x: q2, y: x }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? -1 : 1, color: v }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: m, indexKeyword: 1, point: { x: q2, y }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? 1 : -1, color: v });
                    } else
                      K || p || g(), K = true;
                g();
                aa.drawMarkers(h);
              }
            }
            t && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderRangeSplineArea = function(a) {
          function g(a2, c2) {
            var f2 = w2(x, 2);
            if (0 < f2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var g2 = 0; g2 < f2.length - 3; g2 += 3) {
                  if (f2[g2].newStrokeStyle || f2[g2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), f2[g2].newStrokeStyle && (b.strokeStyle = f2[g2].newStrokeStyle), f2[g2].newLineDashArray && b.setLineDash(f2[g2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(f2[0].x, f2[0].y);
              t && (e.beginPath(), e.moveTo(f2[0].x, f2[0].y));
              for (g2 = 0; g2 < f2.length - 3; g2 += 3)
                b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y), t && e.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
              f2 = w2(y, 2);
              b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
              for (g2 = f2.length - 1; 2 < g2; g2 -= 3)
                b.bezierCurveTo(f2[g2 - 1].x, f2[g2 - 1].y, f2[g2 - 2].x, f2[g2 - 2].y, f2[g2 - 3].x, f2[g2 - 3].y), t && e.bezierCurveTo(f2[g2 - 1].x, f2[g2 - 1].y, f2[g2 - 2].x, f2[g2 - 2].y, f2[g2 - 3].x, f2[g2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              t && (e.closePath(), e.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (x[h2].newStrokeStyle || x[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), x[h2].newStrokeStyle && (b.strokeStyle = x[h2].newStrokeStyle), x[h2].newLineDashArray && b.setLineDash(x[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                f2 = w2(x, 2);
                b.moveTo(f2[0].x, f2[0].y);
                for (h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (x[h2].newStrokeStyle || x[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), x[h2].newStrokeStyle && (b.strokeStyle = x[h2].newStrokeStyle), x[h2].newLineDashArray && b.setLineDash(x[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = t ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], r = this.plotArea;
            b.save();
            t && e.save();
            b.beginPath();
            b.rect(r.x1, r.y1, r.width, r.height);
            b.clip();
            t && (e.beginPath(), e.rect(r.x1, r.y1, r.width, r.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var l2 = a.dataSeriesIndexes[d2], k = this.data[l2], m = k.dataPoints, h = k.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              h = U(h);
              e.fillStyle = h;
              var h = [], n = 0, p, f, q2, x = [], y = [];
              if (0 < m.length) {
                var s = k._colorSet[n % k._colorSet.length], z = k.lineColor = k.options.lineColor || s, v = z;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var A3 = "solid", B2;
                if (b.setLineDash) {
                  var C = I(k.nullDataLineDashType, k.lineThickness), A3 = k.lineDashType;
                  B2 = I(A3, k.lineThickness);
                }
                for (f = false; n < m.length; n++)
                  if (p = m[n].x.getTime ? m[n].x.getTime() : m[n].x, !(p < a.axisX.dataInfo.viewPortMin || p > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                    if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                      p = a.axisX.convertValueToPixel(p);
                      f = a.axisY.convertValueToPixel(m[n].y[0]);
                      q2 = a.axisY.convertValueToPixel(m[n].y[1]);
                      var G2 = k.dataPointIds[n];
                      this._eventManager.objectMap[G2] = { id: G2, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: n, x1: p, y1: f, y2: q2 };
                      x[x.length] = { x: p, y: f };
                      y[y.length] = { x: p, y: q2 };
                      n < m.length - 1 && (v !== (m[n].lineColor || z) || A3 !== (m[n].lineDashType || k.lineDashType)) && (v = m[n].lineColor || z, x[x.length - 1].newStrokeStyle = v, b.setLineDash && (m[n].lineDashType ? (A3 = m[n].lineDashType, x[x.length - 1].newLineDashArray = I(A3, k.lineThickness)) : (A3 = k.lineDashType, x[x.length - 1].newLineDashArray = B2)));
                      if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                        var J2 = k.getMarkerProperties(n, p, f, b);
                        h.push(J2);
                        var K = U(G2);
                        t && h.push({ x: p, y: f, ctx: e, type: J2.type, size: J2.size, color: K, borderColor: K, borderThickness: J2.borderThickness });
                        J2 = k.getMarkerProperties(n, p, q2, b);
                        h.push(J2);
                        K = U(G2);
                        t && h.push({ x: p, y: q2, ctx: e, type: J2.type, size: J2.size, color: K, borderColor: K, borderThickness: J2.borderThickness });
                      }
                      if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 0, point: { x: p, y: f }, direction: m[n].y[0] <= m[n].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 1, point: {
                          x: p,
                          y: q2
                        }, direction: m[n].y[0] <= m[n].y[1] ? 1 : -1, color: s });
                      f = false;
                    } else
                      0 < n && !f && (k.connectNullData ? b.setLineDash && (0 < x.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType)) && (x[x.length - 1].newLineDashArray = C, A3 = k.nullDataLineDashType) : (g(B2, z), x = [], y = [])), f = true;
                g(B2, z);
                aa.drawMarkers(h);
              }
            }
            t && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(r.x1, r.y1, r.width, r.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: R.xClipAnimation, easingFunction: R.easing.linear, animationBase: 0 };
          }
        };
        q.prototype.renderWaterfall = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = t ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, e = null, h = this.plotArea, r = 0, d2, l2, k, m, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), r = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            l2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && r > l2 && (r = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l2 < r) && (l2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, r));
            p < r && (p = r);
            p > l2 && (p = l2);
            c.save();
            t && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            t && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
            for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
              var q2 = a.dataSeriesIndexes[f], x = this.data[q2], y = x.dataPoints, e = x._colorSet[0];
              x.risingColor = x.options.risingColor ? x.options.risingColor : e;
              x.fallingColor = x.options.fallingColor ? x.options.fallingColor : "#e40a0a";
              var s = "number" === typeof x.options.lineThickness ? Math.round(x.lineThickness) : 1, z = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < y.length)
                for (var v = 5 < p && x.bevelEnabled ? true : false, w3 = false, A3 = null, B2 = null, r = 0; r < y.length; r++)
                  if (y[r].getTime ? m = y[r].x.getTime() : m = y[r].x, "number" !== typeof y[r].y) {
                    if (0 < r && !w3 && x.connectNullData)
                      var G2 = x.options.nullDataLineDashType || !y[r - 1].lineDashType ? x.nullDataLineDashType : y[r - 1].lineDashType;
                    w3 = true;
                  } else {
                    d2 = a.axisX.convertValueToPixel(m);
                    l2 = 0 === x.dataPointEOs[r].cumulativeSum ? n : a.axisY.convertValueToPixel(x.dataPointEOs[r].cumulativeSum);
                    k = 0 === x.dataPointEOs[r].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(x.dataPointEOs[r].cumulativeSumYStartValue);
                    d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + f) * p << 0 : d2 - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + f) * p << 0;
                    var J2 = a.axisX.reversed ? d2 - p << 0 : d2 + p << 0;
                    l2 > k && (e = l2, l2 = k, k = e);
                    a.axisY.reversed && (e = l2, l2 = k, k = e);
                    e = x.dataPointIds[r];
                    this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: q2, dataPointIndex: r, x1: d2, y1: l2, x2: J2, y2: k };
                    var K = y[r].color ? y[r].color : 0 < y[r].y ? x.risingColor : x.fallingColor;
                    da(c, a.axisX.reversed ? J2 : d2, a.axisY.reversed ? k : l2, a.axisX.reversed ? d2 : J2, a.axisY.reversed ? l2 : k, K, 0, K, v, v, false, false, x.fillOpacity);
                    e = U(e);
                    t && da(this._eventManager.ghostCtx, a.axisX.reversed ? J2 : d2, l2, a.axisX.reversed ? d2 : J2, k, e, 0, null, false, false, false, false);
                    var L, K = d2;
                    L = "undefined" !== typeof y[r].isIntermediateSum && true === y[r].isIntermediateSum || "undefined" !== typeof y[r].isCumulativeSum && true === y[r].isCumulativeSum ? 0 < y[r].y ? l2 : k : 0 < y[r].y ? k : l2;
                    0 < r && A3 && (!w3 || x.connectNullData) && (w3 && c.setLineDash && c.setLineDash(I(G2, s)), c.beginPath(), c.moveTo(A3, B2 - z), c.lineTo(K, L - z), 0 < s && c.stroke(), t && (b.beginPath(), b.moveTo(
                      A3,
                      B2 - z
                    ), b.lineTo(K, L - z), 0 < s && b.stroke()));
                    w3 = false;
                    A3 = J2;
                    B2 = 0 < y[r].y ? l2 : k;
                    K = y[r].lineDashType ? y[r].lineDashType : x.options.lineDashType ? x.options.lineDashType : "shortDash";
                    c.strokeStyle = y[r].lineColor ? y[r].lineColor : x.options.lineColor ? x.options.lineColor : "#9e9e9e";
                    c.lineWidth = s;
                    c.setLineDash && (K = I(K, s), c.setLineDash(K));
                    (y[r].indexLabel || x.indexLabel || y[r].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "waterfall",
                      dataPoint: y[r],
                      dataSeries: x,
                      point: { x: d2 + (J2 - d2) / 2, y: 0 <= y[r].y ? l2 : k },
                      direction: 0 > y[r].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: d2, y1: Math.min(l2, k), x2: J2, y2: Math.max(l2, k) },
                      color: e
                    });
                  }
            }
            t && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(
              h.x1,
              h.y1,
              h.width,
              h.height
            ), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: R.fadeInAnimation, easingFunction: R.easing.easeInQuad, animationBase: 0 };
          }
        };
        var X2 = function(a, g, c, b, e, h, r, d2, l2) {
          if (!(0 > c)) {
            "undefined" === typeof d2 && (d2 = 1);
            if (!t) {
              var k = Number((r % (2 * Math.PI)).toFixed(8));
              Number((h % (2 * Math.PI)).toFixed(8)) === k && (r -= 1e-4);
            }
            a.save();
            a.globalAlpha = d2;
            "pie" === e ? (a.beginPath(), a.moveTo(g.x, g.y), a.arc(g.x, g.y, c, h, r, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(g.x, g.y, c, h, r, false), 0 <= l2 && a.arc(g.x, g.y, l2 * c, r, h, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        q.prototype.renderPie = function(a) {
          function g() {
            if (k && m) {
              var a2 = 0, b2 = 0, c2 = 0, e2 = 0;
              l(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * p.width);
              for (var g2 = 0; g2 < m.length; g2++) {
                var h2 = m[g2], r2 = k.dataPointIds[g2];
                f[g2].id = r2;
                f[g2].objectType = "dataPoint";
                f[g2].dataPointIndex = g2;
                f[g2].dataSeriesIndex = 0;
                var d3 = f[g2], n2 = { percent: null, total: null }, u = null, n2 = t2.getPercentAndTotal(k, h2);
                if (k.indexLabelFormatter || h2.indexLabelFormatter)
                  u = { chart: t2.options, dataSeries: k, dataPoint: h2, total: n2.total, percent: n2.percent };
                n2 = h2.indexLabelFormatter ? h2.indexLabelFormatter(u) : h2.indexLabel ? t2.replaceKeywordsWithValue(h2.indexLabel, h2, k, g2) : k.indexLabelFormatter ? k.indexLabelFormatter(u) : k.indexLabel ? t2.replaceKeywordsWithValue(k.indexLabel, h2, k, g2) : h2.label ? h2.label : "";
                t2._eventManager.objectMap[r2] = d3;
                d3.center = { x: v.x, y: v.y };
                d3.y = h2.y;
                d3.radius = B2;
                d3.percentInnerRadius = J2;
                d3.indexLabelText = n2;
                d3.indexLabelPlacement = k.indexLabelPlacement;
                d3.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h2.color ? h2.color : k._colorSet[g2 % k._colorSet.length];
                d3.indexLabelLineThickness = l(h2.indexLabelLineThickness) ? k.indexLabelLineThickness : h2.indexLabelLineThickness;
                d3.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : k.indexLabelLineDashType;
                d3.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : k.indexLabelFontColor;
                d3.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : k.indexLabelFontStyle;
                d3.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : k.indexLabelFontWeight;
                d3.indexLabelFontSize = l(h2.indexLabelFontSize) ? k.indexLabelFontSize : h2.indexLabelFontSize;
                d3.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : k.indexLabelFontFamily;
                d3.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                d3.indexLabelBorderColor = h2.indexLabelBorderColor ? h2.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                d3.indexLabelBorderThickness = h2.indexLabelBorderThickness ? h2.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                d3.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                d3.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : k.indexLabelWrap;
                d3.indexLabelTextAlign = h2.indexLabelTextAlign ? h2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                d3.startAngle = 0 === g2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[g2 - 1].endAngle;
                d3.startAngle = (d3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                d3.endAngle = d3.startAngle + 2 * Math.PI / w3 * Math.abs(h2.y);
                h2 = (d3.endAngle + d3.startAngle) / 2;
                h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
                d3.midAngle = h2;
                if (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || f[c2].midAngle > d3.midAngle)
                    c2 = g2;
                  a2++;
                } else if (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || f[e2].midAngle > d3.midAngle)
                    e2 = g2;
                  b2++;
                }
                d3.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
                d3.indexLabelTextBlock = new ka(t2.plotArea.ctx, {
                  fontSize: d3.indexLabelFontSize,
                  fontFamily: d3.indexLabelFontFamily,
                  fontColor: d3.indexLabelFontColor,
                  fontStyle: d3.indexLabelFontStyle,
                  fontWeight: d3.indexLabelFontWeight,
                  textAlign: d3.indexLabelTextAlign,
                  backgroundColor: d3.indexLabelBackgroundColor,
                  borderColor: d3.indexLabelBorderColor,
                  borderThickness: d3.indexLabelBorderThickness,
                  maxWidth: d3.indexLabelMaxWidth,
                  maxHeight: d3.indexLabelWrap ? 5 * d3.indexLabelFontSize : 1.5 * d3.indexLabelFontSize,
                  text: d3.indexLabelText,
                  padding: 0,
                  textBaseline: "middle"
                });
                d3.indexLabelTextBlock.measureText();
              }
              r2 = h2 = 0;
              n2 = false;
              for (g2 = 0; g2 < m.length; g2++)
                d3 = f[(c2 + g2) % m.length], 1 < a2 && (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) && (h2 <= a2 / 2 && !n2 ? (d3.hemisphere = "right", h2++) : (d3.hemisphere = "left", n2 = true));
              n2 = false;
              for (g2 = 0; g2 < m.length; g2++)
                d3 = f[(e2 + g2) % m.length], 1 < b2 && (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) && (r2 <= b2 / 2 && !n2 ? (d3.hemisphere = "left", r2++) : (d3.hemisphere = "right", n2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = t2.plotArea.ctx;
            c2.clearRect(p.x1, p.y1, p.width, p.height);
            c2.fillStyle = t2.backgroundColor;
            c2.fillRect(p.x1, p.y1, p.width, p.height);
            for (c2 = 0; c2 < m.length; c2++) {
              var g2 = f[c2].startAngle, e2 = f[c2].endAngle;
              if (e2 > g2) {
                var h2 = 0.07 * B2 * Math.cos(f[c2].midAngle), r2 = 0.07 * B2 * Math.sin(f[c2].midAngle), d3 = false;
                if (m[c2].exploded) {
                  if (1e-9 < Math.abs(f[c2].center.x - (v.x + h2)) || 1e-9 < Math.abs(f[c2].center.y - (v.y + r2)))
                    f[c2].center.x = v.x + h2 * a2, f[c2].center.y = v.y + r2 * a2, d3 = true;
                } else if (0 < Math.abs(f[c2].center.x - v.x) || 0 < Math.abs(f[c2].center.y - v.y))
                  f[c2].center.x = v.x + h2 * (1 - a2), f[c2].center.y = v.y + r2 * (1 - a2), d3 = true;
                d3 && b2 && (h2 = {}, h2.dataSeries = k, h2.dataPoint = k.dataPoints[c2], h2.index = c2, t2.toolTip.highlightObjects([h2]));
                X2(t2.plotArea.ctx, f[c2].center, f[c2].radius, m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, g2, e2, k.fillOpacity, f[c2].percentInnerRadius);
              }
            }
            c2 = t2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (g2 = g2 = 0; g2 < m.length; g2++)
              e2 = f[g2], e2.indexLabelText && (e2.indexLabelTextBlock.y -= e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, h2 = 0, h2 = "left" === e2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(e2.indexLabelTextBlock.width + n) : -e2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? n : -e2.indexLabelTextBlock.width / 2, e2.indexLabelTextBlock.x += h2, e2.indexLabelTextBlock.render(true), e2.indexLabelTextBlock.x -= h2, e2.indexLabelTextBlock.y += e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, "inside" !== e2.indexLabelPlacement && 0 < e2.indexLabelLineThickness && (h2 = e2.center.x + B2 * Math.cos(e2.midAngle), r2 = e2.center.y + B2 * Math.sin(e2.midAngle), c2.strokeStyle = e2.indexLabelLineColor, c2.lineWidth = e2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(I(e2.indexLabelLineDashType, e2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(h2, r2), c2.lineTo(e2.indexLabelTextBlock.x, e2.indexLabelTextBlock.y), c2.lineTo(e2.indexLabelTextBlock.x + ("left" === e2.hemisphere ? -n : n), e2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, f2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, g2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? e2 - f2 : c2 - g2;
          }
          function e(a2) {
            for (var c2 = null, e2 = 1; e2 < m.length; e2++)
              if (c2 = (a2 + e2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
                c2 = null;
                break;
              } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
                break;
              else
                c2 = null;
            return c2;
          }
          function h(a2, c2, g2) {
            g2 = (g2 || 0) + 1;
            if (1e3 < g2)
              return 0;
            c2 = c2 || 0;
            var r2 = 0, k2 = v.y - 1 * x, d3 = v.y + 1 * x;
            if (0 <= a2 && a2 < m.length) {
              var l2 = f[a2];
              if (0 > c2 && l2.indexLabelTextBlock.y < k2 || 0 < c2 && l2.indexLabelTextBlock.y > d3)
                return 0;
              var n2 = 0, p2 = 0, p2 = n2 = n2 = 0;
              0 > c2 ? l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 > k2 && l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2))) : l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 < k2 && l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 > d3 && (c2 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 - d3);
              c2 = l2.indexLabelTextBlock.y + c2;
              k2 = 0;
              k2 = "right" === l2.hemisphere ? v.x + Math.sqrt(Math.pow(x, 2) - Math.pow(c2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(x, 2) - Math.pow(c2 - v.y, 2));
              p2 = v.x + B2 * Math.cos(l2.midAngle);
              n2 = v.y + B2 * Math.sin(l2.midAngle);
              n2 = Math.sqrt(Math.pow(k2 - p2, 2) + Math.pow(c2 - n2, 2));
              p2 = Math.acos(B2 / x);
              n2 = Math.acos((x * x + B2 * B2 - n2 * n2) / (2 * B2 * x));
              c2 = n2 < p2 ? c2 - l2.indexLabelTextBlock.y : 0;
              k2 = null;
              for (d3 = 1; d3 < m.length; d3++)
                if (k2 = (a2 - d3 + f.length) % f.length, f[k2].hemisphere !== f[a2].hemisphere) {
                  k2 = null;
                  break;
                } else if (f[k2].indexLabelText && f[k2].hemisphere === f[a2].hemisphere && k2 !== a2 && (0 > b(f[k2], f[a2]) || ("right" === f[a2].hemisphere ? f[k2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[k2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                  break;
                else
                  k2 = null;
              p2 = k2;
              n2 = e(a2);
              d3 = k2 = 0;
              0 > c2 ? (d3 = "right" === l2.hemisphere ? p2 : n2, r2 = c2, null !== d3 && (p2 = -c2, c2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 - (f[d3].indexLabelTextBlock.y + f[d3].indexLabelTextBlock.height / 2), c2 - p2 < q2 && (k2 = -p2, d3 = h(d3, k2, g2 + 1), +d3.toFixed(z) > +k2.toFixed(z) && (r2 = c2 > q2 ? -(c2 - q2) : -(p2 - (d3 - k2)))))) : 0 < c2 && (d3 = "right" === l2.hemisphere ? n2 : p2, r2 = c2, null !== d3 && (p2 = c2, c2 = f[d3].indexLabelTextBlock.y - f[d3].indexLabelTextBlock.height / 2 - (l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2), c2 - p2 < q2 && (k2 = p2, d3 = h(d3, k2, g2 + 1), +d3.toFixed(z) < +k2.toFixed(z) && (r2 = c2 > q2 ? c2 - q2 : p2 - (k2 - d3)))));
              r2 && (g2 = l2.indexLabelTextBlock.y + r2, c2 = 0, c2 = "right" === l2.hemisphere ? v.x + Math.sqrt(Math.pow(x, 2) - Math.pow(g2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(x, 2) - Math.pow(g2 - v.y, 2)), l2.midAngle > Math.PI / 2 - s && l2.midAngle < Math.PI / 2 + s ? (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === l2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === l2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : l2.midAngle > 3 * Math.PI / 2 - s && l2.midAngle < 3 * Math.PI / 2 + s && (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === l2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === l2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), l2.indexLabelTextBlock.y = g2, l2.indexLabelTextBlock.x = c2, l2.indexLabelAngle = Math.atan2(l2.indexLabelTextBlock.y - v.y, l2.indexLabelTextBlock.x - v.x));
            }
            return r2;
          }
          function r() {
            var a2 = t2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, g2 = 0, r2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < g2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && B2 - g2 <= G2)
                r2 = false;
              r2 && (B2 -= g2);
              g2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                x = B2 * y;
                for (a2 = 0; a2 < m.length; a2++) {
                  var d3 = f[a2];
                  d3.indexLabelTextBlock.x = v.x + x * Math.cos(d3.midAngle);
                  d3.indexLabelTextBlock.y = v.y + x * Math.sin(d3.midAngle);
                  d3.indexLabelAngle = d3.midAngle;
                  d3.radius = B2;
                  d3.percentInnerRadius = J2;
                }
                for (var l2, s2, a2 = 0; a2 < m.length; a2++) {
                  var d3 = f[a2], u = e(a2);
                  if (null !== u) {
                    l2 = f[a2];
                    s2 = f[u];
                    var w4 = 0, w4 = b(l2, s2) - q2;
                    if (0 > w4) {
                      for (var A4 = s2 = 0, W = 0; W < m.length; W++)
                        W !== a2 && f[W].hemisphere === d3.hemisphere && (f[W].indexLabelTextBlock.y < d3.indexLabelTextBlock.y ? s2++ : A4++);
                      s2 = w4 / (s2 + A4 || 1) * A4;
                      var A4 = -1 * (w4 - s2), I2 = W = 0;
                      "right" === d3.hemisphere ? (W = h(a2, s2), A4 = -1 * (w4 - W), I2 = h(u, A4), +I2.toFixed(z) < +A4.toFixed(z) && +W.toFixed(z) <= +s2.toFixed(z) && h(a2, -(A4 - I2))) : (W = h(u, s2), A4 = -1 * (w4 - W), I2 = h(a2, A4), +I2.toFixed(z) < +A4.toFixed(z) && +W.toFixed(z) <= +s2.toFixed(z) && h(u, -(A4 - I2)));
                    }
                  }
                }
              } else
                for (a2 = 0; a2 < m.length; a2++)
                  d3 = f[a2], x = "pie" === k.type ? 0.7 * B2 : 0.85 * B2, u = v.x + x * Math.cos(d3.midAngle), s2 = v.y + x * Math.sin(d3.midAngle), d3.indexLabelTextBlock.x = u, d3.indexLabelTextBlock.y = s2;
              for (a2 = 0; a2 < m.length; a2++)
                if (d3 = f[a2], u = d3.indexLabelTextBlock.measureText(), 0 !== u.height && 0 !== u.width)
                  u = u = 0, "right" === d3.hemisphere ? (u = p.x2 - (d3.indexLabelTextBlock.x + d3.indexLabelTextBlock.width + n), u *= -1) : u = p.x1 - (d3.indexLabelTextBlock.x - d3.indexLabelTextBlock.width - n), 0 < u && (!r2 && d3.indexLabelText && (s2 = "right" === d3.hemisphere ? p.x2 - d3.indexLabelTextBlock.x : d3.indexLabelTextBlock.x - p.x1, 0.3 * d3.indexLabelTextBlock.maxWidth > s2 ? d3.indexLabelText = "" : d3.indexLabelTextBlock.maxWidth = 0.85 * s2, 0.3 * d3.indexLabelTextBlock.maxWidth < s2 && (d3.indexLabelTextBlock.x -= "right" === d3.hemisphere ? 2 : -2)), Math.abs(d3.indexLabelTextBlock.y - d3.indexLabelTextBlock.height / 2 - v.y) < B2 || Math.abs(d3.indexLabelTextBlock.y + d3.indexLabelTextBlock.height / 2 - v.y) < B2) && (u /= Math.abs(Math.cos(d3.indexLabelAngle)), 9 < u && (u *= 0.3), u > g2 && (g2 = u)), u = u = 0, 0 < d3.indexLabelAngle && d3.indexLabelAngle < Math.PI ? (u = p.y2 - (d3.indexLabelTextBlock.y + d3.indexLabelTextBlock.height / 2 + 5), u *= -1) : u = p.y1 - (d3.indexLabelTextBlock.y - d3.indexLabelTextBlock.height / 2 - 5), 0 < u && (!r2 && d3.indexLabelText && (s2 = 0 < d3.indexLabelAngle && d3.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, u * s2) && h(a2, 2 * s2)), Math.abs(d3.indexLabelTextBlock.x - v.x) < B2 && (u /= Math.abs(Math.sin(d3.indexLabelAngle)), 9 < u && (u *= 0.3), u > g2 && (g2 = u)));
              var P = function(a3, b2, c3) {
                for (var e2 = [], g3 = 0; e2.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + m.length) % m.length)
                  ;
                e2.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < e2.length; b2++)
                  if (c3 = e2[b2], g3 < 0.7 * a3)
                    g3 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                  else
                    break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, g3 = 0, h2 = false, d4 = 0; d4 < m.length; d4++)
                  if (h2 = false, l2 = f[d4], l2.indexLabelText) {
                    var r3 = e(d4);
                    if (null !== r3) {
                      var k2 = f[r3];
                      w4 = 0;
                      w4 = b(l2, k2);
                      var p2;
                      if (p2 = 0 > w4) {
                        p2 = l2.indexLabelTextBlock.x;
                        var u2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2, s3 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2, t3 = k2.indexLabelTextBlock.y - k2.indexLabelTextBlock.height / 2, q3 = k2.indexLabelTextBlock.x + k2.indexLabelTextBlock.width, v2 = k2.indexLabelTextBlock.y + k2.indexLabelTextBlock.height / 2;
                        p2 = l2.indexLabelTextBlock.x + l2.indexLabelTextBlock.width < k2.indexLabelTextBlock.x - n || p2 > q3 + n || u2 > v2 + n || s3 < t3 - n ? false : true;
                      }
                      p2 ? (0 > a3 && (a3 = d4), r3 !== a3 && (c3 = r3, g3 += -w4), 0 === d4 % Math.max(m.length / 10, 3) && (h2 = true)) : h2 = true;
                      h2 && (0 < g3 && 0 <= a3 && 0 <= c3) && (P(g3, a3, c3), c3 = a3 = -1, g3 = 0);
                    }
                  }
                0 < g3 && P(g3, a3, c3);
              })();
            }
          }
          function d2() {
            t2.plotArea.layoutManager.reset();
            t2.title && (t2.title.dockInsidePlotArea || "center" === t2.title.horizontalAlign && "center" === t2.title.verticalAlign) && t2.title.render();
            if (t2.subtitles)
              for (var a2 = 0; a2 < t2.subtitles.length; a2++) {
                var b2 = t2.subtitles[a2];
                (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
              }
            t2.legend && (t2.legend.dockInsidePlotArea || "center" === t2.legend.horizontalAlign && "center" === t2.legend.verticalAlign) && (t2.legend.setLayout(), t2.legend.render());
          }
          var t2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], m = k.dataPoints, n = 10, p = this.plotArea, f = k.dataPointEOs, q2 = 2, x, y = 1.3, s = 20 / 180 * Math.PI, z = 6, v = { x: (p.x2 + p.x1) / 2, y: (p.y2 + p.y1) / 2 }, w3 = 0;
            a = false;
            for (var A3 = 0; A3 < m.length; A3++)
              w3 += Math.abs(m[A3].y), !a && ("undefined" !== typeof m[A3].indexLabel && null !== m[A3].indexLabel && 0 < m[A3].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof m[A3].label && null !== m[A3].label && 0 < m[A3].label.toString().length) && (a = true);
            if (0 !== w3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var B2 = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(p.width, p.height) / 2 : 0.92 * Math.min(p.width, p.height) / 2;
              k.radius && (B2 = Ua(k.radius, B2));
              var G2 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ua(k.innerRadius, B2) : 0.7 * B2, J2 = Math.min(G2 / B2, (B2 - 1) / B2);
              this.pieDoughnutClickHandler = function(a2) {
                t2.isAnimating || !l(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && t2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  d2();
                  t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                  t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
                }));
              };
              g();
              r();
              r();
              r();
              r();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = t2.plotArea.ctx;
                b2.clearRect(p.x1, p.y1, p.width, p.height);
                b2.fillStyle = t2.backgroundColor;
                b2.fillRect(p.x1, p.y1, p.width, p.height);
                for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < m.length; c2++) {
                  var e2 = 0 === c2 ? f[c2].startAngle : g2, g2 = e2 + (f[c2].endAngle - f[c2].startAngle), h2 = false;
                  g2 > b2 && (g2 = b2, h2 = true);
                  var r2 = m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length];
                  g2 > e2 && X2(t2.plotArea.ctx, f[c2].center, f[c2].radius, r2, k.type, e2, g2, k.fillOpacity, f[c2].percentInnerRadius);
                  if (h2)
                    break;
                }
                d2();
                t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                1 <= a2 && t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
              }, function() {
                t2.disableToolTip = false;
                t2._animator.animate(0, t2.animatedRender ? 500 : 0, function(a2) {
                  c(a2, false);
                  d2();
                  t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                });
                t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
              });
              k.radius = B2;
              "doughnut" === k.type && (k.innerRadius = G2);
            }
          }
        };
        var qa2 = function(a, g, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(g.y4 - g.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(g.x1), Math.round(g.y1)), a.lineTo(Math.round(g.x2), Math.round(g.y2)), a.lineTo(Math.round(g.x3), Math.round(g.y3)), a.lineTo(Math.round(g.x4), Math.round(g.y4)), "undefined" !== g.x5 && (a.lineTo(
            Math.round(g.x5),
            Math.round(g.y5)
          ), a.lineTo(Math.round(g.x6), Math.round(g.y6))), a.closePath(), a.fillStyle = b ? b : g.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        q.prototype.renderFunnel = function(a) {
          function g() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < z.length; c2++) {
              if ("undefined" === typeof z[c2].y)
                return -1;
              z[c2].y = "number" === typeof z[c2].y ? z[c2].y : 0;
              a2 += Math.abs(z[c2].y);
            }
            if (0 === a2)
              return -1;
            for (c2 = b2[0] = 0; c2 < z.length; c2++)
              b2.push(Math.abs(z[c2].y) * G2 / a2);
            return b2;
          }
          function c() {
            var a2 = Y2, b2 = $3, c2 = P, e2 = aa2, g2, f2;
            g2 = S2;
            f2 = T2 - M;
            e2 = Math.abs((f2 - g2) * (b2 - a2 + (e2 - c2)) / 2);
            c2 = aa2 - P;
            g2 = f2 - g2;
            f2 = c2 * (f2 - T2);
            f2 = Math.abs(f2);
            f2 = e2 + f2;
            for (var e2 = [], h2 = 0, d3 = 0; d3 < z.length; d3++) {
              if ("undefined" === typeof z[d3].y)
                return -1;
              z[d3].y = "number" === typeof z[d3].y ? z[d3].y : 0;
              h2 += Math.abs(z[d3].y);
            }
            if (0 === h2)
              return -1;
            for (var r = e2[0] = 0, k2 = 0, l2, m2, b2 = b2 - a2, r = false, d3 = 0; d3 < z.length; d3++)
              a2 = Math.abs(z[d3].y) * f2 / h2, r ? l2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (m2 = da2 * da2 * b2 * b2 - 4 * Math.abs(da2) * a2, 0 > m2 ? (m2 = c2, r = (b2 + m2) * (g2 - k2) / 2, a2 -= r, l2 = g2 - k2, k2 += g2 - k2, l2 += 0 == m2 ? 0 : a2 / m2, k2 += a2 / m2, r = true) : (l2 = (Math.abs(da2) * b2 - Math.sqrt(m2)) / 2, m2 = b2 - 2 * l2 / Math.abs(da2), k2 += l2, k2 > g2 && (k2 -= l2, m2 = c2, r = (b2 + m2) * (g2 - k2) / 2, a2 -= r, l2 = g2 - k2, k2 += g2 - k2, l2 += a2 / m2, k2 += a2 / m2, r = true), b2 = m2)), e2.push(l2);
            return e2;
          }
          function b() {
            if (s && z) {
              for (var a2, b2, c2, g2, e2, h2, d3, k2, r, m2, n2, p2, u2, q3, v2, x2, D, w4 = [], B3 = [], A4 = { percent: null, total: null }, E = null, C2 = 0; C2 < z.length; C2++)
                D = O[C2], D = "undefined" !== typeof D.x5 ? (D.y2 + D.y4) / 2 : (D.y2 + D.y3) / 2, D = f(D).x2 + 1, w4[C2] = Q3 - (isNaN(D) ? 0 : D) - U2;
              D = 0.5 * U2;
              for (var C2 = 0, F2 = z.length - 1; C2 < z.length || 0 <= F2; C2++, F2--) {
                b2 = s.reversed ? z[F2] : z[C2];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(z.length - 1 - C2) % s._colorSet.length] : s._colorSet[C2 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                x2 = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                g2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (t ? "transparent" : null);
                e2 = b2.indexLabelBorderColor || s.indexLabelBorderColor || (t ? "transparent" : null);
                h2 = l(b2.indexLabelBorderThickness) ? s.indexLabelBorderThickness : b2.indexLabelBorderThickness;
                d3 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                k2 = l(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                r = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                m2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                n2 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                p2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                u2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                q3 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                v2 = s.dataPointIds[C2];
                y._eventManager.objectMap[v2] = { id: v2, objectType: "dataPoint", dataPointIndex: C2, dataSeriesIndex: 0, funnelSection: O[s.reversed ? z.length - 1 - C2 : C2] };
                "inside" === s.indexLabelPlacement && (w4[C2] = C2 !== fa3 ? s.reversed ? O[C2].x2 - O[C2].x1 : O[C2].x3 - O[C2].x4 : O[C2].x3 - O[C2].x6, 20 > w4[C2] && (w4[C2] = C2 !== fa3 ? s.reversed ? O[C2].x3 - O[C2].x4 : O[C2].x2 - O[C2].x1 : O[C2].x2 - O[C2].x1, w4[C2] /= 2));
                v2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : w4[C2];
                if (v2 > w4[C2] || 0 > v2)
                  v2 = w4[C2];
                B3[C2] = "inside" === s.indexLabelPlacement ? q3 ? Math.max(O[C2].height, k2) : 1.5 * k2 : false;
                A4 = y.getPercentAndTotal(s, b2);
                if (s.indexLabelFormatter || b2.indexLabelFormatter)
                  E = { chart: y.options, dataSeries: s, dataPoint: b2, total: A4.total, percent: A4.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(E) : b2.indexLabel ? y.replaceKeywordsWithValue(b2.indexLabel, b2, s, C2) : s.indexLabelFormatter ? s.indexLabelFormatter(E) : s.indexLabel ? y.replaceKeywordsWithValue(s.indexLabel, b2, s, C2) : b2.label ? b2.label : "";
                0 >= p2 && (p2 = 0);
                1e3 > v2 && 1e3 - v2 < D && (v2 += 1e3 - v2);
                l(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = l(s.indexLabelMaxWidth) ? v2 : Math.max(v2, s.indexLabelMaxWidth));
                N2.roundRect || za(N2);
                c2 = new ka(N2, { fontSize: k2, fontFamily: m2, fontColor: d3, fontStyle: r, fontWeight: n2, horizontalAlign: c2, textAlign: x2, backgroundColor: g2, borderColor: e2, borderThickness: h2, maxWidth: v2, maxHeight: false === B3[C2] ? q3 ? 4.28571429 * k2 : 1.5 * k2 : B3[C2], text: b2, padding: ga3, textBaseline: "middle" });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                H.push({ textBlock: c2, id: s.reversed ? F2 : C2, isDirty: false, lineColor: a2, lineThickness: p2, lineDashType: u2, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
              }
            }
          }
          function e() {
            var a2, b2, c2, g2, e2, f2 = [];
            e2 = false;
            c2 = 0;
            for (var h2, d3 = Q3 - $3 - U2 / 2, d3 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > d3 ? d3 : s.indexLabelMaxWidth : d3, k2 = H.length - 1; 0 <= k2; k2--) {
              h2 = z[H[k2].id];
              c2 = H[k2];
              g2 = c2.textBlock;
              b2 = (a2 = p(k2) < O.length ? H[p(k2)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && g2.y + c2 + ga3 > b2.y && (e2 = true);
              c2 = h2.indexLabelMaxWidth || d3;
              if (c2 > d3 || 0 > c2)
                c2 = d3;
              f2.push(c2);
            }
            if (e2)
              for (k2 = H.length - 1; 0 <= k2; k2--)
                a2 = O[k2], H[k2].textBlock.maxWidth = f2[f2.length - (k2 + 1)], H[k2].textBlock.measureText(), H[k2].textBlock.height = H[k2].textBlock.height === 2 * H[k2].textBlock.padding ? 0 : H[k2].textBlock.height, H[k2].textBlock.width = H[k2].textBlock.width === 2 * H[k2].textBlock.padding ? 0 : H[k2].textBlock.width, H[k2].textBlock.x = Q3 - d3, c2 = H[k2].textBlock.height < H[k2].textBlock.maxHeight ? H[k2].textBlock.height : H[k2].textBlock.maxHeight, e2 = H[k2].textBlock.width < H[k2].textBlock.maxWidth ? H[k2].textBlock.width : H[k2].textBlock.maxWidth, H[k2].height = c2, H[k2].width = e2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, H[k2].textBlock.y = c2 - H[k2].height / 2, s.reversed ? (H[k2].textBlock.y + H[k2].height > V3 + A3 && (H[k2].textBlock.y = V3 + A3 - H[k2].height), H[k2].textBlock.y < ra - A3 && (H[k2].textBlock.y = ra - A3)) : (H[k2].textBlock.y < V3 - A3 && (H[k2].textBlock.y = V3 - A3), H[k2].textBlock.y + H[k2].height > ra + A3 && (H[k2].textBlock.y = ra + A3 - H[k2].height));
          }
          function h() {
            var a2, b2, c2, g2;
            if ("inside" !== s.indexLabelPlacement)
              for (var e2 = 0; e2 < O.length; e2++)
                0 == H[e2].textBlock.text.length ? H[e2].isDirty = true : (a2 = O[e2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > Da ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Da ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, H[e2].textBlock.x = b2 + U2, H[e2].textBlock.y = c2 - H[e2].height / 2, s.reversed ? (H[e2].textBlock.y + H[e2].height > V3 + A3 && (H[e2].textBlock.y = V3 + A3 - H[e2].height), H[e2].textBlock.y < ra - A3 && (H[e2].textBlock.y = ra - A3)) : (H[e2].textBlock.y < V3 - A3 && (H[e2].textBlock.y = V3 - A3), H[e2].textBlock.y + H[e2].height > ra + A3 && (H[e2].textBlock.y = ra + A3 - H[e2].height)));
            else
              for (e2 = 0; e2 < O.length; e2++)
                0 == H[e2].textBlock.text.length ? H[e2].isDirty = true : (a2 = O[e2], b2 = a2.height, c2 = H[e2].height, g2 = H[e2].width, b2 >= c2 ? (b2 = e2 != fa3 ? (a2.x4 + a2.x3) / 2 - g2 / 2 : (a2.x5 + a2.x4) / 2 - g2 / 2, c2 = e2 != fa3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, H[e2].textBlock.x = b2, H[e2].textBlock.y = c2) : H[e2].isDirty = true);
          }
          function d2() {
            function a2(b3, c3) {
              var e3;
              if (0 > b3 || b3 >= H.length)
                return 0;
              var g3, f3 = H[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                g3 = n(b3);
                e3 = u(g3, b3);
                if (e3 >= c3)
                  return f3.y -= c3, c3;
                if (0 == b3)
                  return 0 < e3 && (f3.y -= e3), e3;
                e3 += a2(g3, -(c3 - e3));
                0 < e3 && (f3.y -= e3);
                return e3;
              }
              g3 = p(b3);
              e3 = u(b3, g3);
              if (e3 >= c3)
                return f3.y += c3, c3;
              if (b3 == O.length - 1)
                return 0 < e3 && (f3.y += e3), e3;
              e3 += a2(g3, c3 - e3);
              0 < e3 && (f3.y += e3);
              return e3;
            }
            function b2() {
              var a3, e3, g3, f3, h3 = 0, k3;
              f3 = (T2 - S2 + 2 * A3) / l2;
              k3 = l2;
              for (var d3, r2 = 1; r2 < k3; r2++) {
                g3 = r2 * f3;
                for (var m3 = H.length - 1; 0 <= m3; m3--)
                  !H[m3].isDirty && (H[m3].textBlock.y < g3 && H[m3].textBlock.y + H[m3].height > g3) && (d3 = p(m3), !(d3 >= H.length - 1) && H[m3].textBlock.y + H[m3].height + ga3 > H[d3].textBlock.y && (H[m3].textBlock.y = H[m3].textBlock.y + H[m3].height - g3 > g3 - H[m3].textBlock.y ? g3 + 1 : g3 - H[m3].height - 1));
              }
              for (d3 = O.length - 1; 0 < d3; d3--)
                if (!H[d3].isDirty) {
                  g3 = n(d3);
                  if (0 > g3 && (g3 = 0, H[g3].isDirty))
                    break;
                  if (H[d3].textBlock.y < H[g3].textBlock.y + H[g3].height) {
                    e3 = e3 || d3;
                    f3 = d3;
                    for (k3 = 0; H[f3].textBlock.y < H[g3].textBlock.y + H[g3].height + ga3; ) {
                      a3 = a3 || H[f3].textBlock.y + H[f3].height;
                      k3 += H[f3].height;
                      k3 += ga3;
                      f3 = g3;
                      if (0 >= f3) {
                        f3 = 0;
                        k3 += H[f3].height;
                        break;
                      }
                      g3 = n(f3);
                      if (0 > g3) {
                        f3 = 0;
                        k3 += H[f3].height;
                        break;
                      }
                    }
                    if (f3 != d3) {
                      h3 = H[f3].textBlock.y;
                      a3 -= h3;
                      a3 = k3 - a3;
                      h3 = c2(a3, e3, f3);
                      break;
                    }
                  }
                }
              return h3;
            }
            function c2(a3, b3, e3) {
              var g3 = [], f3 = 0, h3 = 0;
              for (a3 = Math.abs(a3); e3 <= b3; e3++)
                g3.push(O[e3]);
              g3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (e3 = 0; e3 < g3.length; e3++)
                if (b3 = g3[e3], f3 < a3)
                  h3++, f3 += H[b3.id].height + ga3, H[b3.id].textBlock.text = "", H[b3.id].indexLabelText = "", H[b3.id].isDirty = true, H[b3.id].textBlock.measureText();
                else
                  break;
              return h3;
            }
            for (var e2, g2, f2, h2, k2, r, l2 = 1, m2 = 0; m2 < 2 * l2; m2++) {
              for (var s2 = H.length - 1; 0 <= s2 && !(0 <= n(s2) && n(s2), f2 = H[s2], h2 = f2.textBlock, r = (k2 = p(s2) < O.length ? H[p(s2)] : null) ? k2.textBlock : null, e2 = +f2.height.toFixed(6), g2 = +h2.y.toFixed(6), !f2.isDirty && (k2 && g2 + e2 + ga3 > +r.y.toFixed(6)) && (e2 = h2.y + e2 + ga3 - r.y, g2 = a2(s2, -e2), g2 < e2 && (0 < g2 && (e2 -= g2), g2 = a2(p(s2), e2), g2 != e2))); s2--)
                ;
              b2();
            }
          }
          function u(a2, b2) {
            return (b2 < O.length ? H[b2].textBlock.y : s.reversed ? V3 + A3 : ra + A3) - (0 > a2 ? s.reversed ? ra - A3 : V3 - A3 : H[a2].textBlock.y + H[a2].height + ga3);
          }
          function q2(a2, b2, c2) {
            var e2, g2, f2, d3 = [], r = A3, l2 = [];
            -1 !== b2 && (0 <= X3.indexOf(b2) ? (g2 = X3.indexOf(b2), X3.splice(g2, 1)) : (X3.push(b2), X3 = X3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === X3.length)
              d3 = ia2;
            else {
              g2 = A3 * (1 != X3.length || 0 != X3[0] && X3[0] != O.length - 1 ? 2 : 1) / k();
              for (var n2 = 0; n2 < O.length; n2++) {
                if (1 == X3.length && 0 == X3[0]) {
                  if (0 === n2) {
                    d3.push(ia2[n2]);
                    e2 = r;
                    continue;
                  }
                } else
                  0 === n2 && (e2 = -1 * r);
                d3.push(ia2[n2] + e2);
                if (0 <= X3.indexOf(n2) || n2 < O.length && 0 <= X3.indexOf(n2 + 1))
                  e2 += g2;
              }
            }
            f2 = function() {
              for (var a3 = [], b3 = 0; b3 < O.length; b3++)
                a3.push(d3[b3] - O[b3].y1);
              return a3;
            }();
            var p2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, e3) {
              return R.easing.easeOutQuart(a3, b3, c3, e3);
            }, changeSection: function(a3) {
              for (var b3, c3, e3 = 0; e3 < O.length; e3++)
                b3 = f2[e3], c3 = O[e3], b3 *= a3, "undefined" === typeof l2[e3] && (l2[e3] = 0), 0 > l2 && (l2 *= -1), c3.y1 += b3 - l2[e3], c3.y2 += b3 - l2[e3], c3.y3 += b3 - l2[e3], c3.y4 += b3 - l2[e3], c3.y5 && (c3.y5 += b3 - l2[e3], c3.y6 += b3 - l2[e3]), l2[e3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var e3 = a2.plotArea.ctx || a2.ctx;
              ja3 = true;
              e3.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
              e3.fillStyle = a2.backgroundColor;
              e3.fillRect(v.x1, v.y1, v.width, v.height);
              p2.changeSection(c3, b2);
              var g3 = {};
              g3.dataSeries = s;
              g3.dataPoint = s.reversed ? s.dataPoints[z.length - 1 - b2] : s.dataPoints[b2];
              g3.index = s.reversed ? z.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([g3]);
              for (g3 = 0; g3 < O.length; g3++)
                qa2(e3, O[g3], s.fillOpacity);
              x(e3);
              K && ("inside" !== s.indexLabelPlacement ? m(e3) : h(), w3(e3));
              1 <= c3 && (ja3 = false);
            }, null, R.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < O.length - 1; b2++)
              (0 <= X3.indexOf(b2) || 0 <= X3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function m(a2) {
            for (var b2, c2, e2, g2, h2 = 0; h2 < O.length; h2++)
              g2 = 1 === H[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((O[h2].y2 + O[h2].y4) / 2 << 0) + g2, b2 = f(c2).x2 - 1, isNaN(b2) && (Math.round(O[h2].x1) === Math.round(O[h2].x4) && Math.round(O[h2].x2) === Math.round(O[h2].x3)) && (b2 = O[h2].x2), e2 = H[h2].textBlock.x, g2 = (H[h2].textBlock.y + H[h2].height / 2 << 0) + g2, H[h2].isDirty || 0 == H[h2].lineThickness || (a2.strokeStyle = H[h2].lineColor, a2.lineWidth = H[h2].lineThickness, a2.setLineDash && a2.setLineDash(I(H[h2].lineDashType, H[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(e2, g2), a2.stroke());
          }
          function n(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && H[a2].isDirty; a2--)
              ;
            return a2;
          }
          function p(a2) {
            for (a2 += 1; a2 <= O.length && a2 != O.length && H[a2].isDirty; a2++)
              ;
            return a2;
          }
          function f(a2) {
            for (var b2, c2 = 0; c2 < z.length; c2++)
              if (O[c2].y1 < a2 && O[c2].y4 > a2) {
                b2 = O[c2];
                break;
              }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function w3(a2) {
            for (var b2 = 0; b2 < O.length; b2++)
              H[b2].isDirty || (a2 && (H[b2].textBlock.ctx = a2), H[b2].textBlock.y += H[b2].textBlock._lineHeight / 2, H[b2].textBlock.render(true), H[b2].textBlock.y -= H[b2].textBlock._lineHeight / 2);
          }
          function x(a2) {
            y.plotArea.layoutManager.reset();
            a2.roundRect || za(a2);
            y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a2, y.title.render());
            if (y.subtitles)
              for (var b2 = 0; b2 < y.subtitles.length; b2++) {
                var c2 = y.subtitles[b2];
                if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                  y.subtitles.ctx = a2, c2.render();
              }
            y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a2, y.legend.setLayout(), y.legend.render());
            ua.fNg && ua.fNg(y);
          }
          var y = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], z = s.dataPoints, v = this.plotArea, A3 = 0.025 * v.width, B2 = 0.01 * v.width, C = 0, G2 = v.height - 2 * A3 - 4, J2 = Math.min(v.width - 2 * B2, 2.8 * v.height), K = false, L = 0; L < z.length; L++)
              if (!K && ("undefined" !== typeof z[L].indexLabel && null !== z[L].indexLabel && 0 < z[L].indexLabel.toString().length) && (K = true), !K && ("undefined" !== typeof z[L].label && null !== z[L].label && 0 < z[L].label.toString().length) && (K = true), !K && "function" === typeof s.indexLabelFormatter || "function" === typeof z[L].indexLabelFormatter)
                K = true;
            K = K || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && K || (B2 = (v.width - 0.75 * J2) / 2);
            var L = v.x1 + B2, Q3 = v.x2 - B2, S2 = v.y1 + A3 + 2, T2 = v.y2 - A3 - 2, N2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && (s.dataPoints && s.visible) && 0 !== z.length) {
              var M, F;
              a = 75 * J2 / 100;
              var U2 = 30 * (Q3 - a) / 100;
              "funnel" === s.type ? (M = l(s.options.neckHeight) ? 0.35 * G2 : s.neckHeight, F = l(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof M && M.match(/%$/) ? (M = parseInt(M), M = M * G2 / 100) : M = parseInt(M), "string" === typeof F && F.match(/%$/) ? (F = parseInt(F), F = F * a / 100) : F = parseInt(F), M > G2 ? M = G2 : 0 >= M && (M = 0), F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === s.type && (F = M = 0, s.reversed = s.reversed ? false : true);
              var B2 = L + a / 2, Y2 = L, $3 = L + a, V3 = s.reversed ? T2 : S2, P = B2 - F / 2, aa2 = B2 + F / 2, Da = s.reversed ? S2 + M : T2 - M, ra = s.reversed ? S2 : T2;
              F = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
              L = [];
              a = [];
              var O = [], B2 = [], Z3 = S2, fa3, da2 = (Da - V3) / (P - Y2), ha2 = -da2, J2 = "area" === F ? c() : g();
              if (-1 !== J2) {
                if (s.reversed)
                  for (B2.push(Z3), F = J2.length - 1; 0 < F; F--)
                    Z3 += J2[F], B2.push(Math.round(Z3));
                else
                  for (F = 0; F < J2.length; F++)
                    Z3 += J2[F], B2.push(Math.round(Z3));
                if (s.reversed)
                  for (F = 0; F < J2.length; F++)
                    B2[F] < Da ? (L.push(P), a.push(aa2), fa3 = F) : (L.push((B2[F] - V3 + da2 * Y2) / da2), a.push((B2[F] - V3 + ha2 * $3) / ha2));
                else
                  for (F = 0; F < J2.length; F++)
                    B2[F] < Da ? (L.push((B2[F] - V3 + da2 * Y2) / da2), a.push((B2[F] - V3 + ha2 * $3) / ha2), fa3 = F) : (L.push(P), a.push(aa2));
                for (F = 0; F < J2.length - 1; F++)
                  Z3 = s.reversed ? z[z.length - 1 - F].color ? z[z.length - 1 - F].color : s._colorSet[(z.length - 1 - F) % s._colorSet.length] : z[F].color ? z[F].color : s._colorSet[F % s._colorSet.length], F === fa3 ? O.push({
                    x1: L[F],
                    y1: B2[F],
                    x2: a[F],
                    y2: B2[F],
                    x3: aa2,
                    y3: Da,
                    x4: a[F + 1],
                    y4: B2[F + 1],
                    x5: L[F + 1],
                    y5: B2[F + 1],
                    x6: P,
                    y6: Da,
                    id: F,
                    height: B2[F + 1] - B2[F],
                    color: Z3
                  }) : O.push({ x1: L[F], y1: B2[F], x2: a[F], y2: B2[F], x3: a[F + 1], y3: B2[F + 1], x4: L[F + 1], y4: B2[F + 1], id: F, height: B2[F + 1] - B2[F], color: Z3 }), s.dataPointEOs[F] && O[F] && (s.dataPointEOs[F].sectionsofFunnel = O[F]);
                var ga3 = 2, H = [], ja3 = false, X3 = [], ia2 = [], L = false;
                a = a = 0;
                Ea(X3);
                for (F = 0; F < z.length; F++)
                  z[F].exploded && (L = true, s.reversed ? X3.push(z.length - 1 - F) : X3.push(F));
                N2.clearRect(v.x1, v.y1, v.width, v.height);
                N2.fillStyle = y.backgroundColor;
                N2.fillRect(v.x1, v.y1, v.width, v.height);
                if (K && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                  e();
                  d2();
                  for (F = 0; F < z.length; F++)
                    H[F].isDirty || (a = H[F].textBlock.x + H[F].width, a = (Q3 - a) / 2, 0 == F && (C = a), C > a && (C = a));
                  for (F = 0; F < O.length; F++)
                    O[F].x1 += C, O[F].x2 += C, O[F].x3 += C, O[F].x4 += C, O[F].x5 && (O[F].x5 += C, O[F].x6 += C), H[F].textBlock.x += C;
                }
                for (F = 0; F < O.length; F++)
                  C = O[F], qa2(N2, C, s.fillOpacity), ia2.push(C.y1);
                x(N2);
                K && s.visible && ("inside" === s.indexLabelPlacement || y.animationEnabled || m(N2), y.animationEnabled || w3());
                if (!K)
                  for (F = 0; F < z.length; F++)
                    C = s.dataPointIds[F], a = { id: C, objectType: "dataPoint", dataPointIndex: F, dataSeriesIndex: 0, funnelSection: O[s.reversed ? z.length - 1 - F : F] }, y._eventManager.objectMap[C] = a;
                !y.animationEnabled && L ? q2(y, -1, 0) : y.animationEnabled && !y.animatedRender && q2(y, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ja3 && !y.isAnimating && (l(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? z.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type)
                      s.reversed ? z[z.length - 1 - a2].exploded = z[z.length - 1 - a2].exploded ? false : true : z[a2].exploded = z[a2].exploded ? false : true;
                    q2(y, b2, 500);
                  }
                };
                return { source: N2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  R.fadeInAnimation(a2, b2);
                  1 <= a2 && (q2(y, -1, 500), x(y.plotArea.ctx || y.ctx));
                }, easingFunction: R.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        q.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        q.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        q.prototype.set = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = g, c && this.render()) : q.base.set.call(this, a, g, c);
        };
        q.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var g = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL)
            return this.canvas.toDataURL("image/" + g);
          var b = this.canvas;
          if (b && g && c) {
            c = c + "." + g;
            a = "image/" + g;
            var b = b.toDataURL(a), e = false, h = document.createElement("a");
            h.download = c;
            h.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var d2 = b.replace(/^data:[a-z\/]*;base64,/, ""), d2 = atob(d2), l2 = new ArrayBuffer(d2.length), l2 = new Uint8Array(l2), t2 = 0; t2 < d2.length; t2++)
                l2[t2] = d2.charCodeAt(t2);
              g = new Blob([l2.buffer], { type: "image/" + g });
              try {
                window.navigator.msSaveBlob(g, c), e = true;
              } catch (k) {
                h.dataset.downloadurl = [a, h.download, h.href].join(":"), h.href = window.URL.createObjectURL(g);
              }
            }
            if (!e)
              try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
              } catch (m) {
                g = window.open(), g.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), g.document.close();
              }
          }
        };
        q.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), g = document.createElement("iframe");
          g.setAttribute("class", "canvasjs-chart-print-frame");
          J(g, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
          g.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(g);
          var c = this, b = g.contentWindow || g.contentDocument.document || g.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(g);
            }, 1e3);
          }, 500);
        };
        q.prototype.getPercentAndTotal = function(a, g) {
          var c = null, b = null, e = c = null;
          if (0 <= a.type.indexOf("stacked"))
            b = 0, c = g.x.getTime ? g.x.getTime() : g.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(g.y) ? 0 : 0 === c ? 0 : 100 * (g.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++)
              isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            e = isNaN(g.y) ? 0 : 100 * (g.y / b);
          }
          return { percent: e, total: b };
        };
        q.prototype.replaceKeywordsWithValue = function(a, g, c, b, e) {
          var h = this;
          e = "undefined" === typeof e ? 0 : e;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var d2 = "#percent", l2 = "#total", t2 = this.getPercentAndTotal(c, g), l2 = isNaN(t2.total) ? l2 : t2.total, d2 = isNaN(t2.percent) ? d2 : t2.percent;
            do {
              t2 = "";
              if (c.percentFormatString)
                t2 = c.percentFormatString;
              else {
                var t2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(d2)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k))
                  k = 2;
                for (var m = 0; m < k; m++)
                  t2 += "#";
                c.percentFormatString = t2;
              }
              a = a.replace("#percent", ha(d2, t2, h._cultureInfo));
              a = a.replace("#total", ha(l2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo));
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(
            /\{.*?\}|"[^"]*"|'[^']*'/g,
            function(a2) {
              if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
                return a2.slice(1, a2.length - 1);
              a2 = Ha(a2.slice(1, a2.length - 1));
              a2 = a2.replace("#index", e);
              var k2 = null;
              try {
                var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                f && 0 < f.length && (k2 = Ha(f[2]), a2 = Ha(f[1]));
              } catch (d3) {
              }
              f = null;
              if ("color" === a2)
                return "waterfall" === c.type ? g.color ? g.color : 0 < g.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[k2 % c._colorSet.length] : g.color ? g.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
              if (g.hasOwnProperty(a2))
                f = g;
              else if (c.hasOwnProperty(a2))
                f = c;
              else
                return "";
              f = f[a2];
              null !== k2 && (f = f[k2]);
              return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || g.x && g.x.getTime) && !c.axisX.logarithmic ? Ca(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo) : ha(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo) : "y" === a2 ? ha(f, g.yValueFormatString ? g.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", h._cultureInfo) : "z" === a2 ? ha(f, g.zValueFormatString ? g.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : f;
            }
          );
        };
        pa(T, Y);
        T.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, g = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, h = 0, d2 = 0, u = this.markerMargin = this.chart.options.legend && !l(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var t2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
            this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : g.width, d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * g.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
              c = this.horizontalAlign;
            h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * g.width;
            d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : g.height;
          }
          this.errorMarkerColor = [];
          for (var m = 0; m < this.dataSeries.length; m++) {
            var n = this.dataSeries[m];
            if (n.dataPoints && n.dataPoints.length) {
              if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                var p = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ? n._linkedSeries.legendMarkerType : Q2.getDefaultLegendMarker(n._linkedSeries.type) : Q2.getDefaultLegendMarker(n.type) : n.markerType, f = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: null }) : n.name, q2 = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? l(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0], x = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0, y = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor, s = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * x)) : 0;
                "error" === n.type && this.errorMarkerColor.push(q2);
                f = n.legendText = this.chart.replaceKeywordsWithValue(f, n.dataPoints[0], n, m);
                p = {
                  markerType: p,
                  markerColor: q2,
                  text: f,
                  textBlock: null,
                  chartType: n.type,
                  markerSize: x,
                  lineColor: n._colorSet[0],
                  dataSeriesIndex: n.index,
                  dataPointIndex: null,
                  markerBorderColor: y,
                  markerBorderThickness: s
                };
                t2.push(p);
              } else
                for (var w3 = 0; w3 < n.dataPoints.length; w3++) {
                  var v = n.dataPoints[w3], p = v.legendMarkerType ? v.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : Q2.getDefaultLegendMarker(n.type), f = v.legendText ? v.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                    chart: this.chart,
                    legend: this.options,
                    dataSeries: n,
                    dataPoint: v
                  }) : v.name ? v.name : "DataPoint: " + (w3 + 1), q2 = v.legendMarkerColor ? v.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : v.color ? v.color : n.color ? n.color : n._colorSet[w3 % n._colorSet.length], x = 0.75 * this.lineHeight, y = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : n.markerBorderColor, s = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : v.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * x)) : 0, f = this.chart.replaceKeywordsWithValue(f, v, n, w3), p = { markerType: p, markerColor: q2, text: f, textBlock: null, chartType: n.type, markerSize: x, dataSeriesIndex: m, dataPointIndex: w3, markerBorderColor: y, markerBorderThickness: s };
                  (v.showInLegend || n.showInLegend && false !== v.showInLegend) && t2.push(p);
                }
              l(n.legendText) && (n.legendText = n.name);
            }
          }
          true === this.reversed && t2.reverse();
          if (0 < t2.length) {
            n = null;
            f = v = w3 = 0;
            v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
            x = 0 === x ? 0.75 * this.lineHeight : x;
            v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (x + u);
            for (m = 0; m < t2.length; m++) {
              p = t2[m];
              q2 = v;
              if ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType)
                q2 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= d2 || "undefined" === typeof d2 || 0 >= q2 || "undefined" === typeof q2))
                if ("horizontal" === this.orientation) {
                  p.textBlock = new ka(
                    this.ctx,
                    { x: 0, y: 0, maxWidth: q2, maxHeight: this.itemWrap ? d2 : this.lineHeight, angle: 0, text: p.text, textAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }
                  );
                  p.textBlock.measureText();
                  null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (x + u + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                  if (!n || n.width + Math.round(p.textBlock.width + x + u + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h)
                    n = { items: [], width: 0 }, k.push(n), this.height += f, f = 0;
                  f = Math.max(f, p.textBlock.height ? p.textBlock.height : this.lineHeight);
                  p.textBlock.x = n.width;
                  p.textBlock.y = 0;
                  n.width += Math.round(p.textBlock.width + x + u + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0));
                  n.items.push(p);
                  this.width = Math.max(n.width, this.width);
                } else
                  p.textBlock = new ka(this.ctx, { x: 0, y: 0, maxWidth: v, maxHeight: true === this.itemWrap ? d2 : 1.5 * this.fontSize, angle: 0, text: p.text, textAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), p.textBlock.measureText(), null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (x + u + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d2 - this.lineHeight ? (n = {
                    items: [],
                    width: 0
                  }, k.push(n)) : (n = k[w3], w3 = (w3 + 1) % k.length), n && (this.height += p.textBlock.height ? p.textBlock.height : this.lineHeight, p.textBlock.x = n.width, p.textBlock.y = 0, n.width += Math.round(p.textBlock.width + x + u + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)), n.items.push(p), this.width = Math.max(n.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
            this.height = Math.min(d2, this.height);
            this.width = Math.min(h, this.width);
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1 + g.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y2 - this.height);
          this.items = t2;
          for (m = 0; m < this.items.length; m++)
            p = t2[m], p.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[p.id] = { id: p.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: p.dataSeriesIndex, dataPointIndex: p.dataPointIndex };
          this.markerSize = x;
          this.rows = k;
          0 < t2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        T.prototype.render = function() {
          var a = this.bounds.x1, g = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, h = this.markerSize, d2 = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, g, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var l2 = 0, t2 = 0; t2 < d2.length; t2++) {
            for (var k = d2[t2], m = 0, n = 0; n < k.items.length; n++) {
              var p = k.items[n], f = p.textBlock.x + a + (0 === n ? 0.2 * h : this.horizontalSpacing), q2 = g + l2, x = f;
              this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, g, b, Math.max(e - e % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType)
                this.ctx.strokeStyle = p.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, q2 + this.lineHeight / 2), this.ctx.lineTo(f + 0.85 * this.lineHeight, q2 + this.lineHeight / 2), this.ctx.stroke(), x -= 0.1 * this.lineHeight;
              if ("error" === p.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var y = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = q2 + 0.15 * this.lineHeight, w3 = 0.7 * this.lineHeight, v = w3 + 0.02 * this.lineHeight;
                this.ctx.moveTo(y, s);
                this.ctx.lineTo(y + w3, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y + w3 / 2, s);
                this.ctx.lineTo(y + w3 / 2, s + v);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y, s + v);
                this.ctx.lineTo(y + w3, s + v);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              aa.drawMarker(f + h / 2, q2 + this.lineHeight / 2, this.ctx, p.markerType, "error" === p.chartType || "line" === p.chartType || "spline" === p.chartType ? p.markerSize / 2 : p.markerSize, p.markerColor, p.markerBorderColor, p.markerBorderThickness);
              p.textBlock.x = f + c + h;
              if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType)
                p.textBlock.x += 0.1 * this.lineHeight;
              p.textBlock.y = Math.round(q2 + this.lineHeight / 2);
              p.textBlock.render(true);
              this.ctx.restore();
              m = 0 < n ? Math.max(m, p.textBlock.height ? p.textBlock.height : this.lineHeight) : p.textBlock.height ? p.textBlock.height : this.lineHeight;
              this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              f = U(p.id);
              this.ghostCtx.fillStyle = f;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(x, p.textBlock.y - this.lineHeight / 2, p.textBlock.x + p.textBlock.width - x, p.textBlock.height ? p.textBlock.height : this.lineHeight);
              p.x1 = this.chart._eventManager.objectMap[p.id].x1 = x;
              p.y1 = this.chart._eventManager.objectMap[p.id].y1 = p.textBlock.y - this.lineHeight / 2;
              p.x2 = this.chart._eventManager.objectMap[p.id].x2 = p.textBlock.x + p.textBlock.width;
              p.y2 = this.chart._eventManager.objectMap[p.id].y2 = p.textBlock.y + (p.textBlock.height ? p.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            l2 += m;
          }
        };
        pa(Q2, Y);
        Q2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
            return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        Q2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
            return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
            return "triangle";
          if ("error" === a)
            return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        Q2.prototype.getDataPointAtX = function(a, g, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
          var b = { dataPoint: null, distance: Infinity, index: NaN }, e = null, h = 0, d2 = 0, u = 1, t2 = Infinity, k = 0, m = 0, n = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            d2 = 0 < u ? n + h : n - h;
            if (0 <= d2 && d2 < this.dataPoints.length) {
              var e = this.dataPoints[d2], p = this.axisX && this.axisX.logarithmic ? e.x > a ? e.x / a : a / e.x : Math.abs(e.x - a);
              p < b.distance && (l(c) || c && !l(e.y)) && (b.dataPoint = e, b.distance = p, b.index = d2);
              e = p;
              e <= t2 ? t2 = e : 0 < u ? k++ : m++;
              if (1e3 < k && 1e3 < m)
                break;
            } else if (0 > n - h && n + h >= this.dataPoints.length)
              break;
            -1 === u ? (h++, u = 1) : u = -1;
          }
          return g || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? g && null !== b.dataPoint ? b : null : b;
        };
        Q2.prototype.getDataPointAtXY = function(a, g, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || g < this.chart.plotArea.y1 || g > this.chart.plotArea.y2)
            return null;
          c = c || false;
          var b = [], e = 0, h = 0, d2 = 1, u = false, t2 = Infinity, k = 0, m = 0, n = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
            if (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: g }), this.axisX.logarithmic)
              var p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(n / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            else
              p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            h = 0 < d2 ? n + e : n - e;
            if (0 <= h && h < this.dataPoints.length) {
              var p = this.chart._eventManager.objectMap[this.dataPointIds[h]], f = this.dataPoints[h], q2 = null;
              if (p) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= p.x1 && (a <= p.x2 && g >= p.y1 && g <= p.y2) && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y1 - g), Math.abs(p.y2 - g)) }), u = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var x = ma("markerSize", f, this) || 4, y = c ? 20 : x, q2 = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - g, 2));
                    q2 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: q2 });
                    p = Math.abs(p.x1 - a);
                    p <= t2 ? t2 = p : 0 < d2 ? k++ : m++;
                    q2 <= x / 2 && (u = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    x = ma("markerSize", f, this) || 4;
                    y = c ? 20 : x;
                    q2 = Math.min(Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - g, 2)), Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y2 - g, 2)));
                    q2 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: q2 });
                    p = Math.abs(p.x1 - a);
                    p <= t2 ? t2 = p : 0 < d2 ? k++ : m++;
                    q2 <= x / 2 && (u = true);
                    break;
                  case "bubble":
                    x = p.size;
                    q2 = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - g, 2));
                    q2 <= x / 2 && (b.push({
                      dataPoint: f,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: q2
                    }), u = true);
                    break;
                  case "pie":
                  case "doughnut":
                    x = p.center;
                    y = "doughnut" === this.type ? p.percentInnerRadius * p.radius : 0;
                    q2 = Math.sqrt(Math.pow(x.x - a, 2) + Math.pow(x.y - g, 2));
                    q2 < p.radius && q2 > y && (q2 = Math.atan2(g - x.y, a - x.x), 0 > q2 && (q2 += 2 * Math.PI), q2 = Number(((180 * (q2 / Math.PI) % 360 + 360) % 360).toFixed(12)), x = Number(((180 * (p.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (p.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < p.endAngle && (y = 360), x >= y && (0 !== f.y && !l(f.y)) && (y += 360, q2 < x && (q2 += 360)), q2 > x && q2 < y && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: 0 }), u = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    q2 = p.funnelSection;
                    g > q2.y1 && g < q2.y4 && (q2.y6 ? g > q2.y6 ? (h = q2.x6 + (q2.x5 - q2.x6) / (q2.y5 - q2.y6) * (g - q2.y6), q2 = q2.x3 + (q2.x4 - q2.x3) / (q2.y4 - q2.y3) * (g - q2.y3)) : (h = q2.x1 + (q2.x6 - q2.x1) / (q2.y6 - q2.y1) * (g - q2.y1), q2 = q2.x2 + (q2.x3 - q2.x2) / (q2.y3 - q2.y2) * (g - q2.y2)) : (h = q2.x1 + (q2.x4 - q2.x1) / (q2.y4 - q2.y1) * (g - q2.y1), q2 = q2.x2 + (q2.x3 - q2.x2) / (q2.y3 - q2.y2) * (g - q2.y2)), a > h && a < q2 && (b.push({ dataPoint: f, dataPointIndex: p.dataPointIndex, dataSeries: this, distance: 0 }), u = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && g >= p.y4 - p.borderThickness / 2 && g <= p.y1 + p.borderThickness / 2 || Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && g >= p.y1 && g <= p.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - g), Math.abs(p.y3 - g)) }), u = true;
                    break;
                  case "candlestick":
                    if (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && g >= p.y2 - p.borderThickness / 2 && g <= p.y3 + p.borderThickness / 2 || Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && g >= p.y1 && g <= p.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - g), Math.abs(p.y3 - g)) }), u = true;
                    break;
                  case "ohlc":
                    if (Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && g >= p.y2 && g <= p.y3 || a >= p.x1 && a <= (p.x2 + p.x1) / 2 && g >= p.y1 - p.borderThickness / 2 && g <= p.y1 + p.borderThickness / 2 || a >= (p.x1 + p.x2) / 2 && a <= p.x2 && g >= p.y4 - p.borderThickness / 2 && g <= p.y4 + p.borderThickness / 2)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - g), Math.abs(p.y3 - g)) }), u = true;
                }
                if (u || 1e3 < k && 1e3 < m)
                  break;
              }
            } else if (0 > n - e && n + e >= this.dataPoints.length)
              break;
            -1 === d2 ? (e++, d2 = 1) : d2 = -1;
          }
          a = null;
          for (g = 0; g < b.length; g++)
            a ? b[g].distance <= a.distance && (a = b[g]) : a = b[g];
          return a;
        };
        Q2.prototype.getMarkerProperties = function(a, g, c, b) {
          var e = this.dataPoints, h = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], d2 = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, u = l(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, q2 = e[a].markerType ? e[a].markerType : this.markerType;
          a = l(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return { x: g, y: c, ctx: b, type: q2, size: a, color: h, borderColor: d2, borderThickness: u };
        };
        pa(B, Y);
        B.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var g = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(g / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = B.getNiceNumber((g - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < g; b += c)
                b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Sa);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        B.prototype.createLabels = function() {
          var a, g, c = 0, b = 0, e, h = 0, d2 = 0, b = 0, b = this.interval, u = 0, q2, k = 0.6 * this.chart.height, m;
          a = false;
          var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], p = n.length ? l(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            e = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
                if (this.labels[c])
                  f = true;
                else {
                  f = false;
                  break;
                }
              f && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval)
              for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = p; b < this.logLabelValues.length; b++)
                if (c = this.logLabelValues[b], c < this.viewportMinimum)
                  b++;
                else {
                  for (; f < n.length && c > n[f].endValue; f++)
                    ;
                  a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
                  m = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ha(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: h,
                    maxHeight: d2,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    cornerRadius: this.labelCornerRadius,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: this.labelBorderThickness
                  }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                }
            f = p;
            for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; f < n.length && c > n[f].endValue; f++)
                ;
              a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
              m = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ha(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                maxHeight: d2,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
            }
          } else
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Za(new Date(this.viewportMaximum), this.interval, this.intervalType), f = p, c = this.intervalStartPosition; c < e; Za(c, b, this.intervalType)) {
              for (a = c.getTime(); f < n.length && a > n[f].endValue; f++)
                ;
              m = a;
              a = f < n.length && a >= n[f].startValue && a <= n[f].endValue;
              a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: new Date(m),
                label: this.labels[m] ? this.labels[m] : null
              }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Ca(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: d2,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
            }
          if ("bottom" === this._position || "top" === this._position)
            u = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position)
            u = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * S[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = h;
            a.maxHeight = d2;
            var w3 = a.measureText();
            q2 = w3.height;
          }
          e = [];
          p = n = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (l(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
              if (h = Math.floor(0.9 * u), p = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    for (var x, f = a.text.split(" "), b = 0; b < f.length; b++)
                      m = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > p && (x = c, p = m.width);
                  }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    w3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    if (l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                      if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = (k - (q2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !l(this.options.labelWrap))
                        this.labelWrap ? l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), this.sessionVariables.labelWrap = this.labelWrap, g && w3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, g && w3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = this.labelWrap);
                      else {
                        if (l(this.options.labelWrap)) {
                          if (!l(this.options.labelMaxWidth))
                            this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2);
                          else if (!l(g)) {
                            if (b = w3.width + g.width >> 0, f = this.labelFontSize, p < h)
                              b - 2 * h > n && (n = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = f) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, p), this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : b > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = this.labelAngle));
                            else if (x === c && (0 === x && p + this._labels[x + 1].textBlock.measureText().width - 2 * h > n || x === this._labels.length - 1 && p + this._labels[x - 1].textBlock.measureText().width - 2 * h > n || 0 < x && x < this._labels.length - 1 && p + this._labels[x + 1].textBlock.measureText().width - 2 * h > n && p + this._labels[x - 1].textBlock.measureText().width - 2 * h > n))
                              n = 0 === x ? p + this._labels[x + 1].textBlock.measureText().width - 2 * h : p + this._labels[x - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                            else if (0 === n)
                              for (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                                a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), w3 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, g = this._labels[f].textBlock, g.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m), g = g.measureText(), w3.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                          }
                        }
                      }
                    else
                      (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = 0 != this.labelAngle ? (k - (q2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = b < 0.9 * u ? 0.9 * u : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d2);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
              if (h = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    w3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? l(this.options.labelWrap) ? l(this.options.labelWrap) && (l(this.options.labelMaxWidth) ? l(g) || (u = w3.height + g.height >> 0, u - 2 * d2 > p && (p = u - 2 * d2, u >= 2 * d2 && u < 2.4 * d2 ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : u >= 2.4 * d2 && u < 2.8 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : u >= 2.8 * d2 && u < 3.2 * d2 ? (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : u >= 3.2 * d2 && u < 3.6 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : u > 3.6 * d2 && u < 10 * d2 ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : u > 10 * d2 && u < 50 * d2 && (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min(
                      (b - d2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)),
                      d2
                    ), l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, l(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = d2, l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (l(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = d2), c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var h = this.stripLines[c], y;
            if ("outside" === h.labelPlacement) {
              d2 = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position)
                l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position)
                l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              l(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
            } else
              d2 = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = l(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, l(h.labelBackgroundColor) && (l(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = t ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
            h.labelFontSize = "outside" === h.labelPlacement && l(h.options.labelFontSize) ? this.labelFontSize : h.labelFontSize;
            h.labelFontFamily = "outside" === h.labelPlacement && l(h.options.labelFontFamily) ? this.labelFontFamily : h.labelFontFamily;
            h.labelFontWeight = "outside" === h.labelPlacement && l(h.options.labelFontWeight) ? this.labelFontWeight : h.labelFontWeight;
            h.labelFontStyle = "outside" === h.labelPlacement && l(h.options.labelFontStyle) ? this.labelFontStyle : h.labelFontStyle;
            a = new ka(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: h.labelBackgroundColor,
              borderColor: h.labelBorderColor,
              borderThickness: h.labelBorderThickness,
              cornerRadius: h.labelCornerRadius,
              maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d2,
              maxHeight: y,
              angle: this.labelAngle,
              text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label,
              textAlign: h.labelTextAlign,
              fontSize: h.labelFontSize,
              fontFamily: h.labelFontFamily,
              fontWeight: h.labelFontWeight,
              fontColor: h.labelFontColor || h.color,
              fontStyle: h.labelFontStyle,
              textBaseline: "middle"
            });
            this._stripLineLabels.push({
              position: h.value,
              textBlock: a,
              effectiveHeight: null,
              stripLine: h
            });
          }
        };
        B.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, g = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (g = 0; g < this._labels.length; g++) {
                var b = this._labels[g].textBlock, b = b.measureText(), e = 0, e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveWidth = a = e);
                this._labels[g].effectiveWidth = e;
              }
            for (g = 0; g < this._stripLineLabels.length; g++)
              "outside" === this._stripLineLabels[g].stripLine.labelPlacement && (this._stripLineLabels[g].stripLine.value >= this.viewportMinimum && this._stripLineLabels[g].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[g].textBlock, b = b.measureText(), e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveWidth = this._stripLineLabels[g].effectiveWidth = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        B.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var g, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (c = 0; c < this._labels.length; c++) {
                g = this._labels[c].textBlock;
                g = g.measureText();
                var e = 0, e = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveHeight = a = e);
                this._labels[c].effectiveHeight = e;
              }
            for (c = 0; c < this._stripLineLabels.length; c++)
              "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (g = this._stripLineLabels[c].textBlock, g = g.measureText(), e = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        B.setLayout = function(a, g, c, b, e, h) {
          var d2, u, q2, k, m = a[0] ? a[0].chart : g[0].chart, n = m.isNavigator ? 0 : 10, p = m._axes;
          if (a && 0 < a.length)
            for (var f = 0; f < a.length; f++)
              a[f] && a[f].calculateAxisParameters();
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++)
              g[f].calculateAxisParameters();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateAxisParameters();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateAxisParameters();
          for (f = 0; f < p.length; f++)
            if (p[f] && p[f].scaleBreaks && p[f].scaleBreaks._appliedBreaks.length)
              for (var t2 = p[f].scaleBreaks._appliedBreaks, x = 0; x < t2.length && !(t2[x].startValue > p[f].viewportMaximum); x++)
                t2[x].endValue < p[f].viewportMinimum || (l(p[f].scaleBreaks.firstBreakIndex) && (p[f].scaleBreaks.firstBreakIndex = x), t2[x].startValue >= p[f].viewPortMinimum && (p[f].scaleBreaks.lastBreakIndex = x));
          for (var y = x = 0, s = 0, w3 = 0, v = 0, B2 = 0, A3 = 0, C, G2, I2 = u = 0, J2, L, M, t2 = J2 = L = M = false, f = 0; f < p.length; f++)
            p[f] && p[f].title && (p[f]._titleTextBlock = new ka(p[f].ctx, { text: p[f].title, fontSize: p[f].titleFontSize, fontFamily: p[f].titleFontFamily, fontWeight: p[f].titleFontWeight, fontColor: p[f].titleFontColor, fontStyle: p[f].titleFontStyle, borderColor: p[f].titleBorderColor, borderThickness: p[f].titleBorderThickness, backgroundColor: p[f].titleBackgroundColor, cornerRadius: p[f].titleCornerRadius, textBaseline: "middle", textAlign: p[f].titleTextAlign }));
          for (f = 0; f < p.length; f++)
            if (p[f].title)
              switch (p[f]._position) {
                case "left":
                  p[f]._titleTextBlock.maxWidth = p[f].titleMaxWidth || h.height;
                  p[f]._titleTextBlock.maxHeight = p[f].titleWrap ? 0.8 * h.width : 1.5 * p[f].titleFontSize;
                  p[f]._titleTextBlock.angle = -90;
                  break;
                case "right":
                  p[f]._titleTextBlock.maxWidth = p[f].titleMaxWidth || h.height;
                  p[f]._titleTextBlock.maxHeight = p[f].titleWrap ? 0.8 * h.width : 1.5 * p[f].titleFontSize;
                  p[f]._titleTextBlock.angle = 90;
                  break;
                default:
                  p[f]._titleTextBlock.maxWidth = p[f].titleMaxWidth || h.width, p[f]._titleTextBlock.maxHeight = p[f].titleWrap ? 0.8 * h.height : 1.5 * p[f].titleFontSize, p[f]._titleTextBlock.angle = 0;
              }
          if ("normal" === e) {
            for (var w3 = [], v = [], B2 = [], A3 = [], R2 = [], S2 = [], N2 = [], Q3 = []; 4 > x; ) {
              var F = 0, T2 = 0, U2 = 0, V3 = 0, Y2 = e = 0, P = 0, $3 = 0, X3 = 0, Z3 = 0, O = 0, aa2 = 0;
              if (c && 0 < c.length)
                for (B2 = [], f = O = 0; f < c.length; f++)
                  B2.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), O += B2[f], P += c[f] && !m.isNavigator ? c[f].margin : 0;
              else
                B2.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              N2.push(B2);
              if (b && 0 < b.length)
                for (A3 = [], f = aa2 = 0; f < b.length; f++)
                  A3.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), aa2 += A3[f], $3 += b[f] ? b[f].margin : 0;
              else
                A3.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              Q3.push(A3);
              d2 = Math.round(h.x1 + O + P);
              q2 = Math.round(h.x2 - aa2 - $3 > m.width - n ? m.width - n : h.x2 - aa2 - $3);
              if (a && 0 < a.length)
                for (w3 = [], f = X3 = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(q2 - d2), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), w3.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), X3 += w3[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                w3.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              R2.push(w3);
              if (g && 0 < g.length)
                for (v = [], f = Z3 = 0; f < g.length; f++)
                  g[f] && (g[f].lineCoordinates = {}), g[f].lineCoordinates.width = Math.abs(q2 - d2), g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.width ? g[f].titleMaxWidth : g[f].lineCoordinates.width), v.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateHeight() : 0)), Z3 += v[f], Y2 += g[f] && !m.isNavigator ? g[f].margin : 0;
              else
                v.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateHeight() : 0));
              S2.push(v);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates.x1 = d2, q2 = Math.round(h.x2 - aa2 - $3 > m.width - n ? m.width - n : h.x2 - aa2 - $3), a[f]._labels && 1 < a[f]._labels.length && (u = k = 0, k = a[f]._labels[1], u = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || l(C) || l(G2) || m.isNavigator || m.stockChart) || (u = 0, 0 < a[f].labelAngle ? G2 + s > q2 && (a[f].convertPixelToValue(G2) >= a[f].viewportMinimum && a[f].convertPixelToValue(G2) <= a[f].viewportMaximum) && (u += 0 < a[f].labelAngle ? G2 + s - q2 - aa2 : 0) : 0 > a[f].labelAngle ? C - y < d2 && C - y < a[f].viewportMinimum && (I2 = d2 - (P + a[f].tickLength + B2 + C - y + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (G2 + s > q2 && (a[f].convertPixelToValue(G2) >= a[f].viewportMinimum && a[f].convertPixelToValue(G2) <= a[f].viewportMaximum) && (u = G2 + s / 2 - q2 - aa2), C - y < d2 && C - y < a[f].viewportMinimum && (I2 = d2 - P - a[f].tickLength - B2 - C + y / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < u ? q2 -= u : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < I2 ? d2 += I2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < I2 && (d2 += I2), 0 < u && (q2 -= u))), m.panEnabled ? X3 = l(m.sessionVariables.axisX.height) || m.stockChart ? m.sessionVariables.axisX.height = X3 : m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = X3, u = Math.round(h.y2 - X3 - e + F), k = Math.round(h.y2), a[f].lineCoordinates.x2 = q2, a[f].lineCoordinates.width = q2 - d2, a[f].lineCoordinates.y1 = u, a[f].lineCoordinates.y2 = u, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[0].lineCoordinates.y2 + F + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: d2, y1: u, x2: q2, y2: k - (X3 + e - w3[f] - F), width: q2 - d2 }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), F += w3[f] + a[f].margin;
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].lineCoordinates.x1 = Math.round(h.x1 + O + P), g[f].lineCoordinates.x2 = q2 ? q2 : Math.round(h.x2 - aa2 - $3 > m.width - n ? m.width - n : h.x2 - aa2 - $3), g[f].lineCoordinates.width = Math.abs(q2 - d2), g[f]._labels && 1 < g[f]._labels.length && (k = g[f]._labels[1], u = "dateTime" === g[f].valueType ? g[f]._labels[g[f]._labels.length - 2] : g[f]._labels[g[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle))), m.panEnabled ? Z3 = l(m.sessionVariables.axisX2.height) || m.stockChart ? m.sessionVariables.axisX2.height = Z3 : m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = Z3, u = Math.round(h.y1), k = g[f].lineCoordinates.y1 = u + Z3 + Y2 - T2, g[f].lineCoordinates.y2 = u, "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.y1 = g[0].lineCoordinates.y1 - T2 - (g[f].labelEffectiveHeight || 0) - 5), "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.y1 -= g[f].tickLength), g[f].bounds = { x1: d2, y1: u + (Z3 + Y2 - ("inside" === g[f].labelPlacement && 0 === f ? v[f] - 5 : v[f]) - T2), x2: q2, y2: k, width: q2 - d2 }, g[f].bounds.height = g[f].bounds.y2 - g[f].bounds.y1, T2 += ("inside" === g[f].labelPlacement && 0 === f ? v[f] - 5 : v[f]) + g[f].margin;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  P = m.isNavigator ? 0 : 10, c[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), P = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : n, u = Math.round(h.y1 + Z3 + Y2 < Math.max(P, n) ? Math.max(P, n) : h.y1 + Z3 + Y2), q2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), P = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : n, k = Math.round(h.y2 - X3 - e - P), c[f].lineCoordinates = { x1: d2 - U2, y1: u, x2: q2 - U2, y2: k, height: Math.abs(k - u) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[0].lineCoordinates.x1 - U2 - (c[f].labelEffectiveWidth || 0) - 5, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2 - (("inside" === c[f].labelPlacement && 0 === f ? B2[f] - 5 : B2[f]) + U2), y1: u, x2: q2 - U2, y2: k, height: k - u }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), U2 += ("inside" === c[f].labelPlacement && 0 === f ? B2[f] - 5 : B2[f]) + c[f].margin);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x2 : g[0].lineCoordinates.x2), q2 = Math.round(d2), P = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, u = Math.round(h.y1 + Z3 + Y2 < Math.max(P, n) ? Math.max(P, n) : h.y1 + Z3 + Y2), P = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(h.y2 - (X3 + e + P)), b[f].lineCoordinates = { x1: d2 + V3, y1: u, x2: d2 + V3, y2: k, height: Math.abs(k - u) }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[0].lineCoordinates.x2 + V3 + (b[f].labelEffectiveWidth || 0) + 5, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: d2 + V3, y1: u, x2: q2 + (("inside" === b[f].labelPlacement && 0 === f ? A3[f] - 5 : A3[f]) + V3), y2: k, height: k - u }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), V3 += ("inside" === b[f].labelPlacement && 0 === f ? A3[f] - 5 : A3[f]) + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (C = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, d2 = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, d2 = a[f].getApparentDifference(a[f].viewportMinimum, d2), G2 = a[f].logarithmic ? (1 < d2 ? Math.log(d2) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].calculateValueToPixelConversionParameters(), g[f].calculateBreaksSizeInValues(), g[f]._labels && 1 < g[f]._labels.length && (C = (g[f].logarithmic ? Math.log(g[f]._labels[1].position / g[f].viewportMinimum) / g[f].conversionParameters.lnLogarithmBase : g[f]._labels[1].position - g[f].viewportMinimum) * Math.abs(g[f].conversionParameters.pixelPerUnit) + g[f].lineCoordinates.x1, d2 = g[f]._labels[g[f]._labels.length - ("dateTime" === g[f].valueType ? 2 : 1)].position, d2 = g[f].getApparentDifference(g[f].viewportMinimum, d2), G2 = g[f].logarithmic ? (1 < d2 ? Math.log(d2) / g[f].conversionParameters.lnLogarithmBase * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1);
              for (f = 0; f < p.length; f++)
                "axisY" === p[f].type && (p[f].calculateValueToPixelConversionParameters(), p[f].calculateBreaksSizeInValues());
              if (0 < x) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    t2 = R2[x - 1][f] === R2[x][f] ? true : false;
                else
                  t2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    J2 = S2[x - 1][f] === S2[x][f] ? true : false;
                else
                  J2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    L = N2[x - 1][f] === N2[x][f] ? true : false;
                else
                  L = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    M = Q3[x - 1][f] === Q3[x][f] ? true : false;
                else
                  M = true;
              }
              if (t2 && J2 && L && M)
                break;
              x++;
            }
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          } else {
            n = [];
            C = [];
            I2 = [];
            y = [];
            G2 = [];
            s = [];
            R2 = [];
            for (S2 = []; 4 > x; ) {
              X3 = V3 = U2 = $3 = P = Y2 = e = Q3 = N2 = F = Z3 = 0;
              if (a && 0 < a.length)
                for (I2 = [], f = V3 = 0; f < a.length; f++)
                  I2.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), V3 += I2[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                I2.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              R2.push(I2);
              if (g && 0 < g.length)
                for (y = [], f = X3 = 0; f < g.length; f++)
                  y.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateWidth() : 0)), X3 += y[f], Y2 += g[f] ? g[f].margin : 0;
              else
                y.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateWidth() : 0));
              S2.push(y);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  c[f].lineCoordinates = {}, d2 = Math.round(h.x1 + V3 + e), q2 = Math.round(h.x2 - X3 - Y2 > m.width - 10 ? m.width - 10 : h.x2 - X3 - Y2), c[f].labelAutoFit && !l(w3) && (0 < !a.length && (d2 = 0 > c[f].labelAngle ? Math.max(d2, w3) : 0 === c[f].labelAngle ? Math.max(d2, w3 / 2) : d2), 0 < !g.length && (q2 = 0 < c[f].labelAngle ? q2 - v / 2 : 0 === c[f].labelAngle ? q2 - v / 2 : q2)), c[f].lineCoordinates.x1 = d2, c[f].lineCoordinates.x2 = q2, c[f].lineCoordinates.width = Math.abs(q2 - d2), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f].lineCoordinates = {}, d2 = Math.round(h.x1 + V3 + e), q2 = Math.round(h.x2 - X3 - Y2 > b[f].chart.width - 10 ? b[f].chart.width - 10 : h.x2 - X3 - Y2), b[f] && b[f].labelAutoFit && !l(B2) && (0 < !a.length && (d2 = 0 < b[f].labelAngle ? Math.max(d2, B2) : 0 === b[f].labelAngle ? Math.max(d2, B2 / 2) : d2), 0 < !g.length && (q2 -= A3 / 2)), b[f].lineCoordinates.x1 = d2, b[f].lineCoordinates.x2 = q2, b[f].lineCoordinates.width = Math.abs(q2 - d2), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
              if (c && 0 < c.length)
                for (n = [], f = U2 = 0; f < c.length; f++)
                  n.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), U2 += n[f] + c[f].margin, P += c[f].margin;
              else
                n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              G2.push(n);
              if (b && 0 < b.length)
                for (C = [], f = 0; f < b.length; f++)
                  C.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), $3 += b[f].margin;
              else
                C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(C);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  0 < c[f]._labels.length && (k = c[f]._labels[0], u = c[f]._labels[c[f]._labels.length - 1], w3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), v = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle)));
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], u = b[f]._labels[b[f]._labels.length - 1], B2 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), A3 = u.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(u.textBlock.angle)));
              if (m.panEnabled)
                for (f = 0; f < c.length; f++)
                  n[f] = l(m.sessionVariables.axisY[f].height) ? m.sessionVariables.axisY[f].height = n[f] : m.sessionVariables.axisY[f].height;
              else
                for (f = 0; f < c.length; f++)
                  m.sessionVariables.axisY[f].height = n[f];
              if (c && 0 < c.length)
                for (f = c.length - 1; 0 <= f; f--)
                  u = Math.round(h.y2), k = Math.round(h.y2 > c[f].chart.height ? c[f].chart.height : h.y2), c[f].lineCoordinates.y1 = u - (n[f] + c[f].margin + Z3), c[f].lineCoordinates.y2 = u - (n[f] + c[f].margin + Z3), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + n[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2, y1: u - (n[f] + Z3 + c[f].margin), x2: q2, y2: k - (Z3 + c[f].margin), width: q2 - d2, height: n[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), Z3 += n[f] + c[f].margin;
              if (b && 0 < b.length)
                for (f = b.length - 1; 0 <= f; f--)
                  b[f] && (u = Math.round(h.y1), k = Math.round(h.y1 + (C[f] + b[f].margin + F)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - C[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: d2, y1: u + (b[f].margin + F), x2: q2, y2: k, width: q2 - d2 }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), F += C[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++) {
                  P = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 + e);
                  u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(P, 10) ? Math.max(P, 10) : h.y1) : h.y1 < Math.max(P, 10) ? Math.max(P, 10) : h.y1;
                  q2 = Math.round(h.x1 + V3 + e);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > m.height - Math.max(P, 10) ? m.height - Math.max(P, 10) : h.y2 - U2) : h.y2 > m.height - Math.max(P, 10) ? m.height - Math.max(P, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (P = 0; P < c.length; P++)
                      c[P] && c[P].labelAutoFit && (q2 = c[P].lineCoordinates.x1, d2 = 0 > c[P].labelAngle || 0 === c[P].labelAngle ? q2 - V3 : d2);
                  if (b && 0 < b.length)
                    for (P = 0; P < b.length; P++)
                      b[P] && b[P].labelAutoFit && (q2 = b[P].lineCoordinates.x1, d2 = q2 - V3);
                  a[f].lineCoordinates = { x1: q2 - N2, y1: u, x2: q2 - N2, y2: k, height: Math.abs(k - u) };
                  "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (I2[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  a[f].bounds = { x1: q2 - (I2[f] + N2), y1: u, x2: q2 - N2, y2: k, height: k - u };
                  a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                  a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                  a[f].calculateValueToPixelConversionParameters();
                  a[f].calculateBreaksSizeInValues();
                  N2 += I2[f] + a[f].margin;
                }
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++) {
                  P = g[f]._labels && 0 < g[f]._labels.length ? g[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 - e);
                  u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(P, 10) ? Math.max(P, 10) : h.y1) : h.y1 < Math.max(P, 10) ? Math.max(P, 10) : h.y1;
                  q2 = Math.round(h.x2 - X3 - Y2);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > m.height - Math.max(P, 10) ? m.height - Math.max(P, 10) : h.y2 - U2) : h.y2 > m.height - Math.max(P, 10) ? m.height - Math.max(P, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (P = 0; P < c.length; P++)
                      c[P] && c[P].labelAutoFit && (q2 = 0 > c[P].labelAngle ? Math.max(q2, w3) : 0 === c[P].labelAngle ? Math.max(q2, w3 / 2) : q2, d2 = 0 > c[P].labelAngle || 0 === c[P].labelAngle ? q2 - X3 : d2);
                  if (b && 0 < b.length)
                    for (P = 0; P < b.length; P++)
                      b[P] && b[P].labelAutoFit && (q2 = b[P].lineCoordinates.x2, d2 = q2 - X3);
                  g[f].lineCoordinates = { x1: q2 + Q3, y1: u, x2: q2 + Q3, y2: k, height: Math.abs(k - u) };
                  "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.x1 = g[f].lineCoordinates.x1 + (y[f] - (g[f]._titleTextBlock ? g[f]._titleTextBlock.height : 0) - 2) - g[f].tickLength - (g[f].stripLineLabelEffectiveWidth || 0), g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.x1 += g[f].tickLength, g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  g[f].bounds = { x1: g[f].lineCoordinates.x1, y1: u, x2: q2 + y[f] + Q3, y2: k, width: q2 - d2, height: k - u };
                  g[f].bounds.width = g[f].bounds.x2 - g[f].bounds.x1;
                  g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.height ? g[f].titleMaxWidth : g[f].lineCoordinates.height);
                  g[f].calculateValueToPixelConversionParameters();
                  g[f].calculateBreaksSizeInValues();
                  Q3 += y[f] + g[f].margin;
                }
              for (f = 0; f < p.length; f++)
                "axisY" === p[f].type && (p[f].calculateValueToPixelConversionParameters(), p[f].calculateBreaksSizeInValues());
              if (0 < x) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    t2 = R2[x - 1][f] === R2[x][f] ? true : false;
                else
                  t2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    J2 = S2[x - 1][f] === S2[x][f] ? true : false;
                else
                  J2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    L = G2[x - 1][f] === G2[x][f] ? true : false;
                else
                  L = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    M = s[x - 1][f] === s[x][f] ? true : false;
                else
                  M = true;
              }
              if (t2 && J2 && L && M)
                break;
              x++;
            }
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
          }
        };
        B.render = function(a, g, c, b, e) {
          e = a[0] ? a[0].chart : g[0].chart;
          var h = e.ctx;
          e.alignVerticalAxes && e.alignVerticalAxes();
          h.save();
          h.beginPath();
          a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2);
          g && g.length && h.rect(2, g[g.length - 1].bounds.y1, g[0].chart.width - 4, g[0].bounds.y2);
          h.clip();
          if (a && 0 < a.length)
            for (var d2 = 0; d2 < a.length; d2++)
              a[d2].renderLabelsTicksAndTitle();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderLabelsTicksAndTitle();
          h.restore();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderLabelsTicksAndTitle();
          e.preparePlotArea();
          d2 = e.plotArea;
          h.save();
          h.beginPath();
          h.rect(d2.x1, d2.y1, Math.abs(d2.x2 - d2.x1), Math.abs(d2.y2 - d2.y1));
          h.clip();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("value");
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderInterlacedColors();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderInterlacedColors();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderInterlacedColors();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderInterlacedColors();
          h.restore();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderGrid(), t && (a[d2].createMask(), a[d2].renderBreaksBackground());
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderGrid(), t && (g[d2].createMask(), g[d2].renderBreaksBackground());
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderGrid(), t && (c[d2].createMask(), c[d2].renderBreaksBackground());
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderGrid(), t && (b[d2].createMask(), b[d2].renderBreaksBackground());
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderAxisLine();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderAxisLine();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderAxisLine();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderAxisLine();
          h = false;
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("pixel"), a[d2].crosshair && a[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = a[d2].type);
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("pixel"), g[d2].crosshair && g[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = g[d2].type);
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("pixel"), c[d2].crosshair && c[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = c[d2].type);
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("pixel"), b[d2].crosshair && b[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = b[d2].type);
          if (h || !h && e.clearedOverlayedCanvas && 0 <= e.clearedOverlayedCanvas.indexOf("axis"))
            e.resetOverlayedCanvas(), e.renderCrosshairs(null, l(e.sessionVariables.crosshairShownByPixel) || e.sessionVariables.crosshairShownByPixel ? true : e.sessionVariables.crosshairShownByPixel);
        };
        B.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var g = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(g, c);
              this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(g) + this.convertValueToPixel(c)) / 2);
              this.stripLines[a].thickness = b;
              this.stripLines[a]._thicknessType = "value";
            }
        };
        B.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !l(this.scaleBreaks.options.spacing), e, h = 0; h < g.length; h++)
            e = b || !l(g[h].options.spacing), g[h].spacing = Ua(g[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, g[h].size = 0 > g[h].spacing ? 0 : Math.abs(g[h].spacing / c), this.logarithmic && (g[h].size = Math.pow(this.logarithmBase, g[h].size));
        };
        B.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var g = 0; g < a.length && !(a[g].startValue > this.conversionParameters.maximum); g++)
              a[g].endValue < this.conversionParameters.minimum || (l(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = g), a[g].startValue >= this.conversionParameters.minimum && (a[g].startPixel = this.convertValueToPixel(a[g].startValue), this.scaleBreaks.lastBreakIndex = g), a[g].endValue <= this.conversionParameters.maximum && (a[g].endPixel = this.convertValueToPixel(a[g].endValue)));
          }
        };
        B.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, g = false, c = 0, b = 0, e = 1, h = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, d2, l2 = this.viewportMaximum, q2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  n = this._labels[k];
                  if (n.position < this.viewportMinimum)
                    break;
                  n.position > this.viewportMaximum || !(k === this._labels.length - 1 || d2 < Math.log(l2 / n.position) * q2 / e) || (c.push(n), l2 = n.position, d2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  n = this._labels[k], n.position < this.viewportMinimum || (d2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += d2);
                c > this.lineCoordinates.width * e && this.labelAutoFit && (g = true);
              }
            if ("left" === this._position || "right" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], m, l2 = this.viewportMaximum, q2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  n = this._labels[k];
                  if (n.position < this.viewportMinimum)
                    break;
                  n.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(l2 / n.position) * q2) || (c.push(n), l2 = n.position, m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  n = this._labels[k], n.position < this.viewportMinimum || (m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
                b > this.lineCoordinates.height * e && this.labelAutoFit && (g = true);
              }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, n, p;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, p.y << 0), this.ctx.lineTo(b, p.y + this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (p.x -= n.textBlock.width / 2, p.y = "inside" === this.labelPlacement ? p.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5) : 0 > this.labelAngle ? (p.x -= "inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (p.x -= "inside" === this.labelPlacement ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, p.y = "inside" === this.labelPlacement ? p.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))), n.textBlock.x = p.x, n.textBlock.y = p.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, p.y << 0);
                  a.ctx.lineTo(b2, p.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, p.y << 0), this.ctx.lineTo(b, p.y - this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (p.x -= n.textBlock.width / 2, p.y = "inside" === this.labelPlacement ? p.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)) : 0 > this.labelAngle ? (p.x -= "inside" === this.labelPlacement ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, p.y = "inside" === this.labelPlacement ? p.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : p.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (p.x -= "inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), p.y = "inside" === this.labelPlacement ? p.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + n.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : p.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))), n.textBlock.x = p.x, n.textBlock.y = p.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, p.y << 0);
                  a.ctx.lineTo(b2, p.y + a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0, this.ctx.beginPath(), this.ctx.moveTo(p.x << 0, b), this.ctx.lineTo(p.x - this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = p.y, n.textBlock.x = "inside" === this.labelPlacement ? p.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (n.textBlock.y = "inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (n.textBlock.y = "inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(p.x << 0, b2);
                  a.ctx.lineTo(p.x + a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (p = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0, this.ctx.beginPath(), this.ctx.moveTo(p.x << 0, b), this.ctx.lineTo(p.x + this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = p.y, n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (n.textBlock.y = "inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : p.y, n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (n.textBlock.y = "inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : p.y, n.textBlock.x = "inside" === this.labelPlacement ? p.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - n.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (p = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(p.x << 0, b2);
                  a.ctx.lineTo(p.x - a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          h = 0;
          if ("inside" === this.labelPlacement)
            this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                n = a._labels[k], n.position < a.viewportMinimum || (n.position > a.viewportMaximum || g && 0 !== h++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(true), a.ctx.restore());
            }, this);
          else
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || (n.position > this.viewportMaximum || g && 0 !== h++ % 2 && this.labelAutoFit) || n.textBlock.render(true);
        };
        B.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, g, c, b = this.chart.plotArea, e = 0;
          g = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (g = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, g.x), b.y1, Math.abs(c.x - g.x), Math.abs(b.y1 - b.y2)), g = false) : g = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), g = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, g.y), Math.abs(b.x1 - b.x2), Math.abs(g.y - c.y)), g = false) : g = true;
          a.beginPath();
        };
        B.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var g = this, c, b, e = 0, h = 0, d2 = false;
            b = false;
            for (var q2 = [], t2 = [], k = false, m, e = 0; e < this.stripLines.length; e++) {
              var n = this.stripLines[e];
              n._thicknessType === a && ("pixel" === a && (n.value < this.viewportMinimum || n.value > this.viewportMaximum || l(n.value) || isNaN(this.range)) || "value" === a && (n.startValue <= this.viewportMinimum && n.endValue <= this.viewportMinimum || n.startValue >= this.viewportMaximum && n.endValue >= this.viewportMaximum || l(n.startValue) || l(n.endValue) || isNaN(this.range)) || q2.push(n));
            }
            for (e = 0; e < this._stripLineLabels.length; e++)
              if (n = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
                if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                  n && (this.ctx.strokeStyle = n.color, this.ctx.lineWidth = "pixel" === n._thicknessType ? n.thickness : this.tickThickness, l(n.opacity) || "pixel" !== n._thicknessType || (m = n.ctx.globalAlpha, n.ctx.globalAlpha = n.opacity));
                  if ("bottom" === this._position) {
                    var p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p, b.y << 0);
                    this.ctx.lineTo(p, b.y + this.tickLength << 0);
                    this.ctx.stroke();
                    0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + 5 + (0 > this.labelAngle ? Math.abs(c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))));
                  } else
                    "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p, b.y << 0), this.ctx.lineTo(p, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x -= 0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y -= this.tickLength + 2 + (0 < this.labelAngle ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x -= this.tickLength + 5 + (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, p), this.ctx.lineTo(b.x + this.tickLength << 0, p), this.ctx.stroke(), b.x = 0 === this.labelAngle ? b.x + this.tickLength + 5 : this.tickLength + 5 + (0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : b.x - c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle)));
                  m && (n.ctx.globalAlpha = m);
                  c.textBlock.x = b.x;
                  c.textBlock.y = b.y;
                  t2.push(c);
                } else
                  n._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1 ? l(n.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(n.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1 ? l(n.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(n.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1 ? l(n.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(n.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1 ? l(n.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(n.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, t2.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (e = 0; e < q2.length; e++)
                n = q2[e], n.showOnTop ? d2 || (d2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(
                    this.chart.plotArea.x1,
                    this.chart.plotArea.y1,
                    this.chart.plotArea.width,
                    this.chart.plotArea.height
                  );
                  this.ctx.clip();
                  for (h = 0; h < q2.length; h++)
                    n = q2[h], n.showOnTop && n.render();
                  this.ctx.restore();
                }, n)) : n.render();
              for (e = 0; e < t2.length; e++)
                c = t2[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  for (h = 0; h < t2.length; h++)
                    c = t2[h], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (g.ctx.save(), g.ctx.beginPath(), g.ctx.rect(g.chart.plotArea.x1, g.chart.plotArea.y1, g.chart.plotArea.width, g.chart.plotArea.height), g.ctx.clip(), c.textBlock.render(true), g.ctx.restore());
                }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k)
              for (b = false, e = 0; e < t2.length; e++)
                c = t2[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        B.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(
            this.chart.plotArea.x1,
            this.chart.plotArea.y1,
            this.chart.plotArea.width,
            this.chart.plotArea.height
          ), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        B.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            t ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var g = 0; g < a.length; g++)
              a[g].endValue < this.viewportMinimum || (a[g].startValue > this.viewportMaximum || isNaN(this.range)) || a[g].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        B.prototype.renderCrosshair = function(a, g) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, g);
        };
        B.prototype.showCrosshair = function(a) {
          l(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        B.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var g, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(I(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
              for (b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.x << 0) + 0.5 : g.x << 0, a.moveTo(g, c.y1 << 0), a.lineTo(g, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
              for (var b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.y << 0) + 0.5 : g.y << 0, a.moveTo(c.x1 << 0, g), a.lineTo(c.x2 << 0, g), a.stroke());
            a.restore();
          }
        };
        B.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, g = t ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, h;
          g.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.x2, h = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, h = this.lineCoordinates.x2);
              g.lineWidth = this.lineThickness;
              g.strokeStyle = this.lineColor ? this.lineColor : "black";
              g.setLineDash && g.setLineDash(I(this.lineDashType, this.lineThickness));
              var d2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              g.beginPath();
              if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                if (l(this.scaleBreaks.lastBreakIndex))
                  e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                else
                  for (var q2 = this.scaleBreaks.firstBreakIndex; q2 <= this.scaleBreaks.lastBreakIndex; q2++)
                    g.moveTo(e, d2), g.lineTo(this.scaleBreaks._appliedBreaks[q2].startPixel + c, d2), e = this.scaleBreaks._appliedBreaks[q2].endPixel + b;
              e && (g.moveTo(e, d2), g.lineTo(h, d2));
              g.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.y1, h = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, h = this.lineCoordinates.y1);
            g.lineWidth = this.lineThickness;
            g.strokeStyle = this.lineColor;
            g.setLineDash && g.setLineDash(I(this.lineDashType, this.lineThickness));
            d2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            g.beginPath();
            if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
              if (l(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
              else
                for (q2 = this.scaleBreaks.firstBreakIndex; q2 <= this.scaleBreaks.lastBreakIndex; q2++)
                  g.moveTo(d2, e), g.lineTo(d2, this.scaleBreaks._appliedBreaks[q2].startPixel + b), e = this.scaleBreaks._appliedBreaks[q2].endPixel + c;
            e && (g.moveTo(d2, e), g.lineTo(d2, h));
            g.stroke();
          }
          t && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), g.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ));
          g.restore();
        };
        B.prototype.getPixelCoordinatesOnAxis = function(a) {
          var g = {};
          if ("bottom" === this._position || "top" === this._position)
            g.x = this.convertValueToPixel(a), g.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position)
            g.y = this.convertValueToPixel(a), g.x = this.lineCoordinates.x2;
          return g;
        };
        B.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a)
            return null;
          var g = 0, c = 0, b, g = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                      b /= e[c].startValue / this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                        break;
                      } else
                        a *= e[c].endValue / e[c].startValue / e[c].size;
                      b /= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue / e[c - 1].endValue) {
                    b /= e[c].startValue / e[c - 1].endValue;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                      b /= e[c].endValue / this.conversionParameters.minimum;
                      if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                      } else
                        a /= e[c].endValue / e[c].startValue / e[c].size;
                      b *= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                  } else
                    break;
            g = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                      g = false;
                    } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                      b -= e[c].startValue - this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                        break;
                      } else
                        a += e[c].endValue - e[c].startValue - e[c].size;
                      b -= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue - e[c - 1].endValue) {
                    b -= e[c].startValue - e[c - 1].endValue;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum)
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), g = false;
                    else if (b < e[c].endValue - this.conversionParameters.minimum) {
                      b -= e[c].endValue - this.conversionParameters.minimum;
                      if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                      } else
                        a -= e[c].endValue - e[c].startValue - e[c].size;
                      b += e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                  } else
                    break;
            g = this.conversionParameters.minimum + a;
          }
          return g;
        };
        B.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        B.prototype.getApparentDifference = function(a, g, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = l(c) ? g / a : c;
            for (var h = 0; h < e.length && !(g < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && g >= e[h].endValue ? c = c / e[h].endValue * e[h].startValue * e[h].size : a >= e[h].startValue && g >= e[h].endValue ? c = c / e[h].endValue * a * Math.pow(e[h].size, Math.log(e[h].endValue / a) / Math.log(e[h].endValue / e[h].startValue)) : a <= e[h].startValue && g <= e[h].endValue ? c = c / g * e[h].startValue * Math.pow(e[h].size, Math.log(g / e[h].startValue) / Math.log(e[h].endValue / e[h].startValue)) : !b && (a > e[h].startValue && g < e[h].endValue) && (c = a * Math.pow(e[h].size, Math.log(g / a) / Math.log(e[h].endValue / e[h].startValue))));
          } else
            for (c = l(c) ? Math.abs(g - a) : c, h = 0; h < e.length && !(g < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && g >= e[h].endValue ? c = c - e[h].endValue + e[h].startValue + e[h].size : a > e[h].startValue && g >= e[h].endValue ? c = c - e[h].endValue + a + e[h].size * (e[h].endValue - a) / (e[h].endValue - e[h].startValue) : a <= e[h].startValue && g < e[h].endValue ? c = c - g + e[h].startValue + e[h].size * (g - e[h].startValue) / (e[h].endValue - e[h].startValue) : !b && (a > e[h].startValue && g < e[h].endValue) && (c = a + e[h].size * (g - a) / (e[h].endValue - e[h].startValue)));
          return c;
        };
        B.prototype.setViewPortRange = function(a, g) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, g);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, g);
        };
        B.prototype.getXValueAt = function(a) {
          if (!a)
            return null;
          var g = null;
          "left" === this._position ? g = this.convertPixelToValue(a.y) : "bottom" === this._position && (g = this.convertPixelToValue(a.x));
          return g;
        };
        B.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var g = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic)
            for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
          else
            for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
          g.minimum = this.viewportMinimum;
          g.maximum = this.viewportMaximum;
          g.range = b;
          if ("bottom" === this._position || "top" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? -1 : 1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? 1 : -1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = g;
        };
        B.prototype.calculateAxisParameters = function() {
          if (this.logarithmic)
            this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), g = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), e, h, d2, b = 0;
            !l(this.options.viewportMinimum) && (!l(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (l(this.options.viewportMinimum) && !l(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
              this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = this.minimum;
            if (l(this.options.viewportMaximum) && !l(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
              this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                  this.scaleBreaks._appliedBreaks.splice(
                    b,
                    1
                  );
                  break;
                }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length)
                for (e = 0; e < this.dataSeries.length; e++)
                  "dateTime" === this.dataSeries[e].xValueType && (c = true);
              e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b);
              Infinity !== this.dataInfo.minDiff ? d2 = this.dataInfo.minDiff : 1 < h - e ? d2 = 0.5 * Math.abs(h - e) : (d2 = 1, c && (g = true));
            } else
              "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(h) ? isFinite(e) ? isFinite(h) || (h = e) : e = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * S.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * S.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * S.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * S.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * S.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * S.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * S.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * S.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * S.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * S.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * S.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * S.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * S.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * S.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * S.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * S.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * S.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * S.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * S.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * S.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * S.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * S.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * S.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * S.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * S.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * S.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * S.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * S.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * S.yearDuration) <= a ? 1 : b / (2 * S.yearDuration) <= a ? 2 : b / (4 * S.yearDuration) <= a ? 4 : Math.floor(B.getNiceNumber(b / (a - 1), true) / S.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = e - d2 / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = h + d2 / 2;
              g ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = B.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : B.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? e - d2 / 2 : Math.floor(e / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? h + d2 / 2 : Math.ceil(h / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum)
              if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(h) ? 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(e, h, null, true)), "axisX" === this.type && c) {
                this.valueType = "dateTime";
                if (null === this.minimum || isNaN(this.minimum))
                  this.minimum = e - d2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                if (null === this.maximum || isNaN(this.maximum))
                  this.maximum = h + d2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
              } else
                this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - d2 / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum
                )), null === this.maximum && (this.maximum = "axisX" === this.type ? h + d2 / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            l(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            l(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = B.generateValueFormatString(this.range, 2));
          }
        };
        B.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), g = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, h, d2;
          d2 = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (d2 = 0; d2 < this.scaleBreaks._appliedBreaks.length; d2++)
              if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[d2].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[d2].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[d2].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[d2].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[d2].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[d2].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(d2, 1);
                break;
              }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (d2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= d2, b /= d2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (d2 = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= d2, b /= d2) : b > e ? (d2 = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / d2 : e = b * d2) : (d2 = Math.min(e / b * Math.pow(
            this.logarithmBase,
            0.01
          ), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= d2), 1 !== b && (b /= d2)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
          d2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var q2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          d2 = Math.pow(this.logarithmBase, B.getNiceNumber(Math.abs(Math.log(d2) / g), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = B.getNiceExponent(Math.log(d2) / g / (a - 1), true), c = B.getNiceNumber(q2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = B.getNiceExponent(Math.ceil(Math.log(d2) / g) / (a - 1)), c = B.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum)
            "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (d2 = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
            ), e *= d2, b /= d2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (d2 = Math.pow(this.logarithmBase, this.interval), e *= d2, b /= d2) : b > e ? (d2 = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / d2 : e = b * d2) : (d2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= d2), 1 !== b && (b /= d2)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval)), l(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval)), l(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (g = Math.floor(this.viewportMinimum / c + 0.5) * c; g < this.viewportMinimum; )
              g += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = g;
            this.interval = c;
          } else
            this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            g = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(g) || !isFinite(g))
              g = 2;
            if (2 < g)
              for (d2 = 0; d2 < g - 2; d2++)
                this.valueFormatString += "#";
          }
        };
        B.generateValueFormatString = function(a, g) {
          var c = "#,##0.", b = g;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = g);
          for (var e = 0; e < b; e++)
            c += "#";
          return c;
        };
        B.getNiceExponent = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        B.getNiceNumber = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = g ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        B.prototype.getLabelStartPoint = function() {
          var a = S[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
              0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else
              "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        pa(V2, Y);
        pa(fa2, Y);
        fa2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), g = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][g] = this.options;
          }
        };
        fa2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var g = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            U(this.id);
            var h, d2, l2, q2, k, m;
            a = Math.max(this.spacing, 3);
            var n = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = n;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, n));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
              if (b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0, d2 = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2 + n / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, l2 = this.chart.plotArea.y1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - n / 2, y1: e, x2: d2 + n / 2, y2: l2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(b, l2), this.ctx.lineTo(d2, l2), this.ctx.lineTo(d2, e);
              else if ("wavy" === this.type) {
                q2 = b;
                k = e;
                h = 0.5;
                m = (l2 - k) / a / 3;
                for (var p = 0; p < m; p++)
                  this.ctx.bezierCurveTo(q2 + h * a, k + a, q2 + h * a, k + 2 * a, q2, k + 3 * a), k += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(q2 + h * a, k + a, q2 + h * a, k + 2 * a, q2, k + 3 * a);
                q2 = d2;
                h *= -1;
                this.ctx.lineTo(q2, k);
                for (p = 0; p < m; p++)
                  this.ctx.bezierCurveTo(q2 + h * a, k - a, q2 + h * a, k - 2 * a, q2, k - 3 * a), k -= 3 * a, h *= -1;
              } else {
                if ("zigzag" === this.type) {
                  h = -1;
                  k = e + a;
                  q2 = b + a;
                  m = (l2 - k) / a / 2;
                  for (p = 0; p < m; p++)
                    this.ctx.lineTo(q2, k), q2 += 2 * h * a, k += 2 * a, h *= -1;
                  this.ctx.lineTo(q2, k);
                  q2 += d2 - b;
                  for (p = 0; p < m + 1; p++)
                    this.ctx.lineTo(q2, k), q2 += 2 * h * a, k -= 2 * a, h *= -1;
                  this.ctx.lineTo(q2 + h * a, k + a);
                }
              }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y << 0, l2 = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, d2 = this.chart.plotArea.x2 + n / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, d2 = this.chart.plotArea.x1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - n / 2, x2: d2, y2: l2 + n / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(d2, e), this.ctx.lineTo(d2, l2), this.ctx.lineTo(b, l2);
              else if ("wavy" === this.type) {
                q2 = b;
                k = e;
                h = 0.5;
                m = (d2 - q2) / a / 3;
                for (p = 0; p < m; p++)
                  this.ctx.bezierCurveTo(q2 + a, k + h * a, q2 + 2 * a, k + h * a, q2 + 3 * a, k), q2 += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(q2 + a, k + h * a, q2 + 2 * a, k + h * a, q2 + 3 * a, k);
                k = l2;
                h *= -1;
                this.ctx.lineTo(q2, k);
                for (p = 0; p < m; p++)
                  this.ctx.bezierCurveTo(q2 - a, k + h * a, q2 - 2 * a, k + h * a, q2 - 3 * a, k), q2 -= 3 * a, h *= -1;
              } else if ("zigzag" === this.type) {
                h = 1;
                k = e - a;
                q2 = b + a;
                m = (d2 - q2) / a / 2;
                for (p = 0; p < m; p++)
                  this.ctx.lineTo(q2, k), k += 2 * h * a, q2 += 2 * a, h *= -1;
                this.ctx.lineTo(q2, k);
                k += l2 - e;
                for (p = 0; p < m + 1; p++)
                  this.ctx.lineTo(
                    q2,
                    k
                  ), k += 2 * h * a, q2 -= 2 * a, h *= -1;
                this.ctx.lineTo(q2 + a, k + h * a);
              }
            }
            0 < n && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = g;
          }
        };
        pa(N, Y);
        N.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent.stripLines), g = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[g] = this.options;
          }
        };
        N.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), g = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < g) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            U(this.id);
            var e, h, d2, l2;
            this.ctx.lineWidth = g;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, g));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              e = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, d2 = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2, this.bounds = { x1: e - g / 2, y1: d2, x2: h + g / 2, y2: l2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              d2 = l2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = { x1: e, y1: d2 - g / 2, x2: h, y2: l2 + g / 2 };
            this.ctx.moveTo(e, d2);
            this.ctx.lineTo(h, l2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        pa(Z2, Y);
        Z2.prototype.showAt = function(a) {
          if (!this.enabled)
            return false;
          var g = this.chart, c = false;
          g.resetOverlayedCanvas();
          g.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === g.plotInfo.axisPlacement)
            if ("bottom" === this.parent._position)
              for (var b = 0; b < g.axisY.length; b++)
                this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
              for (b = 0; b < g.axisY2.length; b++)
                this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
              for (b = 0; b < g.axisX.length; b++)
                this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position)
                for (b = 0; b < g.axisX2.length; b++)
                  this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
            }
          else if ("bottom" === this.parent._position)
            for (b = 0; b < g.axisX.length; b++)
              this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < g.axisX2.length; b++)
              this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < g.axisY.length; b++)
              this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
            for (b = 0; b < g.axisY2.length; b++)
              this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < g.axisX.length; b++)
            a = g.axisX[b]._crosshairValue, g.axisX[b].crosshair && g.axisX[b].crosshair.enabled && (!l(a) && a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? (g.axisX[b].showCrosshair(a), g.axisX[b].sessionVariables.crosshairValue = g.axisX[b].crosshair._updatedValue = a, this === g.axisX[b].crosshair && (c = true)) : void 0 !== a && (g.axisX[b].sessionVariables.crosshairValue = g.axisX[b].crosshair._updatedValue = null));
          for (b = 0; b < g.axisX2.length; b++)
            a = g.axisX2[b]._crosshairValue, g.axisX2[b].crosshair && g.axisX2[b].crosshair.enabled && (!l(a) && a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? (g.axisX2[b].showCrosshair(a), g.axisX2[b].sessionVariables.crosshairValue = g.axisX2[b].crosshair._updatedValue = a, this === g.axisX2[b].crosshair && (c = true)) : void 0 !== a && (g.axisX2[b].sessionVariables.crosshairValue = g.axisX2[b].crosshair._updatedValue = null));
          for (b = 0; b < g.axisY.length; b++)
            a = g.axisY[b]._crosshairValue, g.axisY[b].crosshair && g.axisY[b].crosshair.enabled && (!l(a) && a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? (g.axisY[b].showCrosshair(a), g.axisY[b].sessionVariables.crosshairValue = g.axisY[b].crosshair._updatedValue = a, this === g.axisY[b].crosshair && (c = true)) : void 0 !== a && (g.axisY[b].sessionVariables.crosshairValue = g.axisY[b].crosshair._updatedValue = null));
          for (b = 0; b < g.axisY2.length; b++)
            a = g.axisY2[b]._crosshairValue, g.axisY2[b].crosshair && g.axisY2[b].crosshair.enabled && (!l(a) && a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? (g.axisY2[b].showCrosshair(a), g.axisY2[b].sessionVariables.crosshairValue = g.axisY2[b].crosshair._updatedValue = a, this === g.axisY2[b].crosshair && (c = true)) : void 0 !== a && (g.axisY2[b].sessionVariables.crosshairValue = g.axisY2[b].crosshair._updatedValue = null));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          g.sessionVariables.crosshairShownByPixel = false;
          return c;
        };
        Z2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        Z2.prototype.render = function(a, g, c) {
          var b, e, h, d2, q2 = null, t2 = null, k = null, m = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = B.generateValueFormatString(this.parent.range, k)));
          var n = null === this.opacity ? 1 : this.opacity, p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, w3 = f.globalAlpha;
          f.beginPath();
          f.strokeStyle = this.color;
          f.lineWidth = p;
          f.save();
          this.labelFontSize = Math.abs(l(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = l(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < p && f.setLineDash && f.setLineDash(I(this.lineDashType, p));
          k = new ka(f, {
            x: 0,
            y: 0,
            padding: { top: 2, right: 3, bottom: 2, left: 4 },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: m,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var x = 0, m = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var y = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                x = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: g });
              else if ("left" === this.parent._position || "right" === this.parent._position)
                x = this.parent.convertPixelToValue({ y: g });
              for (var s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(x, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              y = null;
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var z = y = 0;
              yPercent = cumulativeY = 0;
              for (var x = Infinity, v, s = 0; s < m.length; s++) {
                if ("rangeBar" === m[s].dataSeries.type || "error" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (var A3 = 0; A3 < m[s].dataPoint.y.length; A3++)
                      z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[A3])), z <= x && (x = z, y = s);
                } else
                  "stackedBar" === m[s].dataSeries.type ? (cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), z <= x && (x = z, y = s)) : "stackedBar100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, yPercent = 100 * (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(a - this.parent.convertValueToPixel(yPercent)), z <= v && (v = z, y = s)) : (z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= x && (x = z, y = s));
                l(v) || (x = Math.min(x, v));
              }
              v = m[y];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                  x = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                  for (m = 0; m < v.dataPoint.y.length; m++)
                    z = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[m])), z < x && (x = z, s = m);
                  q2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                  this.value = v.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] }) : l(this.options.label) ? ha(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else
                  "stackedBar" === v.dataSeries.type ? (x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, q2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: cumulativeY }) : l(this.options.label) ? ha(l(c) ? cumulativeY : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === v.dataSeries.type ? (x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[z]), q2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: yPercent }) : l(this.options.label) ? ha(
                    l(c) ? yPercent : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label) : (q2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, this.value = v.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y }) : l(this.options.label) ? ha(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = e = q2;
                h = this.chart.plotArea.y1;
                d2 = this.chart.plotArea.y2;
                this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: d2 };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                h = d2 = t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                e = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: d2 + p / 2 };
                s = false;
                if (this.parent.labels)
                  for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (x = this.parent.convertPixelToValue({ y: g }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        x,
                        true,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? ha(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.x;
                k.y = d2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              x = this.parent.convertPixelToValue({ x: a });
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(x, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              v = m[0];
              b = e = q2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
              h = this.chart.plotArea.y1;
              d2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: d2 };
              s = false;
              if (this.parent.labels)
                for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (x = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(x, true, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? y.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? ha(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : l(this.options.label) ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = v.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !l(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (x = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(x, true, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              z = y = 0;
              x = Infinity;
              for (s = 0; s < m.length; s++) {
                if ("rangeColumn" === m[s].dataSeries.type || "rangeArea" === m[s].dataSeries.type || "error" === m[s].dataSeries.type || "rangeSplineArea" === m[s].dataSeries.type || "candlestick" === m[s].dataSeries.type || "ohlc" === m[s].dataSeries.type || "boxAndWhisker" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (A3 = 0; A3 < m[s].dataPoint.y.length; A3++)
                      z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataPoint.y[A3])), z <= x && (x = z, y = s);
                } else
                  "stackedColumn" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= x && (x = z, y = s)) : "stackedArea" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= x && (x = z, y = s)) : "stackedColumn100" === m[s].dataSeries.type || "stackedArea100" === m[s].dataSeries.type ? (z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(v) && (v = Math.abs(g - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))), "stackedColumn100" === m[s].dataSeries.type ? (t2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t2 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= v && (v = z, y = s)) : "stackedArea100" === m[s].dataSeries.type && (t2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t2 / m[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= v && (v = z, y = s))) : "waterfall" === m[s].dataSeries.type ? (z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum)), z <= x && (v = x = z, y = s)) : (z = Math.abs(g - this.parent.convertValueToPixel(m[s].dataPoint.y)), z <= x && (x = z, y = s));
                l(v) || (x = Math.min(x, v));
              }
              v = m[y];
              s = 0;
              if ("rangeColumn" === v.dataSeries.type || "rangeArea" === v.dataSeries.type || "error" === v.dataSeries.type || "rangeSplineArea" === v.dataSeries.type || "candlestick" === v.dataSeries.type || "ohlc" === v.dataSeries.type || "boxAndWhisker" === v.dataSeries.type) {
                x = Math.abs(g - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                for (m = 0; m < v.dataPoint.y.length; m++)
                  z = Math.abs(g - this.parent.convertValueToPixel(v.dataPoint.y[m])), z < x && (x = z, s = m);
                t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] }) : l(this.options.label) ? ha(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.y[s];
              } else
                "stackedColumn" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === v.dataSeries.type ? (t2 = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (t2 / v.dataSeries.plotUnit.dataPointYSums[z]), t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === v.dataSeries.type ? (t2 = v.dataSeries.dataPointEOs[v.index].cumulativeY, z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (t2 / v.dataSeries.plotUnit.dataPointYSums[z]), t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === v.dataSeries.type ? (t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataSeries.dataPointEOs[v.index].cumulativeSum }) : l(this.options.label) ? ha(l(c) ? v.dataSeries.dataPointEOs[v.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (t2 = 1 === f.lineWidth % 2 ? (l(a) ? g : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : l(a) ? g : this.parent.convertValueToPixel(v.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? v.dataPoint.y : c }) : l(this.options.label) ? ha(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
              h = d2 = t2;
              b = this.chart.plotArea.x1;
              e = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: d2 + p / 2 };
              k.y = d2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            m = null;
            f.globalAlpha = n;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < p && (f.moveTo(b, h), f.lineTo(e, d2), f.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position)
              "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < p && (f.moveTo(b, h), f.lineTo(e, d2), f.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              b = e = q2 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, d2 = this.chart.plotArea.y2, this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: d2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              h = d2 = t2 = 1 === f.lineWidth % 2 ? (g << 0) + 0.5 : g << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: d2 + p / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement)
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels)
                  for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (x = this.parent.convertPixelToValue({ y: g }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        x,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(g) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(g) : c }) : l(this.options.label) ? Ca(l(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              m = "";
              if (this.parent.labels)
                for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (x = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(x, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? l(c) ? y.dataPoint.label : c : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(a) : c
                }) : l(this.options.label) ? Ca(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position)
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(g) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            f.globalAlpha = n;
            0 < p && (f.moveTo(b, h), f.lineTo(e, d2), f.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(g);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(q2);
          if ("left" === this.parent._position || "right" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(t2);
          this._textBlock = k;
          this._label = c;
          l(c) || this.renderLabel();
          f.restore();
          f.globalAlpha = w3;
        };
        Z2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (l(this._textBlock) || (l(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), l(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        pa($2, Y);
        $2.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        $2.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = t ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            t || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        $2.prototype.mouseMoveHandler = function(a, g) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, g), this.enabled && this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY) && this.container && this.container.style && this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this));
        };
        $2.prototype._updateToolTip = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof g) {
              if (isNaN(this._prevX) || isNaN(this._prevY))
                return;
              a = this._prevX;
              g = this._prevY;
            } else
              this._prevX = a, this._prevY = g;
            var b = null, e = null, h = [], d2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var q2 = [];
              if (this.chart.axisX)
                for (var w3 = 0; w3 < this.chart.axisX.length; w3++) {
                  for (var d2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[w3].convertPixelToValue({ y: g }) : this.chart.axisX[w3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[w3].dataSeries.length; b++)
                    (k = this.chart.axisX[w3].dataSeries[b].getDataPointAtX(d2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[w3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && q2.push(k));
                  k = null;
                }
              if (this.chart.axisX2)
                for (w3 = 0; w3 < this.chart.axisX2.length; w3++) {
                  d2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[w3].convertPixelToValue({ y: g }) : this.chart.axisX2[w3].convertPixelToValue({ x: a });
                  k = null;
                  for (b = 0; b < this.chart.axisX2[w3].dataSeries.length; b++)
                    (k = this.chart.axisX2[w3].dataSeries[b].getDataPointAtX(d2, c, true)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[w3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && q2.push(k));
                  k = null;
                }
              if (0 === q2.length)
                return;
              q2.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = q2[0];
              for (b = 0; b < q2.length; b++)
                q2[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && h.push(q2[b]);
              q2 = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, g, c))
                this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (t)
                if (b = bb(a, g, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                  b = this.chart._eventManager.objectMap[b];
                  if ("legendItem" === b.objectType)
                    return;
                  this.currentSeriesIndex = b.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                } else
                  this.currentDataPointIndex = -1;
              else
                this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                e = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex)
                  b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - d2), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && e && ("line" === e.type || "stepLine" === e.type || "spline" === e.type || "area" === e.type || "stepArea" === e.type || "splineArea" === e.type || "stackedArea" === e.type || "stackedArea100" === e.type || "rangeArea" === e.type || "rangeSplineArea" === e.type || "candlestick" === e.type || "ohlc" === e.type || "boxAndWhisker" === e.type))
                  d2 = e.axisX.convertPixelToValue({ x: a }), k = e.getDataPointAtX(d2, c, true), l(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null, this.container && (this.container.style.display = "none"));
                  return;
                }
                if (!l(k) && !l(k.dataPoint) && !l(k.dataPoint.y))
                  if (k.dataSeries.axisY)
                    if (0 < k.dataPoint.y.length) {
                      for (b = c = 0; b < k.dataPoint.y.length; b++)
                        k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                      c < k.dataPoint.y.length && c > -k.dataPoint.y.length && h.push(k);
                    } else
                      "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && h.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && h.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && h.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && h.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || "stackedArea" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && h.push(k);
                  else
                    h.push(k);
              }
            }
            if (0 < h.length) {
              if (this.highlightObjects(h), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: h });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                    for (d2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < d2.length; b++)
                      d2[b] && (d2[b].style.color = d2[b].getAttribute("data-color"));
                  d2 = false;
                  "none" === this.container.style.display && (d2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[e.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : t ? "italic" : "normal";
                  } catch (m) {
                  }
                  "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  g = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : g : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                  g = -g + 10;
                  0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, g);
                  !this.animationEnabled || d2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = g;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = g + "px";
                } else
                  this.hide(false), this.enabled && this.dispatchEvent("hidden", {
                    chart: this.chart,
                    toolTip: this
                  }, this);
                g = [];
                for (b = 0; b < h.length; b++)
                  g.push({ xValue: h[b].dataPoint.x, dataPoint: h[b].dataPoint, dataSeries: h[b].dataSeries, dataPointIndex: h[b].index, dataSeriesIndex: h[b].dataSeries._index });
                this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: g };
                this._entries = h;
              }
            } else
              this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        $2.prototype.highlightObjects = function(a) {
          var g = this.chart.overlaidCanvasCtx;
          l(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), g.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip") : this.chart.clearedOverlayedCanvas = null;
          g.save();
          var c = this.chart.plotArea, b = 0;
          g.beginPath();
          g.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          g.clip();
          for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
              var b = this.chart.data[e.dataSeriesIndex], d2 = b.dataPoints[e.dataPointIndex], q2 = e.dataPointIndex;
              false === d2.highlightEnabled || true !== b.highlightEnabled && true !== d2.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (d2 = b.getMarkerProperties(q2, e.x1, e.y1, this.chart.overlaidCanvasCtx), d2.size = Math.max(1.5 * d2.size << 0, 10), d2.borderColor = d2.borderColor || "#FFFFFF", d2.borderThickness = d2.borderThickness || Math.ceil(0.1 * d2.size), aa.drawMarkers([d2]), "undefined" !== typeof e.y2 && (d2 = b.getMarkerProperties(q2, e.x1, e.y2, this.chart.overlaidCanvasCtx), d2.size = Math.max(1.5 * d2.size << 0, 10), d2.borderColor = d2.borderColor || "#FFFFFF", d2.borderThickness = d2.borderThickness || Math.ceil(0.1 * d2.size), aa.drawMarkers([d2]))) : "bubble" === b.type ? (d2 = b.getMarkerProperties(q2, e.x1, e.y1, this.chart.overlaidCanvasCtx), d2.size = e.size, d2.color = "white", d2.borderColor = "white", g.globalAlpha = 0.3, aa.drawMarkers([d2]), g.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? da(g, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? X2(g, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? qa2(
                g,
                e.funnelSection,
                0.3,
                "white"
              ) : "candlestick" === b.type ? (g.globalAlpha = 1, g.strokeStyle = e.color, g.lineWidth = 2 * e.borderThickness, b = 0 === g.lineWidth % 2 ? 0 : 0.5, g.beginPath(), g.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), g.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), g.stroke(), g.beginPath(), g.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), g.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), g.stroke(), da(g, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), g.globalAlpha = 1) : "ohlc" === b.type ? (g.globalAlpha = 1, g.strokeStyle = e.color, g.lineWidth = 2 * e.borderThickness, b = 0 === g.lineWidth % 2 ? 0 : 0.5, g.beginPath(), g.moveTo(e.x3 - b, e.y2), g.lineTo(e.x3 - b, e.y3), g.stroke(), g.beginPath(), g.moveTo(e.x3, e.y1), g.lineTo(e.x1, e.y1), g.stroke(), g.beginPath(), g.moveTo(e.x3, e.y4), g.lineTo(e.x2, e.y4), g.stroke(), g.globalAlpha = 1) : "boxAndWhisker" === b.type ? (g.save(), g.globalAlpha = 1, g.strokeStyle = e.stemColor, g.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (g.beginPath(), g.moveTo(e.x3, e.y2 + e.borderThickness / 2), g.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), g.stroke(), g.beginPath(), g.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), g.lineTo(e.x3, e.y3 - e.borderThickness / 2), g.stroke()), g.beginPath(), da(g, e.x1, Math.max(e.y2, e.y3), e.x2, Math.min(e.y2, e.y3), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), g.globalAlpha = 1, g.strokeStyle = e.whiskerColor, g.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (g.beginPath(), g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), g.stroke(), g.beginPath(), g.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), g.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), g.stroke()), g.globalAlpha = 1, g.strokeStyle = e.lineColor, g.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (g.beginPath(), g.moveTo(e.x1, e.y5), g.lineTo(e.x2, e.y5), g.stroke()), g.restore(), g.globalAlpha = 1) : "error" === b.type && A2(g, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
            }
          }
          g.restore();
          g.globalAlpha = 1;
          g.beginPath();
        };
        $2.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var g = null, c = null, b = null, e = 0, d2 = "";
          this.isToolTipDefinedInData = true;
          for (var l2 = 0; l2 < a.length; l2++)
            if (a[l2].dataSeries.toolTipContent || a[l2].dataPoint.toolTipContent) {
              this.isToolTipDefinedInData = false;
              break;
            }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
            a = { chart: this.chart, toolTip: this.options, entries: a }, g = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var q2 = null, t2 = "", l2 = 0; l2 < a.length; l2++) {
              c = a[l2].dataSeries;
              b = a[l2].dataPoint;
              e = a[l2].index;
              d2 = "";
              if (0 === l2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? t2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (t2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                t2 += "</br>";
                if (!c.visible)
                  continue;
                t2 = this.chart.replaceKeywordsWithValue(t2, b, c, e);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (d2 += q2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), d2 += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, q2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (d2 += q2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), d2 += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (d2 += q2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), d2 += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (d2 += q2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), d2 += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (d2 += q2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), d2 += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === g && (g = ""), c.visible && (true === this.reversed ? (g = this.chart.replaceKeywordsWithValue(d2, b, c, e) + g, l2 < a.length - 1 && (g = "</br>" + g)) : (g += this.chart.replaceKeywordsWithValue(d2, b, c, e), l2 < a.length - 1 && (g += "</br>"))));
            }
            null !== g && (g = t2 + g);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            e = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
              return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (d2 = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === g && (g = "");
            g += this.chart.replaceKeywordsWithValue(
              d2,
              b,
              c,
              e
            );
          }
          return g;
        };
        $2.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        $2.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        $2.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._entries = this._dataSeriesIndex = this._xValue = null, this._prevY = this._prevX = NaN, this._updatedEventParameters = null, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        $2.prototype.show = function(a, g, c) {
          this._updateToolTip(a, g, "undefined" === typeof c ? false : c);
        };
        $2.prototype.showAtIndex = function(a, g) {
        };
        $2.prototype.showAtX = function(a, g) {
          if (!this.enabled)
            return false;
          this.chart.clearedOverlayedCanvas = null;
          this._updateOptions();
          var c, b, e, d2 = [];
          e = false;
          g = !l(g) && 0 <= g && g < this.chart.data.length ? g : 0;
          if (this.shared)
            for (var q2 = 0; q2 < this.chart.data.length; q2++)
              c = this.chart.data[q2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !l(b.dataPoint.y) && c.visible) && (b.dataSeries = c, this.chart.data[g].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && d2.push(b));
          else
            c = this.chart.data[g], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !l(b.dataPoint.y) && c.visible) && (b.dataSeries = c, d2.push(b));
          if (0 < d2.length) {
            for (q2 = 0; q2 < d2.length; q2++)
              if (b = d2[q2], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataSeries.axisX && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                e = false;
                break;
              } else if (b.dataSeries.axisX && b.dataSeries.axisY && (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum))
                e = true;
              else {
                e = false;
                break;
              }
            if (e)
              return this.hide(), false;
            this.highlightObjects(d2);
            this._entries = d2;
            q2 = "";
            q2 = this.getToolTipInnerHTML({ entries: d2 });
            if (null !== q2) {
              this.contentDiv.innerHTML = q2;
              if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                for (b = this.contentDiv.getElementsByTagName("span"), q2 = 0; q2 < b.length; q2++)
                  b[q2] && (b[q2].style.color = b[q2].getAttribute("data-color"));
              q2 = false;
              "none" === this.container.style.display && (q2 = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : t ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === d2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataPoint.color ? d2[0].dataPoint.color : 0 < d2[0].dataPoint.y ? d2[0].dataSeries.risingColor : d2[0].dataSeries.fallingColor : "error" === d2[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataSeries.color ? d2[0].dataSeries.color : d2[0].dataSeries._colorSet[c.index % d2[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : d2[0].dataPoint.color ? d2[0].dataPoint.color : d2[0].dataSeries.color ? d2[0].dataSeries.color : d2[0].dataSeries._colorSet[d2[0].index % d2[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : t ? "italic" : "normal";
              } catch (u) {
              }
              "pie" === d2[0].dataSeries.type || "doughnut" === d2[0].dataSeries.type ? c = d2[0].dataSeries.dataPointEOs[d2[0].index].center.x + d2[0].dataSeries.radius * Math.cos(d2[0].dataSeries.dataPointEOs[d2[0].index].midAngle) + -("left" === d2[0].dataSeries.dataPointEOs[d2[0].index].hemisphere ? 0 : this.container.clientWidth) : "funnel" === d2[0].dataSeries.type || "pyramid" === d2[0].dataSeries.type ? (b = d2[0].dataSeries.dataPointEOs[d2[0].index].sectionsofFunnel, c = (b.x1 + b.x2 - this.container.clientWidth) / 2) : (c = "bar" === d2[0].dataSeries.type || "rangeBar" === d2[0].dataSeries.type || "stackedBar" === d2[0].dataSeries.type || "stackedBar100" === d2[0].dataSeries.type ? d2[0].dataSeries.axisY.convertValueToPixel(d2[0].dataPoint.y.length ? d2[0].dataPoint.y[d2[0].dataPoint.y.length - 1] : d2[0].dataPoint.y) - this.container.clientWidth << 0 : d2[0].dataSeries.axisX.convertValueToPixel(d2[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              1 !== d2.length || this.shared || "line" !== d2[0].dataSeries.type && "stepLine" !== d2[0].dataSeries.type && "spline" !== d2[0].dataSeries.type && "area" !== d2[0].dataSeries.type && "stepArea" !== d2[0].dataSeries.type && "splineArea" !== d2[0].dataSeries.type ? "pie" === d2[0].dataSeries.type || "doughnut" === d2[0].dataSeries.type ? (b = d2[0].dataSeries.dataPointEOs[d2[0].index].center.y + d2[0].dataSeries.radius * Math.sin(d2[0].dataSeries.dataPointEOs[d2[0].index].midAngle), b < d2[0].dataSeries.dataPointEOs[d2[0].index].center.y && (b += this.container.clientHeight)) : "funnel" === d2[0].dataSeries.type || "pyramid" === d2[0].dataSeries.type ? (b = d2[0].dataSeries.dataPointEOs[d2[0].dataSeries.reversed ? d2[0].dataSeries.dataPointEOs.length - 1 - d2[0].index : d2[0].index].sectionsofFunnel, b = "undefined" !== typeof b.x5 ? (b.y2 + b.y4) / 2 : (b.y2 + b.y3) / 2 + this.container.clientHeight / 2) : b = "bar" === d2[0].dataSeries.type || "rangeBar" === d2[0].dataSeries.type || "stackedBar" === d2[0].dataSeries.type || "stackedBar100" === d2[0].dataSeries.type ? d2[0].dataSeries.axisX.convertValueToPixel(d2[0].dataPoint.x) : d2[0].dataSeries.axisY.convertValueToPixel(d2[0].dataPoint.y.length ? d2[0].dataPoint.y[d2[0].dataPoint.y.length - 1] : d2[0].dataPoint.y) : b = d2[0].dataSeries.axisY.convertValueToPixel(d2[0].dataPoint.y);
              b = -b + 10;
              0 < b + this.container.clientHeight + 5 && (b -= b + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(c, b);
              !this.animationEnabled || q2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = b + "px";
            } else
              return this.hide(false), false;
          } else
            return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = g;
          this._prevY = this._prevX = NaN;
          return true;
        };
        $2.prototype.fixMozTransitionDelay = function(a, d2) {
          if (20 < this.chart._eventManager.lastObjectId)
            this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d2, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        $2.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ga2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          t && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ga2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ga2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var d2 = [], c = Qa(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
              if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                var e = this.chart.data[b.dataSeriesIndex], h = e.dataPoints[b.dataPointIndex], l2 = b.dataPointIndex;
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = { context: h, userContext: h, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                d2.push(b);
                b = this.objectMap[e.id];
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = {
                  context: e,
                  userContext: e.options,
                  mouseover: "mouseover",
                  mousemove: "mousemove",
                  mouseout: "mouseout",
                  click: "click"
                };
                d2.push(this.objectMap[e.id]);
              } else
                "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], h = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: h, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }, b.eventContext = {
                  context: this.chart.legend,
                  userContext: this.chart.legend.options,
                  mouseover: "itemmouseover",
                  mousemove: "itemmousemove",
                  mouseout: "itemmouseout",
                  click: "itemclick"
                }, d2.push(b));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              h = true;
              for (b = 0; b < d2.length; b++)
                if (d2[b].id === this.mouseoveredObjectMaps[c].id) {
                  h = false;
                  break;
                }
              h ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < d2.length; c++) {
              e = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                if (d2[c].id === this.mouseoveredObjectMaps[b].id) {
                  e = true;
                  break;
                }
              e || (this.fireEvent(d2[c], "mouseover", a), this.mouseoveredObjectMaps.push(d2[c]));
              "click" === a.type ? this.fireEvent(d2[c], "click", a) : "mousemove" === a.type && this.fireEvent(d2[c], "mousemove", a);
            }
          }
        };
        ga2.prototype.fireEvent = function(a, d2, c) {
          if (a && d2) {
            var b = a.eventParameter, e = a.eventContext, h = a.eventContext.userContext;
            h && (e && h[e[d2]]) && h[e[d2]].call(h, b);
            "mouseout" !== d2 ? h.cursor && h.cursor !== c.target.style.cursor && (c.target.style.cursor = h.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== e.mouseout || h.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          }
        };
        ja2.prototype.animate = function(a, d2, c, b, e) {
          var h = this;
          this.chart.isAnimating = true;
          e = e || R.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d2, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; )
            if (d2 = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d2.startTime <= c && (b = e(Math.min(c - d2.startTime, d2.duration), 0, 1, d2.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d2), d2.animationCallback(b), 1 <= b && d2.onComplete)
              d2.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            h.animate.call(h);
          }) : this.chart.isAnimating = false;
        };
        ja2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var R = { yScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ia, a * c.canvas.height / ia);
          }
        }, xScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              e - e * a,
              0,
              a * c.canvas.width / ia,
              c.canvas.height / ia
            );
          }
        }, xClipAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ia, b.height / ia);
            c.restore();
          }
        }, fadeInAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ia, c.canvas.height / ia);
            c.restore();
          }
        }, easing: { linear: function(a, d2, c, b) {
          return c * a / b + d2;
        }, easeOutQuad: function(a, d2, c, b) {
          return -c * (a /= b) * (a - 2) + d2;
        }, easeOutQuart: function(a, d2, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + d2;
        }, easeInQuad: function(a, d2, c, b) {
          return c * (a /= b) * a + d2;
        }, easeInQuart: function(a, d2, c, b) {
          return c * (a /= b) * a * a * a + d2;
        } } }, aa = { drawMarker: function(a, d2, c, b, e, h, l2, q2) {
          if (c) {
            var t2 = 1;
            c.fillStyle = h ? h : "#000000";
            c.strokeStyle = l2 ? l2 : "#000000";
            c.lineWidth = q2 ? q2 : 0;
            c.setLineDash && c.setLineDash(I("solid", q2));
            "circle" === b ? (c.moveTo(a, d2), c.beginPath(), c.arc(a, d2, e / 2, 0, 2 * Math.PI, false), h && c.fill(), q2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d2 - e / 2, e, e), h && c.fill(), q2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d2 + e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.lineTo(a, d2 - e / 2), c.closePath(), h && c.fill(), q2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2)), c.beginPath()) : "cross" === b && (c.strokeStyle = h, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d2 - e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.stroke(), c.moveTo(a + e / 2, d2 - e / 2), c.lineTo(a - e / 2, d2 + e / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var d2 = 0; d2 < a.length; d2++) {
            var c = a[d2];
            aa.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return q;
      }();
      w.version = "v3.10.21 GA";
      window.CanvasJS && (w && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = w);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
            for (var f = 0, d2 = 0; 3 > d2; d2++)
              f += a[g][d2] * b[d2][e];
            c[g][e] = f;
          }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
          b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H)
          return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
          b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++)
            g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g)
            g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else
          b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else
            p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else
          e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
          throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
          throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++)
          this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
          v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length)
          c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length)
          c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length)
          r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else
          throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else
          p.push(
            "top:",
            k(m.y / q),
            "px;left:",
            k(m.x / q),
            "px;"
          );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x)
              c.x = f.x;
            if (null == d2.x || f.x > d2.x)
              d2.x = f.x;
            if (null == c.y || f.y < c.y)
              c.y = f.y;
            if (null == d2.y || f.y > d2.y)
              d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h])
          h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
          h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart)
      this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
