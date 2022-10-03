export function mostrarAlerta(mensaje) {

  const alerta = document.querySelector('.form-text');
  alerta.classList.add('error', 'text-center', 'mt-5');
  alerta.innerHTML = `
    <span>${mensaje}</span>
  `;

}