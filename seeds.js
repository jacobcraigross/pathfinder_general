var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
        {
            name: "Davy Crockett National Forest", 
            image: "https://ourlifewithaview.files.wordpress.com/2012/09/davy-crockett-national-forest-48.jpg",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            
        },
        {
            name: "Angelina National Forest", 
            image: "http://www.texasmonthly.com/wp-content/uploads/2014/05/tripguides_interior4.jpg",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            
        },
        {
            name: "Sam Houston National Forest", 
            image: "http://asergeev.com/pictures/archives/2012/1046/jpeg/06.jpg",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            
        },
        {
            name: "Sabine National Forest", 
            image: "https://jefflynchdev.files.wordpress.com/2011/04/lakeshore_large.jpg",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            
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