const mdLinks = require('./index');
//ojo,aqui lo que hice fue complementar 
const args = process.argv.slice(2);
const path = args[0];
const validate = args.includes('--validate') || args.includes('-v');

mdLinks("README.md", validate)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
