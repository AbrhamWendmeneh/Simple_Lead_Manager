const validateLead = (req, res, next) => {
  const { name, email, status } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  if (
    status &&
    !["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"].includes(
      status
    )
  ) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  next();
};

module.exports = validateLead;
