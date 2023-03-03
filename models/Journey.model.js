const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const journeySchema = new Schema({
  newHire: { type: Schema.Types.ObjectId, ref: "NewHire" },
  stages: {
    intro: { kickOffCall: { type: Date }, documentsReceived: { type: Date } },

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
  },
});

module.exports = model("Journey", journeySchema);
