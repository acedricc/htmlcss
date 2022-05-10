// Les tableaux en javascript
var tableauxFruit=['Apple','Banana'];
// console.log(tableauxFruit.length);
// console.log(tableauxFruit)
// console.log(tableauxFruit[1])
tableauxFruit.push('Fraises','Litchi')
console.log(tableauxFruit);
tableauxFruit.pop();
console.log(tableauxFruit);
tableauxFruit.shift()
console.log(tableauxFruit);
tableauxFruit.unshift('Pasteque','Orange');
console.log(tableauxFruit);
position=tableauxFruit.indexOf('Fraises')
console.log(position)

var tableauxPays=['France','Benin','Espagne'];
// console.log(tableauxPays.length);
// console.log(tableauxPays);
// console.log(tableauxPays[1]);
tableauxPays.push('Suisse','Grece')
console.log(tableauxPays);
tableauxPays.pop();
console.log(tableauxPays);
tableauxPays.shift();
console.log(tableauxPays);
tableauxPays.unshift('Bulgari','Tunisie');
console.log(tableauxPays);
var position=tableauxPays.indexOf('Benin');
console.log(position);


var tableauxChiffres=[94,28,229];
// console.log(tableauxChiffres);
// console.log(tableauxChiffres[2]);
// console.log(tableauxChiffres.length)
// console.log(tableauxChiffres.length[-1]);
tableauxChiffres.push('286','254',475);
console.log(tableauxChiffres);
tableauxChiffres.pop();
console.log(tableauxChiffres);
tableauxChiffres.shift();
console.log(tableauxChiffres);
tableauxChiffres.unshift('112','118')
console.log(tableauxChiffres);
var position=tableauxChiffres.indexOf(28);
console.log(position);
var splice=tableauxChiffres.splice(position,2);
console.log(splice);
