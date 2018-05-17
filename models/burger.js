const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condtion, cb) {
        orm.updateOne("burgers", objColVals, condtion, function(res) {
            cb(res);
        });
    }
};

module.exports.burgers;