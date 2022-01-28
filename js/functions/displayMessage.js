export function displayMessage(target, message, messageStyle) {
  const container = document.getElementById(target);

  container.innerHTML = `<div class="${messageStyle} text-center">${message}</div>`;
}