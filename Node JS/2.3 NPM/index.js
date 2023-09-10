/*
//Generate silly name:
var generateName = require("sillyname");

const name = generateName();
console.log(`My name is ${name}`);
*/

//Generate Superheroes names:
//const superheroes = require("superheroes"); //CJS
//or
import superheroes from "superheroes"; //ESM ,need to add type:module in package.json to use this.

console.log(`I am ${superheroes.random()}!!`);
