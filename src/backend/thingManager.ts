import {Thing} from "./thing";

export class thingManager {

  private _things:Array<Thing>;
  private _count:number;

  constructor() {
    this._things=new Array<Thing>();
  }


  set newThing(thing:Thing) {
    this._things.push(thing);
    this._count ++;
  }


   inThings(name:String): Thing {
    this._things.forEach(function(Thing, index, array){
      if(Thing.name.toLowerCase()===name){
        Thing.iterateCount();
        return Thing;
      }

     })
     return null;
  }

  iterateCount(): void{
    this._count ++;
  }
}
