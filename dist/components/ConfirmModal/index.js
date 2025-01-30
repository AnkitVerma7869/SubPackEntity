"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ConfirmModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onConfirm = _a.onConfirm, tableName = _a.tableName;
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-xl max-w-md w-full", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mb-4", children: "Confirm Table Creation" }), (0, jsx_runtime_1.jsxs)("p", { className: "mb-4", children: ["Are you sure you want to create the table \"", tableName, "\"?"] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end gap-3", children: [(0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "px-4 py-2 border rounded-md hover:bg-gray-50", children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { onClick: onConfirm, className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700", children: "Confirm" })] })] }) }));
};
exports.default = ConfirmModal;
