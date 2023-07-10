// BELOW ***
// import functions from another file "./myModule-Exports.js"

const { inc, dec, getCount } = require("../myModule-Exports");

inc();
inc();
inc();


console.log(`the count is ${getCount()}`);


