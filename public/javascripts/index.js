window.addEventListener("DOMContentLoaded", () => {
	
let timeline = anime.timeline({
loop: false,
autoplay: true
})
		
function initiate() {	
	
timeline.add({
    targets: '.svg',
    scale: [0, 1],
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 0
}).add({
    targets: '.company',
	"translateX": [-150, 0],
    opacity: [0,1],
    duration: 2000,
    endDelay: 0
}).add({
    targets: '.slogan',
	"translateY": [50, 0],
    opacity: [0,1],
    duration: 1000,
    endDelay: 0
})

};

initiate();


const convert = async () => {
	
let data = {
html: document.querySelectorAll('.container')[0].outerHTML,
animation: initiate.toLocaleString(),
duration: Number(timeline.duration/1000),
width: document.querySelectorAll('.container')[0].offsetWidth,
height: document.querySelectorAll('.container')[0].offsetHeight,
}

const response = await fetch("/convert-to-video", {
method: "POST",
headers: {
"content-type": "application/json",
},
body: JSON.stringify(data),
});

};

document.querySelectorAll('.button')[0].onclick = convert;
	
});