import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';

class PostController {
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async getPostById(req: Request, res: Response) {
    const postId = req.params.id;

    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async createPost(req: Request, res: Response) {
    const { title, content, author } = req.body;

    try {
      const newPost: IPost = new Post({
        title,
        content,
        author,
      });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async updatePost(req: Request, res: Response) {
    const postId = req.params.id;
    const { title, content } = req.body;

    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      post.title = title;
      post.content = content;
      post.updatedAt = new Date();
      await post.save();

      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

  async deletePost(req: Request, res: Response) {
    const postId = req.params.id;

    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      await Post.deleteOne({ _id: postId }); // Use deleteOne to delete the post
      res.json({ message: 'Post deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }
}

export default new PostController();
