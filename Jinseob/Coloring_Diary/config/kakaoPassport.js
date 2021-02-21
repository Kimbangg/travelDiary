const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.use(
  new KakaoStrategy(
    {
      clientID: "d705aa9fac6e6ce0e4a4f700bab7426c",
      // clientSecret: "AI5ks57hhI",
      callbackURL: "/auth/kakao/callback",
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      console.table("profile: ", profile);
      var user = profile;
      done(null, user);
    }
  )
);

module.exports = passport;
