const path = require('path');
const fs = require('fs');
const axios = require('axios');

// Verifica y convierte la ruta a absoluta
const isAbsolutePath = (route) => path.isAbsolute(route);
const convertirAabsoluta = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Verifica la existencia de la ruta
const verificarExistenciaRuta = (route) => fs.existsSync(route);

// Verifica si es Markdown
const esMarkdown = (route) => {
  const extension = path.extname(route).toLowerCase();
  const extensionesMarkdown = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
  return extensionesMarkdown.includes(extension);
};

// Lee el contenido del archivo
const leerContenido = (route) => {
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Encuentra los links dentro del documento
const encontrarLinks = (content, file) => {
  const regex = /\[(.*?)\]\((.*?)\)/g;
  const links = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, text, href] = match;
    links.push({ href, text, file });
  }
  return links;
};
//Validate
const validateLink = (link) => {
  return new Promise((resolve) => {
    axios.head(link.href)
      .then((response) => {
        link.status = response.status;
        link.ok = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';
        resolve(link);
      })
      .catch(() => {
        link.status = 404;
        link.ok = 'fail';
        resolve(link);
      });
  });
};

module.exports = {
  isAbsolutePath,
  convertirAabsoluta,
  verificarExistenciaRuta,
  esMarkdown,
  leerContenido,
  encontrarLinks,
  validateLink,
};
