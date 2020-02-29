const obj = {
  name: 'Eleazar',
  age: 21,
  country: 'MX',
};

const { country, ...datosImportantes } = obj;

console.log(datosImportantes);
// ----------------------------------------------------

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Hello World!'), 3000) : reject('fallo');
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log('termino'));
// --------------------------------------------
