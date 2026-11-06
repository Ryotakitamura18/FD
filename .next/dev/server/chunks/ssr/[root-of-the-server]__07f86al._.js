module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/FD/FD-upload/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/FD/FD-upload/app/favicon.ico.mjs { IMAGE => \"[project]/FD/FD-upload/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/FD/FD-upload/components/SectionHeading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionHeading({ eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium tracking-[0.32em] text-rose-600 uppercase",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/SectionHeading.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/SectionHeading.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-base leading-7 text-slate-600",
                children: description
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/SectionHeading.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/FD/FD-upload/components/SectionHeading.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/FD/FD-upload/lib/services/shops.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMenus",
    ()=>getMenus,
    "getShop",
    ()=>getShop,
    "getShops",
    ()=>getShops,
    "getStaffs",
    ()=>getStaffs
]);
;
// .env で NEXT_PUBLIC_APP_URL を設定していない場合は、localhost:3000 を使用
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
async function getShops() {
    const res = await fetch(`${BASE_URL}/api/shops`, {
        cache: "no-store"
    });
    const data = await res.json();
    return data.shops;
}
async function getShop(id) {
    const res = await fetch(`${BASE_URL}/api/shops/${id}`, {
        cache: "no-store"
    });
    if (res.status === 404) return null;
    const data = await res.json();
    return data.shop;
}
async function getMenus(shopId) {
    const res = await fetch(`${BASE_URL}/api/shops/${shopId}/menus`, {
        cache: "no-store"
    });
    const data = await res.json();
    return data.menus;
}
async function getStaffs(shopId) {
    const res = await fetch(`${BASE_URL}/api/shops/${shopId}/staffs`, {
        cache: "no-store"
    });
    const data = await res.json();
    return data.staffs;
}
}),
"[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/FD/FD-upload/components/booking/BookingForm.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/FD/FD-upload/components/booking/BookingForm.tsx <module evaluation>", "default");
}),
"[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/FD/FD-upload/components/booking/BookingForm.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/FD/FD-upload/components/booking/BookingForm.tsx", "default");
}),
"[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/FD/FD-upload/app/shop/[id]/book/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// "use client"
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/components/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$lib$2f$services$2f$shops$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/lib/services/shops.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
// useState を使えるようにする場合は、"use client" を有効にする必要があります。
// import { useState } from 'react'
// BookingForm コンポーネントをインポート
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function BookingPage({ params }) {
    // URL パラメータから店舗 ID を取得
    const { id } = await params;
    // APIから店舗情報を取得
    const shop = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$lib$2f$services$2f$shops$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getShop"])(id);
    if (!shop) (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    // APIからメニューとスタッフ情報を取得
    const [menus, staffs] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$lib$2f$services$2f$shops$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMenus"])(id),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$lib$2f$services$2f$shops$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStaffs"])(id)
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                eyebrow: "Booking",
                title: `${shop.name} の予約`,
                description: "メニュー・スタッフ・日時を選んで予約します。"
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/app/shop/[id]/book/page.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$components$2f$booking$2f$BookingForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                shop: shop,
                menus: menus,
                staffs: staffs
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/app/shop/[id]/book/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/FD/FD-upload/app/shop/[id]/book/page.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
}),
"[project]/FD/FD-upload/app/shop/[id]/book/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/FD/FD-upload/app/shop/[id]/book/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07f86al._.js.map