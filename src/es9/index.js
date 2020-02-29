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

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-02-29');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
