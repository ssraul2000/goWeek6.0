const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
mongoose.connect(
  "mongodb+srv://raul:goweek6@cluster0-cznwt.mongodb.net/goweek6?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.listen(3333);
