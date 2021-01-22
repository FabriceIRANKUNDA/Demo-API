import express from 'express';
import dataRoute from './server/routes/dataRoute';

const app = express();

// app.get('/welcome', (req, res) => {
//   res.send('Welcome on demo project');
// });

app.use('/api/v1/data', dataRoute);

export default app;
