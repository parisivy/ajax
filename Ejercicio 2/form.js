// Defino qué pasa cuando se carga la página

window.addEventListener("load", function () {

	// Busco al botón de "siguiente" con el método querySelectorAll

	var next = document.querySelectorAll("#next")[0];

	// Defino qué pasa al hacerse click sobre el botón con el método addEventListener

	next.addEventListener("click", function () {

		// Busco al div que indica la primera parte del formulario con el método querySelectorAll y defino que desaparezca

		var selectCountry = document.querySelectorAll(".initialForm")[0];

		selectCountry.style.display = "none";

		// Busco el div que contiene al resto del formulario

		var restForm = document.querySelectorAll (".restForm")[0];

		restForm.style.display = "inherit";
	})

	
});