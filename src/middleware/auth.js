const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "taskmanager");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    //   console.log(user);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.send({ error: "Unable to authorize" }).status(401);
  }
};

module.exports = auth;
