(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex min-h-6 items-center rounded-full px-2.5 py-0.5 text-xs font-bold", {
    variants: {
        variant: {
            default: "bg-muted text-muted-foreground",
            dark: "bg-foreground text-background",
            green: "bg-emerald-50 text-emerald-700",
            blue: "bg-blue-50 text-blue-700"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-transparent px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-foreground text-background hover:bg-foreground/90",
            secondary: "border-border bg-card text-foreground hover:bg-muted",
            accent: "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
            destructive: "border-red-200 bg-red-50 text-red-700 hover:bg-red-100",
            ghost: "text-muted-foreground hover:bg-muted hover:text-foreground"
        },
        size: {
            default: "h-10 px-4",
            sm: "h-8 px-3 text-xs",
            icon: "h-10 w-10 px-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md border border-border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-start justify-between gap-4 border-b border-border p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold leading-snug", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-xs leading-relaxed text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c3 = CardDescription;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c4 = CardContent;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogTitle",
    ()=>DialogTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DialogContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function Dialog({ open, onOpenChange, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContext.Provider, {
        value: {
            open,
            onOpenChange
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogContent({ className, children }) {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogContext);
    if (!context?.open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 grid place-items-center bg-foreground/45 p-4",
        onClick: ()=>context.onOpenChange(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-xl overflow-hidden rounded-md border border-border bg-card shadow-2xl", className),
            onClick: (event)=>event.stopPropagation(),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dialog.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(DialogContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-border p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_c2 = DialogHeader;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_c3 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1 text-xs text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_c4 = DialogDescription;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogContent");
__turbopack_context__.k.register(_c2, "DialogHeader");
__turbopack_context__.k.register(_c3, "DialogTitle");
__turbopack_context__.k.register(_c4, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-28 w-full resize-y rounded-md border border-border bg-background p-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Textarea;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/redesign-wizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedesignWizard",
    ()=>RedesignWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [app-client] (ecmascript) <export default as CircleHelp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.mjs [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/components/redesign-wizard.tsx")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const knowledgeStorageKey = "hanirum-knowledge-items";
const projectDbName = "hanirum-redesign-projects";
const projectStoreName = "projects";
const models = {
    openai: {
        label: "OpenAI Image 2.0",
        id: "gpt-image-2-2026-04-21"
    },
    google: {
        label: "Google Nano Banana 2",
        id: "gemini-3.1-flash-image-preview"
    }
};
const baseSections = [
    [
        "S1 히어로",
        "3초 안에 제품, 타겟, 핵심 약속, CTA를 전달합니다.",
        "제품컷, 대표 USP"
    ],
    [
        "S2 문제 공감",
        "고객이 자기 상황이라고 느끼는 체크리스트를 배치합니다.",
        "사용 전 고민 문구"
    ],
    [
        "S3 베네핏 3개",
        "기능 나열을 체감 언어로 바꿔 기억 구조를 만듭니다.",
        "기능 설명, 사용 장점"
    ],
    [
        "S4 USP 차별점",
        "경쟁 제품 대비 선택 이유를 한 문장으로 압축합니다.",
        "소재, 구성, 가격"
    ],
    [
        "S5 근거/신뢰",
        "결과, 조건, 해석의 3단 구조로 신뢰를 설계합니다.",
        "인증, 수치, 테스트"
    ],
    [
        "S6 사용법",
        "선택지를 2~3개로 줄여 구매 후 사용 장벽을 낮춥니다.",
        "루틴, 구성품"
    ],
    [
        "S7 후기 카드",
        "실제 리뷰가 있을 때 사용감 문장 후기 카드로 구성합니다.",
        "리뷰, 평점"
    ],
    [
        "S8 FAQ/오퍼",
        "마지막 구매 저항을 해소하고 CTA로 마무리합니다.",
        "배송, AS, 혜택"
    ]
];
const commerceTips = [
    "첫 화면은 제품명보다 '누구의 어떤 문제를 해결하는지'가 먼저 보여야 이탈이 줄어듭니다.",
    "상세페이지의 수치는 조건이 함께 있을 때 신뢰가 생깁니다. 기간, 대상, 기준을 같이 적어주세요.",
    "구매전환을 높이는 CTA는 '구매하기'만 반복하기보다 혜택, 안심, 한정 이유를 번갈아 보여주는 편이 좋습니다.",
    "제품 구성이 복잡하면 선택지가 많아 보여 구매가 밀립니다. 대표 구성 1개와 비교 구성 1~2개로 압축해보세요.",
    "리뷰는 별점보다 사용감 문장이 강합니다. 고객이 실제로 말할 법한 짧은 문장 카드가 스캔에 유리합니다.",
    "고가 상품은 장점보다 불안 제거가 먼저입니다. 배송, 교환, AS, 사용법, 보증을 초반부터 노출하세요.",
    "혜택은 마지막에만 두지 말고 히어로, 근거 후, 후기 후, 마지막 CTA에 리듬 있게 반복하면 좋습니다.",
    "제품컷은 예쁘게 보이는 것보다 크기, 질감, 구성품, 사용 상황이 이해되는 쪽이 구매에 더 가깝습니다.",
    "스마트스토어와 쿠팡은 브랜드 서사보다 스캔 속도가 중요합니다. 제목, 불릿, 근거, CTA가 빨리 잡혀야 합니다.",
    "건강/뷰티/식품 카테고리는 효능을 단정하기보다 원료, 사용감, 섭취/사용 루틴, 고객 상황 중심으로 풀어야 안전합니다.",
    "상세페이지 한 장에는 메시지 하나만 담는 편이 좋습니다. 여러 주장을 한 화면에 넣으면 모두 약해집니다.",
    "구매 저항은 가격 때문만은 아닙니다. 나에게 맞을지, 사용이 쉬운지, 믿을 수 있는지가 먼저 해결되어야 합니다."
];
const hanirumYoutubeVideos = [
    {
        id: "QaUZFEM0EjY",
        title: "하네스로 15분만에 업무해방: AI 10배 핵심 기술 공개"
    },
    {
        id: "I-evLECnPwI",
        title: "돈 되는 제품을 찾아 드리는 AI 소싱 마법사 최초 무료 공개"
    },
    {
        id: "TknKqlmD4UU",
        title: "AI 상세페이지 마법사 2.0 공개"
    },
    {
        id: "E8OQozcx2G4",
        title: "100만원 짜리 상세페이지 800원에 만드는 놀라운 방법"
    },
    {
        id: "nfdCD1EzknI",
        title: "처음보는 미친 AI 상세페이지 마법사 1.5 무료 공개"
    },
    {
        id: "qlnjPadfqAw",
        title: "나노바나나로 텍스트 수정 안 되죠? 이걸로 끝냅니다"
    },
    {
        id: "6OW9TZbfxZ0",
        title: "쉽고 빠르지만 놀라운 상세페이지 자동화"
    }
];
const demoProjectTitles = new Set([
    "프리미엄 영양제 상세페이지 리디자인",
    "소형 가전 제품 USP 강화 작업",
    "뷰티 브랜드 첫 화면 3초 이해 개선"
]);
function makeProject(overrides = {}) {
    const model = overrides.model || "openai";
    const count = overrides.count || 1;
    return {
        id: overrides.id || `project-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: overrides.title || "스마트스토어 상세페이지 리디자인",
        channel: overrides.channel || "스마트스토어",
        model,
        count,
        ratio: "9:16",
        status: overrides.status || "완료",
        files: overrides.files || [
            "original-detail.pdf"
        ],
        request: overrides.request || "전환율 중심으로 리디자인",
        createdAt: overrides.createdAt || new Date().toISOString(),
        sections: overrides.sections || baseSections.slice(0, count).map(([name, purpose, source], index)=>({
                id: `S${index + 1}`,
                name,
                purpose,
                source,
                prompt: [
                    `model_label: ${models[model].label}`,
                    `model_id: ${models[model].id}`,
                    "",
                    `section: ${name}`,
                    `purpose: ${purpose}`,
                    "9:16 세로형 상세페이지 섹션. 원본 제품컷과 핵심 USP를 보존하고 구매전환 중심으로 리디자인."
                ].join("<br>")
            }))
    };
}
function loadProjects() {
    return [];
}
function loadKnowledgeItems() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(knowledgeStorageKey);
        if (!saved) return [];
        const parsed = JSON.parse(saved);
        return parsed.slice(0, 50).filter((item)=>item.name && item.text);
    } catch  {
        localStorage.removeItem(knowledgeStorageKey);
        return [];
    }
}
function RedesignWizard() {
    _s();
    const [view, setView] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("dashboard");
    const [projects, setProjects] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [activeProject, setActiveProject] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedModel, setSelectedModel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("openai");
    const [channel, setChannel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("스마트스토어");
    const [count, setCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](1);
    const [ratio, setRatio] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("9:16");
    const [backgroundColor, setBackgroundColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("auto");
    const [files, setFiles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [knowledgeItems, setKnowledgeItems] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [request, setRequest] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("첫 화면에서 제품의 차별점이 바로 보이게 하고, 구매 불안을 줄이는 근거 섹션을 강화해주세요. 과장 표현은 피하고 스마트스토어에 맞춰 스캔이 쉬운 구성으로 정리해주세요.");
    const [productInfoText, setProductInfoText] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [openaiKey, setOpenaiKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [googleKey, setGoogleKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [serverConfig, setServerConfig] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        serverOpenaiKeyConfigured: false,
        serverGoogleKeyConfigured: false,
        knowledgeConfigured: false,
        knowledgeDocuments: 0,
        knowledgeChunks: 0,
        knowledgeAccessRequired: false,
        knowledgeAdminRequired: false
    });
    const [useSharedKnowledge, setUseSharedKnowledge] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [knowledgeAccessKey, setKnowledgeAccessKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [knowledgeAdminKey, setKnowledgeAdminKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [settingsOpen, setSettingsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [knowledgeOpen, setKnowledgeOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [generating, setGenerating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [generationPlan, setGenerationPlan] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [generationProgress, setGenerationProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [editingSectionId, setEditingSectionId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [toast, setToast] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [rolloutRequest, setRolloutRequest] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const knowledgeInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const generationAbortRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RedesignWizard.useEffect": ()=>{
            const initial = loadProjects();
            setProjects(initial);
            setActiveProject(initial[0] ?? null);
            setOpenaiKey(localStorage.getItem("hanirum-openai-key") || "");
            setGoogleKey(localStorage.getItem("hanirum-google-key") || "");
            setUseSharedKnowledge(localStorage.getItem("hanirum-use-shared-knowledge") === "true");
            setKnowledgeAccessKey(localStorage.getItem("hanirum-knowledge-access-key") || "");
            setKnowledgeAdminKey(localStorage.getItem("hanirum-knowledge-admin-key") || "");
            setKnowledgeItems(loadKnowledgeItems());
            fetchServerConfig().then(setServerConfig);
            loadSavedProjects().then({
                "RedesignWizard.useEffect": (savedProjects)=>{
                    if (savedProjects.length === 0) return;
                    setProjects(savedProjects);
                    setActiveProject(savedProjects[0]);
                }
            }["RedesignWizard.useEffect"]);
        }
    }["RedesignWizard.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RedesignWizard.useEffect": ()=>{
            if (!toast) return;
            const timer = window.setTimeout({
                "RedesignWizard.useEffect.timer": ()=>setToast("")
            }["RedesignWizard.useEffect.timer"], 2800);
            return ({
                "RedesignWizard.useEffect": ()=>window.clearTimeout(timer)
            })["RedesignWizard.useEffect"];
        }
    }["RedesignWizard.useEffect"], [
        toast
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RedesignWizard.useEffect": ()=>{
            if (!generating || !generationPlan) {
                setGenerationProgress(null);
                return;
            }
            const totalSeconds = estimateGenerationSeconds(generationPlan.model, generationPlan.count);
            const update = {
                "RedesignWizard.useEffect.update": ()=>{
                    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - generationPlan.startedAt) / 1000));
                    const rawPercent = elapsedSeconds / totalSeconds * 100;
                    const percent = Math.min(96, Math.max(4, Math.round(rawPercent)));
                    const remainingSeconds = Math.max(5, totalSeconds - elapsedSeconds);
                    const tip = commerceTips[Math.floor(elapsedSeconds / 7) % commerceTips.length];
                    setGenerationProgress({
                        percent,
                        elapsedSeconds,
                        remainingSeconds,
                        phase: generationPhase(percent, elapsedSeconds),
                        tip
                    });
                }
            }["RedesignWizard.useEffect.update"];
            update();
            const timer = window.setInterval(update, 1000);
            return ({
                "RedesignWizard.useEffect": ()=>window.clearInterval(timer)
            })["RedesignWizard.useEffect"];
        }
    }["RedesignWizard.useEffect"], [
        generating,
        generationPlan
    ]);
    const currentProject = activeProject || projects[0];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RedesignWizard.useEffect": ()=>{
            try {
                localStorage.setItem(knowledgeStorageKey, JSON.stringify(knowledgeItems));
            } catch  {
                setToast("지식파일 텍스트가 커서 일부 저장에 실패했습니다. 파일 수나 크기를 줄여주세요.");
            }
        }
    }["RedesignWizard.useEffect"], [
        knowledgeItems
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RedesignWizard.useEffect": ()=>{
            localStorage.setItem("hanirum-use-shared-knowledge", String(useSharedKnowledge));
            localStorage.setItem("hanirum-knowledge-access-key", knowledgeAccessKey);
            localStorage.setItem("hanirum-knowledge-admin-key", knowledgeAdminKey);
        }
    }["RedesignWizard.useEffect"], [
        useSharedKnowledge,
        knowledgeAccessKey,
        knowledgeAdminKey
    ]);
    async function generate(nextCount = count, nextRolloutRequest = "", startSection = 1, baseProject, showWaitVideo = false, displayCount = nextCount, displayIndex = 1) {
        const outputCount = typeof nextCount === "number" && Number.isFinite(nextCount) ? nextCount : count;
        const outputRolloutRequest = typeof nextRolloutRequest === "string" ? nextRolloutRequest : "";
        if (files.length === 0) {
            setToast("기존 상세페이지 이미지 또는 PDF를 먼저 업로드해주세요.");
            setView("workspace");
            return null;
        }
        const hasKey = selectedModel === "openai" ? Boolean(openaiKey) : Boolean(googleKey);
        if (!hasKey) {
            setToast(`${models[selectedModel].label} API 키를 먼저 설정해주세요.`);
            setSettingsOpen(true);
            return null;
        }
        if (useSharedKnowledge && serverConfig.knowledgeAccessRequired && !knowledgeAccessKey.trim()) {
            setToast("공통 사전 지식 사용 키를 입력해주세요.");
            return null;
        }
        if (outputCount > 1 && !baseProject) {
            reportClientLog("generate-sequence:start", {
                model: selectedModel,
                count: outputCount,
                startSection
            });
            let workingProject = null;
            for(let sectionNumber = startSection; sectionNumber < startSection + outputCount; sectionNumber += 1){
                const nextProject = await generate(1, outputRolloutRequest, sectionNumber, workingProject, true, outputCount, sectionNumber - startSection + 1);
                if (!nextProject) return workingProject;
                workingProject = nextProject;
            }
            return workingProject;
        }
        reportClientLog("generate:start", {
            model: selectedModel,
            count: outputCount,
            startSection,
            files: files.length,
            append: Boolean(baseProject)
        });
        setGenerationPlan({
            model: selectedModel,
            count: outputCount,
            displayCount,
            displayIndex,
            showWaitVideo,
            startedAt: Date.now()
        });
        setGenerating(true);
        setToast("원본 자료를 이미지 생성용 PNG로 변환하는 중입니다.");
        const abortController = new AbortController();
        generationAbortRef.current = abortController;
        try {
            const form = new FormData();
            const uploadFiles = await normalizeFilesForUpload(files);
            if (abortController.signal.aborted) throw new DOMException("생성 요청을 취소했습니다.", "AbortError");
            setToast("원본 분석과 실제 이미지 생성을 시작합니다.");
            const knowledgeText = useSharedKnowledge ? knowledgeItems.map((item, index)=>`# 등록 지식파일 ${index + 1}: ${item.name}\n${item.text}`).join("\n\n").slice(0, 60000) : "";
            uploadFiles.forEach((file)=>form.append("files", file));
            form.append("knowledgeText", knowledgeText);
            form.append("productInfoText", productInfoText);
            form.append("useKnowledge", "true");
            form.append("knowledgeAccessKey", knowledgeAccessKey);
            form.append("request", request);
            form.append("model", selectedModel);
            form.append("channel", channel);
            form.append("ratio", ratio);
            form.append("backgroundColor", backgroundColor);
            form.append("count", String(outputCount));
            form.append("startSection", String(startSection));
            form.append("rolloutRequest", outputRolloutRequest);
            form.append("openaiKey", openaiKey);
            form.append("googleKey", googleKey);
            const response = await fetch("/api/generate", {
                method: "POST",
                body: form,
                signal: abortController.signal
            });
            const data = await readApiResponse(response);
            reportClientLog("generate:response", {
                ok: response.ok,
                status: response.status,
                count: outputCount,
                startSection,
                generated: data.project?.sections?.length || 0,
                warning: data.project?.warning || ""
            });
            if (!response.ok) throw new Error(data.error || "생성 요청 실패");
            if (!data.project?.sections?.length) {
                throw new Error(data.project?.warning || "생성 응답은 성공했지만 표시할 이미지가 없습니다. 서버 로그의 generated/failed 값을 확인해주세요.");
            }
            const project = {
                ...data.project,
                title: projectDisplayTitle(data.project),
                sections: data.project.sections.map((section)=>({
                        id: section.section_id,
                        name: section.name,
                        purpose: section.purpose,
                        source: section.source,
                        prompt: section.prompt,
                        imageUrl: section.imageUrl
                    }))
            };
            const finalProject = baseProject ? mergeGeneratedProject(baseProject, project) : project;
            const nextProjects = [
                finalProject,
                ...projects
            ].filter((candidate, index, list)=>list.findIndex((item)=>item.id === candidate.id) === index).slice(0, 8);
            setProjects(nextProjects);
            setActiveProject(finalProject);
            setView("results");
            setToast(data.project.warning || `${models[selectedModel].label}로 ${project.sections.length}장 생성 완료`);
            return finalProject;
        } catch (error) {
            reportClientLog("generate:error", {
                count: outputCount,
                startSection,
                message: error instanceof Error ? error.message : "unknown"
            });
            if (isAbortError(error)) setToast("생성 요청을 취소했습니다.");
            else setToast(error instanceof Error ? error.message : "이미지 생성 중 오류가 발생했습니다.");
            return null;
        } finally{
            if (generationAbortRef.current === abortController) generationAbortRef.current = null;
            setGenerating(false);
        }
    }
    async function generateRemainingSections() {
        const baseProject = currentProject;
        if (!baseProject?.sections.length) {
            await generate(8, rolloutRequest);
            return;
        }
        let workingProject = baseProject;
        const existingSectionNumbers = new Set(workingProject.sections.map((section)=>Number(section.id.replace(/\D/g, ""))).filter((sectionNumber)=>Number.isFinite(sectionNumber)));
        const missingSections = Array.from({
            length: 8
        }, (_, index)=>index + 1).filter((sectionNumber)=>!existingSectionNumbers.has(sectionNumber));
        reportClientLog("generate-rest:start", {
            existing: workingProject.sections.length,
            missing: missingSections.join(",")
        });
        if (missingSections.length === 0) {
            setToast("이미 8장 상세페이지가 생성되어 있습니다.");
            return;
        }
        for (const [index, sectionNumber] of missingSections.entries()){
            setToast(`S${sectionNumber} 섹션을 생성합니다.`);
            const nextProject = await generate(1, rolloutRequest, sectionNumber, workingProject, true, missingSections.length, index + 1);
            if (!nextProject) break;
            workingProject = nextProject;
        }
    }
    function saveSettings() {
        const nextOpenaiKey = openaiKey.trim();
        const nextGoogleKey = googleKey.trim();
        localStorage.setItem("hanirum-openai-key", nextOpenaiKey);
        localStorage.setItem("hanirum-google-key", nextGoogleKey);
        setOpenaiKey(nextOpenaiKey);
        setGoogleKey(nextGoogleKey);
        setSettingsOpen(false);
        setToast("API 키 설정을 저장했습니다.");
    }
    function clearSettings() {
        localStorage.removeItem("hanirum-openai-key");
        localStorage.removeItem("hanirum-google-key");
        setOpenaiKey("");
        setGoogleKey("");
        setToast("저장된 API 키를 삭제했습니다.");
    }
    function openProject(project) {
        setActiveProject(project);
        setView("results");
    }
    async function deleteProject(project) {
        const confirmed = window.confirm(`'${projectDisplayTitle(project)}' 작업을 삭제할까요?`);
        if (!confirmed) return;
        try {
            await deleteProjectFromDb(project.id);
            setProjects((current)=>current.filter((candidate)=>candidate.id !== project.id));
            setActiveProject((current)=>current?.id === project.id ? null : current);
            setToast("작업을 삭제했습니다.");
        } catch (error) {
            setToast(error instanceof Error ? error.message : "작업 삭제 중 오류가 발생했습니다.");
        }
    }
    async function registerKnowledgeFiles(nextFiles) {
        const selected = nextFiles.slice(0, 50);
        if (selected.length === 0) return;
        if (serverConfig.knowledgeAdminRequired && !knowledgeAdminKey.trim()) {
            setToast("지식파일 등록용 운영자 키를 입력해주세요.");
            setKnowledgeOpen(true);
            return;
        }
        setToast("지식파일을 읽고 RAG 인덱싱을 준비하는 중입니다.");
        try {
            const items = [];
            for (const file of selected){
                const text = await extractKnowledgeText([
                    file
                ]);
                const indexResult = await indexKnowledgeFile(file.name, text, knowledgeAdminKey);
                items.push({
                    id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
                    name: file.name,
                    type: file.type || "file",
                    size: file.size,
                    text: text.slice(0, 18000),
                    createdAt: new Date().toISOString(),
                    indexed: indexResult.indexed,
                    chunks: indexResult.chunks,
                    documentId: indexResult.documentId,
                    reason: indexResult.reason
                });
            }
            const filtered = items.filter((item)=>item.text.trim().length > 0);
            setKnowledgeItems((current)=>[
                    ...filtered,
                    ...current
                ].slice(0, 50));
            const indexedCount = filtered.filter((item)=>item.indexed).length;
            setToast(indexedCount > 0 ? `${indexedCount}개 지식파일을 RAG로 인덱싱했습니다.` : `${filtered.length}개 지식파일을 로컬 fallback으로 등록했습니다.`);
            fetchServerConfig().then(setServerConfig);
        } catch (error) {
            setToast(error instanceof Error ? error.message : "지식파일 등록 중 오류가 발생했습니다.");
        }
    }
    async function deleteKnowledgeItem(item) {
        if (serverConfig.knowledgeAdminRequired && !knowledgeAdminKey.trim()) {
            setToast("지식파일 삭제용 운영자 키를 입력해주세요.");
            setKnowledgeOpen(true);
            return;
        }
        setKnowledgeItems((current)=>current.filter((candidate)=>candidate.id !== item.id));
        try {
            await deleteIndexedKnowledge(item.documentId, knowledgeAdminKey);
            setToast("지식파일을 삭제했습니다.");
            fetchServerConfig().then(setServerConfig);
        } catch  {
            setToast("화면 목록에서는 삭제했지만 RAG 저장소 삭제 확인은 실패했습니다.");
        }
    }
    async function saveCurrentProject(project) {
        const targetProject = project || currentProject;
        if (!targetProject) {
            setToast("저장할 작업이 없습니다.");
            return;
        }
        const savedProject = {
            ...targetProject,
            title: projectDisplayTitle(targetProject),
            savedAt: new Date().toISOString(),
            status: "저장됨"
        };
        try {
            await saveProjectToDb(savedProject);
            setProjects((current)=>[
                    savedProject,
                    ...current.filter((candidate)=>candidate.id !== savedProject.id)
                ].slice(0, 20));
            setActiveProject(savedProject);
            setToast("작업을 저장했습니다. 대시보드에서 다시 열 수 있습니다.");
        } catch (error) {
            setToast(error instanceof Error ? error.message : "작업 저장 중 오류가 발생했습니다.");
        }
    }
    async function editSection(sectionId, editRequest, model) {
        const project = currentProject;
        const section = project?.sections.find((candidate)=>candidate.id === sectionId);
        const trimmedEditRequest = editRequest.trim();
        if (!project || !section) {
            setToast("수정할 섹션을 찾지 못했습니다.");
            return;
        }
        if (!section.imageUrl) {
            setToast("저장된 이미지가 없는 섹션은 수정할 수 없습니다. 다시 생성한 뒤 시도해주세요.");
            return;
        }
        const hasKey = model === "openai" ? Boolean(openaiKey) : Boolean(googleKey);
        if (!hasKey) {
            setToast(`${models[model].label} API 키를 먼저 설정해주세요.`);
            setSettingsOpen(true);
            return;
        }
        if (!trimmedEditRequest) {
            setToast("섹션 수정 요청을 입력하거나 빠른 입력 버튼을 선택해주세요.");
            return;
        }
        setEditingSectionId(sectionId);
        setGenerationPlan({
            model,
            count: 1,
            startedAt: Date.now()
        });
        setGenerating(true);
        setToast(`${section.name} 섹션을 수정하고 있습니다.`);
        const abortController = new AbortController();
        generationAbortRef.current = abortController;
        try {
            const requestImageUrl = await compressImageForRequest(section.imageUrl);
            reportClientLog("edit-section:start", {
                model,
                sectionId,
                imageBytes: estimateDataUrlBytes(requestImageUrl)
            });
            const response = await fetch("/api/edit-section", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model,
                    imageUrl: requestImageUrl,
                    request: trimmedEditRequest,
                    section,
                    project: {
                        title: projectDisplayTitle(project),
                        channel: project.channel,
                        request: project.request
                    },
                    openaiKey,
                    googleKey
                }),
                signal: abortController.signal
            });
            const data = await readApiResponse(response);
            if (!response.ok) throw new Error(data.error || "섹션 수정 실패");
            const updatedProject = {
                ...project,
                sections: project.sections.map((candidate)=>candidate.id === sectionId ? addSectionRevision(candidate, data.imageUrl, data.prompt || candidate.prompt, trimmedEditRequest, model) : candidate),
                status: project.savedAt ? "수정됨" : project.status
            };
            setActiveProject(updatedProject);
            setProjects((current)=>[
                    updatedProject,
                    ...current.filter((candidate)=>candidate.id !== updatedProject.id)
                ].slice(0, 20));
            setToast(`${section.name} 수정 완료. 마음에 들면 작업 저장을 눌러주세요.`);
        } catch (error) {
            reportClientLog("edit-section:error", {
                sectionId,
                message: error instanceof Error ? error.message : "unknown"
            });
            if (isAbortError(error)) setToast("섹션 수정 요청을 취소했습니다.");
            else setToast(error instanceof Error ? error.message : "섹션 수정 중 오류가 발생했습니다.");
        } finally{
            if (generationAbortRef.current === abortController) generationAbortRef.current = null;
            setEditingSectionId(null);
            setGenerating(false);
        }
    }
    function cancelGeneration() {
        generationAbortRef.current?.abort();
        generationAbortRef.current = null;
        setEditingSectionId(null);
        setGenerating(false);
        setToast("요청을 취소했습니다. 이미 서버에 전달된 외부 API 요청은 잠시 후 로그에 완료될 수 있습니다.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid min-h-screen grid-cols-[248px_minmax(0,1fr)] max-[1120px]:grid-cols-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sticky top-0 h-screen border-r border-border bg-white/75 p-5 backdrop-blur max-[1120px]:static max-[1120px]:h-auto max-[1120px]:border-b max-[1120px]:border-r-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "mb-6 flex items-center gap-3 rounded-md text-left transition hover:opacity-75",
                        onClick: ()=>setView("dashboard"),
                        "aria-label": "대시보드로 이동",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid size-9 place-items-center rounded-md bg-foreground text-xs font-black text-background",
                                children: "HR"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 711,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "block text-sm leading-tight",
                                    children: [
                                        "한이룸의 상세페이지",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 713,
                                            columnNumber: 71
                                        }, this),
                                        "리디자인 마법사 1.0"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 713,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 705,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "grid gap-1.5 max-[1120px]:grid-cols-3",
                        children: [
                            [
                                "dashboard",
                                "대시보드",
                                "01"
                            ],
                            [
                                "workspace",
                                "리디자인 작업",
                                "02"
                            ],
                            [
                                "results",
                                "결과 확인",
                                "03"
                            ]
                        ].map(([id, label, index])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center justify-between rounded-md px-3 text-left text-sm text-muted-foreground", view === id && "bg-foreground text-background shadow-sm"),
                                onClick: ()=>setView(id),
                                children: [
                                    label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: index
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-3 p-3 text-[11px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate",
                                            children: "OpenAI Image 2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 738,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "shrink-0 whitespace-nowrap",
                                            variant: openaiKey ? "green" : "default",
                                            children: openaiKey ? "연결 완료" : "키 필요"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 739,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate",
                                            children: "Google Nano Banana 2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "shrink-0 whitespace-nowrap",
                                            variant: googleKey ? "green" : "default",
                                            children: googleKey ? "연결 완료" : "키 필요"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate",
                                            children: "공통 지식 RAG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "shrink-0 whitespace-nowrap",
                                            variant: serverConfig.knowledgeConfigured ? "green" : "default",
                                            children: serverConfig.knowledgeConfigured ? "서버 연결" : "미설정"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 704,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-w-0 p-6 max-md:p-4",
                children: [
                    view === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {
                        projects: projects,
                        onNew: ()=>setView("workspace"),
                        onOpenProject: openProject,
                        onDeleteProject: deleteProject,
                        onSettings: ()=>setSettingsOpen(true),
                        onKnowledge: ()=>setKnowledgeOpen(true),
                        knowledgeCount: Math.max(knowledgeItems.length, serverConfig.knowledgeDocuments),
                        serverConfig: serverConfig
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 755,
                        columnNumber: 11
                    }, this),
                    view === "workspace" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Workspace, {
                        selectedModel: selectedModel,
                        setSelectedModel: setSelectedModel,
                        channel: channel,
                        setChannel: setChannel,
                        count: count,
                        setCount: setCount,
                        ratio: ratio,
                        setRatio: setRatio,
                        backgroundColor: backgroundColor,
                        setBackgroundColor: setBackgroundColor,
                        files: files,
                        setFiles: setFiles,
                        request: request,
                        setRequest: setRequest,
                        productInfoText: productInfoText,
                        setProductInfoText: setProductInfoText,
                        inputRef: inputRef,
                        knowledgeCount: Math.max(knowledgeItems.length, serverConfig.knowledgeDocuments),
                        serverConfig: serverConfig,
                        useSharedKnowledge: useSharedKnowledge,
                        setUseSharedKnowledge: setUseSharedKnowledge,
                        knowledgeAccessKey: knowledgeAccessKey,
                        setKnowledgeAccessKey: setKnowledgeAccessKey,
                        generating: generating,
                        onGenerate: ()=>generate(),
                        onOpenKnowledge: ()=>setKnowledgeOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 767,
                        columnNumber: 11
                    }, this),
                    view === "results" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Results, {
                        project: currentProject,
                        rolloutRequest: rolloutRequest,
                        setRolloutRequest: setRolloutRequest,
                        onToast: setToast,
                        onSave: ()=>saveCurrentProject(currentProject),
                        onEditSection: editSection,
                        onGenerateRest: generateRemainingSections,
                        generating: generating,
                        editingSectionId: editingSectionId
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 797,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: settingsOpen,
                onOpenChange: setSettingsOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "API 키 설정"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 814,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "이미지 생성은 여기에 입력한 사용자 키로 실행합니다. 서버 OpenAI 키는 공통 지식 RAG 검색용으로만 사용합니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 815,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 813,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-xs font-bold text-muted-foreground",
                                            children: "OpenAI Image 2.0 API 키"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 819,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "password",
                                            value: openaiKey,
                                            onChange: (event)=>setOpenaiKey(event.target.value),
                                            placeholder: "sk-..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 820,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 818,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-2 block text-xs font-bold text-muted-foreground",
                                            children: "Google Nano Banana 2 API 키"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 823,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "password",
                                            value: googleKey,
                                            onChange: (event)=>setGoogleKey(event.target.value),
                                            placeholder: "AIza..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 824,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 822,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            onClick: clearSettings,
                                            children: "키 초기화"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 827,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            onClick: ()=>setSettingsOpen(false),
                                            children: "닫기"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 828,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: saveSettings,
                                            children: "저장"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 826,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 817,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 812,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 811,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: knowledgeOpen,
                onOpenChange: setKnowledgeOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "참고자료 파일 등록"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 838,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "원하는 참고자료 파일을 자유롭게 등록해주세요. 등록된 자료는 리디자인 시 기본 원칙으로 반영됩니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 839,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 837,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 p-6 text-sm text-emerald-700 transition hover:bg-emerald-50 hover:border-emerald-300",
                                    onClick: ()=>knowledgeInputRef.current?.click(),
                                    onDragOver: (event)=>event.preventDefault(),
                                    onDrop: (event)=>{
                                        event.preventDefault();
                                        registerKnowledgeFiles(Array.from(event.dataTransfer.files));
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full bg-emerald-100/80 p-3 shadow-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "size-5 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 851,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "클릭하거나 파일을 드래그하여 업로드"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-emerald-600/70",
                                                    children: "PDF, TXT, MD 파일 및 이미지 지원"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 856,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 854,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 842,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: knowledgeInputRef,
                                    hidden: true,
                                    multiple: true,
                                    type: "file",
                                    onChange: (event)=>registerKnowledgeFiles(Array.from(event.target.files || []))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 859,
                                    columnNumber: 13
                                }, this),
                                knowledgeItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid max-h-[260px] gap-2.5 overflow-y-auto pr-1",
                                    children: knowledgeItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group flex items-center justify-between gap-3 rounded-lg border border-border bg-white p-3 text-sm shadow-sm transition-all hover:border-emerald-200 hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 flex-1 items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex size-9 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "size-4.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 871,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "truncate font-medium text-foreground",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 flex items-center gap-2 text-[11px] text-muted-foreground",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                (item.size / 1024).toFixed(1),
                                                                                " KB"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                            lineNumber: 877,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                            lineNumber: 878,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "텍스트 ",
                                                                                item.text.length.toLocaleString(),
                                                                                "자"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                            lineNumber: 879,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        item.indexed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "•"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                                    lineNumber: 882,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "green",
                                                                                    className: "h-4 px-1.5 text-[9px] uppercase tracking-wider",
                                                                                    children: "RAG"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                                    lineNumber: 883,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "shrink-0 text-muted-foreground opacity-40 transition-all hover:bg-red-50 hover:text-red-600 hover:opacity-100 group-hover:opacity-100",
                                                    onClick: ()=>deleteKnowledgeItem(item),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 867,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-muted-foreground",
                                        children: [
                                            "아직 등록된 파일이 없습니다.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 898,
                                                columnNumber: 35
                                            }, this),
                                            "제품 스펙, 타겟 고객, 브랜드 가이드 등을 업로드하시면 AI가 이를 기반으로 더 정확하게 리디자인합니다."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 897,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 896,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex justify-end border-t border-border pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "w-full font-semibold shadow-sm",
                                        onClick: ()=>setKnowledgeOpen(false),
                                        children: "파일 등록 완료"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 904,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 903,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 841,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 836,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 835,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 z-50 max-w-sm rounded-md bg-foreground px-4 py-3 text-sm text-background shadow-xl",
                children: toast
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 911,
                columnNumber: 9
            }, this),
            generating && generationProgress && generationPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GenerationProgressPanel, {
                progress: generationProgress,
                modelLabel: models[generationPlan.model].label,
                count: generationPlan.displayCount || generationPlan.count,
                currentIndex: generationPlan.displayIndex || 1,
                showVideo: Boolean(generationPlan.showWaitVideo),
                videoSeed: generationPlan.startedAt,
                onCancel: cancelGeneration
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 916,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
}
_s(RedesignWizard, "05oJUWaeg2uCtiuhmh4xpZ+ICjQ=");
_c = RedesignWizard;
async function fetchServerConfig() {
    try {
        const response = await fetch("/api/config");
        if (!response.ok) throw new Error("config fetch failed");
        return await response.json();
    } catch  {
        return {
            serverOpenaiKeyConfigured: false,
            serverGoogleKeyConfigured: false,
            knowledgeConfigured: false,
            knowledgeDocuments: 0,
            knowledgeChunks: 0,
            knowledgeAccessRequired: false,
            knowledgeAdminRequired: false
        };
    }
}
async function readApiResponse(response) {
    const text = await response.text();
    if (!text) return {};
    try {
        return JSON.parse(text);
    } catch  {
        return {
            error: simplifyPlainTextError(text, response.status)
        };
    }
}
function simplifyPlainTextError(text, status) {
    const message = text.trim() || "요청 처리 중 오류가 발생했습니다.";
    if (status === 413 || message.toLowerCase().includes("request entity too large")) {
        return "이미지 데이터가 너무 커서 섹션 수정 요청을 보낼 수 없습니다. 수정용 이미지를 압축해 다시 시도했지만, 계속 실패하면 해당 섹션을 다시 생성해 주세요.";
    }
    return message.slice(0, 500);
}
function reportClientLog(event, payload = {}) {
    fetch("/api/client-log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            event,
            payload,
            timestamp: new Date().toISOString()
        }),
        keepalive: true
    }).catch(()=>{
    // Logging must never interrupt generation.
    });
}
async function openProjectDb() {
    if (typeof indexedDB === "undefined") return null;
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open(projectDbName, 1);
        request.onupgradeneeded = ()=>{
            const db = request.result;
            if (!db.objectStoreNames.contains(projectStoreName)) {
                db.createObjectStore(projectStoreName, {
                    keyPath: "id"
                });
            }
        };
        request.onsuccess = ()=>resolve(request.result);
        request.onerror = ()=>reject(request.error);
    });
}
async function loadSavedProjects() {
    const db = await openProjectDb();
    if (!db) return [];
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction(projectStoreName, "readonly");
        const store = transaction.objectStore(projectStoreName);
        const request = store.getAll();
        request.onsuccess = ()=>{
            const projects = request.result.filter((project)=>project?.id && project.sections?.length).filter((project)=>!isDemoProject(project)).sort((a, b)=>new Date(b.savedAt || b.createdAt).getTime() - new Date(a.savedAt || a.createdAt).getTime());
            resolve(projects);
        };
        request.onerror = ()=>reject(request.error);
    });
}
function isDemoProject(project) {
    return demoProjectTitles.has(project.title) && project.sections.every((section)=>!section.imageUrl);
}
async function saveProjectToDb(project) {
    const db = await openProjectDb();
    if (!db) throw new Error("브라우저 저장소를 열 수 없습니다.");
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction(projectStoreName, "readwrite");
        transaction.objectStore(projectStoreName).put(project);
        transaction.oncomplete = ()=>resolve();
        transaction.onerror = ()=>reject(transaction.error);
    });
}
async function deleteProjectFromDb(projectId) {
    const db = await openProjectDb();
    if (!db) throw new Error("브라우저 저장소를 열 수 없습니다.");
    return new Promise((resolve, reject)=>{
        const transaction = db.transaction(projectStoreName, "readwrite");
        transaction.objectStore(projectStoreName).delete(projectId);
        transaction.oncomplete = ()=>resolve();
        transaction.onerror = ()=>reject(transaction.error);
    });
}
function projectDisplayTitle(project) {
    const inferred = inferTitleFromAnalysis(project.analysis);
    if (inferred) return inferred;
    const current = String(project.title || "").trim();
    if (current && !current.includes(new Date().getFullYear().toString())) return current;
    return current || `${project.channel || "스마트스토어"} 상세페이지 리디자인`;
}
function mergeGeneratedProject(baseProject, generatedProject) {
    const sections = [
        ...baseProject.sections
    ];
    for (const generatedSection of generatedProject.sections){
        const existingIndex = sections.findIndex((section)=>section.id === generatedSection.id);
        if (existingIndex >= 0) sections[existingIndex] = generatedSection;
        else sections.push(generatedSection);
    }
    sections.sort((a, b)=>sectionSortNumber(a.id) - sectionSortNumber(b.id));
    return {
        ...baseProject,
        title: projectDisplayTitle(baseProject) || projectDisplayTitle(generatedProject),
        status: generatedProject.status,
        count: sections.length,
        sections,
        analysis: generatedProject.analysis || baseProject.analysis,
        createdAt: baseProject.createdAt || generatedProject.createdAt
    };
}
function sectionSortNumber(sectionId) {
    const sectionNumber = Number(sectionId.replace(/\D/g, ""));
    return Number.isFinite(sectionNumber) ? sectionNumber : 999;
}
function downloadDataUrl(url, fileName) {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
}
function buildImageFileName(projectTitle, section, index, revisionLabel = "") {
    const ext = imageExtension(section.imageUrl || "");
    const parts = [
        projectTitle || "redesign",
        section.id || `S${index + 1}`,
        section.name || "section",
        revisionLabel && revisionLabel !== "원본" ? revisionLabel : ""
    ].filter(Boolean);
    return `${sanitizeDownloadName(parts.join("-"))}.${ext}`;
}
function imageExtension(url) {
    const mime = url.match(/^data:([^;]+);/)?.[1] || "";
    if (mime.includes("jpeg")) return "jpg";
    if (mime.includes("webp")) return "webp";
    if (mime.includes("png")) return "png";
    return "png";
}
function sanitizeDownloadName(name) {
    return name.replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 120) || "redesign-image";
}
async function compressImageForRequest(dataUrl) {
    if (!dataUrl.startsWith("data:image/")) return dataUrl;
    try {
        const image = await loadDataUrlImage(dataUrl);
        const maxWidth = 960;
        const scale = Math.min(1, maxWidth / Math.max(1, image.naturalWidth));
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d", {
            alpha: false
        });
        if (!context) return dataUrl;
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        return await canvasToDataUrl(canvas, "image/jpeg", 0.84);
    } catch  {
        return dataUrl;
    }
}
function loadDataUrlImage(dataUrl) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image);
        image.onerror = ()=>reject(new Error("수정용 이미지를 압축하지 못했습니다."));
        image.src = dataUrl;
    });
}
async function canvasToDataUrl(canvas, type, quality) {
    const blob = await new Promise((resolve, reject)=>{
        canvas.toBlob((result)=>{
            if (result) resolve(result);
            else reject(new Error("이미지 압축에 실패했습니다."));
        }, type, quality);
    });
    return blobToDataUrl(blob);
}
function blobToDataUrl(blob) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result || ""));
        reader.onerror = ()=>reject(reader.error || new Error("이미지 변환에 실패했습니다."));
        reader.readAsDataURL(blob);
    });
}
function estimateDataUrlBytes(dataUrl) {
    const payload = dataUrl.split(",")[1] || "";
    return Math.round(payload.length * 3 / 4);
}
function addSectionRevision(section, nextImageUrl, nextPrompt, request, model) {
    const history = ensureSectionRevisions(section);
    const nextRevision = {
        id: `revision-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        imageUrl: nextImageUrl,
        label: `수정 ${history.length}`,
        createdAt: new Date().toISOString(),
        request,
        model
    };
    return {
        ...section,
        imageUrl: nextImageUrl,
        prompt: nextPrompt,
        revisions: [
            ...history,
            nextRevision
        ]
    };
}
function ensureSectionRevisions(section) {
    const revisions = section.revisions?.length ? section.revisions : section.imageUrl ? [
        {
            id: `${section.id}-original`,
            imageUrl: section.imageUrl,
            label: "원본",
            createdAt: section.id
        }
    ] : [];
    if (section.imageUrl && revisions.every((revision)=>revision.imageUrl !== section.imageUrl)) {
        return [
            ...revisions,
            {
                id: `${section.id}-current-${revisions.length}`,
                imageUrl: section.imageUrl,
                label: `수정 ${revisions.length}`,
                createdAt: new Date().toISOString()
            }
        ];
    }
    return revisions;
}
function inferTitleFromAnalysis(analysis) {
    if (!analysis || typeof analysis !== "object" || !("product_inferred" in analysis)) return "";
    const product = analysis.product_inferred || {};
    const brand = pickAnalysisText(product, [
        "brand_name",
        "brand",
        "manufacturer",
        "maker"
    ]);
    const productName = pickAnalysisText(product, [
        "product_name",
        "name",
        "product",
        "title"
    ]);
    const category = pickAnalysisText(product, [
        "category",
        "product_category"
    ]);
    if (brand && productName) return productName.includes(brand) ? `${productName} 리디자인` : `${brand} ${productName} 리디자인`;
    if (productName) return `${productName} 리디자인`;
    if (category) return `${category} 상세페이지 리디자인`;
    return "";
}
function pickAnalysisText(source, keys) {
    for (const key of keys){
        const value = source[key];
        if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
}
async function extractKnowledgeText(files) {
    if (files.length === 0) return "";
    const chunks = [];
    for (const file of files.slice(0, 50)){
        if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
            chunks.push(await extractPdfText(file));
            continue;
        }
        if (file.type.startsWith("text/") || file.name.toLowerCase().endsWith(".md")) {
            chunks.push(await file.text());
        }
    }
    return chunks.map((chunk, index)=>`# 지식파일 ${index + 1}\n${chunk}`).join("\n\n").slice(0, 120000);
}
async function indexKnowledgeFile(name, text, adminKey) {
    if (!text.trim()) return {
        indexed: false,
        chunks: 0,
        reason: "추출된 텍스트가 없습니다."
    };
    const response = await fetch("/api/knowledge", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            text,
            adminKey
        })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "지식파일 인덱싱 실패");
    return {
        indexed: Boolean(data.indexed),
        chunks: Number(data.chunks || 0),
        documentId: data.documentId,
        reason: data.reason
    };
}
async function deleteIndexedKnowledge(documentId, adminKey = "") {
    if (!documentId) return;
    await fetch("/api/knowledge", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            documentId,
            adminKey
        })
    });
}
async function extractPdfText(file) {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    pdfjs.GlobalWorkerOptions.workerSrc = new __turbopack_context__.U(__turbopack_context__.r("[project]/node_modules/pdfjs-dist/build/pdf.worker.mjs (static in ecmascript, tag client)")).toString();
    const pdf = await pdfjs.getDocument({
        data: await file.arrayBuffer()
    }).promise;
    const pageCount = Math.min(pdf.numPages, 80);
    const pages = [];
    for(let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1){
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();
        const text = content.items.map((item)=>"str" in item ? item.str : "").filter(Boolean).join(" ");
        if (text.trim()) pages.push(`[${file.name} p.${pageNumber}] ${text}`);
        if (pages.join("\n").length > 120000) break;
    }
    return pages.join("\n");
}
async function normalizeFilesForUpload(files) {
    const output = [];
    for (const file of files){
        if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
            output.push(...await renderPdfToImages(file));
        } else if (file.type.startsWith("image/")) {
            output.push(...await renderImageToReferenceFiles(file));
        }
    }
    return output.slice(0, 4);
}
async function renderImageToReferenceFiles(file) {
    const image = await loadImageElement(file);
    const naturalWidth = image.naturalWidth || image.width;
    const naturalHeight = image.naturalHeight || image.height;
    if (!naturalWidth || !naturalHeight) throw new Error("업로드 이미지를 읽지 못했습니다.");
    const isLongDetailPage = naturalHeight / naturalWidth > 2.2;
    const sliceCount = isLongDetailPage ? Math.min(4, Math.ceil(naturalHeight / naturalWidth / 1.8)) : 1;
    const files = [];
    for(let index = 0; index < sliceCount; index += 1){
        const sourceY = Math.floor(naturalHeight / sliceCount * index);
        const sourceHeight = index === sliceCount - 1 ? naturalHeight - sourceY : Math.floor(naturalHeight / sliceCount);
        files.push(await cropImageToPngFile({
            image,
            sourceX: 0,
            sourceY,
            sourceWidth: naturalWidth,
            sourceHeight,
            fileName: file.name,
            index
        }));
    }
    URL.revokeObjectURL(image.src);
    return files;
}
function loadImageElement(file) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve(image);
        image.onerror = ()=>reject(new Error("이미지 파일을 브라우저에서 열 수 없습니다."));
        image.src = URL.createObjectURL(file);
    });
}
async function cropImageToPngFile({ image, sourceX, sourceY, sourceWidth, sourceHeight, fileName, index }) {
    const maxWidth = 1200;
    const maxHeight = 1800;
    const scale = Math.min(1, maxWidth / sourceWidth, maxHeight / sourceHeight);
    const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
    const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const context = canvas.getContext("2d", {
        alpha: false
    });
    if (!context) throw new Error("이미지 변환 캔버스를 만들지 못했습니다.");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, targetWidth, targetHeight);
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, targetWidth, targetHeight);
    const blob = await new Promise((resolve, reject)=>{
        canvas.toBlob((result)=>{
            if (result) resolve(result);
            else reject(new Error("이미지를 PNG로 변환하지 못했습니다."));
        }, "image/png");
    });
    const safeName = fileName.replace(/\.[^.]+$/i, "");
    return new File([
        blob
    ], `${safeName}-reference-${index + 1}.png`, {
        type: "image/png"
    });
}
async function renderPdfToImages(file) {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    pdfjs.GlobalWorkerOptions.workerSrc = new __turbopack_context__.U(__turbopack_context__.r("[project]/node_modules/pdfjs-dist/build/pdf.worker.mjs (static in ecmascript, tag client)")).toString();
    const pdf = await pdfjs.getDocument({
        data: await file.arrayBuffer()
    }).promise;
    const pageCount = Math.min(pdf.numPages, 4);
    const pages = [];
    for(let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1){
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({
            scale: 1.6
        });
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const context = canvas.getContext("2d");
        if (!context) continue;
        await page.render({
            canvas,
            canvasContext: context,
            viewport
        }).promise;
        const blob = await new Promise((resolve, reject)=>{
            canvas.toBlob((result)=>{
                if (result) resolve(result);
                else reject(new Error("PDF 페이지를 이미지로 변환하지 못했습니다."));
            }, "image/png");
        });
        pages.push(new File([
            blob
        ], `${file.name.replace(/\.pdf$/i, "")}-page-${pageNumber}.png`, {
            type: "image/png"
        }));
    }
    return pages;
}
function Dashboard({ projects, onNew, onOpenProject, onDeleteProject, onSettings, onKnowledge, knowledgeCount, serverConfig }) {
    const averageImageCount = projects.length > 0 ? (projects.reduce((sum, project)=>sum + project.count, 0) / projects.length).toFixed(1) : "-";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Topbar, {
                eyebrow: "DASHBOARD",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        onClick: onSettings,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1455,
                                columnNumber: 58
                            }, this),
                            "API 키 설정"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        onClick: onKnowledge,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1456,
                                columnNumber: 59
                            }, this),
                            "지식파일 등록 ",
                            knowledgeCount > 0 ? `(${knowledgeCount})` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onNew,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1457,
                                columnNumber: 33
                            }, this),
                            "새 프로젝트 생성"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] gap-4 max-xl:grid-cols-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "최근 리디자인 프로젝트"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1464,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "업로드한 원본 자료를 기준으로 생성된 작업 목록"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1465,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "green",
                                        children: "6~8장 기본"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1467,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "grid gap-3",
                                children: projects.length > 0 ? projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-[52px_minmax(0,1fr)_40px] items-center gap-3 rounded-md border border-border bg-white p-3 transition hover:border-emerald-200 hover:bg-emerald-50/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "contents text-left",
                                                onClick: ()=>onOpenProject(project),
                                                "aria-label": `${project.title} 열기`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniThumb, {}, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1482,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "block truncate text-sm",
                                                                children: project.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                lineNumber: 1484,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: project.channel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            project.count,
                                                                            "장"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                        lineNumber: 1487,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: project.ratio
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                        lineNumber: 1488,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: models[project.model].label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                        lineNumber: 1489,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                lineNumber: 1485,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1483,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "ghost",
                                                size: "icon",
                                                className: "justify-self-end text-muted-foreground hover:text-destructive",
                                                onClick: ()=>onDeleteProject(project),
                                                "aria-label": `${project.title} 삭제`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1501,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1493,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, project.id, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1472,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid min-h-48 place-items-center rounded-md border border-dashed border-border bg-white/60 p-6 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "mx-auto mb-3 size-8 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1508,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-sm",
                                                children: "아직 작업한 리디자인 작업이 없습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1509,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-xs leading-relaxed text-muted-foreground",
                                                children: "새 프로젝트를 생성하면 이곳에 최근 작업이 표시됩니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1507,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1506,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "오늘의 작업 상태"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1523,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "전환 설계 중심으로 생성 품질을 추적"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1524,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1522,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                label: "최근",
                                                value: String(projects.length),
                                                sub: "프로젝트"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1528,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                label: "평균",
                                                value: averageImageCount,
                                                sub: "이미지 장수"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1529,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                label: "기본",
                                                value: "9:16",
                                                sub: "출력 비율"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1527,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "사전 지식 라이브러리"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1536,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "리디자인 프롬프트에 활용되는 참고자료 현황"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1537,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1535,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1534,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "grid gap-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-md border border-border bg-white p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "등록 문서"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: knowledgeCount > 0 ? "green" : "default",
                                                        children: [
                                                            knowledgeCount,
                                                            "개"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1541,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-md border border-border bg-white p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "RAG 청크"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: serverConfig.knowledgeChunks > 0 ? "green" : "default",
                                                        children: [
                                                            serverConfig.knowledgeChunks.toLocaleString(),
                                                            "개"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1545,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1540,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 1453,
        columnNumber: 5
    }, this);
}
_c1 = Dashboard;
function Workspace(props) {
    const { selectedModel, setSelectedModel, channel, setChannel, count, setCount, ratio, setRatio, backgroundColor, setBackgroundColor, files, setFiles, request, setRequest, productInfoText, setProductInfoText, inputRef, knowledgeCount, serverConfig, useSharedKnowledge, setUseSharedKnowledge, knowledgeAccessKey, setKnowledgeAccessKey, generating, onGenerate, onOpenKnowledge } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Topbar, {
                eyebrow: "REDESIGN WORKSPACE",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onGenerate(),
                    disabled: generating,
                    children: [
                        generating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "size-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1617,
                            columnNumber: 82
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1617,
                            columnNumber: 128
                        }, this),
                        "리디자인 생성"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 1617,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1616,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-[minmax(0,1fr)_360px] gap-4 max-xl:grid-cols-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "기존 상세페이지 자료 업로드"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1625,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "이미지 또는 PDF를 첨부하면 원본 정보와 전환 저해 요소를 분석합니다."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1626,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1624,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "green",
                                            children: "대용량 가능"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1628,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1623,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "grid min-h-64 w-full place-items-center rounded-md border border-dashed border-emerald-300 bg-white/60 p-6 text-center",
                                            onClick: ()=>inputRef.current?.click(),
                                            onDragOver: (event)=>event.preventDefault(),
                                            onDrop: (event)=>{
                                                event.preventDefault();
                                                setFiles(Array.from(event.dataTransfer.files).filter((file)=>file.type.startsWith("image/") || file.type === "application/pdf"));
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mx-auto mb-3 grid size-14 place-items-center rounded-md border border-border bg-white text-emerald-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "size-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 1642,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1641,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "이미지 또는 PDF를 여기에 놓기"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1644,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs text-muted-foreground",
                                                        children: "원본 제품컷, 수치, 리뷰, 인증, 오퍼 문구를 최대한 보존합니다."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1645,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1640,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            hidden: true,
                                            multiple: true,
                                            type: "file",
                                            accept: "image/*,.pdf",
                                            onChange: (event)=>setFiles(Array.from(event.target.files || []))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1648,
                                            columnNumber: 15
                                        }, this),
                                        files.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap gap-2",
                                            children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "default",
                                                    children: [
                                                        file.type === "application/pdf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "mr-1 size-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 1660,
                                                            columnNumber: 58
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                            className: "mr-1 size-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 1660,
                                                            columnNumber: 97
                                                        }, this),
                                                        file.name
                                                    ]
                                                }, file.name, true, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1659,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1657,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mt-4 block text-xs font-bold text-muted-foreground",
                                            children: "내 상품 정보 (텍스트/설명)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1666,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            value: productInfoText,
                                            onChange: (event)=>setProductInfoText(event.target.value),
                                            placeholder: "상품에 대한 설명, 장점, 강조하고 싶은 텍스트나 목차를 자유롭게 입력하세요. AI가 카피라이팅 시 최우선 반영합니다.",
                                            className: "min-h-32 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1667,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mt-4 block text-xs font-bold text-muted-foreground",
                                            children: "추가 요청사항 (생성 지침)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1673,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            value: request,
                                            onChange: (event)=>setRequest(event.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1674,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1622,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "이미지 생성 모델"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "작업마다 사용할 모델을 선택합니다."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1682,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1681,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            "openai",
                                            "google"
                                        ].map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md border border-border bg-white p-3 text-left", selectedModel === model && "border-emerald-400 ring-4 ring-emerald-100"),
                                                onClick: ()=>setSelectedModel(model),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "block text-sm",
                                                        children: models[model].label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1694,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "mt-1 block break-words text-[11px] text-muted-foreground",
                                                        children: models[model].id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                                        lineNumber: 1695,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, model, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1689,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1687,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "생성 옵션"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1704,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "상세페이지 섹션 단위로 생성"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1705,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1703,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1702,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "grid gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionGroup, {
                                                label: "결과 장수",
                                                value: String(count),
                                                options: [
                                                    [
                                                        "1",
                                                        "히어로 1장"
                                                    ],
                                                    [
                                                        "8",
                                                        "기본 6~8장"
                                                    ]
                                                ],
                                                onChange: (value)=>setCount(Number(value))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1709,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionGroup, {
                                                label: "출력 비율",
                                                value: ratio,
                                                options: [
                                                    [
                                                        "9:16",
                                                        "9:16"
                                                    ],
                                                    [
                                                        "1080×1920",
                                                        "1080×1920"
                                                    ]
                                                ],
                                                onChange: setRatio
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1710,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionGroup, {
                                                label: "배경색 (기본값)",
                                                value: backgroundColor,
                                                options: [
                                                    [
                                                        "auto",
                                                        "레퍼런스 따름"
                                                    ],
                                                    [
                                                        "white",
                                                        "흰색 바탕"
                                                    ],
                                                    [
                                                        "black",
                                                        "검정 바탕"
                                                    ]
                                                ],
                                                onChange: setBackgroundColor
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelOptionGroup, {
                                                value: channel,
                                                onChange: setChannel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1712,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1708,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1701,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1679,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1620,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 1615,
        columnNumber: 5
    }, this);
}
_c2 = Workspace;
function ChannelOptionGroup({ value, onChange }) {
    _s1();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const channels = [
        {
            name: "스마트스토어",
            points: [
                "스캔 쉬운 구성",
                "상품명/USP/혜택/리뷰/인증을 빠르게 노출",
                "네이버 쇼핑 사용자가 비교 구매한다는 전제",
                "과장보다 신뢰, 리뷰, 혜택 중심"
            ]
        },
        {
            name: "쿠팡",
            points: [
                "더 빠른 구매 판단 중심",
                "첫 화면에서 핵심 정보와 가격/구성/배송/후기 신뢰를 강하게",
                "긴 브랜드 스토리보다 왜 지금 사야 하는지 압축",
                "썸네일처럼 잘 읽히는 굵은 카피와 정보 카드가 유리"
            ]
        },
        {
            name: "자사몰",
            points: [
                "브랜드 톤앤매너와 스토리 비중이 더 큼",
                "제품 차별화, 브랜드 신뢰, 보증, 후기 흐름을 더 여유 있게 구성",
                "단순 구매보다 브랜드 설득과 재구매까지 고려"
            ]
        },
        {
            name: "와디즈",
            points: [
                "문제 제기 → 해결책 → 제작 이유 → 검증 → 리워드/FAQ 흐름",
                "제품 탄생 배경, 개발 과정, 상세 검증, 리워드 구성이 중요",
                "왜 이 제품이 새롭고 믿을 만한가를 더 서사적으로 보여줌"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-muted-foreground",
                        children: "판매 채널"
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1745,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "grid size-6 place-items-center rounded-full border border-border bg-white text-muted-foreground transition hover:border-emerald-300 hover:text-emerald-700",
                        onClick: ()=>setOpen(true),
                        "aria-label": "판매 채널 설명 보기",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1752,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1744,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: channels.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-9 rounded-md border border-border bg-white px-2 text-xs font-bold", value === channel.name && "bg-foreground text-background"),
                        onClick: ()=>onChange(channel.name),
                        children: channel.name
                    }, channel.name, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1757,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1755,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "판매 채널별 생성 기준"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1770,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "판매 채널을 선택하면 해당 채널이 이미지 생성 프롬프트에 들어가고, AI가 구성과 문구 톤을 채널에 맞춰 조정합니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1771,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1769,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-900",
                                    children: "채널별 고객의 구매 맥락이 다르기 때문에, 같은 상품이라도 첫 화면의 정보 우선순위와 설득 흐름이 달라집니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1776,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 max-md:grid-cols-1",
                                    children: channels.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md border border-border bg-white p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-3 text-base font-bold",
                                                    children: channel.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "grid gap-2 text-sm leading-relaxed text-muted-foreground",
                                                    children: channel.points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                    lineNumber: 1786,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: point
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                                    lineNumber: 1787,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, point, true, {
                                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                                            lineNumber: 1785,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1783,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, channel.name, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1781,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1779,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setOpen(false),
                                        children: "확인"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1795,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1794,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1775,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 1768,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1767,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 1743,
        columnNumber: 5
    }, this);
}
_s1(ChannelOptionGroup, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c3 = ChannelOptionGroup;
function Results({ project, rolloutRequest, setRolloutRequest, onToast, onSave, onEditSection, onGenerateRest, generating, editingSectionId }) {
    if (!project) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: "아직 생성된 프로젝트가 없습니다."
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1826,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/redesign-wizard.tsx",
            lineNumber: 1826,
            columnNumber: 12
        }, this);
    }
    const showRollout = project.sections.length < 8;
    const title = projectDisplayTitle(project);
    const downloadableSections = project.sections.filter((section)=>section.imageUrl);
    function downloadAllImages() {
        if (downloadableSections.length === 0) {
            onToast("다운로드할 이미지가 없습니다.");
            return;
        }
        downloadableSections.forEach((section, index)=>{
            window.setTimeout(()=>{
                downloadDataUrl(section.imageUrl || "", buildImageFileName(title, section, index));
            }, index * 250);
        });
        onToast(`${downloadableSections.length}개 이미지를 다운로드합니다.`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Topbar, {
                eyebrow: "RESULTS",
                title: title,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        onClick: onSave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1849,
                                columnNumber: 54
                            }, this),
                            "작업 저장"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1849,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        onClick: ()=>onToast("히어로 1장 재생성은 다음 단계에서 연결할 예정입니다."),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1850,
                                columnNumber: 95
                            }, this),
                            "히어로 다시 생성"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1850,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: downloadAllImages,
                        disabled: downloadableSections.length === 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1851,
                                columnNumber: 90
                            }, this),
                            "전체 다운로드"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1851,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1848,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-4", showRollout ? "grid-cols-[minmax(0,1fr)_320px] max-xl:grid-cols-1" : "grid-cols-1"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: [
                                                    "리디자인 결과 ",
                                                    project.sections.length,
                                                    "장"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1858,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "저장하면 대시보드의 최근 프로젝트에서 다시 열 수 있습니다."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1859,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1857,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "green",
                                        children: models[project.model].label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1861,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1856,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "grid grid-cols-3 gap-3 max-2xl:grid-cols-2 max-lg:grid-cols-1",
                                children: project.sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionResultCard, {
                                        section: section,
                                        index: index,
                                        projectTitle: title,
                                        onEditSection: onEditSection,
                                        editing: editingSectionId === section.id,
                                        disabled: generating
                                    }, section.id, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1865,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1863,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1855,
                        columnNumber: 9
                    }, this),
                    showRollout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "히어로 검토 후 요청"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1883,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "첫 장을 보고 나머지 상세페이지에 반영할 방향을 적어주세요."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                                lineNumber: 1884,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1882,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1881,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "grid gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            value: rolloutRequest,
                                            onChange: (event)=>setRolloutRequest(event.target.value),
                                            placeholder: "예: 제품은 잘 보이는데 카피가 너무 과장되어 보여요. 나머지는 더 신뢰감 있게, 리뷰/근거 중심으로 만들고 CTA는 덜 튀게 해주세요."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1888,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: onGenerateRest,
                                            disabled: generating,
                                            children: [
                                                generating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "size-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1894,
                                                    columnNumber: 31
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                                    lineNumber: 1894,
                                                    columnNumber: 77
                                                }, this),
                                                "나머지 상세페이지 만들기"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed text-muted-foreground",
                                            children: "이 요청은 S2 이후 섹션 생성 프롬프트에 함께 반영됩니다. 테스트 비용을 줄이기 위해 먼저 히어로 1장을 확인한 뒤 확장하는 흐름입니다."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1887,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 1880,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1879,
                        columnNumber: 9
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1854,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 1847,
        columnNumber: 5
    }, this);
}
_c4 = Results;
const quickEditPresets = [
    [
        "카피 강화",
        "헤드라인과 핵심 문구를 더 명확하고 구매전환 중심으로 강화해주세요. 근거 없는 수치나 효능은 추가하지 마세요."
    ],
    [
        "디자인 강화",
        "전체 톤앤매너는 유지하되 정보 배치, 여백, 타이포 리듬을 더 세련되고 완성도 있게 바꿔주세요."
    ],
    [
        "CTA 강화",
        "CTA 영역을 더 잘 보이게 하고 구매 불안을 줄이는 짧은 신뢰 문구를 함께 배치해주세요."
    ],
    [
        "중복 레이아웃 줄이기",
        "다른 섹션과 반복되어 보이지 않도록 제품 위치, 카드 구조, 정보 흐름을 다르게 재구성해주세요."
    ],
    [
        "안전 표현",
        "과장되거나 효능을 단정하는 표현은 줄이고 식품/건강 카테고리에 안전한 표현으로 완화해주세요."
    ]
];
function SectionResultCard({ section, index, projectTitle, onEditSection, editing, disabled }) {
    _s2();
    const [editRequest, setEditRequest] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [editModel, setEditModel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("openai");
    const revisions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SectionResultCard.useMemo[revisions]": ()=>ensureSectionRevisions(section)
    }["SectionResultCard.useMemo[revisions]"], [
        section
    ]);
    const currentIndex = Math.max(0, revisions.findIndex((revision)=>revision.imageUrl === section.imageUrl));
    const [revisionIndex, setRevisionIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](currentIndex);
    const activeRevision = revisions[revisionIndex] || revisions[0];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SectionResultCard.useEffect": ()=>{
            setRevisionIndex(currentIndex);
        }
    }["SectionResultCard.useEffect"], [
        currentIndex,
        revisions.length
    ]);
    function addPreset(text) {
        setEditRequest((current)=>current ? `${current}\n${text}` : text);
    }
    function moveRevision(step) {
        if (revisions.length <= 1) return;
        setRevisionIndex((current)=>(current + step + revisions.length) % revisions.length);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden shadow-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[9/16] border-b border-border bg-muted",
                children: [
                    activeRevision?.imageUrl ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: activeRevision.imageUrl,
                        alt: `${section.name} ${activeRevision.label}`,
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1957,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceholderThumb, {
                        index: index
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1959,
                        columnNumber: 11
                    }, this),
                    revisions.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-md transition hover:bg-white",
                                onClick: ()=>moveRevision(-1),
                                "aria-label": "이전 이미지 보기",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1969,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1963,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-foreground shadow-md transition hover:bg-white",
                                onClick: ()=>moveRevision(1),
                                "aria-label": "다음 이미지 보기",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "size-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 1977,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1971,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 rounded-md bg-foreground/85 px-2 py-1 text-xs font-bold text-background",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: activeRevision.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1980,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            revisionIndex + 1,
                                            " / ",
                                            revisions.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 1981,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1979,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1954,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "grid gap-3 p-3",
                children: [
                    revisions.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 overflow-x-auto",
                        children: revisions.map((revision, revisionPosition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 shrink-0 rounded-full border border-border bg-white px-2 text-[11px] font-bold text-muted-foreground", revisionPosition === revisionIndex && "border-emerald-300 bg-emerald-50 text-emerald-800"),
                                onClick: ()=>setRevisionIndex(revisionPosition),
                                children: revision.label
                            }, revision.id, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 1990,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 1988,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: section.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2005,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs leading-relaxed text-muted-foreground",
                                children: section.purpose
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2006,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "원본 참조:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 2007,
                                        columnNumber: 39
                                    }, this),
                                    " ",
                                    section.source
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2007,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2004,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "secondary",
                        size: "sm",
                        onClick: ()=>activeRevision?.imageUrl && downloadDataUrl(activeRevision.imageUrl, buildImageFileName(projectTitle, section, index, activeRevision.label)),
                        disabled: !activeRevision?.imageUrl,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2016,
                                columnNumber: 11
                            }, this),
                            "이미지 다운로드"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2009,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2 rounded-md border border-border bg-muted/40 p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold text-muted-foreground",
                                children: "섹션 수정 요청"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2020,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                value: editRequest,
                                onChange: (event)=>setEditRequest(event.target.value),
                                placeholder: "예: 이 섹션은 헤드라인을 줄이고, 제품 이미지를 오른쪽으로 옮겨 다른 섹션과 덜 반복되게 해주세요.",
                                className: "min-h-20 text-xs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: quickEditPresets.map(([label, text])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: ()=>addPreset(text),
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2027,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionGroup, {
                                label: "수정 모델",
                                value: editModel,
                                options: [
                                    [
                                        "openai",
                                        "OpenAI Image 2.0"
                                    ],
                                    [
                                        "google",
                                        "Nano Banana 2"
                                    ]
                                ],
                                onChange: (value)=>setEditModel(value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2034,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: ()=>onEditSection(section.id, editRequest, editModel),
                                disabled: disabled || editing,
                                children: [
                                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "size-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 2045,
                                        columnNumber: 24
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/redesign-wizard.tsx",
                                        lineNumber: 2045,
                                        columnNumber: 70
                                    }, this),
                                    "이 섹션 수정"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2040,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2019,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 1986,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 1953,
        columnNumber: 5
    }, this);
}
_s2(SectionResultCard, "6m7nlKhtHIOWLk1HvRIBLdOlIkU=");
_c5 = SectionResultCard;
function GenerationProgressPanel({ progress, modelLabel, count, currentIndex, showVideo, videoSeed, onCancel }) {
    _s3();
    const video = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "GenerationProgressPanel.useMemo[video]": ()=>{
            const index = Math.abs(Math.floor(Math.sin(videoSeed) * 10000 % hanirumYoutubeVideos.length));
            return hanirumYoutubeVideos[index] || hanirumYoutubeVideos[0];
        }
    }["GenerationProgressPanel.useMemo[video]"], [
        videoSeed
    ]);
    const isWaiting = progress.percent >= 96;
    const isLongWait = progress.elapsedSeconds >= 120;
    const generationTitle = count > 1 ? `${count}장 중 ${currentIndex}번째 이미지 생성중입니다.` : `${modelLabel} · ${count}장 생성`;
    const statusLabel = isWaiting ? isLongWait ? "AI가 마무리 작업 중 · 조금 더 걸리고 있어요" : "AI가 마무리 작업 중" : `${progress.percent}%`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-40 grid place-items-center bg-white/55 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-y-auto rounded-md border border-emerald-200 bg-white/95 p-5 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-3 flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-emerald-700",
                                    children: "생성 진행 중"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2091,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-1 text-base font-bold",
                                    children: generationTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2092,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-muted-foreground",
                                    children: [
                                        count > 1 ? `${modelLabel} · ` : "",
                                        "경과 ",
                                        formatDuration(progress.elapsedSeconds)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2093,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2090,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block leading-none", isWaiting ? "text-base" : "text-2xl"),
                                    children: statusLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2096,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 block text-xs text-muted-foreground",
                                    children: isWaiting ? "AI가 이미지 최적화 작업을 진행중입니다." : `예상 ${formatDuration(progress.remainingSeconds)} 남음`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2097,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2095,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 2089,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 overflow-hidden rounded-full bg-muted",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full rounded-full bg-emerald-500 transition-all duration-700 ease-out",
                        style: {
                            width: `${progress.percent}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 2102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 grid grid-cols-[160px_minmax(0,1fr)] gap-3 text-sm max-sm:grid-cols-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md bg-emerald-50 px-3 py-2 font-bold text-emerald-800",
                            children: progress.phase
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border border-border bg-white px-3 py-2 leading-relaxed text-muted-foreground",
                            children: isLongWait && modelLabel.includes("OpenAI") ? "OpenAI Image 2.0은 이미지 편집 요청이 2분 이상 걸릴 수 있습니다. 특히 긴 상세페이지 캡처나 참조 이미지가 여러 장이면 응답 시간이 길어질 수 있어요." : progress.tip
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 2108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground max-sm:flex-col max-sm:items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "취소하면 화면의 대기 상태를 멈춥니다. 이미 외부 API에 전달된 요청은 서버 로그에 뒤늦게 완료될 수 있습니다."
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "secondary",
                            size: "sm",
                            onClick: onCancel,
                            children: "요청 취소"
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 2116,
                    columnNumber: 9
                }, this),
                showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-md border border-border bg-white p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-center justify-between gap-3 max-sm:flex-col max-sm:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold",
                                            children: "기다리는 동안 한이룸 유튜브 영상 함께 봐요!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 2126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 line-clamp-1 text-xs text-muted-foreground",
                                            children: video.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 2127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.youtube.com/@irum_hahn",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-1 text-xs font-bold text-emerald-700",
                                    children: [
                                        "채널 열기 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "size-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/redesign-wizard.tsx",
                                            lineNumber: 2135,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/redesign-wizard.tsx",
                                    lineNumber: 2129,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-video overflow-hidden rounded-md bg-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                className: "h-full w-full",
                                src: `https://www.youtube.com/embed/${video.id}`,
                                title: video.title,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/redesign-wizard.tsx",
                                lineNumber: 2139,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/redesign-wizard.tsx",
                            lineNumber: 2138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/redesign-wizard.tsx",
                    lineNumber: 2123,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/redesign-wizard.tsx",
            lineNumber: 2088,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2087,
        columnNumber: 5
    }, this);
}
_s3(GenerationProgressPanel, "4a72iuNe0tCKujZPoy6NBrK8LPU=");
_c6 = GenerationProgressPanel;
function Topbar({ eyebrow, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex items-start justify-between gap-4 max-md:flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-1 text-xs font-bold text-muted-foreground",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2158,
                        columnNumber: 9
                    }, this),
                    title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "max-w-3xl text-3xl font-bold leading-tight tracking-normal max-md:text-2xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2159,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2156,
        columnNumber: 5
    }, this);
}
_c7 = Topbar;
function estimateGenerationSeconds(model, count) {
    const setupSeconds = 24;
    const perImageSeconds = model === "google" ? 78 : 65;
    return setupSeconds + Math.max(1, count) * perImageSeconds;
}
function generationPhase(percent, elapsedSeconds) {
    if (percent >= 96) return elapsedSeconds >= 120 ? "최종 최적화 중" : "마무리 작업";
    if (percent < 15) return "원본 변환";
    if (percent < 32) return "프롬프트 구성";
    if (percent < 76) return "이미지 API 처리";
    return "결과 수신 준비";
}
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const rest = seconds % 60;
    if (minutes <= 0) return `${rest}초`;
    return `${minutes}분 ${rest.toString().padStart(2, "0")}초`;
}
function isAbortError(error) {
    return error instanceof DOMException && error.name === "AbortError";
}
function Stat({ label, value, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-24 flex-col justify-between rounded-md border border-border bg-white p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: "text-2xl",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: sub
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2193,
        columnNumber: 5
    }, this);
}
_c8 = Stat;
function OptionGroup({ label, value, options, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-2 block text-xs font-bold text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2",
                children: options.map(([optionValue, optionLabel])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-9 rounded-md border border-border bg-white px-2 text-xs font-bold", value === optionValue && "bg-foreground text-background"),
                        onClick: ()=>onChange(optionValue),
                        children: optionLabel
                    }, optionValue, false, {
                        fileName: "[project]/src/components/redesign-wizard.tsx",
                        lineNumber: 2217,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2213,
        columnNumber: 5
    }, this);
}
_c9 = OptionGroup;
function MiniThumb() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[68px] w-[52px] overflow-hidden rounded-md border border-border bg-muted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-2 right-2 top-2 h-4 rounded bg-foreground"
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 left-2 right-2 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-lime-300"
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2232,
        columnNumber: 5
    }, this);
}
_c10 = MiniThumb;
function PlaceholderThumb({ index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 h-2 rounded-full bg-foreground", index % 2 === 0 && "w-2/3")
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 h-1.5 rounded-full bg-zinc-300"
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-3/4 rounded-full bg-zinc-300"
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 right-3 h-[42%] rounded-md bg-gradient-to-br from-emerald-500 to-lime-300"
            }, void 0, false, {
                fileName: "[project]/src/components/redesign-wizard.tsx",
                lineNumber: 2245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/redesign-wizard.tsx",
        lineNumber: 2241,
        columnNumber: 5
    }, this);
}
_c11 = PlaceholderThumb;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "RedesignWizard");
__turbopack_context__.k.register(_c1, "Dashboard");
__turbopack_context__.k.register(_c2, "Workspace");
__turbopack_context__.k.register(_c3, "ChannelOptionGroup");
__turbopack_context__.k.register(_c4, "Results");
__turbopack_context__.k.register(_c5, "SectionResultCard");
__turbopack_context__.k.register(_c6, "GenerationProgressPanel");
__turbopack_context__.k.register(_c7, "Topbar");
__turbopack_context__.k.register(_c8, "Stat");
__turbopack_context__.k.register(_c9, "OptionGroup");
__turbopack_context__.k.register(_c10, "MiniThumb");
__turbopack_context__.k.register(_c11, "PlaceholderThumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_12b1w_f._.js.map