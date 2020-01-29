let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burger_data: data });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create([req.body.burger_name, false], function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.update(
    {devoured: req.body.devoured},
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});

module.exports = router;