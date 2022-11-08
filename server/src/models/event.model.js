const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
    name: { type: String, required: false },
    date: { type: String, required: false },
    type: { type: String, required: false},
    fromtime: { type: String, required: false },
    totime: { type: String, required: false },
    guests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false,
      },
    ],
    description: { type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Event = mongoose.model("event", eventSchema);
module.exports = Event;
