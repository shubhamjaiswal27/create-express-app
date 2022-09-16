import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

import routes from './routes';

dotenv.config();

const PORT     = process.env.SERVER_PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';

export const createApp = () => {
    const app      = express();

    app.use(bodyParser.json());
    app.use('/api', routes);
    
    app.use('/', (req, res) => {
        res.send('hello from express');
    });

    return app;
}

const app = createApp();

app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
