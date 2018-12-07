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

    if (winner.datamuseKindOf.length <= 0 || winner.datamuseKindOf == null) {
      return null;
    }
    let responses;
    let thisKindOf;

    for (var i = 0; i < winner.datamuseKindOf.length; i++) {
      if (winner.datamuseKindOf[i].score >= 0) {
        thisKindOf=winner.datamuseKindOf[i].word;
        responses = [
          `${Utilities.capitalize(plural(winner.name))} are my favorite kind of ${plural(thisKindOf)}. `,
          `When considering ${plural(thisKindOf)}, I always think of ${plural(winner.name)}`,
          `I really like ${plural(thisKindOf)} and ${plural(winner.name)} are my favorite!`];
        response = responses[Utilities.getRandomInt(responses.length)];
        break;
      }
    }
    return (response);
  }
}
