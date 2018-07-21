var serviceWorkerOption = {
  "assets": [
    "/hiking-app/dist/main.bundle.js"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var CACHE_NAME = \"so-cal-hiking-trails-v1\";\r\nfunction generateAssets() {\r\n    var assets = [];\r\n    generateAppResources(assets);\r\n    generateRootResources(assets);\r\n    return assets;\r\n}\r\nfunction generateAppResources(assets) {\r\n    for (var _i = 0, _a = serviceWorkerOption.assets; _i < _a.length; _i++) {\r\n        var asset = _a[_i];\r\n        assets.push(asset);\r\n    }\r\n}\r\nfunction generateRootResources(assets) {\r\n    var root = self.location.pathname.replace(/\\/sw\\.js$/g, \"\");\r\n    assets.push(root);\r\n    assets.push(root + \"/\");\r\n}\r\nvar imageryDomain = \"services.arcgisonline.com\";\r\nself.addEventListener(\"install\", function (event) {\r\n    console.log(\"install\");\r\n    event.waitUntil(caches.open(CACHE_NAME)\r\n        .then(function (cache) {\r\n        var assets = generateAssets();\r\n        return cache.addAll(assets);\r\n    }));\r\n});\r\nself.addEventListener(\"activate\", function (event) {\r\n});\r\nself.addEventListener(\"fetch\", function (event) {\r\n    // Swivel imagery if needed to the one that we cached\r\n    var re = /https:\\/\\/(server|services)\\.arcgisonline\\.com\\/ArcGIS\\/rest\\/services\\/World_Imagery\\/MapServer/i;\r\n    var req;\r\n    if (imageryDomain && re.test(event.request.url)) {\r\n        var url = event.request.url.replace(re, \"https://\" + imageryDomain + \"/ArcGIS/rest/services/World_Imagery/MapServer\");\r\n        req = new Request(url, event.request);\r\n    }\r\n    else {\r\n        req = event.request;\r\n    }\r\n    event.respondWith(caches.match(req, { ignoreVary: true })\r\n        .then(function (response) {\r\n        if (response) {\r\n            return response;\r\n        }\r\n        var fetchRequest = req.clone();\r\n        return fetch(fetchRequest)\r\n            .then(function (response) {\r\n            if (!response || (response.type !== \"opaque\" && response.status !== 200) || response.type === \"error\") {\r\n                return response;\r\n            }\r\n            if (req.url.indexOf(\"chrome-extension:\") === 0) {\r\n                return response;\r\n            }\r\n            var responseToCache = response.clone();\r\n            caches.open(CACHE_NAME)\r\n                .then(function (cache) {\r\n                cache.put(req, responseToCache);\r\n            });\r\n            return response;\r\n        });\r\n    }));\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3cudHM/NWJkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFNLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQztBQUU3QztJQUNFLElBQU0sTUFBTSxHQUFZLEVBQUUsQ0FBQztJQUUzQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5QixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsOEJBQThCLE1BQWU7SUFDM0MsS0FBb0IsVUFBMEIsRUFBMUIsd0JBQW1CLENBQUMsTUFBTSxFQUExQixjQUEwQixFQUExQixJQUEwQixFQUFFO1FBQTNDLElBQU0sS0FBSztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBRUQsK0JBQStCLE1BQWU7SUFDNUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUksSUFBSSxNQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBRUQsSUFBTSxhQUFhLEdBQUcsMkJBQTJCLENBQUM7QUFFbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQVU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixLQUFLLENBQUMsU0FBUyxDQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RCLElBQUksQ0FBQyxlQUFLO1FBQ1QsSUFBTSxNQUFNLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFVO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQVU7SUFDeEMscURBQXFEO0lBQ3JELElBQU0sRUFBRSxHQUFHLG1HQUFtRyxDQUFDO0lBRS9HLElBQUksR0FBWSxDQUFDO0lBRWpCLElBQUksYUFBYSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMvQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLGFBQVcsYUFBYSxrREFBK0MsQ0FBQyxDQUFDO1FBQ25ILEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3ZDO1NBQ0k7UUFDSCxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUNyQjtJQUVELEtBQUssQ0FBQyxXQUFXLENBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDcEMsSUFBSSxDQUFDLGtCQUFRO1FBQ1osSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUVELElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQyxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLGtCQUFRO1lBQ1osSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3JHLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxRQUFRLENBQUM7YUFDakI7WUFFRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxlQUFLO2dCQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBRUwsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FDTCxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgQXNzZXQgPSBSZXF1ZXN0IHwgc3RyaW5nO1xuXG5kZWNsYXJlIGNvbnN0IHNlcnZpY2VXb3JrZXJPcHRpb246IHtcbiAgYXNzZXRzOiBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IENBQ0hFX05BTUUgPSBcInNvLWNhbC1oaWtpbmctdHJhaWxzLXYxXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXNzZXRzKCk6IEFzc2V0W10ge1xuICBjb25zdCBhc3NldHM6IEFzc2V0W10gPSBbXTtcblxuICBnZW5lcmF0ZUFwcFJlc291cmNlcyhhc3NldHMpO1xuICBnZW5lcmF0ZVJvb3RSZXNvdXJjZXMoYXNzZXRzKTtcblxuICByZXR1cm4gYXNzZXRzO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFwcFJlc291cmNlcyhhc3NldHM6IEFzc2V0W10pIHtcbiAgZm9yIChjb25zdCBhc3NldCBvZiBzZXJ2aWNlV29ya2VyT3B0aW9uLmFzc2V0cykge1xuICAgIGFzc2V0cy5wdXNoKGFzc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJvb3RSZXNvdXJjZXMoYXNzZXRzOiBBc3NldFtdKSB7XG4gIGNvbnN0IHJvb3QgPSBzZWxmLmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL3N3XFwuanMkL2csIFwiXCIpO1xuXG4gIGFzc2V0cy5wdXNoKHJvb3QpO1xuICBhc3NldHMucHVzaChgJHtyb290fS9gKTtcbn1cblxuY29uc3QgaW1hZ2VyeURvbWFpbiA9IFwic2VydmljZXMuYXJjZ2lzb25saW5lLmNvbVwiO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIChldmVudDogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKENBQ0hFX05BTUUpXG4gICAgLnRoZW4oY2FjaGUgPT4ge1xuICAgICAgY29uc3QgYXNzZXRzID0gZ2VuZXJhdGVBc3NldHMoKTtcbiAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoYXNzZXRzKTtcbiAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImFjdGl2YXRlXCIsIChldmVudDogYW55KSA9PiB7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgKGV2ZW50OiBhbnkpID0+IHtcbiAgLy8gU3dpdmVsIGltYWdlcnkgaWYgbmVlZGVkIHRvIHRoZSBvbmUgdGhhdCB3ZSBjYWNoZWRcbiAgY29uc3QgcmUgPSAvaHR0cHM6XFwvXFwvKHNlcnZlcnxzZXJ2aWNlcylcXC5hcmNnaXNvbmxpbmVcXC5jb21cXC9BcmNHSVNcXC9yZXN0XFwvc2VydmljZXNcXC9Xb3JsZF9JbWFnZXJ5XFwvTWFwU2VydmVyL2k7XG5cbiAgbGV0IHJlcTogUmVxdWVzdDtcblxuICBpZiAoaW1hZ2VyeURvbWFpbiAmJiByZS50ZXN0KGV2ZW50LnJlcXVlc3QudXJsKSkge1xuICAgIGNvbnN0IHVybCA9IGV2ZW50LnJlcXVlc3QudXJsLnJlcGxhY2UocmUsIGBodHRwczovLyR7aW1hZ2VyeURvbWFpbn0vQXJjR0lTL3Jlc3Qvc2VydmljZXMvV29ybGRfSW1hZ2VyeS9NYXBTZXJ2ZXJgKTtcbiAgICByZXEgPSBuZXcgUmVxdWVzdCh1cmwsIGV2ZW50LnJlcXVlc3QpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJlcSA9IGV2ZW50LnJlcXVlc3Q7XG4gIH1cblxuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMubWF0Y2gocmVxLCB7IGlnbm9yZVZhcnk6IHRydWUgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gcmVxLmNsb25lKCk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoUmVxdWVzdClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IChyZXNwb25zZS50eXBlICE9PSBcIm9wYXF1ZVwiICYmIHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB8fCByZXNwb25zZS50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVxLnVybC5pbmRleE9mKFwiY2hyb21lLWV4dGVuc2lvbjpcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZS5jbG9uZSgpO1xuXG4gICAgICAgICAgICBjYWNoZXMub3BlbihDQUNIRV9OQU1FKVxuICAgICAgICAgICAgICAudGhlbihjYWNoZSA9PiB7XG4gICAgICAgICAgICAgICAgY2FjaGUucHV0KHJlcSwgcmVzcG9uc2VUb0NhY2hlKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cy9zdy50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);