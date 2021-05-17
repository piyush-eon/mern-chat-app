const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`.yellow.bold));
