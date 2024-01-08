window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

  try {

    const response = await fetch('http://localhost:3031/api/movies')
    const { meta, data } = await response.json()


    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      const link = document.createElement("a");
      link.textContent = "Ver más";
      link.setAttribute('href', `formulario.html?movie=${movie.id}`);
      link.setAttribute('class','botonAgregar')

      const star = document.createElement("i");
      star.setAttribute('class','fa-regular fa-star');
      star.style.color = 'red';
      star.style.cursor = 'pointer';
      
      star.addEventListener("click", function() {
        star.classList.toggle('fa-regular');
        star.classList.toggle('fa-solid');
        
          // Obtener el array actual de favoritos del localStorage
          
          let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
          

          if (star.classList.contains('fa-solid fa-star')) {
            favoritos.push(movie.id);
            console.log(movie.id)
          } else {
            favoritos = favoritos.filter(favId => favId !== movie.id);
          }
  
          // Guardar el array actualizado en localStorage
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          console.log(movie.id)
          console.log(favoritos)
        });
      



      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      card.appendChild(link);
      card.appendChild(star);
     
    });

    
    console.log(localStorage)


  } catch (error) {
    console.log(error);
  }

};
