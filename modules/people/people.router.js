const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router
    .get("/", (req, res) => {
        res.json(People.get());
    })
    .post("/", json, (req, res) => {
        const { name } = req.body;
        People.enqueue(name);
        res.status(201).json(People.get());
    })
    .delete("/", (req, res) => {
        res.status(200).send(People.dequeue());
    });

module.exports = router;
