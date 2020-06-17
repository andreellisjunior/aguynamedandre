document.addEventListener('DOMContentLoaded', () => {
  particleground(document.getElementById("particle"), {
    density: 10500,
    particleRadius: 4,
    proximity: 125,
    parallaxMultiplier: 10,
    dotColor: "#acf0ff",
    lineColor: "#222"
  });
  
  // let intro = document.getElementById("intro");
  // intro.style.marginTop = - intro.offsetHeight * 1.7 + 'px';

$("h1").animate({opacity: "1"}, 2500);

setTimeout(() => {
  $("h3").addClass("h3-is-showing");
}, 2000);

setTimeout(() => {
  $("h4").addClass("h4-is-showing")
}, 3000);

setTimeout(() => {
  $(".btn-container a").fadeIn()
}, 3700);

}, false);