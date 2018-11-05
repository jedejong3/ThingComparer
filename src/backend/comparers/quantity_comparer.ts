import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class QuantityComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    console.log(ThingOne.count);
    if (ThingOne.count% 5==0) {

      return (`Don't you think you've tested ${ThingOne.name} enough for now?`);
    }
    if (ThingTwo.count % 5 ==0) {
      return (`Don't you think you've tested ${ThingTwo.name} enough for now?`);
    }

    return null;
  }
}
