const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");
const validateLead = require("../middleware/validateLead");

// GET /api/leads
router.get("/", leadController.getLeads);

// GET /api/leads/:id
router.get("/:id", leadController.getLead);

// POST /api/leads
router.post("/", validateLead, leadController.createLead);

// PUT /api/leads/:id
router.put("/:id", validateLead, leadController.updateLead);

// DELETE /api/leads/:id
router.delete("/:id", leadController.deleteLead);

module.exports = router;
