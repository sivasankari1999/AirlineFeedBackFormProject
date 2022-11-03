const express = require("express")
var router = express.Router();
const Formdata = require("../models/FormModel");



router.post("/page1", async (req, res) => {
    const { body } = req;
    console.log("body:", body);
    const selectedAirline = body.selectedAirline;
    const FlyerNumber = body.FlyerNumber;
    const first_name = body.first_name;
    const middle_name = body.middle_name;
    const last_name = body.last_name;
    const num = body.num;
    const country = body.country;
    const region = body.region;
    const email = body.email;
    const address1 = body.address1;
    const address2 = body.address2;
    const city = body.city;
    const postalCode = body.postalCode;
    const confirmationnum = body.confirmationnum;
    const ticketnum = body.ticketnum;
    const comment = body.comment;
    const filename = body.filename;
    const group1 = body.group1;
    const formList = new Formdata({
        selectedAirline,
        FlyerNumber,
        first_name,
        middle_name,
        last_name,
        num,
        country,
        region,
        email,
        address1,
        address2,
        city,
        postalCode,
        confirmationnum,
        ticketnum,
        comment,
        filename,
        group1
    });
    formList.save();
})

module.exports = router;