// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("cats", function(res) {
            cb(res);
        });
    },
    //The variables cols ald vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//Export the database function for the controller (burgers_controller.js)