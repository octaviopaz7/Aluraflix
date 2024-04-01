let peliculas = [];

function agregarPelicula() {
  let peliFavorita = document.getElementById("pelicula").value.trim();

  if (peliFavorita.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    peliculas.push(peliFavorita);

    let listaPeliculas = document.getElementById("listaPeliculas");
  
    // Crear un elemento de imagen
    let imgElement = document.createElement("img");
    // Establecer el atributo src con la URL de la película
    imgElement.src = peliFavorita;
    // Añadir el elemento de imagen al div listaPeliculas
    listaPeliculas.appendChild(imgElement);
    console.log(peliculas);
    limpiarCampo();

  } else {
    alert("Por favor, ingresa un enlace de imagen válido.");
    limpiarCampo();
  }
}


function limpiarCampo() {
  let peliFavorita = document.getElementById("pelicula");
  peliFavorita.value = "";
}


// cuando toque imagen que te mande a trailer en youtube
