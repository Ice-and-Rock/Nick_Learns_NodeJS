const readline = require("readline");
const { EventEmitter } = require("events");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// turn the function below into something exportable using arrow func
module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();
  
    const questionsAnswered = (answer) => {
        emitter.emit("answer", answer)
      answers.push(answer.trim());
      if (answers.length < questions.length) {
        rl.question(questions[answers.length], questionsAnswered);
      } else {
        return done(answers);
      }
    };
  
    rl.question(firstQuestion, questionsAnswered);
    // raise an event everytime the user answers a question
    return emitter;
  }