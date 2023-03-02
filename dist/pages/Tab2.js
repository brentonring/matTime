"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@ionic/react");
const ExploreContainer_1 = __importDefault(require("../components/ExploreContainer"));
require("./Tab2.css");
const Tab2 = () => {
    return ((0, jsx_runtime_1.jsxs)(react_1.IonPage, { children: [(0, jsx_runtime_1.jsx)(react_1.IonHeader, { children: (0, jsx_runtime_1.jsx)(react_1.IonToolbar, { children: (0, jsx_runtime_1.jsx)(react_1.IonTitle, { children: "Tab 2" }) }) }), (0, jsx_runtime_1.jsxs)(react_1.IonContent, Object.assign({ fullscreen: true }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonHeader, Object.assign({ collapse: "condense" }, { children: (0, jsx_runtime_1.jsx)(react_1.IonToolbar, { children: (0, jsx_runtime_1.jsx)(react_1.IonTitle, Object.assign({ size: "large" }, { children: "Tab 2" })) }) })), (0, jsx_runtime_1.jsx)(ExploreContainer_1.default, { name: "Tab 2 page" })] }))] }));
};
exports.default = Tab2;
