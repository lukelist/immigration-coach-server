const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const journeySchema = new Schema({
  newHire: { type: Schema.Types.ObjectId, ref: "NewHire" },
  stages: {
    intro: {
      kickOffCall: { type: Date, default: 0000 - 00 - 00 },
      documentsReceived: { type: Date, default: 0000 - 00 - 00 },
    },

    anerkennung: {
      introEmailSent: { type: Date, default: 0000 - 00 - 00 },
      anerkennungResponseReceived: { type: Date, default: 0000 - 00 - 00 },
    },

    vorabpruefung: {
      formsRequested: { type: Date, default: 0000 - 00 - 00 },
      docsReceived: { type: Date, default: 0000 - 00 - 00 },
      requestSubmitted: { type: Date, default: 0000 - 00 - 00 },
      responseScannedandSent: { type: Date, default: 0000 - 00 - 00 },
    },

    visa: {
      visaApptBooked: { type: Date, default: 0000 - 00 - 00 },
      visaAppointmentDate: { type: Date, default: 0000 - 00 - 00 },
      visaScanReceived: { type: Date, default: 0000 - 00 - 00 },
      visaValidUntil: { type: Date, default: 0000 - 00 - 00 },
    },

    relocation: {
      arrivalDate: { type: Date, default: 0000 - 00 - 00 },
      coachMatched: { type: Date, default: 0000 - 00 - 00 },
      coach: { type: String, default: "" },
      beginsOn: { type: Date, default: 0000 - 00 - 00 },
      numberOfWeeks: { type: Number },
      endDate: { type: Date, default: 0000 - 00 - 00 },
    },

    workPermit: {
      formsRequested: { type: Date, default: 0000 - 00 - 00 },
      formsRecieved: { type: Date, default: 0000 - 00 - 00 },
      submitted: { type: Date, default: 0000 - 00 - 00 },
      apptDateGiven: { type: Date, default: 0000 - 00 - 00 },
      appointmentDate: { type: Date, default: 0000 - 00 - 00 },
      issued: { type: Date, default: 0000 - 00 - 00 },
    },
  },
});

module.exports = model("Journey", journeySchema);
