const passport = require("passport");
const NaverStrategy = require("passport-naver").Strategy;


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
      var user = profile;
      done(null, user);
    }
  )
);

module.exports = passport;
