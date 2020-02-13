const express = require('express');
const router = new express.Router();
const User = require('../models/user');

//===========USER API =================///

///CREATE-GET///

router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///READ-POST///
  
  router.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/users/:id", async (req, res) => {
    const _id = req.params.id;
  
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (error) {
      res.status(500).send();
    }
  });
  
  ///UPDATE-PATCH///
  
  router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send();
    }
  
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///DELETE-DELETE
  
  router.delete('/users/:id', async (req,res) =>{
      try {
          const user = await User.findByIdAndDelete(req.params.id);
          if(!user){
              return res.status(404).send()
          }
          res.send(user)
      } catch (error) {
          res.status(500).send();
      }
  })
  
  ///===========USER API =================///
  
  module.exports = router;

