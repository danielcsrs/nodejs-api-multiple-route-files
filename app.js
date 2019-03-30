import express from 'express';
import router from './routes/router';

// start express
const app = express();

// set middlewares
app.use(
  router,
);

// establish http server connection
app.listen(port, () => { console.log(`App running on port ${port}`); });
