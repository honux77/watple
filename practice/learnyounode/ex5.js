var fs = require('fs');

fs.readdir(process.argv[2],function(err, data) {
	if(err) throw err;
	var dirs = data.toString();
	var files = dirs.split(",");
	for (var i = 0; i < files.length; i++) {
		if (files[i].endsWith("." + process.argv[3]))
			console.log(files[i]);
	}
});

if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function(str, suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	}
}
