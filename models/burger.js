const orm = require("../config/orm.js");

const burger = {
    all: cb => {
        orm.selectall("burgers", (res) => {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condtion, cb) => {
        orm.updateOne("burgers", objColVals, condtion, (res) => {
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