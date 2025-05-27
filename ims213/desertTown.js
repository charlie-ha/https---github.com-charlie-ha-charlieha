// // 1. Define each video's loop settings
// const loops = [
//   { id: "TNT", start: 34, end: 60, videoId: "zT_NA9sj4-M" },
//   { id: "garageDoor", start: 120, end: 135, videoId: "zT_NA9sj4-M" },
//   { id: "pressurePlate", start: 73, end: 88, videoId: "zT_NA9sj4-M" },
//   { id: "timeOut", start: 417, end: 425, videoId: "zT_NA9sj4-M" },
//   { id: "noHealth", start: 410, end: 415, videoId: "zT_NA9sj4-M" },
//   { id: "bell", start: 185, end: 198, videoId: "zT_NA9sj4-M" },
//   // add more entries as needed...
// ];

// // 2. Store players so we can attach intervals per-player
// const players = {};
// let winConditionPlayer; // <— for your winCondition iframe

// function onYouTubeIframeAPIReady() {
//   loops.forEach((ytbPlayerID) => {
//     players[ytbPlayerID.id] = new YT.Player(ytbPlayerID.id, {
//       height: "840",
//       width: "472.5",
//       videoId: ytbPlayerID.videoId,
//       playerVars: {
//         autoplay: 1,
//         controls: 1,
//         // you can optionally set start here to jump in initially
//       },
//       events: {
//         onReady: (event) => onPlayerReady(event, ytbPlayerID),
//         onStateChange: onPlayerStateChange,
//       },
//     });
//   });
// }

// // 3) Initialize the winCondition player
// winConditionPlayer = new YT.Player("winCondition", {
//   width: "840",
//   height: "472.5",
//   videoId: "zT_NA9sj4-M", // or whatever ID your winCondition uses
//   playerVars: {
//     enablejsapi: 1,
//     autoplay: 0,
//     controls: 1,
//   },
//   // no onReady callback needed here unless you want one
// });

// function onPlayerReady(event, ytbPlayerID) {
//   const p = event.target;
//   // Seek to your custom start time
//   p.seekTo(ytbPlayerID.start, true);
//   p.playVideo();

//   // Create a per-player loop checker
//   setInterval(() => {
//     if (p.getCurrentTime() >= ytbPlayerID.end) {
//       p.seekTo(ytbPlayerID.start);
//     }
//   }, 300); // check roughly every 0.3s
// }

// function onPlayerStateChange(event) {
//   // you can handle play/pause UI here if needed
// }
// //  expose this for time jump to buttons —
// function jumpToWinCondition(seconds) {
//   if (winConditionPlayer && typeof winConditionPlayer.seekTo === "function") {
//     winConditionPlayer.seekTo(seconds, true);
//     winConditionPlayer.playVideo();
//   }
// }
