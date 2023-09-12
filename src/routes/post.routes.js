"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.get('/', post_controller_1.default.getAllPosts);
router.get('/:id', post_controller_1.default.getPostById);
router.post('/', auth_middleware_1.authenticateUser, post_controller_1.default.createPost);
router.put('/:id', auth_middleware_1.authenticateUser, post_controller_1.default.updatePost);
router.delete('/:id', auth_middleware_1.authenticateUser, post_controller_1.default.deletePost);
exports.default = router;
