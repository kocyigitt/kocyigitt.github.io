$.ajax({
  url: "https://spotify.aidenwallis.co.uk/u/655d3beae1ec4a6adbdd2910",
  method: "GET"
}).then(function(data) {
  adminlisten = data.replace('User is currently not playing any music on Spotify.', 'currently not playing any music on Spotify.');
  $("#track").text(adminlisten);
});
