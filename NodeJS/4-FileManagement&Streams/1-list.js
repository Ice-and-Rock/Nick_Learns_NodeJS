// // BELOW ***
// // Create a console log that shows what is in the current directory

// const fs = require("fs");

// // read from the current directory
// let files = fs.readdir("./", function(err, files) {
//     if (err) {
//         throw err;
//     }
//     console.log(files)
// })

// console.log("reading files...");


// ____________________________________________________________


// BELOW ***
// Display what is inside the file, with some other text beforhande

const fs = require("fs");

fs.readFile("./readme.md", "utf-8", (err, poem) => {
    console.log(poem)
});

console.log("reading the file...")



