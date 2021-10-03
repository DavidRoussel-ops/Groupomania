const connection = require('../Security/mysql');
const Com = require('../models/com');

exports.createCom = (req, res, next) => {
    const comInsert = req.query;
    const insertCom = "INSERT INTO comment SET ?";
    const comIn = new Com({
        ...comInsert
    });
    connection.query(insertCom,comIn,(err,result,fields) => {
        if (err) throw err;
        res.json({saved : result.affectedRows})
    });
};

exports.updateCom = (req, res, next) => {
    const comUpdate = req.query;
    const updateCom = "UPDATE comment SET com=comUpdate WHERE id=comUpdate";
    const comUp = Com({
        ...comUpdate
    })
    connection.query(updateCom,comUp,(err,result,fields) => {
        if (err) throw err;
        res.json({update : result.affectedRows})
    });
};

exports.deleteCom = (req, res, next) => {
    const comDelete = req.query;
    const deleteCom = "DELETE FROM comment  WHERE id=comDelete";
    const comDel = Com({
        ...comDelete
    })
    connection.query(deleteCom,comDel,(err,result,fields) => {
        if (err) throw err;
        res.json({delete : result.affectedRows})
    });
};