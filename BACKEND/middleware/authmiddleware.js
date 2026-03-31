const jwt = require("jsonwebtoken");
const User = require("../models/user-models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token not provided." });
  }

  const jwtToken = token.startsWith("Bearer ") ? token.replace("Bearer ", "").trim() : token;
  console.log("Incoming token:", jwtToken);

  try {
    // Verifying the token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("Decoded token:", isVerified);

    // Fetching user data based on the decoded token's email
    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    req.token = jwtToken; // Use the verified token instead of the original
    req.user = userData;
    req.userID = userData._id; // Attach user ID to request

    next();
  } catch (error) {
    console.log("Token verification error:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
