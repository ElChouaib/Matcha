const multer = require('multer')
const express = require('express');
const tools = require('../tools/index');
var Jimp = require('jimp');
const images = require('../models/images');
const app = express()
 const checkFileType = (file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') cb(null, true)
  else cb(null, false)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images')
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname)
    },
  })
  const upload = multer({
    storage,
    
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  });

app.post('/upload',upload.single('files'),(req,res) => {
  
 user_id = req.body.user_id;
  file = req.file;

  if(tools.isEmpty(file)){
    console.log('No file uploaded')
    return res.send('No file uploaded');
  }
  if(file.size === 0){
    return res.send('is not a file');
  }

 images.getImages(user_id)
 .then((response) => {
  const length = response.length;
    if(length > 4)
      return res.send('maximum images are 5 images');
    else{
      Jimp.read('./public/images/'+file.filename)
  .then(img => {
    images.insertImage({user_id : user_id, path : file.filename})
      .then((resp) => {
        if(resp)
          res.send(resp);
      }).catch((err)=>{
        res.send(err);
      })
  })
  .catch(err => {
    console.log('this is not image')
    res.send('this is not image');
  });   
    }
 })
  
  
});
module.exports = app;
