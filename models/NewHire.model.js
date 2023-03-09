const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newHireSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    journey: { type: Schema.Types.ObjectId, ref: "Journey" },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    caseOwner: { type: String, required: true },
    nationality: { type: String },
    comingFrom: { type: String },
    bookedOn: { type: Date },
    startDate: { type: Date },
    spouse: { type: String},
    children: { type: String},
    relocationPackage: { type: String, enum: ["0", "5", "12", "20"] },
    immigrationPackage: {
      type: String,
      enum: [
        "Arbeitgeberwechsel",
        "Family Visa",
        "Family Visa and Work Permit",
        "Family Work Permit",
        "Renewal",
        "Visa Only",
        "Visa and Work Permit",
        "Work Permit Only",
      ],
    },
    anerkennung: { type: String},
    vorabpruefung: { type: String},
    comments: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("NewHire", newHireSchema);
