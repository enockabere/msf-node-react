import express from "express";
import dotenv from "dotenv";
import bcRoutes from "./routes/bcRoutes.js";
import bcSoapRoutes from "./routes/bcSoapRoutes.js";

import sequelize  from "./models/index.js";
import User from "./models/userModel.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/bc", bcRoutes);
app.use("/api/bc", bcSoapRoutes);

// Test DB connection and sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("🔗 Database connected.");
    await sequelize.sync({ alter: true });
    console.log("📦 Models synchronized.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
