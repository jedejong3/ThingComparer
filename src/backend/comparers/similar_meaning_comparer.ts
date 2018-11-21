import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class SimilarMeaningComparer extends AbstractComparer {

  constructor() {
    super();
  }

  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let data;
    if(ThingOne.qualIndex>ThingTwo.qualIndex) {
      data = ThingOne.datamuseResponse;

      }else
      {
        data = ThingTwo.datamuseResponse;
      }
      var response="";

    for(var i =0; i<15; i++){
      if(data[i].word != null){
        response+=data[i].word+" ... "

      }
    }
    //   data.forEach(function(Object){
    //     if(Object.word.toString().prefix!='undefined') {
    //       response += Object.word + "...";
    //     }
    //
    // });
    console.log(data[0].word);
    console.log(response);
      response+="the ideas of these things makes me happy!";
    return(response);
  }
}
