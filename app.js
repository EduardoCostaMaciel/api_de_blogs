const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

const errorMiddleware = require('./src/api/schemas/middlewares/errorMiddleware');

const userRouter = require('./src/api/routers/Users/user');
const loginRouter = require('./src/api/routers/login/login');
const postRouter = require('./src/api/routers/Posts/post');

const corsOptions = { origin: 'http://localhost:3000' };

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);

app.use(errorMiddleware);

module.exports = server;