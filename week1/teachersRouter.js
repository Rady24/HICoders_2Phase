import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//some dummy data for testing purpose only
// let teachers = [{ id: uuidv4(), name: "Teacher" }];

router.get("/teachers", (req, res) => res.send("Teachers Page"));

router.get("/teachers/:id", (req, res) => {
  const { id } = req.params;
  const teacher = teachers.find((t) => t.id === id);

  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).send("Teacher not found");
  }
});

router.post("/teachers", (req, res) => {
  const { name } = req.body;
  const newTeacher = {
    id: uuidv4(),
    name: name || "Unknown Teacher",
  };
  teachers.push(newTeacher);
  res.json(newTeacher);
});

router.put("/teachers/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const teacherIndex = teachers.findIndex((t) => t.id === id);

  if (teacherIndex > -1) {
    teachers[teacherIndex].name = name;
    res.json(teachers[teacherIndex]);
  } else {
    res.status(404).send("Teacher not found");
  }
});

router.delete("/teachers/:id", (req, res) => {
  const { id } = req.params;
  const index = teachers.findIndex((t) => t.id === id);

  if (index > -1) {
    teachers.splice(index, 1);
    res.send("Teacher deleted");
  } else {
    res.status(404).send("Teacher not found");
  }
});

export default router;
