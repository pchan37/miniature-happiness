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
data.height = datah;
data.width = dataw;

// Background
var yearbg = document.createElementNS(ns, "rect");
yearbg.setAttribute("width", yearw);
yearbg.setAttribute("height", yearh);
yearbg.setAttribute("style", "fill:rgb(239, 239, 200)");
year.appendChild(yearbg);

var databg = document.createElementNS(ns, "rect");
databg.setAttribute("width", dataw);
databg.setAttribute("height", datah);
databg.setAttribute("style", "fill:rgb(239, 239, 255)");
data.appendChild(databg);

var rid = 0;

var stop = function(){
    window.cancelAnimationFrame(rid);
};

var clear = function(){
    while (svg.lastChild){
        svg.removeChild(svg.lastChild);
    }
};





//shows the data (popularity of the genre) accroding to year using divs as bar graph
var data_years = function() {
    data.selectAll("div")
        .data(info)
        .enter()
        .append("div")
        .style("width", "100px")
        .style("height", function(d) {
           return d / 2 + "px";
        })
         .style("background-color", function(d,i) {
           return colors[i];
         })
         .text( function(d, i) {
            return text[i];
         });
};

//shows the text to the right of the divs
var right_text = function() {
    if(evt.target == this) { //gets what div calls to display relevant facts
	var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
	t.setAttribute("x", "200px");
	t.setAttribute("y", "50px");
	t.innerHTML = "Genre Name:"
	data.appendChild(t);
	//include facts underneath?
	//most popular song


    }
};


//adds event listener to the divs to show facts
data.selectAll("div").addEventListener("click", function(evt) {
    right_text();
});


console.log("Loaded js.")
