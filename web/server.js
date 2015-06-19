var http = require("http"),
	fs = require('fs');

fs.readFile('./index.html',function (err, html) {
	if (err)  {
	throw err;
	}
	console.log("read file ok");
	console.log(html);

	http.createServer(function(request, response) {
		console.log("connect");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();
		}).listen(process.env.PORT || 8888);	
	});	
