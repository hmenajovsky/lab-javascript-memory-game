 export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
  const shuffledCards = [];
  let random;
  const cardsCopy = [...this.cards];
  if (this.cards) {
  for ( let  i = 0; i < this.cards.length; i++) {
   random = Math.floor(Math.random() * cardsCopy.length);
   shuffledCards.push(cardsCopy[random]);
   cardsCopy.splice(random,1);
  }
  return shuffledCards;
  } else {
    return undefined;
  }
 }

  checkIfPair(card1, card2) {
  this.pairsClicked +=1;    
  if (card1 === card2) {
    this.pairsGuessed +=1;
    return true;     
  } else {
    return false;
  }
  }

  checkIfFinished() {
  return this.pairsGuessed < (this.cards.length) / 2 ? false : true; 
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
