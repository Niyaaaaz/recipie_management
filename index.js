const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(taskRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/tasksDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));