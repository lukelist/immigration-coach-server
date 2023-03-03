const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Project = require("../models/Company.model");
const Task = require("../models/NewHire.model");
const Task = require("../models/Journey.model");


/* creating a new company*/

router.post("/companies", (req, res, next) => {
    const { companyName, address, phoneNumber, website, mainContactName, mainContactEmail} = req.body;
  
    Company.create({ companyName, address, phoneNumber, website, mainContactName, mainContactEmail, newHires: [] })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });
  

module.exports = router;