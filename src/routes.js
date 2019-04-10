const express = require("express");
const multer = require("multer");
const configMulter = require("./config/multer");
const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");
const routes = express.Router();

routes.post("/box", BoxController.store);
routes.get("/box", BoxController.index);
routes.get("/box/:id", BoxController.show);
routes.post(
  "/box/:id/file",
  multer(configMulter).single("file"),
  FileController.store
);
module.exports = routes;
