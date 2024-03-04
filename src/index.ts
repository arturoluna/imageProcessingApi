// src/index.ts
import express from 'express';
import logger from './utilities/logger'
const app = express();
const port = 3000;
// import imagesRouter from './routes/api/images';
import routes from './routes/index'

app.use('/api/', logger, routes);
// // Use the images router
// app.use('/api/images', imagesRouter);

app.get('/', logger, (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;