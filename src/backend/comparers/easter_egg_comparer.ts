import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";

/**
 * This class is designed to catch any 'special', pre-determined words and return a specific response for those words.
 */
export class EasterEggComparer extends AbstractComparer {

  compare(ThingOne: Thing, ThingTwo: Thing): string {

    //If one of the 'things' entered satisfies any one of the below cases, our app will return the respective "special" response.
    if (this.hasEasterEgg("me", ThingOne, ThingTwo)) {
      return 'Stop trying to compare yourself: you are valuable just as you are!!'
    }

    if (this.hasEasterEgg("shilad", ThingOne, ThingTwo)) {
      return "Shilad is the best!"
    }
    if (ThingOne.name.toLowerCase() == ThingTwo.name.toLowerCase()) {
      return "Y'know, I'm feeling conflicted on this one...it's almost like they're the same thing."
    }

    if (this.hasEasterEgg("****", ThingOne, ThingTwo)) {
      return "Chill with the words, homie."
    }

    if ((this.hasEasterEgg("apple", ThingOne, ThingTwo) || this.hasEasterEgg("apple", ThingOne, ThingTwo))
      && (this.hasEasterEgg("oranges", ThingOne, ThingTwo) || this.hasEasterEgg("orange", ThingOne, ThingTwo))
    ) {
      return "Wow, aren't you original--who would ever have thought of comparing apples and oranges?";
    }

    return null;
  }

  private hasEasterEgg(name, ThingOne: Thing, ThingTwo: Thing): boolean {
    if (ThingOne.name.toLowerCase() == name || ThingTwo.name.toLowerCase() == name) {
      return true;
    }
    return false;
  }
}
