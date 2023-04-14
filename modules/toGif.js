exports.toGif = async() => {
	
return new Promise(function(resolve, reject) {
		
var exec = require('child_process').exec;

var cmd = process.cwd()+'/ffmpeg/ffmpeg -i ./public/output/animation.mp4 -i ./public/output/palette.png -filter_complex "[0:v][1:v] paletteuse" -preset veryfast -loop 0 ./public/output/animation.gif';

exec(cmd, function(err, stdout, stderr) {

if (err)
reject(err);
else
resolve('success');

});

});
	
};