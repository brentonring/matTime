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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const wrestler_1 = require("./models/wrestler");
// require('dotenv').config()
const mongoose = require('mongoose');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose.connect('mongodb://localhost:27017/techFallDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Error connecting to database: ', error);
});
app.post('/wrestlers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wrestler = new wrestler_1.WrestlerModel(req.body);
        yield wrestler.save();
        res.send(wrestler);
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }
}));
app.listen(8000, () => {
    console.log('Server started on port 8000');
});
