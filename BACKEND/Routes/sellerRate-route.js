const router = require("express").Router();
const { request, response } = require("express");
let SellerRate = require("../Models/SellerRate");


//add seller rate
router.route("/addSellerRate").post((req, res) => {
    const customerName = req.body.customerName;
    const sellerName = req.body.sellerName;
    const rate = req.body.rate;
    const comment = req.body.comment;
    const date = req.body.date;

    const newSellerRate = new SellerRate({
        customerName,
        sellerName,
        rate,
        comment,
        date,
    });

    newSellerRate
        .save()
        .then(() => {
        res.json("Seller Rate Added");
        })
        .catch((err) => {
        console.log(err);
        });
});


//get all seller rates
router.route("/sellerRates").get((req, res) => {
    SellerRate.find()
        .then((sellerRates) => {
        res.json(sellerRates);
        })
        .catch((err) => {
        console.log(err);
        });
});


//get seller rate by id
router.route("/get/:id").get(async (req, res) => {
        
            let sellerRateId = req.params.id;
        
            const sellerRate = await SellerRate.findById(sellerRateId).then((sellerRate) => {
                res.status(200).send({status: "Seller Rate Fetched", sellerRate});
            }).catch((err) => {
                console.log(err.message);
                res.status(500).send({status: "Error with get seller rate", error: err.message});
            });
});


//update seller rate
router.route("/update/:id").put(async (req, res) => {
    let sellerRateId = req.params.id;
    const {customerName, sellerName, rate, comment, date} = req.body;
    const updateSellerRate = {
        customerName,
        sellerName,
        rate,
        comment,
        date,
    };
    const update  = await SellerRate.findByIdAndUpdate(sellerRateId, updateSellerRate).then(() => {
        res.status(200).send({status: "Seller Rate Updated"});
    }
    ).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with update seller rate", error: err.message});
    });
});


//delete seller rate
router.route("/delete/:id").delete(async (req, res) => {

    let sellerRateId = req.params.id;

    await SellerRate.findByIdAndDelete(sellerRateId).then(() => {
        res.status(200).send({status: "Seller Rate Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete seller rate", error: err.message});
    });

});

module.exports = router;