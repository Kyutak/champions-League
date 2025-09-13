import express from 'express';
import routers from './routes';
import cors from 'cors';

function createApp() {
    const app = express();

    app.use(express.json());

    app.use('/api',routers)

    app.use(cors())

    return app;
}

export default createApp;

