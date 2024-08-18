const VideoPlayer = (() => {
    // Función privada
    const setVideo = (url, id) => {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    };
  
    // Retorna una función pública
    return {
      play: (url, id) => {
        setVideo(url, id);
      }
    };
  })();

  class Multimedia {
    #url; // Closure para proteger el atributo
  
    constructor(url) {
      this.#url = url;
    }
  
    get url() {
      return this.#url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }

  
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      VideoPlayer.play(this.url, this.id);
    }
  
    setInicio(tiempo) {
      const newUrl = `${this.url}?start=${tiempo}`;
      document.getElementById(this.id).setAttribute("src", newUrl);
    }
  }

  
  // URLs de ejemplo
const musicaUrl = "https://www.youtube.com/embed/5PSNL1qE6VY/VIDEO_ID_MUSICA";
const peliculaUrl = "https://www.youtube.com/embed/5PSNL1qE6VY/VIDEO_ID_PELICULA";
const serieUrl = "https://www.youtube.com/embed/5PSNL1qE6VY/VIDEO_ID_SERIE";

// IDs de los iframes
const musicaId = "musica";
const peliculaId = "pelicula";
const serieId = "serie";

// Creando instancias
const musica = new Reproductor(musicaUrl, musicaId);
const pelicula = new Reproductor(peliculaUrl, peliculaId);
const serie = new Reproductor(serieUrl, serieId);

// Mostrando los videos en el documento HTML
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio de algún video (ejemplo con serie)
serie.setInicio(60); // Comienza en el segundo 60
