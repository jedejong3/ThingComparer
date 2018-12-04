import {AbstractComparer} from "./abstract_comparer";
import {RandomComparer} from "./comparers/random_comparer";
import {Thing} from "./thing";
import {VowelComparer} from "./comparers/vowel_comparer";
import {EasterEggComparer} from "./comparers/easter_egg_comparer";
import {QuantityComparer} from "./comparers/quantity_comparer";
import {SimilarMeaningComparer} from "./comparers/similar_meaning_comparer";
import {AdjectiveComparer} from "./comparers/adjective_comparer";
import {ModifierComparer} from "./comparers/modifier_comparer";
import {Utilities} from "./utilities";
import {KindOfComparer} from "./comparers/kind_of_comparer";

export class Decider {
  constructor() {

  }

  // Gather info about the Things and choose an appropriate comparison method
  chooseComparer(thing1: Thing, thing2: Thing) {
    let result: string;
    let comparers = Utilities.shuffle([new QuantityComparer(),new ModifierComparer(),
      new AdjectiveComparer(), new SimilarMeaningComparer(), new KindOfComparer() ]);

    let easterEgg = new EasterEggComparer();
    result = easterEgg.compare (thing1, thing2);
    if (result != null) {
      return result;
    }

    let response:string;
    let count = 0;
    result = "";
    for (let i = comparers.length-1;i>=0;i--) {
      if (count == 2) {
        break;
      }
      response = comparers[i].compare(thing1,thing2);
      if (response != null) {
        result += " " + response;
        count++;
      }
    }
    if (result != null) return result;

    let randomComparer = new RandomComparer();
    return randomComparer.compare(thing1, thing2).toString();
  }

}
