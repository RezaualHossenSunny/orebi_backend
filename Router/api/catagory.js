const express=require("express");
const {creteaCatagoryController,catagoryStatuscontroler, creteaSubCatagoryController, SubcatagoryStatuscontroler, getAllcatagory, getAllsubcatagory} = require("../../controller/createCatagorycontroller");

const router =express.Router();

router.post('/createcatagory', creteaCatagoryController);
router.post('/statuscatagory', catagoryStatuscontroler)
router.post('/createsubcatagory', creteaSubCatagoryController)
router.post('/subcatagorystatus', SubcatagoryStatuscontroler)
router.get('/getallcatagory', getAllcatagory)
router.get('/getAllsubcatagory', getAllsubcatagory)

module.exports=router;