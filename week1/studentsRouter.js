import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//some dummy data for testing purpose only
// let students = [{ id: uuidv4(), name: "Student" }];

router.get("/students", (req, res) => res.send("Students Page"));

router.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const student = students.find((s) => s.id === id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

router.post("/students", (req, res) => {
  const { name } = req.body;
  const newStudent = {
    id: uuidv4(),
    name: name || "Unknown Student",
  };
  students.push(newStudent);
  res.json(newStudent);
});

router.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const studentIndex = students.findIndex((s) => s.id === id);

  if (studentIndex > -1) {
    students[studentIndex].name = name;
    res.json(students[studentIndex]);
  } else {
    res.status(404).send("Student not found");
  }
});

router.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((s) => s.id === id);

  if (index > -1) {
    students.splice(index, 1);
    res.send("Student deleted");
  } else {
    res.status(404).send("Student not found");
  }
});

export default router;
