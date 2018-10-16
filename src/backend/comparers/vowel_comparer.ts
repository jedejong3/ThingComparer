import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class VowelComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let thingOneVowels = 0;
    let thingTwoVowels = 0;

    // Iterate over the characters in the Things, and count the vowels
    for (let i = 0; i < ThingOne.name.length; i++) {
      if (vowels.indexOf((ThingOne.name.charAt(i))) > -1) {
        thingOneVowels += 1;
      }
    }

    for (let i = 0; i < ThingTwo.name.length; i++) {
      if (vowels.indexOf((ThingTwo.name.charAt(i))) > -1) {
        thingTwoVowels += 1;
      }
    }

    // If ThingOne has more vowels, then it wins. Otherwise, ThingTwo wins
    // TODO: What if the vowel counts are equal?
    if (thingOneVowels > thingTwoVowels) {
      this.winner = ThingOne.name;
      this.loser = ThingTwo.name;
    } else {
      this.winner = ThingTwo.name;
      this.loser = ThingOne.name;
    }

    // TODO: Add more responses
    let responses = [this.winner + " has more vowels, so it wins."];

    return responses[Utilities.getRandomInt(responses.length)];
  }
}
