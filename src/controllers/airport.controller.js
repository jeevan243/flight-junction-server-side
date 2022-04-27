const express = require("express");
const Airport = require("../models/airport.model")

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        let airport = await Airport.create(req.body)
        return res.status(201).send(airport)
    } catch (error) {
        return res.status(400).send(error.message)
    }

})


router.get("/", async (req, res) => {
    try {
        let airports = await Airport.find().lean().exec()
        return res.status(200).send(airports)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})


router.get("/:id", async (req, res) => {
    try {
        let airports = await Airport.findById(req.params.id).lean().exec()
        return res.status(200).send(airports)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;