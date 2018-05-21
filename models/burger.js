const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condtion, cb) => {
        orm.update("burgers", objColVals, condtion, (res) => {
            cb(res);
        });
    },
    destroy: (condition, cd) => {
        orm.destroy("burgers", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for controller (burgers_controller.js)
module.exports.burger;