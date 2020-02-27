const router = require("express").Router();
const passport = require("passport");


const authCheck = (req, res, next) => {
  next();
};

router.get("/", authCheck, (req, res) => {
  res.status(200)
});

router.get('/auth/42', passport.authenticate('42'));

router.get('/auth/42/redirect',
  passport.authenticate('42', { failureRedirect: '/login' }),
  function (req, res) {
  
    // console.log(req.user);
    // console.log("arrived to router get ");
  //  console.log(req.user);
    res.redirect(`http://localhost:3000/OmniAuth/token=${req.user.token}`);
  });

module.exports = router;