var EventEmitter = require("events");
var emitter = new EventEmitter();
emitter.on("logging", function (e) {
    console.clear();
    console.log(e);
});
emitter.emit("logging", {
    userId: "3217",
    userName: "hydra"
});
