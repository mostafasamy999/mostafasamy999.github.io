'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3a7ca2301a9812659302c8237f9ab651",
"assets/AssetManifest.bin.json": "7575803fb8e44cdd0f9e6b9a0fbe3fc5",
"assets/AssetManifest.json": "b0de5e4ad9088a070323e42f0a7ca80b",
"assets/assets/font/Montserrat-Bold.otf": "b1bc919c743e73d2b1925fcbe24d60c0",
"assets/assets/font/Montserrat-Light.otf": "2321dc98b6f9d0746aacace73b7c81f6",
"assets/assets/font/OpenSans-Italic.ttf": "31d95e96058490552ea28f732456d002",
"assets/assets/font/OpenSans.ttf": "78609089d3dad36318ae0190321e6f3e",
"assets/assets/img/en_uk.svg": "14f8faa7c697f84db43f2f036451c573",
"assets/assets/img/fact1.png": "1809aa9740d0b8adc7164c7986e4721f",
"assets/assets/img/fact2.png": "28bfb9160d6c65e9c387b6b5ea4c7ba1",
"assets/assets/img/fact3.png": "aaee8f755ec3aecc7aa39921c750412a",
"assets/assets/img/fact4.png": "f5dc773fec762f9a3fb42d1292f21916",
"assets/assets/img/favicon.png": "e771d5a52e4e04140cc311aa958e0026",
"assets/assets/img/icon_bg.png": "1c192ede57d56d54a0872a2486ef5827",
"assets/assets/img/impl_project/1(1).jpg": "00793457b5e3ed5e594febab5e0fb9fc",
"assets/assets/img/impl_project/1(2).jpg": "b7d6675c78579e065896f9659ac162be",
"assets/assets/img/impl_project/1.jpg": "f912cab685d69632899fbe935ed8c9d0",
"assets/assets/img/impl_project/2(1).jpg": "19e997677c4e416a8f99b1a7b71a56be",
"assets/assets/img/impl_project/2(2).jpg": "36e1e604f89f74b1018867e6801277b3",
"assets/assets/img/impl_project/2.jpg": "9b27e4017666da01759cf3062d1476d1",
"assets/assets/img/impl_project/3(1).jpg": "9827521e1513b4343ba01dc7e42bafc2",
"assets/assets/img/impl_project/3(2).jpg": "791e40242182b76071ebb5dacf56cd5c",
"assets/assets/img/impl_project/3.jpg": "d0cffd188525bdf45bd70da826238d5f",
"assets/assets/img/impl_project/4(1).jpg": "61066a6b70ebcc326089f23c699bd6f8",
"assets/assets/img/impl_project/4(2).jpg": "e2af30de5396bb834c76e03aed20a8c5",
"assets/assets/img/impl_project/4.jpg": "7fc0ac7e54b8cf3ce2aea6dedf7dadfb",
"assets/assets/img/impl_project/5(1).jpg": "251e46ef125d548acb77fc4f9973c431",
"assets/assets/img/impl_project/5.jpg": "c2a404ae8c9bda77a46fd7cc2cc170bd",
"assets/assets/img/impl_project/6(1).jpg": "605a6a81864c4ee23863b2b791a25f2f",
"assets/assets/img/impl_project/6.jpg": "c378682614516c1e068dfa379c1f6321",
"assets/assets/img/impl_project/7.jpg": "ac0b8176335daea7035399556c8b0bf9",
"assets/assets/img/impl_project/8.jpg": "2837de43fb88fbe92f455af825f51ae8",
"assets/assets/img/impl_project/door1.jpg": "088279455381c8f20bb257bd6a0eae04",
"assets/assets/img/impl_project/door2.jpg": "e04465fb28e8dc6ffa605ce52a8251d8",
"assets/assets/img/impl_project/door3.jpg": "d2a52fdbc460871e56cc31cc79ca5a76",
"assets/assets/img/impl_project/door4.jpg": "a7e99018213ef700c5081b7a0f98f74c",
"assets/assets/img/impl_project/elec1.jpg": "121f925df34536bd39fc95976d5a2257",
"assets/assets/img/impl_project/elec2.jpg": "bc8ea22f3f3522ab7ea4b0be82b8756d",
"assets/assets/img/impl_project/elec3.jpg": "e0cff04070a24c59df774b16de6cea47",
"assets/assets/img/impl_project/elec4.jpg": "4a794163addf8365edb2d39a8cf47bfb",
"assets/assets/img/impl_project/mkbat1.jpg": "cf34f5eb94f5983d324c02aeae3aac1a",
"assets/assets/img/impl_project/mkbat2.jpg": "37647d7d19f4023a94c9108502b848f6",
"assets/assets/img/impl_project/mkbat3.jpg": "d9a9ef32c04d18516f42bf32c50c6973",
"assets/assets/img/impl_project/mkbat4.jpg": "24d3722cd5de9395d877796978c40ad1",
"assets/assets/img/impl_project/sehey1.jpg": "ba79c91007988aff060d3ae991bfd806",
"assets/assets/img/impl_project/sehey2.jpg": "8f6d6642149d095c9fb29f615997e5fc",
"assets/assets/img/impl_project/sehey3.jpg": "f3c50a96ba3afc08dd67c0dfa19ff7d7",
"assets/assets/img/impl_project/sehey4.jpg": "32fad2f6af7925a3e95fa2a8ce989897",
"assets/assets/img/impl_project/takeyf1.jpg": "c771a8c3ba9a8354ff27ab48ba161467",
"assets/assets/img/impl_project/takeyf2.jpg": "bdbedaf2ff5f3feba3248875179b837b",
"assets/assets/img/impl_project/takeyf3.jpg": "964bf39a4a0313238a04e9a786c47136",
"assets/assets/img/impl_project/takeyf4.jpg": "0223a1b95274b2ecce042680660fb643",
"assets/assets/img/our_clints/Cust1.jpg": "d5ca73c1b3957fba42abd918f4fc944b",
"assets/assets/img/our_clints/Cust2.jpg": "cf75c8756f7574198e9ca947322a804a",
"assets/assets/img/our_clints/Our.jpg": "37689de28cd7239602b40392db98d69d",
"assets/assets/img/our_clints/PEPSI.jpg": "bc205190595f37127892d8c0ff6e40dd",
"assets/assets/img/our_clints/RC.jpg": "5b378c9580c688833e0e3107d3cdb128",
"assets/assets/img/our_clints/Sayer.jpg": "4eeab480382ce8fdf0d76c9411691eaf",
"assets/assets/img/our_clints/ZAli.jpg": "0f91835540ec393ff2747b7a9e880ce3",
"assets/assets/img/saudi-arabia.jpg": "48fe05a6d56173e1ec860a68d6fe10b7",
"assets/assets/img/saudi-arabia.svg": "93d94d66232583617ff12cea9693ef68",
"assets/assets/img/Saudi_Arabia.svg": "1b79db27bb882afead5050e6fa59818c",
"assets/assets/img/social/facebook.svg": "4ccea7d0829b5eb645cb7240d1dcead7",
"assets/assets/img/social/github.svg": "6b930060bae7f89ef4d079c16b5c0f18",
"assets/assets/img/social/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/img/social/twitter.svg": "18f17c68c76da039271b532b39b9b36d",
"assets/assets/img/s_1.png": "7631ef99ef6717e12cd86fab2b04d2db",
"assets/assets/img/s_3.png": "b775ae434953e99d2f4f0d643e79984f",
"assets/assets/img/t.jpg": "ba8b806f59ff93e5e4b7f5e1c99f0069",
"assets/assets/img/t2.jpg": "48792b5c26b5a4ad964df6f2ea244e18",
"assets/assets/img/t3.jpg": "012f42d3d663544ac8fc1949133becd8",
"assets/assets/img/vip.jpg": "847334b61320316f672056460f7d07e4",
"assets/FontManifest.json": "afb33bc0fd0e6dbf8a6997947ea36389",
"assets/fonts/MaterialIcons-Regular.otf": "b9835e16af7c7889c608ba51d673d3a2",
"assets/NOTICES": "0a4827ee69a055627fb0889ecec30992",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2d817e2f4beae0d4edd53ee72132aeea",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon_new.png": "34901ba4f227ae4593f4f4ad280aabdc",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "7f96cb196fab6f835de00992dca47c75",
"icons/android-chrome-192x192.png": "34901ba4f227ae4593f4f4ad280aabdc",
"icons/android-chrome-512x512.png": "89100f299450b7abe3aeda37899d62d5",
"icons/apple-touch-icon.png": "55f2d9df7af6e2634641e2a45ec88eb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3577f1a68ba503b57c3b1161aca26bb8",
"/": "3577f1a68ba503b57c3b1161aca26bb8",
"main.dart.js": "d22694b404a19a2081c2fb4b62f85bc5",
"manifest.json": "18c2101fb8b4eeb2694c83ecd96c5d55",
"version.json": "b8e678f7c4b597c92b5ecc7dc764f9bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
