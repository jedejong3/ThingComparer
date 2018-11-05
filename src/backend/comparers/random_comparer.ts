import {AbstractComparer} from "../abstract_comparer"
import {Thing} from "../thing";
import {Utilities} from '../utilities';
import {thingManager} from "../thingManager";


export class RandomComparer extends AbstractComparer {
  constructor() {
    super()
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {


    if (ThingOne.qualIndex>ThingTwo.qualIndex) {
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
       ${this.conjugate('it','them')} anyway. I'm feeling spicy today.`,
      `Honestly, ${this.winner} just ${this.conjugate('brings', 'bring', this.winner)} me more joy.`,
      `When considering the cosmic value of ${this.winner} and ${this.loser}, its clear to see that ${this.winner} 
      ${this.conjugate('is', 'are', this.winner)} far more important`,
      `Just as water flows through a river, so to ${this.conjugate('does','do', this.winner)} ${this.winner} 
      ${this.conjugate('flow', 'flows', this.winner)} through the lives of all of us`,
      `You foolish fool! Who could possibly think that ${this.loser} could even compare to ${this.winner}!`,
      `I find ${this.winner} to be more ap-peel-ing`,
      `I go absolutely bananas for ${this.winner}`,
      `From my perch here on this cloud, its easy to see the superior merit of ${this.winner}.`,
      `When push comes to shove, I have to go with ${this.winner}`,
      `When you can achieve a true peace of mind, the answer will become clear`,


    ];

    //picks a response from the array of responses
    return responses[Utilities.getRandomInt(responses.length)];


  }
}
