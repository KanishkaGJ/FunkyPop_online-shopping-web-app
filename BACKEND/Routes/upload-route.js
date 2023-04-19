const {Router} = require('express');
const uploadMiddleware = require('../middlewares/MulterMidlleware');
const upload = require('../Models/upload');

const router = Router();

//fetching data from database and getting all photos
router.get("/api/get",async (req, res) => {
    const allPhotos = await upload.find().sort({createdAt: "descending"});
    res.send(allPhotos)
})



router.post("/api/save", uploadMiddleware.single("photo"), (req,res) => { // photo is the field name
    const photo = req.file.filename;

    console.log(photo);

    upload.create({ photo }).then((data) => {
        console.log("Photo uploaded Successfully....");
        console.log(data);
        res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;