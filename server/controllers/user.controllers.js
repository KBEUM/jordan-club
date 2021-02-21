import User from "../models/user.model.js";

export const createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json(err);
    return res.status(200).json({
      success: true,
    });
  });
};

export const loginUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: "Email or password not correct.",
      });
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSucess: false,
          message: "Email or password not dfcorrect.",
        });
      res.status(200).json({ loginSucess: true, userId: user._id });
    });
  });
};
