const Joi = require('joi')
const express = require("express");
const fs = require("fs");
const app = express();
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");
ffmpeg.setFlvtoolPath("C:/flvtool");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  console.log(fileName);

  const filePath = __dirname + `/${fileName}`;
  const stat = fs.statSync(filePath);
  const total = stat.size;

  if (req.headers.range) {
    const range = req.headers.range;
    const partition = range.replace(/bytes=/, "").split("-");
    const start = parseInt(partition[0], 10);
    const end = partition[1] ? parseInt(partition[1], 10) : total - 1;
    const chunksize = end - start + 1;

    console.log("partition[0]", partition[0]);
    console.log("partition[1]", partition[1]);
    console.log("start", start);
    console.log("end", end);
    console.log("chunksize", chunksize);
    console.log("total", total, filePath);

    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    });
    const stream = fs.createReadStream(filePath, { start: start, end: end });
    stream.pipe(res);

    // ffmpeg(stream)
    //   .format("mp4")
    //   .size("480x360")
    //   .outputOptions(["-c:v libx264", "-crf 18", "-preset veryfast"])
    //   .setStartTime("0")
    //   .setDuration("100")
    //   .on("end", function (stdout, stderr) {
    //     console.log("Finished post request");
    //   })
    //   .on("error", function (err) {
    //     console.log("an error happened: " + err);
    //   })
    //   .writeToStream(res, {end: true});
  } else {
    console.log("ALL: " + total);
    res.writeHead(200, {
      "Content-Length": total,
      "Content-Type": "video/mp4",
    });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  }
});

// app.get("/convert", (req, res) => {
// //   const schema = Joi.object({
// //     size: Joi.string().min(3).required(),
// //   });

// //   const { error } = schema.validate(req.body);
// //   if (error) {
// //     res.status(404).send("not found error");
// //   }

// //   console.log("size". req.body)
//   const filePath = __dirname + "/gfgvideo.mp4";
//   const stream = fs.createReadStream(filePath);
// //   "tmp/" + "gfgvideo.mp4"
//   ffmpeg(stream)
//     .size("480x360")
//     .outputOptions(["-c:v libx264", "-crf 18", "-preset veryfast"])
//     .setStartTime("0")
//     .setDuration("30")
//     .on("end", function (stdout, stderr) {
//       console.log("Finished post request");
//     })
//     .on("error", function (err) {
//       console.log("an error happened: " + err.message);
//     })
//     // .save(__dirname + "example.mp4");
//   .pipe(res, { end: true });
// //   res.send("hello world ");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
