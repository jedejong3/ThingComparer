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
      if(ThingOne.name.toLowerCase()=="shilad"){
        ThingOne.qualIndex=1000;
      }
      if(ThingTwo.name.toLowerCase()=="shilad"){
        ThingTwo.qualIndex=1000;
      }
      return "Shilad is the best!"
    }
    if (ThingOne.name.toLowerCase() == ThingTwo.name.toLowerCase()) {
      return "Y'know, I'm feeling conflicted on this one...it's almost like they're the same thing."
    }

    if (this.hasEasterEgg("****", ThingOne, ThingTwo)) {
      if(ThingOne.name.toLowerCase()=="****"){
        ThingOne.qualIndex=-1000;
      }
      if(ThingTwo.name.toLowerCase()=="****"){
        ThingTwo.qualIndex=-1000;
      }
      return "Chill with the words, homie."

    }

    if ((this.hasEasterEgg("apple", ThingOne, ThingTwo) || this.hasEasterEgg("apple", ThingOne, ThingTwo))
      && (this.hasEasterEgg("oranges", ThingOne, ThingTwo) || this.hasEasterEgg("orange", ThingOne, ThingTwo))
    ) {
      return "Wow, aren't you original--who would ever have thought of comparing apples and oranges?";
    }
    if ((this.hasEasterEgg("cats", ThingOne, ThingTwo) || this.hasEasterEgg("cat", ThingOne, ThingTwo))
      && (this.hasEasterEgg("dogs", ThingOne, ThingTwo) || this.hasEasterEgg("dog", ThingOne, ThingTwo))
    ) {
      return "Ah yes, the ancient feud of cats and dogs. This could have been easily settled eons ago if only I had " +
        "been consulted--cats are far superior. Their purrs and warm snuggles bring me so much joy.";
    }
    if ((this.hasEasterEgg("cat", ThingOne, ThingTwo))){
      if(ThingOne.name.toLowerCase()=="cat"){
        ThingOne.qualIndex=1000;
      }
      if(ThingTwo.name.toLowerCase()=="cat"){
        ThingTwo.qualIndex=1000;
      }
      return("I love cats!");
    }

    if (this.hasEasterEgg("Macalester", ThingOne, ThingTwo)) {
      return "MA-CA-LE-STER! IS WON-DER-FUL!";
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
