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