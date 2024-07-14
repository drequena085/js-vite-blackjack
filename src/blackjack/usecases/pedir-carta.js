/**
 * This function takes a card and deletes it from the deck
 * @param {Array<string>} deck (required)
 * @returns {string} The card's name taken
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No quedan cartas en la baraja';
    }
    return deck.pop();
}

//export default pedirCarta;