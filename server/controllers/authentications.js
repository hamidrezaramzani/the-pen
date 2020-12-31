import jwt from "jsonwebtoken";
import config from "config";
export const authentication = (req, res, next) => {
  try {
    const token = req.get("TOKEN");
    const user = jwt.verify(token, config.get("USER_SECRET"));
    if (!user.email || !user.level) {
      res.status(401).json({ message: "Autentication failed" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Internal ErorrI" });
  }
};
