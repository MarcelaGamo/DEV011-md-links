const { isAbsolutePath, convertirAabsoluta, verificarExistenciaRuta, esMarkdown, leerContenido, encontrarLinks, validateLink} = require('./function');

const mdLinks = (route, validate) => {
  return new Promise((resolve, reject) => {
    // Valida y convierte la ruta a absoluta
    const rutaValidada = isAbsolutePath(route) ? route : convertirAabsoluta(route);
    console.log('Ruta validada:', rutaValidada);

    // Verifica si la ruta existe en el comp
    if (!verificarExistenciaRuta(rutaValidada)) {
      reject(new Error('La ruta no existe.'));
    }

    // Verifica si es Markdown
    if (!esMarkdown(rutaValidada)) {
      reject(new Error('El archivo no es Markdown.'));
    }

    // Lee el contenido del archivo
    leerContenido(rutaValidada)
      .then((content) => {

    // Encuentra los links dentro del documento
        const links = encontrarLinks(content, rutaValidada);

    //Hito2 -- implementando validate
        if (validate) {
            const validatePromises = links.map(validateLink);
            Promise.all(validatePromises)
              .then((validatedLinks) => resolve(validatedLinks))
              .catch((err) => reject(err));
          } else {
            resolve(links);
          }
        })
        .catch((err) => reject(err));
    });
  };
  
  module.exports = mdLinks;
  