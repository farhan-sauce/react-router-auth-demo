(this["webpackJsonptest-spa"]=this["webpackJsonptest-spa"]||[]).push([[0],{17:function(e,t,n){e.exports={"app-container":"App_app-container__2OIHZ"}},18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(15),o=n.n(l),r=(n(23),n(6)),i=n(1),u=function(){var e=new URLSearchParams(window.location.search),t=e.get("delayTime")||3e3,n=e.get("multipleRedirect"),a=e.get("autoRedirect"),l=Object(i.f)();a&&setTimeout((function(){l.push("/about")}),t);var o=function(){l.push("/about"),n&&setTimeout((function(){l.push("/contact")}),2e3)};return c.a.createElement("section",{id:"login-section"},c.a.createElement("p",null,"SPA Login test"),c.a.createElement("div",null,c.a.createElement("button",{id:"login",onClick:function(){setTimeout((function(){o()}),t)}},"Login")),c.a.createElement("div",null,c.a.createElement(r.b,{to:"/about",id:"about-link"},"About")),c.a.createElement("div",null,c.a.createElement("button",{id:"single-request",onClick:function(){console.log("Hello World");var e=Math.ceil(t/1e3);fetch("https://reqres.in/api/users?delay=".concat(e)).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){o()}))}},"Single request")),c.a.createElement("div",null,c.a.createElement("button",{id:"multiple-request",onClick:function(){Promise.all(["https://reqres.in/api/users/1","https://reqres.in/api/users/2","https://reqres.in/api/users/3"].map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){o()}))}},"Multiple requests")),c.a.createElement("div",null,c.a.createElement("button",{id:"multiple-url-link",onClick:function(){var e=Math.ceil(t/1e3);fetch("https://reqres.in/api/users?delay=".concat(e)).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){l.push("/about"),setTimeout((function(){l.push("/multiple-2")}),2e3)}))}},"Multiple URL Changes")))},s=function(){return c.a.createElement("h4",{id:"about"},"User is LoggedIn")},m=n(17),h=n.n(m),p=function(){return c.a.createElement("h4",{id:"contact"},"Contact page")},f=n(9),d=Object(f.a)(Array(50).keys()),E=function(){var e=new URLSearchParams(window.location.search).get("delayTime")||2e3,t=Object(i.f)();return Object(a.useEffect)((function(){t.push({search:"?color=pink"}),setTimeout((function(){t.push("/multiple-2")}),7e3),setTimeout((function(){!function t(n){for(var a=[],c=n;c<=n+10;c++){var l=Math.ceil(e/1e3);a.push("https://reqres.in/api/users/".concat(c,"?delay=").concat(l))}Promise.all(a.map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){n<5&&t(n+1)}))}(1)}),5e3)}),[]),c.a.createElement("section",{id:"login-section"},c.a.createElement("h3",null,"Multiple URL Change-1"),c.a.createElement("div",null,c.a.createElement(r.b,{to:"/multiple-2",id:"multiple-2"},"Multiple URL - 2")),c.a.createElement("div",null,c.a.createElement("p",null,"Random Images"),d.map((function(e){return 0===e?null:c.a.createElement("div",{key:e,style:{width:200,height:200}},c.a.createElement("img",{src:"https://dummyimage.com/".concat(10*e,"/09f/fff.png"),alt:"check"}))}))))},g=Object(f.a)(Array(100).keys()),v=function(){var e=new URLSearchParams(window.location.search).get("delayTime")||2e3,t=Object(i.f)();return Object(a.useEffect)((function(){t.push({search:"?color=pink"}),setTimeout((function(){t.push({search:"?color=green"})}),500),setTimeout((function(){t.push({search:"?color=white"})}),2e3),setTimeout((function(){!function t(n){for(var a=[],c=n;c<=n+10;c++){var l=Math.ceil(e/1e3);a.push("https://reqres.in/api/users/".concat(c,"?delay=").concat(l))}Promise.all(a.map((function(e){return fetch(e)}))).then((function(){return console.log("done")})).catch((function(e){return console.error(e)})).finally((function(){n<5&&t(n+1)}))}(1)}),5e3)}),[]),c.a.createElement("section",{id:"login-section"},c.a.createElement("h3",null,"Multiple URL Change-2"),c.a.createElement("div",null,c.a.createElement(r.b,{to:"/multiple-1",id:"multiple-1"},"Multiple URL - 1")),c.a.createElement("div",null,c.a.createElement("p",null,"Random Images"),g.map((function(e){return 0===e?null:c.a.createElement("div",{key:e,style:{width:200,height:200}},c.a.createElement("img",{src:"https://dummyimage.com/".concat(10*e,"/09f/fff.png"),alt:"check"}))}))))};function b(){return console.log("TESTING - SPA using react"),c.a.createElement(r.a,null,c.a.createElement("div",{className:h.a["app-container"]},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/about"},c.a.createElement(s,null)),c.a.createElement(i.a,{path:"/contact"},c.a.createElement(p,null)),c.a.createElement(i.a,{path:"/multiple-1"},c.a.createElement(E,null)),c.a.createElement(i.a,{path:"/multiple-2"},c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(u,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.221587a0.chunk.js.map