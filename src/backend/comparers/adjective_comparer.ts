import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

export class AdjectiveComparer extends AbstractComparer {

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
    if (winner.datamuseModified[0] == null) {
      return null;
    }

    if (winner.datamuseModified.length > 0) {
      for (var i = 0; i < winner.datamuseModified.length; i++) {
        if (winner.datamuseModified[i].score >= 30000 && winner.datamuseModifies.tags == 'n') {
          response = 'I like ' + winner.name + " " + plural(winner.datamuseModified[i].word) + '. ';
          break;
        }
      }
    }
    return (response);
  }
}
