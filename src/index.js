function newFunction(name, years_old, country) {
  var name = name || 'Eleazar';
  var years = years_old || 18;
  var country = country || 'MX';
  console.log(name, years, country);
}

newFunction();

// es6

function newFunction2(name = 'Eleazar', years_old = 22, country = 'MX') {
  console.log(name, years_old, country);
}

newFunction2('Pepe', 18);

// -------------------------------------------------

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// --------------------------------------------------

let lorem = 'Frase epica 1 \n' + 'La otra frase epica';
console.log(lorem);

// es6

let lorem2 = `Frases epicas para aprender 
Necesitamos muchas frases
`;

console.log(lorem2);
// ----------------------------------------------------

let carro = {
  marca: 'Toyota',
  modelo: 'Corola',
  year: 2005,
};

console.log(carro.marca, carro.modelo, carro.year);

// es6
let { marca, modelo, year } = carro;
console.log(marca, modelo, year);

let team1 = ['pepe', 'raul', 'eleazar'];
let team2 = ['veronica', 'karla', 'yesica'];

let education = ['David', ...team1, ...team2];

console.log(education);
// -----------------------------------------------------
