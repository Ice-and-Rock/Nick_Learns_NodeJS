// COMMAND = "node Questions"
// + Use this command in terminal to run node and any code below

// __________________________________________________________________

// const path = require ("path");

// console.log(__dirname);
// console.log(`The file name is ${path.basename(__filename)}`);

// for (let key in global) {
//     console.log(key);
// }

// __________________________________________________________________

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

// __________________________________________________________________

// // BELOW ***
// // create a small question list, take in answers then return the answers in a synamic string✅

// process.stdout.write("hello \n \n");

// // Set the array of Q's
// const questions = [
//   "what is your name?",
//   "what would you rather being doing?",
//   "what is your rpefered programming language?",
// ];
// // Set the empty A's array
// const answers = [];

// function ask(i = 0) {
//   process.stdout.write(`\n \n \n ${questions[i]}`);
//   process.stdout.write(` > `);
// }

// // call the answer
// ask();

// // call this function on a 'data' event
// // Wait for an answer
// process.stdin.on("data", function (data) {
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// // call this function on the 'exit' event
// // input the answers from the array in a dynamic string
// process.on("exit", function () {
//   process.stdout.write("\n\n\n\n");
//   process.stdout.write(
//     `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
//   );
// });

// __________________________________________________________________

// // BELOW ***
// // Create a timer counting in 500ms delays logged to the console ✅
// // Create a timer written as a percentage ✅

// const waitTime = 3000;
// console.log(`setting a ${waitTime/1000} second delay`);
// const timerFinished = () => {
//     clearInterval(interval)
//     console.log("done")
// };

// setTimeout(timerFinished, waitTime);

// const waitInterval = 500;
// let currentTime = 0;

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor ((currentTime / waitTime) * 100);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting... ${p}`);
// };

// const interval = setInterval(incTime, waitInterval);

// __________________________________________________________________

// // BELOW ***
// // retrieve information on how much memory and date/time files use

// const path = require("path");

// console.log (path.basename(__filename));
// const util = require("util");
// const v8 = require("v8");
// // add aphended information to the path using 'path.join'
// const dirUploads = path.join(
//     __dirname,
//     "www",
//     "files",
//     "uploads"
// );
// util.log(dirUploads);
// util.log(path.basename(__filename));

// util.log(v8.getHeapStatistics());

// __________________________________________________________________


// BELOW ***
// Create a question array and collect answers in an array
// Do this using asyncronous functions (after the end of the Q's)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "what is you name?",
  "where do you live buddy?",
  "what ya gonna do with the new knowledge?",
];

function collectAnswers(questions, done) {
  const answers = [];

  const questionsAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionsAnswered);
    } else {
      return done(answers);
    }
  };

  rl.question(questions[0], questionsAnswered);
}

collectAnswers(questions, (answers) => {
  console.log("Thankyou for your answers, Nick!");
  console.log(answers);
  process.exit();
});


// __________________________________________________________________




