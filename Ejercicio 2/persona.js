
// Defino qué pasa cuando se carga la página

window.addEventListener("load",function() {

	// Busco al botón de "siguiente" con el método querySelectorAll

	var submit = document.querySelectorAll("#submit")[0];

	// Defino qué pasa al hacerse click sobre el botón con el método addEventListener

	submit.addEventListener("click", function (event) {

		// Utilizo el objeto de Javascript XMLHttpRequest para hacer una comunicación HTTP

		var request = new XMLHttpRequest();

		// Defino la URL con la que se debe realizar la comunicación

		var url = "http://pilote.techo.org/admin/?do=api.registrarPersona";

		// Utilizo el método onreadystatechange para detallar qué pasa según el estado de la comunicación

		request.onreadystatechange = function () {

			var done = 4; // Indica que el pedido de comunicación se completó

			var ok = 200; // Indica que la respuesta a nuestro pedido de comunicación fue exitoso

			if (request.status === ok && request.readyState === 4) {

				if(JSON.parse(request.responseText).error = "true") {					

					var errors = JSON.parse(request.responseText).contenido

					var errorList = [];

					errors.forEach(function(error) {
						errorList.push(error)
					});

					var errorPosition = ["oficina","nombres","apellido","email","password","cpassword","dni","fechaNacimiento","sexo","celular","nacionalidad","provincia", "ciudad"]

					errorList.forEach(function(error) {
						
						if (error !== undefined) {

						var index = errorList.indexOf(error)

						var formError = errorPosition[index];

						var form = document.querySelectorAll("form")[0];

						form[formError].style.color = "red";

						}
					})
				}
			}
		}

		// Especifico el tipo de pedido de comunicación que voy a realizar

		request.open("POST",url,true);

		// Envío el pedido de comunicación

		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		
	
	});
});
