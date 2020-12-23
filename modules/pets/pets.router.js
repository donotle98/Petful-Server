const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(Pets.get());
});
router.get("/dogs", (req, res) => {
    res.json(Pets.get("dogs"));
});
router.get("/cats", (req, res) => {
    res.json(Pets.get("cats"));
});
router.delete("/dogs", (req, res) => {
    res.json(Pets.dequeue("dogs"));
});
router.delete("/cats", (req, res) => {
    res.json(Pets.dequeue("cats"));
});

module.exports = router;
