'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0010966103a3c9ca53e3e46d8596483b",
"assets/AssetManifest.bin.json": "7bd4f2dc6fb9eaae86d9046ece6df851",
"assets/AssetManifest.json": "ed511fcf05748b95abe4c4b3de2aa3f3",
"assets/assets/deviceProfiles/CAAE_0DB1.json": "792066e1bf0777110b9f09bc29255de9",
"assets/assets/deviceProfiles/CAFE_8006.json": "763106e9123e32a0d47adb3859ee422e",
"assets/assets/deviceProfiles/CAFE_8007.json": "c1886e0483f17f7578fbd748a9a3cc99",
"assets/assets/fonts/MiSans-Regular.ttf": "7a19b9504edc93c2d3c285804d1b0ca5",
"assets/assets/fonts/OpenCherry-Regular.ttf": "bdc7f5967b218280a8c66940f3724f20",
"assets/assets/images/color_sel_img.png": "8f6c434d00479e5b78c5381e6b645e84",
"assets/assets/images/keybroad_notsel.png": "0317c04e73a8bd56580eb8981be4c885",
"assets/assets/images/keybroad_sel.png": "96bb4cf467e11efaa3bc3fce18db44ae",
"assets/assets/images/language.png": "b003af512d2e6123342443f670898763",
"assets/assets/images/light_notsel.png": "9cb8383d01aab1a114a32b76f1f2b378",
"assets/assets/images/light_sel.png": "d8bbef1017c32a6487b932a4da7af6ac",
"assets/assets/images/logo_geteron.png": "d1c31278d5e54581132357c2876768ed",
"assets/assets/images/logo_iqunix.png": "ed2be9db32162ee3824c38c9f20d31f1",
"assets/assets/images/logo_tofix.png": "921fb8444c6254de4ed70317e93431e6",
"assets/assets/images/logo_tofix2.png": "192d31d28c34aa5450722d489e6ab1b1",
"assets/assets/images/performance_notsel.png": "2380a38a25243b2896b8d186565f6b11",
"assets/assets/images/performance_sel.png": "4134bb72c8c44670b97b0dfc4a537898",
"assets/assets/images/press_down.png": "51de4b453d28a62c2b939d8f3071e4e7",
"assets/assets/images/press_end_pro.png": "84cf8d1bd7da1e9764ebd11d58a2ab94",
"assets/assets/images/press_pre.png": "07dd12450981f95ec3b4a5e39e523085",
"assets/assets/images/press_up.png": "34a8c1629671a9113f629d1e2eac4a47",
"assets/assets/images/setting_notsel.png": "d9fde0725b1a2f50bd748f7da5e5fbd3",
"assets/assets/images/setting_sel.png": "bce1b2e6f0bfa77ed8933eab5dbf70ca",
"assets/assets/images/switch_blue_off.png": "25d8fdcc8aeb2790b08b23e9eaadf571",
"assets/assets/images/switch_blue_on.png": "c7917a63f5186a117664cc718e152692",
"assets/assets/images/switch_red_off.png": "25dbb6b1366c672746d3faac909e1ac7",
"assets/assets/images/switch_red_on.png": "f06e8c43fb41c514f68a1d34018081b2",
"assets/assets/images/test_notsel.png": "ff4f63c66e44e17a36167fc28b010b34",
"assets/assets/images/test_sel.png": "7909ebc243a42c22d52940a30be55ec5",
"assets/assets/images/yushe.png": "599f0f75b6ec72e18661c2754029553d",
"assets/FontManifest.json": "d841382d8c05d57ea199248f97202948",
"assets/fonts/MaterialIcons-Regular.otf": "e4966cfef365b2cb3bc488ef7f433178",
"assets/NOTICES": "d1aa51fad629be4cc38b7f0b88fab9f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ccba32f0869d91bad92edc44d02e6f28",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "373170ff478e955c0a920e4d573c7b1d",
"icons/Icon-512.png": "8b154d5eece96babbc2028b6402b0d48",
"icons/Icon-maskable-192.png": "373170ff478e955c0a920e4d573c7b1d",
"icons/Icon-maskable-512.png": "8b154d5eece96babbc2028b6402b0d48",
"index.html": "54acaff0d09aea868cb4eb7b55a7abbb",
"/": "54acaff0d09aea868cb4eb7b55a7abbb",
"main.dart.js": "b97830476289cf90ed95f4c01e76ecd6",
"manifest.json": "8fc52179c0f1ba0b2f256ffd2de0e011",
"version.json": "8a1a5d2f8390c61ca4c2025b0869957e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
