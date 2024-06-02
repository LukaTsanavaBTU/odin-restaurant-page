(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,':root {\n    --system-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-family: var(--system-font);\n    --dark-blue: rgb(32, 44, 156);\n    --light-blue: rgb(61, 73, 187);\n    --dark-grey: rgb(80, 83, 94);\n    --home-image-width: 800px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    justify-content: space-between;\n    justify-items: center;\n    padding: 20px;\n    box-shadow: 0px 4px 15px -8px rgba(90,114,250,1);\n    button {\n        border: none;\n        background: none;\n        cursor: pointer;\n        font-size: 2rem;\n        font-family: var(--system-font);\n        color: var(--dark-blue);\n    }\n    img {\n        margin-left: 100px;\n        width: 80px;\n        filter: brightness(0) saturate(100%) invert(26%) sepia(13%) saturate(7492%) hue-rotate(214deg) brightness(82%) contrast(114%);\n        justify-self: self-start;\n    }\n}\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.home-div-wrapper {\n    width: calc(var(--home-image-width) + 30px);\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 500;\n        color: var(--dark-blue);\n        margin: 0;\n    }\n    p {\n        color: var(--dark-grey);\n    }\n    img {\n        border-radius: 10px;\n        width: calc(var(--home-image-width)/2);\n    };\n    .home-buttons {\n        display: flex;\n        gap: 20px;\n    }\n    button {\n        width: 150px;\n        border: none;\n        background-color: var(--dark-blue);\n        border-radius: 20px;\n        cursor: pointer;\n        font-family: var(--system-font);\n        font-size: 1rem;\n        font-weight: 600;\n        padding: 10px 5px;\n        &:first-child {\n            background-color: var(--dark-blue);\n            color: white;\n            &:hover {\n                background-color: rgb(58, 71, 184);\n            }\n        }\n        &:last-child {\n            background-color: rgb(208, 208, 211);\n            color: rgb(17, 16, 20);\n            &:hover {\n                background-color: rgb(231, 232, 235);\n            }\n        }\n    }\n}\n\n.menu-wrapper {\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    gap: 50px;\n    div {\n        display: grid;\n        grid-auto-flow: column;\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto auto auto;\n        column-gap: 50px;\n        border: 1px solid rgba(61, 74, 187, 0.247);\n        border-radius: 5px;\n    }\n    h2, p {\n        margin: 0;\n        padding: 0;\n        padding-left: 20px;\n    }\n    h2 {\n        font-size: 1.5rem;\n        font-weight: 600;\n        color: var(--dark-blue);\n        padding-top: 20px;\n    }\n    p {\n        color: var(--dark-grey);\n    }\n    p:last-of-type {\n        color: var(--dark-blue);\n        padding-bottom: 20px;\n    }\n    img {\n        grid-row: 1 / -1;\n        height: 200px;\n        border-radius: 0 5px 5px 0;\n    }\n}\n\n.about-wrapper {\n    text-align: center;\n    padding: 30px;\n    width: 100%;\n    background-color: var(--dark-blue);\n    p {\n        font-size: 1.5rem;\n        color: white\n    }\n    img {\n        width: 300px;\n        border-radius: 10px;\n        border: 2px solid white;\n    }\n}\n',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,oIAAoI;IACpI,+BAA+B;IAC/B,6BAA6B;IAC7B,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;IACb,gDAAgD;IAChD;QACI,YAAY;QACZ,gBAAgB;QAChB,eAAe;QACf,eAAe;QACf,+BAA+B;QAC/B,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,WAAW;QACX,6HAA6H;QAC7H,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,2CAA2C;IAC3C,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT;QACI,iBAAiB;QACjB,gBAAgB;QAChB,uBAAuB;QACvB,SAAS;IACb;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,mBAAmB;QACnB,sCAAsC;IAC1C,CAAA;IACA;QACI,aAAa;QACb,SAAS;IACb;IACA;QACI,YAAY;QACZ,YAAY;QACZ,kCAAkC;QAClC,mBAAmB;QACnB,eAAe;QACf,+BAA+B;QAC/B,eAAe;QACf,gBAAgB;QAChB,iBAAiB;QACjB;YACI,kCAAkC;YAClC,YAAY;YACZ;gBACI,kCAAkC;YACtC;QACJ;QACA;YACI,oCAAoC;YACpC,sBAAsB;YACtB;gBACI,oCAAoC;YACxC;QACJ;IACJ;AACJ;;AAEA;IACI,UAAU;IACV,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT;QACI,aAAa;QACb,sBAAsB;QACtB,+BAA+B;QAC/B,kCAAkC;QAClC,gBAAgB;QAChB,0CAA0C;QAC1C,kBAAkB;IACtB;IACA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,iBAAiB;QACjB,gBAAgB;QAChB,uBAAuB;QACvB,iBAAiB;IACrB;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;QACvB,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,0BAA0B;IAC9B;AACJ;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,kCAAkC;IAClC;QACI,iBAAiB;QACjB;IACJ;IACA;QACI,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;IAC3B;AACJ",sourcesContent:[':root {\n    --system-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n    font-family: var(--system-font);\n    --dark-blue: rgb(32, 44, 156);\n    --light-blue: rgb(61, 73, 187);\n    --dark-grey: rgb(80, 83, 94);\n    --home-image-width: 800px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\n    justify-content: space-between;\n    justify-items: center;\n    padding: 20px;\n    box-shadow: 0px 4px 15px -8px rgba(90,114,250,1);\n    button {\n        border: none;\n        background: none;\n        cursor: pointer;\n        font-size: 2rem;\n        font-family: var(--system-font);\n        color: var(--dark-blue);\n    }\n    img {\n        margin-left: 100px;\n        width: 80px;\n        filter: brightness(0) saturate(100%) invert(26%) sepia(13%) saturate(7492%) hue-rotate(214deg) brightness(82%) contrast(114%);\n        justify-self: self-start;\n    }\n}\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.home-div-wrapper {\n    width: calc(var(--home-image-width) + 30px);\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 500;\n        color: var(--dark-blue);\n        margin: 0;\n    }\n    p {\n        color: var(--dark-grey);\n    }\n    img {\n        border-radius: 10px;\n        width: calc(var(--home-image-width)/2);\n    };\n    .home-buttons {\n        display: flex;\n        gap: 20px;\n    }\n    button {\n        width: 150px;\n        border: none;\n        background-color: var(--dark-blue);\n        border-radius: 20px;\n        cursor: pointer;\n        font-family: var(--system-font);\n        font-size: 1rem;\n        font-weight: 600;\n        padding: 10px 5px;\n        &:first-child {\n            background-color: var(--dark-blue);\n            color: white;\n            &:hover {\n                background-color: rgb(58, 71, 184);\n            }\n        }\n        &:last-child {\n            background-color: rgb(208, 208, 211);\n            color: rgb(17, 16, 20);\n            &:hover {\n                background-color: rgb(231, 232, 235);\n            }\n        }\n    }\n}\n\n.menu-wrapper {\n    width: 80%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    gap: 50px;\n    div {\n        display: grid;\n        grid-auto-flow: column;\n        grid-template-columns: 1fr auto;\n        grid-template-rows: auto auto auto;\n        column-gap: 50px;\n        border: 1px solid rgba(61, 74, 187, 0.247);\n        border-radius: 5px;\n    }\n    h2, p {\n        margin: 0;\n        padding: 0;\n        padding-left: 20px;\n    }\n    h2 {\n        font-size: 1.5rem;\n        font-weight: 600;\n        color: var(--dark-blue);\n        padding-top: 20px;\n    }\n    p {\n        color: var(--dark-grey);\n    }\n    p:last-of-type {\n        color: var(--dark-blue);\n        padding-bottom: 20px;\n    }\n    img {\n        grid-row: 1 / -1;\n        height: 200px;\n        border-radius: 0 5px 5px 0;\n    }\n}\n\n.about-wrapper {\n    text-align: center;\n    padding: 30px;\n    width: 100%;\n    background-color: var(--dark-blue);\n    p {\n        font-size: 1.5rem;\n        color: white\n    }\n    img {\n        width: 300px;\n        border-radius: 10px;\n        border: 2px solid white;\n    }\n}\n'],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var d=this[A][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var d=n[A],c=r.base?d[0]+r.base:d[0],s=a[c]||0,p="".concat(c," ").concat(s);a[c]=s+1;var l=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var m=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var d=r(n,o),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),A=t(56),d=t.n(A),c=t(540),s=t.n(c),p=t(113),l=t.n(p),u=t(523),m={};m.styleTagTransform=l(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals;const C=t.p+"fa700a8101b4d6030ff6.jpg",g=function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("p"),o=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),A=document.createElement("img");return n.classList.add("home-div-wrapper"),e.classList.add("hero-text"),t.textContent="Odin Restaurant",r.textContent="Taste the best foods made by Scandinavian gods. We have restaurants all over Valhalla.",o.classList.add("home-buttons"),a.textContent="See Our menu",i.textContent="Order Now",A.setAttribute("src",C),o.appendChild(a),o.appendChild(i),e.appendChild(t),e.appendChild(r),e.appendChild(o),n.appendChild(e),n.appendChild(A),n},f=t.p+"d419329bd2b93d857dd5.jpg",h=document.querySelector("#home"),b=document.querySelector("#menu"),B=document.querySelector("#about"),v=document.querySelector("#content");v.appendChild(g()),h.addEventListener("click",(n=>{v.innerHTML="",v.appendChild(g())})),b.addEventListener("click",(n=>{v.innerHTML="",v.appendChild(function(){const n=document.createElement("div");for(let e=0;e<6;e++){const e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("img");n.classList.add("menu-wrapper"),a.setAttribute("src",C),t.textContent="Meal",r.textContent="Delicious meal from the scandinavian fjords",o.textContent="5.00 $",e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(a),n.appendChild(e)}return n}())})),B.addEventListener("click",(n=>{v.innerHTML="",v.appendChild(function(){const n=document.createElement("div"),e=document.createElement("p"),t=document.createElement("img");return n.classList.add("about-wrapper"),e.innerHTML="Come and eat all you can eat. No limits.<br>Eat until you end up in Valhalla.<br>Stuffing your mouth with our food is an honorable way to die!<br>Made For The Odin Project",t.setAttribute("src",f),n.appendChild(e),n.appendChild(t),n}())}))})()})();
//# sourceMappingURL=main.js.map