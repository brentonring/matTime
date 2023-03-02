"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@ionic/react");
const react_router_1 = require("@ionic/react-router");
const icons_1 = require("ionicons/icons");
const Tab1_1 = __importDefault(require("./pages/Tab1"));
const Tab2_1 = __importDefault(require("./pages/Tab2"));
const Tab3_1 = __importDefault(require("./pages/Tab3"));
const Tab4_1 = __importDefault(require("./pages/Tab4"));
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
(0, react_1.setupIonicReact)();
const App = () => ((0, jsx_runtime_1.jsx)(react_1.IonApp, { children: (0, jsx_runtime_1.jsx)(react_router_1.IonReactRouter, { children: (0, jsx_runtime_1.jsxs)(react_1.IonTabs, { children: [(0, jsx_runtime_1.jsxs)(react_1.IonRouterOutlet, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/tab1" }, { children: (0, jsx_runtime_1.jsx)(Tab1_1.default, {}) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/tab2" }, { children: (0, jsx_runtime_1.jsx)(Tab2_1.default, {}) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ path: "/tab3" }, { children: (0, jsx_runtime_1.jsx)(Tab3_1.default, {}) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ path: "/tab4" }, { children: (0, jsx_runtime_1.jsx)(Tab4_1.default, {}) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Redirect, { to: "/tab1" }) }))] }), (0, jsx_runtime_1.jsxs)(react_1.IonTabBar, Object.assign({ slot: "bottom" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.IonTabButton, Object.assign({ tab: "tab1", href: "/tab1" }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonIcon, { icon: icons_1.disc }), (0, jsx_runtime_1.jsx)(react_1.IonLabel, { children: "Brackets" })] })), (0, jsx_runtime_1.jsxs)(react_1.IonTabButton, Object.assign({ tab: "tab2", href: "/tab2" }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonIcon, { icon: icons_1.list }), (0, jsx_runtime_1.jsx)(react_1.IonLabel, { children: "Mat Schedule" })] })), (0, jsx_runtime_1.jsxs)(react_1.IonTabButton, Object.assign({ tab: "tab3", href: "/tab3" }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonIcon, { icon: icons_1.clipboard }), (0, jsx_runtime_1.jsx)(react_1.IonLabel, { children: "Team Schedule" })] })), (0, jsx_runtime_1.jsxs)(react_1.IonTabButton, Object.assign({ tab: "tab4", href: "/tab4" }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonIcon, { icon: icons_1.ellipsisHorizontal }), (0, jsx_runtime_1.jsx)(react_1.IonLabel, { children: "More" })] }))] }))] }) }) }));
exports.default = App;
