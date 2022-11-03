const User = require("../models/user.model");
const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
      const user = await User.find({}).lean().exec();
      res.status(200).json({ user: user});
    } catch (error) {
      return res.status(500).send({message: error.message});
    }
});

module.exports = router;