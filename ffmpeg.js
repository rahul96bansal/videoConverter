const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin");
ffmpeg.setFlvtoolPath("C:/flvtool");

ffmpeg(__dirname + "/gfgvideo720.mp4", { timeout: 432000 })
  .addOptions([
    "-profile: v baseline",
    "-level 3.0",
    "-start_number 0",
    "-hls_time 10",
    "-hls_list_size 0",
    "-f hls",
  ])
  .output("gfgvideo720.m3u8")
  .on("end", () => {
    console.log("end");
  })
  .on("error", (err) => {
    console.log("my err", err);
  })
  .run();
