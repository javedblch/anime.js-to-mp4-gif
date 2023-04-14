const timecut = require('timecut');

exports.toMP4 = async(data) => {
	
return new Promise(function(resolve, reject) {

timecut({
url: './public/output/animation.html',
viewport: {
width: data.width,
height:data.height
},
selector: '.container',
left: 0, 
top: 0,
right: 0, 
bottom: 0, 
width: data.width,
height:data.height,
fps: 30,  
launchArguments: ['--no-sandbox', '--disable-setuid-sandbox'],
duration: data.duration,       
output: './public/output/animation.mp4',
ffmpegPath: process.cwd()+'/ffmpeg/ffmpeg'
}).then(function () {
resolve('success');
});	

});

};