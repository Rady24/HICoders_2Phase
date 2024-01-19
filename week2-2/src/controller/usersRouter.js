import express from "express";
import shortUUID from "short-uuid";
import users from "../data/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(users);
});

router.post("/", (req, res) => {
  const { name, surname, country, salary } = req.body;

  const newUser = {
    id: shortUUID.generate(),
    name,
    surname,
    country,
    salary,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

router.get("/highest-salary", (req, res) => {
  const highestSalaryUser = users.reduce((prev, current) =>
    prev.salary > current.salary ? prev : current
  );
  res.status(200).json(highestSalaryUser);
});

router.get("/lowest-salary", (req, res) => {
  const lowestSalaryUser = users.reduce((prev, current) =>
    prev.salary < current.salary ? prev : current
  );
  res.status(200).json(lowestSalaryUser);
});

router.get("/country=:country", (req, res) => {
  const countryUsers = users.filter(
    (user) => user.country === req.params.country
  );
  res.status(200).json(countryUsers);
});

export default router;
