const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());

const { signin, signup } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const eventController = require("./controllers/event.controller")


app.post("/signup", signup);
app.post("/signin", signin);
app.use("/user", userController);
app.use("/event", eventController);

module.exports = app;