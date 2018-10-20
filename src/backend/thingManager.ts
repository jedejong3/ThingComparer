import {Thing} from "./thing";

export class thingManager {

  private _things:Array<Thing>;
  private _count:number;

  constructor() {
    this._things=new Array<Thing>();
  }


  add(thing:Thing) {
    this._things.push(thing);
    this._count ++;
  }


   inThings(name:String): Thing {
    this._things.forEach(function(Thing){
      if(Thing.name.toLowerCase()===name.toLowerCase()){
        Thing.iterateCount();
        return Thing;
      }

     });
     return null;
  }

  iterateCount(): void{
    this._count ++;
  }
}
