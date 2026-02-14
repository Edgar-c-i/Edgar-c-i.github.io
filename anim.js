// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
setTimeout(ocultarTitulo, 15000);
// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Creo que ya se porque te gustan tanto las flores blancas", time: 15 },
  { text: "porque entre flores blancas y sueños que no se rinden", time: 18 },
  { text: "Camina tu vocación vestida de medicina", time: 27 },
  { text: "con la pureza de quien nacio para sanar", time: 32 },
  { text: "Lo digo con justa exprecion de causa", time: 35 },
  { text: "porque sin darte cuenta, hiciste mas ameno mi 2025", time: 41 },
  { text: "Con charlas,  risas y momentos ", time: 47 },
  { text: "por eso,  estoy orgulloso de vos", time: 54 },
  { text: "de tu constancia,  tu esfuerzo", time: 59 },
  { text: "De esa beca ganada a pulso", time: 67 },
  { text: "de cada batalla que querias abandonar y no lo hiciste", time: 72 },
  { text: "quiza haya algo peor que los sueños perdidos", time: 78 },
  { text: "perder el deseo de soñar otra vez", time: 83 },
  { text: "por eso,  nunca dejes de creer ", time: 91 },
  { text: "no sueltes aquello que enciende tu alma", time: 97 },
  { text: "que nunca lo olvides lo que me contaste,  porque yo no lo voy a olvidar", time: 104 },
  { text: "lucha por cada meta, hasta volver realidad tus anhelos", time: 108 },
  { text: "la vez pasada pase toda la tarde tomando terere y escuchando musica", time: 114 },
  { text: "ya no me preocupa poner musica, y con 1 termo de terere me lleno", time: 119 },
  { text: "y por un tiempo pense que extrañaba estar asi ", time: 123 },
  { text: "y la realidad no", time: 126 },
  { text: "lo que exraño las tardes eternas", time: 129 },
  { text: "el ruido de la tela,  la musica mesclado con carcajadas", time: 134 },
  { text: "las conversaciones que se volvian cada vez mas profundas a medida que avanzaba el tiempo", time: 140 },
  { text: "extraño que todo nos importaba, pero al mismo tiempo nada nos preocupaba", time: 144 },
  { text: "Extraño estar ahí, sin mirar la hora en el terere time", time: 150 },
  { text: "sintiendo que ese momento era nuestro y de nadie más", time: 154 },
  { text: "y es muy loco,  porque con este pensamiento entendi algo", time: 159 },
  { text: "los mejores recuerdos nunca estaban en el taller o el terere", time: 164 },
  { text: "estaban en las risas,  en los gritos, en las pausas para hablar de la vida", time: 170 },
  { text: "esa rara sensacion que me trasmitia que por almenos un rato ", time: 174 },
  { text: "todo estaba bien", time: 179 },
  { text: "y ahora cada vez que veo chocolares lacta, flores blancas, medias", time: 185 },
  { text: "Sin querer, te voy a encontrar ahí ", time: 190 },
  { text: "porque hay personas que se quedan viviendo en los detalles", time: 195 },
  { text: "y vos sos una de ellas", time: 200 },
  { text: "por favor siempre sonrei y nunca olvides ", time: 205 },
  { text: "Que cuando sonries se forman unas comillas en cada extremo de tu boca", time: 210 },
  { text: "Feliz dia del amor y la amistad con mucho cariño Yop", time: 215 },
  { text: "Ya se acabo :)", time: 250 },
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
