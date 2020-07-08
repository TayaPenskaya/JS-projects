import express from 'express';

import routes from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/locations', routes);

export default app;
