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






var data_years = function() {
    data.selectAll("div")
        .data(info)
        .enter()
        .append("div")
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


console.log("Loaded js.")
