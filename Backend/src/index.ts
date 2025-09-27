require('dotenv').config();
import express from 'express';
import cors from 'cors';
import templateRoutes from './routes/template';
import chatRoutes from './routes/chat';
import { config } from './config/environment';


const app = express();
// Use the frontend URL from environment variables for CORS
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
  origin: frontendUrl,
  credentials: true,
}));
app.use(express.json());

// Setup routes
app.use('/template', templateRoutes);
app.use('/chat', chatRoutes);

app.listen(config.port, () => {
  console.log(`Gemini server running on http://localhost:${config.port}`);
  console.log(`Frontend URL allowed by CORS: ${frontendUrl}`);
});
