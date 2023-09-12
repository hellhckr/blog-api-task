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
const Post_1 = __importDefault(require("../models/Post"));
class PostController {
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.default.find().sort({ createdAt: -1 });
                res.json(posts);
            }
            catch (error) {
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.id;
            try {
                const post = yield Post_1.default.findById(postId);
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                res.json(post);
            }
            catch (error) {
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, author } = req.body;
            try {
                const newPost = new Post_1.default({
                    title,
                    content,
                    author,
                });
                yield newPost.save();
                res.status(201).json(newPost);
            }
            catch (error) {
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.id;
            const { title, content } = req.body;
            try {
                const post = yield Post_1.default.findById(postId);
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                post.title = title;
                post.content = content;
                post.updatedAt = new Date();
                yield post.save();
                res.json(post);
            }
            catch (error) {
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const postId = req.params.id;
            try {
                const post = yield Post_1.default.findById(postId);
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                yield Post_1.default.deleteOne({ _id: postId }); // Use deleteOne to delete the post
                res.json({ message: 'Post deleted' });
            }
            catch (error) {
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
}
exports.default = new PostController();
