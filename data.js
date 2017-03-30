// Initialization
var s = document.getElementById("svg");
var ns = "http://www.w3.org/2000/svg";
var height = $(window).height() * 0.9;
var width = $(window).width();
s.height = height;
s.width = width;

// Background
var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("style", "fill:rgb(16,16,16)");
s.appendChild(bg);

console.log("Loaded js.")
