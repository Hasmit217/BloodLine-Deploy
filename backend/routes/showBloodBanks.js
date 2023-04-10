const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

console.log("opened");
router.get("/showBloodBanks",function(req,res){
    // console.log(req.body);
    const districtval = req.body.chosenDistrict;
    console.log(districtval);
    res.send(districtval);
    // console.log(req.body);

    // districtval = districtval.toUpperCase();

    // const bloodBanks = BloodBank.find({district: districtval});
    // console.log(bloodBanks);
    // res.send(bloodBanks);

})

module.exports = router;