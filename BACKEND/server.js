
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/auth-routes");
const cors=require("cors");
const connectDb = require("./utils/db")
const errorMiddleware=require("./middleware/error-middleware");
const contactRoute = require("./routes/contact-routes");
const adminRoute=require("./routes/admin-route");

const corsOptions = {
  origin: true,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};


app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/auth",router);
app.use("/api/form", contactRoute);
app.use("/api/admin",adminRoute );



app.use(errorMiddleware);
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  });
