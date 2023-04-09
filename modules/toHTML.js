const fs = require('fs');

exports.toHTML = async(data) => {
	
return new Promise(function(resolve, reject) {

let html='<html><body style="margin:0px">';

html +='<link rel="stylesheet" href="../stylesheets/style.css" /><link 	href="https://fonts.googleapis.com/css?family=Graduate:300,400,700" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Graduate:300,400,700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">';

html +='<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>';

html +=data.html;

html +='<script>';

html +='window.addEventListener("DOMContentLoaded", () => { let timeline = anime.timeline({loop: false,autoplay: true}); ' + data.animation + ' initiate(); }); ';

html +='</script>';

html +='</body></html>';

fs.writeFileSync("./public/output/animation.html", html);

resolve('success');

});

};