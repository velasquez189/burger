const orm = require("../config/orm");

const burger = {
    all: cb => {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            cb(res);
        });
    },
    delete: (condition, cd) => {
        orm.deleteOne("burgers", condition, res => {
            cb(res);
        });
    }
};

// Export the database functions for controller (burgers_controller.js)
module.exports = burger;