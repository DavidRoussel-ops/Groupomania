const Post = require('../models/post');

exports.createPost = (req, res, next) => {
    const postInsert = req.query;
    const insertPost = "INSERT INTO post SET ?";
    const postIn = new Post({
        ...postInsert
    });
    connection.query(insertPost,postIn,(err,result,fields) => {
        if (err) throw err;
        res.json({saved : result.affectedRows})
    });
};

exports.updatePost = (req, res, next) => {
    const postUpdate = req.query;
    const updatePost = "UPDATE post SET ?";
    const postUp = Post({
        ...postUpdate
    })
    connection.query(updatePost,postUp,(err,result,fields) => {
        if (err) throw err;
        res.json({update : result.affectedRows})
    });
};

exports.deletePost = (req, res, next) => {
    const postDelete = req.query;
    const deletePost = "DELETE FROM post SET ?";
    const postDel = Post({
        ...postDelete
    })
    connection.query(deletePost,postDel,(err,result,fields) => {
        if (err) throw err;
        res.json({delete : result.affectedRows})
    });
};