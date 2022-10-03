export function validatorObject(objetoCliente) {
  return !Object.values(objetoCliente).every(values => values !== '');
}

//* every() devuelve verdadero o falso 
//* verdadero si los values no estan vacios