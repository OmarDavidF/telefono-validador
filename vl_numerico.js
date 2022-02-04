function telephoneCheck(str) {
  let validador = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return validador.test(str);
}

console.log(telephoneCheck("555-5555"));
