const express = require("express");
const router = express.Router();
const certificate = require("../models/Certificate.js");

router.get("/certificate", async (req, res) => {
  const details = await certificate.find({});
  res.json(details);
});

router.get("/certificate/:courseid", async (req, res) => {
  const courseId = req.params.id;
  const details = await certificate.findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});
router.post("/certificate", async (req, res) => {
  try {
    const data = req.body;
    const result = await certificate.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});



module.exports = router;
