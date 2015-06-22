var Mult = require('../models/mult');
var MultUtil = require('../utils/multUtil');
var imageService = require('../services/imageService');
var fs = require('fs');
var _ = require('lodash');

module.exports = new MultController()

function MultController () {
    var readFileAndUpload =  function(path, callback){
        fs.readFile(path, function(err, data) {
            imageService.uploadUserImage(new Buffer(data).toString('base64'), function (imageUrl){
                if (callback)
                {
                    callback(imageUrl);
                }
            });
        });
    }

    var setVideoMeta = function(mult){
        var meta = MultUtil.getVideoMeta(mult.link);
        mult.linkId = meta.id;
        mult.linkSource = meta.source;
    }


    var createNewMult= function (mult, imageUrl, callback){
        var newMult = new Mult(mult);

        setVideoMeta(mult);

        if (imageUrl)
        {
            newMult.photos = [imageUrl];
        }

        newMult.save(function(err) {
            if (err){
                throw err;
            }
            return callback(newMult);
        });
    }

    var saveMult = function(mult, imageUrl, callback){
        var updated = _.merge({}, mult);

        setVideoMeta(mult);

        if (imageUrl)
        {
            updated.photos = [imageUrl];
        }

        User.update({_id : mult._id}, {$set: updated}, {upsert: true},function(err) {
            if (err){
                throw err;
            }

            callback();
        });
    }

    var redirectToIndex = function(res){
        res.redirect('/mult');
    }

    this.getAll = function(req, res){
        Mult.find(function(err, result){
            if (err){
                throw new Error(err);        }

            res.render('mult/index', {
                message: req.flash('message'),
                pageInfo: res.locals.pageInfo,
                user: req.user,
                mults: result
            });
        })
    }

    this.getCreate = function(req, res) {
        res.render('mult/form', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user,
            postAction: 'create'
        });
    }

    this.getEdit = function(req, res){
        Mult.findOne({_id: req.param('id') },function(err, result){
            if (err){
                throw new Error(err);
            }

            res.render('user/form', {
                message: req.flash('message'),
                pageInfo: res.locals.pageInfo,
                user: req.user,
                mult: result,
                postAction: 'edit'
            });
        })
    }

    this.create = function( req, res) {
        if (req.files && req.files.image) {
            readFileAndUpload(req.files.image.path, function (imageUrl) {
                createNewMult(req.body, imageUrl, function () {
                    redirectToIndex(res);
                });
            });
        }

        else {
            createNewMult(req.body, null, function () {
                redirectToIndex(res);
            });
        }
    }

    this.edit = function(req, res) {
        if (req.files && req.files.image) {
            readFileAndUpload(req.files.image.path, function (imageUrl) {
                saveMult(req.body, imageUrl, function () {
                    redirectToIndex(res);
                });
            });
        }
        else {
            saveMult(req.body, null, function () {
                redirectToIndex(res);
            });
        }
    }

    this.delete = function(req, res, next){
        Mult.remove({_id : req.param('id')},function(err) {
            if (err){
                throw err;
            }

            redirectToIndex();
        });
    }
};

