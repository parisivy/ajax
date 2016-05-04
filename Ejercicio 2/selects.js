// Defino qué pasa al cargarse la página

window.onload = function () {

// // // Hago un request para obtener la lista de países // // //

	// Utilizo el objeto de Javascript XMLHttpRequest para hacer una comunicación HTTP

	var request = new XMLHttpRequest();

	// Defino la URL con la que se debe realizar la comunicación
	
	var url = "http://pilote.techo.org/admin/?do=api.getPaises";

	// Utilizo el método onreadystatechange para detallar qué pasa según el estado de la comunicación

	request.onreadystatechange = function () {

		var done = 4; // Indica que el pedido de comunicación se completó

		var ok = 200; // Indica que la respuesta a nuestro pedido de comunicación fue exitoso

		if (request.status === ok && request.readyState === 4) {

			console.log(request.responseText);

			var countries = JSON.parse(request.responseText).contenido;

			console.log(countries)

			var countryNames = [];

			var countryId = [];

			for (x in countries) {
				countryNames.push(x);
				countryId.push(countries[x]);
			}

			console.log(countryNames);

			console.log(countryId);

			for (i=0; i < countryNames.length; i++) {

				var selectCountries = document.querySelectorAll("#country")[0];

				var option = document.createElement("option");

				var countryText = document.createTextNode(countryNames[i]);

				selectCountries.appendChild(option);

				option.appendChild(countryText);

				option.setAttribute("value",countryId[i])
			}			
			
		};

	};

	// Especifico el tipo de pedido de comunicación que voy a realizar

	request.open("GET",url);

	// Envío el pedido de comunicación

	request.send();


// // // Hago un request para obtener la lista de provincias // // //

	
	var next = document.querySelectorAll("#next")[0];

	// Defino qué pasa al hacerse click sobre el botón con el método addEventListener

	next.addEventListener("click", function () {

		var request2 = new XMLHttpRequest;

		var form = document.querySelectorAll("form")[0];

		console.log(form);

		var countrySelected = form["nacionalidad"].value;

		console.log(countrySelected);

		var url2 = "​http://pilote.techo.org/admin/?do=api.getRegiones?idPais=" + countrySelected;

		request2.onreadystatechange = function () {

			var done = 4;

			var ok = 200;

			if (request2.status === ok && request2.readyState === done) {

				var pronvinces = JSON.parse(request2.responseText)

				console.log(pronvinces);
			}

		}

		request2.open("GET",url2);

		request2.send();

	});


}


