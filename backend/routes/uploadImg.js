const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

router.post("/uploadImg", async (req, res) => {
    const email = req.body.email;
    console.log(email);

    try {
        const updatedUser = await BloodBank.findOneAndUpdate(
            { Email: email },
            { $set: { BloodBankImage: req.body.profileImage } },
            { new: true }
        );

        if (!updatedUser) {
            alert("User Not Registered Yet !!");
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ imageUrl: updatedUser.BloodBankImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
