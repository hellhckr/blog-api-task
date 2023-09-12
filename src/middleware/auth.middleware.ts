import jwt, { GetPublicKeyOrSecret, Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  const secretOrPublicKey: Secret | GetPublicKeyOrSecret =
    process.env.SECRET_KEY || 'testforthisproject';

  try {
    const decoded = jwt.verify(token, secretOrPublicKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
