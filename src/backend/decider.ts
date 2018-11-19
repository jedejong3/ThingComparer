import {AbstractComparer} from "./abstract_comparer";
import {RandomComparer} from "./comparers/random_comparer";
import {Thing} from "./thing";
import {VowelComparer} from "./comparers/vowel_comparer";
import {EasterEggComparer} from "./comparers/easter_egg_comparer";
import {QuantityComparer} from "./comparers/quantity_comparer";

export class Decider {
  constructor() {

  }

  // Gather info about the Things and choose an appropriate comparison method
  async choseComparer(thing1: Thing, thing2: Thing): string {


    let result: string;

    let quantity = new QuantityComparer();
    result = await quantity.compare (thing1, thing2);
    if(result != null){
      return result;
    }
    let easterEgg = new EasterEggComparer();
    result = easterEgg.compare (thing1, thing2);
    if (result != null) {
      return result;
    }


    //
    // let vowelComparer = new VowelComparer();
    // result = vowelComparer.compare(thing1, thing2);
    // if (result != null) {
    //   return result;
    // }

    let randomComparer = new RandomComparer();
    return randomComparer.compare(thing1, thing2).toString();

  }

}
