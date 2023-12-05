const mdLinks = require('./index');
const path = "README2.md";
const validate = require('./index');

//const args = process.argv.slice(2);
//const path = args[0];
//const validate = args.includes('--validate') || args.includes('-v');

mdLinks(path, validate)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

  
