const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v3/timezone",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		"X-RapidAPI-Key": "ac40a89d57msh539caae758e05fdp1376f5jsn7ecabd3512ad"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});