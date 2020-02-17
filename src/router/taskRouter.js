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
  
  ///READ ALL TASKS OF AUTH USER-GET///
  
  //GET /taks?completed=true
  
  router.get("/tasks", auth, async (req, res) => {
    const match ={};
    if(req.query.completed){
      match.completed = req.query.completed === 'true';
    }
    try {
      //const tasks = await Task.find({owner: req.user._id});
      await req.user.populate({
        path: 'tasks',
        match
      }).execPopulate();
      res.send(req.user.tasks);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///READ SPECIFIC TASK-GET///
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
  
  ///UPDATE ONLY AUTH TASK-PATCH///
  
  router.patch("/tasks/:id", auth,  async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send();
    }
  
    try {
      const task = await Task.findOne({_id:req.params.id, owner:req.user._id});
      
      if (!task) {
        return res.status(404).send();
      }
      
      updates.forEach((update) => task[update] = req.body[update]);
      
      await task.save();  
      
      res.send(task);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  ///DELETE ONLY AUTH TASK-DELETE///
  
  router.delete('/tasks/:id',auth, async (req,res) => {
      try {
          const task = await Task.findByIdAndDelete({_id:req.params.id,owner: req.user._id});
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