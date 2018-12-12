import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

/**
 * This class makes use of the 'similar meaning' call to Datamuses' API.
 */
export class SimilarMeaningComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let data;
    let winnerName;
    //Sets data to be the datamuse data from the winning 'thing'.
    if (ThingOne.qualIndex > ThingTwo.qualIndex) {
      data = ThingOne.datamuseRelated;
      winnerName = ThingOne.name;
    }
    else {
      data = ThingTwo.datamuseRelated;
      winnerName = ThingTwo.name;
    }

    if (data.length <= 0) {
      return null;
    }

    //Creates the first half of response with the winning 'thing'.
    var response = `What ${this.conjugate('does', 'do', winnerName)}
      ${winnerName}make me think of?`;

    //The second half of the response includes a list of related words that are pulled directly
    //from the list of words returned by Datamuse.
    var wordsFound = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].score >= 0) {
        response += data[i].word + ", ";
        wordsFound++;
      }
      if (wordsFound > 4) {
        break;
      }
    }
    if (wordsFound >= 2) {
      response += `the ideas of these things makes me happy!`;
      return (response);
    }
    else {
      return null;
    }
  }
}
