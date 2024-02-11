const CatagroyList = require("../models/CatagroyScema");
const Subctagorylist = require("../models/Subctagorylist");

async function creteaCatagoryController(req, res) {
  const { name, discripstion } = req.body;

  const duplicate = await CatagroyList.find({ name });
  if (duplicate.length > 0) {
    res.json({ error: "this catgroy all redy exist , try agin" });
  }

  const catgory = new CatagroyList({
    name,
    discripstion,
  });
  res.json({ success: "catagory create sucess fully done" });
  catgory.save();
}

// status
async function catagoryStatuscontroler(req, res) {
  const { name, status } = req.body;
  res.json(status);

  if (status == "reject" || status == "wating") {
    const updatecatagory = await CatagroyList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    );
  } else if (status == "aprove") {
    const updatecatagory = await CatagroyList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    );
  }
}

// sub catgory
async function creteaSubCatagoryController(req, res) {
  const { name, discripstion ,catagory} = req.body;

  const duplicate = await Subctagorylist.find({ name });
  if (duplicate.length > 0) {
    res.json({ error: "this catgroy all redy exist , try agin" });
  }

  const Subcatgory = new Subctagorylist({
    name,
    discripstion,
    catagory
  });
  // console.log(Subcatgory._id);
  await CatagroyList.findOneAndUpdate(
    { _id:Subcatgory.catagory },
    {$push: { Subcatagory:Subcatgory._id }},
    { new: true }
  )
  res.json({ success: "Sub catagory create sucess fully done" });
  Subcatgory.save();
}

// sub ctagory staus

async function SubcatagoryStatuscontroler(req, res) {
    const { name, status } = req.body;
    res.json(status);
  
    if (status == "reject" || status == "wating") {
      const updatecatagory = await Subctagorylist.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status: status } },
        { new: true }
      );
    } else if (status == "aprove") {
      const updatecatagory = await Subctagorylist.findOneAndUpdate(
        { name },
        { $set: { isActive: true, status: status } },
        { new: true }
      );
    }
  }

// get all catgory
  async function getAllcatagory(req,res){
    const data= await CatagroyList.find({}).populate("Subcatagory")
    res.json(data)
  }

  async function getAllsubcatagory(req,res){
    const data= await Subctagorylist.find({})
    res.json(data)
  }


module.exports = {
  creteaCatagoryController,
  catagoryStatuscontroler,
  creteaSubCatagoryController,
  SubcatagoryStatuscontroler,
  getAllcatagory,
  getAllsubcatagory
};
