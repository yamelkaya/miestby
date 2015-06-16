var LocalStrategy   = require('passport-local').Strategy;
var User = require('../../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Такого пользователя не нашлось в системе.' });
                }
                if (!isValidPassword(user, password)) {
                    return done(null, false, { message: 'Неверный пароль.' });
                }

                return done(null, user);
            });
        }
    ));

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
}