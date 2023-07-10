const fs = require("fs");

// BELOW ***
// Break down the blog data to start displaying it
// This works for streaming movies online, you don't need the whole thing to watch it

// read the chat log but stream the data before all the data had been read
let stream = fs.createReadStream("./chat-logs/nick_macbook", "utf-8");

let data;

// below runs once
stream.once("data", (chunk) => {
  console.log("read stream started");
  console.log("=================");
  console.log(chunk);
});

// takes into account the chunks of data
stream.on("data", (chunk) => {
  console.log(`chunk: ${chunk.length}`);
  data += chunk;
});

// breaks down into chunks (if a bigger file)
stream.on("end", () => {
  console.log(`finished ${data.length}`);
});

console.log("Reading the file");
