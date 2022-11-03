const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) return reject(err);
      return resolve(payload);
    });
  });
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    res.status(400).json({ error: "Something went wrong" });
  }
  let token = bearer.split(" ")[1].trim();

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    return res
      .status(400)
      .json({ status: "failed", message: "something went wrong" });
  }

  let user;
  try {
    user = await User.findById(payload.id).exec();
    if (!user)
      return res.status(401).json({
        status: "failed",
        message: "Email or password is not correct",
      });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong",
    });
  }

  req.user = user;
  next();
};

module.exports = protect;