const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');
const multer = require('multer');

//===========USER API =================///

///CREATE-POST///

router.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({user, token});
    } catch (error) {
      res.status(400).send(error);
    }
  });

  ///LOGIN-POST///
  
  router.post('/users/login', async(req, res) => {
    try {
      const user = await User.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
      res.send({user : user, token});
    } catch (error) {
      res.status(400).send(); 
    }
  })
  
  ///LOGOUT-POST///
  
  router.post('/users/logout', auth, async (req,res) =>{
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
      })
      await req.user.save();
      
      res.send();
    } catch (error) {
      res.status(500).send();
    }
  })
  
  router.post('/users/logoutall',auth, async (req,res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res.send();
    } catch (error) {
      res.status(500).send();
    }
  })
  
  ///READ-GET///
  
  router.get("/users/me",auth, async (req, res) => {
    res.send(req.user);
  });
  
  ///UPDATE-PATCH///
  
  router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send();
    }
  
    try {
      const user = await User.findByIdAndUpdate(req.user._id);
      
      updates.forEach((update) => user[update] = req.body[update]);
      
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///DELETE-DELETE
  
  router.delete('/users/me', auth, async (req,res) =>{
      try {
          await req.user.remove()
          res.send(req.user);
      } catch (error) {
          res.status(500).send();
      }
  })
  
  ///AVATAR-POST
  
  const upload = multer({
    // dest: 'avatar',
    limits: {
      fileSize: 1000000
    },
    fileFilter(req, file, callback){
      if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return callback(new Error('Please upload an image file includes jpg/jpeg/png ext'));
      }
      callback(undefined,true);
    }
  })
  router.post('/users/me/avatar',auth, upload.single('avatar'), async (req,res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
  }, (error, req, res, next) => {
    res.status(400).send({error: error.message});
  })
  
  ///AVATAR-DELETE
  
  router.delete('/users/me/avatar', auth, async (req,res) =>{
    req.user.avatar = undefined;
    await req.user.save();
    res.send();
  },(error, req, res, next) => {
    res.status(400).send({error: error.message});
  })
  
  ///AVATAR-GET
  
  router.get('/users/:id/avatar', async(req, res) => {
    try {
      const user = await User.findById(req.params.id);
      
      if(!user || !user.avatar){
        throw new Error()        
      }
      res.set('Content-Type','image/jpg');
      res.send(user.avatar)
    } catch (error) {
      res.status(404).send()
    }
  })
  
  ///===========USER API =================///
  
  module.exports = router;

