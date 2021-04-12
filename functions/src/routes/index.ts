import express from 'express'

import { uploadsWTest } from '../middleware/uploadAction'

export const router = express.Router()

router.get('/test', (req, res) => {
    res.status(200).send({ message: "hello this is PR-Card API server ( ^ ^ ) /" })
})

router.post('/testPost', (req, res) => {
    uploadsWTest(req.body.action, req.body.time, req.body.user).then(() => {
        res.set({ 'Access-Control-Allow-Origin': '*' })
        res.status(200).send({ message: req.body.message })
    })
})