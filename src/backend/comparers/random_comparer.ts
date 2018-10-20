import {AbstractComparer} from "../abstract_comparer"
import {Thing} from "../thing";
import {Utilities} from '../utilities';

export class RandomComparer extends AbstractComparer {
  constructor() {
    super()
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {

    if (Math.random() <= 0.5) {
      this.winner = ThingOne.name;
      this.loser = ThingTwo.name;
    } else {
      this.winner = ThingTwo.name;
      this.loser = ThingOne.name;
    }

    let responses = [
      "Obviously " + this.winner.toString().toLowerCase() + " is better than " +
      this.loser.toString().toLowerCase() + ", everyone knows that.",
      "I like " + this.winner + " better. Because I said so.",
      "I like " + this.winner + " better! " + this.loser + " sucks!",
      "Well, " + this.winner + " is mediocre, but I'll go with it anyway. I'm feeling spicy today."
    ];

    //picks a response from the array of responses
    return responses[Utilities.getRandomInt(responses.length)];


  }
}