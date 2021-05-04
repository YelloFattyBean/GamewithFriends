const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const User = require('../models/Discord');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = User.findOne({ where: { id } });
  if (user) done(null, user);
});

passport.use(new DiscordStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_REDIRECT,
  scope: ['identify', 'gdm.join'],
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ where: { discordId: profile.id } });
    if (user) done(null, user);
    else {
      const newUser = await User.create({
        discordId: profile.id,
        username: profile.username,
        discriminator: profile.discriminator,
        accessToken: profile.accessToken,
      });
      done(null, newUser);
    }
  } catch (err) {
    done(err, null);
  }
}));
