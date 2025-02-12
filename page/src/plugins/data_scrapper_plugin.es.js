class ee {
  container;
  button;
  lockButton;
  isDragging = !1;
  offset = { x: 0, y: 0 };
  isLocked = !1;
  position = { top: 20, left: 20 };
  constructor(s, a = { top: 20, left: 20 }) {
    const w = localStorage.getItem("buttonPosition");
    this.position = w ? JSON.parse(w) : a, this.container = document.createElement("div"), this.container.style.position = "fixed", this.container.style.display = "inline-block", this.container.style.top = `${this.position.top}px`, this.container.style.left = `${this.position.left}px`, this.button = document.createElement("button"), this.button.textContent = s, this.button.style.padding = "5px", this.button.style.backgroundColor = "#fff", this.button.style.border = "1px solid #FB8C01", this.button.style.color = "#333333", this.button.style.border = "none", this.button.style.cursor = "grab", this.button.style.fontSize = "20px", this.button.style.userSelect = "none", this.button.style.borderRadius = "20px", this.button.style.overflow = "hidden", this.lockButton = document.createElement("button"), this.lockButton.textContent = "🔒", this.lockButton.style.padding = "10px", this.lockButton.style.marginLeft = "5px", this.lockButton.style.backgroundColor = "#fff", this.lockButton.style.border = "1px solid #FB8C01", this.lockButton.style.color = "#fff", this.lockButton.style.border = "none", this.lockButton.style.borderRadius = "50%", this.lockButton.style.cursor = "pointer", this.lockButton.style.fontSize = "20px", this.container.appendChild(this.button), this.container.appendChild(this.lockButton), document.body.appendChild(this.container), this.attachEvents();
  }
  attachEvents() {
    this.container.addEventListener("mousedown", (s) => this.onMouseDown(s)), this.container.addEventListener("mousemove", (s) => this.onMouseMove(s)), this.container.addEventListener("mouseup", () => this.onMouseUp()), this.lockButton.addEventListener("click", () => this.onLockButtonClick());
  }
  onLockButtonClick() {
    this.isLocked = !this.isLocked, this.lockButton.textContent = this.isLocked ? "🔒" : "🔓", this.lockButton.style.backgroundColor = this.isLocked ? "#FB8C01" : "#FFFFFF", this.button.style.pointerEvents = this.isLocked ? "none" : "auto";
  }
  onMouseDown(s) {
    this.isLocked || (this.isDragging = !0, this.offset.x = s.clientX - this.container.getBoundingClientRect().left, this.offset.y = s.clientY - this.container.getBoundingClientRect().top, this.button.style.cursor = "grabbing");
  }
  onMouseMove(s) {
    !this.isDragging || this.isLocked || (this.container.style.left = `${s.clientX - this.offset.x}px`, this.container.style.top = `${s.clientY - this.offset.y}px`);
  }
  onMouseUp() {
    this.isDragging = !1, this.button.style.cursor = "grab", localStorage.setItem("buttonPosition", JSON.stringify({
      top: parseFloat(this.container.style.top),
      left: parseFloat(this.container.style.left)
    }));
  }
  // private adjustPosition() {
  //   if (this.position) {
  //     const { top, left } = this.position
  //     const windowWidth = window.innerWidth;
  //     const windowHeight = window.innerHeight;
  //     this.container.style.left = `${(left / 100) * windowWidth}px`
  //     this.container.style.top = `${(top / 100) * windowHeight}px`
  //   }
  // }
  createButton() {
    return this.container;
  }
}
var te = "2.0.2", Ci = 500, Ii = "user-agent", q = "", Mi = "?", ci = "function", M = "undefined", V = "object", Oi = "string", g = "browser", O = "cpu", A = "device", x = "engine", y = "os", N = "result", t = "name", i = "type", o = "vendor", n = "version", v = "architecture", oi = "major", e = "model", ei = "console", d = "mobile", f = "tablet", m = "smarttv", E = "wearable", fi = "xr", ti = "embedded", $ = "inapp", Ri = "brands", P = "formFactors", Ti = "fullVersionList", z = "platform", Bi = "platformVersion", ui = "bitness", D = "sec-ch-ua", oe = D + "-full-version-list", ne = D + "-arch", re = D + "-" + ui, se = D + "-form-factors", ae = D + "-" + d, le = D + "-" + e, Ji = D + "-" + z, ce = Ji + "-version", Ki = [Ri, Ti, d, e, z, Bi, v, P, ui], si = "Amazon", U = "Apple", Di = "ASUS", Hi = "BlackBerry", H = "Google", Pi = "Huawei", Ui = "Lenovo", Fi = "Honor", ai = "LG", pi = "Microsoft", mi = "Motorola", gi = "Nvidia", Ni = "OnePlus", vi = "OPPO", Y = "Samsung", zi = "Sharp", J = "Sony", ki = "Xiaomi", yi = "Zebra", qi = "Chrome", Vi = "Chromium", B = "Chromecast", de = "Edge", K = "Firefox", Z = "Opera", Gi = "Facebook", ji = "Sogou", F = "Mobile ", Q = " Browser", Si = "Windows", ue = typeof window !== M, k = ue && window.navigator ? window.navigator : void 0, L = k && k.userAgentData ? k.userAgentData : void 0, we = function(r, s) {
  var a = {}, w = s;
  if (!di(s)) {
    w = {};
    for (var c in s)
      for (var h in s[c])
        w[h] = s[c][h].concat(w[h] ? w[h] : []);
  }
  for (var l in r)
    a[l] = w[l] && w[l].length % 2 === 0 ? w[l].concat(r[l]) : r[l];
  return a;
}, wi = function(r) {
  for (var s = {}, a = 0; a < r.length; a++)
    s[r[a].toUpperCase()] = r[a];
  return s;
}, _i = function(r, s) {
  if (typeof r === V && r.length > 0) {
    for (var a in r)
      if (S(r[a]) == S(s)) return !0;
    return !1;
  }
  return j(r) ? S(s).indexOf(S(r)) !== -1 : !1;
}, di = function(r, s) {
  for (var a in r)
    return /^(browser|cpu|device|engine|os)$/.test(a) || (s ? di(r[a]) : !1);
}, j = function(r) {
  return typeof r === Oi;
}, xi = function(r) {
  if (r) {
    for (var s = [], a = G(/\\?\"/g, r).split(","), w = 0; w < a.length; w++)
      if (a[w].indexOf(";") > -1) {
        var c = ni(a[w]).split(";v=");
        s[w] = { brand: c[0], version: c[1] };
      } else
        s[w] = ni(a[w]);
    return s;
  }
}, S = function(r) {
  return j(r) ? r.toLowerCase() : r;
}, Ei = function(r) {
  return j(r) ? G(/[^\d\.]/g, r).split(".")[0] : void 0;
}, _ = function(r) {
  for (var s in r) {
    var a = r[s];
    typeof a == V && a.length == 2 ? this[a[0]] = a[1] : this[a] = void 0;
  }
  return this;
}, G = function(r, s) {
  return j(s) ? s.replace(r, q) : s;
}, ii = function(r) {
  return G(/\\?\"/g, r);
}, ni = function(r, s) {
  if (j(r))
    return r = G(/^\s\s*/, r), typeof s === M ? r : r.substring(0, Ci);
}, Ai = function(r, s) {
  if (!(!r || !s))
    for (var a = 0, w, c, h, l, b, u; a < s.length && !b; ) {
      var p = s[a], C = s[a + 1];
      for (w = c = 0; w < p.length && !b && p[w]; )
        if (b = p[w++].exec(r), b)
          for (h = 0; h < C.length; h++)
            u = b[++c], l = C[h], typeof l === V && l.length > 0 ? l.length === 2 ? typeof l[1] == ci ? this[l[0]] = l[1].call(this, u) : this[l[0]] = l[1] : l.length === 3 ? typeof l[1] === ci && !(l[1].exec && l[1].test) ? this[l[0]] = u ? l[1].call(this, u, l[2]) : void 0 : this[l[0]] = u ? u.replace(l[1], l[2]) : void 0 : l.length === 4 && (this[l[0]] = u ? l[3].call(this, u.replace(l[1], l[2])) : void 0) : this[l] = u || void 0;
      a += 2;
    }
}, I = function(r, s) {
  for (var a in s)
    if (typeof s[a] === V && s[a].length > 0) {
      for (var w = 0; w < s[a].length; w++)
        if (_i(s[a][w], r))
          return a === Mi ? void 0 : a;
    } else if (_i(s[a], r))
      return a === Mi ? void 0 : a;
  return s.hasOwnProperty("*") ? s["*"] : r;
}, Wi = {
  ME: "4.90",
  "NT 3.11": "NT3.51",
  "NT 4.0": "NT4.0",
  2e3: "NT 5.0",
  XP: ["NT 5.1", "NT 5.2"],
  Vista: "NT 6.0",
  7: "NT 6.1",
  8: "NT 6.2",
  "8.1": "NT 6.3",
  10: ["NT 6.4", "NT 10.0"],
  RT: "ARM"
}, Xi = {
  embedded: "Automotive",
  mobile: "Mobile",
  tablet: ["Tablet", "EInk"],
  smarttv: "TV",
  wearable: "Watch",
  xr: ["VR", "XR"],
  "?": ["Desktop", "Unknown"],
  "*": void 0
}, $i = {
  browser: [
    [
      // Most common regardless engine
      /\b(?:crmo|crios)\/([\w\.]+)/i
      // Chrome for Android/iOS
    ],
    [n, [t, F + "Chrome"]],
    [
      /edg(?:e|ios|a)?\/([\w\.]+)/i
      // Microsoft Edge
    ],
    [n, [t, "Edge"]],
    [
      // Presto based
      /(opera mini)\/([-\w\.]+)/i,
      // Opera Mini
      /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
      // Opera Mobi/Tablet
      /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      // Opera
    ],
    [t, n],
    [
      /opios[\/ ]+([\w\.]+)/i
      // Opera mini on iphone >= 8.0
    ],
    [n, [t, Z + " Mini"]],
    [
      /\bop(?:rg)?x\/([\w\.]+)/i
      // Opera GX
    ],
    [n, [t, Z + " GX"]],
    [
      /\bopr\/([\w\.]+)/i
      // Opera Webkit
    ],
    [n, [t, Z]],
    [
      // Mixed
      /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      // Baidu
    ],
    [n, [t, "Baidu"]],
    [
      /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      // Maxthon
    ],
    [n, [t, "Maxthon"]],
    [
      /(kindle)\/([\w\.]+)/i,
      // Kindle
      /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
      // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
      // Trident based
      /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
      // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
      /(?:ms|\()(ie) ([\w\.]+)/i,
      // Internet Explorer
      // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
      /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
      // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
      /(heytap|ovi|115)browser\/([\d\.]+)/i,
      // HeyTap/Ovi/115
      /(weibo)__([\d\.]+)/i
      // Weibo
    ],
    [t, n],
    [
      /quark(?:pc)?\/([-\w\.]+)/i
      // Quark
    ],
    [n, [t, "Quark"]],
    [
      /\bddg\/([\w\.]+)/i
      // DuckDuckGo
    ],
    [n, [t, "DuckDuckGo"]],
    [
      /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      // UCBrowser
    ],
    [n, [t, "UCBrowser"]],
    [
      /microm.+\bqbcore\/([\w\.]+)/i,
      // WeChat Desktop for Windows Built-in Browser
      /\bqbcore\/([\w\.]+).+microm/i,
      /micromessenger\/([\w\.]+)/i
      // WeChat
    ],
    [n, [t, "WeChat"]],
    [
      /konqueror\/([\w\.]+)/i
      // Konqueror
    ],
    [n, [t, "Konqueror"]],
    [
      /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      // IE11
    ],
    [n, [t, "IE"]],
    [
      /ya(?:search)?browser\/([\w\.]+)/i
      // Yandex
    ],
    [n, [t, "Yandex"]],
    [
      /slbrowser\/([\w\.]+)/i
      // Smart Lenovo Browser
    ],
    [n, [t, "Smart " + Ui + Q]],
    [
      /(avast|avg)\/([\w\.]+)/i
      // Avast/AVG Secure Browser
    ],
    [[t, /(.+)/, "$1 Secure" + Q], n],
    [
      /\bfocus\/([\w\.]+)/i
      // Firefox Focus
    ],
    [n, [t, K + " Focus"]],
    [
      /\bopt\/([\w\.]+)/i
      // Opera Touch
    ],
    [n, [t, Z + " Touch"]],
    [
      /coc_coc\w+\/([\w\.]+)/i
      // Coc Coc Browser
    ],
    [n, [t, "Coc Coc"]],
    [
      /dolfin\/([\w\.]+)/i
      // Dolphin
    ],
    [n, [t, "Dolphin"]],
    [
      /coast\/([\w\.]+)/i
      // Opera Coast
    ],
    [n, [t, Z + " Coast"]],
    [
      /miuibrowser\/([\w\.]+)/i
      // MIUI Browser
    ],
    [n, [t, "MIUI" + Q]],
    [
      /fxios\/([\w\.-]+)/i
      // Firefox for iOS
    ],
    [n, [t, F + K]],
    [
      /\bqihoobrowser\/?([\w\.]*)/i
      // 360
    ],
    [n, [t, "360"]],
    [
      /\b(qq)\/([\w\.]+)/i
      // QQ
    ],
    [[t, /(.+)/, "$1Browser"], n],
    [
      /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
    ],
    [[t, /(.+)/, "$1" + Q], n],
    [
      // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
      /samsungbrowser\/([\w\.]+)/i
      // Samsung Internet
    ],
    [n, [t, Y + " Internet"]],
    [
      /metasr[\/ ]?([\d\.]+)/i
      // Sogou Explorer
    ],
    [n, [t, ji + " Explorer"]],
    [
      /(sogou)mo\w+\/([\d\.]+)/i
      // Sogou Mobile
    ],
    [[t, ji + " Mobile"], n],
    [
      /(electron)\/([\w\.]+) safari/i,
      // Electron-based App
      /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
      // Tesla
      /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      // QQ/2345
    ],
    [t, n],
    [
      /(lbbrowser|rekonq)/i
      // LieBao Browser/Rekonq
    ],
    [t],
    [
      /ome\/([\w\.]+) \w* ?(iron) saf/i,
      // Iron
      /ome\/([\w\.]+).+qihu (360)[es]e/i
      // 360
    ],
    [n, t],
    [
      // WebView
      /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      // Facebook App for iOS & Android
    ],
    [[t, Gi], n, [i, $]],
    [
      /(Klarna)\/([\w\.]+)/i,
      // Klarna Shopping Browser for iOS & Android
      /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
      // Kakao App
      /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
      // Naver InApp
      /(daum)apps[\/ ]([\w\.]+)/i,
      // Daum App
      /safari (line)\/([\w\.]+)/i,
      // Line App for iOS
      /\b(line)\/([\w\.]+)\/iab/i,
      // Line App for Android
      /(alipay)client\/([\w\.]+)/i,
      // Alipay
      /(twitter)(?:and| f.+e\/([\w\.]+))/i,
      // Twitter
      /(instagram|snapchat)[\/ ]([-\w\.]+)/i
      // Instagram/Snapchat
    ],
    [t, n, [i, $]],
    [
      /\bgsa\/([\w\.]+) .*safari\//i
      // Google Search Appliance on iOS
    ],
    [n, [t, "GSA"], [i, $]],
    [
      /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      // TikTok
    ],
    [n, [t, "TikTok"], [i, $]],
    [
      /\[(linkedin)app\]/i
      // LinkedIn App for iOS & Android
    ],
    [t, [i, $]],
    [
      /(chromium)[\/ ]([-\w\.]+)/i
      // Chromium
    ],
    [t, n],
    [
      /headlesschrome(?:\/([\w\.]+)| )/i
      // Chrome Headless
    ],
    [n, [t, qi + " Headless"]],
    [
      / wv\).+(chrome)\/([\w\.]+)/i
      // Chrome WebView
    ],
    [[t, qi + " WebView"], n],
    [
      /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      // Android Browser
    ],
    [n, [t, "Android" + Q]],
    [
      /chrome\/([\w\.]+) mobile/i
      // Chrome Mobile
    ],
    [n, [t, F + "Chrome"]],
    [
      /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      // Chrome/OmniWeb/Arora/Tizen/Nokia
    ],
    [t, n],
    [
      /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      // Safari Mobile
    ],
    [n, [t, F + "Safari"]],
    [
      /iphone .*mobile(?:\/\w+ | ?)safari/i
    ],
    [[t, F + "Safari"]],
    [
      /version\/([\w\.\,]+) .*(safari)/i
      // Safari
    ],
    [n, t],
    [
      /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      // Safari < 3.0
    ],
    [t, [n, "1"]],
    [
      /(webkit|khtml)\/([\w\.]+)/i
    ],
    [t, n],
    [
      // Gecko based
      /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      // Firefox Mobile
    ],
    [[t, F + K], n],
    [
      /(navigator|netscape\d?)\/([-\w\.]+)/i
      // Netscape
    ],
    [[t, "Netscape"], n],
    [
      /(wolvic|librewolf)\/([\w\.]+)/i
      // Wolvic/LibreWolf
    ],
    [t, n],
    [
      /mobile vr; rv:([\w\.]+)\).+firefox/i
      // Firefox Reality
    ],
    [n, [t, K + " Reality"]],
    [
      /ekiohf.+(flow)\/([\w\.]+)/i,
      // Flow
      /(swiftfox)/i,
      // Swiftfox
      /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
      // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
      /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
      // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
      /(firefox)\/([\w\.]+)/i,
      // Other Firefox-based
      /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
      // Mozilla
      // Other
      /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
      // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
      /\b(links) \(([\w\.]+)/i
      // Links
    ],
    [t, [n, /_/g, "."]],
    [
      /(cobalt)\/([\w\.]+)/i
      // Cobalt
    ],
    [t, [n, /[^\d\.]+./, q]]
  ],
  cpu: [
    [
      /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      // AMD64 (x64)
    ],
    [[v, "amd64"]],
    [
      /(ia32(?=;))/i,
      // IA32 (quicktime)
      /\b((i[346]|x)86)(pc)?\b/i
      // IA32 (x86)
    ],
    [[v, "ia32"]],
    [
      /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      // ARM64
    ],
    [[v, "arm64"]],
    [
      /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      // ARMHF
    ],
    [[v, "armhf"]],
    [
      // PocketPC mistakenly identified as PowerPC
      /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
    ],
    [[v, "arm"]],
    [
      /((ppc|powerpc)(64)?)( mac|;|\))/i
      // PowerPC
    ],
    [[v, /ower/, q, S]],
    [
      / sun4\w[;\)]/i
      // SPARC
    ],
    [[v, "sparc"]],
    [
      /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
    ],
    [[v, S]]
  ],
  device: [
    [
      //////////////////////////
      // MOBILES & TABLETS
      /////////////////////////
      // Samsung
      /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
    ],
    [e, [o, Y], [i, f]],
    [
      /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
      /samsung[- ]((?!sm-[lr])[-\w]+)/i,
      /sec-(sgh\w+)/i
    ],
    [e, [o, Y], [i, d]],
    [
      // Apple
      /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      // iPod/iPhone
    ],
    [e, [o, U], [i, d]],
    [
      /\((ipad);[-\w\),; ]+apple/i,
      // iPad
      /applecoremedia\/[\w\.]+ \((ipad)/i,
      /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
    ],
    [e, [o, U], [i, f]],
    [
      /(macintosh);/i
    ],
    [e, [o, U]],
    [
      // Sharp
      /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
    ],
    [e, [o, zi], [i, d]],
    [
      // Honor
      /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
    ],
    [e, [o, Fi], [i, f]],
    [
      /honor([-\w ]+)[;\)]/i
    ],
    [e, [o, Fi], [i, d]],
    [
      // Huawei
      /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
    ],
    [e, [o, Pi], [i, f]],
    [
      /(?:huawei)([-\w ]+)[;\)]/i,
      /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
    ],
    [e, [o, Pi], [i, d]],
    [
      // Xiaomi
      /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
      /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      // Mi Pad tablets
    ],
    [[e, /_/g, " "], [o, ki], [i, f]],
    [
      /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
      // Xiaomi POCO
      /\b; (\w+) build\/hm\1/i,
      // Xiaomi Hongmi 'numeric' models
      /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
      // Xiaomi Hongmi
      /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
      // Xiaomi Redmi
      /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
      // Xiaomi Redmi 'numeric' models
      /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
      // Xiaomi Mi
      / ([\w ]+) miui\/v?\d/i
    ],
    [[e, /_/g, " "], [o, ki], [i, d]],
    [
      // OPPO
      /; (\w+) bui.+ oppo/i,
      /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
    ],
    [e, [o, vi], [i, d]],
    [
      /\b(opd2(\d{3}a?))(?: bui|\))/i
    ],
    [e, [o, I, { OnePlus: ["304", "403", "203"], "*": vi }], [i, f]],
    [
      // Vivo
      /vivo (\w+)(?: bui|\))/i,
      /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
    ],
    [e, [o, "Vivo"], [i, d]],
    [
      // Realme
      /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
    ],
    [e, [o, "Realme"], [i, d]],
    [
      // Motorola
      /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
      /\bmot(?:orola)?[- ](\w*)/i,
      /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
    ],
    [e, [o, mi], [i, d]],
    [
      /\b(mz60\d|xoom[2 ]{0,2}) build\//i
    ],
    [e, [o, mi], [i, f]],
    [
      // LG
      /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
    ],
    [e, [o, ai], [i, f]],
    [
      /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
      /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
      /\blg-?([\d\w]+) bui/i
    ],
    [e, [o, ai], [i, d]],
    [
      // Lenovo
      /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
      /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
    ],
    [e, [o, Ui], [i, f]],
    [
      // Nokia
      /(nokia) (t[12][01])/i
    ],
    [o, e, [i, f]],
    [
      /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
      /nokia[-_ ]?(([-\w\. ]*))/i
    ],
    [[e, /_/g, " "], [i, d], [o, "Nokia"]],
    [
      // Google
      /(pixel (c|tablet))\b/i
      // Google Pixel C/Tablet
    ],
    [e, [o, H], [i, f]],
    [
      /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
      // Google Pixel
    ],
    [e, [o, H], [i, d]],
    [
      // Sony
      /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
    ],
    [e, [o, J], [i, d]],
    [
      /sony tablet [ps]/i,
      /\b(?:sony)?sgp\w+(?: bui|\))/i
    ],
    [[e, "Xperia Tablet"], [o, J], [i, f]],
    [
      // OnePlus
      / (kb2005|in20[12]5|be20[12][59])\b/i,
      /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
    ],
    [e, [o, Ni], [i, d]],
    [
      // Amazon
      /(alexa)webm/i,
      /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
      // Kindle Fire without Silk / Echo Show
      /(kf[a-z]+)( bui|\)).+silk\//i
      // Kindle Fire HD
    ],
    [e, [o, si], [i, f]],
    [
      /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      // Fire Phone
    ],
    [[e, /(.+)/g, "Fire Phone $1"], [o, si], [i, d]],
    [
      // BlackBerry
      /(playbook);[-\w\),; ]+(rim)/i
      // BlackBerry PlayBook
    ],
    [e, o, [i, f]],
    [
      /\b((?:bb[a-f]|st[hv])100-\d)/i,
      /\(bb10; (\w+)/i
      // BlackBerry 10
    ],
    [e, [o, Hi], [i, d]],
    [
      // Asus
      /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
    ],
    [e, [o, Di], [i, f]],
    [
      / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
    ],
    [e, [o, Di], [i, d]],
    [
      // HTC
      /(nexus 9)/i
      // HTC Nexus 9
    ],
    [e, [o, "HTC"], [i, f]],
    [
      /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
      // HTC
      // ZTE
      /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
      /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
    ],
    [o, [e, /_/g, " "], [i, d]],
    [
      // TCL
      /tcl (xess p17aa)/i,
      /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [e, [o, "TCL"], [i, f]],
    [
      /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
    ],
    [e, [o, "TCL"], [i, d]],
    [
      // itel
      /(itel) ((\w+))/i
    ],
    [[o, S], e, [i, I, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
    [
      // Acer
      /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
    ],
    [e, [o, "Acer"], [i, f]],
    [
      // Meizu
      /droid.+; (m[1-5] note) bui/i,
      /\bmz-([-\w]{2,})/i
    ],
    [e, [o, "Meizu"], [i, d]],
    [
      // Ulefone
      /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
    ],
    [e, [o, "Ulefone"], [i, d]],
    [
      // Energizer
      /; (energy ?\w+)(?: bui|\))/i,
      /; energizer ([\w ]+)(?: bui|\))/i
    ],
    [e, [o, "Energizer"], [i, d]],
    [
      // Cat
      /; cat (b35);/i,
      /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
    ],
    [e, [o, "Cat"], [i, d]],
    [
      // Smartfren
      /((?:new )?andromax[\w- ]+)(?: bui|\))/i
    ],
    [e, [o, "Smartfren"], [i, d]],
    [
      // Nothing
      /droid.+; (a(?:015|06[35]|142p?))/i
    ],
    [e, [o, "Nothing"], [i, d]],
    [
      // MIXED
      /(imo) (tab \w+)/i,
      // IMO
      /(infinix) (x1101b?)/i
      // Infinix XPad
    ],
    [o, e, [i, f]],
    [
      /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
      // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
      /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
      // HMD/IMO
      /(hp) ([\w ]+\w)/i,
      // HP iPAQ
      /(microsoft); (lumia[\w ]+)/i,
      // Microsoft Lumia
      /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
      // Lenovo
      /(oppo) ?([\w ]+) bui/i
      // OPPO
    ],
    [o, e, [i, d]],
    [
      /(kobo)\s(ereader|touch)/i,
      // Kobo
      /(archos) (gamepad2?)/i,
      // Archos
      /(hp).+(touchpad(?!.+tablet)|tablet)/i,
      // HP TouchPad
      /(kindle)\/([\w\.]+)/i
      // Kindle
    ],
    [o, e, [i, f]],
    [
      /(surface duo)/i
      // Surface Duo
    ],
    [e, [o, pi], [i, f]],
    [
      /droid [\d\.]+; (fp\du?)(?: b|\))/i
      // Fairphone
    ],
    [e, [o, "Fairphone"], [i, d]],
    [
      /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      // Nvidia Tablets
    ],
    [e, [o, gi], [i, f]],
    [
      /(sprint) (\w+)/i
      // Sprint Phones
    ],
    [o, e, [i, d]],
    [
      /(kin\.[onetw]{3})/i
      // Microsoft Kin
    ],
    [[e, /\./g, " "], [o, pi], [i, d]],
    [
      /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      // Zebra
    ],
    [e, [o, yi], [i, f]],
    [
      /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
    ],
    [e, [o, yi], [i, d]],
    [
      ///////////////////
      // SMARTTVS
      ///////////////////
      /smart-tv.+(samsung)/i
      // Samsung
    ],
    [o, [i, m]],
    [
      /hbbtv.+maple;(\d+)/i
    ],
    [[e, /^/, "SmartTV"], [o, Y], [i, m]],
    [
      /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      // LG SmartTV
    ],
    [[o, ai], [i, m]],
    [
      /(apple) ?tv/i
      // Apple TV
    ],
    [o, [e, U + " TV"], [i, m]],
    [
      /crkey.*devicetype\/chromecast/i
      // Google Chromecast Third Generation
    ],
    [[e, B + " Third Generation"], [o, H], [i, m]],
    [
      /crkey.*devicetype\/([^/]*)/i
      // Google Chromecast with specific device type
    ],
    [[e, /^/, "Chromecast "], [o, H], [i, m]],
    [
      /fuchsia.*crkey/i
      // Google Chromecast Nest Hub
    ],
    [[e, B + " Nest Hub"], [o, H], [i, m]],
    [
      /crkey/i
      // Google Chromecast, Linux-based or unknown
    ],
    [[e, B], [o, H], [i, m]],
    [
      /droid.+aft(\w+)( bui|\))/i
      // Fire TV
    ],
    [e, [o, si], [i, m]],
    [
      /(shield \w+ tv)/i
      // Nvidia Shield TV
    ],
    [e, [o, gi], [i, m]],
    [
      /\(dtv[\);].+(aquos)/i,
      /(aquos-tv[\w ]+)\)/i
      // Sharp
    ],
    [e, [o, zi], [i, m]],
    [
      /(bravia[\w ]+)( bui|\))/i
      // Sony
    ],
    [e, [o, J], [i, m]],
    [
      /(mi(tv|box)-?\w+) bui/i
      // Xiaomi
    ],
    [e, [o, ki], [i, m]],
    [
      /Hbbtv.*(technisat) (.*);/i
      // TechniSAT
    ],
    [o, e, [i, m]],
    [
      /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
      // Roku
      /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      // HbbTV devices
    ],
    [[o, ni], [e, ni], [i, m]],
    [
      // SmartTV from Unidentified Vendors
      /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
    ],
    [e, [i, m]],
    [
      /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
    ],
    [[i, m]],
    [
      ///////////////////
      // CONSOLES
      ///////////////////
      /(ouya)/i,
      // Ouya
      /(nintendo) (\w+)/i
      // Nintendo
    ],
    [o, e, [i, ei]],
    [
      /droid.+; (shield)( bui|\))/i
      // Nvidia Portable
    ],
    [e, [o, gi], [i, ei]],
    [
      /(playstation \w+)/i
      // Playstation
    ],
    [e, [o, J], [i, ei]],
    [
      /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      // Microsoft Xbox
    ],
    [e, [o, pi], [i, ei]],
    [
      ///////////////////
      // WEARABLES
      ///////////////////
      /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      // Samsung Galaxy Watch
    ],
    [e, [o, Y], [i, E]],
    [
      /((pebble))app/i,
      // Pebble
      /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      // Asus ZenWatch / LG Watch / Pixel Watch
    ],
    [o, e, [i, E]],
    [
      /(ow(?:19|20)?we?[1-3]{1,3})/i
      // Oppo Watch
    ],
    [e, [o, vi], [i, E]],
    [
      /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      // Apple Watch
    ],
    [e, [o, U], [i, E]],
    [
      /(opwwe\d{3})/i
      // OnePlus Watch
    ],
    [e, [o, Ni], [i, E]],
    [
      /(moto 360)/i
      // Motorola 360
    ],
    [e, [o, mi], [i, E]],
    [
      /(smartwatch 3)/i
      // Sony SmartWatch
    ],
    [e, [o, J], [i, E]],
    [
      /(g watch r)/i
      // LG G Watch R
    ],
    [e, [o, ai], [i, E]],
    [
      /droid.+; (wt63?0{2,3})\)/i
    ],
    [e, [o, yi], [i, E]],
    [
      ///////////////////
      // XR
      ///////////////////
      /droid.+; (glass) \d/i
      // Google Glass
    ],
    [e, [o, H], [i, fi]],
    [
      /(pico) (4|neo3(?: link|pro)?)/i
      // Pico
    ],
    [o, e, [i, fi]],
    [
      /; (quest( \d| pro)?)/i
      // Oculus Quest
    ],
    [e, [o, Gi], [i, fi]],
    [
      ///////////////////
      // EMBEDDED
      ///////////////////
      /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      // Tesla
    ],
    [o, [i, ti]],
    [
      /(aeobc)\b/i
      // Echo Dot
    ],
    [e, [o, si], [i, ti]],
    [
      /(homepod).+mac os/i
      // Apple HomePod
    ],
    [e, [o, U], [i, ti]],
    [
      /windows iot/i
    ],
    [[i, ti]],
    [
      ////////////////////
      // MIXED (GENERIC)
      ///////////////////
      /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
    ],
    [e, [i, I, { mobile: "Mobile", xr: "VR", "*": f }]],
    [
      /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      // Unidentifiable Tablet
    ],
    [[i, f]],
    [
      /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      // Unidentifiable Mobile
    ],
    [[i, d]],
    [
      /droid .+?; ([\w\. -]+)( bui|\))/i
      // Generic Android Device
    ],
    [e, [o, "Generic"]]
  ],
  engine: [
    [
      /windows.+ edge\/([\w\.]+)/i
      // EdgeHTML
    ],
    [n, [t, de + "HTML"]],
    [
      /(arkweb)\/([\w\.]+)/i
      // ArkWeb
    ],
    [t, n],
    [
      /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      // Blink
    ],
    [n, [t, "Blink"]],
    [
      /(presto)\/([\w\.]+)/i,
      // Presto
      /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
      // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
      /ekioh(flow)\/([\w\.]+)/i,
      // Flow
      /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
      // KHTML/Tasman/Links
      /(icab)[\/ ]([23]\.[\d\.]+)/i,
      // iCab
      /\b(libweb)/i
      // LibWeb
    ],
    [t, n],
    [
      /ladybird\//i
    ],
    [[t, "LibWeb"]],
    [
      /rv\:([\w\.]{1,9})\b.+(gecko)/i
      // Gecko
    ],
    [n, t]
  ],
  os: [
    [
      // Windows
      /microsoft (windows) (vista|xp)/i
      // Windows (iTunes)
    ],
    [t, n],
    [
      /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
      // Windows Phone
    ],
    [t, [n, I, Wi]],
    [
      /windows nt 6\.2; (arm)/i,
      // Windows RT
      /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
      /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
    ],
    [[n, I, Wi], [t, Si]],
    [
      // iOS/macOS
      /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
      // iOS
      /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
      /cfnetwork\/.+darwin/i
    ],
    [[n, /_/g, "."], [t, "iOS"]],
    [
      /(mac os x) ?([\w\. ]*)/i,
      /(macintosh|mac_powerpc\b)(?!.+haiku)/i
      // Mac OS
    ],
    [[t, "macOS"], [n, /_/g, "."]],
    [
      // Google Chromecast
      /android ([\d\.]+).*crkey/i
      // Google Chromecast, Android-based
    ],
    [n, [t, B + " Android"]],
    [
      /fuchsia.*crkey\/([\d\.]+)/i
      // Google Chromecast, Fuchsia-based
    ],
    [n, [t, B + " Fuchsia"]],
    [
      /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      // Google Chromecast, Linux-based Smart Speaker
    ],
    [n, [t, B + " SmartSpeaker"]],
    [
      /linux.*crkey\/([\d\.]+)/i
      // Google Chromecast, Legacy Linux-based
    ],
    [n, [t, B + " Linux"]],
    [
      /crkey\/([\d\.]+)/i
      // Google Chromecast, unknown
    ],
    [n, [t, B]],
    [
      // Mobile OSes
      /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
      // Android-x86/HarmonyOS
    ],
    [n, t],
    [
      /(ubuntu) ([\w\.]+) like android/i
      // Ubuntu Touch
    ],
    [[t, /(.+)/, "$1 Touch"], n],
    [
      // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
      /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
    ],
    [t, n],
    [
      /\(bb(10);/i
      // BlackBerry 10
    ],
    [n, [t, Hi]],
    [
      /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      // Symbian
    ],
    [n, [t, "Symbian"]],
    [
      /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      // Firefox OS
    ],
    [n, [t, K + " OS"]],
    [
      /web0s;.+rt(tv)/i,
      /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
      // WebOS
    ],
    [n, [t, "webOS"]],
    [
      /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      // watchOS
    ],
    [n, [t, "watchOS"]],
    [
      // Google ChromeOS
      /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      // Chromium OS
    ],
    [[t, "Chrome OS"], n],
    [
      // Smart TVs
      /panasonic;(viera)/i,
      // Panasonic Viera
      /(netrange)mmh/i,
      // Netrange
      /(nettv)\/(\d+\.[\w\.]+)/i,
      // NetTV
      // Console
      /(nintendo|playstation) (\w+)/i,
      // Nintendo/Playstation
      /(xbox); +xbox ([^\);]+)/i,
      // Microsoft Xbox (360, One, X, S, Series X, Series S)
      /(pico) .+os([\w\.]+)/i,
      // Pico
      // Other
      /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
      // Joli/Palm
      /(mint)[\/\(\) ]?(\w*)/i,
      // Mint
      /(mageia|vectorlinux)[; ]/i,
      // Mageia/VectorLinux
      /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
      // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
      /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
      // Hurd/Linux
      /(gnu) ?([\w\.]*)/i,
      // GNU
      /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
      // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
      /(haiku) (\w+)/i
      // Haiku
    ],
    [t, n],
    [
      /(sunos) ?([\w\.\d]*)/i
      // Solaris
    ],
    [[t, "Solaris"], n],
    [
      /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
      // Solaris
      /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
      // AIX
      /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
      // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
      /(unix) ?([\w\.]*)/i
      // UNIX
    ],
    [t, n]
  ]
}, li = function() {
  var r = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
  return _.call(r.init, [
    [g, [t, n, oi, i]],
    [O, [v]],
    [A, [i, e, o]],
    [x, [t, n]],
    [y, [t, n]]
  ]), _.call(r.isIgnore, [
    [g, [n, oi]],
    [x, [n]],
    [y, [n]]
  ]), _.call(r.isIgnoreRgx, [
    [g, / ?browser$/i],
    [y, / ?os$/i]
  ]), _.call(r.toString, [
    [g, [t, n]],
    [O, [v]],
    [A, [o, e]],
    [x, [t, n]],
    [y, [t, n]]
  ]), r;
}(), be = function(r, s) {
  var a = li.init[s], w = li.isIgnore[s] || 0, c = li.isIgnoreRgx[s] || 0, h = li.toString[s] || 0;
  function l() {
    _.call(this, a);
  }
  return l.prototype.getItem = function() {
    return r;
  }, l.prototype.withClientHints = function() {
    return L ? L.getHighEntropyValues(Ki).then(function(b) {
      return r.setCH(new Zi(b, !1)).parseCH().get();
    }) : r.parseCH().get();
  }, l.prototype.withFeatureCheck = function() {
    return r.detectFeature().get();
  }, s != N && (l.prototype.is = function(b) {
    var u = !1;
    for (var p in this)
      if (this.hasOwnProperty(p) && !_i(w, p) && S(c ? G(c, this[p]) : this[p]) == S(c ? G(c, b) : b)) {
        if (u = !0, b != M) break;
      } else if (b == M && u) {
        u = !u;
        break;
      }
    return u;
  }, l.prototype.toString = function() {
    var b = q;
    for (var u in h)
      typeof this[h[u]] !== M && (b += (b ? " " : q) + this[h[u]]);
    return b || M;
  }), L || (l.prototype.then = function(b) {
    var u = this, p = function() {
      for (var T in u)
        u.hasOwnProperty(T) && (this[T] = u[T]);
    };
    p.prototype = {
      is: l.prototype.is,
      toString: l.prototype.toString
    };
    var C = new p();
    return b(C), C;
  }), new l();
};
function Zi(r, s) {
  if (r = r || {}, _.call(this, Ki), s)
    _.call(this, [
      [Ri, xi(r[D])],
      [Ti, xi(r[oe])],
      [d, /\?1/.test(r[ae])],
      [e, ii(r[le])],
      [z, ii(r[Ji])],
      [Bi, ii(r[ce])],
      [v, ii(r[ne])],
      [P, xi(r[se])],
      [ui, ii(r[re])]
    ]);
  else
    for (var a in r)
      this.hasOwnProperty(a) && typeof r[a] !== M && (this[a] = r[a]);
}
function Yi(r, s, a, w) {
  return this.get = function(c) {
    return c ? this.data.hasOwnProperty(c) ? this.data[c] : void 0 : this.data;
  }, this.set = function(c, h) {
    return this.data[c] = h, this;
  }, this.setCH = function(c) {
    return this.uaCH = c, this;
  }, this.detectFeature = function() {
    if (k && k.userAgent == this.ua)
      switch (this.itemType) {
        case g:
          k.brave && typeof k.brave.isBrave == ci && this.set(t, "Brave");
          break;
        case A:
          !this.get(i) && L && L[d] && this.set(i, d), this.get(e) == "Macintosh" && k && typeof k.standalone !== M && k.maxTouchPoints && k.maxTouchPoints > 2 && this.set(e, "iPad").set(i, f);
          break;
        case y:
          !this.get(t) && L && L[z] && this.set(t, L[z]);
          break;
        case N:
          var c = this.data, h = function(l) {
            return c[l].getItem().detectFeature().get();
          };
          this.set(g, h(g)).set(O, h(O)).set(A, h(A)).set(x, h(x)).set(y, h(y));
      }
    return this;
  }, this.parseUA = function() {
    return this.itemType != N && Ai.call(this.data, this.ua, this.rgxMap), this.itemType == g && this.set(oi, Ei(this.get(n))), this;
  }, this.parseCH = function() {
    var c = this.uaCH, h = this.rgxMap;
    switch (this.itemType) {
      case g:
      case x:
        var l = c[Ti] || c[Ri], b;
        if (l)
          for (var u in l) {
            var p = l[u].brand || l[u], C = l[u].version;
            this.itemType == g && !/not.a.brand/i.test(p) && (!b || /chrom/i.test(b) && p != Vi) && (p = I(p, {
              Chrome: "Google Chrome",
              Edge: "Microsoft Edge",
              "Chrome WebView": "Android WebView",
              "Chrome Headless": "HeadlessChrome"
            }), this.set(t, p).set(n, C).set(oi, Ei(C)), b = p), this.itemType == x && p == Vi && this.set(n, C);
          }
        break;
      case O:
        var T = c[v];
        T && (T && c[ui] == "64" && (T += "64"), Ai.call(this.data, T + ";", h));
        break;
      case A:
        if (c[d] && this.set(i, d), c[e] && (this.set(e, c[e]), !this.get(i) || !this.get(o))) {
          var W = {};
          Ai.call(W, "droid 9; " + c[e] + ")", h), !this.get(i) && W.type && this.set(i, W.type), !this.get(o) && W.vendor && this.set(o, W.vendor);
        }
        if (c[P]) {
          var ri;
          if (typeof c[P] != "string")
            for (var Li = 0; !ri && Li < c[P].length; )
              ri = I(c[P][Li++], Xi);
          else
            ri = I(c[P], Xi);
          this.set(i, ri);
        }
        break;
      case y:
        var bi = c[z];
        if (bi) {
          var hi = c[Bi];
          bi == Si && (hi = parseInt(Ei(hi), 10) >= 13 ? "11" : "10"), this.set(t, bi).set(n, hi);
        }
        this.get(t) == Si && c[e] == "Xbox" && this.set(t, "Xbox").set(n, void 0);
        break;
      case N:
        var Qi = this.data, X = function(ie) {
          return Qi[ie].getItem().setCH(c).parseCH().get();
        };
        this.set(g, X(g)).set(O, X(O)).set(A, X(A)).set(x, X(x)).set(y, X(y));
    }
    return this;
  }, _.call(this, [
    ["itemType", r],
    ["ua", s],
    ["uaCH", w],
    ["rgxMap", a],
    ["data", be(this, r)]
  ]), this;
}
function R(r, s, a) {
  if (typeof r === V ? (di(r, !0) ? (typeof s === V && (a = s), s = r) : (a = r, s = void 0), r = void 0) : typeof r === Oi && !di(s, !0) && (a = s, s = void 0), a && typeof a.append === ci) {
    var w = {};
    a.forEach(function(u, p) {
      w[p] = u;
    }), a = w;
  }
  if (!(this instanceof R))
    return new R(r, s, a).getResult();
  var c = typeof r === Oi ? r : (
    // Passed user-agent string
    a && a[Ii] ? a[Ii] : (
      // User-Agent from passed headers
      k && k.userAgent ? k.userAgent : (
        // navigator.userAgent
        q
      )
    )
  ), h = new Zi(a, !0), l = s ? we($i, s) : $i, b = function(u) {
    return u == N ? function() {
      return new Yi(u, c, l, h).set("ua", c).set(g, this.getBrowser()).set(O, this.getCPU()).set(A, this.getDevice()).set(x, this.getEngine()).set(y, this.getOS()).get();
    } : function() {
      return new Yi(u, c, l[u], h).parseUA().get();
    };
  };
  return _.call(this, [
    ["getBrowser", b(g)],
    ["getCPU", b(O)],
    ["getDevice", b(A)],
    ["getEngine", b(x)],
    ["getOS", b(y)],
    ["getResult", b(N)],
    ["getUA", function() {
      return c;
    }],
    ["setUA", function(u) {
      return j(u) && (c = u.length > Ci ? ni(u, Ci) : u), this;
    }]
  ]).setUA(c), this;
}
R.VERSION = te;
R.BROWSER = wi([t, n, oi, i]);
R.CPU = wi([v]);
R.DEVICE = wi([e, o, i, ei, d, m, f, E, ti]);
R.ENGINE = R.OS = wi([t, n]);
class he {
  parser;
  constructor() {
    this.parser = new R();
  }
  getOperatingSystem() {
    return this.parser.getOS().name || "Sistema operacional não identificado";
  }
  getDevice() {
    return this.parser.getDevice().type || "Dispositivo não identificado";
  }
  getDomain() {
    return window.location.origin;
  }
  getLocalData() {
    return localStorage.getItem("storedNumberOfClicksInThemeButton") || "Nenhum dado local encontrado";
  }
  scrap() {
    const s = {
      domain: this.getDomain(),
      device: this.getDevice(),
      system: this.getOperatingSystem(),
      themeClicks: this.getLocalData()
    };
    return console.log("Dados coletados: ", s), s;
  }
}
async function fe(r, s) {
  try {
    const a = await fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r)
    });
    if (!a.ok) throw new Error("Falha ao enviar dados para a API");
    return a;
  } catch (a) {
    console.error("Erro ao enviar dados:", a);
  }
}
const pe = {
  apiEndpoint: "https://api.exemplo.com/endpoint"
};
class me {
  button;
  constructor() {
    this.button = new ee("Iniciar extração", { top: 20, left: 20 }), this.injectButton(), this.addButtonEventListener();
  }
  injectButton() {
    document.body.appendChild(this.button.createButton());
  }
  addButtonEventListener() {
    this.button.createButton().addEventListener("click", async () => {
      try {
        const a = new he().scrap();
        if (!a)
          throw new Error("Não foi possível capturar dados!");
        if (!await fe(a, pe.apiEndpoint))
          throw new Error("Não foi possível enviar dados para a API!");
        console.log("Dados enviados com sucesso!");
      } catch (s) {
        console.error("Erro ao capturar dados:", s);
      }
    });
  }
}
new me();
export {
  me as DataScrapperPlugin
};
