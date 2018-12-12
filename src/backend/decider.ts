import {RandomComparer} from "./comparers/random_comparer";
import {Thing} from "./thing";
import {EasterEggComparer} from "./comparers/easter_egg_comparer";
import {QuantityComparer} from "./comparers/quantity_comparer";
import {SimilarMeaningComparer} from "./comparers/similar_meaning_comparer";
import {leftContextComparer} from "./comparers/left_context_comparer";
import {RightContextComparer} from "./comparers/right_context_comparer";
import {Utilities} from "./utilities";
import {KindOfComparer} from "./comparers/kind_of_comparer";
import {StatsComparer} from "./comparers/stats_comparer";


export class Decider {
  constructor() {

  }

  // Runs down the list of comparers until a result is returned
  chooseComparer(thing1: Thing, thing2: Thing) {
    let result: string;

    // Datamuse comparers are iterated in a random order to increase variety of responses
    let comparers = Utilities.shuffle([new RightContextComparer(),
      new leftContextComparer(), new SimilarMeaningComparer(), new StatsComparer(), new KindOfComparer()]);

    let easterEgg = new EasterEggComparer();
    result = easterEgg.compare(thing1, thing2);
    if (result != null) {
      return result;
    }

    let quantity = new QuantityComparer();
    result = quantity.compare(thing1, thing2);
    if (result != null) {
      return result;
    }

    // Choose either one or two datamuse responses to string together as a result
    let response: string;
    let count = 0;
    let numResponses = Math.random() < .33 ? 2 : 1;
    result = "";
    for (let i = 0; i < comparers.length; i++) {
      if (count == numResponses) {
        break;
      }
      response = comparers[i].compare(thing1, thing2);
      if (response != null) {
        result += " " + response;
        count++;
      }
    }
    if (result != "") return result;

    let randomComparer = new RandomComparer();
    return randomComparer.compare(thing1, thing2).toString();
  }

}
