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

console.log("Loaded js.")
