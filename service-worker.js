"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Project-site/index.html","24b6d097eb7396d587c24584827d0738"],["/Project-site/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/Project-site/static/js/main.68f01faf.js","8aa81d117e4123021cee9e8ce08523b1"],["/Project-site/static/media/App.053fcc7f.scss","053fcc7f0c5fe116367402738b57e9a9"],["/Project-site/static/media/Nisse_logo1.d11bcd14.png","d11bcd141be1c3f4869470160a72bf86"],["/Project-site/static/media/about.aea4f98c.scss","aea4f98c24b1bdff1a387372e8748cfb"],["/Project-site/static/media/adam.347647a8.jpg","347647a8d22fbdde27b7ba5ba86ef6b0"],["/Project-site/static/media/demovideo.5649f0d5.scss","5649f0d51a92d536ff65cfda635778ac"],["/Project-site/static/media/dospage.d41d8cd9.scss","d41d8cd98f00b204e9800998ecf8427e"],["/Project-site/static/media/github.da8b35af.png","da8b35af0b2c949326eea5e5360c14a0"],["/Project-site/static/media/header.d1faefdd.scss","d1faefdd33a854d417f6abc8a4c4f2da"],["/Project-site/static/media/lineriderpage.d41d8cd9.scss","d41d8cd98f00b204e9800998ecf8427e"],["/Project-site/static/media/linkedin.54686ee4.png","54686ee48403d51bf34501ab4fb2b100"],["/Project-site/static/media/media.94cdbe59.scss","94cdbe5941ce21327f139b067dd5e340"],["/Project-site/static/media/saturn.4d7a3058.png","4d7a3058a58e95f0559797f10223670e"],["/Project-site/static/media/startpage.4e3fc6ac.scss","4e3fc6acfdd6a957353855688f613020"],["/Project-site/static/media/team.2e835ae4.scss","2e835ae4174270d07dc97d117eb932be"],["/Project-site/static/media/topbar.96320ebc.scss","96320ebc3bbf4416301a3716426c690b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),r=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var r="/Project-site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});