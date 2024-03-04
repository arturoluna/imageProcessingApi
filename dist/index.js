"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = (0, express_1.default)();
var port = 3000;
// import imagesRouter from './routes/api/images';
var index_1 = __importDefault(require("./routes/index"));
app.use('/api/', logger_1.default, index_1.default);
// // Use the images router
// app.use('/api/images', imagesRouter);
app.get('/', logger_1.default, function (req, res) {
    res.send('Hello, Express!');
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
exports.default = app;
