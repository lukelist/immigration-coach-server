const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newHireSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    journey: { type: Schema.Types.ObjectId, ref: "Journey" },
    /* stage: {type: String, enum: ["pre-visa", "visa", "relocation", "work-permit", "closed"]}, */
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    caseOwner: { type: String, required: true },
    nationality: { type: String },
    comingFrom: { type: String },
    bookedOn: { type: Date },
    startDate: { type: Date },
    spouse: { type: Boolean},
    children: { type: Boolean},
    relocationPackage: { type: Number, enum: [0, 5, 12, 20] },
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
    anerkennung: { type: Boolean},
    vorabpruefung: { type: Boolean},
    comments: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = model("NewHire", newHireSchema);
