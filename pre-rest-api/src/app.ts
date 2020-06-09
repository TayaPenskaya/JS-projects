import express from 'express';
import routes from './routes';
import Location from './db';

declare global {
    namespace Express {
        interface Request {
            context?: any
        }
    }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, _res, next) => {
    req.context = Location;
    next();
});

app.use('/locations', routes.location);

export default app;