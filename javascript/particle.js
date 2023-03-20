/*particlesJS.load(@dom-id, json, @callback (optional));*/

particlesJS('particle', {
	"particles": {
		"number": {
			"value": 500
		},
		"color": {
			"value": "#fff"
		},
      "shape": {
        "type": "circle",
      },
		"size": {
			"value": 2
		},
		"move":{
			"bounce": true,
			"speed": 1,
			"direction": "none"
		},
		"line_linked": {
			"distance": 70,
			"width": 1,
			"color": "#fff",
		},	
	},
	"interactivity":{
		"events":{
			"onhover":{
				"enable": false,
				"mode": ["grab", "repulse"],
				
			},
			"onclick":{
				"enable": false,
				"mode": "bubble"
			}
		},
		"modes":{
			"repulse":{
				"distance": 50,
				"duration": 10,
			},
			"bubble":{
				"size": 10,
				"duration": 0.25,
			},
			"repulse":{
				"distance": 30,
				"size": 6,
				"duration": 100,
		}
		}
	}
	
});

//https://www.youtube.com/watch?v=qK3cgD09Qf0
//https://github.com/VincentGarreau/particles.js/
//Exporta JSON con config
//https://vincentgarreau.com/particles.js/