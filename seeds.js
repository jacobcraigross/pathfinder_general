var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name: "Davy Crockett National Forest", 
            image: "https://ourlifewithaview.files.wordpress.com/2012/09/davy-crockett-national-forest-48.jpg",
            description: "Loblolly Pine forest thicket, nestled in deep East Texas."
            
        },
        {
            name: "Angelina National Forest", 
            image: "http://www.texasmonthly.com/wp-content/uploads/2014/05/tripguides_interior4.jpg",
            description: "Similar to Davy Crockett. Lots of pine thickets and more hills."
            
        },
        {
            name: "Sam Houston National Forest", 
            image: "http://asergeev.com/pictures/archives/2012/1046/jpeg/06.jpg",
            description: "Again, very similar to Davy Crockett and Angelina but slightly less thick."
            
        },
        {
            name: "Sabine National Forest", 
            image: "https://jefflynchdev.files.wordpress.com/2011/04/lakeshore_large.jpg",
            description: "Nestled right alongside the banks of the Sabine River. Pine thicketts and water-ways."
            
        }
    ];

// Remove all data.
function seedDB() {
       Campground.remove({}, function(err){
       if (err) {
           console.log(err);
       } else {
           console.log("data scrubbed.");
       }
       // Add a campground.
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if (err) {
                console.log(err);
            } else {
                console.log("added a new campground.");
                Comment.create({
                   text: "Great place but lots of wild hogs.",
                   author: "Wilbur the Belly Buster"
                }, function(err, comment){
                    if (err) {
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("created new comment.");
                    }
                });
            }
        });
    });
  }); 
}

module.exports = seedDB;