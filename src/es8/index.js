const puestos = {
  frontend: 'Eleazar',
  backend: 'Mata',
  design: 'Alejandra',
};
// devuelve un array de elementos del objeto
const elementos = Object.entries(puestos);
console.log(elementos, elementos.length);

// devuelve un array con los valores de las propiedades
const valores = Object.values(puestos);
console.log(valores, valores.length);
// ---------------------------------------------

const fruta = 'platano';

console.log(fruta.padStart(fruta.length + 5, 'rico '));
console.log(fruta.padEnd(fruta.length + 5, ' rico'));
// -----------------------------------------------------

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve('hello world'), 3000)
      : reject('Salio algo mal');
  });
};

helloWorld()
  .then((dato) => {
    console.log(dato);
  })
  .catch((error) => {
    console.log(error);
  });

// mejor manera para escribir asyn-await
const helloAsync = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (err) {
    console.log(err);
  }
};

helloAsync();
