import * as functions from "firebase-functions";
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import bodyParser from 'body-parser'

const app = express()


app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', router)
// app.use((req, res, next) => {
//     res.status(404)
//     res.json({
//         message: "not right request url"
//     });
// })

const appForS = functions.https.onRequest(app)
module.exports = { appForS }