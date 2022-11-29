const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("logging", (e: any) => {
  console.clear();
  console.log(e);
});

emitter.emit("logging", {
  userId: "3217",
  userName: "hydra",
});
