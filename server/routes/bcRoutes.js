import express from "express";
import { getFromOData } from "../services/bcService.js";

const router = express.Router();

router.get("/users/by-email", async (req, res) => {
  const filters = [
    { field: "EMail", operator: "eq", value: "enock.maeba@mwawater.org" },
  ];
  const data = await getFromOData("QyUserSetup", filters);
  res.json(data);
});

router.get("/users", async (req, res) => {
  try {
    const data = await getFromOData("QyUserSetup");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/employees/:id", async (req, res) => {
  const filters = [{ field: "No", operator: "eq", value: req.params.id }];
  const data = await getFromOData("QyEmployees", filters);
  res.json(data);
});

router.get("/employees", async (req, res) => {
  const data = await getFromOData("QyEmployees");
  res.json(data);
});

export default router;
