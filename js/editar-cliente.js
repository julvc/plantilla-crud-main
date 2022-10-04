import { obtenerClienteId, editarCliente } from "./api.js";
import { mostrarAlerta } from './utils/show-alert.js';
import { validatorObject } from './utils/validator-object.js';

(()=> {
  //* Inputs del formulario Editar Cliente
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  document.addEventListener('DOMContentLoaded', async () => {
    const parametroURL = new URLSearchParams(window.location.search);
    // console.log(parametroURL);
    // console.log(parametroURL.get('id'));
    const idMongo = parametroURL.get('id');
  
    // obtenerClienteId(idMongo).then(cliente => {
    //   console.log(cliente);
    // }).catch();
    try {
      const cliente = await obtenerClienteId(idMongo);
      // console.log(cliente);
      mostrarCliente(cliente);
    } catch (error) {
      throw error;
    }

    //* Obtenemos el formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', validarCliente);
  
  });

  function mostrarCliente(cliente) {
    const { name, email, empresa, telefono, _id } = cliente;
    nombreInput.value = name;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = _id;
  };

  function validarCliente(event) {
    event.preventDefault();
    //* Construir el objeto para actualizar en la base de datos
    const cliente = {
      name: nombreInput.value,
      email: emailInput.value,      
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      _id: idInput.value
    }

    if(validatorObject(cliente)) {
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }
    editarCliente(cliente);
  }
})();