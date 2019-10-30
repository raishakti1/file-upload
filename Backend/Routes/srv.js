const express=require('express');
var{mongoconnect}=require('../Connection/connect');
const router = express.Router();
var multer =require('multer');
const path =require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Backend/files')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({storage: storage});

router.post('/upload',upload.single('image'),(req,res)=>{
  if(req.file)
  {
    res.json({msg:"sucesss"});
  }
})

router.get('/download/:id',(req,res)=>{
  var filePath = path.join(__dirname,"../files/shakti.jpg");
  if(req.params['id']==1)
   res.download(filePath,"photo.jpg");

  else
  res.status(400).send("error");
})

router.get('/show',(req,res)=>{
  var filePath = path.join(__dirname,"../files/shakti.jpg");
  res.sendFile(filePath);
})

module.exports = router;
