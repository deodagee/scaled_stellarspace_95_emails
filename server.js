import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import contactRouter from './src/pages/api/send-email'; // Import your send-email API route

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Use your send-email API route
  server.use('src/pages/api/send-email', contactRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
