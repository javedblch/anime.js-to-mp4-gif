exports.toPalette = async() => {
	
return new Promise(function(resolve, reject) {
		
var exec = require('child_process').exec;

var cmd = process.cwd()+'/ffmpeg/ffmpeg -i ./public/output/animation.mp4 -filter_complex "[0:v] palettegen" -preset veryfast ./public/output/palette.png';

exec(cmd, function(err, stdout, stderr) {

if (err)
reject(err);
else
resolve('success');

});

});
	
};