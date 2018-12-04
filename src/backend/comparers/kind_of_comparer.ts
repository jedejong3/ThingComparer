import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

export class KindOfComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let winner;
    if (ThingOne.qualIndex > ThingTwo.qualIndex) {
      winner = ThingOne;
    } else {
      winner = ThingTwo;
    }
    let response: string;
    response = null;
    if (winner.datamuseKindOf[0] == null) {
      return null;
    }

    if (winner.datamuseKindOf.length > 0) {
      for (var i = 0; i < winner.datamuseKindOf.length; i++) {
        if (winner.datamuseKindOf[i].score >= 0) {
          response = plural(winner.name) + " are my favorite kind of " + plural(winner.datamuseKindOf[i].word) + '. ';
          break;
        }
      }
    }
    return (response);
  }
}
