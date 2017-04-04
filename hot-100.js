var billboard = require("billboard-top-100").getChart;

x = "2017-01-07";

billboard('hot-100', x, function(songs, err){
	if (err) console.log(err);
	console.log("hot-100");
	for (i = 0; i < 100; i++) {
            console.log(songs[i].title + " ");
	}
    });