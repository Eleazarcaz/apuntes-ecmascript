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
