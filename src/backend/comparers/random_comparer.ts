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
      `Obviously ${this.winner} ${this.conjugate('is','are')} better than ${this.loser}, everyone knows that.`,
      `I like ${this.winner} better. Because I said so.`,
      `I like ${this.winner} better! ${this.loser} ${this.conjugate('sucks','suck',this.loser)}!`,
      `Well, ${this.winner} ${this.conjugate('is','are')} mediocre, but I'll go with
       ${this.conjugate('it','them')} anyway. I'm feeling spicy today.`
    ];

    //picks a response from the array of responses
    return responses[Utilities.getRandomInt(responses.length)];


  }
}
