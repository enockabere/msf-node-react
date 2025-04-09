import express from "express";
import { callBCSoapFunction } from "../services/bcSoapService.js";

const router = express.Router();

router.post("/soap/fn-leave-planner", async (req, res) => {
  try {
    const {
      plannerNo = "",
      employeeNo = "MWA0001",
      myAction = "insert",
    } = req.body;

    const response = await callBCSoapFunction("FnLeavePlannerHeader", {
      plannerNo,
      employeeNo,
      myAction,
    });

    res.json(response);
  } catch (err) {
    console.error("SOAP Error:", err.message);
    res.status(500).json({ error: "SOAP call failed", message: err.message });
  }
});

export default router;
