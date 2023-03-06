const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const companySchema = new Schema(
  {
    companyName: { type: String, required: true },
    /* logoImageUrl: { type: String }, */
    address: { type: String },
    phoneNumber: { type: String },
    website: { type: String },
    mainContactName: { type: String },
    mainContactEmail: { type: String },
    newHires: [{ type: Schema.Types.ObjectId, ref: "NewHire" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Company", companySchema);
