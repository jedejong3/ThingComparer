import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

export class StatsComparer extends AbstractComparer {

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
    let response: string;
    if (winner.datamuseStats.length <= 0) {
      return null;
    }

    if (winner.datamuseStats.length > 0) {
      for (var i = 0; i < winner.datamuseStats.length; i++) {
        if (winner.datamuseStats[i].score >= 0) {
          var combined = `${winner.datamuseStats[i].word} ${plural(winner.name)}`;
          var responses = [
            `You know, when I think of "${plural(winner.name)}", I think of "${plural(winner.datamuseStats[i].word)}". And I really like thinking of 
            ${plural(winner.datamuseStats[i].word)}.`,
            `I just ran the numbers and apparently, "${plural(winner.name)}" is a trigger word for "${plural(winner.datamuseStats[i].word)}". LOVE it.`,
            `I can't hear "${winner.name}" without thinking "${plural(winner.datamuseStats[i].word)}". 
            "${plural(winner.datamuseStats[i].word)}" are my favorite!`
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

    }
    return (response);
  }
}
