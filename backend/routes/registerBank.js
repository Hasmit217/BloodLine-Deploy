const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

router.post("/registerBank", async (req, res) => {
    // console.log(req.body.userid);

    const bbank = new BloodBank({
        BloodBankName: req.body.name,
        State: req.body.state,
        District: req.body.district,
        City: req.body.city,
        Address: req.body.address,
        Pincode: req.body.pincode,
        ContactNo: req.body.offContact,
        Mobile: req.body.contact,
        Helpline: req.body.helpLine,
        Email: req.body.userid,
        NodalOfficer: req.body.offName,
        QualificationNodalOfficer: req.body.offQuali,
        ContactNodalOfficer: req.body.offContact,
        MobileNodalOfficer: req.body.contact,
        Category: req.body.category,
        BloodComponentAvailable: req.body.bldAvail,
        ServiceTime: req.body.serTime,
        LicenseNo: req.body.licNo,
        DateLicenseObtained: req.body.licDate,
        DateofRenewal: req.body.licRenDate,
        Latitude: req.body.bankLat,
        Longitude: req.body.bankLong,
        Registered: "True",
        BloodBankImage: '',
        Email: req.body.email
    });
    try {
        const savedUser = await bbank.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.post("/updateBankDetails", async (req, res) => {
    const filter = { Email: req.body.email }; // Assuming 'email' is the unique identifier for the user

    const update = {
        BloodBankName: req.body.name,
        State: req.body.state,
        District: req.body.district,
        City: req.body.city,
        Address: req.body.address,
        Pincode: req.body.pincode,
        ContactNo: req.body.offContact,
        Mobile: req.body.contact,
        Helpline: req.body.helpLine,
        NodalOfficer: req.body.offName,
        QualificationNodalOfficer: req.body.offQuali,
        ContactNodalOfficer: req.body.offContact,
        MobileNodalOfficer: req.body.contact,
        Category: req.body.category,
        BloodComponentAvailable: req.body.bldAvail,
        ServiceTime: req.body.serTime,
        LicenseNo: req.body.licNo,
        DateLicenseObtained: req.body.licDate,
        DateofRenewal: req.body.licRenDate,
        Latitude: req.body.bankLat,
        Longitude: req.body.bankLong,
        Registered: "True",
        BloodBankImage: '',
        Email: req.body.email
    };

    try {
        // Use findOneAndUpdate to update the existing document or insert a new one if not found
        const updatedUser = await BloodBank.findOneAndUpdate(filter, update, {
            new: true, // Return the modified document rather than the original
            upsert: true, // If no document is found, create a new one
            useFindAndModify: false, // Use the new MongoDB driver's function instead of findAndModify
        });

        console.log(updatedUser);
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;