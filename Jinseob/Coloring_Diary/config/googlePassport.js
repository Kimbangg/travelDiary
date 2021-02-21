const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "43658828125-eoafte2ndro3tcle668gaj8tjeaovrnn.apps.googleusercontent.com",
      clientSecret: "gqAxd9OxK8DXNFSeiM7Q3g5F",
      callbackURL: "/auth/google/callback",
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
