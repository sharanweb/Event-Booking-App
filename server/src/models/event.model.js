const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    type: { type: String, required: true, default: "onetime" },
    fromtime: { type: Number, required: true },
    totime: { type: Number, required: true },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
    description: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Event = mongoose.model("event", eventSchema);
module.exports = Event;
