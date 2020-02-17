const express = require('express');
const router = new express.Router();
const Task = require('../models/task');
const auth = require('../middleware/auth');


//===========TASK API =================///

///CREATE-POST///

router.post("/tasks",auth, async (req, res) => {
    const task = new Task({
      ...req.body,
      owner: req.user._id
    })
    console.log(req.user);
  
    try {
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///READ-GET///
  
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///READ-GET///
  ///ONLY AUTH USER OF HIS OWN///
  
  router.get("/tasks/:id",auth, async (req, res) => {
    const _id = req.params.id;
  
    try {
      // const task = await Task.findById(_id);
      const task = await Task.findOne({_id,owner: req.user._id});
      
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  ///UPDATE-PATCH///
  
  router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send();
    }
  
    try {
      const task = await Task.findByIdAndUpdate(req.params.id);
      
      updates.forEach((update) => task[update] = req.body[update]);
      
      await task.save();  
      
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///DELETE-DELETE///
  
  router.delete('/tasks/:id', async (req,res) => {
      try {
          const task = await Task.findByIdAndDelete(req.params.id);
          if(!task){
              return res.status(404).send()
          }
          res.send(task);
      } catch (error) {
          res.status(500).send();
      }
  })
  
  ///===========TASK API =================///
  
  module.exports = router;