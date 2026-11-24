import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import agentRoutes from './routes/agent.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'AI Agent Backend is running'
  });
});

app.use('/api/agent', agentRoutes);

app.use('/api/tasks', taskRoutes);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});