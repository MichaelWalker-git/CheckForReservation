const express = require('express');
const http = require("https");
require('dotenv').config();

const EmailService = require('./email_service');

const options = {
	"method": "GET",
	"hostname": "module.lafourchette.com",
	"port": null,
	"path": "/en_GB/resa/pick-pax/10889-d34ca/54499",
	"headers": {
		"cookie": "PHPSESSID=d89ffe0efd31ca2e2648863b619c1712; AMCVS_20E8776A524455540A490D44%40AdobeOrg=1; _sdsat_customer_is_connected=false; _sdsat_restaurant_id_country=1; _sdsat_restaurant_id=10889; _sdsat_navigation_cc=15271-59f; _sdsat_navigator_user_agent=Mozilla/5.0 (Macintosh; _sdsat_navigation_url_host=; _sdsat_navigation_locale=en_GB; svisit=1; s_dl=1; c_m=undefinedTyped%2FBookmarkedTyped%2FBookmarkedundefined; channel=Typed%2FBookmarked; campaign=DA%3Apax; chcode=undefined; s_ev80=%5B%5B%27DA%253Apax%27%2C%271539468336578%27%5D%5D; s_ev81=%5B%5B%27DA%253Apax%27%2C%271539468336578%27%5D%5D; s_ev82=%5B%5B%27DA%253Apax%27%2C%271539468336579%27%5D%5D; s_ev83=%5B%5B%27DA%27%2C%271539468336580%27%5D%5D; s_ev84=%5B%5B%27DA%27%2C%271539468336581%27%5D%5D; s_ev46=%5B%5B%27DA%27%2C%271539468336581%27%5D%5D; prev_pn=pax; s_cc=true; AMCV_20E8776A524455540A490D44%40AdobeOrg=1406116232%7CMCIDTS%7C17818%7CMCMID%7C32128081669017661643457135653008062140%7CMCAAMLH-1540073136%7C9%7CMCAAMB-1540073136%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1539475536s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17825%7CvVersion%7C2.5.0; __utma=109442072.1518975881.1539468337.1539468337.1539468337.1; __utmc=109442072; __utmz=109442072.1539468337.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=46610107.2012306921.1539468337.1539468337.1539468337.1; __utmc=46610107; __utmz=46610107.1539468337.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt_UA-369939-74=1; __utmt_UA-369939-83=1; __utmb=109442072.4.10.1539468337; __utmb=46610107.4.8.1539469144274",
		"cache-control": "no-cache",
		"postman-token": "e6559e72-fd1b-456e-770e-efb9d034f8be"
	}
};
EmailService.sendEmail();

// const req = http.request(options,  (res)  => {
// 	const chunks = [];
//
// 	res.on("data", (chunk) => {
// 		chunks.push(chunk);
// 	});
//
// 	res.on("end",  () => {
// 		const body = Buffer.concat(chunks);
// 		if(body.availableNbPeopleList.length > 0){
// 			console.log("RESERVATION,send email !!!");
// 		}
//
// 		console.log(body.toString());
// 	});
// });
//
// req.end();
