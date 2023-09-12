import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = process.env.SECRET_KEY || 'testforthisproject'; 

// const users: { username: string; password: string; role: string }[] = [
//     {
//       username: 'user1',
//       password: 'password1',
//       role: 'user',
//     },
//     {
//       username: 'admin1',
//       password: 'adminpassword1',
//       role: 'admin',
//     },
//   ];

class AuthController {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
      const user = { username, role: 'user' }; 
      const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  }
}

export default new AuthController();
