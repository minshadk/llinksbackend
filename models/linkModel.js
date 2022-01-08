const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A link Must have a name"]
  },
  link: {
    type: String,
    required: [true, "A link Must have a Link"]
  },
  tag: {
    type: String
    // required:[true,"A link Must have a tag"]
  }
});

// Creating instance of model
const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
