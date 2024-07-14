import { crearDeck, pedirCarta, valorCarta, acumularCartas } from './usecases';


const main = (() => {
  'use strict'
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A','J','Q','K'];

  /*let puntosJugador = 0,
      puntosComputador = 0;*/
  let puntosJugadores = [];

  //Referencias html
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#detener'),
        btnNuevo = document.querySelector('#nuevo'),
        mensajeResultado = document.querySelector('#mensaje-resultado'),
        puntosHtml = document.querySelectorAll('small'),
        cartasJugadores = document.querySelectorAll('.div-cartas');

  // Inicializar
  const iniciarJuego = (numeroJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for( let i=0; i<numeroJugadores; i++){
          puntosJugadores.push(0);
      }
  };
  
  // AcumularPuntos
  const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] += valorCarta(carta);
      puntosHtml[turno].innerText = puntosJugadores[turno];
  }
 
  //Eventos
  btnPedir.addEventListener('click', () => {
      btnNuevo.disabled = false;
      const carta = pedirCarta(deck);
      acumularPuntos(carta, 0);
      acumularCartas(carta, 0, cartasJugadores);
      if (puntosJugadores[0] > 21) {
          mensajeResultado.innerText = 'Has perdido'
          btnDetener.disabled = true;
          btnPedir.disabled = true;
      } else if (puntosJugadores[0] == 21) {
          mensajeResultado.innerText = 'Ganaste!'
          btnDetener.disabled = true;
          btnPedir.disabled = true;
      }
  });

  btnDetener.addEventListener('click', () => {
      btnNuevo.disabled = false;
      while (puntosJugadores[puntosJugadores.length-1] <=21) {
          const carta = pedirCarta(deck);
          const comprobar = puntosJugadores[puntosJugadores.length-1] + valorCarta(carta)
          if ( comprobar <= 21) {
              acumularPuntos(carta, puntosJugadores.length-1);
              acumularCartas(carta, puntosJugadores.length-1, cartasJugadores);
          } else {
              break;
          }
      }
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      if (puntosJugadores[puntosJugadores.length-1] > puntosJugadores[0]) {
          mensajeResultado.innerText = 'Has perdido'
      } else if (puntosJugadores[puntosJugadores.length-1]===puntosJugadores[0]) {
          mensajeResultado.innerText = 'Empate'
      } else {
          mensajeResultado.innerText = 'Ganaste!'
      }
  });

  btnNuevo.addEventListener('click', () => {
      iniciarJuego();
      puntosJugadores.forEach( (x, index) => {
          x = 0;
          puntosHtml[index].innerHTML = x;
          cartasJugadores[index].innerHTML = '';
      });
      mensajeResultado.innerText = ''
      
      btnDetener.disabled = false;
      btnPedir.disabled = false;
      btnNuevo.disabled = true;
      deck = crearDeck(tipos, especiales);
  });

  return {
      iniciarJuego: iniciarJuego()
  };
})();
