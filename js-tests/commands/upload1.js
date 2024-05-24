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
exports.uploadFileTest = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function uploadFileTest(apiContext) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = path_1.default.resolve('./utils/notice3.png');
        const image = fs_1.default.readFileSync(file);
        const url = '';
        const response = yield apiContext.post(url, {
            headers: {
                Accept: "*/*",
                ContentType: "multipart/form-data",
            },
            multipart: {
                UPLOADCARE_PUB_KEY: '6a56702149520ae291c3',
                file: {
                    name: file,
                    mimeType: "image/png",
                    buffer: image,
                },
                title: "Logo of Business",
            },
        });
        const responseJson = yield response.json();
        console.log('Respuesta de la API:', responseJson);
        return response;
    });
}
exports.uploadFileTest = uploadFileTest;
