require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/events");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/events", eventRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log(`Connected to DB. App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
