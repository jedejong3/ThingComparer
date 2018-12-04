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
    let responses=[`${plural(winner.name)} are my favorite kind of ${plural(winner.datamuseKindOf[i].word)}. `,
    `When considering ${plural(winner.datamuseKindOf[i])}, I always think of ${plural(winner.name)}`,
    `I love ${plural(winner.datamuseKindOf[i])} and my favorite of all is ${plural(winner.name)}`
    ];

    if (winner.datamuseKindOf.length > 0) {
      for (var i = 0; i < winner.datamuseKindOf.length; i++) {
        if (winner.datamuseKindOf[i].score >= 0) {
          response = responses[Utilities.getRandomInt(responses.length)];
          break;
        }
      }
    }
    return (response);
  }
}
