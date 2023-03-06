const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Company = require("../models/Company.model");
const NewHire = require("../models/NewHire.model");
/*const Journey = require("../models/Journey.model"); */


/* creating a new company*/

router.post("/company", (req, res, next) => {
    const { companyName, address, phoneNumber, website, mainContactName, mainContactEmail} = req.body;
  
    Company.create({ companyName, address, phoneNumber, website, mainContactName, mainContactEmail, newHires: [] })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });

/* list of all companies */

  router.get("/companies", (req, res, next) => {
    Company.find()
      .populate("newHires")
      .then((allCompanies) => res.json(allCompanies))
      .catch((err) => res.json(err));
  });

/* get a company by id */
router.get("/companies/:companyId", (req, res, next) => {
  const { companyId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(companyId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  /* get array of new-hires */

  Company.findById(companyId)
  .populate("newHires")
  .then((company) => res.status(200).json(company))
  .catch((error) => res.json(error));
});
  

module.exports = router;