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
    var found =null;
    this._things.forEach(function(Thing, index, array){
      if(Thing.name.toLowerCase()===name.toLowerCase()){
        found=Thing;
        return (found);

      }

     });
    console.log("no item found!")
      return found;

  }

  iterateCount(): void{
    this._count ++;
  }
  get count(): number{
    return this._count;
  }

  printall():void{
    this._things.forEach(function(Thing){
      //console.log(Thing.name);
    });
  }
}
