#!/usr/bin/env node
const mdLinks = require('./index');
const args = process.argv.slice(2);
const path = args[0];
const validate = args.includes('--validate') || args.includes('-v');
const stats = args.includes('--stats') || args.includes('-s');

mdLinks(path, { validate, stats })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
