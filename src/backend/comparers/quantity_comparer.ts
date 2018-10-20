import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class VowelComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    if(ThingOne.count>5||ThingTwo.count>5){
      return("Don't you think you've tried that one enough for now?");
    }

    return null;
  }
}
