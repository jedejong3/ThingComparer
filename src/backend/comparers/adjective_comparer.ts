import { AbstractComparer } from "../abstract_comparer";
import { Thing } from "../thing";
import { Utilities } from "../utilities";
import { plural } from 'pluralize'

export class AdjectiveComparer extends AbstractComparer {

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
    response = null;
    if (winner.datamuseModified.length == 0) {
      return null;
    }

    if (winner.datamuseModified.length > 0) {
      for (var i = 0; i < winner.datamuseModified.length; i++) {
        if (winner.datamuseModified[i].score >= 15000 && winner.datamuseModified[i].tags.indexOf("n") !=-1) {
          var combined = `${winner.name} ${plural(winner.datamuseModified[i].word)}`;
          var responses = [
            `I like ${combined}.`,
            `${Utilities.capitalize(winner.name)}... as in `+combined+`? I like the sound of that.`,
            `I choose ${winner.name} because I like `+combined+`.`,
            `What could be ${winner.name}? How about... `+combined+`? Yeah, that sounds pretty good to me.`,
            `I'll take `+combined+` any day of the week. I pick ${winner.name}!`,
            `Doesn't "${winner.name}" just make you think of ` + combined + `?`,
            `I can't hear "${winner.name}" without thinking "`+combined+`".`,
          ]
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
