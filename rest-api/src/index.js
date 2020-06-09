'use strict';

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models, { sequelize } from './models';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('Taya'),
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
    if (eraseDatabaseOnSync) {
        createUsersWithMessages();
    }

    app.listen(process.env.PORT, () =>
        console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});

const createUsersWithMessages = async() => {
    await models.User.create(
        {
            username: 'Taya',
            messages: [
                {
                    text: 'Hello, I am cat!',
                },
            ],
        },
        {
            include: [models.Message],
        },
    );
};
