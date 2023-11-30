const mdLinks = require("../src/index.js");
const path = "README.md";

  //describe('mdLinks', () => {
  // it('should...', () => {
  //   console.log('FIX ME!');
  // });

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
    
    
 
  



