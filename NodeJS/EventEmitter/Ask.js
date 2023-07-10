// BELOW ***
// the EventEmitter in this excercise allows us to create custom events when they are raised 
// they can also link between different files 

const collectAnswers = require("./CollectAnswers")

const questions = [
    "what is you name?",
    "where do you live buddy?",
    "what ya gonna do with the new knowledge?",
  ];
  
 
  
  const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thankyou for your answers, Nick!");
    console.log(answers);
    process.exit();
  });

  answerEvents.on("answer", answer => 
  console.log(`the answer is ${answer}`)
  );