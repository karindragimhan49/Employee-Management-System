const express = require("express");

const router = express.Router();

const Employees = require("../models/emoloyee");

//test
router.get("/test", (req, res) => res.send("Employee routes is working"));

router.post("/", (req, res) => {
  Employees.create(req.body)
    .then(() => res.json({ msg: "Employee addedd succesfullly " }))
    .catch(() => res.status(400).json({ msg: "Employee adding faild" }));
});

router.get("/", (req, res) => {
  Employees.find()
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({ msg: "No employees found" }));
});

router.get("/:id", (req, res) => {
  Employees.findById(req.params.id)
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({ msg: "cannot find this employee" }));
});

router.put("/:id", (req, res) => {
  Employees.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.json({ msg: "Update succesfully" })).catch(() => res.status(400).json({ msg: "Update faild" }));
      

});



router.delete("/:id", (req, res) => {
  Employees.findByIdAndDelete(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ msg: "Employee not found" });
      }
      res.status(200).json({ msg: "Deleted successfully" });
    })
    .catch((err) =>
      res.status(400).json({ msg: "Error deleting employee", error: err })
    );
});
module.exports = router;
