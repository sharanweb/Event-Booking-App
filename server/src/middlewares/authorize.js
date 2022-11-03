const User = require("../models/user.model");

const authorization = (roles) => {
  return async (req, res, next) => {
    if (!roles || roles.length == 0) {
      return next();
    }
    const user = await req.user;
    const userAllowed = await User.findOne({
      _id: user._id,
      roles: { $in: roles },
    })
      .lean()
      .exec();

    if (!userAllowed) return res.status(401).json({ error: "not authorized" });

    return next();
  };
};

module.exports = authorization;