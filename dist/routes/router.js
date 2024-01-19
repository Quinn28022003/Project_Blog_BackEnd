"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller/controller"));
class router {
    constructor() {
        this.Routers = express_1.default.Router();
    }
    ;
    initRouter(app) {
        const initController = new controller_1.default;
        this.Routers.get('/posts/blog', initController.handleGetBlog);
        this.Routers.get('/posts/project', initController.handleGetProject);
        this.Routers.get('/posts/recentBlog', initController.handleGetRecentBlog);
        this.Routers.get('/posts/topics/:idPosts', initController.handleGetTopicsPosts);
        return app.use('/api', this.Routers);
    }
    ;
}
;
exports.default = router;
