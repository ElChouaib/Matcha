const passport = require("passport");
const FortyTwoStrategy = require('passport-42').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const user = require('../models/user');
const bcrypt = require ('bcrypt');
const tools = require('../tools/index');
const keys = require("./keys")
const images = require('../models/images');
//////////////////////

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* FORTY TWO STRATEGY */

passport.use(
    new FortyTwoStrategy(
      {
        clientID: keys.FORTYTWO.clientID,
        clientSecret: keys.FORTYTWO.clientSecret,
        callbackURL: "http://localhost:5000/auth/42/redirect"
      },
      async (token,tokenSecret,profile, done) => {
          console.log(profile);
          
        const [lastname, firstname, username, gmail, omni_id,image] = 
        [profile._json.last_name, profile._json.first_name, profile._json.login,
            "intra"+profile._json.email, "intra" + profile._json.id,profile._json.image_url];
          let currentUser = await  user.getUser('GetUserByOmni',omni_id);
        if (!currentUser) {
              let image_url =(image).split('/')[4];
              let Password = tools.generate(profile._json.id,username);
              let hashPassword = await bcrypt.hash(Password, 10);
              tools.download(image,"./public/images/" + image_url ,function(){})
              user.Register(lastname, firstname, (username).toLowerCase(), gmail, hashPassword, omni_id);   
              let newuser = await  user.getUser('GetUserByOmni',omni_id);
              user.Confirmed(newuser.email);
              images.insertImage({user_id : newuser.id, path : image_url})
              if(newuser)
                done(null,newuser);
          }
         else  {
          done(null, currentUser);}
        }
      )
    );

  /* GOOGLE STRATEGY */


passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE.clientID,
  clientSecret: keys.GOOGLE.clientSecret,
  callbackURL: "http://localhost:5000/auth/google/redirect"
},
async (accessToken, refreshToken, profile, done) => {
  const [lastname, firstname, username, gmail, omni_id,image] = 
    [profile.name.familyName, profile.name.givenName, (profile.name.familyName.substr(0,2) + profile.name.givenName).toLowerCase(),
    "google"+profile.emails[0].value, "Google" + profile.id,profile.photos[0].value];
    let currentUser = await  user.getUser('GetUserByOmni',omni_id);
    if (!currentUser) {
      let image_name = new Date().toISOString() + username;
      let Password = tools.generate(omni_id,username);
      let hashPassword = await bcrypt.hash(Password, 10);
      tools.download(image,"./public/images/" + image_name ,function(){})
      user.Register(lastname, firstname, username, gmail, hashPassword, omni_id);
      let newuser = await  user.getUser('GetUserByOmni',omni_id);
      user.Confirmed(newuser.email);
      images.insertImage({user_id : newuser.id, path : image_name})
      if(newuser)
        done(null,newuser);
  }
 else  {
  done(null, currentUser);}
}
));
