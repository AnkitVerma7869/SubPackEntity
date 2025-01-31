"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TableForm;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
// Predefined entities with their attributes
var predefinedEntities = {
    "User": [
        { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
        { name: "username", dataType: "varchar", size: "50", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "" },
        { name: "email", dataType: "varchar", size: "100", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "email" },
        { name: "password", dataType: "varchar", size: "255", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "created_at", dataType: "timestamp", size: "", precision: "", constraints: "NOT NULL", defaultValue: "CURRENT_TIMESTAMP", validations: "" }
    ],
    "Product": [
        { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
        { name: "name", dataType: "varchar", size: "100", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "description", dataType: "text", size: "", precision: "", constraints: "", defaultValue: "", validations: "" },
        { name: "price", dataType: "decimal", size: "", precision: "10,2", constraints: "NOT NULL", defaultValue: "0.00", validations: "" },
        { name: "stock", dataType: "integer", size: "", precision: "", constraints: "NOT NULL", defaultValue: "0", validations: "" }
    ],
    "Order": [
        { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
        { name: "user_id", dataType: "uuid", size: "", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "total_amount", dataType: "decimal", size: "", precision: "10,2", constraints: "NOT NULL", defaultValue: "0.00", validations: "" },
        { name: "status", dataType: "varchar", size: "20", precision: "", constraints: "NOT NULL", defaultValue: "'pending'", validations: "" },
        { name: "created_at", dataType: "timestamp", size: "", precision: "", constraints: "NOT NULL", defaultValue: "CURRENT_TIMESTAMP", validations: "" }
    ],
    "Category": [
        { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
        { name: "name", dataType: "varchar", size: "50", precision: "", constraints: "UNIQUE NOT NULL", defaultValue: "", validations: "" },
        { name: "description", dataType: "text", size: "", precision: "", constraints: "", defaultValue: "", validations: "" }
    ],
    "Address": [
        { name: "id", dataType: "uuid", size: "", precision: "", constraints: "PRIMARY KEY", defaultValue: "", validations: "" },
        { name: "user_id", dataType: "uuid", size: "", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "street", dataType: "varchar", size: "100", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "city", dataType: "varchar", size: "50", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "state", dataType: "varchar", size: "50", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" },
        { name: "postal_code", dataType: "varchar", size: "20", precision: "", constraints: "NOT NULL", defaultValue: "", validations: "" }
    ]
};
function TableForm(_a) {
    var _this = this;
    var onSave = _a.onSave;
    var _b = (0, react_1.useState)(""), entityName = _b[0], setEntityName = _b[1];
    var _c = (0, react_1.useState)([]), attributes = _c[0], setAttributes = _c[1];
    var _d = (0, react_1.useState)({
        name: "",
        dataType: "",
        size: "",
        precision: "",
        constraints: "",
        defaultValue: "",
        validations: ""
    }), currentAttribute = _d[0], setCurrentAttribute = _d[1];
    var _e = (0, react_1.useState)(false), isCustomEntity = _e[0], setIsCustomEntity = _e[1];
    var _f = (0, react_1.useState)(""), selectedEntity = _f[0], setSelectedEntity = _f[1];
    var resetAttributeForm = function () {
        setCurrentAttribute({
            name: "",
            dataType: "",
            size: "",
            precision: "",
            constraints: "",
            defaultValue: "",
            validations: ""
        });
    };
    var handleEntitySelect = function (selected) {
        setSelectedEntity(selected);
        if (selected === "custom") {
            setIsCustomEntity(true);
            setEntityName("");
            setAttributes([]);
        }
        else if (selected) {
            setIsCustomEntity(false);
            setEntityName(selected);
            setAttributes(predefinedEntities[selected] || []);
        }
        else {
            setIsCustomEntity(false);
            setEntityName("");
            setAttributes([]);
        }
    };
    var handleAddAttribute = function () {
        if (!currentAttribute.name || !currentAttribute.dataType) {
            alert("Attribute Name and Data Type are required!");
            return;
        }
        setAttributes(function (prev) { return __spreadArray(__spreadArray([], prev, true), [currentAttribute], false); });
        resetAttributeForm();
    };
    var handleDeleteAttribute = function (index) {
        setAttributes(function (prev) { return prev.filter(function (_, i) { return i !== index; }); });
    };
    var handleEditAttribute = function (index) {
        setCurrentAttribute(attributes[index]);
        setAttributes(function (prev) { return prev.filter(function (_, i) { return i !== index; }); });
    };
    var handleSaveEntity = function () { return __awaiter(_this, void 0, void 0, function () {
        var entity, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!entityName) {
                        alert("Entity Name is required!");
                        return [2 /*return*/];
                    }
                    if (attributes.length === 0) {
                        alert("At least one attribute is required!");
                        return [2 /*return*/];
                    }
                    entity = {
                        name: entityName,
                        attributes: attributes
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('http://192.168.1.18:3030/api/table/create', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(entity),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to save entity');
                    }
                    alert("Entity saved successfully!");
                    setEntityName("");
                    setAttributes([]);
                    resetAttributeForm();
                    setIsCustomEntity(false);
                    setSelectedEntity("");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error saving entity:', error_1);
                    alert("Failed to save entity. Please try again.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-9 sm:grid-cols-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-stroke px-6.5 py-4 dark:border-strokedark", children: (0, jsx_runtime_1.jsx)("h3", { className: "font-bold text-xl text-black dark:text-white", children: "Entity Setup" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6.5 space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: ["Select Entity ", (0, jsx_runtime_1.jsx)("span", { className: "text-meta-1", children: "*" })] }), (0, jsx_runtime_1.jsxs)("select", { value: selectedEntity, onChange: function (e) { return handleEntitySelect(e.target.value); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select an entity" }), Object.keys(predefinedEntities).map(function (entity) { return ((0, jsx_runtime_1.jsx)("option", { value: entity, children: entity }, entity)); }), (0, jsx_runtime_1.jsx)("option", { value: "custom", children: "Create Custom Entity" })] })] }), isCustomEntity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: ["Entity Name ", (0, jsx_runtime_1.jsx)("span", { className: "text-meta-1", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: entityName, onChange: function (e) { return setEntityName(e.target.value); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Enter entity name" })] })), (isCustomEntity || entityName) && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: ["Attribute Name ", (0, jsx_runtime_1.jsx)("span", { className: "text-meta-1", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: currentAttribute.name, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { name: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Enter attribute name" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-3 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: ["Data Type ", (0, jsx_runtime_1.jsx)("span", { className: "text-meta-1", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: currentAttribute.dataType, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { dataType: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Data type" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: "Size" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: currentAttribute.size, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { size: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Size" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: "Precision" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: currentAttribute.precision, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { precision: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Precision" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: "Constraints" }), (0, jsx_runtime_1.jsxs)("select", { value: currentAttribute.constraints, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { constraints: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select constraints" }), (0, jsx_runtime_1.jsx)("option", { value: "PRIMARY KEY", children: "PRIMARY KEY" }), (0, jsx_runtime_1.jsx)("option", { value: "UNIQUE", children: "UNIQUE" }), (0, jsx_runtime_1.jsx)("option", { value: "NOT NULL", children: "NOT NULL" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: "Default Value" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: currentAttribute.defaultValue, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { defaultValue: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", placeholder: "Enter default value" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "mb-1 block text-sm font-medium text-black dark:text-white", children: "Validations" }), (0, jsx_runtime_1.jsxs)("select", { value: currentAttribute.validations, onChange: function (e) { return setCurrentAttribute(__assign(__assign({}, currentAttribute), { validations: e.target.value })); }, className: "w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select validations" }), (0, jsx_runtime_1.jsx)("option", { value: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("option", { value: "phone", children: "Phone" }), (0, jsx_runtime_1.jsx)("option", { value: "url", children: "URL" })] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleAddAttribute, className: "flex w-full justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90", children: "Add Attribute" })] }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-9", children: [(0, jsx_runtime_1.jsxs)("div", { className: "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-stroke px-6.5 py-4 dark:border-strokedark", children: (0, jsx_runtime_1.jsx)("h3", { className: "font-bold text-xl text-black dark:text-white", children: "Entity Preview" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6.5", children: [(0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: "w-full table-auto", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { className: "bg-gray-2 text-left dark:bg-meta-4", children: [(0, jsx_runtime_1.jsx)("th", { className: "px-4 py-4 font-medium text-black dark:text-white", children: "Attribute Name" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-4 font-medium text-black dark:text-white", children: "Data Type" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-4 font-medium text-black dark:text-white", children: "Size" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-4 font-medium text-black dark:text-white", children: "Constraints" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-4 font-medium text-black dark:text-white", children: "Actions" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: attributes === null || attributes === void 0 ? void 0 : attributes.map(function (attr, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "border-b border-[#eee] px-4 py-5 dark:border-strokedark", children: attr.name }), (0, jsx_runtime_1.jsx)("td", { className: "border-b border-[#eee] px-4 py-5 dark:border-strokedark", children: attr.dataType }), (0, jsx_runtime_1.jsx)("td", { className: "border-b border-[#eee] px-4 py-5 dark:border-strokedark", children: attr.size }), (0, jsx_runtime_1.jsx)("td", { className: "border-b border-[#eee] px-4 py-5 dark:border-strokedark", children: attr.constraints }), (0, jsx_runtime_1.jsx)("td", { className: "border-b border-[#eee] px-4 py-5 dark:border-strokedark custom-icon-btn", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-3 custom-icon-btn", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleEditAttribute(index); }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Pencil, { className: "hover:text-primary custom-icon-btn" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return handleDeleteAttribute(index); }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "hover:text-meta-1 custom-icon-btn" }) })] }) })] }, index)); }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4.5 flex flex-wrap gap-3", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleSaveEntity, className: "inline-flex items-center justify-center rounded bg-primary px-6 py-2 text-center font-medium text-white hover:bg-opacity-90", children: "Save Entity" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () {
                                                        setEntityName("");
                                                        setAttributes([]);
                                                        resetAttributeForm();
                                                        setIsCustomEntity(false);
                                                        setSelectedEntity("");
                                                    }, className: " btn btn-cancel inline-flex items-center justify-center rounded bg-meta-1 px-6 py-2 text-center font-medium text-white hover:bg-opacity-90", children: "Cancel" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b border-stroke px-6.5 py-4 dark:border-strokedark", children: (0, jsx_runtime_1.jsx)("h3", { className: "font-medium text-black dark:text-white", children: "Entity Routes" }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-6.5", children: entityName && ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-2.5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "rounded border border-stroke py-3 px-4 dark:border-strokedark", children: ["GET /api/", entityName.toLowerCase()] }), (0, jsx_runtime_1.jsxs)("div", { className: "rounded border border-stroke py-3 px-4 dark:border-strokedark", children: ["POST /api/", entityName.toLowerCase()] }), (0, jsx_runtime_1.jsxs)("div", { className: "rounded border border-stroke py-3 px-4 dark:border-strokedark", children: ["PUT /api/", entityName.toLowerCase(), "/[id]"] }), (0, jsx_runtime_1.jsxs)("div", { className: "rounded border border-stroke py-3 px-4 dark:border-strokedark", children: ["DELETE /api/", entityName.toLowerCase(), "/[id]"] })] })) })] })] })] }) }));
}
