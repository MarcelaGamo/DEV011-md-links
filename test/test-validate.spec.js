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

