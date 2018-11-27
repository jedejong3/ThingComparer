import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";
import {Utilities} from "../utilities";
import {plural} from 'pluralize'

export class ModifierComparer extends AbstractComparer {

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
    if(winner.datamuseModifies[0]==null){
      return null;
    }

    if (winner.datamuseModifies.length > 0) {
      for(var i = 0 ; i<winner.datamuseModifies.length; i++){
        if((winner.datamuseModifies[i].tags=="n")&&Utilities.stopwords.indexOf(winner.datamuseModifies[i])!=-1){
          response = 'I like ' + winner.datamuseModifies[i].word+ " "+ plural(winner.name)+'. ';
          break;
        }
      }

    }
    return(response);
  }
}
