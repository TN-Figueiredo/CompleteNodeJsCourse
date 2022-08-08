const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks", async (_, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findById(id);
    updates.forEach((update) => (task[update] = updatedTask[update]));
    await task.save();
    // const task = await Task.findByIdAndUpdate(id, updatedTask, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      res.status(404).send();
    }
    return res.status(200).send(task);
  } catch (e) {
    return res.status(404).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).send();
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
