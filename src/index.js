const {
  isAbsolutePath,
  convertirAabsoluta,
  verificarExistenciaRuta,
  esMarkdown,
  leerContenido,
  encontrarLinks,
  validateLink,
} = require('./function');

const mdLinks = (route, options) => {
  return new Promise((resolve, reject) => {
    const { validate, stats } = options || {};

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
        const links = encontrarLinks(content, rutaValidada);

        if (validate) {
          const validatePromises = links.map(validateLink);
          Promise.all(validatePromises)
            .then((validatedLinks) => {
              if (stats) {
                const totalLinks = validatedLinks.length;
                const uniqueLinks = new Set(validatedLinks.map((link) => link.href)).size;
                const brokenLinks = validatedLinks.filter((link) => link.ok === 'fail').length;
                const statsResult = { total: totalLinks, unique: uniqueLinks, broken: brokenLinks };
                console.log(statsResult);
                resolve(statsResult);
              } else {
                resolve(validatedLinks);
              }
            })
            .catch((err) => reject(err));
        } else {
          if (stats) {
            const totalLinks = links.length;
            const uniqueLinks = new Set(links.map((link) => link.href)).size;
            const statsResult = { total: totalLinks, unique: uniqueLinks };
            console.log(statsResult);
            resolve(statsResult);
          } else {
            resolve(links);
          }
        }
      })
      .catch((err) => reject(err));
  });
};

module.exports = mdLinks;



  