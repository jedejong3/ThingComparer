import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

/**
 * This class returns a response if the user types in the same 'thing' multiple times.
 */
export class QuantityComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {

    //If the user types the same 'thing' five times.
    if (ThingOne.count % 5 == 0){
      return (`I'm getting kind of tired of ${ThingOne.name}.`)
    }

    if (ThingTwo.count % 5 == 0) {
      return (`I'm getting kind of tired of ${ThingTwo.name}.`)

    }


    //If the user types the same 'thing' nine times.
    if (ThingOne.count % 9 == 0) {
      return (`Don't you think you've tried ${ThingOne.name} enough for now?`);
    }
    if( ThingTwo.count % 9 == 0){
      return (`Don't you think you've tried ${ThingTwo.name} enough for now?`);

    }

    //If the user types the same 'thing' fourteen times.
    if (ThingOne.count % 14 == 0 || ThingTwo.count % 14 == 0) {
      return (`Seriously, be more original.`)
    }

    return null;
  }
}
