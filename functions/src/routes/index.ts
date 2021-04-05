import express from 'express'

export const router = express.Router()

router.get('/test', (req, res) => {
    res.status(200).send({ messgage: req.body.message })
})