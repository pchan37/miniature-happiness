// Initialization
var year = document.getElementById("year");
var data = document.getElementById("data");
var ns = "http://www.w3.org/2000/svg";

var yearh = $(window).height() * 0.13;
var yearw = $(window).width();
var datah = $(window).height() * 0.80;
var dataw = $(window).width();

year.height = yearh;
year.width = yearw;

// Background
var yearbg = document.createElementNS(ns, "rect");
yearbg.setAttribute("width", yearw);
yearbg.setAttribute("height", yearh);
yearbg.setAttribute("style", "fill:rgb(239, 239, 200)");
year.appendChild(yearbg);

// =========================================
// Year Bar
years = [];
var x = yearw / 2;
var y = 61;

var result = []
// Data Retrieval - By Year
var get_data = function(year) {
    var ret;
    $.getJSON('/data/' + year, {},
	      function(data){
          result = data.result;
		  console.log(result);

    });
    return result;
};

var getFields = function(input, field) {
    var output = [];
    for (var i=0; i < input.length; ++i)
        output.push(input[i][field]);
    return output;
};

var colors = [ "LawnGreen", "LightSeaGreen", "MediumSlateBlue", "chocolate", "coral", "darksalmon", "mediumpurple", "MediumOrchid" ];

//shows the data (popularity of the genre) accroding to year using divs as bar graph
var data_years = function(year) {
  while (data.lastChild){
        data.removeChild(data.lastChild);
    }

  var info = getFields(get_data(year), "song_count");
  var text = getFields(get_data(year), "genre");

  var graph = d3.select("#data");
    graph.selectAll("div")
        .data(info)
        .enter()
        .append("div")
        .style("width", "200px")
        .style("height", function(d) {
           return d * 5 + "px";
        })
         .style("background-color", function(d,i) {
           return colors[i];
         })
         .text( function(d, i) {
            return text[i] + " " + info[i] + "%";
         });
};

var changedate = function(e) {
    var target = yearw / 2; // Target X Coordinate
    var deltax = target - e.target.getAttribute("x");
    // console.log(target); // Debugging
    // console.log(deltax); // Debugging

    for (i = 0; i < years.length; i++) {
	years[i].setAttribute("x", parseInt(years[i].getAttribute("x")) + deltax);
    }

    // ADD DATA BINDING HERE
    console.log(e.target.innerHTML);
      data_years(e.target.innerHTML);
}

for (i = 1997; i < 2018; i++) {
    var t = document.createElementNS(ns, "text");
    t.setAttribute("x", x);
    t.setAttribute("y", y);
    t.setAttribute("font-family", "Quicksand");
    t.setAttribute("font-size", "36px");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("fill", "Black");
    t.textContent = String(i);
    year.appendChild(t);
    years.push(t);
    t.addEventListener("click", changedate);
    x += 125;
}
// console.log(years); // Debugging
// console.log(years[0]); // Debugging
// =========================================

// //make the years display as text
// var space = 20;
// var years_display = function(d) {
//   //length = # of years
//     for(int i = 0; i < length; i++) {
// 	var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
//   	t.setAttribute("x", 200 + space + "px");
//   	t.setAttribute("y", "50px");
//   	t.innerHTML = d + "";
//   	data.appendChild(t);
// 	space += 50;
//     }
// }

// //adds event listener to the text to select year
// years.selectAll("text").addEventListener("click", function(evt) {
//     //set variable for data to display corresponding facts?
// });

// console.log(get_data(1999));

// //shows the text to the right of the divs
// var right_text = function() {
//     if(evt.target == this) { //gets what div calls to display relevant facts
// 	var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
// 	t.setAttribute("x", "200px");
// 	t.setAttribute("y", "50px");
// 	t.innerHTML = "Genre Name:";
// 	data.appendChild(t);
// 	//include facts underneath?
// 	//most popular song
//
//
//     }
// };

//adds event listener to the divs to show facts
// data.selectAll("div").addEventListener("click", function(evt) {
//     right_text();
// });


console.log("Loaded js.")
