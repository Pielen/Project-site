"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Project-site/index.html","6889799230a21fcdca20d71a28d2f404"],["/Project-site/static/css/main.8357d963.css","e341780eaf444ad4be144e0f8d7dd665"],["/Project-site/static/js/main.adaa0726.js","52746b5c5f552918a0767d7ca2523925"],["/Project-site/static/media/KR1.9f112637.png","9f112637add936809201a518c0a3d2d3"],["/Project-site/static/media/Nisse_logo1.d11bcd14.png","d11bcd141be1c3f4869470160a72bf86"],["/Project-site/static/media/adam.347647a8.jpg","347647a8d22fbdde27b7ba5ba86ef6b0"],["/Project-site/static/media/avatar.b94244b0.png","b94244b029008952089030873d13407e"],["/Project-site/static/media/dos_logo.483cb66e.png","483cb66e70a96400dbef8fdef4512595"],["/Project-site/static/media/dos_logo2.93bd7fb6.png","93bd7fb6d71da9332da2802cffa2dd30"],["/Project-site/static/media/elias.fbb2723d.jpeg","fbb2723d4c9f0ed878bbd31e08f72a79"],["/Project-site/static/media/fredrik.1367572e.jpg","1367572e3de128f7f06c9f62a52f6fb0"],["/Project-site/static/media/github.da8b35af.png","da8b35af0b2c949326eea5e5360c14a0"],["/Project-site/static/media/johan.d2feb3eb.jpg","d2feb3eba53f99df4d94ae4a0c1de2cb"],["/Project-site/static/media/jonatan.63ebe8b9.jpg","63ebe8b935f01cfa6ed37ae1288dedc2"],["/Project-site/static/media/linerider1.47f981ce.jpg","47f981ce3c65e7c3a60348dca8735645"],["/Project-site/static/media/linerider2.4acaad09.png","4acaad09a97265d6d80ee444f2e353bf"],["/Project-site/static/media/linerider3.46f60a58.jpg","46f60a58c731aacef8c6f3b8efacd8ba"],["/Project-site/static/media/linkedin.54686ee4.png","54686ee48403d51bf34501ab4fb2b100"],["/Project-site/static/media/marcus.0520dfd9.jpg","0520dfd982436e6e8a2812c05c197c89"],["/Project-site/static/media/saturn.4d7a3058.png","4d7a3058a58e95f0559797f10223670e"],["/Project-site/static/media/screenshot2.b4d4988c.png","b4d4988c54304ab74bd39a9abe07bfb9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/Project-site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});