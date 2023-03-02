"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ExploreContainer.css");
const ExploreContainer = ({ name }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("strong", { children: name }), (0, jsx_runtime_1.jsxs)("p", { children: ["Explore ", (0, jsx_runtime_1.jsx)("a", Object.assign({ target: "_blank", rel: "noopener noreferrer", href: "https://ionicframework.com/docs/components" }, { children: "UI Components" }))] })] })));
};
exports.default = ExploreContainer;
