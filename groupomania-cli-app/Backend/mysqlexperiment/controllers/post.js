const {getPost, getPostById, insertPost, updatePostById, deletePostById} = require("../models/post");

exports.showPost = (req, res) => {
    getPost((err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({Post : results})
        }
    });
};

exports.showPostById = (req, res) => {
    getPostById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({PostId : results})
        }
    });
};

exports.createPost = (req, res) => {
    const data = req.body;
    insertPost(data, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({postCreate : results})
        }
    });
};

exports.updatePost = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePostById(data, id,(err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({postUpdate : results})
        }
    });
};

exports.deletePost = (req, res) => {
    const id = req.params.id;
    deletePostById(id, (err, results) => {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(results);
            console.log({postdelete : results})
        }
    });
};