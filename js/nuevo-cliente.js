// import { nuevoCliente } from "./api";
import { nuevoCliente } from './api.js';
import { mostrarAlerta } from './utils/show-alert.js';
import { validatorObject } from './utils/validator-object.js';
(()=>{
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCliente);

  function validarCliente(event) {
    // console.log(this);
    // const form = new FormData(this);
    // form.get('nombre');
    event.preventDefault();
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;
    //* alt

    //* Vamos a construir el objeto
    //* ES6 2015
    const cliente = {
      name,
      email,
      telefono,
      empresa
    };
    // const cliente = {
    //   nombre: nombre,
    //   email: email,
    //   telefono: telefono,
    //   empresa: empresa
    // };
    if(validatorObject(cliente)) {
      // console.log('Los campos son requeridos!');
      mostrarAlerta('Los campos son requeridos!');
      return;
    }
    nuevoCliente(cliente);
  }
})()