const Event = require("../models/event.model");
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const event = await Event.find().populate(["host", "guests"]).lean().exec();
    return res.status(200).send({ getallevent: event });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    return res.status(201).send({ event: event });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let event = await Event.find(req.params.id).lean().exec();
    return res.status(201).send({ eventbyid: event });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    let event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(500).send({ upevent: event });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    let event = await Event.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(500).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;
