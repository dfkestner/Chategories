const express = require("express");

const app = express();
app.use(require('cors')());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/topic", require("./routes/topic"));
//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;