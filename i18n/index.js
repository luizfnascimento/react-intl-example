const translations = require.context("./", true, /\.yml$/)

console.log(translations);
translations.forEach(translations)
