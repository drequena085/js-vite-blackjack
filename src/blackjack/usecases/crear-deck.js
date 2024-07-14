import _ from 'underscore';

/**
 * This function create a new deck for the game
 * @param {Array<string>} tipos Example: ['C', 'D', 'H', 'S'] (required)
 * @param {Array<string>} especiales Example: ['A', 'J', 'Q', 'K'] (required)
 * @returns {Array<string>} returns a shuffle deck
 */
export const crearDeck = (tipos, especiales) => {
    if ( (!tipos || tipos.length === 0) || (!especiales || especiales.length === 0)) throw new Error ('Missing arguments');
    let deck = [];
    for (let i = 2; i<=10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let especial of especiales) {
        for (let tipo of tipos) {
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck)
}

//export default crearDeck;