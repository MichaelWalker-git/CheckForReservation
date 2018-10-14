const http = require("https");

const textPhone = () => {
	const options = {
		"method": "POST",
		"hostname": "studio.twilio.com",
		"port": null,
		"path": "/v1/Flows/FWf7883e09caa24cfbd9a983a3ae8320a7/Executions",
		"headers": {
			"content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
			"authorization": process.env.TWILIO_AUTH,
			"cache-control": "no-cache",
			"postman-token": "ecf1c256-9af8-3a78-9b4b-418320d1878e"
		}
	};

	const req = http.request(options,  (res) => {
		const chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
			const body = Buffer.concat(chunks);
			console.log(body.toString());
		});
	});

	req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"Body\"\r\n\r\nThere are reservations available\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"To\"\r\n\r\n17145150242\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"From\"\r\n\r\n16572422621\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
	req.end();
};

export default textPhone;