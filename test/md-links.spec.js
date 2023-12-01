const mdLinks = require("../src/index.js");
const path = "README.md";

  //describe('mdLinks', () => {
  // it('should...', () => {
  //   console.log('FIX ME!');
  // });

  //Pruebas Hito1

  describe("mdLinks", () => {
    it("Debe devolver una promesa", () => {
      expect(mdLinks("./README.md")).toBeInstanceOf(Promise);
    });
  });

  it("Debe rechazar cuando la ruta no existe", () => {
    return mdLinks(
      "/Users/marcelagaravito/Desktop/LABORATORIA/DEV011-md-links/NOEXISTE.md"
    ).catch((error) => {
      expect(error.message).toMatch(/la ruta no existe/i);
    });
  });
  it("Debe rechazar cuando el archivo no es Markdown", () => {
    return mdLinks("README.md").catch((error) => {
      expect(error.message).toMatch(/El archivo no es Markdown/i);
    });
  });
  
  it("Debe devolver enlaces con propiedades específicas", () => {
    const expectedFilePath = require.resolve("../README.md");
    return mdLinks("README.md").then((result) => {
      expect(result).toHaveLength(77); 
      expect(result[0]).toEqual({
        href: expect.any(String),
        text: expect.any(String),
        file: expectedFilePath,
      });
    });
  });

  it('debería devolver un array de objetos con propiedades href, text y file', () => {
    const ePath = '/Users/marcelagaravito/DEV011-md-links/README2.md';
    return mdLinks(ePath).then((result) => {
      expect(result).toEqual([
        {
          href: 'https://luisrrleal.com/blog/como-hacer-peticiones-http-en-javascript',
          text: 'Peticiones',
          file: ePath,
        },
        {
          href: 'https://es.javascript.info/promise-basics',
          text: 'Promesas',
          file: ePath,
        },
        {
          href: 'https://nodejs.org/api/fs.html',
          text: 'Node',
          file: ePath,
        },
        {
          href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
          text: 'Asincronia',
          file: ePath,
        },
      ]);
    });
  });
  
  it('debe validar los enlaces utilizando: validate true', () => {
    const Path = 'README2.md';
    return mdLinks(Path, true).then((result) => {
      result.forEach((link) => {
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('text');
        expect(link).toHaveProperty('file');
        expect(link).toHaveProperty('status');
        expect(link).toHaveProperty('ok');
      });
    });
  });
  
    
    
 
  



