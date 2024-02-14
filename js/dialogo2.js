window.addEventListener("load", function () {
  document.querySelector(".container").classList.add("mostrar");
});

var nuevosContenidos = [
  "Bienvenida a Abi's Section.",
  "Donde están las versiones de Abi.",
  "Tu magnífico novio me las ha mostrado.",
  "Y en todas te ves super que bella.",
  "Por favor, escoge una Abi's version.",
  "Y sigue las demás instrucciones.",
  "Nos veremos pronto, besitos."
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
      indiceActual = 0;
    }

    contenidoDialogo.classList.add("mostrar"); 
  }, 1000);
}

var imagen1 = document.getElementById("imagen1");
var imagen2 = document.getElementById("imagen2");
var imagen3 = document.getElementById("imagen3");
var imagen4 = document.getElementById("imagen4");
var imagen5 = document.getElementById("imagen5");

imagen1.addEventListener("click", function() {
    window.location.href = "memoria.html";
});
imagen2.addEventListener("click", function() {
    window.location.href = "linea_temporal.html";
});
imagen3.addEventListener("click", function() {
    window.location.href = "flor.html";
});
imagen4.addEventListener("click", function() {
    window.location.href = "puzzle.html";
});
imagen5.addEventListener("click", function() {
    window.location.href = "ahorcado.html";
});
