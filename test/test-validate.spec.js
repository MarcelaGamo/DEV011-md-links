const { validateLink } = require('../src/function');
const axios = require('axios');


jest.mock('axios');

test('debería validar un enlace correctamente', () => {
  const link = {
    href: 'https://example.com',
    text: 'Ejemplo',
    file: '/ruta/ejemplo.md',
  };
});
// it('debe validar los enlaces utilizando: validate true', () => {
//   const Path = 'README2.md';
//   return mdLinks(Path, true).then((result) => {
//     result.forEach((link) => {
//       expect(link).toHaveProperty('href');
//       expect(link).toHaveProperty('text');
//       expect(link).toHaveProperty('file');
//       expect(link).toHaveProperty('status');
//       expect(link).toHaveProperty('ok');
//     });
//   });
// });

