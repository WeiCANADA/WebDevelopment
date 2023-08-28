//var generateName = require('sillyname');
import generateName from 'sillyname';
//import superhero from 'superhero';
import superhero from 'superheroes';
var sillyName = generateName();
// console.log(sillyName);
// console.log('My silly name is ' + sillyName);
console.log(`My silly name is  ${sillyName}.`);/* In JavaScript, template literals (which allow you to embed expressions within the string) require the use of backticks (`). */

var mySuperHeroName = superhero.random();
console.log(`My superhero name is  ${mySuperHeroName}.`);
