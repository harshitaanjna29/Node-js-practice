//- An event is an action or occurrence—like a file being opened, data arriving, or a user interaction—that Node.js can respond to
//- Node.js uses an event-driven model, meaning it listens for events and executes code (called listeners) when those events occur

import events from "events"

const button = new events();  // creating a new object
button.on("abc", function(){
    console.log("abc event is triggered")
})

button.emit("abc")
button.emit("abc")
button.emit("abc")

button.on("click",()=>console.log("click event is triggered"))
button.emit("click");


console.log("event handling complete")

//An event is a signal that something has happened.
// For example:
// A file has finished reading.
// A user connected to a server.
// A timer has completed.