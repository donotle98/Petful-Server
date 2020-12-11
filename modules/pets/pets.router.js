const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
    // Return all pets currently up for adoption.
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
router.delete("/", json, (req, res) => {
    // Remove a pet from adoption.
});

module.exports = router;
