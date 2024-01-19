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
const controllerServices_1 = __importDefault(require("../services/controllerServices"));
class controller {
    constructor() { }
    ;
    handleGetRecentBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initControllerServices = new controllerServices_1.default();
                const data = yield initControllerServices.handleGetRecentBlogServices();
                if (data) {
                    res.status(200).json({
                        data: data,
                        message: 'success!',
                        errorCode: 0
                    });
                }
                else {
                    res.status(200).json({
                        message: 'failed!',
                        errorCode: 1
                    });
                }
                ;
            }
            catch (error) {
                console.log('Error in class => controller method => handleGetRecentBlog: ', error);
                res.status(500).json({
                    error: 'Internal Server Error',
                });
            }
            ;
        });
    }
    ;
    handleGetBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initControllerServices = new controllerServices_1.default();
                const data = yield initControllerServices.handleGetBlogServices();
                if (data) {
                    res.status(200).json({
                        data: data,
                        message: 'success!',
                        errorCode: 0
                    });
                }
                else {
                    res.status(200).json({
                        message: 'failed!',
                        errorCode: 1
                    });
                }
                ;
            }
            catch (error) {
                console.log('Error in class => controller method => handleGetBlog: ', error);
                res.status(500).json({
                    error: 'Internal Server Error',
                });
            }
            ;
        });
    }
    ;
    handleGetProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const initControllerServices = new controllerServices_1.default();
                const data = yield initControllerServices.handleGetProjectServices();
                if (data) {
                    res.status(200).json({
                        data: data,
                        message: 'success!',
                        errorCode: 0
                    });
                }
                else {
                    res.status(200).json({
                        message: 'failed!',
                        errorCode: 1
                    });
                }
                ;
            }
            catch (error) {
                console.log('Error in class => controller method => handleGetProject: ', error);
                res.status(500).json({
                    error: 'Internal Server Error',
                });
            }
            ;
        });
    }
    ;
    handleGetTopicsPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idPosts = Number(req.params.idPosts);
                const initControllerServices = new controllerServices_1.default();
                const data = yield initControllerServices.handleGetTopicsPostsServices(idPosts);
                if (data) {
                    res.status(200).json({
                        data: data,
                        message: 'success!',
                        errorCode: 0
                    });
                }
                else {
                    res.status(200).json({
                        message: 'failed!',
                        errorCode: 1
                    });
                }
                ;
            }
            catch (error) {
                console.log('Error in class => controller method => handleGetTopicsPosts: ', error);
                res.status(500).json({
                    error: 'Internal Server Error',
                });
            }
            ;
        });
    }
    ;
}
;
exports.default = controller;
