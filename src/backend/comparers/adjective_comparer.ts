import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";

export class AdjectiveComparer extends AbstractComparer {

  constructor() {
    super();
  }


  compare(ThingOne: Thing, ThingTwo: Thing): string {
    let winner;
    if(ThingOne.qualIndex>ThingTwo.qualIndex){
      winner=ThingOne;
    }else{
      winner=ThingTwo;
    }
    let response:string;

    if (winner.datamuseModified.length > 0) {
      for(var i =18 ; i<winner.datamuseModified.length; i++){
        if((winner.datamuseModified[i].tags=="n")){
          response = 'I like ' + winner.name +" "+winner.datamuseModified[i].word+'. ' + response;
          break;
        }
      }

    }
    return(response);
  }
}
