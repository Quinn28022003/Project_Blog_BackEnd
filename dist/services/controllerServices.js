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
const getRecentBlog_1 = __importDefault(require("../database/getRecentBlog"));
const getBlog_1 = __importDefault(require("../database/getBlog"));
const getTopicsPosts_1 = __importDefault(require("../database/getTopicsPosts"));
const getProject_1 = __importDefault(require("../database/getProject"));
class controllerServices {
    constructor() { }
    ;
    handleGetRecentBlogServices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initGetRecentBlog = new getRecentBlog_1.default();
                return initGetRecentBlog.getRecentBlog();
            }
            catch (error) {
                console.log('Error in class => controllerServices method => handleGetRecentBlogServices: ', error);
                throw new Error(String(error));
            }
            ;
        });
    }
    ;
    handleGetBlogServices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initGetBlog = new getBlog_1.default();
                return initGetBlog.getBlog();
            }
            catch (error) {
                console.log('Error in class => controllerServices method => handleGetBlogServices: ', error);
                throw new Error(String(error));
            }
            ;
        });
    }
    ;
    handleGetProjectServices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initGetProject = new getProject_1.default();
                return initGetProject.getProject();
            }
            catch (error) {
                console.log('Error in class => controllerServices method => handleGetProjectServices: ', error);
                throw new Error(String(error));
            }
            ;
        });
    }
    ;
    handleGetTopicsPostsServices(idPosts) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initgetTopicsPosts = new getTopicsPosts_1.default();
                return initgetTopicsPosts.getTopicsPosts(idPosts);
            }
            catch (error) {
                console.log('Error in class => controllerServices method => handleGetTopicsPostsServices: ', error);
                throw new Error(String(error));
            }
            ;
        });
    }
    ;
}
;
exports.default = controllerServices;
