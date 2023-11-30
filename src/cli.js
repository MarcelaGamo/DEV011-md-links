const mdLinks = require('./index');

mdLinks('README.md')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
