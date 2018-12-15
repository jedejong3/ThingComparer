import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

export class RightContextComparer extends AbstractComparer {

  private lastResponseIndex = -1;

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
    if (winner.datamuseModifies != null && winner.datamuseModifies.length <= 0) {
      return null;
    }

    let response: string;
    for (var i = 0; i < winner.datamuseModifies.length; i++) {
      if (winner.datamuseModifies[i].score >= 0) {
        var combined = `${winner.datamuseModifies[i].word} ${plural(winner.name)}`;
        var responses = [
          `I like ${combined}.`,
          `Doesn't ${winner.name} just make you think of ${combined}?`,
          `I can't hear ${winner.name} without thinking ${combined}.`
        ];
        //Picks a response from the array of responses, so long as the response isn't the same as the last random response.
        let responseIndex = Utilities.getRandomInt(responses.length);
        while (responseIndex == this.lastResponseIndex) {
          responseIndex = Utilities.getRandomInt(responses.length);
        }
        this.lastResponseIndex = responseIndex;
        response = responses[responseIndex];
        break;
      }
    }

    return (response);
  }
}
