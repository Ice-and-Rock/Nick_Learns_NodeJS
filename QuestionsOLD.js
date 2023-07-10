// const path = require ("path");

// console.log(__dirname);
// console.log(`The file name is ${path.basename(__filename)}`);

// for (let key in global) {
//     console.log(key);
// }




// // everything you have when you run the command... [an array]
// console.log(process.argv);

// // Grab the information that node is using...
// function grab (flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

// let greeting = grab("--greeting");
// let user = grab("--user")

// console.log (greeting);
// console.log (user);




process.stdout.write("hello \n \n");

const questions = [
    "what is your name?",
    "what would you rather being doing?",
    "what is your rpefered programming language?"
]

const answers = [];

function ask(i) {
    process.stdout.write(`\n \n \n ${questions[i]}`);
    process.stdout.write(` > `);
}
// Wait for an answer
process.stdin.on("data", function (data) {
    process.stdout.write(data.toString().trim());
})
// call the answer
ask(answers.length);