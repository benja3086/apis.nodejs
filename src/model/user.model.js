const mongoose = require("mongoose");

const Menu = mongoose.Schema({
  comida: {
    type: String,
    required: true,
  },
  bebida: {
    type: String,
    required: true,
  },
  postre: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Menu", Menu);
