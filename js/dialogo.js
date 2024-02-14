window.addEventListener("load", function () {
  document.querySelector(".container").classList.add("mostrar");
});

var nuevosContenidos = [
  "Primero que todo espero te encuentres bien.",
  "Segundo todos después de Red Bull.",
  "Tu querido novio te ha hecho este detalle.",
  "Y yo estoy aquí para dártelo.",
  "Espero sea de tu agrado todo el contenido.",
  "Si tienes dudas sobre su uso, hácelo saber.",
  "Yo no tengo idea, solo estoy aquí programado xd.",
  "Pero tu novio es el capo.",
  "En fin, comenzemos.",
  "Ponte el casco y abrocha el cinturón.",
  "3...",
  "2...",
  "1..."
];

var indiceActual = 0;

function mostrarLetraPorLetra(texto, elemento) {
  let index = 0;

  function mostrarSiguienteLetra() {
    elemento.textContent += texto[index];
    index++;

    if (index < texto.length) {
      setTimeout(mostrarSiguienteLetra, 40); 
    } else {
      elemento.classList.add("mostrar");
    }
  }

  mostrarSiguienteLetra();
}

function cambiarContenido() {
  var contenidoDialogo = document.getElementById("contenidoDialogo");

  contenidoDialogo.classList.remove("mostrar");

  setTimeout(function() {
    contenidoDialogo.textContent = "";
    mostrarLetraPorLetra(nuevosContenidos[indiceActual], contenidoDialogo);
    indiceActual++;

    if (indiceActual === nuevosContenidos.length) {
      window.location.href = "menu.html";
      return;
    }

    contenidoDialogo.classList.add("mostrar"); 
  }, 1000);
}
