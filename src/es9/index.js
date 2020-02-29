const obj = {
  name: 'Eleazar',
  age: 21,
  country: 'MX',
};

const { country, ...datosImportantes } = obj;

console.log(datosImportantes);
