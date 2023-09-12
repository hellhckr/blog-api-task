import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/post.routes';
import authRoutes from './routes/auth.routes';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog';

// MongoDB connection options
const mongooseOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_URL, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
