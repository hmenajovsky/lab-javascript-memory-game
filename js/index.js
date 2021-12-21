import { MemoryGame } from './memory.js'


const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener( 'click', (e) => {
      memoryGame.pickedCards.push(card);
      let card1 = Object.values(memoryGame.pickedCards[0].attributes)[1].value;
      let card2 = Object.values(memoryGame.pickedCards[1].attributes)[1].value;
      if (memoryGame.checkIfPair(card1,card2)=== true) {
        memoryGame.pickedCards[0].classList.add('turned');
        memoryGame.pickedCards[1].classList.add('turned');
        memoryGame.pickedCards = [];
        if (memoryGame.pairsGuessed === 12) {
          alert('You won!!!')
        }
      }
      else {
        memoryGame.pickedCards[0].classList.add('turned');
        memoryGame.pickedCards[1].classList.add('turned');
        setTimeout(() => {
          memoryGame.pickedCards[0].classList.remove('turned');
          memoryGame.pickedCards[1].classList.remove('turned');
          memoryGame.pickedCards = [];
      },1000);   
      }
  });
});
});