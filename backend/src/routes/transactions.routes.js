import express from "express";
import { sql } from "../config/db.js";
import { createTransaction, deleteTransaction, getTransactionsByUserId, getSummaryByUserId } from "../controllers/transactions.controller.js";

const router = express.Router();

router.post("/", createTransaction);

router.get("/:userId", getTransactionsByUserId);

router.delete("/:id", deleteTransaction);

router.get("/summary/:userId", getSummaryByUserId);

export default router;
