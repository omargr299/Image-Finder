import express from 'express';
import {PORT} from './config.js';
import queryRouter from './routes/query.routes.js'
import cors from 'cors'

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use(queryRouter)

app.listen(PORT);
console.log("Server runing on port ", PORT);