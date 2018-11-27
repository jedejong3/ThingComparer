import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class SimilarMeaningComparer extends AbstractComparer {

  constructor() {
    super();
  }


  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let data;
    //sets data to be the datamuse data from the winning thing
    if(ThingOne.qualIndex>ThingTwo.qualIndex) {
      data = ThingOne.datamuseRelated;

      }else
      {
        data = ThingTwo.datamuseRelated;
      }
      var response="";
    if(data[0]==null){
      return null;
    }

  //prints only a few of the related words
    for(var i =0; i<15; i+=4){
      if(data[i].word != null){
        response+=data[i].word+" ... "

      }
    }
    console.log(data[0].word);
    console.log(response);
      response+="the ideas of these things makes me happy!";
    return(response);
  }
}
