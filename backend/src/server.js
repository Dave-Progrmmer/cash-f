import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import transactionsRouter from "./routes/transactions.routes.js";

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(rateLimiter);
app.use(express.json());

connectDB();

app.use("/api/transactions", transactionsRouter);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
