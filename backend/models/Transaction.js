const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sourceUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    amount: Number,

    commissionPercentage: Number,

    level: Number,

    type: {
      type: String,
      enum: ["DEPOSIT", "COMMISSION"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Transaction",
  transactionSchema
);