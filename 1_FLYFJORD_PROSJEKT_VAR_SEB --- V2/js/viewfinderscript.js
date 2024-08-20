// JS Dokument BARE for Canvas View-Finder

//Canvas Elementet for Favicon på nettsiden (VIKTIG: Har fremkalt koden og tatt en skjermdump som deretter er plassert som Favicon logo på nettsiden!)
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arcstyle="#3b4555";
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fillStyle = "#3b4555";
ctx.font = "40px sans-serif";
ctx.fillText('F', 83, 63); //F for Flyfjord [Enkel logo]
ctx.stroke();