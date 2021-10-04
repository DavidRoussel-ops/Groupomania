const {getCom, getComById, insertCom, updateComById, deleteComByID} = require("../models/com");

exports.showCom = (req, res) => {
    getCom((err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({com : results})
        }
    });
};

exports.showComById = (req, res) => {
    getComById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({comId : results})
        }
    });
};

exports.createCom = (req, res) => {
    const data = req.body;
    insertCom(data, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({comCreate : results})
        }
    });
};

exports.updateCom = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateComById(data, id,(err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({comUpdate : results})
        }
    });
};

exports.deleteCom = (req, res) => {
    const id = req.params.id;
    deleteComByID(id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({comdelete : results})
        }
    });
};