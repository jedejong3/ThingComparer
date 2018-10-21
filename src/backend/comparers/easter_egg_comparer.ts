import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";

export class EasterEggComparer extends AbstractComparer {

  compare(ThingOne: Thing, ThingTwo: Thing): string {

    if (this.hasEasterEgg("me", ThingOne, ThingTwo)) {
      return 'Stop trying to compare yourself: you are valuable just as you are!!'
    }

    if (this.hasEasterEgg("shilad", ThingOne, ThingTwo)) {
      return "Shilad is the best!"
    }
    if(ThingOne.name.toLowerCase() == ThingTwo.name.toLowerCase()){
      return "Y'know, I'm feeling conflicted on this one...its almost like they're the same thing"
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
