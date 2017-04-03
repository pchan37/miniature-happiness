var billboard = require("billboard-top-100").getChart;

x = "2016-09-01";
 
// date defaults to saturday of this week 
 
/*
billboard('hot-100', function(songs, err){
	if (err) console.log(err);
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log(songs[0].rank) //prints rank of top song (1) 
	console.log(song[0].cover) //prints URL for Billboard cover image of top song 
    });
*/


/*
var listCharts = require('billboard-top-100').listCharts;
 
listCharts(function(data){
	console.log(data['Overall Popularity']); //prints larray of charts in 'Overall Popularity' category 
    });
*/



/*
billboard('hot-100', '2016-12-31', function(songs, err){
    if (err) console.log(err);
    console.log(songs); //prints array of top 100 songs for week of August 27, 2016 
    console.log(songs[0].title); //prints title of top song for week of August 27, 2016 
    console.log(songs[0].artist); //prints artist of top songs for week of August 27, 2016 
    console.log(songs[0].rank) //prints rank of top song (1) for week of August 27, 2016 
    console.log(song[0].cover) //prints URL for Billboard cover image of top song for week of August 27, 2016 
});
*/

/*
var listCharts = require('billboard-top-100').listCharts;
 
listCharts(function(data){
	console.log(data['Pop']); //prints larray of charts in 'Overall Popularity' category 
    });
*/


billboard('hot-100', x+"", function(songs, err){
    if (err) console.log(err);
    console.log("hot-100");
    console.log("============================================================================");
    console.log(songs); //prints array of top 100 songs for week of August 27, 2016 
    console.log(songs[0].title); //prints title of top song for week of August 27, 2016 
    console.log(songs[0].artist); //prints artist of top songs for week of August 27, 2016 
    console.log(songs[0].rank) //prints rank of top song (1) for week of August 27, 2016 
    console.log("============================================================================");
});




billboard('pop-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("pop-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('country-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("country-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('rock-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("rock-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('r-b-hip-hop-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("r-b-hip-hop-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('dance-club-play-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("dance-club-play-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('latin-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("latin-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('christian-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("christian-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });

billboard('hot-holiday-songs', x, function(songs, err){
	if (err) console.log(err);
	console.log("hot-holiday-songs");
	console.log("============================================================================");
	console.log(songs); //prints array of top 100 songs 
	console.log(songs[0].title); //prints title of top song 
	console.log(songs[0].artist); //prints artist of top songs 
	console.log("============================================================================");
    });