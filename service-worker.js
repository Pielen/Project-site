"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Project-site/index.html","599c15617658a28662b3b5678e8ed823"],["/Project-site/static/css/main.2576e4f9.css","6c80a0911e6a65c19cb67ed9ffd9cafb"],["/Project-site/static/js/main.9f94b1fe.js","12a57f355609399dc92e4f3b4595955a"],["/Project-site/static/media/KR1.9f112637.png","9f112637add936809201a518c0a3d2d3"],["/Project-site/static/media/Nisse_logo1.d11bcd14.png","d11bcd141be1c3f4869470160a72bf86"],["/Project-site/static/media/adam.347647a8.jpg","347647a8d22fbdde27b7ba5ba86ef6b0"],["/Project-site/static/media/avatar.b94244b0.png","b94244b029008952089030873d13407e"],["/Project-site/static/media/dos_logo.483cb66e.png","483cb66e70a96400dbef8fdef4512595"],["/Project-site/static/media/dos_logo2.93bd7fb6.png","93bd7fb6d71da9332da2802cffa2dd30"],["/Project-site/static/media/elias.fbb2723d.jpeg","fbb2723d4c9f0ed878bbd31e08f72a79"],["/Project-site/static/media/github.da8b35af.png","da8b35af0b2c949326eea5e5360c14a0"],["/Project-site/static/media/jonatan.63ebe8b9.jpg","63ebe8b935f01cfa6ed37ae1288dedc2"],["/Project-site/static/media/linkedin.54686ee4.png","54686ee48403d51bf34501ab4fb2b100"],["/Project-site/static/media/saturn.4d7a3058.png","4d7a3058a58e95f0559797f10223670e"],["/Project-site/static/media/screenshot2.b4d4988c.png","b4d4988c54304ab74bd39a9abe07bfb9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/Project-site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});