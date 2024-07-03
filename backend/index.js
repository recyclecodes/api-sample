import dotenv from 'dotenv';
import express from 'express';
import router from './routes/router.js';
import db from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

db()
  .then(() => {
    console.log('Connected to MongoDB');
    console.log(`Environment Port: ${process.env.PORT}`);

    app.use(express.json);

    app.use(router);

    app.get('/', (request, response) => response.send({ app: 'api' }));

    app.listen(port, (error) => {
      if (error) {
        console.error(`Failed to start server on port ${port}`, error);
        process.exit(1);
      } else {
        console.log(`Server is listening on port ${port}`);
      }
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
