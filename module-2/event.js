const EventEmitter = require("events");

class SchoolBell extends EventEmitter {}


const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
    console.log("Yahoo!! Class Sesh!");
})
schoolBell.on("ring", () => {
    console.log("Dhet! Arekta class ache!");
})
schoolBell.on("broken", () => {
    console.log("Oh no! Class ki ar sesh hobena!")
})

schoolBell.emit("ring");
schoolBell.emit("broken");