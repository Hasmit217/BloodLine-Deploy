const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();


router.post("/findRegisteredBB", async (req, res) => {
    try {
        console.log(req.body.userid);
        const bloodBanks = await BloodBank.find({ Email: req.body.userid });
        console.log(bloodBanks);
        res.json(bloodBanks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
