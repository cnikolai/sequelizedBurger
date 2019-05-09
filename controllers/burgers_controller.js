// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log("data:", data);
      //console.log("hbsObject: ",hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create({burger_name: req.body.name}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    db.Burger.update(
      {devoured: true},
      {
        where: {
          id: id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
