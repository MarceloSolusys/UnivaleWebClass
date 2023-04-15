'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e00a630f15207460aadd94244fc1bc71",
".git/config": "05df53eea9c724868f4a875fa72c912c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8c528c3bed24cbba784dd4895b4218d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7338abe977c4308f91c3f757a53f1607",
".git/logs/refs/heads/main": "d7b41437162f59457295596739e186d7",
".git/logs/refs/remotes/origin/main": "5f04f77ecdf73e9e6e1798eda6b0d13b",
".git/objects/01/44253323504ed4cebcbf861da0210bb8db4271": "fbf30de081cc002025325d3dade00334",
".git/objects/07/f54fc9b452729fdaad8c20ed49622304e06b6a": "73b439b17bfafffe720b4b314fcc6b15",
".git/objects/07/f733f88146131ea147aaf59ba12a3f414f8f94": "fcc43591f7e2a551110aee3457750f3e",
".git/objects/08/ebcfed293006ad5a2fa740a92a5f5c1c795bb2": "70ea00b3922353a19c253ae1f62ac7b1",
".git/objects/0d/c8a756538b2a6acf4230cb8f850ac7870f0e00": "6710b38b47a8f8900bfc7e6c33428711",
".git/objects/0e/551cdc52f1f874436f877b7aa7d634c2b10897": "6dbb4f8102929cb981802064b1d0ee95",
".git/objects/0e/79ffb44f9bf1601ce647f0d11f09fb53b286c1": "f0c6d28bb0c020642f5ed1a2325ed9bf",
".git/objects/0f/f58cc66ef98005def56c8a12b3336b2db4d0db": "1dd30d6f761fd775f045e8551bd75600",
".git/objects/16/03b0932e8099e055309e2653a3c7b524fb23bb": "0ca70dfdf29405bd2ddaf6b874693e39",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/515f6e35eacf75721be74710ca857ab32c2c0b": "1051811b826812e07c8f25ba1126848d",
".git/objects/2a/ca9e2020717d8db09ad92d9103dc65c512b1ce": "44ccda2842fd3b88b8f6f26af38de88c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/6703d1d8be7926f0c6075c3bc802daa83b5fb9": "024165ddaba8d627dbed2abf02535d50",
".git/objects/30/a7abb73254292e855a8c6faf6984c0957b4282": "947404ee7ecb9d415f9ea8a14a78309e",
".git/objects/31/c72497e4e0e630ea0090b2749d340f0ce2dec1": "de4cfaba9957d355867a6d79aa515578",
".git/objects/38/911bda2ff04a5bc8ee135d82ed36b1933d91be": "29c6d4db87285c0365f2f320c2b478de",
".git/objects/3a/8a3da13524d3fc4c39f3794fcd07ebc78396c8": "fc9b5e6e8ad3f13203b0c5516bd39606",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/9894c40d4a01686a0f6b50489713be9063207e": "400b30eb56a555c76646f7e0e539eded",
".git/objects/42/6e70622bf5b77f3b95900099ec30ab08e59d93": "f33225ce8bffa1f68a8e6065b5fc9df8",
".git/objects/44/fa1be5724f0a69bed29b64171176de19cd4c50": "be5487fd04bb73abb5bfa979e871ca64",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/4a/c413c2e6ee2573b7c4a17755709325b9a4aabd": "436e0764b5e3b2ff38b60f69853e9198",
".git/objects/4b/51befcc6ca8f0e52c7094e5f03e512e44b1539": "31025700f0f003aabe14d528bd64e33c",
".git/objects/4b/81699e73e643b906f054a0a1b32aa0f1514f5e": "0266033def0e749b3a203fab12ca457f",
".git/objects/4f/6bdb1c59dfce25157bee506cf07f1712843193": "808562f8cb41df40a198cb38d5db532b",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/55/37825df058d59f44cdb69fecd17e972b426c6c": "6da69e36907a95d1ae0680d6c96356f1",
".git/objects/57/41d02df23ca6ea31ec4cc3dd772e17756eb8e0": "b28d18f238a5624f67f2a2119c93d056",
".git/objects/59/566e2d41814445b725492e51de7e5427c509f6": "d87d44b522c62c1d15c868ff82439a97",
".git/objects/5f/25dced5ebaf8f8a76a8f64bfd2a3dccb7854b9": "8c466ee1dc87b370db44dc40c04488e0",
".git/objects/5f/fe1936273d89fc3e3fe80da45c0fc161980870": "55e03c9517f57b2a49957f851b00fab3",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/62/fed04515fa1c757076d425aeb5c29b836e61ae": "4d82fca34022156aafc2471f3a72005f",
".git/objects/65/192d4b64da766aaf03a11d76f5bf565c8bc414": "568a82b0f654f9dbbd382e76c2c64944",
".git/objects/66/e84777b69a9dcff86a19817be210c8f86bb2a6": "7976d6943c73c693882f6ada2be735c7",
".git/objects/67/d0f6303e9eec8f0db9eceba9a9673c8ffaa2da": "589d6a36a43efcebbc028073cb74e2de",
".git/objects/69/14e18184ebb1c3310f5c848bc31ac37ad60ba4": "198725df2f1b7ed3d1ddc35111f31948",
".git/objects/6a/f0015bd8efd24e3924b95925e3fddcc70143fd": "181573792e6d874b473c8fdf387cff09",
".git/objects/72/5dc5f3e883d78ab912fac0c51eceac8432ab9c": "f2ea7cbeeba9d221f86a20944ecc59ec",
".git/objects/76/f93465b3f100d77440f9b746e5f152474a44d2": "a6050253ef91665586a175a36ce010b7",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/00510af67c30b42d551ee6297a0d67297ab429": "9c7aa5fd3723db1eb797aad6b671a20b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/438c2fed795d633bc0c0c6b071bbea0522d307": "c25c80b4ee11b9428c9ece7bc493f3b4",
".git/objects/81/e6db42ccb3a8fa408a8371902b19b20ce97875": "5426bae6bf325b3128671c216a1b9490",
".git/objects/82/20cef75bbaf0ca148635674a9942346d0e5a4d": "4065f54774e88221ab359bc0570cadbe",
".git/objects/83/5e855eefc6a2015e42d5a31e09e3ac1fd53b87": "408939420af8723d1c5906d7ec4799f1",
".git/objects/87/7c8fe002ed071d05457b4579308a440fb3aa79": "060281b9cb7dc7db94f36346b40359f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e6e8c8845fec8f1ea74e5af65069fec9a58cf5": "5978ab801bdb9bbffaa9f0f12300ad33",
".git/objects/8f/c4e9545c3cc4f52879b1594c2c57e93e65620d": "e6eca1d45a6c868e1d631c7c7e2e6092",
".git/objects/91/18ce051041975df38b72f1e6f95a738d03c22a": "3a90e8547c6093fd10b30571531347e0",
".git/objects/91/b9043ffbee1a601f67944d658f7398273cda9a": "fbff176b698832f73b8cbebf6d8ae562",
".git/objects/92/cba6ad136528e59ed62877b34f0e93d810a2fd": "d01d854e7ff7ab094461979d5f88f7e1",
".git/objects/96/882f75ef42aa0777a45ec80dc75294bf902cb2": "0a4bf3742e63445219da866b06a8ac55",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/3a0a6e7c0d35b2cd31b038d8587d43c5e9ae12": "6ba178c197b0906cf978f7e170dfcf4a",
".git/objects/9b/4e578ca6dc26294bdb2712568d84ad9d493d9d": "6ede203250cbd1a02cb7355d1ca993e1",
".git/objects/9e/a7682715ba5395756b261b3ce1546e90c560ec": "8b4b5f0bffcf0d18b923d960b8e28b1c",
".git/objects/a0/81315be65dfc905d2f236fa91bdecca3860771": "694e771b320c1fc3d82a6112187a8723",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/405c5cba3a9317da435e3dcda5b132d292119e": "397b43ea7775eedb89f068a9f2319e5b",
".git/objects/a5/bc02e145f96fbe66f2629838aeac7636578eb1": "6ab1876055f1207704b5ee2b536c0980",
".git/objects/a7/3e7fb107878c621750c301f0c69ed2c16d961c": "00d9d6a878e74dd8c3293149534f42a6",
".git/objects/a8/5120cfc8d04a54902a5b4d35fd6dce728737fc": "0f50bac678790b0bd4e435a277a8253c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/394887f237ea8f6d1227439f52e294bbf5f570": "6b7917d92f5096323c5df24a85009c3a",
".git/objects/ae/2eb4587ce45ad8c6b8eda4a14cb1c70ce70e97": "7ad10d317ba41a73fae8499c7696671c",
".git/objects/ae/45a8959d65ca499ddf43289ea4435890038e87": "345e6e5f600117f1cdeb89ecd630e69d",
".git/objects/b1/363d2c2c3fee8351af3c5e047ac0fce26babd4": "e00fa47698f9b0fa9b7e776c9483350a",
".git/objects/b4/b0db462cc00298ec77fb061e29c4f31fb1d179": "bb595877eca06bd395b07708f2f688ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/abc2c6c647d573ed3ea263a947f8a92b25ca99": "0eaebc3dfa323e5e65614982c6e2d2f2",
".git/objects/b8/dbc435f51b64d00dbcf555b7c55aef085a729c": "cd3f0421549a5f6f611d0e781d43109a",
".git/objects/b9/04c0c4cc0dad0fcbad3e5472e931761aaffba2": "a0bcfd1f4111963edb18534694530a0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/08de00679e11da804af5613dc29972ba7a65a1": "7c2f0f5d0c2656d6d6fdd100cd548335",
".git/objects/c0/1626ec675107a3e4c384c0a9ecfca799f1430a": "2ffdfb1909a903070e8114b382f67dcb",
".git/objects/c3/387ff98c4fb4757ed27e9aba8de2c1f8ec17cb": "28cde89647d802d97ed6fa9039b5a2c6",
".git/objects/c3/c5fa231a5c7f2a40f696b19a33cea580ab08b7": "4b1eb3f5141af14608a1bc5fa29a294c",
".git/objects/c4/5af05f308ec4969e77e6306f76c18c43298354": "9d5290e3267ac3d4dd9bb488bf1b3bf9",
".git/objects/c4/a90c154f1862789630b2931916aabf2d59c4d1": "7ffd4b004433fd8c09b419ac91bc7ace",
".git/objects/c6/782d8cd0fca721590d533cf2b671abc3b9bebc": "d32078b97f2b39224b836fc1d8fa0934",
".git/objects/c7/f0d257eb08786a9e01d5a24465b86300896b2a": "96c4b4cff15029e71b8a8e44928bf212",
".git/objects/cc/3ed1e567245e17178aaea55fd37ad2688ea4dd": "ad5ab8167a07c350d826f08f0ccffc3b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/5e3b831cb4491dee70472ee241f4dae8b716b1": "0fb8c5e997d36a55e9a5f55101c32e74",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d1/f954f0efd728374d949fcf9bad91784442b3e4": "fd9c8c7f8e053e62d0ef178b5f12e318",
".git/objects/d5/221e582600bd14065718a50866b917a96079a9": "5aaaa2d22cadda96644228cda7c9feb2",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/dd/ad6837341a08dd61efe3c11b89b5836b962b26": "d0543874ce4c52e27646c3a205bdf479",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/29bd61a7c0cfd1dc2ba5c37ff8a436eef6c00c": "5346913444c93d6946d9221aaf4d58fe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/def08f5628c5a7e897625ae3610527d96cf0fe": "37b562c9d3c9c1a172ea717da0954bf1",
".git/objects/ed/bc5bec172a4882bb65597b5765ca5ad28b84eb": "1e3020ee0850d62e1c25c4200a5a5fa0",
".git/objects/ef/0015fdaf092602954733f362d50883e6335556": "c32a05c95ed603e7cb5a34fc51f9b67f",
".git/objects/f4/abb9580948aad0820f4d684e9b68d2260c08b9": "9666f540a2867e5efb875f02ffe6803a",
".git/objects/f9/ff1c97a12dae5e0c226c09f9e4a2a743e79585": "55f870e5efbc987cd83539d52fe091ef",
".git/objects/fa/b2e6eac4dd8f1b946093e8b0116ee125fced02": "2478b59a21167ac412d76ee3c266a18b",
".git/objects/fb/178a1d7e66e9c7b96bd967de2dcb2ace865d66": "bbbed4e88a3a7a30ad43f2d5058aeab8",
".git/objects/ff/4868f9397a61242aabea568463bcf54bf1f0e5": "1c43d9b4654ca52162a2a8f462b0b93e",
".git/refs/heads/main": "245188fd7d4f4ad3cf3d37a1476a7871",
".git/refs/remotes/origin/main": "245188fd7d4f4ad3cf3d37a1476a7871",
"assets/AssetManifest.json": "e6bd2311381bd4dd34d86f3cd0168382",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/choco.png": "e8f8a9da03da69206c77d1b157163365",
"assets/images/dart.png": "bdbd3ebec88a12b7fd29eaf11d68a52e",
"assets/images/devices.png": "ccf9f06998ee393fb7e82bd4f8903fd0",
"assets/images/devices_marcas.png": "277ccc45bb92c29b03ede7a80148381e",
"assets/images/flutter.png": "71ebe10f13935e03ba33c80cb0cfb568",
"assets/images/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/images/logo_avatar.png": "ba4f2536134611f56c5a1a9517efe47d",
"assets/images/marcelo.jpg": "e12aa9e4f077c6c0a96fadf00fc5de42",
"assets/images/somoveis.png": "dc3c3233a8143d5135572b6f2155269a",
"assets/images/somoveis_uso.png": "4142318b84a02afb169c33559fb9f990",
"assets/images/univale.png": "ced404699deaed03ad785517fc3a1712",
"assets/images/vscode.png": "1dfcdd051c4da06ffba4e73089cf9b90",
"assets/images/widgets/appbar.png": "9122ca04d6145e9d989056647ccc019e",
"assets/images/widgets/column.png": "a54339778316010d7fbdf3e3fd11739a",
"assets/images/widgets/container.png": "d9d3764d58ecbefb0a1bc63aa9c53954",
"assets/images/widgets/elevatedbutton.png": "6e4a5c47b24ed7122ce8a1cc3aeb8124",
"assets/images/widgets/icon.png": "d51764ff298baa178186a4c18b1a3472",
"assets/images/widgets/image.png": "a778998a0e288789905fda2a0eb816ac",
"assets/images/widgets/row.png": "1a961909a34afe3a9e8435dcc3fe4e1a",
"assets/images/widgets/scaffold.png": "1a0df85b03cca35ca5397eca2cf698d3",
"assets/images/widgets/text.png": "f5ad361161c98a474b7fa01c426b80ab",
"assets/NOTICES": "548649937a14f93b7deca55fc77da073",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "522f559cfd683c1d6b749bbca2a94e20",
"/": "522f559cfd683c1d6b749bbca2a94e20",
"main.dart.js": "cdcf444fe87620baf76b2b89c8df8a2f",
"manifest.json": "6d46a7a1b05f562fc3a348d871e02452",
"README.md": "fa4c05caed923ad7bdd9a078c1097f6b",
"version.json": "38007390e4d6d0c03ae346e279c77df2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
