const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
const Server = require("http").Server(app);
const io = require("socket.io")(Server);

io.on("connection", socket => {
  socket.on("connectionRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://raul:goweek6@cluster0-cznwt.mongodb.net/goweek6?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

Server.listen();
