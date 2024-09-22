const http = require('https');

const options = {
	method: 'GET',
	hostname: 'weatherapi-com.p.rapidapi.com',
	port: null,
	path: '/current.json?q=53.1%2C-0.13',
	headers: {
		'x-rapidapi-key': '47e99f2aabmshbfe79c25533fc70p1aea9cjsnc7f9bc81ee69',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();