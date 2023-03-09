const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Company = require("../models/Company.model");
const NewHire = require("../models/NewHire.model");
const Journey = require("../models/Journey.model");


router.put("/modify-date", (req, res, next) => {
    const { _id } = req.body;
  
    Journey.findByIdAndUpdate(_id, req.body, { new: true })
      .then((updatedJourney) => res.status(200).json(updatedJourney))
      .catch((error) => res.json(error));
  });

  module.exports = router;