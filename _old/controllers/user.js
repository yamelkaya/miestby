var User = require('../models/user');
var imageService = require('../services/imageService');
var fs = require('fs');
var _ = require('lodash');
var bCrypt = require('bcrypt-nodejs');

module.exports = new UserController()

function UserController () {
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

    var checkIfUserWithEmailExists = function(email, callback){
        User.findOne({ 'email' :  email }, function(err, user) {
            if (err){
                throw new Error(err);
            }

            if (user) {
                if (callback) {
                    return callback(user);
                }
            } else {
                if (callback) {
                    return callback(null);
                }
            }
        });
    }

    var createNewUser = function (user, imageUrl, callback){
        var newUser = new User(user);
        if (imageUrl)
        {
            newUser.photoUrl = imageUrl;
        }
        newUser.password = createHash(newUser.password);

        newUser.save(function(err) {
            if (err){
                throw err;
            }
            return callback(newUser);
        });
    }

    var saveUser = function(user, imageUrl, callback){
        var updated = _.merge({}, user);

        if (imageUrl)
        {
            updated.photoUrl = imageUrl;
        }

        User.update({_id : user._id}, {$set: updated}, {upsert: true},function(err) {
            if (err){
                throw err;
            }

            callback();
        });
    }

    var redirectToIndex = function(res){
        res.redirect('/contacts');
    }

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }


    this.getLogin = function(req,res){
        res.render('login',{
            message: req.flash('error'),
            pageInfo: res.locals.pageInfo
        });
    }
    this.login = function (passport, req, res, next) {
        passport.authenticate('local',{
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash : 'Нет пользователя с таким адресом и паролем.'
        })(req, res, next);
    };
    this.logout = function(req, res) {
        req.logout();
        res.redirect('/');
    };


    this.getAll = function(req, res){
        User.find(function(err, result){
            if (err){
                throw new Error(err);        }

            res.render('user/index', {
                message: req.flash('message'),
                pageInfo: res.locals.pageInfo,
                user: req.user,
                contacts: result
            });
        })
    }

    this.getCreate = function(req, res) {
        res.render('user/form', {
            message: req.flash('message'),
            pageInfo: res.locals.pageInfo,
            user: req.user,
            postAction: 'create'
        });
    }

    this.getEdit = function(req, res){
        User.findOne({_id: req.param('id') },function(err, result){
            if (err){
                throw new Error(err);
            }

            res.render('user/form', {
                message: req.flash('message'),
                pageInfo: res.locals.pageInfo,
                user: req.user,
                contact: result,
                postAction: 'edit'
            });
        })
    }

    this.create = function( req, res){
        checkIfUserWithEmailExists(req.body.email, function(exists){
            if (exists){
                req.flash('message','Пользователь с таким имэйлом уже существует.');
                res.redirect('/contacts/edit/'+req.body._id);
                return;
            }

            if (req.files && req.files.image)
            {
                readFileAndUpload(req.files.image.path,  function(imageUrl){
                    createNewUser(req.body, imageUrl, function(){redirectToIndex(res);});
                });
            }
            else {
                createNewUser(req.body, null, function(){redirectToIndex(res);});
            }
        });
    }

    this.edit = function(req, res){
        checkIfUserWithEmailExists(req.body.email, function(existingUser){
            if (existingUser && existingUser._id != req.body._id){
                req.flash('message','Пользователь с таким имэйлом уже существует.');
                res.redirect('/contacts/edit/'+req.body._id);
                return;
            }

            if (req.files && req.files.image)
            {
                readFileAndUpload(req.files.image.path,  function(imageUrl){
                    saveUser(req.body, imageUrl, function(){redirectToIndex(res);});
                });
            }
            else {
                saveUser(req.body, null, function(){redirectToIndex(res);});
            }
        });
    }

    this.delete = function(req, res, next){
        User.remove({_id : req.param('id')},function(err) {
            if (err){
                throw err;
            }

            res.redirect('/contacts');
        });
    }
};

