"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrestlerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WrestlerSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    team: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const WrestlerModel = mongoose_1.default.model('Wrestler', WrestlerSchema);
exports.WrestlerModel = WrestlerModel;
