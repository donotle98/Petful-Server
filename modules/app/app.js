const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, CLIENT_ORIGIN } = require("../../config");
const app = express();
const morganSetting = NODE_ENV === "production" ? "tiny" : "common";
app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors());
app.use(
    cors({
        origin: CLIENT_ORIGIN,
    })
);
app.use("/people", require("../people/people.router"));
app.use("/pets", require("../pets/pets.router"));
app.get("/", (req, res) => {
    res.json("Hello World!");
});
module.exports = app;
