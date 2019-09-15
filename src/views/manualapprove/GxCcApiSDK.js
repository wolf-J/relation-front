/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject = function () { var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () { var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1", ag = [0, 0, 0], ab = null; if (typeof t.plugins != D && typeof t.plugins[S] == r) { ab = t.plugins[S].description; if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) { T = true; X = false; ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"); ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10); ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10); ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0 } } else { if (typeof O.ActiveXObject != D) { try { var ad = new ActiveXObject(W); if (ad) { ab = ad.GetVariable("$version"); if (ab) { X = true; ab = ab.split(" ")[1].split(","); ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } } catch (Z) { } } } return { w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac } }(), k = function () { if (!M.w3) { return } if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) { f() } if (!J) { if (typeof j.addEventListener != D) { j.addEventListener("DOMContentLoaded", f, false) } if (M.ie && M.win) { j.attachEvent(x, function () { if (j.readyState == "complete") { j.detachEvent(x, arguments.callee); f() } }); if (O == top) { (function () { if (J) { return } try { j.documentElement.doScroll("left") } catch (X) { setTimeout(arguments.callee, 0); return } f() })() } } if (M.wk) { (function () { if (J) { return } if (!/loaded|complete/.test(j.readyState)) { setTimeout(arguments.callee, 0); return } f() })() } s(f) } }(); function f() { if (J) { return } try { var Z = j.getElementsByTagName("body")[0].appendChild(C("span")); Z.parentNode.removeChild(Z) } catch (aa) { return } J = true; var X = U.length; for (var Y = 0; Y < X; Y++) { U[Y]() } } function K(X) { if (J) { X() } else { U[U.length] = X } } function s(Y) { if (typeof O.addEventListener != D) { O.addEventListener("load", Y, false) } else { if (typeof j.addEventListener != D) { j.addEventListener("load", Y, false) } else { if (typeof O.attachEvent != D) { i(O, "onload", Y) } else { if (typeof O.onload == "function") { var X = O.onload; O.onload = function () { X(); Y() } } else { O.onload = Y } } } } } function h() { if (T) { V() } else { H() } } function V() { var X = j.getElementsByTagName("body")[0]; var aa = C(r); aa.setAttribute("type", q); var Z = X.appendChild(aa); if (Z) { var Y = 0; (function () { if (typeof Z.GetVariable != D) { var ab = Z.GetVariable("$version"); if (ab) { ab = ab.split(" ")[1].split(","); M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)] } } else { if (Y < 10) { Y++; setTimeout(arguments.callee, 10); return } } X.removeChild(aa); Z = null; H() })() } else { H() } } function H() { var ag = o.length; if (ag > 0) { for (var af = 0; af < ag; af++) { var Y = o[af].id; var ab = o[af].callbackFn; var aa = { success: false, id: Y }; if (M.pv[0] > 0) { var ae = c(Y); if (ae) { if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) { w(Y, true); if (ab) { aa.success = true; aa.ref = z(Y); ab(aa) } } else { if (o[af].expressInstall && A()) { var ai = {}; ai.data = o[af].expressInstall; ai.width = ae.getAttribute("width") || "0"; ai.height = ae.getAttribute("height") || "0"; if (ae.getAttribute("class")) { ai.styleclass = ae.getAttribute("class") } if (ae.getAttribute("align")) { ai.align = ae.getAttribute("align") } var ah = {}; var X = ae.getElementsByTagName("param"); var ac = X.length; for (var ad = 0; ad < ac; ad++) { if (X[ad].getAttribute("name").toLowerCase() != "movie") { ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value") } } P(ai, ah, Y, ab) } else { p(ae); if (ab) { ab(aa) } } } } } else { w(Y, true); if (ab) { var Z = z(Y); if (Z && typeof Z.SetVariable != D) { aa.success = true; aa.ref = Z } ab(aa) } } } } } function z(aa) { var X = null; var Y = c(aa); if (Y && Y.nodeName == "OBJECT") { if (typeof Y.SetVariable != D) { X = Y } else { var Z = Y.getElementsByTagName(r)[0]; if (Z) { X = Z } } } return X } function A() { return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312) } function P(aa, ab, X, Z) { a = true; E = Z || null; B = { success: false, id: X }; var ae = c(X); if (ae) { if (ae.nodeName == "OBJECT") { l = g(ae); Q = null } else { l = ae; Q = X } aa.id = R; if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) { aa.width = "310" } if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) { aa.height = "137" } j.title = j.title.slice(0, 47) + " - Flash Player Installation"; var ad = M.ie && M.win ? "ActiveX" : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title; if (typeof ab.flashvars != D) { ab.flashvars += "&" + ac } else { ab.flashvars = ac } if (M.ie && M.win && ae.readyState != 4) { var Y = C("div"); X += "SWFObjectNew"; Y.setAttribute("id", X); ae.parentNode.insertBefore(Y, ae); ae.style.display = "none"; (function () { if (ae.readyState == 4) { ae.parentNode.removeChild(ae) } else { setTimeout(arguments.callee, 10) } })() } u(aa, ab, X) } } function p(Y) { if (M.ie && M.win && Y.readyState != 4) { var X = C("div"); Y.parentNode.insertBefore(X, Y); X.parentNode.replaceChild(g(Y), X); Y.style.display = "none"; (function () { if (Y.readyState == 4) { Y.parentNode.removeChild(Y) } else { setTimeout(arguments.callee, 10) } })() } else { Y.parentNode.replaceChild(g(Y), Y) } } function g(ab) { var aa = C("div"); if (M.win && M.ie) { aa.innerHTML = ab.innerHTML } else { var Y = ab.getElementsByTagName(r)[0]; if (Y) { var ad = Y.childNodes; if (ad) { var X = ad.length; for (var Z = 0; Z < X; Z++) { if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) { aa.appendChild(ad[Z].cloneNode(true)) } } } } } return aa } function u(ai, ag, Y) { var X, aa = c(Y); if (M.wk && M.wk < 312) { return X } if (aa) { if (typeof ai.id == D) { ai.id = Y } if (M.ie && M.win) { var ah = ""; for (var ae in ai) { if (ai[ae] != Object.prototype[ae]) { if (ae.toLowerCase() == "data") { ag.movie = ai[ae] } else { if (ae.toLowerCase() == "styleclass") { ah += ' class="' + ai[ae] + '"' } else { if (ae.toLowerCase() != "classid") { ah += " " + ae + '="' + ai[ae] + '"' } } } } } var af = ""; for (var ad in ag) { if (ag[ad] != Object.prototype[ad]) { af += '<param name="' + ad + '" value="' + ag[ad] + '" />' } } aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>"; N[N.length] = ai.id; X = c(ai.id) } else { var Z = C(r); Z.setAttribute("type", q); for (var ac in ai) { if (ai[ac] != Object.prototype[ac]) { if (ac.toLowerCase() == "styleclass") { Z.setAttribute("class", ai[ac]) } else { if (ac.toLowerCase() != "classid") { Z.setAttribute(ac, ai[ac]) } } } } for (var ab in ag) { if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") { e(Z, ab, ag[ab]) } } aa.parentNode.replaceChild(Z, aa); X = Z } } return X } function e(Z, X, Y) { var aa = C("param"); aa.setAttribute("name", X); aa.setAttribute("value", Y); Z.appendChild(aa) } function y(Y) { var X = c(Y); if (X && X.nodeName == "OBJECT") { if (M.ie && M.win) { X.style.display = "none"; (function () { if (X.readyState == 4) { b(Y) } else { setTimeout(arguments.callee, 10) } })() } else { X.parentNode.removeChild(X) } } } function b(Z) { var Y = c(Z); if (Y) { for (var X in Y) { if (typeof Y[X] == "function") { Y[X] = null } } Y.parentNode.removeChild(Y) } } function c(Z) { var X = null; try { X = j.getElementById(Z) } catch (Y) { } return X } function C(X) { return j.createElement(X) } function i(Z, X, Y) { Z.attachEvent(X, Y); I[I.length] = [Z, X, Y] } function F(Z) { var Y = M.pv, X = Z.split("."); X[0] = parseInt(X[0], 10); X[1] = parseInt(X[1], 10) || 0; X[2] = parseInt(X[2], 10) || 0; return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false } function v(ac, Y, ad, ab) { if (M.ie && M.mac) { return } var aa = j.getElementsByTagName("head")[0]; if (!aa) { return } var X = (ad && typeof ad == "string") ? ad : "screen"; if (ab) { n = null; G = null } if (!n || G != X) { var Z = C("style"); Z.setAttribute("type", "text/css"); Z.setAttribute("media", X); n = aa.appendChild(Z); if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) { n = j.styleSheets[j.styleSheets.length - 1] } G = X } if (M.ie && M.win) { if (n && typeof n.addRule == r) { n.addRule(ac, Y) } } else { if (n && typeof j.createTextNode != D) { n.appendChild(j.createTextNode(ac + " {" + Y + "}")) } } } function w(Z, X) { if (!m) { return } var Y = X ? "visible" : "hidden"; if (J && c(Z)) { c(Z).style.visibility = Y } else { v("#" + Z, "visibility:" + Y) } } function L(Y) { var Z = /[\\\"<>\.;]/; var X = Z.exec(Y) != null; return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y } var d = function () { if (M.ie && M.win) { window.attachEvent("onunload", function () { var ac = I.length; for (var ab = 0; ab < ac; ab++) { I[ab][0].detachEvent(I[ab][1], I[ab][2]) } var Z = N.length; for (var aa = 0; aa < Z; aa++) { y(N[aa]) } for (var Y in M) { M[Y] = null } M = null; for (var X in swfobject) { swfobject[X] = null } swfobject = null }) } }(); return { registerObject: function (ab, X, aa, Z) { if (M.w3 && ab && X) { var Y = {}; Y.id = ab; Y.swfVersion = X; Y.expressInstall = aa; Y.callbackFn = Z; o[o.length] = Y; w(ab, false) } else { if (Z) { Z({ success: false, id: ab }) } } }, getObjectById: function (X) { if (M.w3) { return z(X) } }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) { var X = { success: false, id: ah }; if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) { w(ah, false); K(function () { ae += ""; ag += ""; var aj = {}; if (af && typeof af === r) { for (var al in af) { aj[al] = af[al] } } aj.data = ab; aj.width = ae; aj.height = ag; var am = {}; if (ad && typeof ad === r) { for (var ak in ad) { am[ak] = ad[ak] } } if (Z && typeof Z === r) { for (var ai in Z) { if (typeof am.flashvars != D) { am.flashvars += "&" + ai + "=" + Z[ai] } else { am.flashvars = ai + "=" + Z[ai] } } } if (F(Y)) { var an = u(aj, am, ah); if (aj.id == ah) { w(ah, true) } X.success = true; X.ref = an } else { if (aa && A()) { aj.data = aa; P(aj, am, ah, ac); return } else { w(ah, true) } } if (ac) { ac(X) } }) } else { if (ac) { ac(X) } } }, switchOffAutoHideShow: function () { m = false }, ua: M, getFlashPlayerVersion: function () { return { major: M.pv[0], minor: M.pv[1], release: M.pv[2] } }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) { if (M.w3) { return u(Z, Y, X) } else { return undefined } }, showExpressInstall: function (Z, aa, X, Y) { if (M.w3 && A()) { P(Z, aa, X, Y) } }, removeSWF: function (X) { if (M.w3) { y(X) } }, createCSS: function (aa, Z, Y, X) { if (M.w3) { v(aa, Z, Y, X) } }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) { var Z = j.location.search || j.location.hash; if (Z) { if (/\?/.test(Z)) { Z = Z.split("?")[1] } if (aa == null) { return L(Z) } var Y = Z.split("&"); for (var X = 0; X < Y.length; X++) { if (Y[X].substring(0, Y[X].indexOf("=")) == aa) { return L(Y[X].substring((Y[X].indexOf("=") + 1))) } } } return "" }, expressInstallCallback: function () { if (a) { var X = c(R); if (X && l) { X.parentNode.replaceChild(l, X); if (Q) { w(Q, true); if (M.ie && M.win) { l.style.display = "block" } } if (E) { E(B) } } a = false } } } }();

// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/rfc6455
(function () {

    if (window.WEB_SOCKET_FORCE_FLASH) {
        // Keeps going.
    } else if (window.WebSocket) {
        return;
    } else if (window.MozWebSocket) {
        // Firefox.
        window.WebSocket = MozWebSocket;
        return;
    }

    var logger;
    if (window.WEB_SOCKET_LOGGER) {
        logger = WEB_SOCKET_LOGGER;
    } else if (window.console && window.console.log && window.console.error) {
        // In some environment, console is defined but console.log or console.error is missing.
        logger = window.console;
    } else {
        logger = { log: function () { }, error: function () { } };
    }

    // swfobject.hasFlashPlayerVersion("10.0.0") doesn't work with Gnash.
    if (swfobject.getFlashPlayerVersion().major < 10) {
        logger.error("Flash Player >= 10.0.0 is required.下载地址：http://172.24.18.102/gxCcApi/download/flashplayer_22_ax_debug_22.0.0.192.exe");
        return;
    }
    if (location.protocol == "file:") {
        logger.error(
            "WARNING: web-socket-js doesn't work in file:///... URL " +
            "unless you set Flash Security Settings properly. " +
            "Open the page via Web server i.e. http://...");
    }

    /**
     * Our own implementation of WebSocket class using Flash.
     * @param {string} url
     * @param {array or string} protocols
     * @param {string} proxyHost
     * @param {int} proxyPort
     * @param {string} headers
     */
    window.WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
        var self = this;
        self.__id = WebSocket.__nextId++;
        WebSocket.__instances[self.__id] = self;
        self.readyState = WebSocket.CONNECTING;
        self.bufferedAmount = 0;
        self.__events = {};
        if (!protocols) {
            protocols = [];
        } else if (typeof protocols == "string") {
            protocols = [protocols];
        }
        // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
        // Otherwise, when onopen fires immediately, onopen is called before it is set.
        self.__createTask = setTimeout(function () {
            WebSocket.__addTask(function () {
                self.__createTask = null;
                WebSocket.__flash.create(
                    self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
            });
        }, 0);
    };

    /**
     * Send data to the web socket.
     * @param {string} data  The data to send to the socket.
     * @return {boolean}  True for success, false for failure.
     */
    WebSocket.prototype.send = function (data) {
        if (this.readyState == WebSocket.CONNECTING) {
            //throw "INVALID_STATE_ERR: Web Socket connection has not been established";
        }
        else {
            // We use encodeURIComponent() here, because FABridge doesn't work if
            // the argument includes some characters. We don't use escape() here
            // because of this:
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
            // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
            // preserve all Unicode characters either e.g. "\uffff" in Firefox.
            // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
            // additional testing.
            var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
            if (result < 0) { // success
                return true;
            } else {
                this.bufferedAmount += result;
                return false;
            }
        }
    };

    /**
     * Close this web socket gracefully.
     */
    WebSocket.prototype.close = function () {
        if (this.__createTask) {
            clearTimeout(this.__createTask);
            this.__createTask = null;
            this.readyState = WebSocket.CLOSED;
            return;
        }
        if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
            return;
        }
        this.readyState = WebSocket.CLOSING;
        WebSocket.__flash.close(this.__id);
    };

    /**
     * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
     *
     * @param {string} type
     * @param {function} listener
     * @param {boolean} useCapture
     * @return void
     */
    WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
        if (!(type in this.__events)) {
            this.__events[type] = [];
        }
        this.__events[type].push(listener);
    };

    /**
     * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
     *
     * @param {string} type
     * @param {function} listener
     * @param {boolean} useCapture
     * @return void
     */
    WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
        if (!(type in this.__events)) return;
        var events = this.__events[type];
        for (var i = events.length - 1; i >= 0; --i) {
            if (events[i] === listener) {
                events.splice(i, 1);
                break;
            }
        }
    };

    /**
     * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
     *
     * @param {Event} event
     * @return void
     */
    WebSocket.prototype.dispatchEvent = function (event) {
        var events = this.__events[event.type] || [];
        for (var i = 0; i < events.length; ++i) {
            events[i](event);
        }
        var handler = this["on" + event.type];
        if (handler) handler.apply(this, [event]);
    };

    /**
     * Handles an event from Flash.
     * @param {Object} flashEvent
     */
    WebSocket.prototype.__handleEvent = function (flashEvent) {

        if ("readyState" in flashEvent) {
            this.readyState = flashEvent.readyState;
        }
        if ("protocol" in flashEvent) {
            this.protocol = flashEvent.protocol;
        }

        var jsEvent;
        if (flashEvent.type == "open" || flashEvent.type == "error") {
            jsEvent = this.__createSimpleEvent(flashEvent.type);
        } else if (flashEvent.type == "close") {
            jsEvent = this.__createSimpleEvent("close");
            jsEvent.wasClean = flashEvent.wasClean ? true : false;
            jsEvent.code = flashEvent.code;
            jsEvent.reason = flashEvent.reason;
        } else if (flashEvent.type == "message") {
            var data = decodeURIComponent(flashEvent.message);
            jsEvent = this.__createMessageEvent("message", data);
        } else {
            throw "unknown event type: " + flashEvent.type;
        }

        this.dispatchEvent(jsEvent);

    };

    WebSocket.prototype.__createSimpleEvent = function (type) {
        if (document.createEvent && window.Event) {
            var event = document.createEvent("Event");
            event.initEvent(type, false, false);
            return event;
        } else {
            return { type: type, bubbles: false, cancelable: false };
        }
    };

    WebSocket.prototype.__createMessageEvent = function (type, data) {
        if (window.MessageEvent && typeof (MessageEvent) == "function" && !window.opera) {
            return new MessageEvent("message", {
                "view": window,
                "bubbles": false,
                "cancelable": false,
                "data": data
            });
        } else if (document.createEvent && window.MessageEvent && !window.opera) {
            var event = document.createEvent("MessageEvent");
            event.initMessageEvent("message", false, false, data, null, null, window, null);
            return event;
        } else {
            // Old IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
            return { type: type, data: data, bubbles: false, cancelable: false };
        }
    };

    /**
     * Define the WebSocket readyState enumeration.
     */
    WebSocket.CONNECTING = 0;
    WebSocket.OPEN = 1;
    WebSocket.CLOSING = 2;
    WebSocket.CLOSED = 3;

    // Field to check implementation of WebSocket.
    WebSocket.__isFlashImplementation = true;
    WebSocket.__initialized = false;
    WebSocket.__flash = null;
    WebSocket.__instances = {};
    WebSocket.__tasks = [];
    WebSocket.__nextId = 0;

    /**
     * Load a new flash security policy file.
     * @param {string} url
     */
    WebSocket.loadFlashPolicyFile = function (url) {
        WebSocket.__addTask(function () {
            WebSocket.__flash.loadManualPolicyFile(url);
        });
    };

    /**
     * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
     */
    WebSocket.__initialize = function () {

        if (WebSocket.__initialized) return;
        WebSocket.__initialized = true;

        if (WebSocket.__swfLocation) {
            // For backword compatibility.
            window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
        }
        if (!window.WEB_SOCKET_SWF_LOCATION) {
            logger.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
            return;
        }
        if (!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR &&
            !WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/) &&
            WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)) {
            var swfHost = RegExp.$1;
            if (location.host != swfHost) {
                logger.error(
                    "[WebSocket] You must host HTML and WebSocketMain.swf in the same host " +
                    "('" + location.host + "' != '" + swfHost + "'). " +
                    "See also 'How to host HTML file and SWF file in different domains' section " +
                    "in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message " +
                    "by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;");
            }
        }
        var container = document.createElement("div");
        container.id = "webSocketContainer";
        // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
        // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
        // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
        // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
        // the best we can do as far as we know now.
        container.style.position = "absolute";
        if (WebSocket.__isFlashLite()) {
            container.style.left = "0px";
            container.style.top = "0px";
        } else {
            container.style.left = "-100px";
            container.style.top = "-100px";
        }
        var holder = document.createElement("div");
        holder.id = "webSocketFlash";
        container.appendChild(holder);
        document.body.appendChild(container);
        // See this article for hasPriority:
        // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
        swfobject.embedSWF(
            WEB_SOCKET_SWF_LOCATION,
            "webSocketFlash",
            "1" /* width */,
            "1" /* height */,
            "10.0.0" /* SWF version */,
            null,
            null,
            { hasPriority: true, swliveconnect: true, allowScriptAccess: "always" },
            null,
            function (e) {
                if (!e.success) {
                    logger.error("[WebSocket] swfobject.embedSWF failed");
                }
            }
        );

    };

    /**
     * Called by Flash to notify JS that it's fully loaded and ready
     * for communication.
     */
    WebSocket.__onFlashInitialized = function () {
        // We need to set a timeout here to avoid round-trip calls
        // to flash during the initialization process.
        setTimeout(function () {
            WebSocket.__flash = document.getElementById("webSocketFlash");
            WebSocket.__flash.setCallerUrl(location.href);
            WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
            for (var i = 0; i < WebSocket.__tasks.length; ++i) {
                WebSocket.__tasks[i]();
            }
            WebSocket.__tasks = [];
        }, 0);
    };

    /**
     * Called by Flash to notify WebSockets events are fired.
     */
    WebSocket.__onFlashEvent = function () {
        setTimeout(function () {
            try {
                // Gets events using receiveEvents() instead of getting it from event object
                // of Flash event. This is to make sure to keep message order.
                // It seems sometimes Flash events don't arrive in the same order as they are sent.
                var events = WebSocket.__flash.receiveEvents();
                for (var i = 0; i < events.length; ++i) {
                    WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
                }
            } catch (e) {
                logger.error(e);
            }
        }, 0);
        return true;
    };

    // Called by Flash.
    WebSocket.__log = function (message) {
        logger.log(decodeURIComponent(message));
    };

    // Called by Flash.
    WebSocket.__error = function (message) {
        logger.error(decodeURIComponent(message));
    };

    WebSocket.__addTask = function (task) {
        if (WebSocket.__flash) {
            task();
        } else {
            WebSocket.__tasks.push(task);
        }
    };

    /**
     * Test if the browser is running flash lite.
     * @return {boolean} True if flash lite is running, false otherwise.
     */
    WebSocket.__isFlashLite = function () {
        if (!window.navigator || !window.navigator.mimeTypes) {
            return false;
        }
        var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
        if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
            return false;
        }
        return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
    };

    if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
        // NOTE:
        //   This fires immediately if web_socket.js is dynamically loaded after
        //   the document is loaded.
        swfobject.addDomLoadEvent(function () {
            WebSocket.__initialize();
        });
    }

})();

//WEB_SOCKET_SWF_LOCATION = "js/web-socket-js-master/WebSocketMain.swf";

if (window.console && window.console.log && window.console.error) {
} else {
    window.console = {
        log: function () { },
        error: function () { }
    };
}



(function ($) {
    $.GxCcApi = function (options) {
        this.options = $.extend({
            debug: true,
            socketUrl: 'ws://172.24.29.21:34697',//ws://172.24.30.21:34697           ws://172.24.18.217:34696
            loginParams: {
                oper: null,
                pwd: null
            }
        }, options);

        this.ws = null;
        this.q = [];//临时保存websocket未打开时的消息发送请求
        this.callbacks = {};//保存用户回调函数
        this._connectSocket();
    };

    var DateFormat = (function () {
        var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
        var DEFAULT_PATTERN = 'yyyy-MM-dd';
        function padding(s, len) {
            var len = len - (s + '').length;
            for (var i = 0; i < len; i++) { s = '0' + s; }
            return s;
        };
        return ({
            format: function (date, pattern) {
                pattern = pattern || DEFAULT_PATTERN;
                return pattern.replace(SIGN_REGEXP, function ($0) {
                    switch ($0.charAt(0)) {
                        case 'y': return padding(date.getFullYear(), $0.length);
                        case 'M': return padding(date.getMonth() + 1, $0.length);
                        case 'd': return padding(date.getDate(), $0.length);
                        case 'w': return date.getDay() + 1;
                        case 'h': return padding(date.getHours(), $0.length);
                        case 'm': return padding(date.getMinutes(), $0.length);
                        case 's': return padding(date.getSeconds(), $0.length);
                    }
                });
            },
            parse: function (dateString, pattern) {
                var matchs1 = pattern.match(SIGN_REGEXP);
                var matchs2 = dateString.match(/(\d)+/g);
                if (matchs1.length == matchs2.length) {
                    var _date = new Date(1970, 0, 1);
                    for (var i = 0; i < matchs1.length; i++) {
                        var _int = parseInt(matchs2[i]);
                        var sign = matchs1[i];
                        switch (sign.charAt(0)) {
                            case 'y': _date.setFullYear(_int); break;
                            case 'M': _date.setMonth(_int - 1); break;
                            case 'd': _date.setDate(_int); break;
                            case 'h': _date.setHours(_int); break;
                            case 'm': _date.setMinutes(_int); break;
                            case 's': _date.setSeconds(_int); break;
                        }
                    }
                    return _date;
                }
                return null;
            }
        });
    })();



    $.GxCcApi.prototype._connectSocket = function () {
        var me = this;
        if (me.timerConn) {
            clearTimeout(me.timerConn);
        }

        if (!me._socketReady()) {
            if (!me.options.socketUrl || me.options.socketUrl == '') {
                return;
            }
            if (window.WebSocket) {
                me.ws = new WebSocket(me.options.socketUrl);
            } else if (window.MozWebSocket) {// Firefox.
                me.ws = new MozWebSocket(me.options.socketUrl);
            } else {
                alert('浏览器不支持WebSocket');
                return;
            }

            me.ws.onopen = function (open) {
                if (me.timerConn) {
                    clearTimeout(me.timerConn);
                }
                me.ws_sleep = 1000;
                me.ws_cnt = 0;

                //if (me.options.onopen) {
                //    me.options.onopen(me, arguments);
                //}

                var req;
                // Send the requests.
                while ((req = me.q.pop())) {
                    me._send(req);
                }
            };

            me.ws.onclose = function (CloseEvent) {
                if (confirm('网络异常，是否重新连接？')) {
                    console.log("Attempting Reconnection....");
                    me._connectSocket();
                }

                //if (!me.ws_sleep) {
                //    me.ws_sleep = 1000;
                //}
                //if (me.ws_cnt === undefined) {
                //    me.ws_cnt = 0;
                //}

                //console.error("Websocket Lost " + me.ws_cnt + " sleep: " + me.ws_sleep + "msec");

                //if (me.ws_cnt >= 30) {
                //    alert('无法连接服务器，请检查网络是否正常');
                //    me.ws_cnt = 0;
                //    return false;
                //}

                //me.timerConn = setTimeout(function () {
                //    console.log("Attempting Reconnection....");
                //    me._connectSocket();
                //}, me.ws_sleep);

                //me.ws_cnt++;

                //if (me.ws_sleep < 3000 && (me.ws_cnt % 10) === 0) {
                //    me.ws_sleep += 1000;
                //}

            };

            me.ws.onmessage = function (MessageEvent) {
                //https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent
                //console.log(MessageEvent.data);
                if (me.options.debug) {
                    console.log(DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss') + ' return message：' + MessageEvent.data);
                }
                //console.log(MessageEvent.origin);
                //console.log(MessageEvent.ports);
                //console.log(MessageEvent.source);


                //...
                //if (me.options.onmessage) {
                //    me.options.onmessage(me, arguments);
                //}
                //...

                var data = MessageEvent.data.replace(/\n/g, '').split(';');
                if (data.length > 0) {
                    switch (data[0]) {
                        case 'R_LOGIN'://登录  R_LOGIN;1(1-正常 0-失败)
                            if (typeof me.callbacks.login == 'function' && data.length > 1) {
                                me.callbacks.login.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_LOGOUT'://退出  R_LOGOUT;1(1-正常 0-失败)
                            if (typeof me.callbacks.logout == 'function' && data.length > 1) {
                                me.callbacks.logout.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_DIAL'://坐席外呼  R_DIAL;1(1:正在拨号，2：回铃，3：忙音，4：空号，5：应答，6：挂机 7:取消 8:线路故障);系统录音编号
                            if (typeof me.callbacks.dial == 'function' && data.length > 1) {
                                var dialRecid = '';//录音编号
                                if (data.length > 2)
                                    dialRecid = data[2];
                                me.callbacks.dial.apply(me, [{ status: parseInt(data[1]), recid: dialRecid }]);
                            }
                            break;
                        case 'R_CALLIN'://来电弹屏  R_CALLIN;主叫号码;被叫号码;工单号;语言;业务类别;身份证;验身结果
                            if (typeof me.callbacks.callin == 'function' && data.length > 3) {
                                var callinPid = '', callinPidValid = 0;
                                if (data.length > 6)
                                    callinPid = data[6];
                                if (data.length > 7)
                                    callinPidValid = data[7];
                                me.callbacks.callin.apply(me, [{
                                    caller: data[1],
                                    called: data[2],
                                    recid: data[3],
                                    oper: me.options.loginParams.oper,
                                    pid: callinPid,
                                    status: callinPidValid
                                }]);
                            }
                            break;
                        case 'R_ONHOOK'://坐席挂机  R_ONHOOK;1(1-正常 0-失败)
                            if (typeof me.callbacks.onhook == 'function' && data.length > 1) {
                                me.callbacks.onhook.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_OFFHOOK'://来电应答  R_OFFHOOK;1(1-正常 0-失败)
                            if (typeof me.callbacks.offhook == 'function' && data.length > 1) {
                                me.callbacks.offhook.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_HANGUP'://注册挂机通知事件  R_HNAGUP;1(1-用户主动挂机 0-坐席挂机)
                            if (typeof me.callbacks.hangup == 'function' && data.length > 1) {
                                me.callbacks.hangup.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_BUSY'://坐席示闲/示忙/外出/暂停服务/小休/会议/培训/辅导/考试/就餐/话后处理  R_BUSY;1(1-正常 0-失败)
                            if (typeof me.callbacks.busy == 'function' && data.length > 2) {
                                me.callbacks.busy.apply(me, [{ type: data[1], status: parseInt(data[2]) }]);
                            }
                            break;
                        case 'R_MUTE'://静音  R_MUTE;1(1-正常 0-失败)
                            if (typeof me.callbacks.mute == 'function' && data.length > 1) {
                                me.callbacks.mute.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_MONITOR'://坐席监听  R_MONITOR;1(1-正常 0-失败)
                            if (typeof me.callbacks.monitor == 'function' && data.length > 1) {
                                me.callbacks.monitor.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_STOPMONITOR'://停止监听  R_STOPMONITOR;1(1-正常 0-失败)
                            if (typeof me.callbacks.stopmonitor == 'function' && data.length > 1) {
                                me.callbacks.stopmonitor.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_PLAYFLOW':
                            //身份验证  R_PLAYFLOW;PIDCHK;1(1-正常 0-失败); pid: 用户在IVR中输入的身份证号码
                            //手机动态密码验证 R_PLAYFLOW;SMSVERIFY;1(1-正常 0-失败)
                            if (data.length > 1) {
                                if (data[1] == 'PIDCHK') {
                                    if (typeof me.callbacks.checkpid == 'function' && data.length > 3) {
                                        me.callbacks.checkpid.apply(me, [{ status: parseInt(data[2]), pid: data[3] }]);
                                    }
                                } else if (data[1] == 'SMSVERIFY') {
                                    if (typeof me.callbacks.smsverify == 'function' && data.length > 2) {
                                        me.callbacks.smsverify.apply(me, [{ status: parseInt(data[2]) }]);
                                    }
                                } else if (data[1] == 'APPROVE') {
                                    if (typeof me.callbacks.approve == 'function' && data.length > 2) {
                                        me.callbacks.approve.apply(me, [{ status: parseInt(data[2]) }]);
                                    }
                                } else if (data[1] == 'ACDOFF') {
                                    if (typeof me.callbacks.acdoff == 'function' && data.length > 2) {
                                        me.callbacks.acdoff.apply(me, [{ status: parseInt(data[2]) }]);
                                    }
                                }
                            }
                            break;
                        case 'R_PLAYREC'://播放录音  R_PLAYREC;1(1-正常 0-失败)
                            if (typeof me.callbacks.playrec == 'function' && data.length > 1) {
                                me.callbacks.playrec.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_STOPPLAYREC'://停止播放录音  R_PLAYREC;1(1-正常 0-失败)
                            if (typeof me.callbacks.stopplayrec == 'function' && data.length > 1) {
                                me.callbacks.stopplayrec.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_TRANOPER'://转工号  R_TRANOPER;1(1-正常 0-失败)
                            if (typeof me.callbacks.tranoper == 'function' && data.length > 1) {
                                me.callbacks.tranoper.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        case 'R_TRANGROUP'://转队列  R_TRANGROUP;1(1-正常 0-失败)
                            if (typeof me.callbacks.trangroup == 'function' && data.length > 1) {
                                me.callbacks.trangroup.apply(me, [{ status: parseInt(data[1]) }]);
                            }
                            break;
                        default:
                            break;
                    }
                }
            };

            me.ws.onerror = function (error) {
                //...
                //if (me.options.onerror) {
                //    me.options.onerror(me, arguments);
                //}
                //...

            };
        }

    };

    $.GxCcApi.prototype._close = function () {
        var me = this;

        if (me._socketReady()) {
            me.ws.onclose = function (w) { console.log("Closing Socket"); };
            me.ws.close();
        }
    };

    $.GxCcApi.prototype._send = function (message, success, error) {
        var me = this;
        //message = message + '\n';
        //message = JSON.parse(message);
        if (message === '' || message === null) {
            return;
        }

        if (!me._socketReady()) {//未开启
            me.q.push(message);//临时保存消息
            //console.log(me.q);
            if (typeof error == 'function') {
                error.apply(me, [{ errMsg: '连接还没开启' }]);
            }

            console.log("Attempting Reconnection....");
            me._connectSocket();
        } else {
            if (me.options.debug) {
                console.log(DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss') + ' send message：' + message);
            }
            me.ws.send(message);

            if (typeof success == 'function') {
                success.apply(me);
            }
        }

    };



    //socket是否已开启
    $.GxCcApi.prototype._socketReady = function () {
        if (this.ws === null || this.ws.readyState > 1) {
            return false;
        }

        return true;
    };

    //开启/关闭调试
    $.GxCcApi.prototype.setDebug = function (bool) {
        if (Object.prototype.toString.call(bool) == '[object Boolean]')
            this.options.debug = bool;
    };



    //坐席登录
    $.GxCcApi.prototype.login = function (para) {
        var me = this;
        if (para.oper === undefined || para.pwd === undefined) {
            return;
        }

        me.options.loginParams.oper = para.oper;
        me.options.loginParams.pwd = para.pwd;

        //me._connectSocket();//打开websocket连接

        me.callbacks.login = para.callback;//保存用户回调函数

        //发送消息
        me._send('LOGIN;' + para.oper + ';' + para.pwd);

        //测试
        //setTimeout(function () {
        //    me.callbacks.login.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //坐席退出
    $.GxCcApi.prototype.logout = function (para) {
        var me = this;

        me.callbacks.logout = para.callback;

        //发送消息
        me._send('LOGOUT');

        //测试
        //setTimeout(function () {
        //    me.callbacks.logout.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //坐席外呼
    $.GxCcApi.prototype.dial = function (para) {
        var me = this;

        if (para.caller === undefined || para.called === undefined || para.recid === undefined || para.btype === undefined) {
            return;
        }

        me.callbacks.dial = para.callback;

        //发送消息
        me._send('DIAL;99;' + para.caller + ';' + para.called + ';' + para.recid + ';' + para.btype);

        //测试
        //setTimeout(function () {
        //    me.callbacks.dial.apply(me, [{ status: 1 }]);
        //    setTimeout(function () {
        //        me.callbacks.dial.apply(me, [{ status: 2 }]);
        //        setTimeout(function () {
        //            me.callbacks.dial.apply(me, [{ status: 3 }]);
        //            setTimeout(function () {
        //                me.callbacks.dial.apply(me, [{ status: 4 }]);
        //                setTimeout(function () {
        //                    me.callbacks.dial.apply(me, [{ status: 5 }]);
        //                    setTimeout(function () {
        //                        me.callbacks.dial.apply(me, [{ status: 6 }]);
        //                        setTimeout(function () {
        //                            me.callbacks.dial.apply(me, [{ status: 7 }]);
        //                            setTimeout(function () {
        //                                me.callbacks.dial.apply(me, [{ status: 8 }]);
        //                            }, 1000);
        //                        }, 1000);
        //                    }, 1000);
        //                }, 1000);
        //            }, 1000);
        //        }, 1000);
        //    }, 1000);
        //}, 1000);
    };

    //来电弹屏
    $.GxCcApi.prototype.callin = function (para) {
        var me = this;

        me.callbacks.callin = para.callback;

        //测试
        //setTimeout(function () {
        //    me.callbacks.callin.apply(me, [{
        //        caller: '13428898189',
        //        called: '12345678',
        //        recid: '123',
        //        oper: '工号1'
        //    }]);
        //}, 1000);
    };

    //坐席挂机
    $.GxCcApi.prototype.onhook = function (para) {
        var me = this;

        me.callbacks.onhook = para.callback;

        //发送消息
        me._send('ONHOOK');

        //测试
        //setTimeout(function () {
        //    me.callbacks.onhook.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //来电应答
    $.GxCcApi.prototype.offhook = function (para) {
        var me = this;

        me.callbacks.offhook = para.callback;

        //发送消息
        me._send('OFFHOOK');

        //测试
        //setTimeout(function () {
        //    me.callbacks.offhook.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //注册挂机通知事件
    $.GxCcApi.prototype.hangup = function (para) {
        var me = this;

        me.callbacks.hangup = para.callback;

        //测试
        //setTimeout(function () {
        //    me.callbacks.hangup.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //坐席示闲/示忙/外出/暂停服务/小休/会议/培训/辅导/考试/就餐/话后处理
    $.GxCcApi.prototype.busy = function (para) {
        var me = this;

        if (para.status === undefined) {
            return;
        }

        me.callbacks.busy = para.callback;

        //发送消息
        me._send('BUSY;' + para.status);

        //测试
        //setTimeout(function () {
        //    me.callbacks.busy.apply(me, [{
        //        status: 1,
        //        type: para.status
        //    }]);
        //}, 1000);
    };

    //静音
    $.GxCcApi.prototype.mute = function (para) {
        var me = this;

        if (para.status === undefined) {
            return;
        }

        me.callbacks.mute = para.callback;

        //发送消息
        me._send('MUTE;' + para.status);

        //测试
        //setTimeout(function () {
        //    me.callbacks.mute.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //坐席监听
    $.GxCcApi.prototype.monitor = function (para) {
        var me = this;

        if (para.oper === undefined) {
            return;
        }

        me.callbacks.monitor = para.callback;

        //发送消息
        me._send('MONITOR;' + para.oper);

        //测试
        //setTimeout(function () {
        //    me.callbacks.monitor.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //停止监听
    $.GxCcApi.prototype.stopmonitor = function (para) {
        var me = this;

        if (para.oper === undefined) {
            return;
        }

        me.callbacks.stopmonitor = para.callback;

        //发送消息
        me._send('STOPMONITOR');

        //测试
        //setTimeout(function () {
        //    me.callbacks.stopmonitor.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //身份验证
    $.GxCcApi.prototype.checkpid = function (para) {
        var me = this;

        if (para.name === undefined) {
            return;
        }

        me.callbacks.checkpid = para.callback;

        //发送消息
        me._send('PLAYFLOW;PIDCHK|' + para.name);

        //测试
        //setTimeout(function () {
        //    me.callbacks.checkpid.apply(me, [{ status: 1, pid: '11111111111111111' }]);
        //}, 1000);
    };

    //手机动态密码验证
    $.GxCcApi.prototype.smsverify = function (para) {
        var me = this;
        if (para.name === undefined) {
            return;
        }
        me.callbacks.smsverify = para.callback;
        me._send('PLAYFLOW;SMSVERIFY|' + para.name);
        //测试
        //setTimeout(function () {
        //    me.callbacks.smsverify.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //满意度调查
    $.GxCcApi.prototype.approve = function (para) {
        var me = this;

        me.callbacks.approve = para.callback;
        me._send('PLAYFLOW;APPROVE');
        //测试
        //setTimeout(function () {
        //    me.callbacks.approve.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //强制签出工号
    $.GxCcApi.prototype.acdoff = function (para) {
        if (para.oper === '' || para.oper === undefined) {
            return;
        }
        var me = this;
        me.callbacks.acdoff = para.callback;
        me._send('PLAYFLOW;ACDOFF|' + para.oper);
    };

    //播放录音
    $.GxCcApi.prototype.playrec = function (para) {
        var me = this;
        if (para.recurl === '' || para.recurl === undefined) {
            return;
        }
        me.callbacks.playrec = para.callback;
        me._send('PLAYREC;' + para.recurl);
        //测试
        //setTimeout(function () {
        //    me.callbacks.playrec.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //停止播放录音
    $.GxCcApi.prototype.stopplayrec = function (para) {
        var me = this;

        me.callbacks.stopplayrec = para.callback;
        me._send('STOPPLAYREC');
        //测试
        //setTimeout(function () {
        //    me.callbacks.stopplayrec.apply(me, [{ status: 1 }]);
        //}, 1000);
    };

    //转工号
    $.GxCcApi.prototype.tranoper = function (para) {
        if (para.oper === '' || para.oper === undefined) {
            return;
        }
        var me = this;
        me.callbacks.tranoper = para.callback;
        me._send('TRANOPER;' + para.oper);
    };

    //转队列
    $.GxCcApi.prototype.trangroup = function (para) {
        if (para.group === '' || para.group === undefined) {
            return;
        }
        var me = this;
        me.callbacks.trangroup = para.callback;
        me._send('TRANGROUP;' + para.group);
    };

})(jQuery);