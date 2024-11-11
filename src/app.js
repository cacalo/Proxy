import { config } from "dotenv";
import express from "express";
import morgan from "morgan";

const proxy = require('express-http-proxy');

const cors = require('cors')
const app = express();
config();

//Settings
app.set("port",process.env.PORT);

//Middlewares
app.use(morgan("dev"));
app.use(express.json())
app.use(cors())

//Debug console.logs
// app.use('/', (req, res, next) => {
//   console.log('Request URL:', req.originalUrl)
//   console.log('Request Body:', req.body)
//   next()
//})

//Proxy
app.use('/direccion1', proxy('https://direccion1.com'));
app.use('/direccion2', proxy('https://direccion2.com'));


export default app;
