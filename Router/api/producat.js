const express=require("express");
const {prodacatcontroller,createproducatContorler, createvarientController, getallprodcatcontroller, delateprodacatController} = require("../../controller/prodactcontroler");
const router =express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
    }
  })
  
  const upload = multer({ storage: storage })


router.post('/crateprodact', prodacatcontroller ,createproducatContorler);
router.post('/crateVarient',upload.single('avtar'),createvarientController );
router.get('/getproducat',getallprodcatcontroller);
router.post('/delateProdact',delateprodacatController)

module.exports=router;