 export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
   
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
