var billboard = require("billboard-top-100").getChart;

x = "2017-01-07";

billboard('hot-holiday-songs', x, function(songs, err){
        if (err) console.log(err);
	console.log("hot-holiday-songs");
        console.log("============================================================================");
        console.log(songs); //prints array of top 100 songs                                                                                                                        
        console.log("============================================================================");
    });