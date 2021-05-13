(this["webpackJsonptest-spa"]=this["webpackJsonptest-spa"]||[]).push([[0],{19:function(e,t,n){e.exports={"app-container":"App_app-container__2OIHZ"}},21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(17),r=n.n(c),o=(n(26),n(20)),i=n(6),u=n(1),s=function(){var e=new URLSearchParams(window.location.search),t=e.get("delayTime")||3e3,n=e.get("multipleRedirect"),c=e.get("autoRedirect"),r=Object(u.f)();c&&setTimeout((function(){r.push("/about")}),t);var o=function(){r.push("/about"),n&&setTimeout((function(){r.push("/contact")}),2e3)};Object(a.useEffect)((function(){var e=setInterval((function(){fetch("https://reqres.in/api/users")}),5e3);return function(){clearInterval(e)}}),[]);return l.a.createElement("section",{id:"login-section"},l.a.createElement("p",null,"SPA Login test"),l.a.createElement("div",null,l.a.createElement("button",{id:"login",onClick:function(){setTimeout((function(){o()}),t)}},"Login")),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/about",id:"about-link"},"About")),l.a.createElement("div",null,l.a.createElement("button",{id:"single-request",onClick:function(){console.log("Hello World");var e=Math.ceil(t/1e3);fetch("https://reqres.in/api/users?delay=".concat(e)).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){o()}))}},"Single request")),l.a.createElement("div",null,l.a.createElement("button",{id:"multiple-request",onClick:function(){Promise.all(["https://reqres.in/api/users/1","https://reqres.in/api/users/2","https://reqres.in/api/users/3"].map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){o()}))}},"Multiple requests")),l.a.createElement("div",null,l.a.createElement("button",{id:"multiple-url-link",onClick:function(){var e=Math.ceil(t/1e3);fetch("https://reqres.in/api/users?delay=".concat(e)).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){r.push("/about"),setTimeout((function(){r.push("/multiple-2")}),2e3)}))}},"Multiple URL Changes")),l.a.createElement("div",null,l.a.createElement("button",{id:"new-window",onClick:function(){window.open("/","newwindow","width=500,height=500")}},"New Window")))},m=l.a.createContext({language:"en",setLanguage:function(){}}),f=function(){var e=Object(a.useContext)(m).language;return l.a.createElement("div",null,l.a.createElement("h1",null,"Current language is ".concat(e)))},h=function(){var e=Object(a.useContext)(m),t=e.language,n=e.setLanguage;return l.a.createElement("div",null,l.a.createElement("p",null,"selected language is ".concat(t)),l.a.createElement("button",{onClick:function(){return n("de")}},"Set de language"),l.a.createElement("button",{onClick:function(){return n("en")}},"Set en language"),l.a.createElement("button",{onClick:function(){return n("es")}},"Set es language"))},p=function(){return l.a.createElement("div",null,l.a.createElement("h4",{id:"about"},"User is LoggedIn"),l.a.createElement(h,null),l.a.createElement(f,null))},d=n(19),g=n.n(d),E=function(){return l.a.createElement("h4",{id:"contact"},"Contact page")},v=n(11),b=Object(v.a)(Array(50).keys()),w=function(){var e=new URLSearchParams(window.location.search).get("delayTime")||2e3,t=Object(u.f)();return Object(a.useEffect)((function(){t.push({search:"?color=pink"}),setTimeout((function(){t.push("/multiple-2")}),7e3),setTimeout((function(){!function t(n){for(var a=[],l=n;l<=n+10;l++){var c=Math.ceil(e/1e3);a.push("https://reqres.in/api/users/".concat(l,"?delay=").concat(c))}Promise.all(a.map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){n<5&&t(n+1)}))}(1)}),5e3)}),[]),l.a.createElement("section",{id:"login-section"},l.a.createElement("h3",null,"Multiple URL Change-1"),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/multiple-2",id:"multiple-2"},"Multiple URL - 2")),l.a.createElement("div",null,l.a.createElement("p",null,"Random Images"),b.map((function(e){return 0===e?null:l.a.createElement("div",{key:e,style:{width:200,height:200}},l.a.createElement("img",{src:"https://dummyimage.com/".concat(10*e,"/09f/fff.png"),alt:"check"}))}))))},y=Object(v.a)(Array(50).keys()),k=function(){new URLSearchParams(window.location.search).get("delayTime");var e=Object(u.f)();return Object(a.useEffect)((function(){e.push({search:"?color=pink"}),setTimeout((function(){e.push({search:"?color=green"})}),500),setTimeout((function(){e.push({search:"?color=white"})}),2e3),setTimeout((function(){!function e(t){for(var n=[],a=0;a<=5;a++)n.push("https://reqres.in/api/users/".concat(a,"?delay=15"));Promise.all(n.map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){t<5&&setTimeout((function(){e(t+1)}),6e3)}))}(1)}),5e3)}),[]),l.a.createElement("section",{id:"login-section"},l.a.createElement("h3",null,"Multiple URL Change-2"),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/multiple-1",id:"multiple-1"},"Multiple URL - 1")),l.a.createElement("div",null,l.a.createElement("span",null,y.length),l.a.createElement("p",null," - Random Images"),y.map((function(e){return 0===e?null:l.a.createElement("div",{key:e,style:{width:200,height:200}},l.a.createElement("img",{src:"https://dummyimage.com/".concat(10*e,"/09f/fff.png"),alt:"check"}))}))))};function C(){var e=Object(a.useState)("en"),t=Object(o.a)(e,2),n={language:t[0],setLanguage:t[1]};return l.a.createElement(m.Provider,{value:n},l.a.createElement(i.a,null,l.a.createElement("div",{className:g.a["app-container"]},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/about"},l.a.createElement(p,null)),l.a.createElement(u.a,{path:"/contact"},l.a.createElement(E,null)),l.a.createElement(u.a,{path:"/multiple-1"},l.a.createElement(w,null)),l.a.createElement(u.a,{path:"/multiple-2"},l.a.createElement(k,null)),l.a.createElement(u.a,{path:"/"},l.a.createElement(s,null))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f410b2c8.chunk.js.map