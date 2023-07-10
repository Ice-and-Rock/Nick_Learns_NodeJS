const fs = require("fs");

// // Line below removed because it was RENAMED ✅
// // RENAME a file from one place to another using fs.rename
// fs.renameSync("./your-files-here/rename-this.js", "./your-files-here/project-config.js");

// console.log ("config.js file renamed")

// // MOVE a file from one place to another using fs.rename
// fs.rename("./your-files-here/notes.md", "./notes.md", function(err) {
// if (err) {
//     throw err;
// }
// console.log("Notes markdown file moved")
// })


// // Again, the next line was removed to continue playing
// fs.unlinkSync("./your-files-here/project-config.js")

fs.unlink("notes.md", function (err) {
    if (err) {
        throw err;
    } else {
    console.log("Notes are gone")
    }
})