import {AbstractComparer} from "../abstract_comparer"

export class RandomComparer extends AbstractComparer {
  constructor() {
    super()
  }

    compare(ThingOne,ThingTwo):String {
      let responses = [
        "Obviously " + this.winner.toString().toLowerCase() + " is better than " +
        this.loser.toString().toLowerCase() + ", everyone knows that.",
        "I like " + this.winner +  " better. Because I said so.",
        "I like " + this.winner + " better! " + this.loser + " sucks!",
        "Well, " + this.winner + " is mediocre, but I'll go with it anyway. I'm feeling spicy today."
      ];

      if (Math.random()<=0.5) {
        this.winner = ThingOne;
        this.loser = ThingTwo;
      } else {
        this.winner = ThingTwo;
        this.loser = ThingOne;
      }
      //a little extra fun thing

      //picks a response from the array of responses
      let response = responses[this.getRandomInt(responses.length)];

      if(this.winner.toLowerCase()==='me'||this.loser.toLowerCase()==='me'){
        response= 'Stop trying to compare yourself: you are valuable just as you are!!';
      }
      return response;
    }

   getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
