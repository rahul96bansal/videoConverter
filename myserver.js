const app = require("express")();
const fs = require("fs");
const hls = require("hls-server");

app.get("/", (req, res) => {
  return res.status(200).sendFile(`${__dirname}/client.html`);
});

const server = app.listen(3000);

// app.get("/video", (myreq, res) => {
//   new hls(server, {
//     provider: {
//       exists: (req, cb) => {
//         const ext = req.url.split(".").pop();

//         if (ext !== "m3u8" && ext !== "ts") {
//           return cb(null, true);
//         }

//         fs.access(__dirname + req.url, fs.constants.F_OK, function (err) {
//           if (err) {
//             console.log("File not exist");
//             return cb(null, false);
//           }
//           cb(null, true);
//         });
//       },
//       getManifestStream: (req, cb) => {
//         stream = fs.createReadStream(__dirname + req.url);
//         cb(null, stream);
//         stream.pipe(res)
//       },
//       getSegmentStream: (req, cb) => {
//         stream = fs.createReadStream(__dirname + req.url);
//         cb(null, stream);
//         stream.pipe(res)
//       },
//     },
//   });
// });
