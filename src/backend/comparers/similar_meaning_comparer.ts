import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class SimilarMeaningComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    var data;
    if(ThingOne.qualIndex>ThingTwo.qualIndex) {
      data = ThingOne.datamuseResponse;

      }else
      {
        data = ThingTwo.datamuseResponse;
      }
      var response: string;

      data.forEach(function(Object){
        if(Object.word!=undefined) {
          response += Object.word + "...";
        }

    });
      response+="all of these things just bring me joy";
    return(response);
  }
}
