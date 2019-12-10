/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc814efa33cb37d0f9065ccba5211146"
  },
  {
    "url": "assets/css/0.styles.96f3b401.css",
    "revision": "931f2980c93e4775f60cc78f6675f143"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.424df847.js",
    "revision": "3601126abbaa549a5ad1547ace793507"
  },
  {
    "url": "assets/js/10.a2d974fe.js",
    "revision": "7ba32897732c80dd32fe24a090d9149d"
  },
  {
    "url": "assets/js/11.c5408c8f.js",
    "revision": "303adc22d72b5d11761f9259ae14f214"
  },
  {
    "url": "assets/js/12.c6247a7b.js",
    "revision": "02b00de9201bc2fa472a945cb0d862de"
  },
  {
    "url": "assets/js/13.e486996b.js",
    "revision": "3e76038547c3b83adfed68d68944b888"
  },
  {
    "url": "assets/js/3.2a975fd8.js",
    "revision": "4a37560f0189a7101b2d717b42262e99"
  },
  {
    "url": "assets/js/4.dc9f456b.js",
    "revision": "87ef8baf78a56de3a11b09c49b04139e"
  },
  {
    "url": "assets/js/5.5931b03f.js",
    "revision": "34bfcfe7c09f15bddadd5bbd62008e23"
  },
  {
    "url": "assets/js/6.1bc9ad96.js",
    "revision": "8f3d38942e09e67c4d1b590289f86f1d"
  },
  {
    "url": "assets/js/7.52f6898c.js",
    "revision": "b018e176ea5349aa827885fd0c01fcd8"
  },
  {
    "url": "assets/js/8.e95ca475.js",
    "revision": "e9db4d5a2eb47f5c20b184a54210d6b7"
  },
  {
    "url": "assets/js/9.6233d6b9.js",
    "revision": "994067b7d164ba5621fc673fcb34fdaa"
  },
  {
    "url": "assets/js/app.e6db0b08.js",
    "revision": "9c2e9b4fa2bff66bbdb16f296d16125f"
  },
  {
    "url": "bg.jpg",
    "revision": "45ddd11e2fbf1b0a62ac19d2029d1ee0"
  },
  {
    "url": "categories/index.html",
    "revision": "f6d52c0ebe5f5f4ed233b7de8a262ffc"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "fc46450d33863d72f562a26815dd21c7"
  },
  {
    "url": "head.png",
    "revision": "bd54379feef50134ec40bc0fa56afb5a"
  },
  {
    "url": "index.html",
    "revision": "62142500d73e0fda99cdb15aa658c6ba"
  },
  {
    "url": "logo.png",
    "revision": "2d1edf21fb1898baff5ef30323b680f8"
  },
  {
    "url": "tag/index.html",
    "revision": "809a240013da4fcb700f984f76ea4a9e"
  },
  {
    "url": "tags/其他/index.html",
    "revision": "82564691bd96dd2c4d3730e597e81a00"
  },
  {
    "url": "timeline/index.html",
    "revision": "2b7f9e405d184ed16666bca8069d0f32"
  },
  {
    "url": "views/notes/test.html",
    "revision": "9c4fd30f7e4d320a4637bf61bdac1ff3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
