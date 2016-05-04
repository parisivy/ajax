// Defino qué pasa al cargarse la página

window.addEventListener("load",function() {

	// Utilizo el objeto de Javascript XMLHttpRequest para hacer una comunicación HTTP

	var req = new XMLHttpRequest();

	// Defino la URL con la que se debe realizar la comunicación
	
	var url = "​http://pilote.techo.org/admin/?do=api.getRegiones?idPais="+ ;

	// Utilizo el método onreadystatechange para detallar qué pasa según el estado de la comunicación

	req.onreadystatechange = function () {

		var done = 4; // Indica que el pedido de comunicación se completó

		var ok = 200; // Indica que la respuesta a nuestro pedido de comunicación fue exitoso

		if (req.status === ok && req.readyState === 4) {

			console.log(req.responseText);

			var countries = JSON.parse(req.responseText).contenido;

			var countryList = [];

			for (x in countries) {
				countryList.push(x);
			}

			countryList.forEach(function(a) {

				// Busco el primer select

				var selectCountries = document.querySelectorAll("#regions")[0];

				var option = document.createElement("option");

				var countryText = document.createTextNode(a);

				selectCountries.appendChild(option);

				option.appendChild(countryText);

			})
		}

	};	

	// Especifico el tipo de pedido de comunicación que voy a realizar

	req.open("GET",url);

	// Envío el pedido de comunicación

	var params = "1"

		request.send(params);
	
});