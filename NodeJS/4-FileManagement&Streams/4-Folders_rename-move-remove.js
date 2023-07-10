// BELOW ***
// delete an entire folder and directory

const fs = require("fs");

fs.readdirSync("./4-Accounts").forEach((file) => {
    fs.renameSync(`./4-Accounts/${file}`, `./library/${file}`);
});

console.log("Files removed, nickkk");
fs.rmdirSync("./4-Accounts");
console.log("Folder Removed")