"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@ionic/react");
require("./Tab1.css");
const react_2 = require("react");
const axios_1 = __importDefault(require("axios"));
const Tab1 = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        team: '',
    };
    const WrestlerForm = () => {
        const [formData, setFormData] = (0, react_2.useState)(initialFormData);
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => (Object.assign(Object.assign({}, prevFormData), { [name]: value })));
        };
        const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            try {
                yield axios_1.default.post("http://localhost:8000/wrestlers", formData);
                setFormData(initialFormData);
                alert("Wrestler added successfully");
            }
            catch (err) {
                console.log(err);
                alert("Error adding wrestler");
            }
        });
        return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "firstName" }, { children: "First Name:" })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "firstName", name: "firstName", value: formData.firstName, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "lastName" }, { children: "Last Name:" })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "lastName", name: "lastName", value: formData.lastName, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "team" }, { children: "Team:" })), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "team", name: "team", value: formData.team, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit" }, { children: "Add Wrestler" }))] })));
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.IonPage, { children: [(0, jsx_runtime_1.jsx)(react_1.IonHeader, { children: (0, jsx_runtime_1.jsxs)(react_1.IonToolbar, { children: [(0, jsx_runtime_1.jsx)(react_1.IonButtons, Object.assign({ slot: "start" }, { children: (0, jsx_runtime_1.jsx)(react_1.IonMenuButton, {}) })), (0, jsx_runtime_1.jsx)(react_1.IonTitle, { children: "Brackets" })] }) }), (0, jsx_runtime_1.jsxs)(react_1.IonContent, Object.assign({ fullscreen: true }, { children: [(0, jsx_runtime_1.jsx)(react_1.IonHeader, Object.assign({ collapse: "condense" }, { children: (0, jsx_runtime_1.jsx)(react_1.IonToolbar, { children: (0, jsx_runtime_1.jsx)(react_1.IonTitle, Object.assign({ size: "large" }, { children: "Brackets" })) }) })), (0, jsx_runtime_1.jsx)(WrestlerForm, {})] }))] }));
};
exports.default = Tab1;
