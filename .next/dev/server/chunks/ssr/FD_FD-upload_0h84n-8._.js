module.exports = [
"[project]/FD/FD-upload/contexts/BookingContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingProvider",
    ()=>BookingProvider,
    "TOTAL_STEPS",
    ()=>TOTAL_STEPS,
    "canGoNext",
    ()=>canGoNext,
    "useBooking",
    ()=>useBooking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TOTAL_STEPS = 4;
// 初期値
const INITIAL_STATE = {
    step: 1,
    menuId: null,
    staffId: null,
    date: null,
    time: null,
    notes: ""
};
function canGoNext(state) {
    return state.step <= TOTAL_STEPS;
}
// Reducer関数
function bookingReducer(state, action) {
    switch(action.type){
        case "select-menu":
            // Menu IDを選択して、状態に反映する
            return {
                ...state,
                menuId: action.menuId
            };
        case "select-staff":
            // Staff IDを選択して、状態に反映する
            return {
                ...state,
                staffId: action.staffId
            };
        case "select-date":
            // Dateを選択して、状態に反映する
            return {
                ...state,
                date: action.date
            };
        case "select-time":
            // Timeを選択して、状態に反映する
            return {
                ...state,
                time: action.time
            };
        case "change-notes":
            return {
                ...state,
                notes: action.notes
            };
        case "next":
            if (!canGoNext(state)) return state;
            return {
                ...state,
                step: Math.min(state.step + 1, TOTAL_STEPS)
            };
        case "prev":
            return {
                ...state,
                step: Math.max(state.step - 1, 1)
            };
    }
}
const BookingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function BookingProvider({ shopId, children }) {
    // useReducer で状態管理
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(bookingReducer, INITIAL_STATE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingContext.Provider, {
        value: {
            shopId,
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/FD/FD-upload/contexts/BookingContext.tsx",
        lineNumber: 80,
        columnNumber: 10
    }, this);
}
function useBooking() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BookingContext);
    if (!context) {
        throw new Error("useBooking は BookingProvider の内側で使ってください");
    }
    return context;
}
}),
"[project]/FD/FD-upload/components/booking/BookingForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// BookingContextインポート
var __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$contexts$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/FD/FD-upload/contexts/BookingContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function BookingForm({ shop, menus, staffs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$contexts$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingProvider"], {
        shopId: shop.id,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingFlow, {}, void 0, false, {
            fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
function BookingFlow() {
    // useContext を使って BookingContext の状態 state と dispatch を取得
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$contexts$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBooking"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            state.step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "STEP 1: メニューを選ぶ"
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                lineNumber: 33,
                columnNumber: 28
            }, this),
            state.step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "STEP 2: 日付・時間を選ぶ"
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                lineNumber: 34,
                columnNumber: 28
            }, this),
            state.step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "STEP 3: スタッフを選ぶ（任意）"
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                lineNumber: 35,
                columnNumber: 28
            }, this),
            state.step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "STEP 4: 確認して予約する"
            }, void 0, false, {
                fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                lineNumber: 36,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4 flex justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>dispatch({
                                type: "prev"
                            }),
                        disabled: state.step === 1,
                        className: "rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40",
                        children: "戻る"
                    }, void 0, false, {
                        fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    state.step < __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$contexts$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOTAL_STEPS"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>dispatch({
                                type: "next"
                            }),
                        disabled: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$contexts$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canGoNext"])(state),
                        className: "rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40",
                        children: "次へ"
                    }, void 0, false, {
                        fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$FD$2f$FD$2d$upload$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium disabled:opacity-40",
                        children: "この内容で予約する"
                    }, void 0, false, {
                        fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/FD/FD-upload/components/booking/BookingForm.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/FD/FD-upload/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=FD_FD-upload_0h84n-8._.js.map