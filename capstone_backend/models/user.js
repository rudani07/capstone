const { mongoose } = require("mongoose");

const { ObjectId } = mongoose.schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
  },
  { timestamp: true }
);
module.exports = mongoose.model("user", userSchema);
