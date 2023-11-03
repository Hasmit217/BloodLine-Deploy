const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

console.log("Server Searching for bloodbanks");
router.post("/showBanksAsDistrict", function (req, res) {
  

    var user = req.body;

    if(user. district !== "")
    {
        BloodBank.find({ District: user.district.toUpperCase()})
        // BloodBank.find({ District: user.district.toUpperCase(),Registered:'true' })
        .then((bloodBanks) => {
            console.log(bloodBanks); // array of blood banks with matching district value
            res.json(bloodBanks);
        })
        .catch((err)=> {
            console.error(err);
            res.status(500).send('Internal server error');
        });
    }

})

module.exports = router;