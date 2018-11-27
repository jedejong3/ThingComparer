import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class SimilarMeaningComparer extends AbstractComparer {

  constructor() {
    super();
  }


  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let data;
    let winnerName;
    //sets data to be the datamuse data from the winning thing
    if(ThingOne.qualIndex>ThingTwo.qualIndex) {
      data = ThingOne.datamuseRelated;
      winnerName = ThingOne.name;
    }
    else {
      data = ThingTwo.datamuseRelated;
      winnerName = ThingTwo.name;
    }

    if(data[0]==null){
      return null;
    }

    var response = "What " + this.conjugate('does', 'do', winnerName) + " " +
                    winnerName + " make me think of? ";

    //prints only the related words with highest scores
    var wordsFound = 0;
    for(var i =0; i<6; i++){
      if(data[i].score >= 30000){
        response+=data[i].word+" ... ";
        wordsFound++;
      }
    }
    if (wordsFound == 1) {
      response+="the idea of this thing makes me happy!";
      return (response);
    }
    else if (wordsFound >= 2) {
      response+="the ideas of these things makes me happy!";
      return (response);
    }
    else {
      return null;
    }
  }
}
