const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
const ffmpeg = require("fluent-ffmpeg");
const { func } = require("joi");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");
ffmpeg.setFlvtoolPath("C:/flvtool");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view.html");
});

app.post("/convert", (req, res) => {
  let to = req.body.to;
  let file = req.files.file;
  let size = req.body.size;
  let fileName = "output.mp4";

  file.mv("tmp/" + file.name, function (err) {
    if (err) return res.sendStatus(500).send(err);
    console.log("File Uploaded successfully");
  });

  ffmpeg("tmp/" + file.name)
    .videoCodec("libx264")
    .outputOptions(["-c:v libx264", "-crf 18", "-preset fast"])
    // .size("480x360")
    .on("end", function (stdout, stderr) {
      res.download(__dirname + fileName, function (err) {
        if (err) throw err;
      });
    })
    .on("error", function (err) {
      console.log("error");
    })
    .save(__dirname + fileName);
});

app.listen(3000, () => {
  console.log("server is running");
});
