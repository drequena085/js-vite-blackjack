/**
 * This functions returns how much the card worth
 * @param {string} carta (required)
 * @returns {Number} card's value as a number
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
};

//export default valorCarta;
