// BELOW ***
// Create an emitter to grab input information and decouple logic and handle async functions✅

const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

emitter.emit("customEvent", "Hello world", "computer");
emitter.emit("customEvent", "That's cool as hell", "Mr Valente");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    // set up a closing statement 'exit' from the emitter
    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye, my love!", "process");
        process.exit();
    }
    emitter.emit(
        "customEvent", 
        data.toString().trim(),
        "terminal"
    );
})