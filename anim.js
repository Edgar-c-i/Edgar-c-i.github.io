// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
setTimeout(ocultarTitulo, 15000);
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A veces uno conoce personas que llegan haciendo ruido", time: 15 },
  { text: "Y otras veces aparecen personas como vos", time: 18 },
  { text: "Camina tu vocación vestida de medicina", time: 27 },
  { text: "que se quedan sin darse cuenta", time: 32 },
  { text: "entre conversaciones simples", time: 35 },
  { text: "audios random", time: 41 },
  { text: "bromas tontas", time: 47 },
  { text: "y momentos que terminan haciendo bien", time: 54 },
  { text: "No sé si alguna vez te dijeron esto", time: 59 },
  { text: "pero tenés una forma muy linda de estar presente", time: 67 },
  { text: "Como si hablar contigo hiciera más liviano el día", time: 72 },
  { text: "Capaz no dimensionás lo que transmitís", time: 78 },
  { text: "pero hay personas que tienen esa paz rara", time: 83 },
  { text: "que no necesita esforzarse para sentirse especial ", time: 91 },
  { text: "Y sí", time: 97 },
  { text: "te quiero", time: 104 },
  { text: "De esa forma tranquila", time: 108 },
  { text: "honesta", time: 114 },
  { text: "sin vueltas", time: 119 },
  { text: "sin presión", time: 123 },
  { text: "pero real", time: 126 },
  { text: "Sabia que no nos ibamos a ver ais que...", time: 129 },
  { text: "te hice esto :)", time: 134 },
  { text: "Feliz cumpleaños, Giss", time: 140 },
  { text: "Ojalá la vida te devuelva un poco de todo lo bueno que generás en los demás", time: 144 },
  { text: "Con mucho cariño: Yo ", time: 144 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
