import express from 'express';
import { pgMiddleware } from './utils/postgraphile';

export const app = express();

app.use(pgMiddleware);
app.get('/', (req, res) => {
    res.send('Hello world');
});
