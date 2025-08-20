"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/saves/route";
exports.ids = ["app/api/saves/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaves%2Froute&page=%2Fapi%2Fsaves%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaves%2Froute.ts&appDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaves%2Froute&page=%2Fapi%2Fsaves%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaves%2Froute.ts&appDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macintosh_Desktop_recipe_mvp_app_api_saves_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/saves/route.ts */ \"(rsc)/./app/api/saves/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/saves/route\",\n        pathname: \"/api/saves\",\n        filename: \"route\",\n        bundlePath: \"app/api/saves/route\"\n    },\n    resolvedPagePath: \"/Users/macintosh/Desktop/recipe-mvp/app/api/saves/route.ts\",\n    nextConfigOutput,\n    userland: _Users_macintosh_Desktop_recipe_mvp_app_api_saves_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/saves/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzYXZlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2F2ZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzYXZlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hY2ludG9zaCUyRkRlc2t0b3AlMkZyZWNpcGUtbXZwJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hY2ludG9zaCUyRkRlc2t0b3AlMkZyZWNpcGUtbXZwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1U7QUFDdkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGUtbXZwLz83YzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYWNpbnRvc2gvRGVza3RvcC9yZWNpcGUtbXZwL2FwcC9hcGkvc2F2ZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NhdmVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2F2ZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NhdmVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hY2ludG9zaC9EZXNrdG9wL3JlY2lwZS1tdnAvYXBwL2FwaS9zYXZlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zYXZlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaves%2Froute&page=%2Fapi%2Fsaves%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaves%2Froute.ts&appDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/saves/route.ts":
/*!********************************!*\
  !*** ./app/api/saves/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\nasync function POST(req) {\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getSession)();\n    if (!user) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { recipeId } = await req.json();\n    await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.save.upsert({\n        where: {\n            recipeId_userId: {\n                recipeId,\n                userId: user.sub\n            }\n        },\n        update: {},\n        create: {\n            recipeId,\n            userId: user.sub\n        }\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        ok: true\n    });\n}\nasync function GET() {\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getSession)();\n    if (!user) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json([], {\n        status: 200\n    });\n    const saves = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.save.findMany({\n        where: {\n            userId: user.sub\n        },\n        include: {\n            recipe: {\n                select: {\n                    id: true,\n                    title: true,\n                    coverImage: true,\n                    category: true\n                }\n            }\n        },\n        orderBy: {\n            createdAt: \"desc\"\n        }\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(saves);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NhdmVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDRTtBQUVoQyxlQUFlRyxLQUFLQyxHQUFZO0lBQ3JDLE1BQU1DLE9BQU9ILHFEQUFVQTtJQUN2QixJQUFJLENBQUNHLE1BQU0sT0FBT0wsa0ZBQVlBLENBQUNNLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDN0UsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNTCxJQUFJRSxJQUFJO0lBQ25DLE1BQU1MLCtDQUFNQSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQztRQUN2QkMsT0FBTztZQUFFQyxpQkFBaUI7Z0JBQUVKO2dCQUFVSyxRQUFRVCxLQUFLVSxHQUFHO1lBQUM7UUFBRTtRQUN6REMsUUFBUSxDQUFDO1FBQ1RDLFFBQVE7WUFBRVI7WUFBVUssUUFBUVQsS0FBS1UsR0FBRztRQUFDO0lBQ3ZDO0lBQ0EsT0FBT2Ysa0ZBQVlBLENBQUNNLElBQUksQ0FBQztRQUFFWSxJQUFJO0lBQUs7QUFDdEM7QUFFTyxlQUFlQztJQUNwQixNQUFNZCxPQUFPSCxxREFBVUE7SUFDdkIsSUFBSSxDQUFDRyxNQUFNLE9BQU9MLGtGQUFZQSxDQUFDTSxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQUVFLFFBQVE7SUFBSTtJQUN0RCxNQUFNWSxRQUFRLE1BQU1uQiwrQ0FBTUEsQ0FBQ1MsSUFBSSxDQUFDVyxRQUFRLENBQUM7UUFDdkNULE9BQU87WUFBRUUsUUFBUVQsS0FBS1UsR0FBRztRQUFDO1FBQzFCTyxTQUFTO1lBQUVDLFFBQVE7Z0JBQUVDLFFBQVE7b0JBQUVDLElBQUk7b0JBQU1DLE9BQU87b0JBQU1DLFlBQVk7b0JBQU1DLFVBQVU7Z0JBQUs7WUFBRTtRQUFFO1FBQzNGQyxTQUFTO1lBQUVDLFdBQVc7UUFBTztJQUMvQjtJQUNBLE9BQU85QixrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDYztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2lwZS1tdnAvLi9hcHAvYXBpL3NhdmVzL3JvdXRlLnRzPzJjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQC9saWIvYXV0aCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXIgPSBnZXRTZXNzaW9uKClcbiAgaWYgKCF1c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICBjb25zdCB7IHJlY2lwZUlkIH0gPSBhd2FpdCByZXEuanNvbigpXG4gIGF3YWl0IHByaXNtYS5zYXZlLnVwc2VydCh7XG4gICAgd2hlcmU6IHsgcmVjaXBlSWRfdXNlcklkOiB7IHJlY2lwZUlkLCB1c2VySWQ6IHVzZXIuc3ViIH0gfSBhcyBhbnksXG4gICAgdXBkYXRlOiB7fSxcbiAgICBjcmVhdGU6IHsgcmVjaXBlSWQsIHVzZXJJZDogdXNlci5zdWIgfVxuICB9KVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCB1c2VyID0gZ2V0U2Vzc2lvbigpXG4gIGlmICghdXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFtdLCB7IHN0YXR1czogMjAwIH0pXG4gIGNvbnN0IHNhdmVzID0gYXdhaXQgcHJpc21hLnNhdmUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5zdWIgfSxcbiAgICBpbmNsdWRlOiB7IHJlY2lwZTogeyBzZWxlY3Q6IHsgaWQ6IHRydWUsIHRpdGxlOiB0cnVlLCBjb3ZlckltYWdlOiB0cnVlLCBjYXRlZ29yeTogdHJ1ZSB9IH0gfSxcbiAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH1cbiAgfSlcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNhdmVzKVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImdldFNlc3Npb24iLCJQT1NUIiwicmVxIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInJlY2lwZUlkIiwic2F2ZSIsInVwc2VydCIsIndoZXJlIiwicmVjaXBlSWRfdXNlcklkIiwidXNlcklkIiwic3ViIiwidXBkYXRlIiwiY3JlYXRlIiwib2siLCJHRVQiLCJzYXZlcyIsImZpbmRNYW55IiwiaW5jbHVkZSIsInJlY2lwZSIsInNlbGVjdCIsImlkIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiY2F0ZWdvcnkiLCJvcmRlckJ5IiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/saves/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSession: () => (/* binding */ clearSession),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setSession: () => (/* binding */ setSession)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst JWT_NAME = \"recipe_token\";\nfunction setSession(user) {\n    const secret = process.env.JWT_SECRET;\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        sub: user.id,\n        email: user.email,\n        name: user.name,\n        handle: user.handle,\n        role: user.role\n    }, secret, {\n        expiresIn: \"7d\"\n    });\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(JWT_NAME, token, {\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: false,\n        path: \"/\"\n    });\n}\nfunction clearSession() {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().delete(JWT_NAME);\n}\nfunction getSession() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(JWT_NAME)?.value;\n    if (!token) return null;\n    try {\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n        return payload;\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBQ1E7QUFFdEMsTUFBTUUsV0FBVztBQUVWLFNBQVNDLFdBQVdDLElBQStFO0lBQ3hHLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNyQyxNQUFNQyxRQUFRVCx3REFBUSxDQUFDO1FBQUVXLEtBQUtQLEtBQUtRLEVBQUU7UUFBRUMsT0FBT1QsS0FBS1MsS0FBSztRQUFFQyxNQUFNVixLQUFLVSxJQUFJO1FBQUVDLFFBQVFYLEtBQUtXLE1BQU07UUFBRUMsTUFBTVosS0FBS1ksSUFBSTtJQUFDLEdBQUdYLFFBQVE7UUFBRVksV0FBVztJQUFLO0lBQzdJaEIscURBQU9BLEdBQUdpQixHQUFHLENBQUNoQixVQUFVTyxPQUFPO1FBQUVVLFVBQVU7UUFBTUMsVUFBVTtRQUFPQyxRQUFRO1FBQU9DLE1BQU07SUFBSTtBQUM3RjtBQUVPLFNBQVNDO0lBQ2R0QixxREFBT0EsR0FBR3VCLE1BQU0sQ0FBQ3RCO0FBQ25CO0FBRU8sU0FBU3VCO0lBQ2QsTUFBTWhCLFFBQVFSLHFEQUFPQSxHQUFHeUIsR0FBRyxDQUFDeEIsV0FBV3lCO0lBQ3ZDLElBQUksQ0FBQ2xCLE9BQU8sT0FBTztJQUNuQixJQUFJO1FBQ0YsTUFBTW1CLFVBQVU1QiwwREFBVSxDQUFDUyxPQUFPSCxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDeEQsT0FBT29CO0lBQ1QsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGUtbXZwLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xuXG5jb25zdCBKV1RfTkFNRSA9ICdyZWNpcGVfdG9rZW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXNzaW9uKHVzZXI6IHsgaWQ6IHN0cmluZywgZW1haWw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBoYW5kbGU6IHN0cmluZywgcm9sZTogc3RyaW5nIH0pIHtcbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCFcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHN1YjogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIubmFtZSwgaGFuZGxlOiB1c2VyLmhhbmRsZSwgcm9sZTogdXNlci5yb2xlIH0sIHNlY3JldCwgeyBleHBpcmVzSW46ICc3ZCcgfSlcbiAgY29va2llcygpLnNldChKV1RfTkFNRSwgdG9rZW4sIHsgaHR0cE9ubHk6IHRydWUsIHNhbWVTaXRlOiAnbGF4Jywgc2VjdXJlOiBmYWxzZSwgcGF0aDogJy8nIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNlc3Npb24oKSB7XG4gIGNvb2tpZXMoKS5kZWxldGUoSldUX05BTUUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uKCk6IG51bGwgfCB7IHN1Yjogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGhhbmRsZTogc3RyaW5nLCByb2xlOiBzdHJpbmcgfSB7XG4gIGNvbnN0IHRva2VuID0gY29va2llcygpLmdldChKV1RfTkFNRSk/LnZhbHVlXG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsXG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhKSBhcyBhbnlcbiAgICByZXR1cm4gcGF5bG9hZFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iXSwibmFtZXMiOlsiand0IiwiY29va2llcyIsIkpXVF9OQU1FIiwic2V0U2Vzc2lvbiIsInVzZXIiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInRva2VuIiwic2lnbiIsInN1YiIsImlkIiwiZW1haWwiLCJuYW1lIiwiaGFuZGxlIiwicm9sZSIsImV4cGlyZXNJbiIsInNldCIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJzZWN1cmUiLCJwYXRoIiwiY2xlYXJTZXNzaW9uIiwiZGVsZXRlIiwiZ2V0U2Vzc2lvbiIsImdldCIsInZhbHVlIiwicGF5bG9hZCIsInZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFPdEMsTUFBTUMsU0FBU0MsT0FBT0QsTUFBTSxJQUFJLElBQUlELHdEQUFZQSxHQUFFO0FBRXpELElBQUlHLElBQXlCLEVBQWNELE9BQU9ELE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNpcGUtbXZwLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsaves%2Froute&page=%2Fapi%2Fsaves%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsaves%2Froute.ts&appDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacintosh%2FDesktop%2Frecipe-mvp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();