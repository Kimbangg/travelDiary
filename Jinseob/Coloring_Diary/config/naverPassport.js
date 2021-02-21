const passport = require("passport");
const NaverStrategy = require("passport-naver").Strategy;
const naverUsers = require('../models/naverUsers');


passport.use(
  new NaverStrategy(
    {
      clientID: "fC0eEkcuFtVvRYfQ6OMp",
      clientSecret: "6sndg6163y",
      callbackURL: "/auth/naver/callback",
      passReqToCallback: true,
    },
     (req, accessToken, refreshToken, profile, done) => {  
     
      console.log("profile: ", profile);
      naverUsers.findOne({ id: profile.id }, (err, user) => {
        if (err) res.send(err);
        if (user) {
          done(null, user);
        } else {
          let newUser = new naverUsers({ id: profile.id, displayName: profile.displayName});
          newUser.save((errs, users) => {
            if (errs) res.send(errs);
            console.log("success db save");
            done(null, users);
          });
        }
      });

     }
  )
);

module.exports = passport;
