import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

/**
 * This class makes use of the 'statistically signifciant' call to Datamuses' API. A list of words that
 * are statistically associated with the query word in the same piece of text is returned.
 */
export class StatsComparer extends AbstractComparer {

  private lastResponseIndex = -1; //Tracks the last response.

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let winner;
    //Sets data to be the datamuse data from the winning 'thing'.
    if (ThingOne.qualIndex > ThingTwo.qualIndex) {
      winner = ThingOne;
    } else {
      winner = ThingTwo;
    }
    let response: string;
    if (winner.datamuseStats.length <= 0) {
      return null;
    }

    //Takes the highest scoring word and returns it as the most 'statistically significant'.
    if (winner.datamuseStats.length > 0) {
      for (var i = 0; i < winner.datamuseStats.length; i++) {
        if (winner.datamuseStats[i].score >= 0) {
          var responses = [
            `You know, when I think of ${plural(winner.name)}, I think of ${plural(winner.datamuseStats[i].word)}. And I really like thinking of 
            ${plural(winner.datamuseStats[i].word)}.`,
            `I just ran the numbers and apparently, ${plural(winner.name)} is a trigger word for ${plural(winner.datamuseStats[i].word)}. LOVE it.`,
            `I can't hear ${winner.name} without thinking ${plural(winner.datamuseStats[i].word)}. 
            "${plural(winner.datamuseStats[i].word).charAt(0).toUpperCase()} ${plural(winner.datamuseStats[i].word).slice(1)} are my favorite!`
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
