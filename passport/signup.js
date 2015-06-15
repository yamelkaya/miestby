var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){
    passport.use('signup', new LocalStrategy({
                passReqToCallback : true,
                usernameField: 'email',
                passwordField: 'password'
            },
            function(req, email, password, done) {

                findOrCreateUser = function(){
                    User.findOne({ 'email' :  email }, function(err, user) {
                        if (err){
                            console.log('Ошибка при создании пользователя: '+err);
                            return done(err);
                        }

                        if (user) {
                            return done(null, false, req.flash('message','Пользователь с таким имэйлом уже существует.'));
                        } else {
                            var newUser = new User();

                            newUser.username = email;
                            newUser.password = createHash(password);
                            newUser.email = req.param('email');
                            newUser.firstName = req.param('firstName');
                            newUser.lastName = req.param('lastName');
                            newUser.phone = req.param('phone');
                            newUser.info = req.param('info');
                            newUser.isVisibleForAll = req.param('isVisibleForAll');
                            newUser.isContactsVisible = req.param('isContactsVisible');

                            newUser.save(function(err) {
                                if (err){
                                    console.log('Error in Saving user: '+err);
                                    throw err;
                                }
                                console.log('User Registration succesful');
                                return done(null, newUser);
                            });
                        }
                    });
                };

                process.nextTick(findOrCreateUser);
            })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}