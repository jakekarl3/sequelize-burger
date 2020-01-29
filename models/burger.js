let orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(colVals, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [colVals], function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;