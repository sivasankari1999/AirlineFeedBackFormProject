const mongoose = require("mongoose");

const formSchema = {
  selectedAirline: {
    type: String,
  },
  FlyerNumber: {
    type: String,
  },
  first_name: {
    type: String,
  },
  middle_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  num: {
    type: String,
  },
  country: {
    type: String,
  },
  region: {
    type: String,
  },
  email: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  confirmationnum: {
    type: String,
  },
  ticketnum: {
    type: String,
  },
  comment: {
    type: String,
  },
  filename: {
    type: String,
  },
  group1: {
    type: String,
  },


}

const Formdata = mongoose.model("Formdata", formSchema)
module.exports = Formdata;