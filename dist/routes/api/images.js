"use strict";
// src/routes/api/images.ts
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var config_1 = require("../../config");
var router = express_1.default.Router();
var fullFolderPath = path_1.default.join(__dirname, './full');
// const outputFolderPath = path.join(__dirname, './output');
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, width, height, _i, files_1, file, imagePath, resizedImageBuffer, outputPath, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                console.log('Endpoint /images is running'); // Log message when endpoint is hit
                files = fs_1.default.readdirSync(fullFolderPath);
                width = parseInt(req.query.width, 10) || 200;
                height = parseInt(req.query.height, 10) || 200;
                console.log(fullFolderPath);
                _i = 0, files_1 = files;
                _a.label = 1;
            case 1:
                if (!(_i < files_1.length)) return [3 /*break*/, 4];
                file = files_1[_i];
                if (!(file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'))) return [3 /*break*/, 3];
                imagePath = path_1.default.join(fullFolderPath, file);
                return [4 /*yield*/, (0, sharp_1.default)(imagePath)
                        .resize({ width: width, height: height })
                        .toBuffer()];
            case 2:
                resizedImageBuffer = _a.sent();
                outputPath = path_1.default.join(config_1.outputFolderPath, file);
                console.log(outputPath);
                fs_1.default.writeFileSync(outputPath, resizedImageBuffer);
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                res.send('Endpoint /images is running'); // Send a response
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                // Handle errors
                console.error('Error:', err_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
