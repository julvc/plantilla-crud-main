const URL = 'http://localhost:3000/api/users';

//* Get obtener los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(URL);
    const clientes = await resultado.json();
    return clientes.data; //* array
  } catch (error) {
    throw error;
  }
};

export const obtenerClienteId = async (id) => {
  //* http://localhost:3000/api/users/633b5c2b2c34da7842a08663
  try {
    const resultado = await fetch(`${URL}/${id}`);
    const cliente  = await resultado.json();
    // console.log(cliente.data);
    return cliente.data;
  } catch (error) {
    throw error;
  }
};

//* POST crear un cliente tiene que ser un objeto 
export const nuevoCliente = async (cliente) => {
  console.log(cliente);
  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href='index.html';
  } catch (error) {
    throw error;
  }
};

//* Actualizamos el Cliente
/**
 * * Este método recibe el cliente con toda su informacion
 * @param {*} cliente 
 */
export const editarCliente = async (cliente) => {
  console.log(cliente);
  try {
    await fetch(`${URL}/${cliente._id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};

//* Eliminar Cliente
export const eliminarCliente = async (id) => {
  console.log(id);
  try {
    //* http://localhost:3000/clientes/2
    await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};