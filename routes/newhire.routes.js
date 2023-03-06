const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Journey = require('../models/Journey.model')
const Newhire = require("../models/NewHire.model");
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
  } = req.body;

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
      return Company.findByIdAndUpdate(companyId, {
        $push: { newHires: newNewHire._id },
      });
    })
    .then(()=>{
      Journey.create({newHire: newNewHire._id, stages: {
        intro: { kickOffCall, documentsReceived},
    
        anerkennung: {
          introEmailSent: { type: Date },
          anerkennungResponseReceived: { type: Date },
        },
    
        vorabpruefung: {
          formsRequested: { type: Date },
          docsReceived: { type: Date },
          requestSubmitted: { type: Date },
          responseScannedandSent: { type: Date },
        },
    
        visa: {
          visaApptBooked: { type: Date },
          visaAppointmentDate: { type: Date },
          visaScanReceived: { type: Date },
          visaValidUntil: { type: Date },
        },
    
        relocation: {
          arrivalDate: { type: Date },
          coachMatched: { type: Date },
          coach: { type: String },
          beginsOn: { type: Date },
          numberOfWeeks: { type: Number },
          endDate: { type: Date },
        },
    
        workPermit: {
          formsRequested: { type: Date },
          formsRecieved: { type: Date },
          submitted: { type: Date },
          apptDateGiven: { type: Date },
          appointmentDate: { type: Date },
          issued: { type: Date },
        },
      } })
      .then(()=>{
        console.log('works')
      })
      .catch((err)=> console.log(err))
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
