const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Journey = require('../models/Journey.model')
const NewHire = require("../models/NewHire.model");
const Company = require("../models/Company.model");

//  Creating a New-hire

router.post("/newhires", (req, res, next) => {
  const {
    firstName,
    lastName,
    caseOwner,
    nationality,
    comingFrom,
    bookedOn,
    startDate,
    spouse,
    children,
    relocationPackage,
    immigrationPackage,
    anerkennung,
    vorabpruefung,
    comments,
    companyId
  } = req.body;
  console.log(req.body)

  NewHire.create({
    firstName,
    lastName,
    caseOwner,
    nationality,
    comingFrom,
    bookedOn,
    startDate,
    spouse,
    children,
    relocationPackage,
    immigrationPackage,
    anerkennung,
    vorabpruefung,
    comments,
    company: companyId,
  })
    .then((newNewHire) => {
      console.log(newNewHire)
      return Company.findByIdAndUpdate(companyId, {
        $push: { newHires: newNewHire._id },
      })
      .then(()=>{
        Journey.create({newHire: newNewHire._id})
        .then(()=>{
          console.log('works')
        })
        .catch((err)=> console.log(err))
      })
      .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});


router.get("/companies/:companyId/:newHireId", (req, res, next)=> {

})

// /* get a journey by id */
router.get("/journey/:newhireId", (req, res, next) => {
  const { newhireId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(newhireId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Journey.find({newHire:newhireId})

  .then((journey) => res.status(200).json(journey))
  .catch((error) => res.json(error));

});
  

module.exports = router;
