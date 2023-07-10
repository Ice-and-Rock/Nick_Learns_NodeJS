// BELOW ***
// Create a new folder directory in the current folder
// send a message if there is an error or duplicate


const fs = require("fs");

if (fs.existsSync("your-files-here")) {
    console.log("already there... my dude!")
} else {
    fs.mkdir("your-files-here", function(err) {
        if(err) {
            console.log(` Error: ${err}`)
        } else {
            console.log ("directory created")
        }
    })
}
