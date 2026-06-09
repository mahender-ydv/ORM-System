const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    wallet: {
      type: Number,
      default: 0,
    },

    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    level: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);