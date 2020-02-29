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

{
  var globalVar = 'Global var';
}

{
  //  let solo puede ser accedido por el scope declarado
  // ejemplo este bloque de codigo
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

// las constantes no se pueden volver asignar valores
const a = 'b';
const a = 'a';
// --------------------------------------------------

// parametros en objetos
let name = 'Eleazar';
let country = 'MX';
// es5
let obj = { name: 'Eleazar', country: 'mx' };

//es6
let obj2 = { name, country };
console.log(obj2);
// ---------------------------------------------------

let productos = [
  { name: 'sabritas', precio: 15 },
  { name: 'coca', precio: 16 },
];

let mostrarNombreProductos = productos.map(function(producto) {
  return producto.name;
});

console.log(mostrarNombreProductos);

// es6 arrow functions
const producto = ({ name }) => name;
// let mostrarNombreProductosArrow = productos.map((producto) => producto.name);
let mostrarNombreProductosArrow = productos.map(producto);

console.log(mostrarNombreProductosArrow);
// -------------------------------------------------

// promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Uppsss!');
    }
  });
};

helloPromise()
  .then((resolve) => {
    console.log(resolve);
  })
  .then(() => {
    console.log('Puedo hacer otra cosa');
  })
  .catch((error) => {
    console.error(error);
  });

const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve('Hola');
  } else {
    reject('algo mal');
  }
});

promesa
  .then((dato) => {
    console.log(dato);
  })
  .catch((err) => {
    console.log(err);
  });
