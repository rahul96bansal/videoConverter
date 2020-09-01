// const express = require("express");

// const ffmpeg = require("fluent-ffmpeg");

// const bodyParser = require("body-parser");

// const fs = require("fs");

// const fileUpload = require("express-fileupload");

// const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");

// ffmpeg.setFfprobePath("C:/ffmpeg/bin");

// ffmpeg.setFlvtoolPath("C:/flvtool");

// console.log(ffmpeg);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/convert", (req, res) => {
//   //res.contentType(`video/${to}`);
//   //res.attachment(`output.${to}`

//   let to = req.body.to;
//   let file = req.files.file;
//   let size = req.body.size;
//   let fileName = `output.${to}`;
//   console.log(to);
//   console.log(file);
//   console.log(size);

//   file.mv("tmp/" + file.name, function (err) {
//     if (err) return res.sendStatus(500).send(err);
//     console.log("File Uploaded successfully");
//   });

//   ffmpeg("tmp/" + file.name)
//     .withOutputFormat(to)
//     // .output(basename + '-1280x720.mp4')
//     // .videoCodec('libx264')  
//     // .noAudio()
//     .size(size)     
//     // .videoBitrate('1k')
//     .outputOptions(['-c:v libx264', '-crf 18' , '-preset veryfast'])
//     .setStartTime('0')
//     .setDuration('10')
//     .on("end", function (stdout, stderr) {
//       console.log("Finished");
//       res.download(__dirname + fileName, function (err) {
//         if (err) throw err;

//         fs.unlink(__dirname + fileName, function (err) {
//           if (err) throw err;
//           console.log("File deleted that was downloaded");
//         });
//       });
//       fs.unlink("tmp/" + file.name, function (err) {
//         if (err) throw err;
//         console.log("File deleted that was converted");
//       });
//     })
//     .on("error", function (err) {
//       console.log("an error happened: " + err.message);
//       fs.unlink("tmp/" + file.name, function (err) {
//         if (err) throw err;
//         console.log("File deleted that has to be converted due to error");
//       });
//     })
//     .save(__dirname + fileName);
//   //.pipe(res, { end: true });
// });

// app.listen(5000);

 
//  var http = require("http"),
//  url = require("url"),
//  path = require("path");

//  app.post("/convert", (req, res) => {
//     //res.contentType(`video/${to}`);
//     //res.attachment(`output.${to}`
  
//     let to = req.body.to;
//     let file = req.files.file;
//     let size = req.body.size;
//     let fileName = `${size}.mp4`;
//     console.log(to);
//     console.log(file);
//     console.log(size);
  
//     file.mv("tmp/" + file.name, function (err) {
//       if (err) return res.sendStatus(500).send(err);
//       console.log("File Uploaded successfully");
//     });


    // ffmpeg("tmp/" + file.name)
    // .withOutputFormat("mp4")
    // .size(size)
    // .outputOptions(['-c:v libx264', '-crf 18' , '-preset veryfast'])
    // .setStartTime('0')
    // .setDuration('100')
    // .on("end", function (stdout, stderr) {
    //   console.log("Finished")
    // })
    // .on("error", function (err) {
    //   console.log("an error happened: " + err.message);
    // })
    // .save(__dirname + fileName)

    // file = path.resolve(__dirname, "gfgvideo.mp4");
      // fs.stat(file, function(err, stats) {
      //   if (err) {
      //     if (err.code === 'ENOENT') {
      //       // 404 Error if file not found
      //       console.log("hello")
      //       return res.sendStatus(404);
      //     }
      //     res.end(err);
      //   }
      //   var range = req.headers.range;
      //   console.log("request", req)
      //   console.log("range", range)
      //   if (!range) {
      //     // 416 Wrong range
      //     return res.sendStatus(416);
      //   }
      //   var positions = range.replace(/bytes=/, "").split("-");
      //   var start = parseInt(positions[0], 10);
      //   var total = stats.size;
      //   var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      //   var chunksize = (end - start) + 1;
  
      //   res.writeHead(206, {
      //     "Content-Range": "bytes " + start + "-" + end + "/" + total,
      //     "Accept-Ranges": "bytes",
      //     "Content-Length": chunksize,
      //     "Content-Type": "video/mp4"
      //   });
  
      //   var stream = fs.createReadStream(file, { start: start, end: end })
      //     .on("open", function() {
      //       stream.pipe(res);
      //     }).on("error", function(err) {
      //       res.end(err);
      //     });
      //   });
  // })
  // app.listen(5000);


const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");

ffmpeg.setFfprobePath("C:/ffmpeg/bin");

ffmpeg.setFlvtoolPath("C:/flvtool");

console.log(ffmpeg);

var fs = require("fs"),
  http = require("http"),
 url = require("url"),
 path = require("path");




http.createServer(function (req, res) {

  // var filePath = null;
  // var filePath = path.resolve(__dirname, "gfgvideo.mp4");

  // var stat  = fs.statSync(filePath);

  // var range        = req.headers.range;
  // var parts        = range.replace(/bytes=/, "").split("-");
  // var partialstart = parts[0];
  // var partialend   = parts[1];

  // var start     = parseInt(partialstart, 10);
  // var end       = partialend ? parseInt(partialend, 10) : total-1;
  // var chunksize = (end-start)+1;

  // var stream = fs.createReadStream(filePath, {start: start, end: end});

  // res.writeHead(206, {
  // 'Content-Range  ': 'bytes ' + start + '-' + end + '/' + total,
  // 'Accept-Ranges'  : 'bytes',
  // 'Content-Length' : chunksize,
  // 'Content-Type'   : 'video/mp4'
  // });

  // ffmpeg(stream)
  // .videoCodec('libx264')
  // .withAudioCodec('aac')
  // .format('mp4')
  // .videoFilters({
  // filter: 'drawtext',
  // options: {
  //   fontsize:20,
  //   fontfile: 'public/fonts/Roboto-Black.ttf',
  //   text: "USERNAME",
  //   x:10,
  //   y:10,
  //   fontcolor:"red"
  // }})
  // .outputOptions(['-movflags frag_keyframe + empty_moov'])
  // .output(res,{ end:true })
  // .on('error', function(err, stdout, stderr) {
  //   console.log('an error happened: ' + err.message + stdout + stderr);
  // })
  // .run();
  if (req.url != "/gfgvideo.mp4") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<video src="http://localhost:8888/gfgvideo.mp4" controls></video>');
  } else {
    var size = ["1920x1080"]
    // "1280x720", "480x360"
        var x = "gfgvideo.mp4"
        var videoFiles = ["gfgvideo.mp4", "gfgvideo720.mp4"] 
        console.log("dirname", __dirname)
        // videoFiles.forEach( x => {
        var file = path.resolve(__dirname, x);
        fs.stat(file, function(err, stats) {
          if (err) {
            if (err.code === 'ENOENT') {
              // 404 Error if file not found
              console.log("hello")
              return res.sendStatus(404);
            }
            res.end(err);
          }
          var range = req.headers.range;
          if (!range) {
           // 416 Wrong range
           return res.sendStatus(416);
          }
          var positions = range.replace(/bytes=/, "").split("-");
          var start = parseInt(positions[0], 10);
          var total = stats.size;
          var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
          var chunksize = (end - start) + 1;
    
            res.writeHead(206, {
              "Content-Range": "bytes " + start + "-" + end + "/" + total,
              "Accept-Ranges": "bytes",
              "Content-Length": chunksize,
              "Content-Type": "video/mp4"
            });
    
           var stream = fs.createReadStream(file, { start: start, end: end })
            .on("open", function() {
              stream.pipe(res);
            }).on("error", function(err) {
              res.end(err);
            });
        // });
      })

      //   var x = "480x360"
      // // size.forEach(x => {
      //   // console.log("size", x);
      //   ffmpeg(stream)
      //   // .withOutputFormat("mp4")
      //   .size(x)
      //   .outputOptions(['-c:v libx264', '-crf 18' , '-preset veryfast'])
      //   .setStartTime('0')
      //   .setDuration('100')
      //   .on("end", function (stdout, stderr) {
      //     console.log("Finished")
      //   })
      //   .on("error", function (err) {
      //     console.log("an error happened: " + err.message);
      //   })
      //   .pipe(res,{ end:true })
        // .run()
        // .save(__dirname + `${x}.mp4`)
      // })
   
  }
}).listen(8888);