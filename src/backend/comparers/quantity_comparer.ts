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

      return (`Don't you think you've tried ${ThingOne.name} enough for now?`);
    }
    if (ThingTwo.count % 5 ==0) {
      return (`Don't you think you've tried ${ThingTwo.name} enough for now?`);
    }
    if(ThingOne.count==3){
      return(`I tire of ${ThingOne.name}.`)
    }
    if(ThingTwo.count==3){
      return(`I tire of ${ThingTwo.name}.`)
    }
    if(ThingOne.count%8==0||ThingTwo.count%8==0){
      return(`Seriously, be more original.`)
    }

    return null;
  }
}
