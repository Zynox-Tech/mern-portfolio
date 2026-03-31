const User=require("../models/user-models");
 // *-------------------------------
//* User home Logic 📝
// *-------------------------------

const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log("auth-controller home error", error);
      next(error);
    }
  };
   // *-------------------------------
//* User signup Logic 📝
// *-------------------------------

const signup = async (req, res, next) => {
  try {
    console.log("Received data:", req.body);

    const { username, email, phone, password } = req.body;

    console.log("Checking if user exists...");
    const userExist = await User.findOne({ email: email });
    
    if (userExist) {
      console.log("User already exists");
      return res.status(400).json({ msg: "email already exists" });
    }

    console.log("Creating new user...");
    const userCreated = await User.create({ username, email, phone, password });

    console.log("Generating token...");
    const token = await userCreated.generateToken();

    res.status(201).json({
      msg: "Registration Successful",
      token: token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    const message=new Error("auth-controller signup error");
    next(message); 
  }
};


  // *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    console.log("auth-controller login error", error);
    next(error);
  }
};
  // *-------------------------------
//* User user Logic 📝
// *-------------------------------
const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

  
  module.exports = { home,signup,login,user};
 