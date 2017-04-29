var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// INDEX ROUTE -----------------------------------------------------------------

router.get("/", function(req, res){
   res.render("landing"); 
});

// AUTH ROUTES ----------------------------------------------------------------

// REGISTER ------

router.get("/register", function(req, res){
   res.render("register"); 
});

router.post("/register", function(req, res){
   var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err, user){
      if (err) {
          req.flash("error", err.message);
          console.log(err);
          return res.render("register");
      } 
      passport.authenticate("local")(req, res, function(){
          req.flash("success", "welcome!" + user.username);
         res.redirect("/campgrounds"); 
      });
   });
});

// LOGIN ------

router.get("/login", function(req, res){
   res.render("login"); 
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// LOGOUT ------

router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "Logged you out.");
   res.redirect("/campgrounds");
});

module.exports = router;