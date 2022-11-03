const User = require("../models/user.model");
const jtw = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jtw.sign({ id: user.id }, process.env.JWT_SECRET);
};

const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = newToken(user);
    res.status(201).json({ status: "Success", user:user, token: token});
  } catch (err) {
    res.status(500).json({ error: `something went wrong with signup ${err.message}` });
  }
};

const signin = async (req, res) => {
 
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ email: req.body.email });

    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // if user is found then we will match the passwords
    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token
    res.send({ user:user, token:token, status: "success"});
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  signup,
  signin,
  newToken,
};