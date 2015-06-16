var LocalStrategy   = require('passport-local').Strategy;
var User = require('../../models/user');
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
                            var newUser = new User(req.body);

                            newUser.save(function(err) {
                                if (err){
                                    console.log('Ошибка при создании пользователя: '+err);
                                    throw err;
                                }
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