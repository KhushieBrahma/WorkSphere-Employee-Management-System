const app = require("./src/app");
const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

const server = app.listen(PORT, () => {
  console.log(`
=========================================
🚀 WorkSphere Backend Server Started
🌐 Server Running On Port: ${PORT}
=========================================
  `);
});

server.on("error", (err) => {
  console.error("Server Error:", err);
});