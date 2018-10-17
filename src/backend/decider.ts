import {AbstractComparer} from "./abstract_comparer";
import {RandomComparer} from "./comparers/random_comparer";
import {Thing} from "./thing";
import {VowelComparer} from "./comparers/vowel_comparer";

export class Decider {
  constructor() {

  }

  // Gather info about the Things and choose an appropriate comparison method
  choseComparer(thing1: Thing, thing2: Thing): string {

    let vowelComparer = new VowelComparer();
    let result = vowelComparer.compare(thing1,thing2);
    if (result != null) {
      return result;
    }

    let randomComparer = new RandomComparer();
    return randomComparer.compare(thing1,thing2).toString();

  }

}
