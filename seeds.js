var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest", 
        image: "http://www.reserveamerica.com/webphotos/NY/pid673/5/180x120.jpg", 
        description: "Vivamus tempor consectetur vehicula. Mauris sollicitudin sapien sit amet tortor posuere, molestie venenatis sem ornare. Suspendisse bibendum, metus et sagittis consectetur, felis nulla venenatis metus, ac eleifend augue nisi ac lorem. Donec suscipit erat vel nisi vehicula, nec interdum massa vehicula. Curabitur faucibus, libero ac feugiat imperdiet, neque diam mollis mi, vel sodales ex nunc quis nisi. Aliquam porttitor aliquam laoreet. Mauris ut consequat eros, nec vulputate felis. Suspendisse ornare viverra molestie. Suspendisse congue metus et purus dapibus fringilla. Vestibulum interdum semper dolor ac dictum. Duis sit amet mauris sit amet sapien laoreet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum gravida nulla, sit amet laoreet nunc tempor at. Donec viverra convallis sem vel accumsan. "
    },
    {
        name: "Cartoon Camp", 
        image: "http://thumbs.gograph.com/gg63925979.jpg", 
        description: "Vivamus tempor consectetur vehicula. Mauris sollicitudin sapien sit amet tortor posuere, molestie venenatis sem ornare. Suspendisse bibendum, metus et sagittis consectetur, felis nulla venenatis metus, ac eleifend augue nisi ac lorem. Donec suscipit erat vel nisi vehicula, nec interdum massa vehicula. Curabitur faucibus, libero ac feugiat imperdiet, neque diam mollis mi, vel sodales ex nunc quis nisi. Aliquam porttitor aliquam laoreet. Mauris ut consequat eros, nec vulputate felis. Suspendisse ornare viverra molestie. Suspendisse congue metus et purus dapibus fringilla. Vestibulum interdum semper dolor ac dictum. Duis sit amet mauris sit amet sapien laoreet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum gravida nulla, sit amet laoreet nunc tempor at. Donec viverra convallis sem vel accumsan. "
    },
    {
        name: "Paradise Creek", 
        image: "http://www.reserveamerica.com/webphotos/NRSO/pid71648/0/180x120.jpg", 
        description: "Vivamus tempor consectetur vehicula. Mauris sollicitudin sapien sit amet tortor posuere, molestie venenatis sem ornare. Suspendisse bibendum, metus et sagittis consectetur, felis nulla venenatis metus, ac eleifend augue nisi ac lorem. Donec suscipit erat vel nisi vehicula, nec interdum massa vehicula. Curabitur faucibus, libero ac feugiat imperdiet, neque diam mollis mi, vel sodales ex nunc quis nisi. Aliquam porttitor aliquam laoreet. Mauris ut consequat eros, nec vulputate felis. Suspendisse ornare viverra molestie. Suspendisse congue metus et purus dapibus fringilla. Vestibulum interdum semper dolor ac dictum. Duis sit amet mauris sit amet sapien laoreet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum gravida nulla, sit amet laoreet nunc tempor at. Donec viverra convallis sem vel accumsan. "
    }
]
    
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        else {
            console.log("removed campgrounds!");
        }
    });
    
    //add some campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err) {
                console.log(err);
            }
            else {
                console.log("Added a campground!");
                
                //create a test comment
                Comment.create(
                    {
                        text: "This place is great, but I wish there was Internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err) {
                            console.log(err);
                        }
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                        
                    });
            }
        });
    });
    //add some comments
    
}
    
module.exports = seedDB;