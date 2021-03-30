'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c203880b75a9757dd440475faf52e546",
"index.html": "26c2bbdf5736829b813e3467c063b881",
"/": "26c2bbdf5736829b813e3467c063b881",
"main.dart.js": "168fcd6fea4e7e9c5f3eac7691128170",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0a3e4c4d45b80f83950971950eec489c",
".git/ORIG_HEAD": "db66237cb89e5ee70503df3352617041",
".git/config": "5fc3a24095a25a97aae6d60afc00482e",
".git/objects/3e/59f24319be96c22d6765ce7aafdb3280754a94": "bf9f251f25c8fa210da2ccb7d1ee745d",
".git/objects/68/1f41ae2aee4749eb4ddda94f8c6a76c825c825": "116533a4d47b976f12c912d004f29184",
".git/objects/03/599348d295d58895241c19d5e64ba96e610e47": "e3614eb2d0f71701e38a8ecbc7331843",
".git/objects/9b/78c3e01de925cecdc5cee2c203b34b1c1adc6f": "8ab4e2bc0d253841a408fdd43b3eee1e",
".git/objects/35/fec2d93dc7cf4fb35150a1f309c1e01029119b": "4dc53cc42ee7fbe86eb6d244c61835b5",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/3c/90c2088c250e64532e989729cc985b28109c30": "4d53756e478111b0b718f6fcda1dd695",
".git/objects/67/c1cbc79cf15d2edf2c96109e7bce26d44d8f06": "be639972d32a912fa5e00d2ebfaec32d",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/0b/2c86ed3b06ab9ed126b1ed955020163ddb1b4f": "dd817c67779758286b40b26fde8d74c4",
".git/objects/5a/c5950146458465fca47f66fffb909d776a36a8": "62159fae8de11e3c2612bd6ded4d35e6",
".git/objects/9d/1cabff52e461632b9383c689e823faa984d92c": "d63d85b5b90a66b957ef57741871cf62",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/b2/83976d451b6040ed8504fb0e463d75cb679427": "a4fe0fc2215c3b86dbb1210ac5188228",
".git/objects/ad/24ff61e6eb8de575068611c654e45bdedb77bf": "ee66f916ab6f07c039fc52b0bc25b547",
".git/objects/d7/e95cb5a072f796be17c49e676c88e8818cfb39": "2db1a833873c05704f1c550273596990",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/503c0d255c87b1c34c11e640b50e78d4ce1c02": "71253b7e813fe7cf91c57bff9335365b",
".git/objects/bc/f071fdd1825514cc8063e5da43fd563743e71a": "aeb0ffa5bfe5130c7d5ce721e3573e50",
".git/objects/eb/0bd07fbb29acac2ff652c5396c61707673d3a0": "ca3a39b4edf977b9d76cac3216dd1103",
".git/objects/c7/fbaa5db3d349b63f4d3ae1449d704c7d861bd0": "79feb7c5a736706bf01af6134aaf2e06",
".git/objects/c0/3083e78934b7e5184cf4793764a9ff974ef44c": "6b3cb78a4136c7b8d3f64ee58d64b29c",
".git/objects/fc/9a9eb639598dafc008ccd336795ecc1a117d3a": "dec576e1f741dd31b11570a498c2e88a",
".git/objects/fc/fc8284cb1d045668bcae08b3f632745bece8b9": "fc855ee79f0b4b11df0ac60a0520573f",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/e3/a2fe62f511afd98991a1e6fe4dd2f9b82fab1d": "381a902d07c5482657bc92d5d843a6b9",
".git/objects/4e/ce6622c7e6918800d7ff1072337021c682f76b": "334f96aa1fbb066001d7ec1db918d483",
".git/objects/4e/73c9f2772543c6f942ec3dba60165185a2f4b6": "96fce63b36c99ca131af2aacd1448e64",
".git/objects/20/82a7374fcc60976bf1a0f33dfd4c88356333fa": "9fdc2e563574d32a510529642ed8d32b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/941af68ee5ec1a00740448a4140f14bdfbbfd2": "5c91af5c963f18756e23124bc740e42e",
".git/objects/4b/734e17bd8dc67ea5fd777b62e5128fba4353b2": "e61df9f8aaed0fcc30ef3d4e5c21ae20",
".git/objects/4b/ff64538b06c25d286f57ebcd22bac9046c82c1": "8b045508f5fbea2d50c60387371e6d00",
".git/objects/7d/94fbb98e3d73a4927b36b5b631f51c7850e1ee": "622a2f15ca359e8c955a7966d9ff9dbb",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/42/9271bfafcef34ec83c798c8f3b6eb8d2f08e3d": "4aa0a83494f0a5ef87843b4863ef12c2",
".git/objects/45/7d93c5c5cf1660c075ffff5ad29af8b06e879b": "7982d41ad6fca08b2b32d9cb74c90a48",
".git/objects/74/887464a79ae0e3cd5e7439156d566e575deddd": "135adef75e250cb3fe6f93126cb7f0ea",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e6ca36fc0f1cb7556b6631b7173ddb1236ec5b": "b06ec9c45e0f89def6e3a2e637a8698f",
".git/objects/10/16e6426a87c268815af70205c65e536de0a265": "d0148d9f1ef3e6514b15bbe76d034803",
".git/objects/19/43f9bc6f16adbf0276a7f8602f20ddebce7c96": "a95321b2b68a3b68331f6190e0b80e78",
".git/objects/4c/2268cc41c9f36e8877a0e3ec180e1a5391d2b4": "e3fcce3291e4ccb0d18d5c4d59149c78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/6f5e4b3d3db6f440a2d9b95ad54403bc8b8d23": "f2530a3d87b87524de7ee4ae59d3d241",
".git/objects/00/dbc42b251b02382a80f828db0ff49139cd0f05": "6200f22390e97170da6478c1e6513205",
".git/objects/5c/98b428844d9f7d529e2b6fb918d15bf072f3df": "fb4e8bb60fe19099ee2c8bd7fa66af53",
".git/objects/31/911a9b5f1421a20f6b7a9af80f43873a38265c": "364463ed2d020ba13cc29baf6123e908",
".git/objects/65/80d3a169e895d914f159c060b947e36746f275": "34514d47340caad5197155b259bae4be",
".git/objects/96/8b2ee73930f1497f86b2f0e2f3900b8561d22c": "4cb2791869ad3be04246ca497dddc68a",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/53/44e8fee445b38d38069aee95d15d9c0e47eae9": "fdecdb4508bd4f691726026219851565",
".git/objects/53/82b1049adb45576431b0779026c9f1558822bf": "2dc56411ccda4ecda13fbcdf617ac23d",
".git/objects/37/0b2df7884e3fdb96d07f6853a0c07fbb017032": "50c72addfb3822b8950a2bbbc790b7cc",
".git/objects/08/ffe2daef1c26fb6628614bd4c64fa623cb2cb3": "df946ea78d5e29d047eb0e9f078e8466",
".git/objects/6d/ec89a11ce572b3b8bb7c46fb85d79cc55b1169": "a5afca6bc09b6048770b5daf47f5cda7",
".git/objects/01/47d65f0a0b530b5a4d946f3f17a58cc15fa513": "fe8fa59ee11069e08a2fbb6e88e4b638",
".git/objects/6c/e21f73da3a369cd528f46d7056c1db3c37f92a": "02f8fdb66a5b90a193229c519b4cf8d3",
".git/objects/39/8a1954758d259828f792ba5dda6afbad550e11": "905ebaf3155a6807a57cb41bfc20c145",
".git/objects/55/a454be414057627f8aff4efc02efb28fca7f30": "24cfab53c809b4809c23b25786002259",
".git/objects/bf/6f3b956a8370a9b5a9c911fc2e0ece6146cb18": "ec977897b8323ac1f7792d62a43578a0",
".git/objects/d3/0923a8ac57b11aa5544156f6a34f60495a7f10": "e95ce051eda93ee18fb25e46ea0224a1",
".git/objects/d3/70bc41d7b3d1ecaaca681f1c6ceb4cb5287f7f": "3411309c06255a04f8ee8cfe9082ce60",
".git/objects/d4/27a602b3417c99a97e544a27c43b4e2f6c2ba4": "615a5d3c92c3bf5d69f47c7af14da88b",
".git/objects/ba/e84159e1869fb7f7348afc7b68cb2662602c85": "aced45d45c7cc7e261457f1bc5abcb1f",
".git/objects/d5/bb003779810bad55f4afb58e22d72b758bec4c": "a8f56c2a34c0ebdef86cb1735e25058f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/ceffe22fbc854601b94f285f061c834ea4b124": "8cea490cec5934d247b6c530273d2ad8",
".git/objects/b0/5bf314cd944eeadb7ce913a42f55864acf7fcf": "e9da7d05826c9e00c527f47ae2872dd2",
".git/objects/b9/9d5b61cdf18e4283188279435c3c75904fa71b": "0772fe93e5f11e8e220d0e5fff3d4f0f",
".git/objects/a1/da27fedf54d021a5cde130c44af9ffc21f04f9": "c1b87d803687af1e83b9e403714f416b",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/ef/41b6ce927cea932dbef1fe1ac332cf0320f72f": "8a82887d62bdb2d47620f3337a4d710f",
".git/objects/f9/1ffe9f5c43d1e0263fcf5a3f6e0fba64278ca0": "2894ccf498543a8f6436174a134815ae",
".git/objects/e8/56d582c4202d1477307979fbcc4288fb6997fc": "7dfe8533f438be5c7008501882378e5c",
".git/objects/c5/b1f9299fff7e1be6095681e8f056bf9db5c25e": "68f73bfc49096bfe1a7abc73e3cfe92c",
".git/objects/c2/7a1d6b95259888a42ff8a9bf742b064d767182": "45a3a0b3c0d4c52d6ed83af615c169c1",
".git/objects/e9/eb7be4cad58bbe8449bbb52af405abfd8e9c80": "89da14f77bbba5b6649b150843d03e11",
".git/objects/77/221470c24713593ddf375b2716a508c361d843": "2500b7c2ee0c89c45814de73fa193140",
".git/objects/48/f5d84d5edf1b85cf6395d5968ea043962a42c6": "e5b7147166d88fad249a80901d7fdd5a",
".git/objects/84/d0b5893aa54162b0af6628e299a1aa9b0afde4": "33382420f81dccde8921cb2e19a4cd72",
".git/objects/4a/c2b2a087191bfdc8d742f5471f3964ca6d118f": "48c1ae8dc348550e4aa8da2c8bfc86ca",
".git/objects/24/298ab0373a6461f4b90b5644e507daa90d5595": "ab8ea3c60c0c17931a99463a9147b1e8",
".git/objects/49/b1575a49aa8727e9935a21e3b8022a64cabc1d": "bc2cfe1e4752434934548b2c7b1efe95",
".git/objects/47/e8b21af6038537fb4c06cd83ef95dd6ab41dd4": "2936aedc1fb4f9cdd075060b0be873ce",
".git/objects/7f/91e28f06c3388a4f0b696d9abd122fd39473fe": "1a0d631e19951485db2806e2c256f3b4",
".git/objects/14/f0f970bfcc20e509a08d3459c582e05ed6c79d": "953280fa0ad07a5001f65e1732779588",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc8efe5c5141d25993b69f7f3a987439",
".git/logs/refs/heads/master": "cc8efe5c5141d25993b69f7f3a987439",
".git/logs/refs/remotes/origin/master": "e7793535dd55e6c7a1e99e52a8221d44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "8bac32ccea94959e36817f25a706a171",
".git/refs/remotes/origin/master": "8bac32ccea94959e36817f25a706a171",
".git/index": "d63250cf0c0b66d71341232a15663b7f",
".git/COMMIT_EDITMSG": "b5a3bfe6c41cb991353c601b02cc114b",
"assets/AssetManifest.json": "4f3621c1318e1c9b77acb25b53414f4d",
"assets/NOTICES": "80f1d3ef6b039aa06569472c00dc8b46",
"assets/FontManifest.json": "495d57e6e66054fafa390e37395b2750",
"assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/dash.png": "49fb018f832e893fff7290f21fc27811",
".idea/codeStyles/Project.xml": "feb0a5c614f89eb42214487ea098b144",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "81858c05457d58cb70f682acc31299d8",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "679bfeaf60b7176b2095c3d57b7f0232"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
