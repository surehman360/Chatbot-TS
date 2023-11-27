// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes';

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// API routes
app.use('/', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
