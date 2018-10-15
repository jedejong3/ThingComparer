import {AbstractComparer} from "./abstract_comparer";
import {RandomComparer} from "./comparers/random_comparer";
import {Thing} from "./thing";

export class Decider {
  constructor() {

  }

  // Gather info about the Things and choose an appropriate comparison method
  choseComparer(thing1: Thing, thing2: Thing): AbstractComparer {

    return new RandomComparer()

  }

}
